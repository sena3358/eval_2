/**
 * categoryApi.js
 * Service dédié aux catégories de matériels (ComputerType / ItemType) dans GLPI.
 */

import { getSessionToken, buildHeaders, GLPI_BASE_URL } from '../../services/auth/authSession.js'

// GLPI utilise des noms spécifiques pour certaines catégories
const TYPE_ENDPOINTS = {
  Computer: `${GLPI_BASE_URL}/ComputerType`,
  Monitor: `${GLPI_BASE_URL}/MonitorType`,
  Printer: `${GLPI_BASE_URL}/PrinterType`,
  Phone: `${GLPI_BASE_URL}/PhoneType`,
  Software: `${GLPI_BASE_URL}/SoftwareCategory` // Software utilise SoftwareCategory, pas SoftwareType
}

/**
 * Mappe certains types d'items vers leurs noms réels dans GLPI.
 */
function getRealItemType(itemType) {
  if (itemType === 'Socket') return 'PassiveDCSocket'
  if (itemType === 'PassiveEquipment') return 'PassiveDCEquipment'
  return itemType
}

function getEndpoint(itemType) {
  const realType = getRealItemType(itemType)
  return TYPE_ENDPOINTS[realType] ?? `${GLPI_BASE_URL}/${realType}Type`
}

/**
 * Recherche une catégorie/type par nom pour un type d'item donné.
 */
export async function findCategoryByName(itemType, name) {
  const token = getSessionToken()
  try {
    const res = await fetch(
      `${getEndpoint(itemType)}?searchText[name]=${encodeURIComponent(name)}&range=0-1`,
      { headers: buildHeaders(token) }
    )
    if (!res.ok) return null
    const data = await res.json()
    const items = Array.isArray(data) ? data : (data.data || [])
    if (items.length > 0) return items[0].id
  } catch (e) {
    console.warn(`Impossible de chercher la catégorie pour ${itemType}: ${e.message}`)
  }
  return null
}

/**
 * Crée une catégorie/type pour un type d'item donné.
 */
export async function createCategory(itemType, name) {
  const token = getSessionToken()
  const res = await fetch(getEndpoint(itemType), {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({ input: { name } })
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err[1] || `Erreur création catégorie "${name}" pour ${itemType}`)
  }
  const data = await res.json()
  return data.id
}

/**
 * Trouve ou crée une catégorie, retourne toujours son id (ou null si échec toléré).
 */
export async function findOrCreateCategory(itemType, name) {
  try {
    const existing = await findCategoryByName(itemType, name)
    if (existing !== null) return existing
    return await createCategory(itemType, name)
  } catch (err) {
    console.warn(`Échec de résolution de catégorie pour ${itemType} / ${name} : ${err.message}`)
    return null
  }
}
