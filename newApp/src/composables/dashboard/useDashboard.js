import { ref } from 'vue'
import { authState } from '../../services/auth/authSession'
import { createDashboardApi } from '../../services/dashboard/dashboardApi'

const defaultStats = {
  elements: { total: 0, byType: [] },
  tickets: { total: 0, byStatus: [] },
}

export const useDashboard = () => {
  const api = createDashboardApi()

  const stats = ref({ ...defaultStats })
  const loading = ref(false)
  const errorText = ref('')

  const loadDashboardData = async () => {
    errorText.value = ''

    if (!authState.sessionToken) {
      stats.value = { ...defaultStats }
      return
    }

    loading.value = true
    try {
      stats.value = await api.getDashboard()
    } catch (error) {
      errorText.value = error?.message || 'Erreur chargement dashboard.'
    } finally {
      loading.value = false
    }
  }

  return {
    stats,
    loading,
    errorText,
    loadDashboardData,
  }
}
