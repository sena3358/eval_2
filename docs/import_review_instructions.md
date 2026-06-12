# Guide d'implémentation : Page de Révision d'Import CSV

Ce guide explique comment créer une nouvelle page permettant d'importer le fichier CSV exporté précédemment et d'afficher ses données dans un tableau structuré.

## 1. Création de la page `ImportReviewPage.vue`

**Nouveau Fichier :** `newApp/src/pages/import/ImportReviewPage.vue`
```vue
<script setup>
import { ref } from 'vue'
import { parseCsv, readFileAsText } from '../../services/import/csvParser'

const importedData = ref([])
const fileName = ref('')
const loading = ref(false)

const handleFileUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  loading.value = true
  fileName.value = file.name
  
  try {
    const text = await readFileAsText(file)
    // Notre parseCsv retourne un tableau d'objets [{Section, Cle, Valeur}, ...]
    importedData.value = parseCsv(text)
  } catch (error) {
    alert("Erreur lors de la lecture du fichier : " + error.message)
  } finally {
    loading.value = false
  }
}

const clear = () => {
  importedData.value = []
  fileName.value = ''
}
</script>

<template>
  <div class="container py-4">
    <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
      <h2 class="h4 fw-bold mb-3">Révision d'Import CSV</h2>
      <p class="text-muted small">Importez un fichier CSV généré par l'export pour visualiser son contenu.</p>

      <div class="d-flex align-items-center gap-3">
        <input type="file" accept=".csv" @change="handleFileUpload" class="form-control rounded-3" />
        <button v-if="importedData.length" @click="clear" class="btn btn-outline-danger px-4 rounded-3">Réinitialiser</button>
      </div>
    </div>

    <!-- Affichage du tableau -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary"></div>
    </div>

    <div v-else-if="importedData.length" class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="bg-light">
            <tr>
              <th class="ps-4">Section</th>
              <th>Clé</th>
              <th class="pe-4">Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in importedData" :key="index">
              <td class="ps-4">
                <span class="badge" :class="{
                  'bg-primary-subtle text-primary': row.Section === 'TICKET',
                  'bg-info-subtle text-info': row.Section === 'MATERIEL',
                  'bg-warning-subtle text-warning': row.Section === 'COUT'
                }">{{ row.Section }}</span>
              </td>
              <td class="fw-medium">{{ row.Cle }}</td>
              <td class="pe-4">{{ row.Valeur }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else-if="fileName && !loading" class="alert alert-info rounded-4">
      Le fichier ne contient aucune donnée valide ou est vide.
    </div>
  </div>
</template>
```

## 2. Enregistrement de la route
Ajoutez la nouvelle page au routeur de l'application.

**Fichier :** `newApp/src/routes/index.js`
```javascript
// 1. Importer la page
import ImportReviewPage from '../pages/import/ImportReviewPage.vue'

// 2. Ajouter la route dans le tableau `routes`
{ 
  path: '/import-review', 
  name: 'import-review', 
  component: ImportReviewPage 
},
```

## 3. Ajout d'un lien dans la navigation (Optionnel)
Vous pouvez ajouter un bouton dans la barre de navigation ou une autre page pour accéder facilement à cette révision.

**Exemple dans un menu :**
```html
<router-link to="/import-review" class="btn btn-light rounded-pill px-3">
  <i class="bi bi-eye me-2"></i>Réviser Import
</router-link>
```
