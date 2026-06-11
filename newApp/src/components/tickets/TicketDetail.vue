<script setup>
import { computed } from 'vue'
import { statusInfo, typeInfo, priorityInfo } from '../../services/tickets/ticketsConfig'

const props = defineProps({
  ticket: { type: Object, default: null },
  loading: Boolean,
  error: { type: String, default: '' },
})

const formatDateTime = (value) => (value ? String(value).replace('T', ' ').slice(0, 16) : '-')

// Le contenu GLPI est du HTML : on retire les balises pour un affichage texte sur.
const plainContent = computed(() => {
  const raw = props.ticket?.content || ''
  return raw
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()
})
</script>

<template>
  <div class="card border-0 shadow-sm rounded-4 h-100 overflow-hidden d-flex flex-column">
    <div class="card-header bg-white py-3 border-0">
      <h2 class="h5 fw-bold mb-0 text-dark"><i class="bi bi-card-text me-2 text-primary"></i>Détails de l'incident</h2>
      <button v-if="ticket" @click="$emit('close')" class="btn-close d-xl-none" aria-label="Close"></button>
    </div>

    <div class="card-body flex-grow-1 overflow-auto p-4 pt-0">
      <!-- Etat de chargement -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary opacity-50 mb-3" role="status"></div>
        <div class="text-muted small">Récupération des données...</div>
      </div>

      <!-- Erreur -->
      <div v-else-if="error" class="alert alert-danger border-0 rounded-3 shadow-sm">{{ error }}</div>

      <!-- Aucune selection -->
      <div v-else-if="!ticket" class="empty-state text-center py-5 h-100 d-flex flex-column align-items-center justify-content-center">
        <div class="icon-circle bg-light text-muted mb-3">
          <i class="bi bi-cursor fs-2 opacity-50"></i>
        </div>
        <p class="text-muted small px-4">Sélectionnez un ticket dans la liste pour consulter les informations détaillées.</p>
      </div>

      <!-- Fiche -->
      <div v-else class="animate-fade-in">
        <div class="ticket-header mb-4">
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="badge bg-light text-muted border py-1 px-2">ID #{{ ticket.id }}</span>
            <span class="status-badge" :class="`status-${statusInfo(ticket.status).color}`">
              {{ statusInfo(ticket.status).label }}
            </span>
          </div>
          <h3 class="h4 fw-bold text-dark mb-0">{{ ticket.name || '(sans titre)' }}</h3>
        </div>

        <div class="info-grid row g-3 mb-4">
          <div class="col-6">
            <div class="p-3 bg-light rounded-3 h-100">
              <div class="text-muted smaller text-uppercase fw-bold mb-1">Type</div>
              <div class="fw-bold d-flex align-items-center gap-2">
                <span class="dot" :class="`bg-${typeInfo(ticket.type).color}`"></span>
                {{ typeInfo(ticket.type).label }}
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 bg-light rounded-3 h-100 border-start border-4" :class="`border-${priorityInfo(ticket.priority).color}`">
              <div class="text-muted smaller text-uppercase fw-bold mb-1">Priorité</div>
              <div class="fw-bold text-dark">{{ priorityInfo(ticket.priority).label }}</div>
            </div>
          </div>
        </div>

        <!-- Détails chronologiques -->
        <div class="timeline border rounded-3 p-3 mb-4 bg-white shadow-xs">
          <div class="timeline-item pb-3 border-bottom">
            <div class="d-flex align-items-center gap-3">
              <i class="bi bi-clock-history text-muted"></i>
              <div>
                <div class="text-muted smaller">Ouverture</div>
                <div class="fw-medium">{{ formatDateTime(ticket.date) }}</div>
              </div>
            </div>
          </div>
          <div class="timeline-item py-3">
            <div class="d-flex align-items-center gap-3">
              <i class="bi bi-pencil-square text-muted"></i>
              <div>
                <div class="text-muted smaller">Dernière modification</div>
                <div class="fw-medium">{{ formatDateTime(ticket.date_mod) }}</div>
              </div>
            </div>
          </div>
        </div>

        <h4 class="h6 fw-bold text-muted text-uppercase mb-3 mt-4" style="letter-spacing: 0.05em;">Contenu du message</h4>
        <div class="description-view p-3 rounded-4 bg-white border">
          {{ plainContent || '(aucune description)' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.smaller { font-size: 0.7rem; }

.status-badge {
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}
.status-dark { background: #f1f5f9; color: #475569; }
.status-primary { background: #dbeafe; color: #1e40af; }
.status-info { background: #e0f2fe; color: #0369a1; }
.status-warning { background: #fef3c7; color: #92400e; }
.status-success { background: #dcfce7; color: #166534; }
.status-secondary { background: #f3f4f6; color: #374151; }

.dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
.bg-danger { background-color: #ef4444; }
.bg-warning { background-color: #f59e0b; }
.bg-primary { background-color: #3b82f6; }

.description-view {
  white-space: pre-wrap;
  max-height: 250px;
  overflow: auto;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #334155;
  border-style: dashed !important;
}

.icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shadow-xs { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }

.animate-fade-in { animation: fadeIn 0.4s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }
</style>

<style scoped>
.description {
  white-space: pre-wrap;
  max-height: 280px;
  overflow: auto;
  font-size: 0.9rem;
}
</style>
