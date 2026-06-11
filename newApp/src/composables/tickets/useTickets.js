import { computed, ref } from 'vue'
import { authState } from '../../services/auth/authSession'
import { createTicketsApi } from '../../services/tickets/ticketsApi'

const PAGE_SIZE = 15

export const useTickets = () => {
  const api = createTicketsApi()

  // Liste
  const tickets = ref([])
  const total = ref(0)
  const start = ref(0)
  const loading = ref(false)
  const errorText = ref('')

  // Fiche detaillee
  const selectedId = ref(null)
  const selectedTicket = ref(null)
  const detailLoading = ref(false)
  const detailError = ref('')

  const currentPage = computed(() => Math.floor(start.value / PAGE_SIZE) + 1)
  const pageCount = computed(() => Math.max(1, Math.ceil(total.value / PAGE_SIZE)))
  const canPrev = computed(() => start.value > 0)
  const canNext = computed(() => start.value + PAGE_SIZE < total.value)

  const loadTickets = async () => {
    errorText.value = ''

    if (!authState.sessionToken) {
      tickets.value = []
      total.value = 0
      return
    }

    loading.value = true
    try {
      const { items, total: count } = await api.listTickets({
        start: start.value,
        limit: PAGE_SIZE,
      })
      tickets.value = items
      total.value = count
    } catch (error) {
      errorText.value = error?.message || 'Erreur chargement des tickets.'
      tickets.value = []
      total.value = 0
    } finally {
      loading.value = false
    }
  }

  const selectTicket = async (id) => {
    selectedId.value = id
    detailError.value = ''
    detailLoading.value = true
    try {
      selectedTicket.value = await api.getTicket(id)
    } catch (error) {
      selectedTicket.value = null
      detailError.value = error?.message || 'Erreur chargement de la fiche.'
    } finally {
      detailLoading.value = false
    }
  }

  const clearSelection = () => {
    selectedId.value = null
    selectedTicket.value = null
    detailError.value = ''
  }

  const nextPage = async () => {
    if (!canNext.value) return
    start.value += PAGE_SIZE
    await loadTickets()
  }

  const prevPage = async () => {
    if (!canPrev.value) return
    start.value = Math.max(0, start.value - PAGE_SIZE)
    await loadTickets()
  }

  return {
    tickets,
    total,
    loading,
    errorText,
    selectedId,
    selectedTicket,
    detailLoading,
    detailError,
    currentPage,
    pageCount,
    canPrev,
    canNext,
    loadTickets,
    selectTicket,
    clearSelection,
    nextPage,
    prevPage,
  }
}
