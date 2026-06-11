import { computed, ref } from 'vue'
import { authState } from '../../services/auth/authSession'
import { createGlpiApi } from '../../services/testApi/glpiApi'

export const useGlpiTest = () => {
  const glpi = createGlpiApi()

  const endpoint = ref('/getMyProfiles')
  const method = ref('GET')
  const bodyText = ref('{"input": {}}')

  const responseText = ref('')
  const errorText = ref('')
  const loading = ref(false)
  const lastRequest = ref('')

  const showBody = computed(() => method.value !== 'GET')
  const missingConfig = computed(
    () => !glpi.baseUrl || !glpi.appToken
  )

  const formatOutput = (result) =>
    JSON.stringify(
      {
        url: result.url,
        status: result.status,
        statusText: result.statusText,
        ok: result.ok,
        data: result.data,
      },
      null,
      2
    )

  const parseBody = () => {
    if (!showBody.value) {
      return undefined
    }

    const trimmed = bodyText.value.trim()
    if (!trimmed) {
      return undefined
    }

    try {
      return JSON.parse(trimmed)
    } catch (error) {
      throw new Error('Corps JSON invalide')
    }
  }

  const runRequest = async () => {
    errorText.value = ''
    responseText.value = ''

    if (missingConfig.value) {
      errorText.value =
        'Configuration manquante : verifie VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.'
      return
    }

    if (!authState.sessionToken) {
      errorText.value = 'Session utilisateur manquante : connecte-toi puis reessaie.'
      return
    }

    loading.value = true

    try {
      const result = await glpi.request(endpoint.value, {
        method: method.value,
        body: parseBody(),
        sessionToken: authState.sessionToken,
      })

      responseText.value = formatOutput(result)
      lastRequest.value = `${result.status} ${result.statusText}`
    } catch (error) {
      errorText.value = error?.message || 'Erreur reseau'
    } finally {
      loading.value = false
    }
  }

  return {
    endpoint,
    method,
    bodyText,
    responseText,
    errorText,
    loading,
    lastRequest,
    showBody,
    missingConfig,
    runRequest,
  }
}
