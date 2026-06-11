<script setup>
defineProps({
  catalog: { type: Array, default: () => [] },
  itemtype: { type: String, default: '' },
  entry: { type: Object, required: true },
  criteriaValues: { type: Object, required: true },
  states: { type: Array, default: () => [] },
  loading: Boolean,
})

const emit = defineEmits(['select-itemtype', 'search', 'reset'])
</script>

<template>
  <form class="card border-0 shadow-sm rounded-4 overflow-hidden" @submit.prevent="emit('search')">
    <div class="card-header bg-white py-3 border-0">
      <h2 class="h6 fw-bold mb-0 text-dark">
        <i class="bi bi-funnel me-2 text-success"></i>Filtres de recherche
      </h2>
    </div>
    <div class="card-body bg-light-subtle">
      <div class="row g-3">
        <!-- Type d'element -->
        <div class="col-12 col-md-4">
          <label class="form-label small fw-bold text-muted text-uppercase">Type d'élément</label>
          <div class="input-group input-group-sm-custom">
            <span class="input-group-text bg-white border-end-0">
              <i class="bi bi-tag text-muted"></i>
            </span>
            <select
              class="form-select border-start-0 ps-0"
              :value="itemtype"
              @change="emit('select-itemtype', $event.target.value)"
            >
              <option v-for="item in catalog" :key="item.itemtype" :value="item.itemtype">
                {{ item.label }}
              </option>
            </select>
          </div>
        </div>

        <!-- Criteres dynamiques selon le type -->
        <div v-for="def in entry.criteria" :key="def.key" class="col-12 col-md-4">
          <label class="form-label small fw-bold text-muted text-uppercase">{{ def.label }}</label>
          <div class="input-group input-group-sm-custom">
            <span class="input-group-text bg-white border-end-0">
              <i v-if="def.type === 'select'" class="bi bi-funnel text-muted small"></i>
              <i v-else class="bi bi-search text-muted small"></i>
            </span>
            
            <select
              v-if="def.type === 'select'"
              v-model="criteriaValues[def.key]"
              class="form-select border-start-0 ps-0"
            >
              <option value="">Tous les {{ def.label.toLowerCase() }}s</option>
              <template v-if="def.key === 'states_id'">
                <option v-for="st in states" :key="st.id" :value="st.id">
                  {{ st.name }}
                </option>
              </template>
            </select>

            <input
              v-else
              v-model="criteriaValues[def.key]"
              type="text"
              class="form-control border-start-0 ps-0"
              :placeholder="`Filtrer par ${def.label.toLowerCase()}...`"
            />
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between mt-4">
        <button class="btn btn-sm btn-link text-muted text-decoration-none fw-medium" type="button" :disabled="loading" @click="emit('reset')">
          <i class="bi bi-x-circle me-1"></i>Réinitialiser
        </button>
        
        <button class="btn btn-success shadow-sm px-4 rounded-3 fw-semibold" type="submit" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          <i v-else class="bi bi-filter me-1"></i>Appliquer les filtres
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.form-label {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}

.input-group-sm-custom .form-control,
.input-group-sm-custom .form-select,
.input-group-sm-custom .input-group-text {
  padding: 0.6rem 0.75rem;
  border-radius: 10px;
  font-size: 0.9rem;
  border-color: #e2e8f0;
}

.input-group-sm-custom .input-group-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group-sm-custom .form-control,
.input-group-sm-custom .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.form-control:focus, .form-select:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.btn-success {
  background: #10b981;
  border: none;
  transition: all 0.2s;
}

.btn-success:hover {
  background: #059669;
  transform: translateY(-1px);
}
</style>
