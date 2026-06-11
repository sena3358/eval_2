/**
 * materialApi.js
 * Service dédié aux matériels dans GLPI avec support hybride v1/v2.3.
 *
 * Dépendances :
 *   - createGlpiApi (v1) / createGlpiV2Api (v2.3)
 *   - Services de résolution d'entités (fabricants, localisations, etc.)
 */

import { getSessionToken } from '../../services/auth/authSession.js'
import { createGlpiApi, createGlpiV2Api } from '../../services/testApi'
import { findOrCreateManufacturer } from '../manufacturers/manufacturerApi.js'
import { findOrCreateCategory } from '../categories/categoryApi.js'
import { findOrCreateLocation } from '../locations/locationApi.js'
import { findOrCreateModel } from '../models/modelApi.js'
import { findUserByName } from '../users/userApi.js'
import { normalizeRow, deduplicateRows } from '../../services/import/csvParser.js'

const MATERIAL_COLUMNS = ['Name', 'Status', 'Location', 'Manufacturer', 'Item_Type', 'Model', 'Inventory_Number', 'User']

/** Si false, les lignes CSV exactement identiques sont ignorées avant import. */
const ALLOW_DUPLICATES = true

// Types d'items qui bénéficient de la modernité de l'API v2.3 (High-Level) dans GLPI 11
// NOTE: Temporairement vidé pour diagnostic car la v2.3 retourne des 404 sur certains environnements.
const V2_SUPPORTED_TYPES = []

// Mapping des types d'items vers leurs préfixes de champs dans la DB GLPI
const ITEM_FIELD_PREFIX = {
  Computer: 'computer',
  Monitor: 'monitor',
  Printer: 'printer',
  Phone: 'phone',
  NetworkEquipment: 'networkequipment',
  Software: 'software',
  Peripheral: 'peripheral',
  CartridgeItem: 'cartridgeitem',
  ConsumableItem: 'consumableitem',
  Rack: 'rack',
  Enclosure: 'enclosure',
  PDU: 'pdu',
  PassiveEquipment: 'passivedcequipment',
  PassiveDCEquipment: 'passivedcequipment', // Support du nom exact GLPI 10
  Unmanaged: 'unmanaged',
  Cable: 'cable',
  Simcard: 'simcard',
  Socket: 'passivedcsocket',          // Mapping Socket CSV -> PassiveDCSocket GLPI
  PassiveDCSocket: 'passivedcsocket',
  Appliance: 'appliance',
  SoftwareLicense: 'softwarelicense',
  Certificate: 'certificate'
}

/**
 * Mappe certains types d'items vers leurs noms réels dans GLPI (ex: Socket -> PassiveDCSocket).
 */
function getRealItemType(itemType) {
  if (itemType === 'Socket') return 'PassiveDCSocket'
  if (itemType === 'PassiveEquipment') return 'PassiveDCEquipment'
  return itemType
}

const STATE_CACHE = new Map()
let STATES_LOADED = false

/** Instanciation des clients */
const glpiV1 = createGlpiApi()
const glpiV2 = createGlpiV2Api()

/**
 * Retourne le client API approprié selon le type d'item.
 * @param {string} itemType
 */
function getApiClient(itemType) {
  return V2_SUPPORTED_TYPES.includes(itemType) ? glpiV2 : glpiV1
}

function getTypeField(itemType) {
  // if (itemType === 'Software') return 'softwarecategories_id'
  const prefix = ITEM_FIELD_PREFIX[itemType]
  return prefix ? `${prefix}types_id` : null
}

function getModelField(itemType) {
  const prefix = ITEM_FIELD_PREFIX[itemType]
  return prefix ? `${prefix}models_id` : null
}

function normalizeLabel(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

function extractGlpiArray(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.results)) return payload.results
  return []
}

// Les statuts restent gérés via l'API v1 pour la compatibilité avec le cache existant
async function loadStates() {
  if (STATES_LOADED) return
  const token = getSessionToken()
  const res = await glpiV1.request('/State?range=0-9999', { sessionToken: token })
  if (!res.ok) return
  const items = extractGlpiArray(res.data)
  for (const item of items) {
    if (!item?.name || item?.id == null) continue
    STATE_CACHE.set(normalizeLabel(item.name), item.id)
  }
  STATES_LOADED = true
}

async function findStateIdByName(name) {
  if (!name) return 0
  const normalized = normalizeLabel(name)
  if (STATE_CACHE.has(normalized)) return STATE_CACHE.get(normalized)

  await loadStates()
  if (STATE_CACHE.has(normalized)) return STATE_CACHE.get(normalized)

  const token = getSessionToken()
  const res = await glpiV1.request(
    `/State?searchText[name]=${encodeURIComponent(name)}&range=0-1`,
    { sessionToken: token }
  )
  const items = extractGlpiArray(res.data)
  const id = items.length > 0 ? items[0].id : 0
  if (id) STATE_CACHE.set(normalized, id)
  return id
}

async function createState(name) {
  const token = getSessionToken()
  const res = await glpiV1.request('/State', {
    method: 'POST',
    body: { input: { name } },
    sessionToken: token
  })
  if (!res.ok) throw new Error(`Impossible de créer le statut "${name}"`)
  const id = res.data.id ?? res.data
  STATE_CACHE.set(normalizeLabel(name), id)
  return id
}

export async function findOrCreateState(name) {
  if (!name) return 0
  let id = await findStateIdByName(name)
  if (!id) {
    id = await createState(name)
  }
  return id
}

/**
 * Recherche un matériel par son nom.
 * Gère automatiquement le dispatch v1/v2.
 */
export async function findMaterialByName(itemType, name) {
  const token = getSessionToken()
  const realType = getRealItemType(itemType)
  const api = getApiClient(realType)

  // Construction de l'URL de recherche
  const path = `/${realType}?searchText[name]=${encodeURIComponent(name)}&range=0-1`

  const res = await api.request(path, { sessionToken: token })
  if (!res.ok) return null

  const items = extractGlpiArray(res.data)
  if (items.length > 0) {
    return { id: items[0].id, users_id: items[0].users_id ?? 0 }
  }
  return null
}

/**
 * Prépare les données pour l'envoi à GLPI.
 */
async function buildMaterialPayload(row) {
  const typeName = row.Type || row.Item_Type

  const [manufacturerId, locationId, userId, typeId, modelId, stateId] = await Promise.all([
    row.Manufacturer ? findOrCreateManufacturer(row.Manufacturer) : Promise.resolve(null),
    row.Location ? findOrCreateLocation(row.Location) : Promise.resolve(null),
    row.User ? findUserByName(row.User) : Promise.resolve(null),
    typeName ? findOrCreateCategory(row.Item_Type, typeName) : Promise.resolve(null),
    row.Model ? findOrCreateModel(row.Item_Type, row.Model) : Promise.resolve(null),
    row.Status ? findOrCreateState(row.Status) : Promise.resolve(0)
  ])

  const payload = {
    name: row.Name,
    states_id: stateId ?? 0,
    locations_id: locationId ?? 0,
    manufacturers_id: manufacturerId ?? 0,
    users_id: userId ?? 0,
    users_id_tech: userId ?? 0,
    otherserial: row.Inventory_Number ?? '',
    comment: row.Model ?? ''
  }

  const typeField = getTypeField(row.Item_Type)
  if (typeField && typeId) payload[typeField] = typeId

  const modelField = getModelField(row.Item_Type)
  if (modelField && modelId) payload[modelField] = modelId

  return payload
}

/**
 * Crée un matériel via l'API appropriée (Hybrid Dispatch).
 */
export async function createMaterial(row) {
  const token = getSessionToken()
  const realType = getRealItemType(row.Item_Type)
  const api = getApiClient(realType)
  const payload = await buildMaterialPayload(row)

  const res = await api.request(`/${realType}`, {
    method: 'POST',
    body: { input: payload },
    sessionToken: token
  })

  if (!res.ok) {
    // Normalisation des erreurs dispatchées
    const errorMsg = Array.isArray(res.data) ? res.data[1] : (res.data?.message || res.statusText)
    throw new Error(errorMsg || `Erreur création matériel "${row.Name}"`)
  }

  // En v2.3, l'ID peut être dans data.id ou directement dans data selon l'endpoint
  const id = res.data?.id ?? (Array.isArray(res.data) ? res.data[0]?.id : res.data)

  return { 
    id, 
    users_id: payload.users_id, // On recupere l'ID utilisateur utilise pour le payload
    name: row.Name, 
    itemType: row.Item_Type, 
    apiVersion: res.apiVersion || 'v1' 
  }
}

/**
 * Import principal de masse.
 */
export async function importMaterials(rows) {
  // Dédoublonnage CSV si désactivé
  let processedRows = rows
  let duplicatesRemoved = 0
  if (!ALLOW_DUPLICATES) {
    const dedup = deduplicateRows(rows)
    processedRows = dedup.unique
    duplicatesRemoved = dedup.duplicatesRemoved
    if (duplicatesRemoved > 0) {
      console.info(`[Matériels] ${duplicatesRemoved} doublon(s) CSV supprimé(s).`)
    }
  }

  const results = []
  for (let row of processedRows) {
    try {
      row = normalizeRow(row, MATERIAL_COLUMNS)
      // const existing = await findMaterialByName(row.Item_Type, row.Name)
      // if (existing !== null) {
      //   results.push({
      //     name: row.Name,
      //     itemType: row.Item_Type,
      //     status: 'skipped',
      //     id: existing.id,
      //     users_id: existing.users_id,
      //     apiVersion: V2_SUPPORTED_TYPES.includes(getRealItemType(row.Item_Type)) ? 'v2.3' : 'v1'
      //   })
      //   continue
      // }
      const created = await createMaterial(row)
      results.push({ ...created, status: 'created' })
    } catch (err) {
      results.push({ name: row.Name, itemType: row.Item_Type, status: 'error', error: err.message })
    }
  }

  return {
    total: results.length,
    created: results.filter(r => r.status === 'created').length,
    skipped: results.filter(r => r.status === 'skipped').length,
    errors: results.filter(r => r.status === 'error').length,
    details: results
  }
}
