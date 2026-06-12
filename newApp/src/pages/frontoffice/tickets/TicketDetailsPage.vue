<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { createTicketsApi } from '../../../services/tickets/ticketsApi'
import { foAuthState } from '../../../services/frontoffice/auth/foAuthSession'

const route = useRoute()
const router = useRouter()
const id = computed(() => route.params.id)

const api = createTicketsApi({ getToken: () => foAuthState.sessionToken })

const loading = ref(false)
const ticket = ref(null)
const activeTab = ref('description') // 'description', 'items', 'costs', 'solution'

const items = ref([])
const costs = ref([])
const solutions = ref([])
const loadingSub = ref(false)

const grandTotal = computed(() => {
  return costs.value.reduce((acc, c) => {
    const rowTotal = Number(c.cost_fixed || 0) + 
                     Number(c.cost_material || 0) + 
                     (Number(c.actiontime || 0) / 3600 * Number(c.cost_time || 0))
    return acc + rowTotal
  }, 0)
})

const cleanContent = (html) => {
  if (!html) return ''
  return html.replace(/<[^>]*>?/gm, '').trim()
}

const statusLabel = (status) => {
  const map = {
    1: 'Nouveau',
    2: 'En cours (assigné)',
    3: 'En cours (planifié)',
    4: 'En attente',
    5: 'Résolu',
    6: 'Clos'
  }
  return map[status] || 'Inconnu'
}

const formatDuration = (seconds) => {
  if (!seconds || seconds == 0) return '0 seconde'
  const s = Number(seconds)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const hStr = h > 0 ? `${h} heure${h > 1 ? 's' : ''}` : ''
  const mStr = m > 0 ? `${m} minute${m > 1 ? 's' : ''}` : ''
  return [hStr, mStr].filter(Boolean).join(' ') || `${s} sec`
}

const fetchTicketData = async () => {
  if (!id.value) return
  loading.value = true
  try {
    // 1. Fetch main ticket data (assuming you have a getTicket method)
    // If not, we might need to search it or use the generic get method if added to ticketsApi
    ticket.value = await api.getTicket(id.value)
    
    // 2. Fetch sub-resources
    loadingSub.value = true
    const [i, c, s] = await Promise.all([
      api.getTicketItems(id.value),
      api.getTicketCosts(id.value),
      api.getTicketSolutions(id.value)
    ])
    items.value = i
    costs.value = c
    solutions.value = s
  } catch (e) {
    console.error('Erreur details ticket:', e)
  } finally {
    loading.value = false
    loadingSub.value = false
  }
}

onMounted(fetchTicketData)

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="fo-page-container">
    <nav class="mb-4 d-flex align-items-center gap-3">
      <button @click="goBack" class="btn btn-white shadow-sm rounded-3 px-3 border">
        <i class="bi bi-arrow-left me-2"></i>Retour
      </button>
      <div class="ms-2">
        <h1 class="h4 fw-bold mb-0 text-slate-800">Détails de la demande</h1>
        <div class="text-muted small">
          Ticket <span class="mx-2 text-silver opacity-50">/</span> #{{ id }}
        </div>
      </div>
    </nav>

    <div v-if="loading" class="card border-0 shadow-sm rounded-4 py-5 text-center">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="text-muted small mt-2 fw-medium">Récupération des informations du ticket...</p>
    </div>

    <div v-else-if="ticket" class="row g-4 animate-in">
      <div class="col-12 col-lg-8">
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
          <!-- Header du Ticket -->
          <div class="card-header bg-white border-0 p-4 pb-2">
            <div class="d-flex align-items-center gap-2 mb-3">
              <span class="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 fw-bold">
                {{ statusLabel(ticket.status) }}
              </span>
              <span class="badge rounded-pill bg-light text-dark border px-3 py-2">
                Priorité {{ ticket.priority || 3 }}
              </span>
            </div>
            <h2 class="h3 fw-bold text-slate-800 mb-2">{{ ticket.name }}</h2>
            <p class="text-muted small mb-0">Créé le {{ ticket.date }}</p>
          </div>

          <!-- Onglets -->
          <div class="px-4 border-bottom mt-2">
            <ul class="nav nav-tabs border-0 gap-4">
              <li class="nav-item">
                <a class="nav-link custom-tab" :class="{ active: activeTab === 'description' }" @click="activeTab = 'description'">Description</a>
              </li>
              <li class="nav-item">
                <a class="nav-link custom-tab" :class="{ active: activeTab === 'items' }" @click="activeTab = 'items'">
                  Matériels <span v-if="items.length" class="badge rounded-pill bg-light text-dark ms-1">{{ items.length }}</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link custom-tab" :class="{ active: activeTab === 'costs' }" @click="activeTab = 'costs'">
                  Coûts <span v-if="costs.length" class="badge rounded-pill bg-light text-dark ms-1">{{ costs.length }}</span>
                </a>
              </li>
              <li class="nav-item" v-if="solutions.length || ticket.status >= 5">
                <a class="nav-link custom-tab" :class="{ active: activeTab === 'solution' }" @click="activeTab = 'solution'">Solution</a>
              </li>
            </ul>
          </div>

          <!-- Contenu des onglets -->
          <div class="card-body p-4 min-vh-50">
            <div v-if="loadingSub" class="text-center py-5">
              <div class="spinner-border spinner-border-sm text-primary" role="status"></div>
            </div>

            <template v-else>
              <!-- Description -->
              <div v-if="activeTab === 'description'" class="animate-in">
                <div class="content-box p-4 bg-light bg-opacity-25 rounded-4 border">
                  {{ cleanContent(ticket.content) || '(Aucune description)' }}
                </div>
              </div>

              <!-- Matériels -->
              <div v-if="activeTab === 'items'" class="animate-in">
                <div v-if="items.length" class="row g-3">
                  <div v-for="it in items" :key="it.id" class="col-12 col-md-6">
                    <div class="p-3 rounded-4 border bg-light-subtle d-flex align-items-center gap-3">
                      <div class="icon-box-large bg-white border rounded-3 shadow-xs">
                        <i class="bi bi-cpu fs-4 text-primary"></i>
                      </div>
                      <div>
                        <div class="fw-bold">{{ it.itemtype }}</div>
                        <div class="text-muted small">ID: {{ it.items_id }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="text-center py-5 text-muted">
                   <i class="bi bi-info-circle fs-2 d-block mb-2 opacity-25"></i>
                   Aucun matériel associé.
                </div>
              </div>

              <!-- Couts -->
              <div v-if="activeTab === 'costs'" class="animate-in">
                <div v-if="costs.length" class="table-responsive border rounded-4 overflow-hidden">
                  <table class="table table-hover align-middle mb-0">
                    <thead class="bg-light-subtle">
                      <tr>
                        <th class="ps-4 py-3 text-uppercase smaller fw-bold text-muted">Détail</th>
                        <th class="py-3 text-end text-uppercase smaller fw-bold text-muted">Temps</th>
                        <th class="py-3 text-end text-uppercase smaller fw-bold text-muted">Fixe</th>
                        <th class="py-3 text-end text-uppercase smaller fw-bold text-muted">Matériel</th>
                        <th class="pe-4 py-3 text-end text-uppercase smaller fw-bold text-muted">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="c in costs" :key="c.id">
                        <td class="ps-4">Intervention #{{ c.id }}</td>
                        <td class="text-end fw-medium">{{ formatDuration(c.actiontime) }}</td>
                        <td class="text-end">{{ Number(c.cost_fixed || 0).toFixed(2) }}€</td>
                        <td class="text-end">{{ Number(c.cost_material || 0).toFixed(2) }}€</td>
                        <td class="pe-4 text-end fw-bold text-primary">
                          {{ (
                            Number(c.cost_fixed || 0) + 
                            Number(c.cost_material || 0) + 
                            (Number(c.actiontime || 0) / 3600 * Number(c.cost_time || 0))
                          ).toFixed(2) }}€
                        </td>
                      </tr>
                    </tbody>
                    <tfoot class="bg-light">
                      <tr class="fw-bold fs-6">
                        <td colspan="4" class="ps-4 py-3 text-end text-muted small text-uppercase">Total cumulé</td>
                        <td class="pe-4 py-3 text-end text-primary fs-5">
                          {{ grandTotal.toFixed(2) }}€
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div v-else class="text-center py-5 text-muted">
                    <i class="bi bi-wallet2 fs-2 d-block mb-2 opacity-25"></i>
                    Aucun coût enregistré.
                </div>
              </div>

              <!-- Solution -->
              <div v-if="activeTab === 'solution'" class="animate-in">
                <div v-if="solutions.length" class="solution-card p-4 rounded-4 border border-success-subtle bg-success-soft">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <div class="solution-badge bg-success text-white">
                      <i class="bi bi-check-lg"></i>
                    </div>
                    <span class="fw-bold text-success text-uppercase smaller letter-spacing-1">Solution validée</span>
                  </div>
                  <div v-for="s in solutions" :key="s.id" class="text-dark">
                    {{ cleanContent(s.content) }}
                  </div>
                </div>
                <div v-else class="text-center py-5 text-muted">
                   <i class="bi bi-lightbulb fs-2 d-block mb-2 opacity-25"></i>
                   Pas encore de solution.
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- <div class="col-12 col-lg-4">
        <div class="card border-0 shadow-sm rounded-4 p-4 sticky-top" style="top: 2rem;">
          <h4 class="h6 fw-bold text-muted text-uppercase mb-4">Informations Rapides</h4>
          
          <div class="quick-info-item mb-4">
            <div class="smaller fw-bold text-muted text-uppercase mb-1">Technicien assigné</div>
            <div v-if="ticket._users_id_assign" class="d-flex align-items-center gap-2">
               <div class="avatar-sm bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold">T</div>
               <span class="fw-medium text-dark">Technicien GLPI</span>
            </div>
            <div v-else class="text-muted small italic">Non assigné</div>
          </div>

          <div class="quick-info-item mb-4">
            <div class="smaller fw-bold text-muted text-uppercase mb-1">Dernière mise à jour</div>
            <div class="fw-medium text-dark">{{ ticket.date_mod || ticket.date }}</div>
          </div>

          <hr class="my-4 opacity-10">

          <div class="alert alert-warning border-0 rounded-4 small mb-0">
             <i class="bi bi-info-circle-fill me-2"></i>
             Vous ne pouvez modifier ce ticket que via le portail assistance pour le moment.
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.fo-page-container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-slate-800 { color: #1e293b; }
.text-silver { color: #94a3b8; }

.btn-white {
  background-color: white;
  color: #475569;
}

.custom-tab {
  border: none !important;
  color: #64748b;
  font-weight: 600;
  padding: 1rem 0;
  margin-bottom: -1px;
  transition: all 0.2s;
  cursor: pointer;
}

.custom-tab:hover {
  color: #1e293b;
}

.custom-tab.active {
  color: #3b82f6 !important;
  border-bottom: 2px solid #3b82f6 !important;
  background: none !important;
}

.content-box {
  line-height: 1.7;
  white-space: pre-wrap;
  font-size: 1.05rem;
  color: #334155;
}

.icon-box-large {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bg-light-subtle {
  background-color: #f8fafc !important;
}

.bg-success-soft {
  background-color: #f0fdf4 !important;
}

.solution-badge {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.avatar-sm {
  width: 32px;
  height: 32px;
  font-size: 0.75rem;
}

.smaller { font-size: 0.75rem; }
.letter-spacing-1 { letter-spacing: 0.05em; }

.min-vh-50 { min-height: 400px; }

.shadow-xs { box-shadow: 0 1px 2px rgba(0,0,0,0.05); }

.animate-in {
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
