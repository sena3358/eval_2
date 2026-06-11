<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '../../composables/auth/useAuth'

const router = useRouter()
const route = useRoute()

const {
  password,
  errorText,
  loading,
  missingConfig,
  signIn,
} = useAuth()

const submit = async () => {
  const ok = await signIn()
  if (ok) {
    const redirect = route.query.redirect
    router.push(typeof redirect === 'string' ? redirect : '/')
  }
}
</script>

<template>
  <form class="d-flex flex-column gap-3" @submit.prevent="submit">
    <div v-if="missingConfig" class="alert alert-warning mb-0">
      .env incomplet : ajoute VITE_GLPI_API_BASE_URL et VITE_GLPI_API_KEY.
    </div>

    <!-- Champ mot de passe -->
    <div>
      <label for="password" class="form-label">Mot de passe</label>
      <div class="input-group">
        <span class="input-group-text">
          <i class="bi bi-lock"></i>
        </span>
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-control"
          autocomplete="current-password"
          required
        />
      </div>
    </div>

    <div v-if="errorText" class="alert alert-danger mb-0">{{ errorText }}</div>

    <button class="btn btn-primary w-100" type="submit" :disabled="loading">
      <span
        v-if="loading"
        class="spinner-border spinner-border-sm me-2"
        role="status"
      ></span>
      {{ loading ? 'Connexion...' : 'Se connecter' }}
    </button>
  </form>
</template>
