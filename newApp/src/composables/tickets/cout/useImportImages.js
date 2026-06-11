/**
 * useImportImages.js
 * Composable gérant l'import du ZIP d'images et l'association avec les matériels.
 */

import { ref, readonly } from 'vue'
import { importImagesFromZip } from '../../../association items/images/imageApi.js'

export function useImportImages() {
  const isLoading = ref(false)
  const error = ref(null)
  const report = ref(null)
  const zipPreview = ref([]) // Noms des fichiers dans le ZIP

  /**
   * Pré-visualise le contenu du ZIP sans uploader.
   * @param {File} zipFile
   */
  async function previewZip(zipFile) {
    error.value = null
    zipPreview.value = []
    try {
      const JSZip = (await import('jszip')).default
      const zip = await JSZip.loadAsync(zipFile)
      const IMAGE_EXT = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
      const files = []
      for (const [filename, entry] of Object.entries(zip.files)) {
        if (entry.dir) continue
        const ext = filename.toLowerCase().slice(filename.lastIndexOf('.'))
        if (IMAGE_EXT.includes(ext)) files.push(filename)
      }
      zipPreview.value = files
    } catch (e) {
      error.value = `Impossible de lire le ZIP : ${e.message}`
    }
  }

  /**
   * Lance l'upload et l'association de toutes les images du ZIP.
   * @param {File} zipFile
   * @param {Map<string, {id: number, itemType: string}>} materialRegistry
   */
  async function runImport(zipFile, materialRegistry) {
    isLoading.value = true
    error.value = null
    report.value = null
    try {
      report.value = await importImagesFromZip(zipFile, materialRegistry)
    } catch (e) {
      error.value = e.message
    } finally {
      isLoading.value = false
    }
  }

  function reset() {
    error.value = null
    report.value = null
    zipPreview.value = []
  }

  return {
    isLoading: readonly(isLoading),
    error: readonly(error),
    report: readonly(report),
    zipPreview: readonly(zipPreview),
    previewZip,
    runImport,
    reset
  }
}
