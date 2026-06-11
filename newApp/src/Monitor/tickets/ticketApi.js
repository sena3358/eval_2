/**
 * ticketApi.js
 * Service dédié aux tickets (Ticket) dans GLPI.
 * Gère la création des tickets et l'association des items liés.
 */

import { getSessionToken, buildHeaders, GLPI_BASE_URL } from '../../services/auth/authSession.js'
import { findMaterialByName } from '../../colonnes/materials/materialApi.js'
import { normalizeRow, deduplicateRows } from '../../services/import/csvParser.js'

const ENDPOINT = `${GLPI_BASE_URL}/Ticket`

// Liste des colonnes canoniques attendues par le code
const TICKET_COLUMNS = ['Ref_Ticket', 'Date', 'Heure', 'Type', 'Titre', 'Description', 'Status', 'Priority', 'Items']

/** Si false, les lignes CSV exactement identiques sont ignorées avant import. */
const ALLOW_DUPLICATES = false

// ... (STATUS_MAP, PRIORITY_MAP, TYPE_MAP etc.)

// Mapping statut CSV → id GLPI
const STATUS_MAP = {
  New: 1,
  'En cours (assigné)': 2,
  'In Progress': 2,
  'In progress(assigned)':2,
  'In Progress (assigned)':2,
  'In progress (assigned)':2,
  'En cours (planifié)': 3,
  Pending: 4,
  Solved: 5,
  Closed: 6
}

// Mapping priorité CSV → id GLPI (1: Très basse, 2: Basse, 3: Moyenne, 4: Haute, 5: Très haute)
const PRIORITY_MAP = {
  'Very Low': 1,
  Low: 2,
  Medium: 3,
  High: 4,
  'Very High': 5,
  Major: 6
}

// Mapping type CSV → id GLPI
const TYPE_MAP = {
  Incident: 1,
  Request: 2
}

/**
 * Recherche un ticket par son Ref_Ticket (stocké dans `name` ou `id`).
 * GLPI n'a pas de champ ref personnalisé natif — on utilise `name`.
 */
export async function findTicketByRef(ref) {
  const token = getSessionToken()
  // Cherche par id GLPI si la ref est numérique
  if (!isNaN(ref)) {
    const res = await fetch(`${ENDPOINT}/${ref}`, { headers: buildHeaders(token) })
    if (res.ok) {
      const data = await res.json()
      return data.id ?? null
    }
  }
  return null
}

/**
 * Crée un ticket et retourne son id GLPI.
 * @param {Object} row  — ligne CSV feuille 2
 * @param {number|null} requesterId — ID de l'utilisateur demandeur
 * @returns {Promise<number>}
 */
export async function createTicket(row, requesterId = null) {
  const token = getSessionToken()

  // Parse de la date/heure CSV "03/06/2026" + "13:45"
  const [day, month, year] = (row.Date ?? '').split('/')
  const dateStr = year && month && day
    ? `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')} ${row.Heure ?? '00:00'}:00`
    : null

  const priorityValue = PRIORITY_MAP[row.Priority] ?? 3

  const payload = {
    name: row.Titre,
    content: row.Description ?? '',
    status: STATUS_MAP[row.Status] ?? 1,
    priority: priorityValue,
    urgency: priorityValue, // On aligne l'urgence sur la priorité par défaut
    impact: priorityValue,   // On aligne l'impact sur la priorité par défaut
    type: TYPE_MAP[row.Type] ?? 1,
    ...(dateStr ? { date: dateStr } : {}),
    ...(requesterId ? { _users_id_requester: [requesterId] } : {})
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({ input: payload })
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err[1] || `Erreur création ticket "${row.Titre}"`)
  }

  const data = await res.json()
  return data.id
}

/**
 * Met à jour un ticket existant.
 * @param {number} id 
 * @param {Object} payload 
 */
export async function updateTicket(id, payload) {
  const token = getSessionToken()
  const res = await fetch(`${ENDPOINT}/${id}`, {
    method: 'PUT',
    headers: buildHeaders(token),
    body: JSON.stringify({ input: payload })
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err[1] || `Erreur mise à jour ticket #${id}`)
  }
}

/**
 * Associe des matériels à un ticket via Item_Ticket.
 * @param {number} ticketId
 * @param {string[]} itemNames  — noms CSV des items ex: ["PC-ADM-001"]
 * @param {string} defaultItemType — type par défaut si non trouvé dans le CSV matériels
 * @param {Map<string, {id: number, itemType: string}>} materialRegistry
 */
export async function linkItemsToTicket(ticketId, itemNames, materialRegistry) {
  const token = getSessionToken()
  const linkEndpoint = `${GLPI_BASE_URL}/Item_Ticket`

  for (const itemName of itemNames) {
    const entry = materialRegistry.get(itemName)
    if (!entry) {
      console.warn(`Matériel "${itemName}" introuvable dans le registre, lien ignoré.`)
      continue
    }

    const res = await fetch(linkEndpoint, {
      method: 'POST',
      headers: buildHeaders(token),
      body: JSON.stringify({
        input: {
          tickets_id: ticketId,
          itemtype: entry.itemType,
          items_id: entry.id
        }
      })
    })

    if (!res.ok) {
      console.warn(`Échec du lien ticket ${ticketId} ↔ item "${itemName}"`)
    }
  }
}

/**
 * Importe une liste de tickets depuis les lignes CSV.
 * @param {Object[]} rows  — lignes feuille 2
 * @param {Map<string, {id: number, itemType: string}>} materialRegistry
 * @returns {Promise<ImportReport>}
 */
export async function importTickets(rows, materialRegistry) {
  // Dédoublonnage CSV
  let processedRows = rows
  let duplicatesRemoved = 0
  if (!ALLOW_DUPLICATES) {
    const dedup = deduplicateRows(rows)
    processedRows = dedup.unique
    duplicatesRemoved = dedup.duplicatesRemoved
    if (duplicatesRemoved > 0) {
      console.info(`[Tickets] ${duplicatesRemoved} doublon(s) CSV supprimé(s).`)
    }
  }

  const results = []

  for (let row of processedRows) {
    try {
      // Normalisation des colonnes (insensible à la casse)
      row = normalizeRow(row, TICKET_COLUMNS)

      // Parse des items associés (JSON array dans le CSV)
      let itemNames = []
      try {
        itemNames = JSON.parse(row.Items ?? '[]')
      } catch {
        itemNames = []
      }

      // Recherche du demandeur via le premier item associe
      let requesterId = null
      if (itemNames.length > 0) {
        const material = materialRegistry.get(itemNames[0])
        if (material?.users_id) {
          requesterId = material.users_id
        }
      }

      const targetStatus = STATUS_MAP[row.Status] ?? 1
      const isFinalStatusLocked = targetStatus === 5 || targetStatus === 6 // Solved or Closed

      // Si le statut cible est Clos ou Résolu, on crée d'abord en "Nouveau" (1)
      // pour permettre l'ajout d'éléments sans restriction GLPI.
      const initialRow = { ...row }
      if (isFinalStatusLocked) {
        initialRow.Status = 'New'
      }

      const ticketId = await createTicket(initialRow, requesterId)
      
      // Liaison des items
      if (itemNames.length > 0) {
        await linkItemsToTicket(ticketId, itemNames, materialRegistry)
      }

      // Si on avait forcé le statut à New, on applique maintenant le statut final
      if (isFinalStatusLocked) {
        await updateTicket(ticketId, { status: targetStatus })
      }

      results.push({
        ref: row.Ref_Ticket,
        title: row.Titre,
        id: ticketId,
        status: 'created',
        linkedItems: itemNames.length
      })
    } catch (err) {
      results.push({
        ref: row.Ref_Ticket,
        title: row.Titre,
        status: 'error',
        error: err.message
      })
    }
  }

  return {
    total: results.length,
    created: results.filter(r => r.status === 'created').length,
    errors: results.filter(r => r.status === 'error').length,
    details: results
  }
}
