<script setup>
import { ref, watch } from 'vue'
import { createUsersApi } from '../../../services/users/userApi'
import { foAuthState } from '../../../services/frontoffice/auth/foAuthSession'

const props = defineProps({
  show: { type: Boolean, default: false },
  ticket: { type: Object, default: null }
})

const emit = defineEmits(['close', 'confirm'])

const api = createUsersApi({ getToken: () => foAuthState.sessionToken })

const searchName = ref('')
const users = ref([])
const selectedUserId = ref('')
const loading = ref(false)

const searchUsers = async () => {
  if (searchName.value.length < 2) {
    users.value = []
    return
  }
  loading.value = true
  try {
    users.value = await api.searchUsers(searchName.value)
  } finally {
    loading.value = false
  }
}

const confirm = () => {
  if (!selectedUserId.value) return
  const user = users.value.find(u => u.id == selectedUserId.value)
  emit('confirm', { userId: selectedUserId.value, userName: user?.name })
  reset()
}

const reset = () => {
  searchName.value = ''
  users.value = []
  selectedUserId.value = ''
}

watch(() => props.show, (newVal) => {
  if (newVal) reset()
})
</script>

<template>
  <div v-if="show" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-card shadow-lg border-0 rounded-4 overflow-hidden">
      <div class="modal-header border-0 bg-primary text-white p-4">
        <div class="d-flex align-items-center gap-3">
          <div class="icon-box bg-white text-primary rounded-circle shadow-sm">
            <i class="bi bi-person-plus-fill"></i>
          </div>
          <div>
            <h3 class="h5 fw-bold mb-0 text-white">Affectation Responsable</h3>
            <p class="small opacity-75 mb-0 text-white">Veuillez choisir le responsable pour le ticket #{{ ticket?.id }}</p>
          </div>
        </div>
        <button type="button" class="btn-close btn-close-white" @click="emit('close')"></button>
      </div>

      <div class="modal-body p-4 bg-light-subtle">
        <label class="form-label small fw-bold text-muted text-uppercase mb-2">Rechercher un technicien</label>
        <div class="input-group mb-3 shadow-sm rounded-3 overflow-hidden">
          <span class="input-group-text border-0 bg-white"><i class="bi bi-search text-muted"></i></span>
          <input 
            v-model="searchName" 
            type="text" 
            class="form-control border-0 py-2" 
            placeholder="Nom du technicien..." 
            @input="searchUsers"
          />
        </div>

        <div v-if="loading" class="text-center py-3">
          <div class="spinner-border spinner-border-sm text-primary" role="status"></div>
        </div>

        <div v-if="users.length" class="list-group list-group-flush shadow-sm rounded-3 overflow-hidden border">
          <label 
            v-for="user in users" 
            :key="user.id" 
            class="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 border-0"
            :class="{ active: selectedUserId == user.id }"
          >
            <input 
              v-model="selectedUserId" 
              type="radio" 
              name="tech" 
              :value="user.id" 
              class="form-check-input mt-0 custom-radio"
            />
            <div class="flex-grow-1">
              <div class="fw-bold small">{{ user.name }}</div>
              <div class="smaller text-muted">ID GLPI: {{ user.id }}</div>
            </div>
          </label>
        </div>

        <div v-else-if="searchName.length >= 2 && !loading" class="text-center py-4 bg-white rounded-3 border">
           <i class="bi bi-exclamation-circle text-muted d-block mb-2 h4"></i>
           <p class="text-muted small mb-0">Aucun technicien trouvé.</p>
        </div>
      </div>

      <div class="modal-footer border-0 p-3 bg-white shadow-top">
        <button type="button" class="btn btn-light px-4 rounded-pill" @click="emit('close')">Annuler</button>
        <button 
          type="button" 
          class="btn btn-primary px-4 rounded-pill shadow-sm d-flex align-items-center gap-2" 
          :disabled="!selectedUserId"
          @click="confirm"
        >
          <span>Confirmer l'affectation</span>
          <i class="bi bi-check-circle-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  z-index: 1200; padding: 1.5rem;
}

.modal-card {
  background: white; width: 100%; max-width: 500px;
  animation: modalScale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes modalScale {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.icon-box {
  width: 42px; height: 42px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.25rem;
}

.bg-light-subtle { background-color: #f8fafc !important; }

.list-group-item.active {
  background-color: #f0f7ff;
  border-color: #0d6efd !important;
  color: unset;
}

.custom-radio {
  width: 1.2rem; height: 1.2rem;
  cursor: pointer;
}

.shadow-top {
  box-shadow: 0 -4px 12px rgba(0,0,0,0.03);
}

.smaller { font-size: 0.7rem; }
</style>
