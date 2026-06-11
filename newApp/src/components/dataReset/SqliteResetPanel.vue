<script setup>
import { onMounted } from 'vue'
import { useSqliteDataReset } from '../../composables/dataReset/useSqliteDataReset'

const {
  confirmChecked,
  running,
  errorText,
  logs,
  summary,
  canRun,
  loadTables,
  resetDatabase,
} = useSqliteDataReset()

const logClass = {
  info: 'text-body-secondary',
  success: 'text-success',
  warning: 'text-warning-emphasis',
  danger: 'text-danger',
}

onMounted(loadTables)
</script>

<template>
  <div class="row g-4 justify-content-center">
    <!-- Zone d'action simplifi�e SQLITE -->
    <div class="col-12 col-md-8 col-lg-6">
      <div class="card border-danger shadow-sm py-4">
        <div class="card-body d-flex flex-column align-items-center gap-4 text-center">
          <div class="text-danger">
            <i class="bi bi-database-fill-exclamation" style="font-size: 3rem;"></i>
            <h2 class="h4 mt-3 fw-bold">Purge SQLite</h2>
          </div>
          
          <p class="mb-0 text-muted px-3">
            Vous allez r�initialiser la base de donn�es locale. 
            Toutes les donn�es de test import�es seront supprim�es.
          </p>

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
              Je confirme la r�initialisation SQLite
            </label>
          </div>

          <div class="w-100 px-4">
            <button
              class="btn btn-danger btn-lg w-100 py-3 shadow-sm fw-bold"
              type="button"
              :disabled="!canRun"
              @click="resetDatabase"
            >
              <span
                v-if="running"
                class="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
              <i v-else class="bi bi-trash3-fill me-2"></i>
              {{ running ? 'R�initialisation...' : 'Effacer la base SQLite' }}
            </button>
          </div>

          <div v-if="errorText" class="alert alert-danger w-100 mb-0 mx-4" role="alert">
            {{ errorText }}
          </div>

          <div
            v-if="summary"
            class="alert alert-success w-100 mb-0 mx-4 shadow-sm"
          >
            <i class="bi bi-check-circle-fill me-2"></i>
            Base de donn�es r�initialis�e.
          </div>
        </div>
      </div>
    </div>

    <!-- Journal technique discret -->
    <div v-if="logs.length" class="col-12 col-md-10 mt-4">
      <details class="text-center">
        <summary class="text-muted small" style="list-style: none; cursor: pointer;">
          <i class="bi bi-chevron-down me-1"></i> Journal technique
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
.custom-checkbox .form-check-input:checked {
  background-color: #dc3545;
  border-color: #dc3545;
}
</style>
