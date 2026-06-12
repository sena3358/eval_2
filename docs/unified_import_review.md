# Guide d'implémentation : Page de Révision d'Import Unifiée

Ce guide explique comment créer une page capable d'importer et d'afficher le contenu des CSV exportés pour les **Tickets** et les **Matériels**.

## 1. Création de la page `UniversalImportPage.vue`

**Nouveau Fichier :** `newApp/src/pages/import/UniversalImportPage.vue`
```vue
<script setup>
import { ref } from 'vue'
import { parseCsv, readFileAsText } from '../../services/import/csvParser'

const data = ref([])
const headers = ref([])
const fileName = ref('')
const loading = ref(false)

const handleFileUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  loading.value = true
  fileName.value = file.name
  
  try {
    const text = await readFileAsText(file)
    const rows = parseCsv(text)
    if (rows.length > 0) {
      headers.value = Object.keys(rows[0])
      data.value = rows
    }
  } catch (error) {
    alert("Erreur : " + error.message)
  } finally {
    loading.value = false
  }
}

const clear = () => {
  data.value = []
  headers.value = []
  fileName.value = ''
}
</script>

<template>
  <div class="container py-4">
    <div class="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
      <h2 class="h4 fw-bold mb-3">Révision d'Import (Tickets / Matériels)</h2>
      <p class="text-muted small">Sélectionnez un fichier CSV exporté pour visualiser son contenu avant traitement.</p>

      <div class="d-flex align-items-center gap-3">
        <input type="file" accept=".csv" @change="handleFileUpload" class="form-control rounded-3 border-light shadow-sm" />
        <button v-if="data.length" @click="clear" class="btn btn-outline-danger px-4 rounded-pill">Réinitialiser</button>
      </div>
    </div>

    <!-- Chargement -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary"></div>
    </div>

    <!-- Tableau Dynamique -->
    <div v-else-if="data.length" class="card border-0 shadow-sm rounded-4 overflow-hidden animate-in">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="bg-light">
            <tr>
              <th v-for="h in headers" :key="h" class="py-3 px-4 text-uppercase smaller fw-bold text-muted">{{ h }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in data" :key="idx">
              <td v-for="h in headers" :key="h" class="px-4 py-3">
                <span v-if="h === 'Section' || h === 'Champ'" class="badge rounded-pill bg-primary-subtle text-primary">
                  {{ row[h] }}
                </span>
                <span v-else>{{ row[h] }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else-if="fileName && !loading" class="alert alert-info rounded-4 border-0 shadow-sm">
      Le fichier sélectionné est vide ou mal formaté.
    </div>
  </div>
</template>

<style scoped>
.animate-in {
  animation: slideUp 0.4s ease-out;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.smaller { font-size: 0.75rem; }
</style>
```

## 2. Enregistrement de la route
Ajoutez la route dans `newApp/src/routes/index.js`.

```javascript
import UniversalImportPage from '../pages/import/UniversalImportPage.vue'

// Dans le tableau routes
{ 
  path: '/universal-import', 
  name: 'universal-import', 
  component: UniversalImportPage 
}
```

## 3. Usage suggéré
Cette page est plus versatile car elle s'adapte automatiquement aux colonnes présentes dans le CSV (`Section/Cle/Valeur` pour les tickets ou `Champ/Valeur` pour les matériels).
