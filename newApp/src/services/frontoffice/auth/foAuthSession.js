import { createSessionStore } from '../../shared/createSessionStore'

// Session du Front Office, totalement isolee du Back Office (cle distincte).
const store = createSessionStore('glpi.fo.session')

export const foAuthState = store.authState
export const foIsAuthenticated = store.isAuthenticated
export const setFoSession = store.setSession
export const clearFoSession = store.clearSession
