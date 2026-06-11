<script setup>
import { ticketTypes, ticketPriorities } from '../../../services/tickets/ticketsConfig'
import ElementPicker from './ElementPicker.vue'

const props = defineProps({
  form: { type: Object, required: true },
  selectedElements: { type: Array, default: () => [] },
  submitting: Boolean,
  canSubmit: Boolean,
  errorText: { type: String, default: '' },
  successText: { type: String, default: '' },
  users: { type: Array, default: () => [] },
})

const emit = defineEmits(['submit', 'update:selectedElements', 'add-cost', 'remove-cost'])

// Listes deroulantes construites a partir des enumerations partagees
const typeOptions = Object.entries(ticketTypes).map(([value, info]) => ({
  value: Number(value),
  label: info.label,
}))
const priorityOptions = Object.entries(ticketPriorities).map(([value, info]) => ({
  value: Number(value),
  label: info.label,
}))

// Logique pour separer/recombiner la date et l'heure GLPI (YYYY-MM-DD HH:mm:ss)
import { computed } from 'vue'
const datePart = computed({
  get: () => props.form.date?.split(' ')[0] || '',
  set: (val) => {
    const time = props.form.date?.split(' ')[1] || '00:00:00'
    props.form.date = `${val} ${time}`
  }
})
const timePart = computed({
  get: () => props.form.date?.split(' ')[1]?.slice(0, 5) || '',
  set: (val) => {
    const date = props.form.date?.split(' ')[0] || new Date().toISOString().slice(0, 10)
    // On ajoute :00 pour les secondes car GLPI est strict
    props.form.date = `${date} ${val}:00`
  }
})
</script>

<template>
  <form class="d-flex flex-column gap-4" @submit.prevent="emit('submit')">
    <!-- Informations du ticket -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="card-header bg-white py-3 border-0">
        <h2 class="h6 fw-bold mb-0 text-dark">
          <i class="bi bi-info-circle me-2 text-success"></i>Informations générales
        </h2>
      </div>
      <div class="card-body bg-light-subtle d-flex flex-column gap-4 p-4">
        <div class="row g-4 mb-4">
          <div class="col-12 col-md-6">
            <label for="ticket-requester" class="form-label small fw-bold text-muted text-uppercase">Demandeur</label>
            <div class="input-group">
              <span class="input-group-text bg-white border-2 border-end-0">
                <i class="bi bi-person text-muted"></i>
              </span>
              <select id="ticket-requester" v-model.number="form._users_id_requester" class="form-select border-2 border-start-0 ps-0 shadow-none">
                <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label for="ticket-name" class="form-label small fw-bold text-muted text-uppercase">Titre du ticket <span class="text-danger">*</span></label>
          <input 
            id="ticket-name" 
            v-model="form.name" 
            type="text" 
            class="form-control form-control-lg border-2 shadow-none rounded-3" 
            placeholder="Ex: Problème d'impression, Accès dossier partagé..."
            required 
          />
        </div>

        <div class="row g-4">
          <div class="col-12 col-md-4">
            <label for="ticket-type" class="form-label small fw-bold text-muted text-uppercase">Nature</label>
            <div class="input-group">
              <span class="input-group-text bg-white border-2 border-end-0">
                <i class="bi bi-tag text-muted"></i>
              </span>
              <select id="ticket-type" v-model.number="form.type" class="form-select border-2 border-start-0 ps-0 shadow-none">
                <option v-for="opt in typeOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <label for="ticket-urgency" class="form-label small fw-bold text-muted text-uppercase">Urgence</label>
            <div class="input-group">
              <span class="input-group-text bg-white border-2 border-end-0">
                <i class="bi bi-lightning text-muted"></i>
              </span>
              <select id="ticket-urgency" v-model.number="form.urgency" class="form-select border-2 border-start-0 ps-0 shadow-none">
                <option v-for="opt in priorityOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <label for="ticket-date" class="form-label small fw-bold text-muted text-uppercase">Date & Heure d'ouverture</label>
            <div class="d-flex gap-2">
              <input 
                type="date" 
                v-model="datePart" 
                class="form-control border-2 shadow-none" 
              />
              <input 
                type="time" 
                v-model="timePart" 
                class="form-control border-2 shadow-none" 
              />
            </div>
          </div>
        </div>

        <div>
          <label for="ticket-content" class="form-label small fw-bold text-muted text-uppercase">Description détaillée</label>
          <textarea 
            id="ticket-content" 
            v-model="form.content" 
            class="form-control border-2 shadow-none rounded-3" 
            rows="5" 
            placeholder="Veuillez décrire votre problème ou votre demande avec le plus de précision possible..."
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Rattachement d'elements -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="card-header bg-white py-3 border-0">
        <h2 class="h6 fw-bold mb-0 text-dark">
          <i class="bi bi-link-45deg me-2 text-success"></i>Éléments concernés
        </h2>
      </div>
      <div class="card-body bg-light-subtle p-4">
        <div class="alert alert-info border-0 rounded-3 mb-4 small d-flex align-items-center">
          <i class="bi bi-info-circle-fill me-2 fs-5"></i>
          Rattachez vos équipements pour aider nos techniciens à identifier la source du problème.
        </div>
        <ElementPicker
          :model-value="selectedElements"
          @update:model-value="emit('update:selectedElements', $event)"
        />
      </div>
    </div>

    <!-- Saisie des couts -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="card-header bg-white py-3 border-0 d-flex align-items-center justify-content-between">
        <h2 class="h6 fw-bold mb-0 text-dark">
          <i class="bi bi-currency-euro me-2 text-success"></i>Coûts de l'intervention
        </h2>
        <button type="button" @click="emit('add-cost')" class="btn btn-sm btn-outline-success rounded-pill px-3">
          <i class="bi bi-plus-lg me-1"></i> Ajouter une ligne
        </button>
      </div>
      <div class="card-body bg-light-subtle p-4 pt-0">
        <div v-if="!form.costs.length" class="text-center py-4 text-muted small italic">
          Aucun coût renseigné. Cliquez sur "Ajouter une ligne" si nécessaire.
        </div>
        
        <div class="table-responsive" v-else>
          <table class="table table-borderless align-middle mb-0">
            <thead>
              <tr class="small fw-bold text-muted text-uppercase">
                <th style="min-width: 200px;">Libellé</th>
                <th style="width: 120px;" class="text-end">Durée (s)</th>
                <th style="width: 120px;" class="text-end">Coût Mo (€)</th>
                <th style="width: 120px;" class="text-end">Fixe (€)</th>
                <th style="width: 50px;"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cost, idx) in form.costs" :key="idx" class="animate-fade-in">
                <td>
                  <input v-model="cost.name" type="text" class="form-control form-control-sm border-2">
                </td>
                <td>
                  <input v-model.number="cost.actiontime" type="number" class="form-control form-control-sm border-2 text-end font-monospace">
                </td>
                <td>
                  <input v-model.number="cost.cost_time" type="number" step="0.01" class="form-control form-control-sm border-2 text-end font-monospace">
                </td>
                <td>
                  <input v-model.number="cost.cost_fixed" type="number" step="0.01" class="form-control form-control-sm border-2 text-end font-monospace">
                </td>
                <td class="text-end">
                  <button type="button" @click="emit('remove-cost', idx)" class="btn btn-link text-danger p-0 border-0 shadow-none">
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="errorText" class="alert alert-danger border-0 shadow-sm rounded-4 d-flex align-items-center py-3">
      <i class="bi bi-x-circle-fill me-3 fs-4"></i>
      <div>{{ errorText }}</div>
    </div>
    
    <div v-if="successText" class="alert alert-success border-0 shadow-sm rounded-4 d-flex align-items-center py-3">
      <i class="bi bi-check-circle-fill me-3 fs-4"></i>
      <div>{{ successText }}</div>
    </div>

    <div class="d-flex justify-content-end gap-3 mt-2 mb-5">
      <button class="btn btn-lg btn-success shadow px-5 py-3 rounded-4 fw-bold d-flex align-items-center gap-2" type="submit" :disabled="!canSubmit">
        <span v-if="submitting" class="spinner-border spinner-border-sm"></span>
        <i v-else class="bi bi-send-fill"></i>
        <span>Envoyer la demande</span>
      </button>
    </div>
  </form>
</template>

<style scoped>
.form-label {
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.border-2 {
  border-width: 2px !important;
  border-color: #f1f5f9 !important;
}

.form-control:focus, .form-select:focus {
  border-color: #10b981 !important;
  background-color: #fff;
}

.btn-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-success:hover:not(:disabled) {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 15px rgba(16, 185, 129, 0.3) !important;
}

.btn-success:active {
  transform: translateY(0);
}

.bg-light-subtle {
  background-color: #f8fafc !important;
}
</style>
