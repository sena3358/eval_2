import { computed, reactive, ref } from 'vue'
import { createSqliteResetApi } from '../../services/dataReset/sqliteResetApi'

export const useSqliteDataReset = () => {
  const api = createSqliteResetApi()

  const tables = ref([])
  const selectedTableNames = reactive(new Set())
  const loadingTables = ref(false)
  const confirmChecked = ref(false)
  const running = ref(false)
  const errorText = ref('')
  const logs = ref([])
  const summary = ref(null)

  const canRun = computed(
    () => !running.value && confirmChecked.value && selectedTableNames.size > 0
  )

  const log = (level, message) => {
    logs.value.push({ time: new Date().toLocaleTimeString(), level, message })
  }

  const isTableSelected = (name) => selectedTableNames.has(name)

  const toggleTable = (name) => {
    if (selectedTableNames.has(name)) {
      selectedTableNames.delete(name)
    } else {
      selectedTableNames.add(name)
    }
  }

  const selectAllTables = () => tables.value.forEach((t) => selectedTableNames.add(t.name))

  const clearTables = () => selectedTableNames.clear()

  const loadTables = async () => {
    errorText.value = ''
    loadingTables.value = true
    try {
      const res = await api.listTables()
      if (!res.ok) throw new Error(`Erreur ${res.status}`)
      tables.value = Array.isArray(res.data) ? res.data : []
      // Auto-selection de toutes les tables pour la vue simplifiée
      tables.value.forEach(t => selectedTableNames.add(t.name))
    } catch (error) {
      errorText.value = error?.message || 'Chargement des tables impossible.'
    } finally {
      loadingTables.value = false
    }
  }

  const resetDatabase = async () => {
    errorText.value = ''
    logs.value = []
    summary.value = null

    if (!canRun.value) {
      errorText.value = "Selectionnez au moins une table et confirmez l'action."
      return
    }

    running.value = true
    try {
      const tableNames = [...selectedTableNames]
      log('info', `Reinitialisation de ${tableNames.length} table(s)...`)

      const res = await api.resetTables(tableNames)

      if (res.ok && res.data.success) {
        summary.value = {
          success: true,
          message: res.data.message,
          rowsDeleted: res.data.totalRowsDeleted,
          tables: res.data.resetTables,
        }
        log('success', `${res.data.totalRowsDeleted} ligne(s) supprimee(s).`)
        await loadTables()
      } else {
        const msg = res.data?.message || 'Erreur inconnue'
        errorText.value = msg
        log('danger', `Echec : ${msg}`)
      }
    } catch (error) {
      errorText.value = error?.message || 'Erreur pendant la reinitialisation.'
      log('danger', errorText.value)
    } finally {
      running.value = false
    }
  }

  return {
    tables,
    selectedTableNames,
    loadingTables,
    confirmChecked,
    running,
    errorText,
    logs,
    summary,
    canRun,
    isTableSelected,
    toggleTable,
    selectAllTables,
    clearTables,
    loadTables,
    resetDatabase,
  }
}
