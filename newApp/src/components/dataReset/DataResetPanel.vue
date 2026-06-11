<script setup>
import { onMounted } from 'vue'
import { useDataReset } from '../../composables/dataReset/useDataReset'
import GlpiEntitySelector from './GlpiEntitySelector.vue'

const {
  entities,
  includeSubEntities,
  selectedEntityIds,
  itemtypeSelection,
  resettableItemtypes,
  confirmChecked,
  loadingEntities,
  running,
  errorText,
  logs,
  summary,
  progress,
  canRun,
  toggleEntity,
  selectAllEntities,
  clearEntities,
  loadEntities,
  runReset,
} = useDataReset()

const logClass = {
  info: 'text-body-secondary',
  success: 'text-success',
  warning: 'text-warning-emphasis',
  danger: 'text-danger',
}

onMounted(loadEntities)
</script>

<template>
  <div class="row g-4 justify-content-center">
    <!-- Zone d'action simplifiée -->
    <div class="col-12 col-md-8 col-lg-6">
      <div class="card border-danger shadow-sm py-4">
        <div class="card-body d-flex flex-column align-items-center gap-4 text-center">
          <div class="text-danger">
            <!-- <i class="bi bi-exclamation-triangle-fill" style="font-size: 3rem;"></i> -->
            <h2 class="h4 mt-3 fw-bold">Reinitialisation de données</h2>
          </div>
          
          <!-- <p class="mb-0 text-muted px-3">
            Vous êtes sur le point de supprimer définitivement les données (Tickets, Matériels, etc.) 
            pour les entités sélectionnées.
          </p> -->

          <div class="form-check custom-checkbox py-2">
            <input
              id="confirmReset"
              v-model="confirmChecked"
              class="form-check-input"
              type="checkbox"
              :disabled="running"
              style="width: 1.5rem; height: 1.5rem; cursor: pointer;"
            />
            <label class="form-check-label ms-2 mt-1" for="confirmReset" style="cursor: pointer; font-weight: 500;">
              Je confirme vouloir tout supprimer
            </label>
          </div>

          <div class="w-100 px-4">
            <button
              class="btn btn-danger btn-lg w-100 py-3 shadow-sm fw-bold mb-3"
              type="button"
              :disabled="!canRun"
              @click="runReset"
            >
              <span
                v-if="running"
                class="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
              <i v-else class="bi bi-trash3-fill me-2"></i>
              {{ running ? 'Suppression en cours...' : 'Réinitialiser toutes les données' }}
            </button>

            <!-- Barre de progression (apparaît seulement pendant l'action) -->
            <div v-if="running && progress.total" class="mt-4">
              <div class="d-flex justify-content-between small text-muted mb-1">
                <span class="fw-medium">{{ progress.label }}</span>
                <span>{{ progress.current }} / {{ progress.total }}</span>
              </div>
              <div class="progress" style="height: 10px; border-radius: 20px;">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  :style="{ width: `${(progress.current / progress.total) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>

          <div v-if="errorText" class="alert alert-danger w-100 mb-0 mx-4">{{ errorText }}</div>

          <div
            v-if="summary"
            class="alert w-100 mb-0 mx-4 shadow-sm"
            :class="summary.failed ? 'alert-warning' : 'alert-success'"
          >
            <i class="bi" :class="summary.failed ? 'bi-exclamation-triangle' : 'bi-check-circle-fill'"></i>
            <span class="ms-2">
              <strong>{{ summary.deleted }}</strong> éléments supprimés avec succès.
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Journal d'exécution (caché par défaut, ou plus discret) -->
    <div v-if="logs.length" class="col-12 col-md-10 mt-4">
      <details class="text-center">
        <summary class="text-muted small cursor-pointer" style="list-style: none; cursor: pointer;">
          <i class="bi bi-chevron-down me-1"></i> Voir le journal technique
        </summary>
        <div class="card shadow-sm mt-3 text-start">
          <div class="card-body">
            <div class="border rounded bg-light p-3 overflow-auto" style="max-height: 200px">
              <p
                v-for="(entry, index) in logs"
                :key="index"
                class="mb-1 small font-monospace"
                :class="logClass[entry.level]"
              >
                <span class="text-muted">[{{ entry.time }}]</span> {{ entry.message }}
              </p>
            </div>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<style scoped>
.cursor-pointer { cursor: pointer; }
.progress { background-color: #f1f5f9; }
</style>
