<script setup>
import SqliteTestPanel from '../../components/testBackSqlite/SqliteTestPanel.vue'
import { createSqliteApi } from '../../services/testBackSqlite/sqliteApi'

const sqliteApi = createSqliteApi()
</script>

<template>
  <section class="d-flex flex-column gap-3">
    <header>
      <p class="text-uppercase fw-semibold text-primary small mb-2">SQLite</p>
      <h1 class="h3 fw-semibold">Test connexion SQLite locale</h1>
      <p class="text-muted mt-2">
        Verifie la connexion du backend Spring Boot sur la base SQLite locale.
      </p>
      <div class="d-flex flex-wrap gap-2 mt-3">
        <span class="badge text-bg-secondary">
          Base: {{ sqliteApi.baseUrl || 'Non configuree' }}
        </span>
        <span class="badge text-bg-success">Endpoint /api/sqlite/test</span>
      </div>
    </header>

    <SqliteTestPanel />
  </section>
</template>
