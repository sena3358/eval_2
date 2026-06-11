<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useFoAuth } from '../../../composables/frontoffice/auth/useFoAuth'

const router = useRouter()
const route = useRoute()

const {
  login,
  password,
  errorText,
  loading,
  missingConfig,
  signIn,
} = useFoAuth()

const submit = async () => {
  const ok = await signIn()
  if (ok) {
    const redirect = route.query.redirect
    router.push(typeof redirect === 'string' ? redirect : '/front/elements')
  }
}
</script>

<template>
  <form class="d-flex flex-column gap-4" @submit.prevent="submit">
    <div v-if="missingConfig" class="alert alert-warning border-0 small py-2">
      <i class="bi bi-exclamation-triangle me-2"></i>Configuration système incomplète (.env).
    </div>

    <!-- Identifiant -->
    <div class="form-group">
      <label for="fo-login" class="form-label small fw-bold text-muted text-uppercase mb-2">Identifiant GLPI</label>
      <div class="input-group input-group-lg-custom">
        <span class="input-group-text bg-light border-end-0">
          <i class="bi bi-person text-success"></i>
        </span>
        <input
          id="fo-login"
          v-model="login"
          type="text"
          class="form-control bg-light border-start-0 ps-0"
          placeholder="votre_nom_utilisateur"
          autocomplete="username"
          required
        />
      </div>
    </div>

    <!-- Mot de passe -->
    <div class="form-group">
      <label for="fo-password" class="form-label small fw-bold text-muted text-uppercase mb-2">Mot de passe</label>
      <div class="input-group input-group-lg-custom">
        <span class="input-group-text bg-light border-end-0">
          <i class="bi bi-lock text-success"></i>
        </span>
        <input
          id="fo-password"
          v-model="password"
          type="password"
          class="form-control bg-light border-start-0 ps-0"
          placeholder="••••••••"
          autocomplete="current-password"
          required
        />
      </div>
    </div>

    <div v-if="errorText" class="alert alert-danger border-0 small py-2 animate-shake">
      <i class="bi bi-shield-exclamation me-2"></i>{{ errorText }}
    </div>

    <button class="btn btn-success btn-lg-custom w-100 mt-2 shadow-sm fw-bold" type="submit" :disabled="loading">
      <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
      <span>{{ loading ? 'Connexion en cours...' : 'Accéder à mon espace' }}</span>
    </button>
  </form>
</template>

<style scoped>
.input-group-lg-custom .form-control {
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border-radius: 12px;
  border-color: #f1f5f9;
}

.input-group-lg-custom .input-group-text {
  padding: 0.8rem 1rem;
  border-radius: 12px;
  border-color: #f1f5f9;
  font-size: 1.2rem;
}

.input-group-lg-custom .input-group-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group-lg-custom .form-control {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.form-control:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
  background-color: #fff !important;
}

.btn-lg-custom {
  padding: 0.9rem;
  border-radius: 14px;
  font-size: 1.05rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  transition: all 0.3s;
}

.btn-lg-custom:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(16, 185, 129, 0.25) !important;
}

.animate-shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}
</style>
