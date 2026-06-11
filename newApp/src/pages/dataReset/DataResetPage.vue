<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DataResetPanel from '../../components/dataReset/DataResetPanel.vue'
import SqliteResetPanel from '../../components/dataReset/SqliteResetPanel.vue'

const route = useRoute()
const resetType = computed(() => route.meta.resetType || 'glpi')
</script>

<template>
  <section class="d-flex flex-column gap-3">
    <header>
      <p class="text-uppercase fw-semibold text-danger small mb-2">Maintenance</p>
      <!-- <h1 class="h3 fw-semibold">Réinitialisation des données</h1> -->
      
      <!-- Onglets pour sélectionner le mode -->
      <ul class="nav nav-tabs mt-4 border-bottom" role="tablist">
        <li class="nav-item" role="presentation">
          <router-link
            to="/reset/glpi"
            class="nav-link"
            :class="{ active: resetType === 'glpi' }"
          >
            <i class="bi bi-hdd-network me-2"></i>GLPI
          </router-link>
        </li>
        <li class="nav-item" role="presentation">
          <router-link
            to="/reset/sqlite"
            class="nav-link"
            :class="{ active: resetType === 'sqlite' }"
          >
            <i class="bi bi-database me-2"></i>SQLite
          </router-link>
        </li>
      </ul>

      <!-- Description selon le mode -->
      <p v-if="resetType === 'glpi'" class="text-muted mt-3 mb-0">
      </p>
      <p v-else class="text-muted mt-3 mb-0">
      </p>
    </header>

    <!-- Affichage du composant approprié -->
    <DataResetPanel v-if="resetType === 'glpi'" />
    <SqliteResetPanel v-else-if="resetType === 'sqlite'" />
  </section>
</template>
