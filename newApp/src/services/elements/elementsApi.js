import { createGlpiApi } from '../testApi/glpiApi'
import { authState } from '../auth/authSession'

// Detecte le format d'erreur GLPI : ["ERROR_xxx", "message"]
const isGlpiError = (data) =>
  Array.isArray(data) && typeof data[0] === 'string' && data[0].startsWith('ERROR')

const glpiErrorMessage = (data) =>
  isGlpiError(data) ? data[1] || data[0] : ''

const getRealItemType = (itemType) => {
  if (itemType === 'Socket') return 'PassiveDCSocket'
  if (itemType === 'PassiveEquipment') return 'PassiveDCEquipment'
  return itemType
}

// `getToken` injecte la session active (Back Office par defaut, Front Office sinon).
export const createElementsApi = ({ getToken = () => authState.sessionToken } = {}) => {
  const glpi = createGlpiApi()

  const withSession = (extra = {}) => ({
    sessionToken: getToken(),
    ...extra,
  })

  // Recherche multicritere d'elements d'un itemtype donne via l'endpoint /search.
  // `criteria` : [{ field, searchtype, value }] (combines en ET).
  // `displayFields` : identifiants de searchoptions a renvoyer (colonnes).
  const searchElements = async ({
    itemtype,
    criteria = [],
    displayFields = [1, 2],
    start = 0,
    limit = 15,
  }) => {
    if (!getToken()) {
      throw new Error('Session GLPI manquante.')
    }

    const params = new URLSearchParams()
    criteria.forEach((criterion, index) => {
      if (index > 0) params.append(`criteria[${index}][link]`, 'AND')
      params.append(`criteria[${index}][field]`, String(criterion.field))
      params.append(`criteria[${index}][searchtype]`, criterion.searchtype || 'contains')
      params.append(`criteria[${index}][value]`, criterion.value ?? '')
    })
    displayFields.forEach((field, index) => {
      params.append(`forcedisplay[${index}]`, String(field))
    })
    params.append('range', `${start}-${start + limit - 1}`)

    const realType = getRealItemType(itemtype)
    const res = await glpi.request(
      `/search/${realType}?${params.toString()}`,
      withSession()
    )

    if (isGlpiError(res.data)) {
      const code = res.data[0]
      if (code === 'ERROR_SESSION_TOKEN_INVALID' || code === 'ERROR_SESSION_TOKEN_MISSING') {
        throw new Error('SESSION_EXPIRED')
      }
      throw new Error(glpiErrorMessage(res.data))
    }
    if (res.status === 401) {
      throw new Error('SESSION_EXPIRED')
    }
    if (!res.ok && res.status !== 206) {
      throw new Error(`Erreur de recherche (${res.status}).`)
    }

    // GLPI renvoie data : [{ "1": valeur, "2": id, ... }] indexe par searchoption.
    const rows = Array.isArray(res.data?.data) ? res.data.data : []
    return {
      items: rows.map((row) => ({
        id: row['2'] ?? row[2] ?? null,
        itemtype: realType,
        raw: row,
      })),
      total: Number.parseInt(res.data?.totalcount ?? 0, 10) || 0,
    }
  }

  /**
   * Recupere les images associees a une liste d'items.
   * Utilise l'endpoint /Document_Item pour obtenir les liens réels et éviter les doublons fantômes.
   * @param {Array<{id: number, itemtype: string}>} items
   */
  const fetchImagesForItems = async (items) => {
    if (!items.length || !getToken()) return {}

    const resultsMap = {}
    try {
      // On recupere les liens Document <-> Item. 
      // On filtre cote client pour simplifier, c'est tres rapide pour des volumes standards.
      const res = await glpi.request('/Document_Item?range=0-999', withSession())
      if (res.ok) {
        const links = Array.isArray(res.data) ? res.data : (res.data?.data || [])
        
        // On construit la map : "ItemType_ID" -> DocumentID
        for (const link of links) {
          resultsMap[`${link.itemtype}_${link.items_id}`] = link.documents_id
        }
      }
    } catch (e) {
      console.warn('Impossible de recuperer les liens Document_Item', e)
    }

    return resultsMap
  }

  // Recupere un seul element par son type et son id.
  const getElement = async (itemtype, id) => {
    if (!getToken()) {
      throw new Error('Session GLPI manquante.')
    }
    const realType = getRealItemType(itemtype)
    const res = await glpi.request(`/${realType}/${id}?expand_dropdowns=true`, withSession())
    if (!res.ok) {
      throw new Error(`Erreur lors de la recuperation de l'element (${res.status}).`)
    }
    return res.data
  }

  // Recupere la liste des statuts (States) disponibles dans GLPI.
  const getStates = async () => {
    if (!getToken()) return []
    const res = await glpi.request('/State?range=0-999', withSession())
    if (res.ok) {
      // GLPI renvoie soit un tableau direct, soit { data: [...] }
      const data = Array.isArray(res.data) ? res.data : (res.data?.data || [])
      return data.map(s => ({ id: s.id, name: s.name }))
    }
    return []
  }

  return {
    searchElements,
    fetchImagesForItems,
    getElement,
    getStates,
  }
}
