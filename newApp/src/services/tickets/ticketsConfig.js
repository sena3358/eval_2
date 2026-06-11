// Enumerations natives d'un ticket GLPI (valeur numerique -> libelle / couleur).
// Les couleurs correspondent aux classes contextuelles Bootstrap (badge bg-*).

export const ticketStatuses = {
  1: { label: 'Nouveau', color: 'secondary' },
  2: { label: 'En cours (Attribue)', color: 'primary' },
  3: { label: 'En cours (Planifie)', color: 'info' },
  4: { label: 'En attente', color: 'warning' },
  5: { label: 'Resolu', color: 'success' },
  6: { label: 'Clos', color: 'dark' },
}

export const ticketTypes = {
  1: { label: 'Incident', color: 'danger' },
  2: { label: 'Demande', color: 'primary' },
}

export const ticketPriorities = {
  1: { label: 'Tres basse', color: 'success' },
  2: { label: 'Basse', color: 'info' },
  3: { label: 'Moyenne', color: 'secondary' },
  4: { label: 'Haute', color: 'warning' },
  5: { label: 'Tres haute', color: 'danger' },
  6: { label: 'Majeure', color: 'danger' },
}

const resolve = (table, value, fallback) => table[value] || fallback

export const statusInfo = (value) =>
  resolve(ticketStatuses, value, { label: 'Inconnu', color: 'secondary' })

export const typeInfo = (value) =>
  resolve(ticketTypes, value, { label: 'Inconnu', color: 'secondary' })

export const priorityInfo = (value) =>
  resolve(ticketPriorities, value, { label: 'Inconnue', color: 'secondary' })
