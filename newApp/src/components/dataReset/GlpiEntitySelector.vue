<script setup>
defineProps({
  entities: { type: Array, required: true },
  selectedIds: { type: Object, required: true }, // Set reactive
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  includeSubEntities: { type: Boolean, default: false },
})

const emit = defineEmits([
  'toggle',
  'selectAll',
  'clear',
  'reload',
  'update:includeSubEntities',
])
</script>

<template>
  <div class="card shadow-sm h-100">
    <div class="card-body d-flex flex-column gap-3">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-2">
          <span class="badge rounded-pill text-bg-primary">1</span>
          <h2 class="h5 mb-0">Entites a reinitialiser</h2>
        </div>
        <button
          class="btn btn-sm btn-outline-secondary"
          type="button"
          :disabled="loading || disabled"
          @click="emit('reload')"
        >
          <i class="bi bi-arrow-clockwise me-1"></i>Recharger
        </button>
      </div>

      <div class="d-flex flex-wrap gap-2">
        <button
          class="btn btn-sm btn-outline-primary"
          type="button"
          :disabled="disabled || !entities.length"
          @click="emit('selectAll')"
        >
          Tout cocher
        </button>
        <button
          class="btn btn-sm btn-outline-secondary"
          type="button"
          :disabled="disabled"
          @click="emit('clear')"
        >
          Tout decocher
        </button>
      </div>

      <div v-if="loading" class="d-flex align-items-center gap-2">
        <div class="spinner-border spinner-border-sm" role="status"></div>
        <span class="small text-muted">Chargement des entites...</span>
      </div>

      <div
        v-else
        class="border rounded p-2 overflow-auto"
        style="max-height: 280px"
      >
        <p v-if="!entities.length" class="text-muted small mb-0">
          Aucune entite chargee.
        </p>
        <div
          v-for="entity in entities"
          :key="entity.id"
          class="form-check"
        >
          <input
            :id="`entity-${entity.id}`"
            class="form-check-input"
            type="checkbox"
            :checked="selectedIds.has(entity.id)"
            :disabled="disabled"
            @change="emit('toggle', entity.id)"
          />
          <label class="form-check-label" :for="`entity-${entity.id}`">
            {{ entity.name }}
            <span class="text-muted small">(#{{ entity.id }})</span>
          </label>
        </div>
      </div>

      <div class="form-check form-switch">
        <input
          id="includeSub"
          class="form-check-input"
          type="checkbox"
          :checked="includeSubEntities"
          :disabled="disabled"
          @change="emit('update:includeSubEntities', ($event.target).checked)"
        />
        <label class="form-check-label" for="includeSub">
          Inclure les sous-entites (recursif)
        </label>
      </div>
    </div>
  </div>
</template>
