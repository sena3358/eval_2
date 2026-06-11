<script setup>
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import HeaderBar from './layout/HeaderBar.vue'
import SidebarNav from './layout/SidebarNav.vue'
import FooterBar from './layout/FooterBar.vue'
import FrontOfficeShell from './layout/frontoffice/FrontOfficeShell.vue'

const route = useRoute()

// Le layout est choisi via la meta de route :
// 'blank' (login nu), 'frontoffice' (espace utilisateur), sinon le chrome d'admin.
const layout = computed(() => route.meta.layout || 'default')
</script>

<template>
  <RouterView v-if="layout === 'blank'" />

  <FrontOfficeShell v-else-if="layout === 'frontoffice'" />

  <div v-else class="app-shell d-flex min-vh-100 bg-light">
    <aside class="app-sidebar d-none d-lg-block">
      <SidebarNav />
    </aside>

    <div
      class="offcanvas offcanvas-start app-offcanvas d-lg-none"
      tabindex="-1"
      id="appSidebar"
      aria-labelledby="appSidebarLabel"
    >
      <div class="offcanvas-header">
        <span id="appSidebarLabel" class="fw-semibold">Navigation</span>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Fermer"
        ></button>
      </div>
      <div class="offcanvas-body p-0">
        <SidebarNav />
      </div>
    </div>

    <div class="d-flex flex-column flex-grow-1 min-vw-0">
      <HeaderBar />

      <main class="flex-grow-1 p-3 p-lg-4">
        <RouterView />
      </main>

      <FooterBar />
    </div>
  </div>
</template>

<style scoped>
.app-sidebar {
  width: 250px;
  flex-shrink: 0;
}

.app-offcanvas {
  --bs-offcanvas-width: 280px;
}

.min-vw-0 {
  min-width: 0;
}
</style>
