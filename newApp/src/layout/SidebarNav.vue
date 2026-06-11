<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getNavigationSections } from '../services/navigation/navigationService'

const route = useRoute()
const sections = getNavigationSections()
const expandedMenus = ref({})

const isActive = (item) => route.path === item.to
const isSubmenuActive = (submenu) => submenu.some(sub => isActive(sub))
const hasSubmenu = (item) => item.submenu && item.submenu.length > 0
const isMenuExpanded = (itemKey) => expandedMenus.value[itemKey]

const toggleSubmenu = (itemKey) => {
  expandedMenus.value[itemKey] = !expandedMenus.value[itemKey]
}
</script>

<template>
  <nav class="sidebar d-flex flex-column h-100 shadow-lg">
    <div class="sidebar-brand d-flex align-items-center gap-3 px-4 py-4">
      <div class="sidebar-brand-icon d-inline-flex align-items-center justify-content-center">
        <i class="bi bi-grid-1x2-fill"></i>
      </div>
      <div>
        <div class="fw-bold text-white lh-1">PORTAL</div>
        <div class="text-primary-light small fw-bold tracking-wider mt-1">GLPI v11</div>
      </div>
    </div>

    <div class="flex-grow-1 overflow-auto px-3 pb-4 custom-scrollbar">
      <div v-for="section in sections" :key="section.title" class="mb-3">
        <h6 class="sidebar-heading text-uppercase px-2 mt-2 mb-2">
          {{ section.title }}
        </h6>
        <ul class="nav flex-column gap-1">
          <li v-for="item in section.items" :key="item.key" class="nav-item">
            <!-- Élément sans sous-menu -->
            <router-link
              v-if="!item.disabled && !hasSubmenu(item)"
              :to="item.to"
              class="nav-link sidebar-link d-flex align-items-center gap-2"
              :class="{ active: isActive(item) }"
            >
              <i class="bi" :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </router-link>

            <!-- Élément avec sous-menu -->
            <div v-else-if="hasSubmenu(item) && !item.disabled" class="submenu-wrapper">
              <button
                class="nav-link sidebar-link d-flex align-items-center gap-2 w-100 text-start border-0"
                :class="{ active: isMenuExpanded(item.key) || isSubmenuActive(item.submenu) }"
                @click="toggleSubmenu(item.key)"
              >
                <i class="bi" :class="item.icon"></i>
                <span>{{ item.label }}</span>
                <i class="bi ms-auto" :class="isMenuExpanded(item.key) ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
              </button>

              <!-- Sous-menus -->
              <ul v-if="isMenuExpanded(item.key)" class="nav flex-column gap-1 submenu ms-3 mt-1">
                <li v-for="subitem in item.submenu" :key="subitem.key" class="nav-item">
                  <router-link
                    :to="subitem.to"
                    class="nav-link sidebar-link submenu-link d-flex align-items-center gap-2"
                    :class="{ active: isActive(subitem) }"
                  >
                    <i class="bi" :class="subitem.icon"></i>
                    <span>{{ subitem.label }}</span>
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Élément désactivé -->
            <span
              v-else
              class="nav-link sidebar-link disabled d-flex align-items-center gap-2"
            >
              <i class="bi" :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.sidebar {
  background: #0f172a;
  min-height: 100%;
}

.sidebar-brand {
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.sidebar-brand-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #0f172a;
  box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3);
  font-size: 1.25rem;
}

.text-primary-light {
  color: #fbbf24;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
}

.sidebar-heading {
  color: #475569;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  padding-left: 1.25rem !important;
  margin-top: 1.5rem !important;
}

.sidebar-link {
  color: #94a3b8;
  border-radius: 12px;
  padding: 0.75rem 1.25rem;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  font-weight: 500;
  margin: 2px 0;
}

.sidebar-link i {
  font-size: 1.1rem;
  opacity: 0.7;
  transition: all 0.2s;
}

.sidebar-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #f8fafc;
  transform: translateX(4px);
}

.sidebar-link:hover i {
  color: #fbbf24;
  opacity: 1;
}

.sidebar-link.active {
  background: rgba(251, 191, 36, 0.1);
  color: #fbbf24;
  font-weight: 700;
}

.sidebar-link.active i {
  color: #fbbf24;
  opacity: 1;
}

.sidebar-link.disabled {
  color: #334155;
  opacity: 0.5;
  pointer-events: none;
}

.submenu-wrapper {
  position: relative;
}

.submenu-wrapper button {
  background: none;
  cursor: pointer;
  width: 100%;
}

.submenu {
  margin-left: 1.25rem !important;
  padding-left: 0.5rem;
  border-left: 1px solid rgba(251, 191, 36, 0.2);
}

.submenu-link {
  font-size: 0.88rem;
  padding: 0.5rem 1rem !important;
  opacity: 0.8;
}

.submenu-link.active {
  background: none;
  box-shadow: none;
  color: #fbbf24;
  opacity: 1;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}
</style>
