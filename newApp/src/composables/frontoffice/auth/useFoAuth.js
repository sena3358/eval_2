import { computed, ref } from 'vue'
import { createGlpiAuthService } from '../../../services/auth/glpiAuthService'
import {
  foAuthState,
  foIsAuthenticated,
  setFoSession,
  clearFoSession,
} from '../../../services/frontoffice/auth/foAuthSession'

export const useFoAuth = () => {
  // Reutilise exactement la meme logique metier d'auth GLPI que le Back Office
  const authService = createGlpiAuthService()

  const login = ref('')
  const password = ref('')

  const foUserToken = import.meta.env.VITE_GLPI_FO_USER_TOKEN || ''

  const errorText = ref('')
  const loading = ref(false)

  const missingConfig = computed(() => authService.missingConfig())
  const isSilentMode = computed(() => !!foUserToken)

  const signIn = async () => {
    errorText.value = ''

    if (missingConfig.value) {
      errorText.value =
        'Configuration manquante : verifie VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.'
      return false
    }

    if (!login.value || !password.value) {
      errorText.value = 'Renseigne ton identifiant et ton mot de passe.'
      return false
    }

    loading.value = true

    try {
      const { sessionToken, profile } = await authService.signInWithCredentials({
        login: login.value,
        password: password.value,
      })
      setFoSession(sessionToken, profile)
      password.value = ''
      return true
    } catch (error) {
      errorText.value = error?.message || 'Erreur reseau pendant la connexion.'
      return false
    } finally {
      loading.value = false
    }
  }

  const silentSignIn = async () => {
    if (!foUserToken) return false
    loading.value = true
    try {
      const { sessionToken, profile } = await authService.signInWithToken(foUserToken)
      setFoSession(sessionToken, profile)
      return true
    } catch (error) {
      console.warn('Echec du login silencieux par jeton:', error)
      return false
    } finally {
      loading.value = false
    }
  }

  const signOut = async () => {
    await authService.signOut(foAuthState.sessionToken)
    clearFoSession()
  }

  return {
    login,
    password,
    errorText,
    loading,
    missingConfig,
    isSilentMode,
    foIsAuthenticated,
    foAuthState,
    signIn,
    silentSignIn,
    signOut,
  }
}
