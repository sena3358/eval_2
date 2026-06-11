<script setup>
import { useGlpiTest } from '../../composables/testApi/useGlpiTest'

const {
  endpoint,
  method,
  bodyText,
  responseText,
  errorText,
  loading,
  lastRequest,
  showBody,
  missingConfig,
  runRequest,
} = useGlpiTest()
</script>

<template>
  <section class="row g-4">

 

    <div class="col-12 col-lg-7">
      <div class="card shadow-sm h-100">
        <div class="card-body d-flex flex-column gap-3">
          <div class="d-flex align-items-center gap-2">
            <span class="badge rounded-pill text-bg-secondary">1</span>
            <h2 class="h5 mb-0">Requete</h2>
          </div>

          <div>
            <label for="endpoint" class="form-label">Endpoint</label>
            <input
              id="endpoint"
              v-model="endpoint"
              type="text"
              class="form-control"
              placeholder="/getMyProfiles"
              autocomplete="off"
            />
          </div>

          <div>
            <label for="method" class="form-label">Methode</label>
            <select id="method" v-model="method" class="form-select">
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </select>
          </div>

          <div v-if="showBody">
            <label for="body" class="form-label">Body JSON</label>
            <textarea
              id="body"
              v-model="bodyText"
              class="form-control"
              rows="6"
            ></textarea>
          </div>

          <div class="d-flex flex-wrap align-items-center gap-2">
            <button class="btn btn-success" type="button" @click="runRequest">
              Envoyer la requete
            </button>
            <div v-if="loading" class="d-flex align-items-center gap-2">
              <div class="spinner-border spinner-border-sm" role="status"></div>
              <span class="small text-muted">Chargement...</span>
            </div>
            <span v-else-if="lastRequest" class="badge text-bg-info">
              {{ lastRequest }}
            </span>
          </div>

          <div v-if="errorText" class="alert alert-danger mb-0">
            {{ errorText }}
          </div>

          <div class="border rounded bg-light p-3 overflow-auto" aria-live="polite">
            <pre class="mb-0 small">{{ responseText || 'Aucune reponse pour le moment.' }}</pre>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
