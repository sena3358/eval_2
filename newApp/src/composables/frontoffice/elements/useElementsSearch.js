import { computed, reactive, ref } from 'vue'
import { createElementsApi } from '../../../services/elements/elementsApi'
import { elementCatalog, findCatalogEntry } from '../../../services/elements/elementsCatalog'
import { foAuthState, clearFoSession } from '../../../services/frontoffice/auth/foAuthSession'

const PAGE_SIZE = 15

export const useElementsSearch = () => {
  // Reutilise le service d'elements partage en injectant la session Front Office
  const api = createElementsApi({ getToken: () => foAuthState.sessionToken })

  const itemtype = ref(elementCatalog[0].itemtype)
  const entry = computed(() => findCatalogEntry(itemtype.value))

  // Valeurs saisies pour chaque critere (cle -> valeur)
  const criteriaValues = reactive({})

  const results = ref([])
  const images = ref({}) // itemId -> documentId
  const total = ref(0)
  const start = ref(0)
  const loading = ref(false)
  const errorText = ref('')
  const states = ref([])

  const currentPage = computed(() => Math.floor(start.value / PAGE_SIZE) + 1)
  const pageCount = computed(() => Math.max(1, Math.ceil(total.value / PAGE_SIZE)))
  const canPrev = computed(() => start.value > 0)
  const canNext = computed(() => start.value + PAGE_SIZE < total.value)

  // Recupere les formats de statuts au demarrage
  const loadFilterData = async () => {
    try {
      states.value = await api.getStates()
    } catch (e) {
      console.warn('Impossible de charger les statuts', e)
    }
  }

  loadFilterData()

  // Construit les criteres GLPI a partir des champs non vides (combines en ET)
  const buildCriteria = () =>
    entry.value.criteria
      .filter((def) => String(criteriaValues[def.key] ?? '').trim() !== '')
      .map((def) => ({
        field: def.field,
        searchtype: def.searchtype,
        value: String(criteriaValues[def.key]).trim(),
      }))

  const runSearch = async () => {
    errorText.value = ''
    loading.value = true
    try {
      const displayFields = [1, 2, 19, 31, 49, ...entry.value.criteria.map((def) => def.field)]
      
      let items = []
      let count = 0

      if (itemtype.value === 'All') {
        // Liste des types à agréger (on exclut 'All' lui-même)
        const typesToSearch = elementCatalog
          .filter(e => e.itemtype !== 'All')
          .map(e => e.itemtype)
        
        // Pour 'All', on fait des recherches en parallèle sur chaque type
        const searchPromises = typesToSearch.map(type => 
          api.searchElements({
            itemtype: type,
            criteria: buildCriteria(),
            displayFields,
            start: 0, // On doit tout charger jusqu'à la limite pour un tri cohérent
            limit: start.value + PAGE_SIZE,
          }).catch(() => ({ items: [], total: 0 }))
        )
        
        const resList = await Promise.all(searchPromises)
        
        // On fusionne les résultats
        resList.forEach(res => {
          items.push(...res.items)
          count += res.total
        })
        
        // Tri par ID global (les plus récents en premier)
        items.sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0))
        
        // On applique la pagination sur la liste globale fusionnée
        items = items.slice(start.value, start.value + PAGE_SIZE)
      } else {
        const res = await api.searchElements({
          itemtype: itemtype.value,
          criteria: buildCriteria(),
          displayFields,
          start: start.value,
          limit: PAGE_SIZE,
        })
        items = res.items
        count = res.total
      }

      results.value = items
      total.value = count

      // Recupere les images associees en arriere-plan
      if (items.length > 0) {
        // Optionnel : ne garder que les images des items actuels ?
        // images.value = {} 
        api.fetchImagesForItems(items).then(map => {
          images.value = { ...images.value, ...map }
        })
      }
    } catch (error) {
      if (error.message === 'SESSION_EXPIRED') {
        clearFoSession()
        errorText.value = 'Votre session a expiré. Veuillez vous reconnecter.'
      } else {
        errorText.value = error?.message || 'Erreur de recherche.'
      }
      results.value = []
      total.value = 0
    } finally {
      loading.value = false
    }
  }

  const search = async () => {
    images.value = {}
    start.value = 0
    await runSearch()
  }

  const resetCriteria = () => {
    entry.value.criteria.forEach((def) => {
      criteriaValues[def.key] = ''
    })
  }

  const selectItemtype = (value) => {
    itemtype.value = value
    resetCriteria()
    results.value = []
    images.value = {}
    total.value = 0
    start.value = 0
  }

  const nextPage = async () => {
    if (!canNext.value) return
    start.value += PAGE_SIZE
    await runSearch()
  }

  const prevPage = async () => {
    if (!canPrev.value) return
    start.value = Math.max(0, start.value - PAGE_SIZE)
    await runSearch()
  }

  return {
    catalog: elementCatalog,
    itemtype,
    entry,
    criteriaValues,
    results,
    images,
    total,
    loading,
    errorText,
    states,
    currentPage,
    pageCount,
    canPrev,
    canNext,
    search,
    resetCriteria,
    selectItemtype,
    nextPage,
    prevPage,
  }
}
