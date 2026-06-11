/**
 * userApi.js
 * Service dédié aux utilisateurs (User) dans GLPI.
 */

import { getSessionToken, buildHeaders, GLPI_BASE_URL } from '../../services/auth/authSession.js'

const ENDPOINT = `${GLPI_BASE_URL}/User`

/**
 * Crée un utilisateur dans GLPI.
 * @param {string} fullName
 * @returns {Promise<number>} id de l'utilisateur créé
 */
export async function createUser(fullName) {
  const token = getSessionToken()
  const nameParts = fullName.trim().split(/\s+/)
  const firstname = nameParts.length > 1 ? nameParts[0] : ''
  const realname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : nameParts[0]
  const login = fullName.toLowerCase().replace(/\s+/g, '.')

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify({
      input: {
        name: login,
        realname: realname,
        firstname: firstname,
        _password: 'Password123!', // Mot de passe par défaut pour les nouveaux utilisateurs
        is_active: 1
      }
    })
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err[1] || `Erreur création utilisateur "${fullName}"`)
  }

  const data = await res.json()
  return data.id
}

export async function findUserByName(fullName) {
  if (!fullName || fullName.trim() === '') return null
  const token = getSessionToken()
  const login = fullName.toLowerCase().trim().replace(/\s+/g, '.')
  
  // 1. Recherche par login (name) ou nom complet (searchText simple)
  // On tente d'abord par login exact
  const res = await fetch(
    `${ENDPOINT}?searchText=${encodeURIComponent(login)}&range=0-10`,
    { headers: buildHeaders(token) }
  )
  
  if (res.ok) {
    const data = await res.json()
    const users = extractGlpiArray(data)
    
    // On cherche un match exact sur le login ou sur le reaallname
    const match = users.find(u => 
      u.name?.toLowerCase() === login || 
      `${u.firstname} ${u.realname}`.trim().toLowerCase() === fullName.toLowerCase() ||
      u.realname?.toLowerCase() === fullName.toLowerCase()
    )
    if (match) return match.id
  }

  // 2. Si non trouvé par login, on tente une recherche par nom complet
  const res2 = await fetch(
    `${ENDPOINT}?searchText=${encodeURIComponent(fullName)}&range=0-10`,
    { headers: buildHeaders(token) }
  )
  
  if (res2.ok) {
    const data = await res2.json()
    const users = extractGlpiArray(data)
    const match = users.find(u => 
      `${u.firstname} ${u.realname}`.trim().toLowerCase() === fullName.toLowerCase() ||
      u.realname?.toLowerCase() === fullName.toLowerCase()
    )
    if (match) return match.id
  }

  // 3. Toujours rien ? On crée l'utilisateur
  try {
    return await createUser(fullName)
  } catch (error) {
    console.warn(`Impossible de créer l'utilisateur "${fullName}":`, error.message)
    return null
  }
}

/**
 * Recherche un utilisateur par son nom de login.
 * @param {string} login
 * @returns {Promise<number|null>}
 */
export async function findUserByLogin(login) {
  if (!login || login.trim() === '') return null
  const token = getSessionToken()
  const res = await fetch(
    `${ENDPOINT}?searchText=${encodeURIComponent(login)}&range=0-1`,
    { headers: buildHeaders(token) }
  )
  if (!res.ok) return null
  const data = await res.json()
  const items = extractGlpiArray(data)
  if (items.length > 0) return items[0].id
  return null
}

function extractGlpiArray(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.results)) return payload.results
  return []
}
