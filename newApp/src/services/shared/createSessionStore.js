import { computed, reactive, readonly } from 'vue'

// Fabrique de store de session GLPI (pattern store leger sans Pinia).
// Chaque espace (Back Office, Front Office) instancie son propre store avec
// une cle de stockage distincte, ce qui isole completement les sessions.
export const createSessionStore = (storageKey) => {
  const loadInitialState = () => {
    try {
      const raw = localStorage.getItem(storageKey)
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

  const state = reactive(loadInitialState())

  const persist = () => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ sessionToken: state.sessionToken, user: state.user })
      )
    } catch (error) {
      // Persistance impossible : la session reste valable pour l'onglet courant
    }
  }

  const isAuthenticated = computed(() => Boolean(state.sessionToken))

  const setSession = (sessionToken, user = null) => {
    state.sessionToken = sessionToken || ''
    state.user = user
    persist()
  }

  const clearSession = () => {
    state.sessionToken = ''
    state.user = null
    try {
      localStorage.removeItem(storageKey)
    } catch (error) {
      // Suppression impossible : on ignore, l'etat memoire est deja vide
    }
  }

  return {
    authState: readonly(state),
    isAuthenticated,
    setSession,
    clearSession,
  }
}
