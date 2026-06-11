<script setup>
import { onMounted } from 'vue'
import { authState } from '../../services/auth/authSession'
import { useDashboard } from '../../composables/dashboard/useDashboard'
import StatsCards from '../../components/dashboard/StatsCard.vue'

const { stats, loading, errorText, loadDashboardData } = useDashboard()

onMounted(loadDashboardData)
</script>

<template>
  <div class="dashboard p-4">
    <header class="d-flex align-items-center justify-content-between mb-5">
      <div>
        <h1 class="h2 fw-bold text-dark mb-1">Tableau de bord</h1>
        <p class="text-muted mb-0">Rapport d'activité GLPI pour {{ authState.user?.name }}</p>
      </div>
      <div class="d-none d-md-block">
        <button @click="loadDashboardData" class="btn btn-outline-primary border-2 fw-semibold px-4 rounded-pill">
          <i class="bi bi-arrow-clockwise me-2"></i>Actualiser
        </button>
      </div>
    </header>

    <div v-if="errorText" class="alert alert-danger border-0 shadow-sm rounded-4 mb-4" role="alert">
      <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ errorText }}
    </div>

    <StatsCards :stats="stats" :loading="loading" />
  </div>
</template>

<style scoped>
.dashboard {
  background-color: #f8f9fa;
  min-height: 100vh;
}
</style>
