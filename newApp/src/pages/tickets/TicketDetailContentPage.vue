<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTickets } from '../../composables/tickets/useTickets'
import TicketDetail from '../../components/tickets/TicketDetail.vue'

const route = useRoute()
const router = useRouter()
const {
  selectedTicket,
  detailLoading,
  detailError,
  selectTicket
} = useTickets()

onMounted(() => {
  const id = route.params.id
  if (id) {
    selectTicket(id)
  }
})

const goBack = () => {
  router.push('/tickets')
}
</script>

<template>
  <section class="ticket-detail-page p-4">
    <header class="mb-4 d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-3">
        <button @click="goBack" class="btn btn-white border shadow-sm rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
          <i class="bi bi-arrow-left fs-5"></i>
        </button>
        <div>
          <h1 class="h3 fw-bold mb-0 text-dark">Détails du Ticket</h1>
          <p class="text-muted mb-0 small">Consultation de l'incident #{{ route.params.id }}</p>
        </div>
      </div>
    </header>

    <div class="row justify-content-center">
      <div class="col-12 col-xl-8">
        <TicketDetail
          :ticket="selectedTicket"
          :loading="detailLoading"
          :error="detailError"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.ticket-detail-page {
  background-color: #f8f9fa;
  min-height: calc(100vh - 60px);
}
.btn-white { background: white; color: #475569; transition: all 0.2s; }
.btn-white:hover { background: #f1f5f9; color: #1e293b; transform: translateX(-2px); }
</style>
