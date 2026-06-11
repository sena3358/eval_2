const trimTrailingSlashes = (value) => value.replace(/\/+$/, '')

const baseUrl = trimTrailingSlashes(
  import.meta.env.VITE_SQLITE_API_BASE_URL || ''
)

const buildUrl = (path) => {
  if (!baseUrl) {
    throw new Error('VITE_SQLITE_API_BASE_URL manquante dans le fichier .env')
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
    data,
  }
}

export const createSqliteApi = () => {
  const request = async (path, { method = 'GET', body } = {}) => {
    const url = buildUrl(path)
    const headers = {
      Accept: 'application/json',
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

    return {
      url,
      requestHeaders: headers,
      ...(await parseResponse(response)),
    }
  }

  const testConnection = () => request('/sqlite/test')

  return {
    baseUrl,
    request,
    testConnection,
  }
}
