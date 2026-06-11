const trimTrailingSlashes = (value) => value.replace(/\/+$/, '')

// Dans glpiApi.js
const baseUrl = trimTrailingSlashes(
  import.meta.env.VITE_GLPI_API_BASE_URL || ''
)
const appToken = import.meta.env.VITE_GLPI_API_KEY || ''

console.log('🔍 Debug env:', {
  baseUrl,
  appToken,
  fullEnv: import.meta.env
})

const buildUrl = (path) => {
  if (!baseUrl) {
    throw new Error('VITE_GLPI_API_BASE_URL manquante dans le fichier .env')
  }

  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

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

const encodeBasic = (login, password) => {
  const raw = `${login}:${password}`
  if (typeof btoa === 'function') {
    // btoa attend du Latin1, on encode l'UTF-8 au prealable
    return btoa(unescape(encodeURIComponent(raw)))
  }
  return Buffer.from(raw, 'utf-8').toString('base64')
}

export const createGlpiApi = () => {
  const request = async (
    path,
    { method = 'GET', body, sessionToken, userToken, credentials } = {}
  ) => {
    const url = buildUrl(path)
    const headers = {
      Accept: 'application/json',
    }

    if (appToken) {
      headers['App-Token'] = appToken
    }

    if (sessionToken) {
      headers['Session-Token'] = sessionToken
    }

    if (userToken) {
      headers.Authorization = `user_token ${userToken}`
    }

    if (credentials?.login) {
      headers.Authorization = `Basic ${encodeBasic(
        credentials.login,
        credentials.password || ''
      )}`
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
      ...parsed,
    }
  }

  const initSession = (userToken) =>
    request('/initSession', { method: 'GET', userToken })

  const initSessionWithCredentials = (login, password) =>
    request('/initSession', {
      method: 'GET',
      credentials: { login, password },
    })

  const initSessionWithPasswordOnly = (password) =>
    request('/initSession', {
      method: 'GET',
      userToken: password,
    })

  const killSession = (sessionToken) =>
    request('/killSession', { method: 'GET', sessionToken })

  const getFullSession = (sessionToken) =>
    request('/getFullSession', { method: 'GET', sessionToken })

  return {
    baseUrl,
    appToken,
    request,
    initSession,
    initSessionWithCredentials,
    initSessionWithPasswordOnly,
    killSession,
    getFullSession,
  }
}
