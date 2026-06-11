import { createGlpiApi } from '../testApi/glpiApi'

// GLPI renvoie les erreurs sous la forme ["ERROR_KEY", "message lisible"]
const extractGlpiError = (data) => {
  if (Array.isArray(data) && data.length > 1) {
    return data[1]
  }
  if (data?.message) {
    return data.message
  }
  return ''
}

// Logique metier d'authentification GLPI, partagee par le Back Office et le
// Front Office. Chaque espace gere ensuite sa propre session (store distinct).
export const createGlpiAuthService = () => {
  const glpi = createGlpiApi()

  const missingConfig = () => !glpi.baseUrl || !glpi.appToken

  // Recupere le profil courant pour enrichir la session apres connexion
  const fetchProfile = async (sessionToken) => {
    try {
      const result = await glpi.getFullSession(sessionToken)
      if (result.ok && result.data?.session) {
        const session = result.data.session
        return {
          id: session.glpiID ?? null,
          name: session.glpifriendlyname || session.glpiname || 'Utilisateur',
          activeProfile: session.glpiactiveprofile?.name || '',
          entity: session.glpiactive_entity_name || '',
        }
      }
    } catch (error) {
      // Profil optionnel : en cas d'echec on garde une session minimale
    }
    return null
  }

  // Ouvre une session GLPI a partir d'un login + mot de passe.
  // Retourne { sessionToken, profile } ou leve une erreur lisible.
  const signInWithCredentials = async ({ login, password }) => {
    if (missingConfig()) {
      throw new Error(
        'Configuration manquante : verifie VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.'
      )
    }

    const result = await glpi.initSessionWithCredentials(login, password)

    if (!result.ok || !result.data?.session_token) {
      throw new Error(
        extractGlpiError(result.data) ||
          `Echec de la connexion (${result.status} ${result.statusText}).`
      )
    }

    const sessionToken = result.data.session_token
    const profile = await fetchProfile(sessionToken)
    return { sessionToken, profile }
  }

  // Ouvre une session GLPI a partir d'un User Token (Persistent).
  const signInWithToken = async (userToken) => {
    if (missingConfig()) {
      throw new Error(
        'Configuration manquante : verifie VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.'
      )
    }

    const result = await glpi.initSession(userToken)

    if (!result.ok || !result.data?.session_token) {
      throw new Error(
        extractGlpiError(result.data) ||
          `Echec de la connexion par jeton (${result.status} ${result.statusText}).`
      )
    }

    const sessionToken = result.data.session_token
    const profile = await fetchProfile(sessionToken)
    return { sessionToken, profile }
  }

  // Ferme une session GLPI (sans echouer si le serveur refuse).
  const signOut = async (sessionToken) => {
    if (!sessionToken) return
    try {
      await glpi.killSession(sessionToken)
    } catch (error) {
      // On force la deconnexion locale meme si killSession echoue
    }
  }

  return {
    glpi,
    missingConfig,
    signInWithCredentials,
    signInWithToken,
    signOut,
  }
}
