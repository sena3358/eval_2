<script setup>
import { createGlpiApi } from '../../services/testApi/glpiApi'
import GlpiTestPanel from '../../components/testApi/GlpiTestPanel.vue'

const glpi = createGlpiApi()
</script>

<template>
  <section class="d-flex flex-column gap-3">
    <header>
      <p class="text-uppercase fw-semibold text-primary small mb-2">GLPI API</p>
      <h1 class="h3 fw-semibold">Test rapide des endpoints</h1>
      <p class="text-muted mt-2">
        Cette page sert uniquement a verifier que l'API repond et que les tokens
        sont corrects avant de demarrer le vrai projet.
      </p>
      <div class="d-flex flex-wrap gap-2 mt-3">
        <span class="badge text-bg-secondary">
          Base: {{ glpi.baseUrl || 'Non configuree' }}
        </span>
        <span class="badge text-bg-success">App-Token actif</span>
      </div>
    </header>

    <GlpiTestPanel />

    <section class="card border-0 shadow-sm">
      <div class="card-body">
        <h3 class="h5 mb-3">Conseils rapides</h3>
        <ul class="mb-0">
          <li>Initie la session avec le user token.</li>
          <li>Utilise le Session-Token pour les requetes suivantes.</li>
          <li>Teste un endpoint simple comme /getMyProfiles.</li>
        </ul>
      </div>
    </section>
  </section>
</template>
