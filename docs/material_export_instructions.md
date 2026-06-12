# Guide d'implémentation : Export de Matériel en CSV

Ce guide explique comment ajouter un bouton pour exporter les caractéristiques techniques d'un matériel (PC, Moniteur, Téléphone, etc.) dans un fichier `.csv`.

## 1. Mise à jour de l'utilitaire d'export
Nous allons ajouter une fonction dédiée aux matériels dans notre service d'export.

**Fichier :** `newApp/src/services/import/exportCsv.js`
(Ajoutez cette fonction à la suite du fichier existant)

```javascript
/**
 * Génère et télécharge un fichier CSV pour un équipement (Material).
 */
export function exportMaterialToCsv(itemtype, data) {
  const rows = [];
  
  // 1. En-têtes
  rows.push(['Champ', 'Valeur'].join(','));

  // 2. Données techniques
  rows.push(['Type', itemtype].join(','));
  rows.push(['Nom', `"${data.name || ''}"`].join(','));
  rows.push(['Numero Inventaire', `"${data.otherserial || 'N/A'}"`].join(','));
  rows.push(['ID GLPI', data.id].join(','));
  rows.push(['Lieu', `"${data.locations_id || ''}"`].join(','));
  rows.push(['Fabricant', `"${data.manufacturers_id || ''}"`].join(','));
  rows.push(['Modele', `"${data.models_id || ''}"`].join(','));
  rows.push(['Statut (ID)', data.states_id || 'Non defini'].join(','));

  // Création du Blob et téléchargement
  const csvContent = rows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.setAttribute('href', url);
  link.setAttribute('download', `material_${itemtype}_${data.id}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```

## 2. Intégration dans `ElementDetailsPage.vue`

### Script
Importez la nouvelle fonction.
```javascript
import { exportMaterialToCsv } from '../../../services/import/exportCsv'

const handleExport = () => {
  exportMaterialToCsv(itemtype.value, fullData.value)
}
```

### Template
Ajoutez le bouton près du bouton "Retour".

```html
<button @click="handleExport" class="btn btn-white shadow-sm rounded-3 px-3 border ms-2">
  <i class="bi bi-download me-2"></i>Exporter CSV
</button>
```
