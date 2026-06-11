/**
 * modelApi.js
 * Service dedie aux modeles de materiels dans GLPI.
 */

import { getSessionToken, buildHeaders, GLPI_BASE_URL } from '../../services/auth/authSession.js'

const MODEL_ENDPOINTS = {
  Computer: `${GLPI_BASE_URL}/ComputerModel`,
  Monitor: `${GLPI_BASE_URL}/MonitorModel`,
  Printer: `${GLPI_BASE_URL}/PrinterModel`,
  Phone: `${GLPI_BASE_URL}/PhoneModel`,
  NetworkEquipment: `${GLPI_BASE_URL}/NetworkEquipmentModel`
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
  return MODEL_ENDPOINTS[realType] ?? `${GLPI_BASE_URL}/${realType}Model`
}

export async function findModelByName(itemType, name) {
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
    console.warn(`Impossible de chercher le modele pour ${itemType}: ${e.message}`)
  }
  return null
}

export async function createModel(itemType, name) {
  const token = getSessionToken()
  const res = await fetch(getEndpoint(itemType), {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({ input: { name } })
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err[1] || `Erreur creation modele "${name}" pour ${itemType}`)
  }
  const data = await res.json()
  return data.id
}

export async function findOrCreateModel(itemType, name) {
  try {
    const existing = await findModelByName(itemType, name)
    if (existing !== null) return existing
    return await createModel(itemType, name)
  } catch (err) {
    console.warn(`Échec de résolution de modèle pour ${itemType} / ${name} : ${err.message}`)
    return null
  }
}
