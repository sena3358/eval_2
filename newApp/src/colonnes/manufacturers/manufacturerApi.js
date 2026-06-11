/**
 * manufacturerApi.js
 * Service dédié aux fabricants (Manufacturer) dans GLPI.
 * Chaque entité GLPI a son propre service — aucun appel API dans les composants.
 */

import { getSessionToken, buildHeaders, GLPI_BASE_URL } from '../../services/auth/authSession.js'

const ENDPOINT = `${GLPI_BASE_URL}/Manufacturer`

/**
 * Recherche un fabricant par nom exact.
 * @param {string} name
 * @returns {Promise<number|null>} id ou null si inexistant
 */
export async function findManufacturerByName(name) {
  const token = getSessionToken()
  const res = await fetch(
    `${ENDPOINT}?searchText[name]=${encodeURIComponent(name)}&range=0-1`,
    { headers: buildHeaders(token) }
  )
  if (!res.ok) return null
  const data = await res.json()
  if (Array.isArray(data) && data.length > 0) return data[0].id
  return null
}

/**
 * Crée un fabricant et retourne son id.
 * @param {string} name
 * @returns {Promise<number>}
 */
export async function createManufacturer(name) {
  const token = getSessionToken()
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({ input: { name } })
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err[1] || `Erreur création fabricant "${name}"`)
  }
  const data = await res.json()
  return data.id
}

/**
 * Trouve ou crée un fabricant, retourne toujours son id.
 * @param {string} name
 * @returns {Promise<number>}
 */
export async function findOrCreateManufacturer(name) {
  const existing = await findManufacturerByName(name)
  if (existing !== null) return existing
  return createManufacturer(name)
}
