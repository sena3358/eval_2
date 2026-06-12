# Documentation des API du Projet

Ce document présente les différentes API utilisées dans l'application, classées par provenance et par usage.

## 1. Backend Personnalisé (Spring Boot + SQLite)
Cette API est utilisée pour stocker des données locales qui ne sont pas gérées par GLPI, comme la configuration visuelle du Kanban.

- **Base URL** : `http://localhost:8080/api` (configurée via `VITE_SQLITE_API_BASE_URL`)
- **Format** : JSON

### Endpoints
| Méthode | Chemin | Description |
| :-- | :-- | :-- |
| `GET` | `/sqlite/test` | Test de connectivité avec le backend Java. |
| `GET` | `/sqlite/kanban-settings` | Récupère les noms et couleurs des colonnes du Kanban. |
| `POST` | `/sqlite/kanban-settings` | Sauvegarde la personnalisation du Kanban (labels et couleurs). |
| `POST` | `/sqlite/reset` | Réinitialise les tables SQLite (suppression des réglages). |

---

## 2. API GLPI (REST API v2.3)
L'application communique directement avec le serveur GLPI pour toutes les données métier.

- **Base URL** : Définie par `GLPI_BASE_URL` dans le fichier `.env`.
- **Authentification** : Token de session envoyé dans le header `Session-Token`.

### Ressources principales
| Ressource | Usage dans le projet |
| :-- | :-- |
| `/Ticket` | Listing, création et mise à jour des tickets d'assistance. |
| `/TicketCost` | Gestion des coûts financiers et du temps passé (Duration). |
| `/ITILFollowup` | Ajout et lecture des suivis/commentaires sur un ticket. |
| `/ITILSolution` | Validation et résolution des tickets. |
| `/Computer`, `/Monitor` | Inventaire des matériels informatiques. |
| `/Item_Ticket` | Liaison entre un matériel (asset) et un ticket. |
| `/User` | Informations sur l'utilisateur connecté et assignation des techniciens. |

---

## 3. Services Frontend (Wrappers JS)
Le dossier `newApp/src/services` contient des modules JavaScript qui encapsulent ces appels API pour simplifier leur usage dans les composants Vue.

### `ticketsApi.js`
Utilisé pour toutes les opérations sur les tickets.
- `listTickets({ start, limit })` : Récupère une page de tickets.
- `createTicket(input)` : Crée un nouveau ticket.
- `updateTicket(id, input)` : Modifie un ticket (ex: changer le statut).

### `dashboardApi.js`
Service d'agrégation qui effectue plusieurs appels en parallèle pour générer les statistiques du tableau de bord.
- `getDashboard()` : Retourne un objet complet avec les comptes par statut, type de matériel, et les coûts totaux.

### `kanbanSettingsApi.js`
Fait le lien avec le backend SQLite pour la persistance locale.
- `getSettings()` : Charge la config visuelle du Kanban.
- `saveSettings(data)` : Enregistre les modifications de couleurs/noms.

### `materialApi.js`
Gère les équipements du parc.
- `searchMaterials(name)` : Recherche un équipement par son nom dans GLPI.
- `getMaterialDetails(itemtype, id)` : Récupère la fiche complète d'un matériel.

---

## 4. Comment utiliser une API dans un nouveau composant ?
Il est recommandé de passer par les **composables** (`src/composables`) plutôt que d'appeler les services directement.

**Exemple d'usage :**
```javascript
import { useTicketsKanban } from '@/composables/frontoffice/tickets/useTicketsKanban'

const { tickets, loading, fetchTickets } = useTicketsKanban()
// fetchTickets() s'occupe de l'appel API et de la gestion d'erreurs
```
