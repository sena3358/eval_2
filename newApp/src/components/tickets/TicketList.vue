<script setup>
import { statusInfo, typeInfo, priorityInfo } from '../../services/tickets/ticketsConfig'

defineProps({
  tickets: { type: Array, default: () => [] },
  loading: Boolean,
  selectedId: { type: [Number, String], default: null },
  currentPage: { type: Number, default: 1 },
  pageCount: { type: Number, default: 1 },
  total: { type: Number, default: 0 },
  canPrev: Boolean,
  canNext: Boolean,
})

const emit = defineEmits(['select', 'reload', 'prev', 'next'])

// Affiche uniquement la date (sans l'heure) au format GLPI "YYYY-MM-DD HH:MM:SS".
const formatDate = (value) => (value ? String(value).slice(0, 10) : '-')
</script>

<template>
  <div class="card border-0 shadow-sm rounded-4 h-100 overflow-hidden d-flex flex-column">
    <div class="card-header bg-white py-3 border-0 d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-2">
        <h2 class="h5 fw-bold mb-0 text-dark">Dernières demandes</h2>
        <span class="badge rounded-pill bg-light text-primary border border-primary-subtle px-2">
          {{ total }}
        </span>
      </div>
      <button
        class="refresh-btn btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
        type="button"
        :disabled="loading"
        @click="emit('reload')"
        title="Actualiser la liste"
      >
        <i class="bi bi-arrow-clockwise fs-5 text-muted" :class="{ 'spinning': loading }"></i>
      </button>
    </div>

    <div class="card-body p-0 flex-grow-1 overflow-auto">
      <div v-if="loading && !tickets.length" class="text-center py-5">
        <div class="spinner-border text-warning opacity-75 mb-3" role="status"></div>
        <div class="text-muted small fw-medium">Synchronisation GLPI...</div>
      </div>

      <div v-else-if="!tickets.length" class="text-center py-5">
        <i class="bi bi-inbox fs-1 text-muted opacity-25 d-block mb-2"></i>
        <p class="text-muted mb-0">Aucun ticket disponible.</p>
      </div>

      <div v-else class="table-responsive">
        <table class="table table-hover align-middle mb-0 custom-table">
          <thead>
            <tr>
              <th class="ps-4">ID</th>
              <th>Titre du ticket</th>
              <th>Catégorie</th>
              <th>Statut</th>
              <th>Priorité</th>
              <th class="pe-4 text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="ticket in tickets"
              :key="ticket.id"
              class="ticket-row border-bottom"
              @click="emit('select', ticket.id)"
            >
              <td class="ps-4 text-muted small">#{{ ticket.id }}</td>
              <td>
                <div class="d-flex flex-column">
                  <span class="fw-bold text-dark text-truncate" style="max-width: 200px">
                    {{ ticket.name || '(sans titre)' }}
                  </span>
                  <span class="text-muted smaller">{{ formatDate(ticket.date) }}</span>
                </div>
              </td>
              <td>
                <span class="badge-dot" :class="`bg-${typeInfo(ticket.type)}`">
                  {{ typeInfo(ticket.type).label }}
                </span>
              </td>
              <td>
                <span class="status-badge" :class="`status-${statusInfo(ticket.status).color}`">
                  {{ statusInfo(ticket.status).label }}
                </span>
              </td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <!-- <div class="priority-indicator" :class="`prio-${priorityInfo(ticket.priority).color}`" :title="priorityInfo(ticket.priority).label">
                    <span></span><span></span><span></span>
                  </div> -->
                  <span class="small text-muted">{{ priorityInfo(ticket.priority).label }}</span>
                </div>
              </td>
              <td class="pe-4 text-end">
                <button
                  class="btn btn-sm btn-light-primary rounded-3 px-2 py-1"
                  type="button"
                  @click.stop="emit('edit', ticket.id)"
                  title="Modifier ce ticket"
                >
                  <i class="bi bi-pencil-square me-1"></i>
                  <span class="small fw-semibold">Modifier</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination modernisée -->
    <div
      v-if="tickets.length"
      class="card-footer bg-light border-0 py-3 d-flex align-items-center justify-content-between px-4"
    >
      <div class="small text-muted fw-medium">
        Page <span class="text-dark">{{ currentPage }}</span> sur <span class="text-dark">{{ pageCount }}</span>
      </div>
      <div class="d-flex gap-2">
        <button
          class="btn btn-white btn-pagination border shadow-xs"
          type="button"
          :disabled="!canPrev || loading"
          @click="emit('prev')"
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        <button
          class="btn btn-white btn-pagination border shadow-xs"
          type="button"
          :disabled="!canNext || loading"
          @click="emit('next')"
        >
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-table thead th {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.05em;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fcfdfe;
}

.ticket-row {
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: transparent;
}

.ticket-row:hover {
  background-color: #f8fafc;
}

.ticket-row.selected {
  background-color: #eff6ff;
  border-left: 3px solid #3b82f6 !important;
}

/* Badges de statut personnalisés */
.status-badge {
  padding: 0.35rem 0.65rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}
.status-dark { background: #f1f5f9; color: #475569; }
.status-primary { background: #dbeafe; color: #1e40af; }
.status-info { background: #e0f2fe; color: #0369a1; }
.status-warning { background: #fef3c7; color: #92400e; }
.status-success { background: #dcfce7; color: #166534; }
.status-secondary { background: #f3f4f6; color: #374151; }

.btn-light-primary {
  background-color: #f0f7ff;
  color: #0061f2;
  border: 1px solid #c5dcfc;
}
.btn-light-primary:hover {
  background-color: #0061f2;
  color: #ffffff;
}

/* Point de catégorie */
.badge-dot {
  font-size: 0.75rem;
  color: #475569;
}
.badge-dot::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
}
.bg-danger::before { background: #ef4444; }
.bg-warning::before { background: #f59e0b; }
.bg-primary::before { background: #3b82f6; }

/* Indicateur de priorité (3 barres) */
.priority-indicator { display: flex; gap: 2px; }
.priority-indicator span { width: 12px; height: 4px; border-radius: 2px; background: #e2e8f0; }

/* Très Basse (1 barre verte) */
/* .prio-success span:nth-child(1) { background: #10b981; } */

/* Basse / Moyenne (2 barres bleues/grises) */
/* .prio-info span:nth-child(-n+2),
.prio-secondary span:nth-child(-n+2) { background: #64748b; } */

/* Haute (3 barres orange) */
/* .prio-warning span { background: #f59e0b; } */

/* Très haute / Majeure (3 barres rouges) */
/* .prio-danger span { background: #ef4444; } */

.btn-white { background: white; color: #475569; }
.btn-pagination { width: 32px; height: 32px; padding: 0; display: flex; align-items: center; justify-content: center; }

.refresh-btn { width: 32px; height: 32px; background: #f8fafc; transition: all 0.2s; border: none; }
.refresh-btn:hover { background: #f1f5f9; }

.smaller { font-size: 0.75rem; }

.spinning { animation: spin 1s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
</style>

<style scoped>
.ticket-row {
  cursor: pointer;
}
</style>
