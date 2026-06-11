import { ref } from 'vue'
import { createSqliteApi } from '../../services/testBackSqlite/sqliteApi'

export const useSqliteTest = () => {
  const sqliteApi = createSqliteApi()

  const responseText = ref('')
  const errorText = ref('')
  const loading = ref(false)
  const lastRequest = ref('')

  const runTest = async () => {
    errorText.value = ''
    responseText.value = ''
    loading.value = true

    try {
      const result = await sqliteApi.testConnection()
      responseText.value = JSON.stringify(result, null, 2)
      lastRequest.value = `${result.status} ${result.statusText}`
    } catch (error) {
      errorText.value = error?.message || 'Echec de la connexion SQLite'
    } finally {
      loading.value = false
    }
  }

  return {
    baseUrl: sqliteApi.baseUrl,
    responseText,
    errorText,
    loading,
    lastRequest,
    runTest,
  }
}
