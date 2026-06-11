import { createGlpiApi } from '../testApi/glpiApi'
import { authState } from '../auth/authSession'

const PAGE_SIZE = 200

// Detecte le format d'erreur GLPI : ["ERROR_xxx", "message"]
const isGlpiError = (data) =>
  Array.isArray(data) && typeof data[0] === 'string' && data[0].startsWith('ERROR')

const glpiErrorMessage = (data) =>
  isGlpiError(data) ? data[1] || data[0] : ''

export const createResetApi = () => {
  const glpi = createGlpiApi()

  // Toutes les requetes reutilisent le Session-Token de l'utilisateur connecte
  const withSession = (extra = {}) => ({
    sessionToken: authState.sessionToken,
    ...extra,
  })

  const listEntities = async () => {
    const res = await glpi.request('/Entity?range=0-9999', withSession())
    if (!res.ok || isGlpiError(res.data)) {
      throw new Error(
        glpiErrorMessage(res.data) ||
          `Impossible de charger les entites (${res.status}).`
      )
    }
    return Array.isArray(res.data) ? res.data : []
  }

  // Positionne l'entite active de la session pour cibler precisement les items
  const changeActiveEntities = (entitiesId, isRecursive = false) =>
    glpi.request(
      '/changeActiveEntities',
      withSession({
        method: 'POST',
        body: { entities_id: entitiesId, is_recursive: isRecursive },
      })
    )

  // Recupere tous les identifiants d'un itemtype dans l'entite active (pagine)
  const listItemIds = async (itemtype) => {
    const ids = []
    let start = 0

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const end = start + PAGE_SIZE - 1
      const res = await glpi.request(
        `/${itemtype}?only_id=true&range=${start}-${end}`,
        withSession()
      )

      // GLPI renvoie une erreur quand l'itemtype est vide ou la plage depasse
      if (isGlpiError(res.data)) {
        break
      }
      if (!res.ok && res.status !== 206) {
        break
      }

      const list = Array.isArray(res.data) ? res.data : []
      for (const item of list) {
        if (item && item.id != null) {
          ids.push(item.id)
        }
      }

      let total = null
      const range = res.headers?.['content-range']
      if (range && range.includes('/')) {
        total = Number.parseInt(range.split('/')[1], 10)
      }

      start += PAGE_SIZE
      if (list.length < PAGE_SIZE) break
      if (total != null && start >= total) break
    }

    return ids
  }

  // Suppression definitive (force_purge) d'un lot d'items via l'API DELETE
  const deleteItems = (itemtype, ids, { forcePurge = true } = {}) =>
    glpi.request(
      `/${itemtype}`,
      withSession({
        method: 'DELETE',
        body: {
          input: ids.map((id) => ({ id })),
          force_purge: forcePurge,
        },
      })
    )

  return {
    listEntities,
    changeActiveEntities,
    listItemIds,
    deleteItems,
    glpiErrorMessage,
  }
}
