<script setup>
defineProps({
  stats: Object,
  loading: Boolean,
})

const elementIcons = {
  Computer: 'bi bi-pc-display',
  Software: 'bi bi-window',
  NetworkEquipment: 'bi bi-router',
  Rack: 'bi bi-server',
  Enclosure: 'bi bi-hdd-stack',
  Monitor: 'bi bi-display',
  SoftwareLicense: 'bi bi-key',
  Printer: 'bi bi-printer',
  PDU: 'bi bi-plug',
  Phone: 'bi bi-telephone',
}

const getStatusBorderClass = (status) => {
  const map = { 1: 'border-secondary', 2: 'border-primary', 3: 'border-info', 4: 'border-warning', 5: 'border-success', 6: 'border-dark' }
  return map[status] || 'border-secondary'
}

const getStatusTextClass = (status) => {
  const map = { 1: 'text-secondary', 2: 'text-primary', 3: 'text-info', 4: 'text-warning', 5: 'text-success', 6: 'text-dark' }
  return map[status] || 'text-secondary'
}

const elementIcon = (itemtype) => elementIcons[itemtype] || 'bi bi-box'

const formatCost = (val) => {
  if (!val && val !== 0) return '—'
  return Number(val).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €'
}

const formatHours = (seconds) => {
  if (!seconds) return '0 h'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  return m > 0 ? `${h} h ${m} min` : `${h} h`
}
</script>

<template>
  <div class="stats-container animate-fade-in">
    <!-- KPI HERO CARDS -->
    <div class="row g-4 mb-5">
      <div class="col-12 col-md-3">
        <div class="card border-0 bg-primary text-white shadow-lg overflow-hidden h-100 position-relative">
          <div class="card-body p-4 position-relative" style="z-index: 2;">
            <h6 class="text-white-50 fw-bold text-uppercase mb-2">Parc Informatique</h6>
            <h1 class="display-4 fw-bold mb-0">{{ loading ? '...' : stats.elements.total }}</h1>
            <p class="mb-0 mt-2 text-white-50 small">Éléments dans l'inventaire</p>
          </div>
          <i class="bi bi-cpu position-absolute end-0 bottom-0 opacity-10" style="font-size: 8rem; margin-right: -1rem; margin-bottom: -1rem;"></i>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card border-0 bg-warning text-dark shadow-lg overflow-hidden h-100 position-relative">
          <div class="card-body p-4 position-relative" style="z-index: 2;">
            <h6 class="fw-bold text-uppercase mb-2 opacity-75">Tickets Ouverts</h6>
            <h1 class="display-4 fw-bold mb-0">{{ loading ? '...' : stats.tickets.total }}</h1>
            <p class="mb-0 mt-2 small opacity-75">Demandes d'assistance</p>
          </div>
          <i class="bi bi-life-preserver position-absolute end-0 bottom-0 opacity-10" style="font-size: 8rem; margin-right: -1rem; margin-bottom: -1rem;"></i>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card border-0 bg-success text-white shadow-lg overflow-hidden h-100 position-relative">
          <div class="card-body p-4 position-relative" style="z-index: 2;">
            <h6 class="text-white-50 fw-bold text-uppercase mb-2">Coût Total</h6>
            <h2 class="fw-bold mb-0 mt-2">{{ loading ? '...' : formatCost(stats.tickets.costs?.totalCostAll) }}</h2>
            <p class="mb-0 mt-2 text-white-50 small">Tous coûts confondus</p>
          </div>
          <i class="bi bi-currency-euro position-absolute end-0 bottom-0 opacity-10" style="font-size: 8rem; margin-right: -1rem; margin-bottom: -1rem;"></i>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <!-- <div class="card border-0 text-white shadow-lg overflow-hidden h-100 position-relative" style="background: linear-gradient(135deg, #6366f1, #8b5cf6);">
          <div class="card-body p-4 position-relative" style="z-index: 2;">
            <h6 class="text-white-50 fw-bold text-uppercase mb-2">Coût par Ticket</h6>
            <h2 class="fw-bold mb-0 mt-2">{{ loading ? '...' : formatCost(stats.tickets.costs?.costPerTicket) }}</h2>
            <p class="mb-0 mt-2 text-white-50 small">Coût moyen par incident</p>
          </div>
          <i class="bi bi-receipt position-absolute end-0 bottom-0 opacity-10" style="font-size: 8rem; margin-right: -1rem; margin-bottom: -1rem;"></i>
        </div> -->
      </div>
    </div>

    <!-- ROW 2: Inventory + Status + Types -->
    <div class="row g-4 mb-4">
      <!-- Inventory detail -->
      <div class="col-12 col-xl-6">
        <div class="p-4 bg-white rounded-4 shadow-sm h-100">
          <div class="d-flex align-items-center mb-4 border-start border-4 border-primary ps-3">
            <div>
              <h2 class="h5 fw-bold mb-0">Répartition de l'Inventaire</h2>
              <p class="text-muted small mb-0">Détails par catégorie de matériel</p>
            </div>
          </div>
          <div class="row g-3">
            <div v-for="item in stats.elements.byType" :key="item.itemtype" class="col-12 col-sm-6">
              <div class="p-3 border rounded-3 bg-light-soft card-hover transition-all">
                <div class="d-flex align-items-center">
                  <div class="icon-circle bg-white shadow-sm text-primary me-3">
                    <i :class="elementIcon(item.itemtype)" class="fs-5"></i>
                  </div>
                  <div>
                    <div class="text-muted small fw-bold text-uppercase" style="font-size: 0.7rem;">{{ item.label }}</div>
                    <div class="h5 mb-0 fw-bold">{{ loading ? '...' : item.count }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- État des éléments -->
      <div class="col-12 col-xl-6">
        <div class="p-4 bg-white rounded-4 shadow-sm h-100">
          <div class="d-flex align-items-center mb-4 border-start border-4 border-info ps-3">
            <div>
              <h2 class="h5 fw-bold mb-0">État des Éléments</h2>
              <p class="text-muted small mb-0">Répartition du parc par statut</p>
            </div>
          </div>
          <div v-if="loading" class="text-center py-4 text-muted">
            <div class="spinner-border spinner-border-sm me-2"></div>Chargement...
          </div>
          <div v-else-if="!stats.elements.byState?.length" class="text-center py-4 text-muted small">
            Aucun état défini dans GLPI.
          </div>
          <div v-else class="d-flex flex-column gap-3">
            <div v-for="item in stats.elements.byState" :key="item.id">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="small fw-semibold text-dark">{{ item.label }}</span>
                <span class="badge bg-primary-soft text-primary fw-bold rounded-pill px-2">{{ item.count }}</span>
              </div>
              <!-- <div class="progress rounded-pill" style="height: 8px;">
                <div
                  class="progress-bar bg-info rounded-pill"
                  :style="{ width: ((item.count / stats.elements.total) * 100).toFixed(1) + '%' }"
                ></div>
              </div> -->
              <!-- <div class="text-end text-muted" style="font-size: 0.7rem; margin-top: 2px;">
                {{ ((item.count / stats.elements.total) * 100).toFixed(1) }}%
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ROW 3: Ticket Status + Types -->
    <div class="row g-4 mb-4">
      <!-- Status -->
      <div class="col-12 col-xl-6">
        <div class="p-4 bg-white rounded-4 shadow-sm h-100">
          <div class="d-flex align-items-center mb-4 border-start border-4 border-warning ps-3">
            <div>
              <h2 class="h5 fw-bold mb-0">Suivi des Tickets</h2>
              <p class="text-muted small mb-0">Volumes par état actuel</p>
            </div>
          </div>
          <div class="d-flex flex-column gap-2">
            <div
              v-for="item in stats.tickets.byStatus"
              :key="item.status"
              class="d-flex align-items-center justify-content-between p-3 rounded-3 border-start border-4 transition-all"
              :class="getStatusBorderClass(item.status)"
              style="background: #fdfdfd"
            >
              <span class="fw-semibold text-dark small">{{ item.label }}</span>
              <div class="h6 mb-0 fw-bold" :class="getStatusTextClass(item.status)">
                {{ loading ? '...' : item.count }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Types de tickets -->
      <div class="col-12 col-xl-6">
        <div class="p-4 bg-white rounded-4 shadow-sm h-100">
          <div class="d-flex align-items-center mb-4 border-start border-4 border-danger ps-3">
            <div>
              <h2 class="h5 fw-bold mb-0">Types de Tickets</h2>
              <p class="text-muted small mb-0">Incidents vs Demandes de service</p>
            </div>
          </div>
          <div class="row g-3">
            <div v-for="item in stats.tickets.byType" :key="item.type" class="col-6">
              <div class="p-3 rounded-3 text-center shadow-sm h-100 d-flex flex-column justify-content-center" :style="{ background: item.color + '15', border: '2px solid ' + item.color + '30' }">
                <i :class="['bi', item.icon, 'fs-3', 'mb-2', 'd-block']" :style="{ color: item.color }"></i>
                <div class="h4 fw-bold mb-1" :style="{ color: item.color }">{{ loading ? '...' : item.count }}</div>
                <div class="small fw-semibold text-muted">{{ item.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ROW 3: Costs Breakdown -->
    <!-- <div class="row g-4">
      <div class="col-12">
        <div class="p-4 bg-white rounded-4 shadow-sm">
          <div class="d-flex align-items-center mb-4 border-start border-4 border-success ps-3">
            <div>
              <h2 class="h5 fw-bold mb-0">Analyse des Coûts</h2>
              <p class="text-muted small mb-0">Cumul de tous les enregistrements de coûts des tickets</p>
            </div>
          </div>
          <div class="row g-3">
            <div class="col-12 col-md-3">
              <div class="p-3 border rounded-3 text-center bg-light-soft">
                <i class="bi bi-stopwatch fs-3 text-primary mb-2 d-block"></i>
                <div class="small text-muted fw-bold text-uppercase mb-1">Temps total</div>
                <div class="h5 fw-bold mb-0">{{ loading ? '...' : formatHours(stats.tickets.costs?.totalActionTime) }}</div>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="p-3 border rounded-3 text-center bg-light-soft">
                <i class="bi bi-hourglass-split fs-3 text-warning mb-2 d-block"></i>
                <div class="small text-muted fw-bold text-uppercase mb-1">Coût Main d'œuvre</div>
                <div class="h5 fw-bold mb-0">{{ loading ? '...' : formatCost(stats.tickets.costs?.totalCostTime * (stats.tickets.costs?.totalActionTime / 3600)) }}</div>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="p-3 border rounded-3 text-center bg-light-soft">
                <i class="bi bi-cash-coin fs-3 text-danger mb-2 d-block"></i>
                <div class="small text-muted fw-bold text-uppercase mb-1">Coût Fixe</div>
                <div class="h5 fw-bold mb-0">{{ loading ? '...' : formatCost(stats.tickets.costs?.totalCostFixed) }}</div>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="p-3 border rounded-3 text-center bg-light-soft">
                <i class="bi bi-box-seam fs-3 text-success mb-2 d-block"></i>
                <div class="small text-muted fw-bold text-uppercase mb-1">Coût Matériel</div>
                <div class="h5 fw-bold mb-0">{{ loading ? '...' : formatCost(stats.tickets.costs?.totalCostMaterial) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.bg-light-soft { background-color: #f8fafc; }
.transition-all { transition: all 0.2s ease-in-out; }
.card-hover:hover { background-color: #fff !important; transform: scale(1.02); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }

.icon-circle {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
</style>

