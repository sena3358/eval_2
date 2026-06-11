/**
 * Client pour l'API High-Level v2.3 de GLPI.
 *
 * Contrairement a l'API Legacy (v1) qui utilise `initSession`, `Session-Token`,
 * etc., la v2.3 utilise des endpoints RESTful standards et un Bearer token.
 *
 * Usage :
 *   import { createGlpiV2Api } from './glpiV2Api'
 *   const v2 = createGlpiV2Api()
 *   const res = await v2.request('/Ticket', { sessionToken: '...' })
 */

const trimTrailingSlashes = (value) => value.replace(/\/+$/, '')

const baseUrlV2 = trimTrailingSlashes(
  import.meta.env.VITE_GLPI_API_V2_BASE_URL || ''
)
const appToken = import.meta.env.VITE_GLPI_API_KEY || ''

// ---------- Helpers partages avec glpiApi.js ----------

const parseResponse = async (response) => {
  const contentType = response.headers.get('content-type') || ''
  const data = contentType.includes('application/json')
    ? await response.json()
    : await response.text()

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries()),
    data,
  }
}

const buildUrlV2 = (path) => {
  if (!baseUrlV2) {
    throw new Error('VITE_GLPI_API_V2_BASE_URL manquante dans le fichier .env')
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrlV2}${normalizedPath}`
}

// ---------- Factory ----------

export const createGlpiV2Api = () => {
  /**
   * Effectue une requete vers l'API v2.3.
   *
   * La v2.3 utilise le meme App-Token que la v1, mais le Session-Token
   * obtenu via l'API v1 (initSession) est egalement accepte.
   */
  const request = async (
    path,
    { method = 'GET', body, sessionToken } = {}
  ) => {
    const url = buildUrlV2(path)
    const headers = {
      Accept: 'application/json',
    }

    if (appToken) {
      headers['App-Token'] = appToken
    }

    // La v2.3 accepte le Session-Token de la v1
    if (sessionToken) {
      headers['Session-Token'] = sessionToken
    }

    let payload
    if (body !== undefined && method !== 'GET') {
      headers['Content-Type'] = 'application/json'
      payload = JSON.stringify(body)
    }

    const response = await fetch(url, {
      method,
      headers,
      body: payload,
    })

    const parsed = await parseResponse(response)

    return {
      url,
      requestHeaders: headers,
      apiVersion: 'v2.3',
      ...parsed,
    }
  }

  // ---------- Raccourcis CRUD ----------

  /** GET /ItemType  — liste paginee */
  const listItems = (itemType, { start = 0, limit = 15, sessionToken } = {}) =>
    request(`/${itemType}?range=${start}-${start + limit - 1}`, { sessionToken })

  /** GET /ItemType/:id  — fiche unique */
  const getItem = (itemType, id, { sessionToken } = {}) =>
    request(`/${itemType}/${id}`, { sessionToken })

  /** POST /ItemType  — creation */
  const createItem = (itemType, input, { sessionToken } = {}) =>
    request(`/${itemType}`, { method: 'POST', body: { input }, sessionToken })

  /** PUT /ItemType/:id  — mise a jour */
  const updateItem = (itemType, id, input, { sessionToken } = {}) =>
    request(`/${itemType}/${id}`, { method: 'PUT', body: { input }, sessionToken })

  /** DELETE /ItemType/:id  — suppression */
  const deleteItem = (itemType, id, { sessionToken } = {}) =>
    request(`/${itemType}/${id}`, { method: 'DELETE', sessionToken })

  return {
    baseUrlV2,
    appToken,
    request,
    listItems,
    getItem,
    createItem,
    updateItem,
    deleteItem,
  }
}
