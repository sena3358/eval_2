# NewApp - explication simple du code

Ce document explique le projet Vue `newApp` pour un debutant. L'objectif est de comprendre qui fait quoi, et comment les pages se connectent entre elles.

## 1) Vue d'ensemble
- Projet Vue 3 avec Vite, Vue Router, Bootstrap.
- L'application est une SPA : une seule page HTML, plusieurs routes.
- Les pages principales :
  - Login GLPI
  - Test GLPI API
  - Test SQLite backend
  - Reinitialisation de donnees GLPI

Dependencies importantes (package.json) :
- `vue` : le framework
- `vue-router` : les routes/pages
- `bootstrap` + `bootstrap-icons` : styles et icones

## 2) Point d'entree (main.js)
Le fichier `src/main.js` :
- charge Bootstrap (CSS + JS)
- cree l'application Vue avec `createApp(App)`
- branche le router
- monte l'app dans `#app`

## 3) Layout global (App.vue)
Le fichier `src/App.vue` decide du layout :
- Si la route a `meta.layout = 'blank'` (ex: login), on affiche seulement la page.
- Sinon, on affiche le layout complet :
  - Sidebar (menu)
  - Header (profil + deconnexion)
  - Footer

Cela donne une interface d'administration avec un "chrome" complet, mais une page login simple.

## 4) Router (routes/index.js)
Le router declare les routes :
- `/login` -> LoginPage (route publique)
- `/sqlite` -> page test SQLite
- `/glpi` -> page test GLPI
- `/reset` -> page reinitialisation

Une garde globale verifie la session :
- Si pas connecte -> redirection vers `/login`.
- Si deja connecte et on va sur `/login` -> redirection vers `/`.

## 5) Authentification GLPI
### Fichiers
- `modules/auth/pages/LoginPage.vue`
- `modules/auth/components/LoginForm.vue`
- `modules/auth/composables/useAuth.js`
- `modules/auth/services/authSession.js`

### Flux simple
1. L'utilisateur entre login + mot de passe.
2. `useAuth.signIn()` appelle l'API GLPI (endpoint `/initSession`).
3. Si ok, on stocke `sessionToken` + infos user dans `localStorage`.
4. Le router utilise `isAuthenticated` pour bloquer les pages privees.
5. `HeaderBar` utilise `authState` pour afficher le nom et gerer la deconnexion.

`authSession.js` est un mini store reactivement partage, sans Pinia.

## 6) Menu lateral (Sidebar)
- `layout/SidebarNav.vue` lit la structure du menu.
- `modules/navigation/services/navigationService.js` fournit les sections et items.
- L'item actif est marque avec `route.path === item.to`.

## 7) Test GLPI API
### Fichiers
- `modules/testApi/pages/GlpiTestPage.vue`
- `modules/testApi/components/GlpiTestPanel.vue`
- `modules/testApi/composables/useGlpiTest.js`
- `modules/testApi/services/glpiApi.js`

### Ce que ca fait
- Permet de tester des endpoints GLPI rapidement.
- On peut saisir un endpoint, methode HTTP, body JSON.
- `useGlpiTest` fait la requete via `glpiApi.request()`.
- On peut aussi initier une session avec un User Token.

## 8) Reinitialisation de donnees GLPI
### Fichiers
- `modules/dataReset/pages/DataResetPage.vue`
- `modules/dataReset/components/DataResetPanel.vue`
- `modules/dataReset/composables/useDataReset.js`
- `modules/dataReset/services/glpiResetApi.js`
- `modules/dataReset/services/resetConfig.js`

### Ce que ca fait
- Charge la liste des entites GLPI.
- L'utilisateur choisit les entites + types d'objets a purger.
- `useDataReset` lance plusieurs passes de suppression.
- Les suppressions se font par lots (chunk) et dans un ordre defini.
- Affiche un journal d'execution + un resume final.

## 9) Test backend SQLite
### Fichiers
- `modules/testBackSqlite/pages/SqliteTestPage.vue`
- `modules/testBackSqlite/components/SqliteTestPanel.vue`
- `modules/testBackSqlite/composables/useSqliteTest.js`
- `modules/testBackSqlite/services/sqliteApi.js`

### Ce que ca fait
- Envoie une requete vers `/sqlite/test`.
- Affiche la reponse ou l'erreur.

## 10) Config via .env
L'app attend des variables Vite :
- `VITE_GLPI_API_BASE_URL`
- `VITE_GLPI_API_KEY`
- `VITE_SQLITE_API_BASE_URL`

Sans ces variables, l'app affiche des messages d'erreur dans les pages de test.

## 11) Resume du flux utilisateur
1. L'utilisateur ouvre l'app.
2. Si pas connecte -> route `/login`.
3. Apres connexion -> acces aux pages.
4. Il peut tester GLPI, SQLite, ou reinitialiser des donnees.

## 12) Comment ajouter une page (simple)
1. Creer un composant de page dans `modules/.../pages`.
2. Ajouter la route dans `routes/index.js`.
3. Ajouter un item dans `navigationService.js`.

Si tu veux, je peux aussi dessiner un schema simple des flux.
