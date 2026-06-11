<template>
  <div class="file-picker" :class="{ 'file-picker--dragover': isDragging }">
    <!-- Zone de drop -->
    <label
      class="file-picker__zone"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="onDrop"
    >
      <input
        type="file"
        class="file-picker__input"
        :accept="accept"
        @change="onFileChange"
        ref="inputRef"
      />
      <div class="file-picker__icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
          <polyline points="16 8 12 4 8 8"/>
          <line x1="12" y1="4" x2="12" y2="16"/>
        </svg>
      </div>
      <div class="file-picker__text">
        <span v-if="!selectedFile">
          <strong>Choisir un fichier</strong> ou glisser-déposer
        </span>
        <span v-else class="file-picker__filename">{{ selectedFile.name }}</span>
      </div>
      <div class="file-picker__hint">{{ hint }}</div>
    </label>

    <!-- Bouton effacer -->
    <button
      v-if="selectedFile"
      class="file-picker__clear"
      type="button"
      @click="clearFile"
      title="Supprimer le fichier"
    >×</button>

    <!-- Aperçu CSV -->
    <div class="file-picker__preview" v-if="previewRows?.length">
      <p class="preview__title">Aperçu ({{ previewRows.length }} premières lignes)</p>
      <div class="preview__scroll">
        <table class="preview__table">
          <thead>
            <tr>
              <th v-for="col in previewColumns" :key="col">{{ col }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in previewRows" :key="i">
              <td v-for="col in previewColumns" :key="col">{{ row[col] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  accept: { type: String, default: '.csv' },
  hint: { type: String, default: 'Fichier CSV (UTF-8)' },
  previewRows: { type: Array, default: () => [] }
})

const emit = defineEmits(['file-selected', 'file-cleared'])

const isDragging = ref(false)
const selectedFile = ref(null)
const inputRef = ref(null)

const previewColumns = computed(() => {
  if (!props.previewRows?.length) return []
  return Object.keys(props.previewRows[0])
})

function onFileChange(e) {
  const file = e.target.files?.[0]
  if (file) selectFile(file)
}

function onDrop(e) {
  isDragging.value = false
  const file = e.dataTransfer.files?.[0]
  if (file) selectFile(file)
}

function selectFile(file) {
  selectedFile.value = file
  emit('file-selected', file)
}

function clearFile() {
  selectedFile.value = null
  if (inputRef.value) inputRef.value.value = ''
  emit('file-cleared')
}
</script>

<style scoped>
.file-picker { position: relative; }

.file-picker__zone {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: .5rem; padding: 1.5rem; border: 2px dashed var(--color-border, #d1d5db);
  border-radius: 12px; cursor: pointer; transition: all .2s;
  background: var(--color-surface-alt, #fafafa);
}
.file-picker__zone:hover,
.file-picker--dragover .file-picker__zone {
  border-color: var(--color-primary, #3b82f6);
  background: var(--color-primary-light, #eff6ff);
}
.file-picker__input { display: none; }
.file-picker__icon { color: var(--color-primary, #3b82f6); opacity: .7; }
.file-picker__text { font-size: .95rem; color: var(--color-text, #374151); text-align: center; }
.file-picker__filename { font-weight: 600; color: var(--color-primary, #3b82f6); }
.file-picker__hint { font-size: .75rem; color: #9ca3af; }

.file-picker__clear {
  position: absolute; top: .5rem; right: .5rem;
  width: 1.5rem; height: 1.5rem; border-radius: 50%; border: none;
  background: #e5e7eb; cursor: pointer; font-size: 1rem; line-height: 1;
  display: flex; align-items: center; justify-content: center;
}
.file-picker__clear:hover { background: #fee2e2; color: #ef4444; }

.file-picker__preview { margin-top: 1rem; }
.preview__title { font-size: .8rem; font-weight: 600; color: #6b7280; margin-bottom: .4rem; }
.preview__scroll { overflow-x: auto; max-height: 200px; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 8px; }
.preview__table { width: 100%; border-collapse: collapse; font-size: .78rem; }
.preview__table th {
  background: #f9fafb; padding: .35rem .6rem; text-align: left;
  white-space: nowrap; position: sticky; top: 0; border-bottom: 1px solid #e5e7eb;
  font-weight: 600; color: #374151;
}
.preview__table td { padding: .3rem .6rem; border-bottom: 1px solid #f3f4f6; white-space: nowrap; }
.preview__table tr:last-child td { border-bottom: none; }
</style>
