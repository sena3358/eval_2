<script setup>
const props = defineProps({
  ticket: { type: Object, required: true }
})

const emit = defineEmits(['click'])

const onDragStart = (e) => {
  e.dataTransfer.setData('ticketId', props.ticket.id)
  e.dataTransfer.effectAllowed = 'move'
}

// Formate la date GLPI "2026-06-03 13:45:00" -> "03/06"
const formatDateShort = (dateStr) => {
  if (!dateStr) return ''
  const [d] = dateStr.split(' ')
  const [y, m, day] = d.split('-')
  return `${day}/${m}`
}
</script>

<template>
  <div 
    class="ticket-card" 
    draggable="true" 
    @dragstart="onDragStart"
    @click="emit('click', ticket)"
  >
    <div class="d-flex justify-content-between align-items-start mb-2">
      <span class="ticket-id">#{{ ticket.id }}</span>
      <span class="ticket-date text-muted">{{ formatDateShort(ticket.date) }}</span>
    </div>
    <h4 class="ticket-title">{{ ticket.name }}</h4>
    
    <div class="ticket-footer mt-2 d-flex align-items-center gap-2">
      <div v-if="ticket.urgency" class="urgency-dot" :class="'urgency-' + ticket.urgency"></div>
      <span class="text-muted small">Priorité {{ ticket.priority || 3 }}</span>
    </div>
  </div>
</template>

<style scoped>
.ticket-card {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  cursor: grab;
  transition: all 0.2s;
  border: 1px solid #f1f5f9;
  user-select: none;
}

.ticket-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  border-color: #e2e8f0;
}

.ticket-card:active {
  cursor: grabbing;
}

.ticket-id {
  font-size: 0.75rem;
  font-weight: 700;
  color: #94a3b8;
  background: #f8fafc;
  padding: 2px 6px;
  border-radius: 4px;
}

.ticket-date {
  font-size: 0.75rem;
}

.ticket-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0;
  color: #1e293b;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.urgency-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.urgency-1 { background-color: #10b981; } /* Basse */
.urgency-2 { background-color: #10b981; }
.urgency-3 { background-color: #f59e0b; } /* Moyenne */
.urgency-4 { background-color: #ef4444; } /* Haute */
.urgency-5 { background-color: #ef4444; } /* Tres Haute */
</style>
