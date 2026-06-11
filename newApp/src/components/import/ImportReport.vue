<template>
  <div class="import-report" v-if="report">
    <!-- Résumé chiffré -->
    <div class="report-summary">
      <div class="stat stat--success">
        <span class="stat__number">{{ report.created ?? report.uploaded ?? 0 }}</span>
        <span class="stat__label">Créés</span>
      </div>
      <div class="stat stat--warning" v-if="report.skipped !== undefined">
        <span class="stat__number">{{ report.skipped }}</span>
        <span class="stat__label">Ignorés</span>
      </div>
      <div class="stat stat--info" v-if="report.noMatch !== undefined">
        <span class="stat__number">{{ report.noMatch }}</span>
        <span class="stat__label">Sans correspondance</span>
      </div>
      <div class="stat stat--error">
        <span class="stat__number">{{ report.errors ?? 0 }}</span>
        <span class="stat__label">Erreurs</span>
      </div>
      <div class="stat stat--neutral">
        <span class="stat__number">{{ report.total ?? 0 }}</span>
        <span class="stat__label">Total</span>
      </div>
    </div>

    <!-- Barre de progression visuelle -->
    <div class="progress-bar" v-if="report.total > 0">
      <div
        class="progress-bar__fill progress-bar__fill--success"
        :style="{ width: successPct + '%' }"
        :title="`${report.created ?? report.uploaded ?? 0} créés`"
      />
      <div
        class="progress-bar__fill progress-bar__fill--warning"
        :style="{ width: skippedPct + '%' }"
        v-if="report.skipped"
        :title="`${report.skipped} ignorés`"
      />
      <div
        class="progress-bar__fill progress-bar__fill--error"
        :style="{ width: errorPct + '%' }"
        v-if="report.errors"
        :title="`${report.errors} erreurs`"
      />
    </div>

    <!-- Détails expandables -->
    <details class="report-details" v-if="report.details?.length">
      <summary class="report-details__toggle">
        Voir le détail ({{ report.details.length }} lignes)
      </summary>
      <div class="report-details__scroll">
        <table class="report-table">
          <thead>
            <tr>
              <th>Nom / Référence</th>
              <th>Type</th>
              <th>Statut</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, idx) in report.details"
              :key="idx"
              :class="`row--${item.status}`"
            >
              <td class="cell--name">{{ item.name ?? item.title ?? item.filename ?? item.ticketRef ?? '—' }}</td>
              <td>{{ item.itemType ?? item.ref ?? '—' }}</td>
              <td>
                <span class="badge" :class="`badge--${item.status}`">
                  {{ LABELS[item.status] ?? item.status }}
                </span>
              </td>
              <td class="cell--info">{{ item.error ?? item.id ?? '' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  report: { type: Object, default: null }
})

const LABELS = {
  created: 'Créé',
  skipped: 'Ignoré',
  error: 'Erreur',
  uploaded: 'Uploadé',
  no_match: 'Sans correspondance'
}

const successPct = computed(() => {
  if (!props.report?.total) return 0
  return (((props.report.created ?? props.report.uploaded ?? 0) / props.report.total) * 100).toFixed(1)
})
const skippedPct = computed(() => {
  if (!props.report?.total) return 0
  return (((props.report.skipped ?? 0) / props.report.total) * 100).toFixed(1)
})
const errorPct = computed(() => {
  if (!props.report?.total) return 0
  return (((props.report.errors ?? 0) / props.report.total) * 100).toFixed(1)
})
</script>

<style scoped>
.import-report { display: flex; flex-direction: column; gap: 1rem; }

.report-summary {
  display: flex; gap: 1rem; flex-wrap: wrap;
}

.stat {
  display: flex; flex-direction: column; align-items: center;
  padding: .6rem 1.2rem; border-radius: 8px; min-width: 80px;
  background: var(--color-surface-alt, #f4f6f9);
}
.stat__number { font-size: 1.6rem; font-weight: 700; line-height: 1; }
.stat__label  { font-size: .75rem; margin-top: .25rem; opacity: .7; }

.stat--success { background: #e6f9f0; color: #1a7a4b; }
.stat--warning { background: #fff8e1; color: #9a6700; }
.stat--error   { background: #fdecea; color: #c0392b; }
.stat--info    { background: #e3f2fd; color: #1565c0; }
.stat--neutral { background: #f0f0f0; color: #444; }

.progress-bar {
  height: 8px; border-radius: 99px; overflow: hidden;
  background: #e0e0e0; display: flex;
}
.progress-bar__fill { height: 100%; transition: width .4s ease; }
.progress-bar__fill--success { background: #2ecc71; }
.progress-bar__fill--warning { background: #f39c12; }
.progress-bar__fill--error   { background: #e74c3c; }

.report-details__toggle {
  cursor: pointer; font-weight: 600; color: var(--color-primary, #3b82f6);
  padding: .4rem 0; user-select: none;
}
.report-details__scroll { max-height: 300px; overflow-y: auto; margin-top: .5rem; }

.report-table { width: 100%; border-collapse: collapse; font-size: .85rem; }
.report-table th { background: #f4f6f9; padding: .4rem .6rem; text-align: left; position: sticky; top: 0; }
.report-table td { padding: .35rem .6rem; border-bottom: 1px solid #eee; }

.row--error   td { background: #fff5f5; }
.row--skipped td { opacity: .65; }
.row--no_match td { background: #fffde7; }

.cell--name { font-family: monospace; font-size: .8rem; }
.cell--info { color: #888; font-size: .8rem; }

.badge {
  display: inline-block; padding: .15rem .5rem; border-radius: 4px;
  font-size: .75rem; font-weight: 600;
}
.badge--created  { background: #e6f9f0; color: #1a7a4b; }
.badge--skipped  { background: #f0f0f0; color: #666; }
.badge--error    { background: #fdecea; color: #c0392b; }
.badge--uploaded { background: #e3f2fd; color: #1565c0; }
.badge--no_match { background: #fff8e1; color: #9a6700; }
</style>
