/**
 * locationApi.js
 * Service dédié aux localisations (Location) dans GLPI.
 */

import { getSessionToken, buildHeaders, GLPI_BASE_URL } from '../../services/auth/authSession.js'

const ENDPOINT = `${GLPI_BASE_URL}/Location`

export async function findLocationByName(name) {
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

export async function createLocation(name) {
  const token = getSessionToken()
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({ input: { name } })
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err[1] || `Erreur création localisation "${name}"`)
  }
  const data = await res.json()
  return data.id
}

export async function findOrCreateLocation(name) {
  if (!name || name.trim() === '') return null
  const existing = await findLocationByName(name)
  if (existing !== null) return existing
  return createLocation(name)
}
