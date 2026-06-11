import { createGlpiApi } from '../testApi/glpiApi'
import { authState } from '../auth/authSession'

// Detecte le format d'erreur GLPI : ["ERROR_xxx", "message"]
const isGlpiError = (data) =>
  Array.isArray(data) && typeof data[0] === 'string' && data[0].startsWith('ERROR')

const glpiErrorMessage = (data) =>
  isGlpiError(data) ? data[1] || data[0] : ''

// Total renvoye dans l'en-tete HTTP content-range (format "0-19/123").
const extractTotal = (contentRange) => {
  if (!contentRange) return 0
  const match = contentRange.match(/\/(\d+)/)
  return match ? Number.parseInt(match[1], 10) : 0
}

// `getToken` permet de reutiliser ce service avec n'importe quelle session :
// Back Office par defaut, Front Office en injectant le token de sa propre session.
export const createTicketsApi = ({ getToken = () => authState.sessionToken } = {}) => {
  const glpi = createGlpiApi()

  const withSession = (extra = {}) => ({
    sessionToken: getToken(),
    ...extra,
  })

  const requireSession = () => {
    if (!getToken()) {
      throw new Error('Session GLPI manquante.')
    }
  }

  // Liste paginee des tickets (meme usage de l'API que listItemIds : range seul).
  const listTickets = async ({ start = 0, limit = 15 } = {}) => {
    requireSession()

    const end = start + limit - 1
    const res = await glpi.request(
      `/Ticket?range=${start}-${end}`,
      withSession()
    )

    if (isGlpiError(res.data)) {
      throw new Error(glpiErrorMessage(res.data))
    }
    // 206 Partial Content est normal lorsqu'une plage est demandee
    if (!res.ok && res.status !== 206) {
      throw new Error(`Erreur chargement des tickets (${res.status}).`)
    }

    return {
      items: Array.isArray(res.data) ? res.data : [],
      total: extractTotal(res.headers?.['content-range']),
    }
  }

  // Fiche complete d'un ticket par son identifiant.
  const getTicket = async (id) => {
    requireSession()

    const res = await glpi.request(`/Ticket/${id}`, withSession())

    if (isGlpiError(res.data)) {
      throw new Error(glpiErrorMessage(res.data))
    }
    if (!res.ok) {
      throw new Error(`Ticket introuvable (${res.status}).`)
    }

    return res.data
  }

  // Cree un ticket et retourne son identifiant. `input` : { name, content, type, urgency... }
  const createTicket = async (input) => {
    requireSession()

    const res = await glpi.request(
      '/Ticket',
      withSession({ method: 'POST', body: { input } })
    )

    if (isGlpiError(res.data)) {
      throw new Error(glpiErrorMessage(res.data))
    }
    if (!res.ok) {
      throw new Error(`Echec de creation du ticket (${res.status}).`)
    }

    // GLPI renvoie { id, message } ou un tableau de resultats
    const created = Array.isArray(res.data) ? res.data[0] : res.data
    return { id: created?.id ?? null }
  }

  // Rattache un element (asset) a un ticket via Item_Ticket.
  const linkItem = async (ticketId, itemtype, itemsId) => {
    requireSession()

    const res = await glpi.request(
      '/Item_Ticket',
      withSession({
        method: 'POST',
        body: { input: { tickets_id: ticketId, itemtype, items_id: itemsId } },
      })
    )

    if (isGlpiError(res.data)) {
      throw new Error(glpiErrorMessage(res.data))
    }
    if (!res.ok) {
      throw new Error(`Echec de liaison de l'element (${res.status}).`)
    }

    return res.data
  }

  // Met a jour un ticket existant. `input` : { status, content, urgency... }
  const updateTicket = async (id, input) => {
    requireSession()

    const res = await glpi.request(
      `/Ticket/${id}`,
      withSession({ method: 'PUT', body: { input } })
    )

    if (isGlpiError(res.data)) {
      throw new Error(glpiErrorMessage(res.data))
    }
    if (!res.ok) {
      throw new Error(`Echec de mise a jour du ticket (${res.status}).`)
    }

    return res.data
  }

  // Recupere les elements lies a un ticket
  const getTicketItems = async (id) => {
    requireSession()
    const res = await glpi.request(`/Ticket/${id}/Item_Ticket`, withSession())
    return res.ok ? (Array.isArray(res.data) ? res.data : []) : []
  }

  // Recupere les suivis (follow-ups) d'un ticket
  const getTicketFollowups = async (id) => {
    requireSession()
    const res = await glpi.request(`/Ticket/${id}/ITILFollowup`, withSession())
    return res.ok ? (Array.isArray(res.data) ? res.data : []) : []
  }

  // Recupere les solutions d'un ticket
  const getTicketSolutions = async (id) => {
    requireSession()
    const res = await glpi.request(`/Ticket/${id}/ITILSolution`, withSession())
    return res.ok ? (Array.isArray(res.data) ? res.data : []) : []
  }

  // Recupere les couts d'un ticket
  const getTicketCosts = async (id) => {
    requireSession()
    const res = await glpi.request(`/Ticket/${id}/TicketCost`, withSession())
    return res.ok ? (Array.isArray(res.data) ? res.data : []) : []
  }

  // Ajoute une solution a un ticket
  const addTicketSolution = async (ticketId, content) => {
    requireSession()
    const res = await glpi.request(
      '/ITILSolution',
      withSession({
        method: 'POST',
        body: { 
          input: { 
            itemtype: 'Ticket',
            items_id: ticketId,
            content,
            status: 2 // Solved
          } 
        }
      })
    )
    if (isGlpiError(res.data)) throw new Error(glpiErrorMessage(res.data))
    return res.data
  }

  // Ajoute un cout a un ticket
  const addTicketCost = async (ticketId, { actiontime, cost_time, cost_fixed, name = 'Coût initial' }) => {
    requireSession()
    const res = await glpi.request(
      '/TicketCost',
      withSession({
        method: 'POST',
        body: { 
          input: { 
            tickets_id: ticketId,
            actiontime: Number(actiontime || 0),
            cost_time: Number(cost_time || 0),
            cost_fixed: Number(cost_fixed || 0),
            name
          } 
        }
      })
    )
    if (isGlpiError(res.data)) throw new Error(glpiErrorMessage(res.data))
    return res.data
  }

  return {
    listTickets,
    getTicket,
    createTicket,
    linkItem,
    updateTicket,
    getTicketItems,
    getTicketFollowups,
    getTicketSolutions,
    getTicketCosts,
    addTicketSolution,
    addTicketCost,
  }
}
