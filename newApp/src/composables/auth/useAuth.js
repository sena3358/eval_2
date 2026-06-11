import { computed, ref } from 'vue'
import { createGlpiAuthService } from '../../services/auth/glpiAuthService'
import {
  authState,
  clearSession,
  isAuthenticated,
  setSession,
} from '../../services/auth/authSession'

export const useAuth = () => {
  // Reutilise la logique metier d'authentification GLPI partagee
  const authService = createGlpiAuthService()

  const password = ref('glpi')

  const errorText = ref('')
  const loading = ref(false)

  const missingConfig = computed(() => authService.missingConfig())

  const signIn = async () => {
    errorText.value = ''

    if (missingConfig.value) {
      errorText.value =
        'Configuration manquante : verifie VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.'
      return false
    }

    if (!password.value) {
      errorText.value = 'Renseigne ton mot de passe.'
      return false
    }

    loading.value = true

    try {
      // Le Back Office se connecte avec le compte d'administration fixe "glpi"
      const { sessionToken, profile } = await authService.signInWithCredentials({
        login: 'glpi',
        password: password.value,
      })
      setSession(sessionToken, profile)
      password.value = ''
      return true
    } catch (error) {
      errorText.value = error?.message || 'Erreur reseau pendant la connexion.'
      return false
    } finally {
      loading.value = false
    }
  }

  const signOut = async () => {
    await authService.signOut(authState.sessionToken)
    clearSession()
  }

  return {
    password,
    errorText,
    loading,
    missingConfig,
    isAuthenticated,
    authState,
    signIn,
    signOut,
  }
}
