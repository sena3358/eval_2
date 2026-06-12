import { ref, computed, onMounted } from 'vue'
import { createTicketsApi } from '../../../services/tickets/ticketsApi'
import { foAuthState } from '../../../services/frontoffice/auth/foAuthSession'
import { kanbanSettingsApi } from '../../../services/tickets/kanbanSettingsApi'

/**
 * Mapping des colonnes Kanban vers les statuts GLPI.
 * On simplifie selon la demande (3 colonnes).
 */
export const KANBAN_COLUMNS = [
  { id: 'new', label: 'Nouveau', bg: '#dbeafe', color: '#1e40af', statuses: [1] },
  { id: 'progress', label: 'In progress', bg: '#ffedd5', color: '#9a3412', statuses: [2, 3, 4] },
  { id: 'done', label: 'Terminé', bg: '#dcfce7', color: '#166534', statuses: [6, 5] },
]

export const useTicketsKanban = () => {
  const api = createTicketsApi({ getToken: () => foAuthState.sessionToken })

  const tickets = ref([])
  const loading = ref(false)
  const error = ref('')

  const customSettings = ref(null)

  const fetchSettings = async () => {
    try {
      const data = await kanbanSettingsApi.getSettings()
      if (data) customSettings.value = data
    } catch (e) {
      console.warn('Impossible de charger les reglages Kanban:', e)
    }
  }

  // Regroupement des tickets par colonnes
  const columns = computed(() => {
    const map = { new: [], progress: [], done: [] }
    
    tickets.value.forEach(ticket => {
      const status = Number(ticket.status)
      if (KANBAN_COLUMNS[0].statuses.includes(status)) map.new.push(ticket)
      else if (KANBAN_COLUMNS[1].statuses.includes(status)) map.progress.push(ticket)
      else if (KANBAN_COLUMNS[2].statuses.includes(status)) map.done.push(ticket)
    })

    return KANBAN_COLUMNS.map(col => {
      // Application des reglages personnalises (SQLite)
      const settings = customSettings.value
      let colLabel = col.label
      let colBg = col.bg

      if (settings) {
        if (col.id === 'new') {
          colLabel = settings.labelNew || col.label
          colBg = settings.colorNew || col.bg
        } else if (col.id === 'progress') {
          colLabel = settings.labelProgress || col.label
          colBg = settings.colorProgress || col.bg
        } else if (col.id === 'done') {
          colLabel = settings.labelDone || col.label
          colBg = settings.colorDone || col.bg
        }
      }

      return {
        ...col,
        label: colLabel,
        bg: colBg,
        items: map[col.id]
      }
    })
  })

  // Initialisation au premier appel
  fetchSettings()

  const fetchTickets = async () => {
    loading.value = true
    error.value = ''
    try {
      // Pour le Kanban FO, on recupere une liste assez large (ex: 50 derniers tickets)
      // car la pagination par colonne est complexe sans filtrage cote serveur par statut.
      const res = await api.listTickets({ start: 0, limit: 1000 })
      // Tri par date decroissante (plus recents en haut des colonnes)
      tickets.value = (res.items || []).sort((a,b) => b.id - a.id)
    } catch (e) {
      error.value = e.message || 'Impossible de charger les tickets'
    } finally {
      loading.value = false
    }
  }

  const moveTicket = async (ticketId, targetColumnId, { assignUserId = null, solutionContent = null } = {}) => {
    const targetCol = KANBAN_COLUMNS.find(c => c.id === targetColumnId)
    if (!targetCol) return

    // On prend le statut principal de la colonne cible
    const newStatus = targetCol.statuses[0]
    
    // Optimisme UI : mise a jour locale avant l'appel API
    const ticketIndex = tickets.value.findIndex(t => t.id === ticketId)
    if (ticketIndex === -1) return
    
    const oldStatus = tickets.value[ticketIndex].status
    tickets.value[ticketIndex].status = newStatus

    try {
      const input = { status: newStatus }
      
      // Si on assigne un utilisateur
      if (assignUserId) {
        input._users_id_assign = assignUserId
      }

      // Si on ajoute une solution
      if (solutionContent) {
        await api.addTicketSolution(ticketId, solutionContent)
      }

      // Mise a jour du statut
      await api.updateTicket(ticketId, input)
    } catch (e) {
      // Rollback en cas d'erreur
      tickets.value[ticketIndex].status = oldStatus
      error.value = `Erreur lors du changement de statut : ${e.message}`
    }
  }

  return {
    columns,
    loading,
    error,
    fetchTickets,
    moveTicket
  }
}
