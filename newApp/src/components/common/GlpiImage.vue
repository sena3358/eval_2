<script setup>
import { ref, onMounted, watch } from 'vue'
import { createGlpiApi } from '../../services/testApi/glpiApi'
import { foAuthState } from '../../services/frontoffice/auth/foAuthSession'

const props = defineProps({
  docId: { type: [Number, String], required: true },
  alt: { type: String, default: '' }
})

const imageUrl = ref(null)
const loading = ref(false)
const error = ref(false)

const api = createGlpiApi()

const loadImage = async () => {
  if (!props.docId) return
  
  loading.value = true
  error.value = false
  
  try {
    // Dans GLPI API, on peut recuperer le binaire via l'ID du document
    // Si votre version GLPI ne supporte pas alt=media, on peut tenter d'autres chemins
    const res = await fetch(`${api.baseUrl}/Document/${props.docId}?alt=media`, {
      headers: {
        'App-Token': api.appToken,
        'Session-Token': foAuthState.sessionToken
      }
    })

    if (!res.ok) throw new Error('Download failed')

    const blob = await res.blob()
    if (imageUrl.value) URL.revokeObjectURL(imageUrl.value)
    imageUrl.value = URL.createObjectURL(blob)
  } catch (e) {
    console.error(`Erreur chargement image Doc#${props.docId}:`, e)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(loadImage)
watch(() => props.docId, loadImage)
</script>

<template>
  <div class="glpi-image-container">
    <div v-if="loading" class="placeholder-loader">
      <div class="spinner-border spinner-border-sm" role="status"></div>
    </div>
    <img 
      v-else-if="imageUrl" 
      :src="imageUrl" 
      :alt="alt"
      class="fade-in"
      @error="error = true"
    />
    <div v-if="error" class="error-placeholder">
       <i class="bi bi-image"></i>
    </div>
  </div>
</template>

<style scoped>
.glpi-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-loader, .error-placeholder {
  font-size: 0.8rem;
  opacity: 0.5;
}

.fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
