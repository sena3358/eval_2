import { computed, reactive, readonly } from 'vue'

const trimTrailingSlashes = (value) => value.replace(/\/+$/, '')

export const GLPI_BASE_URL = trimTrailingSlashes(
  import.meta.env.VITE_GLPI_API_BASE_URL || ''
)
export const GLPI_V2_BASE_URL = trimTrailingSlashes(
  import.meta.env.VITE_GLPI_API_V2_BASE_URL || ''
)
export const GLPI_APP_TOKEN = import.meta.env.VITE_GLPI_API_KEY || ''

const STORAGE_KEY = 'glpi.auth.session'

const loadInitialState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return { sessionToken: '', user: null }
    }
    const parsed = JSON.parse(raw)
    return {
      sessionToken: parsed.sessionToken || '',
      user: parsed.user || null,
    }
  } catch (error) {
    // Stockage corrompu ou indisponible : on repart sur un etat vide
    return { sessionToken: '', user: null }
  }
}

// Etat partage par toute l'application (pattern store leger sans Pinia)
const state = reactive(loadInitialState())

const persist = () => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ sessionToken: state.sessionToken, user: state.user })
    )
  } catch (error) {
    // Persistance impossible : la session reste valable pour l'onglet courant
  }
}

export const isAuthenticated = computed(() => Boolean(state.sessionToken))

export const setSession = (sessionToken, user = null) => {
  state.sessionToken = sessionToken || ''
  state.user = user
  persist()
}

export const getSessionToken = () => state.sessionToken

export const buildHeaders = (sessionToken) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (GLPI_APP_TOKEN) {
    headers['App-Token'] = GLPI_APP_TOKEN
  }

  if (sessionToken) {
    headers['Session-Token'] = sessionToken
  }

  return headers
}

export const clearSession = () => {
  state.sessionToken = ''
  state.user = null
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    // Suppression impossible : on ignore, l'etat memoire est deja vide
  }
}

export const authState = readonly(state)
