/**
 * useImportMaterials.js
 * Composable gérant l'import des matériels depuis un fichier CSV (Feuille 1).
 *
 * Responsabilités :
 *   - état de chargement / erreurs / résultats
 *   - parsing CSV
 *   - appel au service materialApi
 *   - construction du materialRegistry pour les autres imports
 */

import { ref, readonly } from 'vue'
import { parseCsv, readFileAsText, validateColumns } from '../../../services/import/csvParser.js'
import { importMaterials, findMaterialByName } from '../../../colonnes/materials/materialApi.js'

const REQUIRED_COLUMNS = ['Name', 'Status', 'Location', 'Manufacturer', 'Item_Type', 'Model', 'Inventory_Number', 'User']

export function useImportMaterials() {
  const isLoading = ref(false)
  const error = ref(null)
  const report = ref(null)
  const preview = ref([])

  /** 
   * Registre des matériels importés : Name → { id, itemType, users_id }
   * Partageable avec useImportTickets pour les liens et le demandeur
   */                   
  const materialRegistry = ref(new Map())

  /**
   * Charge et prévisualise le CSV sans importer.
   * @param {File} file
   */
  async function previewCsv(file) {
    error.value = null
    try {
      const text = await readFileAsText(file)
      const rows = parseCsv(text)
      const { valid, missing } = validateColumns(rows, REQUIRED_COLUMNS)
      if (!valid) {
        error.value = `Colonnes manquantes : ${missing.join(', ')}`
        preview.value = []
        return
      }
      preview.value = rows.slice(0, 20) // Aperçu des 20 premières lignes
    } catch (e) {
      error.value = e.message
      preview.value = []
    }
  }

  /**
   * Lance l'import complet vers GLPI.
   * Remplit materialRegistry avec les items créés + déjà existants.
   * @param {File} file
   */
  async function runImport(file) {
    isLoading.value = true
    error.value = null
    report.value = null

    try {
      const text = await readFileAsText(file)
      const rows = parseCsv(text)

      const { valid, missing } = validateColumns(rows, REQUIRED_COLUMNS)
      if (!valid) throw new Error(`Colonnes manquantes : ${missing.join(', ')}`)

      const importReport = await importMaterials(rows)
      report.value = importReport

      // Construction du registre (créés + skipped) pour chaîner avec tickets/images
      for (const detail of importReport.details) {
        if (detail.status === 'created' || detail.status === 'skipped') {
          materialRegistry.value.set(detail.name, {
            id: detail.id,
            itemType: detail.itemType,
            users_id: detail.users_id ?? 0
          })
        }
      }

      // Pour les items en erreur, on tente quand même une résolution
      for (const row of rows) {
        if (!materialRegistry.value.has(row.Name)) {
          const detail = await findMaterialByName(row.Item_Type, row.Name)
          if (detail) {
            materialRegistry.value.set(row.Name, { 
              id: detail.id, 
              itemType: row.Item_Type,
              users_id: detail.users_id ?? 0
            })
          }
        }
      }
    } catch (e) {
      error.value = e.message
    } finally {
      isLoading.value = false
    }
  }

  function reset() {
    error.value = null
    report.value = null
    preview.value = []
    materialRegistry.value = new Map()
  }

  return {
    isLoading: readonly(isLoading),
    error: readonly(error),
    report: readonly(report),
    preview: readonly(preview),
    materialRegistry,
    previewCsv,
    runImport,
    reset
  }
}
