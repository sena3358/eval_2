<script setup>
import { ref } from 'vue'
import TicketCard from './TicketCard.vue'

const props = defineProps({
  column: { type: Object, required: true }
})

const emit = defineEmits(['drop', 'card-click'])

const isDragOver = ref(false)

const onDragOver = (e) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'
  isDragOver.value = true
}

const onDragLeave = () => {
  isDragOver.value = false
}

const onDrop = (e) => {
  e.preventDefault()
  isDragOver.value = false
  const ticketId = e.dataTransfer.getData('ticketId')
  if (ticketId) {
    emit('drop', { ticketId: Number(ticketId), targetColumnId: props.column.id })
  }
}
</script>

<template>
  <div 
    class="kanban-column"
    :class="{ 'drag-over': isDragOver }"
    :style="{ backgroundColor: column.bg }"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
  >
    <div class="column-header d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center gap-2">
        <div class="status-indicator" :style="{ backgroundColor: column.color }"></div>
        <h3 class="column-title">{{ column.label }}</h3>
      </div>
      <span class="items-count">{{ column.items.length }}</span>
    </div>

    <div class="column-content d-flex flex-column gap-3">
      <TicketCard 
        v-for="ticket in column.items" 
        :key="ticket.id" 
        :ticket="ticket" 
        @click="emit('card-click', $event)"
      />
      
      <div v-if="column.items.length === 0" class="empty-state text-muted text-center py-4">
        Aucun ticket
      </div>
    </div>
    
    <!-- Bouton special pour la premiere colonne -->
    <slot name="footer"></slot>
  </div>
</template>

<style scoped>
.kanban-column {
  background: #f8fafc;
  border-radius: 16px;
  padding: 1.25rem;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s;
  border: 2px solid transparent;
}

.kanban-column.drag-over {
  background: #f1f5f9;
  border-color: #cbd5e1;
  border-style: dashed;
}

.column-title {
  font-size: 1rem;
  font-weight: 700;
  color: #334155;
  margin: 0;
}

.items-count {
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748b;
  background: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.empty-state {
  font-size: 0.85rem;
  font-style: italic;
  border: 1px dashed #e2e8f0;
  border-radius: 12px;
}
</style>
