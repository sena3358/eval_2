import { ref, computed } from 'vue'
import { createTicketsApi } from '../../../services/tickets/ticketsApi'
import { sqliteCostApi } from '../../../services/testBackSqlite/sqliteCostApi'
import { createDashboardApi } from '../../../services/dashboard/dashboardApi'
import { foAuthState } from '../../../services/frontoffice/auth/foAuthSession'

export function useCostsSummary() {
  const ticketsApi = createTicketsApi({ getToken: () => foAuthState.sessionToken })
  const dashboardApi = createDashboardApi()
  
  const loading = ref(false)
  const glpiCosts = ref([])
  const sqliteCosts = ref([])
  const ticketItemsMap = ref({}) // { ticketId: [itemtype1, itemtype2] }

  const fetchAllData = async () => {
    loading.value = true
    try {
      // 1. Fetch SQLite costs
      sqliteCosts.value = await sqliteCostApi.getAllCosts()
      
      // 2. Fetch GLPI costs (via dashboardApi but we need raw lines)
      glpiCosts.value = await dashboardApi.getDashboard().then(d => {
        // dashboardApi.getDashboard calls fetchTicketCosts internally but doesn't return raw lines.
        // I'll call dashboardApi.fetchTicketCosts directly if I can, or create a method.
        return [] // Placeholder, I'll fetch them specifically below
      })

      // Better: fetch specifically
      const glpi = await ticketsApi.getGlpiCosts() // I need to add this to ticketsApi
      glpiCosts.value = glpi

      // 3. Fetch item types for all tickets that have GLPI costs
      const ticketIds = [...new Set(glpi.map(c => c.tickets_id))]
      await Promise.all(ticketIds.map(async (tid) => {
        if (!ticketItemsMap.value[tid]) {
          const items = await ticketsApi.getTicketItems(tid)
          ticketItemsMap.value[tid] = [...new Set(items.map(it => it.itemtype))]
        }
      }))

    } catch (e) {
      console.error('Error fetching costs summary:', e)
    } finally {
      loading.value = false
    }
  }

  const summary = computed(() => {
    const map = {} // { itemtype: { glpi: 0, sqlite: 0 } }

    // Aggregate GLPI costs
    glpiCosts.value.forEach(c => {
      const types = ticketItemsMap.value[c.tickets_id] || ['Inconnu']
      const splitValue = (
        (Number(c.actiontime || 0) / 3600 * Number(c.cost_time || 0)) + 
        Number(c.cost_fixed || 0) + 
        Number(c.cost_material || 0)
      ) / types.length

      types.forEach(t => {
        if (!map[t]) map[t] = { glpi: 0, sqlite: 0 }
        map[t].glpi += splitValue
      })
    })

    // Aggregate SQLite costs
    sqliteCosts.value.forEach(c => {
      if (!map[c.itemtype]) map[c.itemtype] = { glpi: 0, sqlite: 0 }
      map[c.itemtype].sqlite += Number(c.cost || 0)
    })

    return Object.entries(map).map(([type, values]) => ({
      itemtype: type,
      glpi: values.glpi,
      sqlite: values.sqlite,
      total: values.glpi + values.sqlite
    }))
  })

  return {
    loading,
    summary,
    fetchAllData
  }
}
