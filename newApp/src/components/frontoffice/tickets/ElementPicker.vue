<script setup>
import { computed } from 'vue'
import { useElementsSearch } from '../../../composables/frontoffice/elements/useElementsSearch'
import ElementSearchForm from '../elements/ElementSearchForm.vue'

const props = defineProps({
  // Liste des elements selectionnes : [{ itemtype, id, label }]
  modelValue: { type: Array, default: () => [] },
})
const emit = defineEmits(['update:modelValue'])

// Reutilise la recherche d'elements de la page Liste
const {
  catalog,
  itemtype,
  entry,
  criteriaValues,
  results,
  loading,
  errorText,
  currentPage,
  pageCount,
  canPrev,
  canNext,
  search,
  resetCriteria,
  selectItemtype,
  nextPage,
  prevPage,
} = useElementsSearch()

const isSelected = (row) =>
  props.modelValue.some((el) => el.itemtype === row.itemtype && el.id === row.id)

const labelOf = (row) => row.raw?.['1'] || `#${row.id}`

const toggle = (row) => {
  const exists = isSelected(row)
  if (exists) {
    emit(
      'update:modelValue',
      props.modelValue.filter(
        (el) => !(el.itemtype === row.itemtype && el.id === row.id)
      )
    )
  } else {
    emit('update:modelValue', [
      ...props.modelValue,
      { itemtype: row.itemtype, id: row.id, label: labelOf(row) },
    ])
  }
}

const remove = (element) => {
  emit(
    'update:modelValue',
    props.modelValue.filter(
      (el) => !(el.itemtype === element.itemtype && el.id === element.id)
    )
  )
}

const cell = (row, field) => row.raw?.[String(field)] ?? '-'
const hasSelection = computed(() => props.modelValue.length > 0)
</script>

<template>
  <div class="d-flex flex-column gap-4">
    <ElementSearchForm
      :catalog="catalog"
      :itemtype="itemtype"
      :entry="entry"
      :criteria-values="criteriaValues"
      :loading="loading"
      @select-itemtype="selectItemtype"
      @search="search"
      @reset="resetCriteria"
    />

    <div v-if="errorText" class="alert alert-danger border-0 shadow-sm rounded-4 mb-0">{{ errorText }}</div>

    <!-- Resultats avec cases a cocher -->
    <div v-if="results.length" class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0 custom-table">
          <thead>
            <tr>
              <th style="width: 3.5rem" class="ps-4"></th>
              <th>#</th>
              <th v-for="def in entry.criteria" :key="def.key">{{ def.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in results" :key="row.id" @click="toggle(row)" class="picker-row">
              <td class="ps-4">
                <div class="checkbox-wrapper">
                  <input class="form-check-input custom-check" type="checkbox" :checked="isSelected(row)" @click.stop="toggle(row)" />
                </div>
              </td>
              <td class="text-muted small fw-bold">#{{ row.id }}</td>
              <td v-for="def in entry.criteria" :key="def.key" class="small fw-medium">{{ cell(row, def.field) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer bg-white py-3 border-0 d-flex align-items-center justify-content-between px-4">
        <small class="text-muted fw-medium">Page {{ currentPage }} sur {{ pageCount }}</small>
        <div class="btn-group btn-group-sm gap-2">
          <button class="btn btn-white btn-pagination border shadow-xs" type="button" :disabled="!canPrev || loading" @click="prevPage">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button class="btn btn-white btn-pagination border shadow-xs" type="button" :disabled="!canNext || loading" @click="nextPage">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Elements selectionnes -->
    <div class="selection-box p-3 rounded-4 bg-white border-2 border-dashed">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <label class="form-label small fw-bold text-muted text-uppercase mb-0">Éléments sélectionnés ({{ modelValue.length }})</label>
        <span v-if="hasSelection" class="badge bg-success-soft text-success rounded-pill px-2">Action requise</span>
      </div>
      
      <p v-if="!hasSelection" class="text-muted small mb-0 py-2 text-center">
        <i class="bi bi-cursor me-2"></i>Sélectionnez des éléments dans la liste ci-dessus.
      </p>
      
      <div v-else class="d-flex flex-wrap gap-2">
        <div
          v-for="element in modelValue"
          :key="`${element.itemtype}-${element.id}`"
          class="selection-chip d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-sm"
        >
          <i class="bi bi-cpu text-success"></i>
          <span class="fw-bold small">{{ element.label }}</span>
          <span class="badge bg-light text-muted fw-normal">{{ element.itemtype }}</span>
          <button type="button" class="btn-close btn-sm ms-1" aria-label="Retirer" @click="remove(element)"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.picker-row {
  cursor: pointer;
  transition: all 0.2s;
}

.picker-row:hover {
  background-color: #f0fdf4;
}

.custom-check {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 6px;
  border-color: #e2e8f0;
  cursor: pointer;
}

.custom-check:checked {
  background-color: #10b981;
  border-color: #10b981;
}

.selection-box {
  border-style: dashed !important;
  border-color: #e2e8f0 !important;
  border-width: 2px !important;
}

.selection-chip {
  background: white;
  border: 1px solid #e2e8f0;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.bg-success-soft {
  background-color: #ecfdf5;
  color: #059669;
}

.btn-white {
  background: white;
  color: #475569;
}

.btn-pagination {
  width: 28px;
  height: 28px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.shadow-xs {
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
</style>
