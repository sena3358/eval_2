<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFoAuth } from '../../composables/frontoffice/auth/useFoAuth'

const router = useRouter()
const { foAuthState, signOut } = useFoAuth()

const userName = computed(() => foAuthState.user?.name || 'Utilisateur')

const logout = async () => {
  await signOut()
  router.push({ name: 'fo-login' })
}
</script>

<template>
  <header class="navbar navbar-expand bg-white border-bottom px-3 px-lg-4 py-2">
    <div class="container-fluid p-0">
      <span class="navbar-brand fw-semibold mb-0 d-flex align-items-center gap-2">
        <i class="bi bi-headset text-success"></i>
        <span>Espace utilisateur</span>
      </span>

      <nav class="d-flex align-items-center gap-1 ms-3">
        <router-link to="/front/elements" class="nav-link px-2" active-class="fw-semibold text-primary">
          <i class="bi bi-box-seam me-1"></i>Elements
        </router-link>
        <router-link to="/front/tickets/create" class="nav-link px-2" active-class="fw-semibold text-primary">
          <i class="bi bi-plus-circle me-1"></i>Creer un ticket
        </router-link>
      </nav>

      <div class="dropdown ms-auto">
        <button
          class="btn d-flex align-items-center gap-2 dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="avatar d-inline-flex align-items-center justify-content-center">
            <i class="bi bi-person"></i>
          </span>
          <span class="text-start d-none d-sm-block lh-sm">
            <span class="d-block fw-semibold small">{{ userName }}</span>
          </span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end shadow-sm">
          <li>
            <button class="dropdown-item text-danger" type="button" @click="logout">
              <i class="bi bi-box-arrow-right me-2"></i>Se deconnecter
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #198754, #20c997);
  color: #fff;
  font-size: 0.9rem;
}
</style>
