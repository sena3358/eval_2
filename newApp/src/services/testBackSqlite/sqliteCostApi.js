import { createSqliteApi } from './sqliteApi'

export const sqliteCostApi = (() => {
  const sqlite = createSqliteApi()
  const ENDPOINT = '/sqlite/ticket-type-costs'

  const getAllCosts = async () => {
    const res = await sqlite.request(ENDPOINT)
    return res.data || []
  }

  const saveCostsBatch = async (costs) => {
    const res = await sqlite.request(`${ENDPOINT}/batch`, {
      method: 'POST',
      body: costs
    })
    return res.data
  }

  return {
    getAllCosts,
    saveCostsBatch
  }
})()
