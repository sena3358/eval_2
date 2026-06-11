<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { createElementsApi } from '../../../services/elements/elementsApi'
import { foAuthState } from '../../../services/frontoffice/auth/foAuthSession'
import GlpiImage from '../../../components/common/GlpiImage.vue'

const route = useRoute()
const router = useRouter()
const itemtype = computed(() => route.params.itemtype)
const id = computed(() => route.params.id)

const api = createElementsApi({ getToken: () => foAuthState.sessionToken })

const loading = ref(false)
const fullData = ref(null)
const documents = ref([])

const fetchDetails = async () => {
  if (!id.value || !itemtype.value) return
  loading.value = true
  try {
    const data = await api.getElement(itemtype.value, id.value)
    fullData.value = data
    
    // Fetch related documents/images
    const docs = await api.fetchImagesForItems([{ id: id.value, itemtype: itemtype.value }])
    const docId = docs[`${itemtype.value}_${id.value}`]
    documents.value = docId ? [docId] : []
  } catch (e) {
    console.error('Erreur details element:', e)
  } finally {
    loading.value = false
  }
}

onMounted(fetchDetails)

const typeConfig = {
  Computer: { icon: 'bi-laptop', color: '#10b981', bg: '#ecfdf5' },
  Monitor: { icon: 'bi-display', color: '#3b82f6', bg: '#eff6ff' },
  NetworkEquipment: { icon: 'bi-router', color: '#6366f1', bg: '#eef2ff' },
  Printer: { icon: 'bi-printer', color: '#f59e0b', bg: '#fffbeb' },
  Phone: { icon: 'bi-phone', color: '#8b5cf6', bg: '#f5f3ff' },
  Peripheral: { icon: 'bi-mouse2', color: '#ec4899', bg: '#fdf2f8' },
  Default: { icon: 'bi-box', color: '#94a3b8', bg: '#f8fafc' }
}

const getIcon = (type) => typeConfig[type] || typeConfig.Default

const getStatusLabel = (statusId) => {
  return statusId || 'Non défini'
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="fo-page-container">
    <nav class="mb-4 d-flex align-items-center gap-3">
      <button @click="goBack" class="btn btn-white shadow-sm rounded-3 px-3 border">
        <i class="bi bi-arrow-left me-2"></i>Retour
      </button>
      <div class="ms-2">
        <h1 class="h4 fw-bold mb-0 text-slate-800">Détails de l'équipement</h1>
        <div class="text-muted small">
          {{ itemtype }} <span class="mx-2 text-silver opacity-50">/</span> #{{ id }}
        </div>
      </div>
    </nav>

    <div v-if="loading" class="card border-0 shadow-sm rounded-4 py-5 text-center">
      <div class="spinner-border text-success" role="status"></div>
      <p class="text-muted small mt-2 fw-medium">Récupération des spécifications techniques...</p>
    </div>

    <div v-else-if="fullData" class="row g-4 animate-slide-up">
      <!-- Fiche principale -->
      <div class="col-12">
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
          <div class="card-body p-4 p-md-5">
            <div class="d-flex flex-column flex-md-row align-items-start gap-4 mb-5">
              <div 
                class="asset-image-large shadow-sm"
                :style="{ backgroundColor: getIcon(itemtype).bg, color: getIcon(itemtype).color }"
              >
                <GlpiImage v-if="documents.length" :doc-id="documents[0]" />
                <i v-else :class="['bi', getIcon(itemtype).icon]"></i>
              </div>

              <div class="flex-grow-1 pt-2">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <span class="badge rounded-pill bg-light text-dark border px-3 py-2 fw-medium uppercase-tracking">
                    {{ itemtype }}
                  </span>
                  <span class="badge rounded-pill bg-success-soft text-success border border-success-subtle px-3 py-2 fw-bold">
                    {{ getStatusLabel(fullData.states_id) }}
                  </span>
                </div>
                <h2 class="h2 fw-bold text-dark mb-3">{{ fullData.name }}</h2>
                
                <div class="info-pill bg-light border-0 d-inline-flex">
                  <span class="text-muted smaller fw-bold me-2">Numéro d'inventaire</span>
                  <span class="fw-medium">{{ fullData.otherserial || 'N/A' }}</span>
                </div>
              </div>
            </div>

            <h3 class="h6 fw-bold text-muted text-uppercase letter-spacing-1 mb-4">
              <i class="bi bi-info-circle me-2"></i>Spécifications
            </h3>
            
            <div class="row g-4">
              <div class="col-12 col-md-4" v-if="fullData.locations_id">
                <div class="spec-card">
                  <div class="label">Lieu</div>
                  <div class="value">{{ fullData.locations_id }}</div>
                </div>
              </div>
              <div class="col-12 col-md-4" v-if="fullData.manufacturers_id">
                <div class="spec-card">
                  <div class="label">Fabricant</div>
                  <div class="value">{{ fullData.manufacturers_id }}</div>
                </div>
              </div>
              <div class="col-12 col-md-4" v-if="fullData.models_id">
                <div class="spec-card">
                  <div class="label">Modèle</div>
                  <div class="value">{{ fullData.models_id }}</div>
                </div>
              </div>
            </div>

            <!-- <div class="mt-5 pt-4 border-top">
              <router-link :to="{ name: 'fo-ticket-create' }" class="btn btn-success rounded-pill py-3 px-5 fw-bold shadow-sm">
                <i class="bi bi-megaphone me-2"></i>Signaler un problème
              </router-link>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fo-page-container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-slate-800 { color: #1e293b; }

.btn-white {
  background-color: white;
  color: #475569;
}

.asset-image-large {
  width: 140px;
  height: 140px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  overflow: hidden;
  flex-shrink: 0;
}

.asset-image-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-success-soft {
  background-color: #ecfdf5;
}

.uppercase-tracking {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.7rem;
}

.letter-spacing-1 {
  letter-spacing: 0.05em;
}

.info-pill {
  padding: 0.6rem 1.25rem;
  border-radius: 12px;
  display: flex;
  align-items: baseline;
  font-size: 0.9rem;
}

.spec-card {
  background: white;
  padding: 1.25rem;
  border-radius: 20px;
  border: 1px solid #f1f5f9;
  height: 100%;
  transition: all 0.3s;
}

.spec-card .label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 0.5rem;
}

.spec-card .value {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
}

.animate-slide-up {
  animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.border-dashed {
  border-style: dashed !important;
}

.text-silver { color: #94a3b8; }
</style>
