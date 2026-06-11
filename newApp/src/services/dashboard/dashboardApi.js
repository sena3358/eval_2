import { createGlpiApi } from '../testApi/glpiApi'
import { authState } from '../auth/authSession'

// Types d'elements affiches dans le dashboard (menu Parc de GLPI).
const elementTypes = [
  { itemtype: 'Computer', label: 'Ordinateurs' },
  // { itemtype: 'Software', label: 'Logiciels' },
  // { itemtype: 'NetworkEquipment', label: 'Materiels reseau' },
  // { itemtype: 'Rack', label: 'Baies' },
  // { itemtype: 'Enclosure', label: 'Chassis' },
  { itemtype: 'Monitor', label: 'Moniteurs' },
  // { itemtype: 'SoftwareLicense', label: 'Licences' },
  // { itemtype: 'Printer', label: 'Imprimantes' },
  // { itemtype: 'PDU', label: 'PDU' },
  { itemtype: 'Phone', label: 'Telephones' },
]

// Statuts natifs d'un ticket GLPI (search option champ 12).
const ticketStatuses = [
  { status: 1, label: 'Nouveau' },
  { status: 2, label: 'En cours' },
  // { status: 3, label: 'En cours (Planifie)' },
  // { status: 4, label: 'En attente' },
  // { status: 5, label: 'Resolu' },
  { status: 6, label: 'Clos' },
]

// Types de tickets GLPI : 1 = Incident, 2 = Demande
const ticketTypes = [
  { type: 1, label: 'Incidents', color: '#ef4444' },
  { type: 2, label: 'Demandes de service', color: '#3b82f6' },
]

const TICKET_STATUS_FIELD = 12
const TICKET_TYPE_FIELD = 14 // field 14 = type dans GLPI

const extractTotal = (contentRange) => {
  if (!contentRange) return 0
  const match = contentRange.match(/\/(\d+)/)
  return match ? Number.parseInt(match[1], 10) : 0
}

export const createDashboardApi = () => {
  const glpi = createGlpiApi()

  const withSession = (extra = {}) => ({
    sessionToken: authState.sessionToken,
    ...extra,
  })

  const countItemtype = async (itemtype) => {
    try {
      const response = await glpi.request(`/${itemtype}?range=0-0`, withSession())
      if (!response.ok) return 0
      return extractTotal(response.headers?.['content-range'])
    } catch {
      return 0
    }
  }

  const countTicketsByStatus = async (status) => {
    const params = new URLSearchParams({
      'criteria[0][field]': String(TICKET_STATUS_FIELD),
      'criteria[0][searchtype]': 'equals',
      'criteria[0][value]': String(status),
      range: '0-0',
    })
    try {
      const response = await glpi.request(`/search/Ticket?${params.toString()}`, withSession())
      if (!response.ok) return 0
      return Number.parseInt(response.data?.totalcount ?? 0, 10) || 0
    } catch {
      return 0
    }
  }

  // Compte les tickets par type (Incident=1, Demande=2)
  const countTicketsByType = async (type) => {
    const params = new URLSearchParams({
      'criteria[0][field]': String(TICKET_TYPE_FIELD),
      'criteria[0][searchtype]': 'equals',
      'criteria[0][value]': String(type),
      range: '0-0',
    })
    try {
      const response = await glpi.request(`/search/Ticket?${params.toString()}`, withSession())
      if (!response.ok) return 0
      return Number.parseInt(response.data?.totalcount ?? 0, 10) || 0
    } catch {
      return 0
    }
  }

  // Recupere les couts de tickets agrege depuis /TicketCost
  const fetchTicketCosts = async () => {
    try {
      const response = await glpi.request('/TicketCost?range=0-999', withSession())
      if (!response.ok) return []
      return Array.isArray(response.data) ? response.data : []
    } catch {
      return []
    }
  }

  // Recupere la liste des Etats (State) depuis GLPI
  const fetchStates = async () => {
    try {
      const response = await glpi.request('/State?range=0-100', withSession())
      if (!response.ok) return []
      return Array.isArray(response.data) ? response.data : []
    } catch {
      return []
    }
  }

  // Pour un itemtype donne, recupere tous les items avec leur states_id (field 31)
  // et renvoie un objet { [stateId]: count }
  const countItemsByState = async (itemtype) => {
    try {
      // states_id est le champ 31 dans la plupart des itemtypes
      const params = new URLSearchParams({
        'forcedisplay[0]': '2',     // id
        'forcedisplay[1]': '31',    // states_id
        'range': '0-999',
      })
      const response = await glpi.request(
        `/search/${itemtype}?${params.toString()}`,
        withSession()
      )
      if (!response.ok && response.status !== 206) return {}
      const rows = Array.isArray(response.data?.data) ? response.data.data : []
      const counts = {}
      for (const row of rows) {
        const stateId = String(row['31'] ?? row[31] ?? '0')
        counts[stateId] = (counts[stateId] || 0) + 1
      }
      return counts
    } catch {
      return {}
    }
  }

  const getDashboard = async () => {
    if (!authState.sessionToken) {
      throw new Error('Session GLPI manquante.')
    }

    const activeTypes = elementTypes.filter(t => !t.itemtype.startsWith('//'))

    const [elementCounts, statusCounts, typeCounts, allCosts, states, stateMaps] = await Promise.all([
      Promise.all(activeTypes.map((type) => countItemtype(type.itemtype))),
      Promise.all(ticketStatuses.map((entry) => countTicketsByStatus(entry.status))),
      Promise.all(ticketTypes.map((entry) => countTicketsByType(entry.type))),
      fetchTicketCosts(),
      fetchStates(),
      Promise.all(activeTypes.map((type) => countItemsByState(type.itemtype))),
    ])

    const elementsByType = activeTypes.map((type, index) => ({
      ...type,
      count: elementCounts[index],
    }))
    const ticketsByStatus = ticketStatuses.map((entry, index) => ({
      ...entry,
      count: statusCounts[index],
    }))
    const ticketsByType = ticketTypes.map((entry, index) => ({
      ...entry,
      count: typeCounts[index],
    }))

    // Aggregation des counts par état sur tous les itemtypes actifs
    const mergedStateCounts = {}
    for (const stateMap of stateMaps) {
      for (const [stateId, count] of Object.entries(stateMap)) {
        mergedStateCounts[stateId] = (mergedStateCounts[stateId] || 0) + count
      }
    }

    // Construire le tableau byState avec le label du State
    const stateById = Object.fromEntries(states.map(s => [String(s.id), s.name]))
    const elementsByState = Object.entries(mergedStateCounts)
      .filter(([, count]) => count > 0)
      .map(([stateId, count]) => ({
        id: stateId,
        label: stateById[stateId] || (stateId === '0' ? 'Sans état' : stateId),
        count,
      }))
      .sort((a, b) => b.count - a.count)

    const sum = (items) => items.reduce((total, item) => total + item.count, 0)

    // Aggregation des couts
    const totalActionTime = allCosts.reduce((s, c) => s + Number(c.actiontime || 0), 0)
    const totalCostTime = allCosts.reduce((s, c) => s + Number(c.cost_time || 0), 0)
    const totalCostFixed = allCosts.reduce((s, c) => s + Number(c.cost_fixed || 0), 0)
    const totalCostMaterial = allCosts.reduce((s, c) => s + Number(c.cost_material || 0), 0)
    const totalTickets = sum(ticketsByStatus)
    
    // Calcul précis du coût total (somme des coûts individuels de chaque ligne)
    const totalCostAll = allCosts.reduce((acc, c) => {
      const timeInHours = Number(c.actiontime || 0) / 3600
      const costForThisLine = 
        (Number(c.cost_time || 0) * timeInHours) + 
        Number(c.cost_fixed || 0) + 
        Number(c.cost_material || 0)
      return acc + costForThisLine
    }, 0)

    return {
      elements: {
        total: sum(elementsByType),
        byType: elementsByType,
        byState: elementsByState,
      },
      tickets: {
        total: totalTickets,
        byStatus: ticketsByStatus,
        byType: ticketsByType,
        costs: {
          totalActionTime,
          totalCostTime,
          totalCostFixed,
          totalCostMaterial,
          totalCostAll,
          costPerTicket: totalTickets > 0 ? totalCostAll / totalTickets : 0,
        },
      },
    }
  }

  return {
    getDashboard,
  }
}
