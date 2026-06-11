<script setup>
import { ref, onMounted, watch } from 'vue'
import { useElementsSearch } from '../../../composables/frontoffice/elements/useElementsSearch'
import ElementSearchForm from '../../../components/frontoffice/elements/ElementSearchForm.vue'
import ElementResultTable from '../../../components/frontoffice/elements/ElementResultTable.vue'

const {
  catalog,
  itemtype,
  entry,
  criteriaValues,
  results,
  images,
  total,
  loading,
  errorText,
  states,
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

// Indique si au moins une recherche a ete lancee (pour le message vide)
const searched = ref(false)

const onSearch = async () => {
  searched.value = true
  await search()
}

const onReset = () => {
  resetCriteria()
  onSearch() // Relancer la recherche après reset
}

const onSelectType = (value) => {
  selectItemtype(value)
  onSearch() // Relancer la recherche au changement de type
}

// Recherche automatique à la saisie avec un petit délai (debounce)
let searchTimeout = null
watch(criteriaValues, () => {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    onSearch()
  }, 400)
}, { deep: true })

onMounted(() => {
  onSearch() // Charger tous les éléments au montage
})
</script>

<template>
  <div class="fo-page-container">
    <header class="mb-4 d-flex align-items-center justify-content-between">
      <div>
        <h1 class="h3 fw-bold mb-1 text-slate-800">Mes Équipements</h1>
        <p class="text-muted mb-0 small">
          Consultez et gérez vos matériels enregistrés dans votre inventaire.
        </p>
      </div>
      <div class="d-none d-md-block">
        <span class="badge text-bg-success-soft rounded-pill px-3 py-2 fw-semibold">
          {{ total }} Éléments trouvés
        </span>
      </div>
    </header>

    <div class="row g-4">
      <!-- Zone de filtres -->
      <div class="col-12">
        <ElementSearchForm
          :catalog="catalog"
          :itemtype="itemtype"
          :entry="entry"
          :criteria-values="criteriaValues"
          :states="states"
          :loading="loading"
          @select-itemtype="onSelectType"
          @search="onSearch"
          @reset="onReset"
        />
      </div>

      <div v-if="errorText" class="col-12">
        <div class="alert alert-danger border-0 shadow-sm rounded-4 d-flex align-items-center mb-0">
          <i class="bi bi-exclamation-triangle-fill me-3 fs-4"></i>
          <div>{{ errorText }}</div>
        </div>
      </div>

      <!-- Liste des résultats -->
      <div class="col-12">
        <ElementResultTable
          :entry="entry"
          :results="results"
          :images="images"
          :total="total"
          :loading="loading"
          :current-page="currentPage"
          :page-count="pageCount"
          :can-prev="canPrev"
          :can-next="canNext"
          :searched="searched"
          @prev="prevPage"
          @next="nextPage"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fo-page-container {
  animation: slideUp 0.4s ease-out;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.text-slate-800 {
  color: #1e293b;
}

.text-bg-success-soft {
  background-color: #ecfdf5;
  color: #059669;
  border: 1px solid #d1fae5;
}
</style>
