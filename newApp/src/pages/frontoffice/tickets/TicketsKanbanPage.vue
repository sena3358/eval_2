<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTicketsKanban } from '../../../composables/frontoffice/tickets/useTicketsKanban'
import KanbanColumn from '../../../components/frontoffice/tickets/KanbanColumn.vue'
import AssignTechnicianDialog from '../../../components/frontoffice/tickets/AssignTechnicianDialog.vue'
import AddSolutionDialog from '../../../components/frontoffice/tickets/AddSolutionDialog.vue'

const router = useRouter()
const { 
  columns, loading, error, 
  fetchTickets, moveTicket, getTicketItemTypes 
} = useTicketsKanban()

const selectedTicket = ref(null)
const selectedItemTypesCount = ref(0)

// Gestion des modales d'interception
const showAssign = ref(false)
const showSolution = ref(false)
const pendingMove = ref(null) // { ticketId, targetColumnId }

onMounted(() => {
  fetchTickets()
})

const handleDrop = async ({ ticketId, targetColumnId }) => {
  // 1. Interception pour "In Progress" (id: progress)
  if (targetColumnId === 'progress') {
    const colNew = columns.value.find(c => c.id === 'new')
    const ticket = colNew?.items.find(t => t.id === ticketId)
    
    if (ticket) {
      pendingMove.value = { ticketId, targetColumnId }
      selectedTicket.value = ticket
      showAssign.value = true
      return
    }
  }

  // 2. Interception pour "Terminé" (id: done)
  if (targetColumnId === 'done') {
    const ticket = columns.value.flatMap(c => c.items).find(t => t.id === ticketId)
    if (ticket) {
      pendingMove.value = { ticketId, targetColumnId }
      selectedTicket.value = ticket
      // On pré-récupère le nombre de types d'items pour le calcul du coût
      const types = await getTicketItemTypes(ticketId)
      selectedItemTypesCount.value = types.length
      showSolution.value = true
      return
    }
  }
  
  await moveTicket(ticketId, targetColumnId)
}

const confirmAssign = async ({ userId }) => {
  if (pendingMove.value) {
    await moveTicket(pendingMove.value.ticketId, pendingMove.value.targetColumnId, { assignUserId: userId })
    showAssign.value = false
    pendingMove.value = null
  }
}

const confirmSolution = async ({ solution, cost }) => {
  if (pendingMove.value) {
    await moveTicket(pendingMove.value.ticketId, pendingMove.value.targetColumnId, { 
      solutionContent: solution,
      cost: cost
    })
    showSolution.value = false
    pendingMove.value = null
  }
}

const openDetails = (ticket) => {
  router.push({ name: 'fo-ticket-detail', params: { id: ticket.id } })
}

const goToAddTicket = () => {
  router.push('/front/tickets/create')
}
</script>

<template>
  <div class="fo-page-container">
    <header class="mb-5 d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-3">
        <div class="icon-circle bg-primary text-white">
          <i class="bi bi-kanban-fill"></i>
        </div>
        <div>
          <h1 class="h3 fw-bold mb-1 text-slate-800">Tableau de bord</h1>
          <p class="text-muted mb-0 small">
            Suivez l'avancement de vos demandes d'assistance.
          </p>
        </div>
      </div>
      
      <button class="btn btn-white border px-3 rounded-pill shadow-sm d-flex align-items-center gap-2" @click="fetchTickets" :disabled="loading">
        <i class="bi bi-arrow-clockwise" :class="{ 'spin': loading }"></i>
        <span>Actualiser</span>
      </button>
    </header>

    <div v-if="error" class="alert alert-danger border-0 rounded-4 shadow-sm mb-4">
      {{ error }}
    </div>

    <!-- Kanban Board -->
    <div class="kanban-board">
      <div class="row g-4 flex-nowrap overflow-auto pb-4 px-1">
        <div v-for="col in columns" :key="col.id" class="col-12 col-md-4" style="min-width: 320px;">
          <KanbanColumn 
            :column="col" 
            @drop="handleDrop" 
            @card-click="openDetails"
          >
            <template v-if="col.id === 'new'" #footer>
              <button 
                class="btn btn-add-ticket w-100 mt-3 py-3 rounded-4 fw-bold d-flex align-items-center justify-content-center gap-2"
                @click="goToAddTicket"
              >
                <i class="bi bi-plus-circle-fill"></i>
                <span>Ajouter 1 ticket</span>
              </button>
            </template>
          </KanbanColumn>
        </div>
      </div>
    </div>

    <!-- Modals d'interception -->

    <!-- Modal d'affectation -->
    <AssignTechnicianDialog
      :show="showAssign"
      :ticket="selectedTicket"
      @close="showAssign = false"
      @confirm="confirmAssign"
    />

    <!-- Modal de solution -->
    <AddSolutionDialog
      :show="showSolution"
      :ticket="selectedTicket"
      :itemTypesCount="selectedItemTypesCount"
      @close="showSolution = false"
      @confirm="confirmSolution"
    />
  </div>
</template>

<style scoped>
.fo-page-container {
  animation: fadeIn 0.4s ease-out;
  padding-bottom: 2rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.text-slate-800 { color: #1e293b; }

.kanban-board {
  margin-top: 1rem;
}

.kanban-board .row {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.btn-white { background: white; color: #475569; }

.btn-add-ticket {
  background: white;
  border: 2px dashed #e2e8f0;
  color: #64748b;
  transition: all 0.2s;
}

.btn-add-ticket:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #1e293b;
}

.spin {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
