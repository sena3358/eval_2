import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/dashboard/DashboardPage.vue'
import TicketsPage from '../pages/tickets/TicketsPage.vue'
import TicketDetailContentPage from '../pages/tickets/TicketDetailContentPage.vue'
import SqliteTestPage from '../pages/testBackSqlite/SqliteTestPage.vue'
import GlpiTestPage from '../pages/testApi/GlpiTestPage.vue'
import DataResetPage from '../pages/dataReset/DataResetPage.vue'
import ImportPage from '../pages/import/ImportPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import FoLoginPage from '../pages/frontoffice/auth/FoLoginPage.vue'
import ElementsListPage from '../pages/frontoffice/elements/ElementsListPage.vue'
import ElementDetailsPage from '../pages/frontoffice/elements/ElementDetailsPage.vue'
import TicketCreatePage from '../pages/frontoffice/tickets/TicketCreatePage.vue'
import TicketDetailsPage from '../pages/frontoffice/tickets/TicketDetailsPage.vue'
import { isAuthenticated } from '../services/auth/authSession'
import { foIsAuthenticated } from '../services/frontoffice/auth/foAuthSession'
import { useFoAuth } from '../composables/frontoffice/auth/useFoAuth'
import TicketsKanbanPage from '../pages/frontoffice/tickets/TicketsKanbanPage.vue'
import KanbanSettingsPage from '../pages/dashboard/KanbanSettingsPage.vue'
import CostsSummaryPage from '../pages/dashboard/CostsSummaryPage.vue'

const routes = [
  // --- Back Office ---
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { public: true, layout: 'blank' },
  },
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', name: 'dashboard', component: DashboardPage },
  { path: '/tickets', name: 'tickets', component: TicketsPage },
  { path: '/tickets/:id', name: 'ticket-detail', component: TicketDetailContentPage },
  { path: '/tickets/:id/edit', name: 'ticket-edit', component: () => import('../pages/tickets/TicketEditPage.vue') },
  { path: '/sqlite', name: 'sqlite-test', component: SqliteTestPage },
  { path: '/glpi', name: 'glpi-test', component: GlpiTestPage },
  { path: '/reset', name: 'data-reset', component: DataResetPage },
  { path: '/import', name: 'import', component: ImportPage },
  { path: '/kanban-settings', name: 'kanban-settings', component: KanbanSettingsPage },

  // --- Front Office ---
  {
    path: '/front/login',
    name: 'fo-login',
    component: FoLoginPage,
    meta: { public: true, layout: 'blank', area: 'frontoffice' },
  },
  {
    path: '/front',
    name: 'front',
    component: TicketsKanbanPage,
    meta: { layout: 'frontoffice', area: 'frontoffice' },
  },
  {
    path: '/front/elements',
    name: 'fo-elements',
    component: ElementsListPage,
    meta: { layout: 'frontoffice', area: 'frontoffice' },
  },
  {
    path: '/front/elements/:itemtype/:id',
    name: 'fo-element-detail',
    component: ElementDetailsPage,
    meta: { layout: 'frontoffice', area: 'frontoffice' },
  },
  {
    path: '/front/tickets/create',
    name: 'fo-ticket-create',
    component: TicketCreatePage,
    meta: { layout: 'frontoffice', area: 'frontoffice' },
  },
  {
    path: '/front/tickets/:id',
    name: 'fo-ticket-detail',
    component: TicketDetailsPage,
    meta: { layout: 'frontoffice', area: 'frontoffice' },
  },
  {
    path: '/front/tickets/kanban',
    name: 'fo-tickets-kanban',
    component: TicketsKanbanPage,
    meta: { layout: 'frontoffice', area: 'frontoffice' },
  },
  {
    path: '/front/costs-summary',
    name: 'fo-costs-summary',
    component: CostsSummaryPage,
    meta: { layout: 'frontoffice', area: 'frontoffice' },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Garde globale multi-espace : chaque espace (Back/Front Office) possede sa
// propre session et sa propre page de connexion.
router.beforeEach((to) => {
  const isFront = to.meta.area === 'frontoffice'
  const authed = isFront ? foIsAuthenticated.value : isAuthenticated.value
  const loginName = isFront ? 'fo-login' : 'login'

  if (to.meta.public) {
    // Deja connecte : on evite de revenir sur la page de login
    if (to.name === loginName && authed) {
      return isFront ? { path: '/front' } : { path: '/' }
    }
    return true
  }

  if (!authed) {
    // Tentative de login silencieux automatique pour le Front Office si un jeton est configure
    if (isFront) {
      const { isSilentMode, silentSignIn } = useFoAuth()
      if (isSilentMode.value) {
        return silentSignIn().then(ok => {
          if (ok) return { path: to.fullPath }
          return { name: loginName, query: { redirect: to.fullPath } }
        })
      }
    }
    return { name: loginName, query: { redirect: to.fullPath } }
  }

  return true
})
