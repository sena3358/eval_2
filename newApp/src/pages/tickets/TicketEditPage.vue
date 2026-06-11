<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { createTicketsApi } from '../../services/tickets/ticketsApi'
import { ticketStatuses, ticketTypes, ticketPriorities } from '../../services/tickets/ticketsConfig'

const router = useRouter()
const route = useRoute()
const api = createTicketsApi()

const ticketId = route.params.id
const loading = ref(true)
const saving = ref(false)
const error = ref(null)
const success = ref(false)

const costs = ref([]) // Coûts déjà en base
const loadingCosts = ref(false)
const savingGlobal = ref(false)

// Liste des nouveaux coûts à ajouter au moment du save principal
const newCosts = ref([])

const grandTotal = computed(() => {
  return costs.value.reduce((acc, c) => {
    const rowTotal = Number(c.cost_fixed || 0) + 
                     Number(c.cost_material || 0) + 
                     (Number(c.actiontime || 0) / 3600 * Number(c.cost_time || 0))
    return acc + rowTotal
  }, 0)
})

const addNewCostRow = () => {
  newCosts.value.push({
    name: "Intervention",
    actiontime: 0,
    cost_time: 0,
    cost_fixed: 0
  })
}

const removeNewCostRow = (index) => {
  newCosts.value.splice(index, 1)
}

const form = ref({
  name: '',
  content: '',
  status: 1,
  type: 1,
  priority: 3
})

const fetchTicket = async () => {
  loading.value = true
  try {
    const data = await api.getTicket(ticketId)
    form.value = {
      name: data.name,
      content: data.content,
      status: Number(data.status),
      type: Number(data.type),
      priority: Number(data.priority)
    }
  } catch (e) {
    error.value = "Impossible de charger les détails du ticket."
    console.error(e)
  } finally {
    loading.value = false
  }
}

const fetchCosts = async () => {
  loadingCosts.value = true
  try {
    costs.value = await api.getTicketCosts(ticketId)
  } catch (e) {
    console.warn("Erreur chargement coûts:", e)
  } finally {
    loadingCosts.value = false
  }
}

const handleSave = async () => {
  savingGlobal.value = true
  error.value = null
  success.value = false
  try {
    // 1. Update du ticket
    await api.updateTicket(ticketId, form.value)
    
    // 2. Création des coûts en attente
    for (const cost of newCosts.value) {
      if (cost.actiontime > 0 || cost.cost_time > 0 || cost.cost_fixed > 0) {
        await api.addTicketCost(ticketId, cost)
      }
    }

    success.value = true
    setTimeout(() => {
      router.push('/tickets')
    }, 1500)
  } catch (e) {
    error.value = "Erreur lors de la mise à jour globale."
    console.error(e)
  } finally {
    savingGlobal.value = false
  }
}

onMounted(() => {
  fetchTicket()
  fetchCosts()
})
</script>

<template>
  <div class="ticket-edit-page p-4">
    <div class="container-fluid max-w-3xl">
      <!-- Header -->
      <header class="mb-4 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-3">
          <button @click="router.back()" class="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex">
            <i class="bi bi-arrow-left fs-5"></i>
          </button>
          <div>
            <h1 class="h3 fw-bold mb-0 text-dark">Modifier le Ticket #{{ ticketId }}</h1>
            <p class="text-muted mb-0 small">Mise à jour des informations générales</p>
          </div>
        </div>
      </header>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-2 text-muted">Chargement du ticket...</p>
      </div>

      <div v-else class="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div class="card-body p-4">
          <!-- Messages -->
          <div v-if="error" class="alert alert-danger border-0 rounded-3 mb-4">
            {{ error }}
          </div>
          <div v-if="success" class="alert alert-success border-0 rounded-3 mb-4">
            Ticket mis à jour avec succès ! Redirection...
          </div>

          <form @submit.prevent="handleSave">
            <div class="row g-4">
              <!-- Titre -->
              <div class="col-12">
                <label class="form-label fw-bold small text-uppercase text-muted">Titre du ticket</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  class="form-control form-control-lg border-2 rounded-3" 
                  placeholder="Ex: Problème d'impression..."
                  required
                >
              </div>

              <!-- Type et Statut -->
              <div class="col-md-6">
                <label class="form-label fw-bold small text-uppercase text-muted">Type</label>
                <select v-model="form.type" class="form-select border-2 rounded-3">
                  <option v-for="(val, key) in ticketTypes" :key="key" :value="Number(key)">
                    {{ val.label }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold small text-uppercase text-muted">Statut</label>
                <select v-model="form.status" class="form-select border-2 rounded-3">
                  <option v-for="(val, key) in ticketStatuses" :key="key" :value="Number(key)">
                    {{ val.label }}
                  </option>
                </select>
              </div>

              <!-- Priorité -->
              <div class="col-12 text-center py-2 bg-light rounded-3">
                <label class="form-label d-block fw-bold small text-uppercase text-muted mb-3">Priorité</label>
                <div class="d-flex justify-content-center gap-3">
                  <div v-for="(val, key) in ticketPriorities" :key="key" class="priority-opt">
                    <input 
                      type="radio" 
                      :id="'prio-'+key" 
                      :value="Number(key)" 
                      v-model="form.priority" 
                      class="btn-check"
                    >
                    <label 
                      :for="'prio-'+key" 
                      class="btn btn-outline-light border text-dark btn-sm rounded-pill px-3 transition-all"
                      :class="{'prio-active': form.priority === Number(key)}"
                      :style="form.priority === Number(key) ? { backgroundColor: 'var(--bs-'+val.color+')', color: 'white', borderColor: 'var(--bs-'+val.color+')' } : {}"
                    >
                      {{ val.label }}
                    </label>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <div class="col-12">
                <label class="form-label fw-bold small text-uppercase text-muted">Description</label>
                <textarea 
                  v-model="form.content" 
                  class="form-control border-2 rounded-3" 
                  rows="6" 
                  placeholder="Décrivez le problème en détail..."
                ></textarea>
              </div>

              <!-- Actions -->
              <div class="col-12 pt-3">
                <div class="d-flex gap-3">
                  <button 
                    type="submit" 
                    class="btn btn-primary btn-lg flex-grow-1 rounded-3 fw-bold shadow-sm"
                    :disabled="savingGlobal"
                  >
                    <span v-if="savingGlobal" class="spinner-border spinner-border-sm me-2"></span>
                    Enregistrer toutes les modifications
                  </button>
                  <button 
                    type="button" 
                    @click="router.back()" 
                    class="btn btn-light btn-lg border rounded-3 px-4"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Section Coûts -->
      <div v-if="!loading" class="card border-0 shadow-sm rounded-4 mt-4 overflow-hidden">
        <div class="card-header bg-white py-3 border-0">
          <h2 class="h5 fw-bold mb-0 text-dark"><i class="bi bi-currency-euro me-2 text-success"></i>Gestion des Coûts</h2>
        </div>
        <div class="card-body p-4 pt-0">
          <!-- Liste des coûts existants -->
          <div class="mb-4">
            <h3 class="h6 fw-bold text-muted text-uppercase mb-3">Coûts enregistrés</h3>
            <div v-if="loadingCosts" class="text-center py-3">
              <div class="spinner-border spinner-border-sm text-success" role="status"></div>
            </div>
            <div v-else-if="!costs.length" class="text-muted small italic p-3 bg-light rounded-3">
              Aucun coût enregistré pour ce ticket.
            </div>
            <div v-else class="table-responsive">
              <table class="table table-sm align-middle">
                <thead>
                  <tr class="text-muted smaller text-uppercase">
                    <th>Libellé</th>
                    <th class="text-end">Durée (s)</th>
                    <th class="text-end">Coût Mo</th>
                    <th class="text-end">Coût Fixe</th>
                    <th class="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cost in costs" :key="cost.id">
                    <td>{{ cost.name }}</td>
                    <td class="text-end font-monospace">{{ cost.actiontime }}</td>
                    <td class="text-end font-monospace">{{ cost.cost_time }}€</td>
                    <td class="text-end font-monospace">{{ cost.cost_fixed }}€</td>
                    <td class="text-end fw-bold">
                      {{ (
                        Number(cost.cost_fixed || 0) + 
                        Number(cost.cost_material || 0) + 
                        (Number(cost.actiontime || 0) / 3600 * Number(cost.cost_time || 0))
                      ).toFixed(2) }}€
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Grand Total Summary (BO) -->
            <div class="mt-3 p-3 bg-white border border-primary border-opacity-25 rounded-3 d-flex justify-content-between align-items-center">
              <span class="text-muted small text-uppercase fw-bold">Total cumulé des coûts</span>
              <span class="fs-4 fw-bold text-primary">{{ grandTotal.toFixed(2) }}€</span>
            </div>
          </div>

          <!-- Section Nouveaux Coûts (à ajouter) -->
          <div class="mt-4 p-3 border-start border-4 border-success bg-light rounded-3">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h3 class="h6 fw-bold mb-0">Ajouter de nouveaux coûts</h3>
              <button type="button" @click="addNewCostRow" class="btn btn-success btn-sm rounded-pill px-3">
                <i class="bi bi-plus-lg me-1"></i> Ajouter une ligne
              </button>
            </div>

            <div v-if="!newCosts.length" class="text-center py-2 text-muted small italic">
              Cliquez sur "Ajouter une ligne" pour saisir un nouveau coût.
            </div>

            <div v-for="(nc, idx) in newCosts" :key="idx" class="row g-2 mb-3 align-items-end animate-fade-in">
              <div class="col-md-3">
                <label class="form-label smaller fw-bold text-muted">Libellé</label>
                <input v-model="nc.name" type="text" class="form-control form-control-sm">
              </div>
              <div class="col-md-2">
                <label class="form-label smaller fw-bold text-muted">Durée (s)</label>
                <input v-model.number="nc.actiontime" type="number" class="form-control form-control-sm text-end font-monospace">
              </div>
              <div class="col-md-2">
                <label class="form-label smaller fw-bold text-muted">Coût Mo (€)</label>
                <input v-model.number="nc.cost_time" type="number" step="0.01" class="form-control form-control-sm text-end font-monospace">
              </div>
              <div class="col-md-2">
                <label class="form-label smaller fw-bold text-muted">Fixe (€)</label>
                <input v-model.number="nc.cost_fixed" type="number" step="0.01" class="form-control form-control-sm text-end font-monospace">
              </div>
              <div class="col-md-2 text-end">
                <button type="button" @click="removeNewCostRow(idx)" class="btn btn-outline-danger btn-sm border-0" title="Supprimer cette ligne">
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
            
            <div v-if="newCosts.length" class="mt-2 text-center">
              <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-1">
                {{ newCosts.length }} coût(s) en attente de validation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ticket-edit-page {
  background-color: #f8f9fa;
  min-height: 100vh;
}
.max-w-3xl {
  max-width: 800px;
  margin: 0 auto;
}
.form-control:focus, .form-select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.1);
}
.prio-active {
  transform: scale(1.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.transition-all {
  transition: all 0.2s ease-in-out;
}
</style>
