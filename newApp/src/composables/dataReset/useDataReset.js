import { computed, reactive, ref } from 'vue'
import { createResetApi } from '../../services/dataReset/glpiResetApi'
import {
  DELETE_CHUNK_SIZE,
  MAX_PASSES,
  orderedItemtypes,
  resettableItemtypes,
} from '../../services/dataReset/resetConfig'

const chunk = (array, size) => {
  const chunks = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export const useDataReset = () => {
  const api = createResetApi()

  const entities = ref([])
  const selectedEntityIds = reactive(new Set())
  const includeSubEntities = ref(false)

  // Selection des itemtypes : tous coches par defaut
  const itemtypeSelection = reactive(
    Object.fromEntries(resettableItemtypes.map((it) => [it.itemtype, true]))
  )

  const confirmChecked = ref(false)
  const loadingEntities = ref(false)
  const running = ref(false)
  const errorText = ref('')
  const logs = ref([])
  const summary = ref(null)
  const progress = reactive({ current: 0, total: 0, label: '' })

  const selectedItemtypes = computed(() =>
    orderedItemtypes(resettableItemtypes.filter((it) => itemtypeSelection[it.itemtype]))
  )

  const canRun = computed(
    () =>
      !running.value &&
      confirmChecked.value &&
      selectedEntityIds.size > 0 &&
      selectedItemtypes.value.length > 0
  )

  const log = (level, message) => {
    logs.value.push({
      time: new Date().toLocaleTimeString(),
      level,
      message,
    })
  }

  const toggleEntity = (id) => {
    if (selectedEntityIds.has(id)) {
      selectedEntityIds.delete(id)
    } else {
      selectedEntityIds.add(id)
    }
  }

  const isEntitySelected = (id) => selectedEntityIds.has(id)

  const selectAllEntities = () => {
    entities.value.forEach((entity) => selectedEntityIds.add(entity.id))
  }

  const clearEntities = () => selectedEntityIds.clear()

  const loadEntities = async () => {
    errorText.value = ''
    loadingEntities.value = true
    try {
      const list = await api.listEntities()
      entities.value = list
        .map((entity) => ({
          id: entity.id,
          name: entity.completename || entity.name || `Entite ${entity.id}`,
          level: entity.level ?? 1,
        }))
        .sort((a, b) => a.name.localeCompare(b.name))
      
      // Auto-sélection de toutes les entités pour la vue simplifiée
      entities.value.forEach(e => selectedEntityIds.add(e.id))
    } catch (error) {
      errorText.value = error?.message || 'Chargement des entites impossible.'
    } finally {
      loadingEntities.value = false
    }
  }

  // Supprime tous les items d'un itemtype dans l'entite active courante.
  // Retourne le nombre supprime et le nombre en echec sur cette passe.
  const purgeItemtype = async (itemtype, label) => {
    let ids = await api.listItemIds(itemtype)
    
    // Protection speciale pour la table User : on ne supprime pas les 5 comptes de base (ID 2 a 6)
    if (itemtype === 'User') {
      const originalCount = ids.length
      ids = ids.filter(id => id > 6)
      const protectedCount = originalCount - ids.length
      if (protectedCount > 0) {
        log('info', `Utilisateurs : ${protectedCount} comptes de base protégés (IDs 2-6).`)
      }
    }

    if (ids.length === 0) {
      return { deleted: 0, failed: 0, remaining: 0 }
    }

    let deleted = 0
    let failed = 0

    for (const batch of chunk(ids, DELETE_CHUNK_SIZE)) {
      const res = await api.deleteItems(itemtype, batch)
      if (res.ok) {
        deleted += batch.length
      } else {
        failed += batch.length
        log('warning', `${label} : echec d'un lot (${res.status}) ${api.glpiErrorMessage(res.data)}`)
      }
    }

    return { deleted, failed, remaining: ids.length }
  }

  const resetEntity = async (entity, totals) => {
    log('info', `Entite "${entity.name}" : activation du contexte...`)
    const activation = await api.changeActiveEntities(
      entity.id,
      includeSubEntities.value
    )
    if (!activation.ok) {
      log('danger', `Entite "${entity.name}" : activation impossible (${activation.status}).`)
      return
    }

    // Passes successives : une fois les dependants supprimes, les objets
    // references deviennent supprimables a la passe suivante.
    for (let pass = 1; pass <= MAX_PASSES; pass += 1) {
      let removedThisPass = 0

      for (const item of selectedItemtypes.value) {
        progress.label = `${entity.name} - passe ${pass} - ${item.label}`
        const { deleted, failed } = await purgeItemtype(item.itemtype, item.label)
        removedThisPass += deleted
        totals.deleted += deleted
        totals.failed += failed
        if (deleted > 0) {
          log('success', `${item.label} : ${deleted} supprime(s) (passe ${pass}).`)
        }
      }

      if (removedThisPass === 0) {
        // Plus rien a supprimer : on arrete les passes pour cette entite
        break
      }
    }
  }

  const runReset = async () => {
    errorText.value = ''
    logs.value = []
    summary.value = null

    if (!canRun.value) {
      errorText.value =
        'Selectionne au moins une entite, un type de donnees et confirme l\'action.'
      return
    }

    running.value = true
    const totals = { deleted: 0, failed: 0 }
    const targetEntities = entities.value.filter((entity) =>
      selectedEntityIds.has(entity.id)
    )

    progress.current = 0
    progress.total = targetEntities.length

    try {
      log('info', `Demarrage de la reinitialisation (${targetEntities.length} entite(s)).`)
      for (const entity of targetEntities) {
        await resetEntity(entity, totals)
        progress.current += 1
      }

      summary.value = { ...totals, entities: targetEntities.length }
      log(
        'info',
        `Termine : ${totals.deleted} item(s) supprime(s), ${totals.failed} echec(s).`
      )
    } catch (error) {
      errorText.value = error?.message || 'Erreur pendant la reinitialisation.'
      log('danger', errorText.value)
    } finally {
      running.value = false
      progress.label = ''
    }
  }

  return {
    entities,
    selectedEntityIds,
    includeSubEntities,
    itemtypeSelection,
    resettableItemtypes,
    confirmChecked,
    loadingEntities,
    running,
    errorText,
    logs,
    summary,
    progress,
    canRun,
    toggleEntity,
    isEntitySelected,
    selectAllEntities,
    clearEntities,
    loadEntities,
    runReset,
  }
}
