<script setup>
import { useSqliteTest } from '../../composables/testBackSqlite/useSqliteTest'

const { responseText, errorText, loading, lastRequest, runTest } = useSqliteTest()
</script>

<template>
  <section class="card shadow-sm">
    <div class="card-body d-flex flex-column gap-3">
      <div class="d-flex align-items-center gap-2">
        <span class="badge rounded-pill text-bg-primary">Test</span>
        <h2 class="h5 mb-0">Connexion locale</h2>
      </div>
      <p class="text-muted mb-0">
        Envoie une requete au backend Spring Boot pour verifier la base SQLite locale.
      </p>

      <div class="d-flex flex-wrap align-items-center gap-2">
        <button class="btn btn-primary" type="button" @click="runTest">
          Tester la connexion
        </button>
        <div v-if="loading" class="d-flex align-items-center gap-2">
          <div class="spinner-border spinner-border-sm" role="status"></div>
          <span class="small text-muted">Test en cours...</span>
        </div>
        <span v-else-if="lastRequest" class="badge text-bg-info">
          {{ lastRequest }}
        </span>
      </div>

      <div v-if="errorText" class="alert alert-danger mb-0">
        {{ errorText }}
      </div>

      <div class="border rounded bg-light p-3 overflow-auto" aria-live="polite">
        <pre class="mb-0 small">{{ responseText || 'Aucun test lance.' }}</pre>
      </div>
    </div>
  </section>
</template>
