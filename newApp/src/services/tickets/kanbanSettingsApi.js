import { createSqliteApi } from '../testBackSqlite/sqliteApi'

export const kanbanSettingsApi = (() => {
  const sqlite = createSqliteApi()
  const ENDPOINT = '/sqlite/kanban-settings'

  const getSettings = async () => {
    const res = await sqlite.request(ENDPOINT)
    if (!res.ok) {
      // Fallback par defaut si l'API echoue
      return {
        colorNew: '#f8fafc',
        colorProgress: '#f0f9ff',
        colorDone: '#f0fdf4',
        labelNew: 'Nouveau',
        labelProgress: 'En cours',
        labelDone: 'Terminé'
      }
    }
    return res.data
  }

  const saveSettings = async (settings) => {
    const res = await sqlite.request(ENDPOINT, {
      method: 'POST',
      body: settings
    })
    return res.data
  }

  return {
    getSettings,
    saveSettings
  }
})()
