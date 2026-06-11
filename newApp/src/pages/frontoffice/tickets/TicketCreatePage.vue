<script setup>
import { useTicketCreate } from '../../../composables/frontoffice/tickets/useTicketCreate'
import TicketCreateForm from '../../../components/frontoffice/tickets/TicketCreateForm.vue'

const {
  form,
  selectedElements,
  submitting,
  errorText,
  successText,
  canSubmit,
  submit,
  users,
  addCostRow,
  removeCostRow,
} = useTicketCreate()
</script>

<template>
  <div class="fo-page-container">
    <header class="mb-4 d-flex align-items-center gap-3">
      <div class="icon-circle bg-success text-white">
        <i class="bi bi-megaphone-fill"></i>
      </div>
      <div>
        <h1 class="h3 fw-bold mb-1 text-slate-800">Déclarer un Incident</h1>
        <p class="text-muted mb-0 small">
          Envoyez une demande d'assistance à notre équipe technique.
        </p>
      </div>
    </header>

    <div class="row justify-content-center">
      <div class="col-12 col-xl-10">
        <TicketCreateForm
          :form="form"
          :selected-elements="selectedElements"
          :submitting="submitting"
          :can-submit="canSubmit"
          :error-text="errorText"
          :success-text="successText"
          :users="users"
          @update:selected-elements="selectedElements = $event"
          @submit="submit"
          @add-cost="addCostRow"
          @remove-cost="removeCostRow"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fo-page-container {
  animation: slideUp 0.4s ease-out;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
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
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.text-slate-800 {
  color: #1e293b;
}
</style>
