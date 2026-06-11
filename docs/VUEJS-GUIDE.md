# Vue.js guide simple (debutant)

Ce document explique Vue.js avec des mots simples. Il sert a comprendre comment construire une interface web moderne avec Vue 3.

## 1) C'est quoi Vue.js
- Vue.js est un framework JavaScript pour creer des interfaces utilisateur.
- Tu ecris des composants, puis Vue met a jour la page quand les donnees changent.
- Une application Vue est souvent une SPA (single page application) : une seule page HTML, et Vue change le contenu sans recharger.

## 2) La base : composant et template
Un composant Vue est un fichier .vue (Single File Component). Il contient 3 parties :

```vue
<script setup>
// JavaScript
</script>

<template>
  <!-- HTML -->
</template>

<style scoped>
/* CSS */
</style>
```

- `template` : la vue (ce qui s'affiche).
- `script` : la logique (variables, fonctions).
- `style` : le style. `scoped` limite le style au composant.

## 3) Syntaxe dans le template
### Interpolation
```html
<p>Bonjour {{ name }}</p>
```
`{{ }}` affiche une variable JavaScript.

### Directives importantes
- `v-if` / `v-else` : afficher ou cacher.
- `v-for` : boucler sur une liste.
- `v-model` : lier un champ de formulaire a une variable.
- `v-bind` (raccourci `:`) : lier un attribut.
- `v-on` (raccourci `@`) : ecouter un evenement.

Exemples :
```html
<p v-if="isOk">OK</p>
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>
<input v-model="email" />
<button @click="save">Sauver</button>
<img :src="avatarUrl" />
```

### Classes et styles dynamiques
```html
<div :class="{ active: isActive }"></div>
<div :style="{ color: colorName }"></div>
```

## 4) Reactivite (le coeur de Vue)
Vue suit les donnees reactivement. Quand la valeur change, le template se met a jour.

### `ref` et `reactive`
```js
import { ref, reactive } from 'vue'

const count = ref(0) // count.value
const user = reactive({ name: 'Ana', age: 20 })
```
- `ref` : une valeur simple.
- `reactive` : un objet entier.

### `computed`
```js
import { computed } from 'vue'
const fullName = computed(() => first.value + ' ' + last.value)
```
Une valeur calculee automatiquement.

### `watch`
```js
import { watch } from 'vue'
watch(count, (newVal, oldVal) => {
  console.log(newVal)
})
```
Permet d'agir quand une valeur change.

## 5) Composition API et `script setup`
Dans Vue 3, on utilise souvent la Composition API.

```vue
<script setup>
import { ref } from 'vue'
const message = ref('Salut')
const change = () => (message.value = 'Hello')
</script>
```
Tout ce qui est defini dans le `script setup` est visible dans le template.

## 6) Props et events
### Props (donnees qui viennent du parent)
```vue
<script setup>
defineProps({ title: String })
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```

### Events (envoyer une action au parent)
```vue
<script setup>
const emit = defineEmits(['close'])
const close = () => emit('close')
</script>
```

## 7) Cycle de vie (lifecycle)
Ces fonctions s'executent a des moments precis :
- `onMounted` : quand le composant est affiche.
- `onUpdated` : apres une mise a jour.
- `onUnmounted` : quand on quitte le composant.

```js
import { onMounted } from 'vue'
onMounted(() => {
  // code au chargement
})
```

## 8) Formulaires
`v-model` lie input et variable.

```html
<input v-model="email" />
```
On peut aussi utiliser des modifieurs :
- `v-model.trim` (supprime les espaces)
- `v-model.number` (convertit en nombre)

## 9) Router (pages)
Vue Router sert a changer de page sans recharger.

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
```

Dans le template, on affiche la page active avec :
```html
<RouterView />
```

## 10) Appels API (fetch)
```js
const loadUsers = async () => {
  const res = await fetch('/api/users')
  const data = await res.json()
}
```

## 11) Styling
- CSS global dans `main.js`.
- CSS local avec `<style scoped>`.

## 12) Build et dev (Vite)
Commandes classiques :
- `npm install`
- `npm run dev`
- `npm run build`

## 13) Erreurs courantes
- Oublier `.value` sur une `ref`.
- Ne pas mettre `:key` dans un `v-for`.
- Appeler une API sans `await`.
- Oublier d'importer un composant.

Si tu bloques, commence par verifier la console du navigateur.
