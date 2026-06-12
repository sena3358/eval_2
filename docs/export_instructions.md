# Guide d'implémentation : Export de Ticket en CSV

Ce guide explique comment ajouter un bouton pour exporter toutes les données d'un ticket (informations principales, matériels associés et coûts) dans un fichier `.csv` téléchargeable.

## 1. Création de l'utilitaire d'export
Nous allons créer une fonction pour transformer l'objet ticket et ses listes liées en format CSV et déclencher le téléchargement.

**Nouveau Fichier :** `newApp/src/services/import/exportCsv.js`
```javascript
/**
 * Génère et télécharge un fichier CSV pour un ticket unique.
 */
export function exportTicketToCsv(ticket, items, costs) {
  const rows = [];
  
  // 1. En-têtes (Format: Section, Clé, Valeur)
  rows.push(['Section', 'Cle', 'Valeur'].join(','));

  // 2. Informations du ticket
  rows.push(['TICKET', 'ID', ticket.id].join(','));
  rows.push(['TICKET', 'Titre', `"${ticket.name}"`].join(','));
  rows.push(['TICKET', 'Date', ticket.date].join(','));
  rows.push(['TICKET', 'Priorite', ticket.priority].join(','));
  rows.push(['TICKET', 'Statut', ticket.status].join(','));

  // 3. Matériels associés
  if (items && items.length > 0) {
    items.forEach(it => {
      rows.push(['MATERIEL', it.itemtype, it.items_id].join(','));
    });
  }

  // 4. Coûts
  if (costs && costs.length > 0) {
    costs.forEach(c => {
      rows.push(['COUT', `Intervention #${c.id}`, `${c.actiontime}s | ${c.cost_fixed}€`].join(','));
    });
  }

  // Création du Blob et téléchargement
  const csvContent = rows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  
  link.setAttribute('href', url);
  link.setAttribute('download', `ticket_${ticket.id}_export.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```

## 2. Intégration dans `TicketDetailsPage.vue`

### Script
Importez l'utilitaire d'export.
```javascript
import { exportTicketToCsv } from '../../../services/import/exportCsv'

const handleExport = () => {
  exportTicketToCsv(ticket.value, items.value, costs.value)
}
```

### Template
Ajoutez un bouton dans la zone d'actions (en haut de la page).

```html
<button @click="handleExport" class="btn btn-white shadow-sm rounded-3 px-3 border ms-2">
  <i class="bi bi-download me-2"></i>Exporter CSV
</button>
```

---

## Alternative : Format Tableur (Flat CSV)
Si vous préférez un format exploitable directement dans Excel (une ligne par coût), utilisez cette structure :

```javascript
// Rows: TicketID, TicketName, ItemType, ItemID, CostID, CostValue
const headers = ['Ticket_ID', 'Ticket_Name', 'Item_Type', 'Item_ID', 'Cost_ID', 'Amount'];
// ... boucle sur les coûts pour générer une ligne par coût avec les infos du ticket répétées.
```
