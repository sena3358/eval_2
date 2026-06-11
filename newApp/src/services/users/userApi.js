import { createGlpiApi } from '../testApi/glpiApi'
import { authState } from '../auth/authSession'

export const createUsersApi = ({ getToken = () => authState.sessionToken } = {}) => {
  const glpi = createGlpiApi()

  const withSession = (extra = {}) => ({
    sessionToken: getToken(),
    ...extra,
  })

  // Recherche des utilisateurs par nom (pour la selection du technicien)
  const searchUsers = async (name = '') => {
    // 1 = Nom, 2 = ID
    const url = `/search/User?criteria[0][field]=1&criteria[0][searchtype]=contains&criteria[0][value]=${encodeURIComponent(name)}&forcedisplay[0]=2&forcedisplay[1]=1`
    
    const res = await glpi.request(url, withSession())
    
    if (!res.ok) return []
    
    // Format GLPI : { totalcount: X, count: Y, data: [...] ou rows: [...] }
    const rows = res.data?.data || res.data || []
    return rows.map(u => ({
      id: u['2'] || u.id,
      name: u['1'] || u.name
    }))
  }

  return {
    searchUsers
  }
}
