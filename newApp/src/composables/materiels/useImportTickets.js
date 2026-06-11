/**
 * useImportTickets.js
 * Composable gérant l'import des tickets (Feuille 2) et de leurs coûts (Feuille 3).
 *
 * Dépend du materialRegistry fourni par useImportMaterials.
 */

import { ref, readonly } from 'vue'
import { parseCsv, readFileAsText, validateColumns } from '../../services/import/csvParser.js'
import { importTickets } from '../../Monitor/tickets/ticketApi.js'
import { importTicketCosts } from '../../association items/ticketCosts/ticketCostApi.js'

const REQUIRED_TICKETS = ['Ref_Ticket', 'Date', 'Heure', 'Type', 'Titre', 'Status', 'Priority']
const REQUIRED_COSTS = ['Num_Ticket', 'Duration_second', 'Time_Cost', 'Fixed_Cost']

export function useImportTickets() {
  const isLoading = ref(false)
  const error = ref(null)
  const ticketReport = ref(null)
  const costReport = ref(null)
  const previewTickets = ref([])
  const previewCosts = ref([])

  /** Map Ref_Ticket (string) → id GLPI ; alimentée après l'import */
  const ticketRefMap = ref(new Map())

  async function previewTicketsCsv(file) {
    error.value = null
    try {
      const text = await readFileAsText(file)
      const rows = parseCsv(text)
      const { valid, missing } = validateColumns(rows, REQUIRED_TICKETS)
      // if (!valid) { error.value = `Colonnes manquantes (tickets) : ${missing.join(', ')}`; return }
      previewTickets.value = rows.slice(0, 20)
    } catch (e) { error.value = e.message }
  }

  async function previewCostsCsv(file) {
    error.value = null
    try {
      const text = await readFileAsText(file)
      const rows = parseCsv(text)
      const { valid, missing } = validateColumns(rows, REQUIRED_COSTS)
      if (!valid) { error.value = `Colonnes manquantes (coûts) : ${missing.join(', ')}`; return }
      previewCosts.value = rows.slice(0, 20)
    } catch (e) { error.value = e.message }
  }

  /**
   * Import des tickets + coûts en séquence.
   * @param {File} ticketsFile  — Feuille 2
   * @param {File|null} costsFile  — Feuille 3 (optionnel)
   * @param {Map<string, {id: number, itemType: string}>} materialRegistry
   */
  async function runImport(ticketsFile, costsFile, materialRegistry) {
    isLoading.value = true
    error.value = null
    ticketReport.value = null
    costReport.value = null

    try {
      // --- Import tickets ---
      const ticketsText = await readFileAsText(ticketsFile)
      const ticketRows = parseCsv(ticketsText)

      const { valid: tv, missing: tm } = validateColumns(ticketRows, REQUIRED_TICKETS)
      if (!tv) throw new Error(`Colonnes manquantes (tickets) : ${tm.join(', ')}`)

      const tReport = await importTickets(ticketRows, materialRegistry)
      ticketReport.value = tReport

      // Construction de la map Ref_Ticket → id GLPI
      for (const detail of tReport.details) {
        if (detail.status === 'created') {
          ticketRefMap.value.set(String(detail.ref), detail.id)
        }
      }

      // --- Import coûts (si fichier fourni) ---
      if (costsFile) {
        const costsText = await readFileAsText(costsFile)
        const costRows = parseCsv(costsText)

        const { valid: cv, missing: cm } = validateColumns(costRows, REQUIRED_COSTS)
        if (!cv) throw new Error(`Colonnes manquantes (coûts) : ${cm.join(', ')}`)

        costReport.value = await importTicketCosts(costRows, ticketRefMap.value)
      }
    } catch (e) {
      error.value = e.message
    } finally {
      isLoading.value = false
    }
  }

  function reset() {
    error.value = null
    ticketReport.value = null
    costReport.value = null
    previewTickets.value = []
    previewCosts.value = []
    ticketRefMap.value = new Map()
  }

  return {
    isLoading: readonly(isLoading),
    error: readonly(error),
    ticketReport: readonly(ticketReport),
    costReport: readonly(costReport),
    previewTickets: readonly(previewTickets),
    previewCosts: readonly(previewCosts),
    ticketRefMap,
    previewTicketsCsv,
    previewCostsCsv,
    runImport,
    reset
  }
}
