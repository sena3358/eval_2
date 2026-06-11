import { createSqliteApi } from '../testBackSqlite/sqliteApi'

export const createSqliteResetApi = () => {
  const api = createSqliteApi()

  const listTables = () => api.request('/sqlite/tables')

  const resetTables = (tableNames) =>
    api.request('/sqlite/tables/reset', {
      method: 'POST',
      body: { tableNames },
    })

  return { listTables, resetTables }
}
