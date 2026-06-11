<script setup>
defineProps({
  entry: { type: Object, required: true },
  results: { type: Array, default: () => [] },
  images: { type: Object, default: () => ({}) },
  total: { type: Number, default: 0 },
  loading: Boolean,
  currentPage: { type: Number, default: 1 },
  pageCount: { type: Number, default: 1 },
  canPrev: Boolean,
  canNext: Boolean,
  searched: Boolean,
})

const emit = defineEmits(['prev', 'next'])

import { useRouter } from 'vue-router'
const router = useRouter()

import GlpiImage from '../../common/GlpiImage.vue'
import { elementCatalog } from '../../../services/elements/elementsCatalog'

const getAssetKey = (row) => `${row.itemtype}_${row.id}`

// Traduction du type
const getTypeLabel = (type) => {
  const entry = elementCatalog.find(e => e.itemtype === type)
  return entry ? entry.label : type
}

const typeConfig = {
  Computer: { icon: 'bi-laptop', color: '#10b981', bg: '#ecfdf5' },
  Monitor: { icon: 'bi-display', color: '#3b82f6', bg: '#eff6ff' },
  NetworkEquipment: { icon: 'bi-router', color: '#6366f1', bg: '#eef2ff' },
  Printer: { icon: 'bi-printer', color: '#f59e0b', bg: '#fffbeb' },
  Phone: { icon: 'bi-phone', color: '#8b5cf6', bg: '#f5f3ff' },
  Peripheral: { icon: 'bi-mouse2', color: '#ec4899', bg: '#fdf2f8' },
  Rack: { icon: 'bi-server', color: '#475569', bg: '#f1f5f9' },
  Enclosure: { icon: 'bi-hdd-stack', color: '#64748b', bg: '#f8fafc' },
  PDU: { icon: 'bi-outlet', color: '#ef4444', bg: '#fef2f2' },
  PassiveDCEquipment: { icon: 'bi-diagram-3', color: '#14b8a6', bg: '#f0fdfa' },
  Cable: { icon: 'bi-hdd-network', color: '#2dd4bf', bg: '#f0fdfa' },
  Socket: { icon: 'bi-plug', color: '#06b6d4', bg: '#ecfeff' },
  Appliance: { icon: 'bi-box-seam', color: '#f97316', bg: '#fff7ed' },
  Software: { icon: 'bi-file-earmark-code', color: '#334155', bg: '#f1f5f9' },
  SoftwareLicense: { icon: 'bi-key', color: '#0ea5e9', bg: '#f0f9ff' },
  Certificate: { icon: 'bi-shield-check', color: '#22c55e', bg: '#f0fdf4' },
  Default: { icon: 'bi-box', color: '#94a3b8', bg: '#f8fafc' }
}

const getIcon = (type) => typeConfig[type] || typeConfig.Default

// La valeur d'une colonne est indexee par l'identifiant de searchoption GLPI.
const cell = (row, field) => {
  const val = row.raw?.[String(field)] ?? row.raw?.[field]
  if (val === undefined || val === null || val === '') return '-'
  return val
}

const getStatusClass = (status) => {
  if (!status || status === '-') return 'text-bg-light border text-muted'
  const s = String(status).toLowerCase()
  if (s.includes('production')) return 'bg-success text-white'
  if (s.includes('stock')) return 'bg-info text-white'
  if (s.includes('maintenance') || s.includes('reparation')) return 'bg-warning text-dark'
  if (s.includes('panne') || s.includes('perdu')) return 'bg-danger text-white'
  return 'bg-success-soft text-success border border-success-subtle'
}
</script>

<template>
  <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
    <div class="card-header bg-white py-3 border-0 d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center gap-2">
        <h2 class="h6 fw-bold mb-0 text-dark">Résultats de l'inventaire</h2>
        <span class="badge rounded-pill bg-success-soft text-success px-2">
          {{ total }}
        </span>
      </div>
    </div>

    <div class="card-body p-0">
      <div v-if="loading && !results.length" class="text-center py-5">
        <div class="spinner-border text-success opacity-75 mb-3" role="status"></div>
        <div class="text-muted small fw-medium">Recherche en cours...</div>
      </div>

      <div v-else-if="!results.length" class="text-center py-5">
        <div class="mb-3 opacity-25">
          <i class="bi bi-search" style="font-size: 3rem"></i>
        </div>
        <p class="text-muted mb-0 fw-medium">
          {{ searched ? 'Aucun élément trouvé pour ces critères.' : 'Utilisez les filtres pour afficher vos équipements.' }}
        </p>
      </div>

      <div v-else class="table-responsive">
        <table class="table table-hover align-middle mb-0 custom-table">
          <thead>
            <tr>
              <th class="ps-4">Aperçu</th>
              <th>Nom</th>
              <th>Type</th>
              <th>Statut</th>
              <th>Date de création</th>
              <th class="text-end pe-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in results" :key="row.id" class="result-row">
              <td class="ps-4">
                <div 
                  class="asset-icon-circle"
                  :style="{ backgroundColor: getIcon(row.itemtype).bg, color: getIcon(row.itemtype).color }"
                >
                  <GlpiImage 
                    v-if="images[getAssetKey(row)]" 
                    :doc-id="images[getAssetKey(row)]" 
                  />
                  <i v-else :class="['bi', getIcon(row.itemtype).icon]"></i>
                </div>
              </td>
              <td class="fw-bold text-dark">
                {{ cell(row, 1) }}
              </td>
              <td>
                <span class="badge bg-light text-dark border fw-medium rounded-pill px-3">
                  {{ getTypeLabel(row.itemtype) }}
                </span>
              </td>
              <td>
                <span :class="['badge rounded-pill px-3 py-2 fw-semibold', getStatusClass(cell(row, 31) !== '-' ? cell(row, 31) : cell(row, 49))]">
                  {{ cell(row, 31) !== '-' ? cell(row, 31) : cell(row, 49) }}
                </span>
              </td>
              <td class="text-muted small">
                {{ cell(row, 19) }}
              </td>
              <td class="text-end pe-4">
                <button 
                  class="btn btn-sm btn-light-success rounded-3 px-3 fw-bold" 
                  title="Voir les détails"
                  @click="router.push({ name: 'fo-element-detail', params: { itemtype: row.itemtype, id: row.id }})"
                >
                  <i class="bi bi-eye me-1"></i>Détails
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      v-if="results.length"
      class="card-footer bg-white py-3 border-0 d-flex align-items-center justify-content-between px-4"
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
.bg-success-soft {
  background-color: #ecfdf5;
  color: #059669;
}

.custom-table thead th {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.05em;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fcfdfe;
  border-bottom: 1px solid #f1f5f9;
}

.asset-icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.asset-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.result-row:hover .asset-icon-circle {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.result-row {
  transition: all 0.2s;
}

.result-row:hover {
  background-color: #f8fafc;
}

.btn-light-success {
  background-color: #f0fdf4;
  color: #166534;
  border: 1px solid #dcfce7;
}

.btn-light-success:hover {
  background-color: #dcfce7;
  color: #14532d;
}

.btn-white {
  background: white;
  color: #475569;
}

.btn-pagination {
  width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.shadow-xs {
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
</style>
