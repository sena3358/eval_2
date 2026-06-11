/**
 * imageApi.js
 * Service dédié à l'upload et à l'association des images avec les matériels dans GLPI.
 *
 * Workflow :
 *   1. uploadImage(file)             → upload du fichier via /Document
 *   2. linkImageToItem(...)          → association Document ↔ Item via Item_Document
 */

import { getSessionToken, buildHeaders, GLPI_BASE_URL, GLPI_APP_TOKEN } from '../../services/auth/authSession.js'

const DOCUMENT_ENDPOINT = `${GLPI_BASE_URL}/Document`
const ITEM_DOCUMENT_ENDPOINT = `${GLPI_BASE_URL}/Document_Item`

/**
 * Upload un fichier image vers GLPI (crée un Document).
 * Utilise multipart/form-data.
 * @param {File} file
 * @param {string} documentName  — nom du document GLPI
 * @returns {Promise<number>} id du Document créé
 */
export async function uploadImage(file, documentName) {
  if (!GLPI_APP_TOKEN) {
    throw new Error('Configuration manquante : verifie VITE_GLPI_API_KEY.')
  }

  const token = getSessionToken()

  const formData = new FormData()
  // GLPI attend un champ "uploadManifest" JSON + le fichier binaire
  const manifest = JSON.stringify({
    input: {
      name: documentName,
      _filename: [file.name]
    }
  })
  formData.append('uploadManifest', manifest)
  formData.append('filename[0]', file, file.name)

  const headers = {
    'Session-Token': token,
    'App-Token': GLPI_APP_TOKEN
  }

  const res = await fetch(DOCUMENT_ENDPOINT, {
    method: 'POST',
    headers,
    body: formData
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err[1] || `Erreur upload image "${file.name}"`)
  }

  const data = await res.json()
  return data.id
}

/**
 * Associe un Document GLPI à un item (Computer, Monitor, etc.).
 * @param {number} documentId
 * @param {string} itemType   ex: "Computer"
 * @param {number} itemId
 * @returns {Promise<void>}
 */
export async function linkImageToItem(documentId, itemType, itemId) {
  const token = getSessionToken()

  const res = await fetch(ITEM_DOCUMENT_ENDPOINT, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({
      input: {
        documents_id: documentId,
        itemtype: itemType,
        items_id: itemId
      }
    })
  })

  if (!res.ok) {
    console.warn(`Échec association document ${documentId} ↔ ${itemType}#${itemId}`)
  }
}

/**
 * Traite le ZIP : extrait les fichiers image et les upload/associe.
 * Le ZIP doit contenir des fichiers nommés exactement comme le champ `Name` du CSV.
 * Ex: PC-ADM-001.jpg → associé à l'item nommé "PC-ADM-001"
 *
 * Nécessite la bibliothèque JSZip (importée dynamiquement).
 *
 * @param {File} zipFile
 * @param {Map<string, {id: number, itemType: string}>} materialRegistry
 * @returns {Promise<ImageImportReport>}
 */
export async function importImagesFromZip(zipFile, materialRegistry) {
  // Import dynamique de JSZip (doit être dans les dépendances du projet)
  const JSZip = (await import('jszip')).default

  const zip = await JSZip.loadAsync(zipFile)
  const results = []
  const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']

  for (const [filename, zipEntry] of Object.entries(zip.files)) {
    if (zipEntry.dir) continue

    const ext = filename.toLowerCase().slice(filename.lastIndexOf('.'))
    if (!IMAGE_EXTENSIONS.includes(ext)) continue

    // Nom de base sans extension = nom du matériel
    const baseName = filename.replace(/\.[^.]+$/, '').split('/').pop()
    const material = materialRegistry.get(baseName)

    if (!material) {
      results.push({ filename, status: 'no_match', reason: `Aucun matériel "${baseName}" trouvé` })
      continue
    }

    try {
      const blob = await zipEntry.async('blob')
      const file = await convertToJpeg(blob, filename)

      const documentId = await uploadImage(file, `Photo ${baseName}`)
      await linkImageToItem(documentId, material.itemType, material.id)

      results.push({ filename, status: 'uploaded', materialName: baseName, documentId })
    } catch (err) {
      results.push({ filename, status: 'error', error: err.message })
    }
  }

  return {
    total: results.length,
    uploaded: results.filter(r => r.status === 'uploaded').length,
    noMatch: results.filter(r => r.status === 'no_match').length,
    errors: results.filter(r => r.status === 'error').length,
    details: results
  }
}

/**
 * Convertit un Blob image en objet File au format JPEG.
 * @param {Blob} blob
 * @param {string} originalFilename
 * @returns {Promise<File>}
 */
async function convertToJpeg(blob, originalFilename) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(blob)

    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      
      // Fond blanc (utile pour les PNG transparents convertis en JPEG)
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.drawImage(img, 0, 0)
      
      canvas.toBlob((resultBlob) => {
        URL.revokeObjectURL(url)
        if (!resultBlob) {
          reject(new Error(`La conversion JPEG a échoué pour ${originalFilename}`))
          return
        }
        const newFilename = originalFilename.replace(/\.[^.]+$/, '.jpeg')
        const newFile = new File([resultBlob], newFilename, { type: 'image/jpeg' })
        resolve(newFile)
      }, 'image/jpeg', 0.9)
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error(`Impossible de lire l'image ${originalFilename}`))
    }

    img.src = url
  })
}
