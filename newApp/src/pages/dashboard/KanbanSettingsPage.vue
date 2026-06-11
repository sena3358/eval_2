<script setup>
import { ref, onMounted } from 'vue'
import { kanbanSettingsApi } from '../../services/tickets/kanbanSettingsApi'

const settings = ref({
  colorNew: '#f8fafc',
  colorProgress: '#f0f9ff',
  colorDone: '#f0fdf4',
  labelNew: 'Nouveau',
  labelProgress: 'En cours',
  labelDone: 'Terminé'
})

const loading = ref(false)
const saving = ref(false)
const successMsg = ref('')

const loadSettings = async () => {
  loading.value = true
  try {
    const data = await kanbanSettingsApi.getSettings()
    if (data) settings.value = { ...settings.value, ...data }
  } finally {
    loading.value = false
  }
}

const save = async () => {
  saving.value = true
  successMsg.value = ''
  try {
    await kanbanSettingsApi.saveSettings(settings.value)
    successMsg.value = 'Paramètres enregistrés avec succès !'
    setTimeout(() => { successMsg.value = '' }, 3000)
  } finally {
    saving.value = false
  }
}

onMounted(loadSettings)
</script>

<template>
  <div class="container-fluid py-4 animate-in">
    <div class="row justify-content-center">
      <div class="col-xl-8">
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div class="card-header bg-white border-bottom-0 pt-4 px-4">
            <div class="d-flex align-items-center gap-3">
              <div class="icon-box bg-primary-subtle text-primary rounded-3">
                <i class="bi bi-palette-fill"></i>
              </div>
              <div>
                <h4 class="fw-bold mb-0">Personnalisation du Kanban</h4>
                <p class="text-muted small mb-0">Configurez les couleurs et les noms des colonnes</p>
              </div>
            </div>
          </div>

          <div class="card-body p-4">
            <div v-if="loading" class="text-center py-5">
              <div class="spinner-border text-primary" role="status"></div>
            </div>

            <template v-else>
              <div class="settings-grid">
                <!-- Colonne Nouveau -->
                <div class="settings-card p-4 rounded-4 border bg-light-subtle">
                  <h6 class="fw-bold mb-4 d-flex align-items-center gap-2">
                    <span class="dot bg-secondary"></span> Colonne "Nouveau"
                  </h6>
                  <div class="mb-3">
                    <label class="form-label small fw-bold text-muted">Nom Personnalisé (Malgache)</label>
                    <input v-model="settings.labelNew" type="text" class="form-control border-0 shadow-sm" placeholder="Ex: Vaovao">
                  </div>
                  <div>
                    <label class="form-label small fw-bold text-muted">Couleur de fond</label>
                    <div class="d-flex gap-2 align-items-center">
                      <input v-model="settings.colorNew" type="color" class="form-control form-control-color border-0 shadow-sm" style="width: 50px;">
                      <span class="small font-monospace text-muted">{{ settings.colorNew }}</span>
                    </div>
                  </div>
                </div>

                <!-- Colonne En cours -->
                <div class="settings-card p-4 rounded-4 border bg-primary-subtle-light">
                  <h6 class="fw-bold mb-4 d-flex align-items-center gap-2">
                    <span class="dot bg-primary"></span> Colonne "En cours"
                  </h6>
                  <div class="mb-3">
                    <label class="form-label small fw-bold text-muted">Nom Personnalisé (Malgache)</label>
                    <input v-model="settings.labelProgress" type="text" class="form-control border-0 shadow-sm" placeholder="Ex: Efa manao">
                  </div>
                  <div>
                    <label class="form-label small fw-bold text-muted">Couleur de fond</label>
                    <div class="d-flex gap-2 align-items-center">
                      <input v-model="settings.colorProgress" type="color" class="form-control form-control-color border-0 shadow-sm" style="width: 50px;">
                      <span class="small font-monospace text-muted">{{ settings.colorProgress }}</span>
                    </div>
                  </div>
                </div>

                <!-- Colonne Terminé -->
                <div class="settings-card p-4 rounded-4 border bg-success-subtle-light">
                  <h6 class="fw-bold mb-4 d-flex align-items-center gap-2">
                    <span class="dot bg-success"></span> Colonne "Terminé"
                  </h6>
                  <div class="mb-3">
                    <label class="form-label small fw-bold text-muted">Nom Personnalisé (Malgache)</label>
                    <input v-model="settings.labelDone" type="text" class="form-control border-0 shadow-sm" placeholder="Ex: Vita">
                  </div>
                  <div>
                    <label class="form-label small fw-bold text-muted">Couleur de fond</label>
                    <div class="d-flex gap-2 align-items-center">
                      <input v-model="settings.colorDone" type="color" class="form-control form-control-color border-0 shadow-sm" style="width: 50px;">
                      <span class="small font-monospace text-muted">{{ settings.colorDone }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Preview -->
              <!-- <div class="mt-5 glass p-4 rounded-4 border">
                <h6 class="fw-bold mb-3 small text-uppercase letter-spacing-1 text-muted text-center">Aperçu du rendu</h6>
                <div class="d-flex gap-3 overflow-hidden" style="height: 120px;">
                  <div class="flex-grow-1 rounded-3 d-flex flex-column align-items-center justify-content-center p-3 shadow-sm border" :style="{ backgroundColor: settings.colorNew }">
                    <div class="fw-bold">{{ settings.labelNew }}</div>
                    <div class="small text-muted opacity-50">3 tickets</div>
                  </div>
                  <div class="flex-grow-1 rounded-3 d-flex flex-column align-items-center justify-content-center p-3 shadow-sm border" :style="{ backgroundColor: settings.colorProgress }">
                    <div class="fw-bold">{{ settings.labelProgress }}</div>
                    <div class="small text-muted opacity-50">5 tickets</div>
                  </div>
                  <div class="flex-grow-1 rounded-3 d-flex flex-column align-items-center justify-content-center p-3 shadow-sm border" :style="{ backgroundColor: settings.colorDone }">
                    <div class="fw-bold">{{ settings.labelDone }}</div>
                    <div class="small text-muted opacity-50">12 tickets</div>
                  </div>
                </div>
              </div> -->
            </template>
          </div>

          <div class="card-footer bg-light-subtle border-top-0 p-4 d-flex align-items-center justify-content-between">
            <div v-if="successMsg" class="text-success small fw-bold animate-in">
              <i class="bi bi-check-circle-fill me-1"></i> {{ successMsg }}
            </div>
            <div v-else></div>
            <button class="btn btn-primary px-5 rounded-pill shadow-sm py-2 d-flex align-items-center gap-2" :disabled="saving" @click="save">
              <span v-if="saving" class="spinner-border spinner-border-sm"></span>
              <span v-else>Enregistrer les modifications</span>
              <i v-if="!saving" class="bi bi-save"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-in {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.icon-box {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.settings-card {
  transition: all 0.3s;
}

.bg-light-subtle { background-color: #f8fafc !important; }
.bg-primary-subtle-light { background-color: #f0f9ff !important; }
.bg-success-subtle-light { background-color: #f0fdf4 !important; }

.dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.glass {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
}

.letter-spacing-1 { letter-spacing: 0.1em; }

.form-control-color {
  padding: 0;
  height: 38px;
  cursor: pointer;
}
</style>
