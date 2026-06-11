<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTickets } from '../../composables/tickets/useTickets'
import TicketList from '../../components/tickets/TicketList.vue'

const router = useRouter()
const {
  tickets,
  total,
  loading,
  errorText,
  currentPage,
  pageCount,
  canPrev,
  canNext,
  loadTickets,
  nextPage,
  prevPage,
} = useTickets()

onMounted(loadTickets)

const goToDetail = (id) => {
  router.push(`/tickets/${id}`)
}

const goToEdit = (id) => {
  router.push(`/tickets/${id}/edit`)
}
</script>

<template>
  <section class="tickets-page p-4">
    <header class="mb-4">
      <div class="d-flex align-items-center gap-3 mb-2">
        <div class="icon-box bg-warning text-dark rounded-3 shadow-sm p-2 d-flex">
          <i class="bi bi-ticket-perforated fs-4"></i>
        </div>
        <div>
          <h1 class="h3 fw-bold mb-0 text-dark">Tickets</h1>
          <p class="text-muted mb-0 small">
            Gestion des incidents et demandes d'assistance techniques
          </p>
        </div>
      </div>
    </header>

    <div v-if="errorText" class="alert alert-danger border-0 shadow-sm rounded-3 mb-4 d-flex align-items-center">
      <i class="bi bi-exclamation-circle-fill me-2 fs-5"></i>
      {{ errorText }}
    </div>

    <div class="row g-4 h-layout">
      <!-- Liste des tickets occupe maintenant toute la largeur -->
      <div class="col-12">
        <TicketList
          :tickets="tickets"
          :loading="loading"
          :current-page="currentPage"
          :page-count="pageCount"
          :total="total"
          :can-prev="canPrev"
          :can-next="canNext"
          @select="goToDetail"
          @edit="goToEdit"
          @reload="loadTickets"
          @prev="prevPage"
          @next="nextPage"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.tickets-page {
  background-color: #f8f9fa;
  min-height: calc(100vh - 60px);
}

.h-layout {
  height: calc(100vh - 180px);
  min-height: 500px;
}

.icon-box {
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1200px) {
  .h-layout {
    height: auto;
  }
}
</style>
