/**
 * ticketCostApi.js
 * Service dédié aux coûts de tickets (TicketCost) dans GLPI.
 * Feuille 3 du CSV : Num_Ticket, Duration_second, Time_Cost, Fixed_Cost
 */

import { getSessionToken, buildHeaders, GLPI_BASE_URL } from '../../services/auth/authSession.js'
import { normalizeRow, deduplicateRows } from '../../services/import/csvParser.js'

const ENDPOINT = `${GLPI_BASE_URL}/TicketCost`

const COST_COLUMNS = ['Num_Ticket', 'Duration_second', 'Time_Cost', 'Fixed_Cost']

/** Si false, les lignes CSV exactement identiques sont ignorées avant import. */
const ALLOW_DUPLICATES = false

/**
 * Crée une entrée de coût pour un ticket.
 * @param {Object} row   — ligne CSV feuille 3
 * @param {Map<string, number>} ticketRefToIdMap  — mapping Ref_Ticket → id GLPI
 * @returns {Promise<{ticketRef: string, id: number, status: string}>}
 */
export async function createTicketCost(row, ticketRefToIdMap) {
  const token = getSessionToken()

  const ticketsId = ticketRefToIdMap.get(String(row.Num_Ticket))
  if (!ticketsId) {
    throw new Error(`Ticket introuvable pour Num_Ticket="${row.Num_Ticket}"`)
  }

  // Nettoyage des virgules décimales françaises (ex: "8,7" → 8.7)
  const timeCost = parseFloat(String(row.Time_Cost ?? '0').replace(',', '.')) || 0
  const fixedCost = parseFloat(String(row.Fixed_Cost ?? '0').replace(',', '.')) || 0
  const actiontime = parseFloat(String(row.Duration_second ?? '0').replace(',', '.')) || 0

  const payload = {
    tickets_id: ticketsId,
    actiontime: actiontime,
    cost_time: timeCost,
    cost_fixed: fixedCost,
    name: `Coût ticket #${row.Num_Ticket}`
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({ input: payload })
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err[1] || `Erreur création coût pour ticket "${row.Num_Ticket}"`)
  }

  const data = await res.json()
  return { ticketRef: row.Num_Ticket, id: data.id, status: 'created' }
}

/**
 * Importe tous les coûts depuis les lignes CSV feuille 3.
 * @param {Object[]} rows
 * @param {Map<string, number>} ticketRefToIdMap
 * @returns {Promise<ImportReport>}
 */
export async function importTicketCosts(rows, ticketRefToIdMap) {
  // Dédoublonnage CSV
  let processedRows = rows
  let duplicatesRemoved = 0
  if (!ALLOW_DUPLICATES) {
    const dedup = deduplicateRows(rows)
    processedRows = dedup.unique
    duplicatesRemoved = dedup.duplicatesRemoved
    if (duplicatesRemoved > 0) {
      console.info(`[Coûts] ${duplicatesRemoved} doublon(s) CSV supprimé(s).`)
    }
  }

  const results = []

  for (let row of processedRows) {
    try {
      row = normalizeRow(row, COST_COLUMNS)
      const result = await createTicketCost(row, ticketRefToIdMap)
      results.push(result)
    } catch (err) {
      results.push({
        ticketRef: row.Num_Ticket,
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
