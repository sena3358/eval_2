<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  ticket: { type: Object, default: null }
})

const emit = defineEmits(['close', 'confirm'])

const solution = ref('')
const loading = ref(false)

watch(() => props.show, (newVal) => {
  if (newVal) {
    solution.value = ''
  }
})

const handleConfirm = () => {
  if (!solution.value.trim()) return
  emit('confirm', { solution: solution.value })
}
</script>

<template>
  <div v-if="show" class="modal-overlay d-flex align-items-center justify-content-center">
    <div class="modal-card bg-white rounded-4 shadow-lg overflow-hidden animate-in">
      <div class="modal-header border-0 pb-0 pt-4 px-4 d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-3">
          <div class="icon-box bg-success-subtle text-success rounded-3">
            <i class="bi bi-check2-circle"></i>
          </div>
          <div>
            <h5 class="fw-bold mb-0">Résolution du ticket</h5>
            <p class="text-muted small mb-0">Indiquez la solution apportée</p>
          </div>
        </div>
        <button class="btn-close" @click="emit('close')"></button>
      </div>

      <div class="modal-body p-4">
        <div v-if="ticket" class="ticket-brief mb-4 p-3 bg-light rounded-3">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <span class="badge bg-white text-dark shadow-sm">#{{ ticket.id }}</span>
          </div>
          <div class="fw-bold text-dark small-title">{{ ticket.name }}</div>
        </div>

        <div class="form-group mb-3">
          <label class="form-label small fw-bold text-muted mb-2">SOLUTION TECHNIQUE</label>
          <textarea 
            v-model="solution" 
            class="form-control border-0 bg-light rounded-3 p-3" 
            rows="5"
            placeholder="Décrivez précisément ce qui a été fait pour résoudre le problème..."
            autofocus
          ></textarea>
        </div>

        <div class="alert alert-info border-0 rounded-3 small d-flex gap-3 mb-0">
          <i class="bi bi-info-circle-fill"></i>
          <div>
            En validant, le ticket passera au statut <strong>Clos</strong> et le client sera notifié de la solution.
          </div>
        </div>
      </div>

      <div class="modal-footer border-0 p-4 pt-0">
        <button class="btn btn-light px-4 rounded-pill fw-bold" @click="emit('close')">
          Annuler
        </button>
        <button 
          class="btn btn-success px-4 rounded-pill fw-bold d-flex align-items-center gap-2"
          :disabled="!solution.trim() || loading"
          @click="handleConfirm"
        >
          <span v-if="loading" class="spinner-border spinner-border-sm"></span>
          <span>Clôturer le ticket</span>
          <i class="bi bi-check-lg"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(4px);
  z-index: 2000;
}

.modal-card {
  width: 100%;
  max-width: 550px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.icon-box {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.small-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.animate-in {
  animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

textarea {
  resize: none;
  font-size: 0.95rem;
  transition: all 0.2s;
}

textarea:focus {
  background: white !important;
  box-shadow: 0 0 0 4px rgba(25, 135, 84, 0.1) !important;
}

.btn-success {
  box-shadow: 0 4px 12px rgba(25, 135, 84, 0.2);
}

.btn-success:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(25, 135, 84, 0.3);
}
</style>
