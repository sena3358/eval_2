<script setup>
import { RouterView } from 'vue-router'
import FrontOfficeSidebar from './FrontOfficeSidebar.vue'
</script>

<template>
  <div class="d-flex min-vh-100 bg-light">
    <!-- Sidebar fixe -->
    <FrontOfficeSidebar class="d-none d-lg-flex sticky-top h-100" />

    <div class="flex-grow-1 d-flex flex-column">
      <!-- Navbar mobile simple si besoin, ou juste le contenu -->
      <main class="flex-grow-1 p-3 p-lg-4">
        <div class="container-fluid">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.sticky-top {
  position: sticky;
  top: 0;
  height: 100vh;
}
</style>
