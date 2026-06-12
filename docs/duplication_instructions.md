# Guide d'implémentation : Duplication Multiple de Tickets

Ce guide explique comment ajouter une fonctionnalité permettant de dupliquer un ticket existant (avec ses matériels et ses coûts) un nombre N de fois.

## 1. Mise à jour de l'API (`ticketsApi.js`)
Assurez-vous que `createTicketsApi` permet d'ajouter des suivis (si vous souhaitez les dupliquer aussi).

**Fichier :** `newApp/src/services/tickets/ticketsApi.js`
```javascript
// Ajoutez cette méthode dans le return de createTicketsApi
const addTicketFollowup = async (ticketId, content) => {
  requireSession()
  const res = await glpi.request(
    '/ITILFollowup',
    withSession({
      method: 'POST',
      body: { 
        input: { 
          itemtype: 'Ticket',
          items_id: ticketId,
          content
        } 
      }
    })
  )
  if (isGlpiError(res.data)) throw new Error(glpiErrorMessage(res.data))
  return res.data
}
```

## 2. Création d'un Composable de Duplication
Pour garder le code propre, nous allons créer un composable dédié.

**Nouveau Fichier :** `newApp/src/composables/tickets/useDuplicateTicket.js`
```javascript
import { ref } from 'vue'
import { createTicketsApi } from '../../services/tickets/ticketsApi'
import { foAuthState } from '../../services/frontoffice/auth/foAuthSession'

export function useDuplicateTicket() {
  const api = createTicketsApi({ getToken: () => foAuthState.sessionToken })
  const isDuplicating = ref(false)
  const progress = ref(0) // Nombre de copies effectuées

  const duplicate = async (originalTicket, dataToCopy, count = 1) => {
    isDuplicating.value = true
    progress.value = 0
    
    try {
      for (let i = 0; i < count; i++) {
        // 1. Créer le ticket de base
        const newTicket = await api.createTicket({
          name: `${originalTicket.name} (Copie ${i + 1})`,
          content: originalTicket.content,
          status: originalTicket.status,
          priority: originalTicket.priority,
          itilcategories_id: originalTicket.itilcategories_id,
          type: originalTicket.type
        })

        // 2. Dupliquer les matériels liés
        if (dataToCopy.items) {
          for (const item of dataToCopy.items) {
            await api.linkItem(newTicket.id, item.itemtype, item.items_id)
          }
        }

        // 3. Dupliquer les coûts
        if (dataToCopy.costs) {
          for (const cost of dataToCopy.costs) {
            await api.addTicketCost(newTicket.id, {
              actiontime: cost.actiontime,
              cost_time: cost.cost_time,
              cost_fixed: cost.cost_fixed,
              name: cost.name
            })
          }
        }

        // 4. Dupliquer la solution (optionnel)
        if (dataToCopy.solutions) {
          for (const sol of dataToCopy.solutions) {
            await api.addTicketSolution(newTicket.id, sol.content)
          }
        }

        progress.value++
      }
    } finally {
      isDuplicating.value = false
    }
  }

  return { duplicate, isDuplicating, progress }
}
```

## 3. Ajout de l'interface dans `TicketDetailsPage.vue`
Ajoutez le bouton et le champ de saisie dans l'en-tête ou une zone d'action.

**Fichier :** `newApp/src/pages/frontoffice/tickets/TicketDetailsPage.vue`

### Script
```javascript
import { useDuplicateTicket } from '../../../composables/tickets/useDuplicateTicket'

const { duplicate, isDuplicating, progress } = useDuplicateTicket()
const duplicateCount = ref(1)

const handleDuplicate = async () => {
  if (confirm(`Voulez-vous vraiment créer ${duplicateCount.value} copie(s) de ce ticket ?`)) {
    await duplicate(ticket.value, { 
      items: items.value, 
      costs: costs.value, 
      solutions: solutions.value 
    }, duplicateCount.value)
    alert('Duplication terminée !')
  }
}
```

### Template (à insérer près du bouton Retour)
```html
<div class="d-flex align-items-center gap-2 ms-auto">
  <div class="input-group input-group-sm" style="width: 120px;">
    <span class="input-group-text bg-white border-end-0">Qté</span>
    <input v-model.number="duplicateCount" type="number" class="form-control border-start-0" min="1" max="10">
  </div>
  <button @click="handleDuplicate" :disabled="isDuplicating" class="btn btn-outline-primary shadow-sm rounded-3 px-3">
    <span v-if="isDuplicating" class="spinner-border spinner-border-sm me-2"></span>
    <i v-else class="bi bi-files me-2"></i>
    {{ isDuplicating ? `Copie ${progress}/${duplicateCount}...` : 'Dupliquer' }}
  </button>
</div>
```
