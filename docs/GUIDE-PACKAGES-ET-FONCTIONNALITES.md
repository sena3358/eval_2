# Guide : gestion des packages et ajout de fonctionnalités

Ce document explique, pour les **deux applications** du dépôt, comment :

1. gérer les dépendances (packages) ;
2. ajouter une nouvelle fonctionnalité en respectant l'architecture existante ;
3. nommer les éléments (conventions du projet).

| Application | Type | Gestionnaire de packages | Fichier de dépendances |
| --- | --- | --- | --- |
| `back-sqlite` | Backend Spring Boot + SQLite (Java 17) | Maven | `pom.xml` |
| `newApp` | Frontend Vue 3 + Vite + Bootstrap | npm | `package.json` |

> ⚠️ **Convention de nommage du projet** : les identifiants (classes, fonctions, variables, clés JSON, en-têtes, variables d'environnement) restent **en anglais**, simples et explicites. Le **français** est réservé aux **messages affichés / logs** et aux **commentaires** d'explication.

---

## 1. Architecture commune (organisation par modules)

Les deux applications utilisent un découpage **par module fonctionnel**. Un module = un dossier autonome qui contient toutes ses couches. On ajoute une fonctionnalité en créant un module ou en complétant un module existant — **jamais** en mettant du code « en vrac » à la racine.

### back-sqlite (`src/main/java/com/example/backsqlite/modules/<module>`)

```
modules/testapi/
├── controller/   → expose les routes HTTP (REST)
├── service/      → interface métier
│   └── impl/     → implémentation du service
├── repository/   → accès base de données (Spring Data JPA)
├── model/        → entités persistées (@Entity)
└── dto/          → objets de réponse/échange (définissent les clés JSON)
```

Sens de dépendance : `controller → service → repository → model`, et `service → dto`.

### newApp (`src/modules/<module>`)

```
modules/testBackSqlite/
├── pages/        → page complète (assemble les composants)
├── components/   → composants d'affichage réutilisables
├── composables/  → logique réactive (état + actions, préfixe useXxx)
└── services/     → appels réseau / API (préfixe createXxxApi)
```

Sens de dépendance : `pages → components → composables → services`. Le **service** ne connaît pas Vue ; le **composable** porte l'état (`ref`) et appelle le service ; le **composant** affiche et déclenche les actions.

---

## 2. back-sqlite — gérer les packages (Maven)

### Ajouter une dépendance

1. Ouvrir `back-sqlite/pom.xml`.
2. Ajouter un bloc `<dependency>` dans `<dependencies>` :

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

3. Règles :
   - Les *starters* Spring Boot **n'ont pas besoin de `<version>`** : elle vient du `parent` (`spring-boot-starter-parent` 3.3.0).
   - Une dépendance hors écosystème Spring (ex. `sqlite-jdbc`) **doit préciser sa `<version>`**.
   - Une dépendance de test prend `<scope>test</scope>`.
4. Recharger les dépendances : `mvn clean install` (ou rechargement Maven dans l'IDE).

### Lancer / construire

```bash
mvn spring-boot:run     # démarrer en local (port 8080)
mvn clean package       # produire le .jar dans target/
```

### Ajouter une nouvelle fonctionnalité (ex. module « tickets »)

Reproduire la structure du module `testapi` :

1. **model/** `Ticket.java` — entité `@Entity @Table(name = "tickets")`.
2. **repository/** `TicketRepository.java` — `extends JpaRepository<Ticket, Long>`.
3. **dto/** `TicketResponse.java` — les **getters** définissent les clés du JSON renvoyé.
4. **service/** `TicketService.java` (interface) + **service/impl/** `TicketServiceImpl.java` (`@Service`).
5. **controller/** `TicketController.java` (`@RestController`, `@RequestMapping("/api/tickets")`).
6. Injecter les dépendances **par constructeur** (pas de `@Autowired` sur les champs).
7. Ajouter un **logger** par classe et écrire les logs **en français** :

```java
private static final Logger log = LoggerFactory.getLogger(TicketServiceImpl.class);
// ...
log.info("Création du ticket pour l'utilisateur {}", userId);
```

8. Messages renvoyés / exceptions : texte **en français**, identifiants techniques en anglais.

---

## 3. newApp — gérer les packages (npm)

### Ajouter une dépendance

```bash
cd newApp
npm install axios          # dépendance d'exécution → "dependencies"
npm install -D vitest      # outil de dev/test → "devDependencies"
```

Règles :
- Une lib utilisée par l'application au runtime (ex. `bootstrap`, `vue`) va dans `dependencies`.
- Un outil de build/test (ex. `vite`, `@vitejs/plugin-vue`) va dans `devDependencies` (`-D`).
- Toujours **committer `package-lock.json`** pour figer les versions.
- Importer un CSS global dans `src/main.js` (comme `bootstrap/dist/css/bootstrap.min.css`).

### Lancer / construire

```bash
npm run dev       # serveur de dev Vite
npm run build     # build de production
npm run preview   # prévisualiser le build
```

### Variables d'environnement

- Fichier `newApp/.env`.
- Seules les variables préfixées par **`VITE_`** sont exposées au code client (contrainte de Vite) ; le préfixe reste donc obligatoire et en anglais.
- Lecture côté code : `import.meta.env.VITE_MA_VARIABLE`.
- ⚠️ Tout ce qui est `VITE_` est **embarqué dans le bundle navigateur** : ne jamais y mettre de secret réellement sensible (voir « Points de vigilance »).

### Ajouter une nouvelle fonctionnalité (ex. module « tickets »)

Reproduire la structure du module `testBackSqlite` :

1. **services/** `ticketApi.js` — factory `createTicketApi()` qui retourne les fonctions d'appel (`request`, `listTickets`, …). Aucune référence à Vue ici.
2. **composables/** `useTickets.js` — `export const useTickets = () => { ... }` :
   - état avec `ref()` (noms anglais : `loading`, `errorText`, `responseText`…) ;
   - actions `async` qui appellent le service et remplissent l'état ;
   - messages d'erreur **en français** (`'Échec du chargement des tickets'`).
3. **components/** `TicketPanel.vue` — `<script setup>`, déstructure le composable, affiche l'état. Textes visibles **en français**.
4. **pages/** `TicketPage.vue` — assemble le(s) composant(s).
5. Brancher la page dans `src/App.vue`.

Conventions de nommage frontend :
- service : `createXxxApi`
- composable : `useXxx`
- fonctions : verbe anglais court (`runTest`, `startSession`, `buildUrl`).

---

## 4. Conventions de nommage (résumé)

| Élément | Langue | Exemple |
| --- | --- | --- |
| Classes / fichiers | anglais | `TicketController`, `useTickets.js` |
| Fonctions / méthodes | anglais, court | `runTest()`, `buildUrl()` |
| Variables | anglais | `sessionToken`, `baseUrl` |
| Clés JSON / DTO | anglais | `savedId`, `totalCount` |
| Variables d'env | anglais, préfixe `VITE_` | `VITE_GLPI_API_BASE_URL` |
| **Messages / logs** | **français** | `log.info("Test SQLite réussi")` |
| **Commentaires** | **français** | `// Construit l'URL complète` |
| Texte UI affiché | français | « Tester la connexion » |

Identifiants **imposés par un protocole externe** : à **ne pas traduire** (sinon l'intégration casse) — en-têtes GLPI `App-Token`, `Session-Token`, `Authorization: user_token`, champ `session_token` de la réponse GLPI.

---

## 5. Points de vigilance (failles repérées lors de l'analyse)

Ces points ne bloquent pas le fonctionnement mais sont à corriger avant une mise en production :

### back-sqlite
- **CORS trop permissif** : `@CrossOrigin(origins = "*")` autorise tous les domaines. À restreindre aux origines réelles du front.
- **`spring.jpa.hibernate.ddl-auto=update`** : modifie le schéma automatiquement. Risqué en prod (préférer des migrations Flyway/Liquibase).
- **`spring.jpa.show-sql=true`** : journalise toutes les requêtes SQL (bruit + fuite d'info). À désactiver hors développement.
- **Aucune authentification / validation / limitation de débit** sur l'endpoint.

### newApp
- **Secret exposé** : `VITE_GLPI_API_KEY` est une clé d'API réelle dans `.env`. Comme toute variable `VITE_`, elle est **incluse dans le JavaScript envoyé au navigateur** → visible par tout utilisateur. Un appel GLPI authentifié doit transiter par un **backend proxy**, pas depuis le client. Révoquer/renouveler cette clé.
- **Tokens GLPI saisis et manipulés côté navigateur** : même problème de surface d'exposition.
- **`.env` versionné** : vérifier qu'il est bien dans `.gitignore` et ne contient aucun secret de production.

> Ces correctifs n'ont pas été appliqués (hors périmètre de la demande) : ce sont des recommandations.
