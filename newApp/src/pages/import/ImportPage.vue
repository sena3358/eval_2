<template>
  <div class="import-page">
    <div class="import-page__header">
      <h1 class="import-page__title">Importation GLPI</h1>
      <!-- <p class="import-page__subtitle">
        Importez vos matériels, tickets et images en 3 étapes.
        L'ordre est important : commencez toujours par les matériels.
      </p> -->
    </div>

    <div class="import-grid">
      <!-- Section 1 : Matériels -->
      <section class="import-card">
        <div class="card-header">
          <div class="card-number">1</div>
          <div class="card-info">
            <h3 class="card-title">Matériels</h3>
            <!-- <p class="card-subtitle">CSV Feuille 1 : Name, Status, Item_Type...</p> -->
          </div>
        </div>
        
        <FilePicker
          accept=".csv"
          hint="Cliquer ou glisser le CSV matériels"
          :preview-rows="materialsComposable.preview.value"
          @file-selected="onMaterialsFileSelected"
          @file-cleared="materialsComposable.reset()"
        />

        <ImportReport :report="materialsComposable.report.value" />

        <div class="registry-badge" v-if="materialsComposable.materialRegistry.value.size">
          <i class="bi bi-check-circle-fill"></i>
          {{ materialsComposable.materialRegistry.value.size }} matériels en mémoire
        </div>
      </section>

      <!-- Section 2 : Tickets -->
      <section class="import-card">
        <div class="card-header">
          <div class="card-number">2</div>
          <div class="card-info">
            <h3 class="card-title">Tickets</h3>
            <!-- <p class="card-subtitle">CSV Feuille 2 : Ref, Titre, Items...</p> -->
          </div>
        </div>

        <FilePicker
          accept=".csv"
          hint="Cliquer ou glisser le CSV tickets"
          :preview-rows="ticketsComposable.previewTickets.value"
          @file-selected="onTicketsFileSelected"
          @file-cleared="ticketsFile = null"
        />

        <ImportReport :report="ticketsComposable.ticketReport.value" />
      </section>

      <!-- Section 3 : Coûts -->
      <section class="import-card">
        <div class="card-header">
          <div class="card-number">3</div>
          <div class="card-info">
            <h3 class="card-title">Coûts</h3>
            <!-- <p class="card-subtitle">CSV Feuille 3 : Temps, Coût fixe...</p> -->
          </div>
        </div>

        <FilePicker
          accept=".csv"
          hint="Cliquer ou glisser le CSV coûts"
          :preview-rows="ticketsComposable.previewCosts.value"
          @file-selected="onCostsFileSelected"
          @file-cleared="costsFile = null"
        />

        <ImportReport :report="ticketsComposable.costReport.value" />
      </section>

      <!-- Section 4 : Images -->
      <section class="import-card">
        <div class="card-header">
          <div class="card-number">4</div>
          <div class="card-info">
            <h3 class="card-title">Images</h3>
            <!-- <p class="card-subtitle">Fichier ZIP contenant les photos</p> -->
          </div>
        </div>

        <FilePicker
          accept=".zip"
          hint="Sélectionner le ZIP d'images"
          @file-selected="onZipFileSelected"
          @file-cleared="imagesComposable.reset()"
        />

        <div class="zip-preview" v-if="imagesComposable.zipPreview.value.length">
          <p class="preview__title">{{ imagesComposable.zipPreview.value.length }} image(s) détectée(s)</p>
        </div>

        <ImportReport :report="imagesComposable.report.value" />
      </section>
    </div>

    <!-- Actions globales -->
    <div class="bulk-footer mt-5">
      <div v-if="activeError" class="alert alert--error mb-4">
        <strong>Erreur :</strong> {{ activeError }}
      </div>

      <button
        class="btn btn--primary btn--xl w-100"
        :disabled="isBulkLoading || anyLoading || !canRunBulk"
        @click="runFullImport"
      >
        <span v-if="isBulkLoading" class="spinner" />
        {{ isBulkLoading ? 'Importation groupée en cours...' : 'Lancer l\'importation globale' }}
      </button>
      
      <p class="text-center mt-3 text-muted" v-if="!canRunBulk">
        Sélectionnez au minimum les fichiers <strong>Matériels</strong> et <strong>Tickets</strong>.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FilePicker from '../../components/import/FilePicker.vue'
import ImportReport from '../../components/import/ImportReport.vue'
import { useImportMaterials } from '../../composables/images/import/useImportMaterials.js'
import { useImportTickets } from '../../composables/materiels/useImportTickets.js'
import { useImportImages } from '../../composables/tickets/cout/useImportImages.js'

// ── Composables ──────────────────────────────────────────────────────────────
const materialsComposable = useImportMaterials()
const ticketsComposable   = useImportTickets()
const imagesComposable    = useImportImages()

// ── État local (fichiers sélectionnés) ───────────────────────────────────────
const materialsFile = ref(null)
const ticketsFile   = ref(null)
const costsFile     = ref(null)
const zipFile       = ref(null)

// ── Erreur active (remonte n'importe quel composable) ────────────────────────
const pageError = ref(null)
const activeError = computed(() =>
  pageError.value
  || materialsComposable.error.value
  || ticketsComposable.error.value
  || imagesComposable.error.value
)

const isBulkLoading = ref(false)
const canRunBulk = computed(() => Boolean(materialsFile.value && ticketsFile.value))
const anyLoading = computed(() =>
  materialsComposable.isLoading.value
  || ticketsComposable.isLoading.value
  || imagesComposable.isLoading.value
)

// ── Handlers fichiers ────────────────────────────────────────────────────────
async function onMaterialsFileSelected(file) {
  pageError.value = null
  materialsFile.value = file
  await materialsComposable.previewCsv(file)
}

async function onTicketsFileSelected(file) {
  pageError.value = null
  ticketsFile.value = file
  await ticketsComposable.previewTicketsCsv(file)
}

async function onCostsFileSelected(file) {
  pageError.value = null
  costsFile.value = file
  await ticketsComposable.previewCostsCsv(file)
}

async function onZipFileSelected(file) {
  pageError.value = null
  zipFile.value = file
  await imagesComposable.previewZip(file)
}

// ── Actions d'import ─────────────────────────────────────────────────────────
async function runMaterialsImport() {
  await materialsComposable.runImport(materialsFile.value)
}

async function runTicketsImport() {
  await ticketsComposable.runImport(
    ticketsFile.value,
    costsFile.value,
    materialsComposable.materialRegistry.value
  )
}

async function runImagesImport() {
  await imagesComposable.runImport(
    zipFile.value,
    materialsComposable.materialRegistry.value
  )
}

async function runFullImport() {
  pageError.value = null

  if (!materialsFile.value || !ticketsFile.value) {
    pageError.value =
      'Sélectionne au minimum le CSV matériels (feuille 1) et le CSV tickets (feuille 2).'
    return
  }

  isBulkLoading.value = true
  try {
    await materialsComposable.runImport(materialsFile.value)
    if (materialsComposable.error.value) return

    const tasks = [
      ticketsComposable.runImport(
        ticketsFile.value,
        costsFile.value,
        materialsComposable.materialRegistry.value
      )
    ]

    if (zipFile.value) {
      tasks.push(
        imagesComposable.runImport(
          zipFile.value,
          materialsComposable.materialRegistry.value
        )
      )
    }

    await Promise.all(tasks)
  } finally {
    isBulkLoading.value = false
  }
}
</script>

<style scoped>
.import-page { max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem; }

.import-page__header { margin-bottom: 2.5rem; text-align: center; }
.import-page__title  { font-size: 2.2rem; font-weight: 800; margin: 0 0 .5rem; color: #1e293b; }
.import-page__subtitle { color: #64748b; font-size: 1.1rem; margin: 0; }

/* Grid Layout */
.import-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 900px) {
  .import-grid { grid-template-columns: 1fr; }
}

/* Card Design */
.import-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.import-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.card-number {
  width: 32px;
  height: 32px;
  background: #f1f5f9;
  color: #64748b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.card-title { font-size: 1.1rem; font-weight: 700; margin: 0; color: #334155; }
.card-subtitle { font-size: 0.85rem; color: #94a3b8; margin: 0.2rem 0 0; }

/* Badge Registre */
.registry-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #f0fdf4;
  color: #166534;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Alerts */
.alert { padding: 1rem; border-radius: 12px; font-size: 0.95rem; }
/* .alert--error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; } */

/* Actions */
.bulk-footer {
  max-width: 600px;
  margin: 3rem auto 0;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.btn--primary { background: #3b82f6; color: #fff; }
.btn--primary:hover:not(:disabled) { background: #2563eb; transform: translateY(-1px); }
.btn--primary:disabled { opacity: 0.5; cursor: not-allowed; }
.btn--xl { font-size: 1.1rem; padding: 1rem 2rem; }

/* ZIP preview */
.zip-preview { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.6rem 1rem; }
.preview__title { font-size: 0.85rem; font-weight: 600; color: #475569; margin: 0; }

.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid rgba(255,255,255,.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }
.mt-5 { margin-top: 3rem; }
.mt-3 { margin-top: 1rem; }
.mb-4 { margin-bottom: 1rem; }
.text-center { text-align: center; }
.text-muted { color: #94a3b8; font-size: 0.9rem; }
.w-100 { width: 100%; }
</style>
