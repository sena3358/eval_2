<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/auth/useAuth'

const router = useRouter()
const { authState, signOut } = useAuth()

const userName = computed(() => authState.user?.name || 'Utilisateur')
const userProfile = computed(() => authState.user?.activeProfile || 'GLPI')
const initials = computed(() =>
  userName.value
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
)

const logout = async () => {
  await signOut()
  router.push({ name: 'login' })
}
</script>

<template>
  <header class="navbar navbar-expand bg-white border-bottom px-3 px-lg-4 py-2">
    <div class="container-fluid p-0">
      <div class="d-flex align-items-center gap-2">
        <button
          class="btn btn-outline-secondary d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#appSidebar"
          aria-controls="appSidebar"
          aria-label="Ouvrir le menu"
        >
          <i class="bi bi-list"></i>
        </button>
        <span class="navbar-brand fw-semibold mb-0 d-none d-md-inline">
          Console d'administration
        </span>
      </div>

      <div class="d-flex align-items-center gap-3 ms-auto">


        <div class="dropdown">
          <button
            class="btn d-flex align-items-center gap-2 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span
              class="avatar d-inline-flex align-items-center justify-content-center"
            >
              {{ initials }}
            </span>
            <span class="text-start d-none d-sm-block lh-sm">
              <span class="d-block fw-semibold small">{{ userName }}</span>
              <span class="d-block text-muted" style="font-size: 0.75rem">
                {{ userProfile }}
              </span>
            </span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm">
            <li>
              <span class="dropdown-item-text small text-muted">
                Connecte en tant que <strong>{{ userName }}</strong>
              </span>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button class="dropdown-item text-danger" type="button" @click="logout">
                <i class="bi bi-box-arrow-right me-2"></i>Se deconnecter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
}
</style>
