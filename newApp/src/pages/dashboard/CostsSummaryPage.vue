<script setup>
import { onMounted, computed } from 'vue'
import { useCostsSummary } from '../../composables/frontoffice/tickets/useCostsSummary'

const { loading, summary, fetchAllData } = useCostsSummary()

onMounted(fetchAllData)

const totalGlpi = computed(() => summary.value.reduce((acc, row) => acc + row.glpi, 0))
const totalSqlite = computed(() => summary.value.reduce((acc, row) => acc + row.sqlite, 0))
const grandTotal = computed(() => summary.value.reduce((acc, row) => acc + row.total, 0))

const formatCurrency = (val) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(val || 0)
}
</script>

<template>
  <div class="container py-4">
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2 text-muted">Chargement des données...</p>
    </div>

    <div v-else class="card border-0 shadow-sm overflow-hidden">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th class="ps-4 py-3 text-uppercase small fw-bold">Type d'équipement</th>
              <th class="py-3 text-end text-uppercase small fw-bold">Coût GLPI</th>
              <th class="py-3 text-end text-uppercase small fw-bold">Coût SQLite</th>
              <th class="pe-4 py-3 text-end text-uppercase small fw-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in summary" :key="row.itemtype">
              <td class="ps-4 fw-bold text-dark">{{ row.itemtype }}</td>
              <td class="text-end">{{ formatCurrency(row.glpi) }}</td>
              <td class="text-end">{{ formatCurrency(row.sqlite) }}</td>
              <td class="pe-4 text-end fw-bold text-primary">
                {{ formatCurrency(row.total) }}
              </td>
            </tr>
            <tr v-if="summary.length === 0">
              <td colspan="4" class="text-center py-5 text-muted">
                Aucun coût enregistré pour le moment.
              </td>
            </tr>
          </tbody>
          <tfoot v-if="summary.length > 0" class="table-light border-top border-2">
            <tr class="fw-bold">
              <td class="ps-4 py-3">TOTAL GÉNÉRAL</td>
              <td class="text-end py-3">{{ formatCurrency(totalGlpi) }}</td>
              <td class="text-end py-3">{{ formatCurrency(totalSqlite) }}</td>
              <td class="pe-4 text-end py-3 text-primary fs-5">{{ formatCurrency(grandTotal) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    
    <!-- <div class="mt-3 text-end">
      <button class="btn btn-sm btn-outline-secondary" @click="fetchAllData" :disabled="loading">
        Actualiser les données
      </button>
    </div> -->
  </div>
</template>
