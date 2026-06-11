<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useFoAuth } from '../../composables/frontoffice/auth/useFoAuth'

const router = useRouter()
const route = useRoute()
const { foAuthState, signOut } = useFoAuth()

const userName = computed(() => foAuthState.user?.name || 'Utilisateur')
const isActive = (path) => route.path === path

const logout = async () => {
  await signOut()
  router.push({ name: 'fo-login' })
}
</script>

<template>
  <nav class="fo-sidebar d-flex flex-column h-100 shadow">
    <div class="sidebar-brand d-flex align-items-center gap-3 px-4 py-4">
      <div class="brand-icon d-inline-flex align-items-center justify-content-center">
        <i class="bi bi-person-workspace"></i>
      </div>
      <div>
        <div class="fw-bold text-white lh-1">FRONTOFFICE</div>
        <div class="text-success-light small fw-bold mt-1">SUPPORT CLIENT</div>
      </div>
    </div>

    <div class="flex-grow-1 px-3 py-2 overflow-auto custom-scrollbar">
      <div class="nav-section mb-4">
        <h6 class="nav-label text-uppercase mb-2">Service d'assistance</h6>
        <div class="nav flex-column gap-2">
          <router-link 
            to="/front/tickets/kanban" 
            class="nav-link sidebar-link d-flex align-items-center gap-3"
            :class="{ active: isActive('/front/tickets/kanban') || isActive('/front') }"
          >
            <i class="bi bi-kanban"></i>
            <span>Tableau de bord</span>
          </router-link>

          <router-link 
            to="/front/elements" 
            class="nav-link sidebar-link d-flex align-items-center gap-3"
            :class="{ active: isActive('/front/elements') }"
          >
            <i class="bi bi-pc-display"></i>
            <span>Mes Éléments</span>
          </router-link>

          <router-link 
            to="/front/tickets/create" 
            class="nav-link sidebar-link d-flex align-items-center gap-3"
            :class="{ active: isActive('/front/tickets/create') }"
          >
            <i class="bi bi-plus-circle-fill text-success"></i>
            <span>Créer un ticket</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="sidebar-footer p-3 border-top border-secondary-subtle bg-dark-subtle">
      <div class="user-card d-flex align-items-center gap-2 mb-3 px-2">
        <div class="user-avatar text-bg-success">
          {{ userName.charAt(0).toUpperCase() }}
        </div>
        <div class="overflow-hidden">
          <div class="text-white small fw-bold text-truncate">{{ userName }}</div>
          <div class="text-muted smaller">Connecté</div>
        </div>
      </div>
      <button @click="logout" class="btn btn-outline-danger btn-sm w-100 d-flex align-items-center justify-content-center gap-2 rounded-3 border-0 py-2">
        <i class="bi bi-box-arrow-right"></i>
        <span>Déconnexion</span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.fo-sidebar {
  background: #1a202c;
  width: 260px;
  min-height: 100vh;
  z-index: 1000;
}

.sidebar-brand {
  background: rgba(0, 0, 0, 0.2);
}

.brand-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.text-success-light {
  color: #10b981;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
}

.nav-label {
  color: #718096;
  font-size: 0.75rem;
  font-weight: 700;
  padding-left: 1rem;
}

.sidebar-link {
  color: #a0aec0;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  transition: all 0.2s;
  font-weight: 500;
}

.sidebar-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  transform: translateX(5px);
}

.sidebar-link.active {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.sidebar-link i {
  font-size: 1.1rem;
}

.user-avatar {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.sidebar-footer {
  background: rgba(0, 0, 0, 0.15);
}

.smaller { font-size: 0.75rem; }

.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
</style>
