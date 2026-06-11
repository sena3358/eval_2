// Itemtypes GLPI purgeables lors d'une reinitialisation d'entite.
// `weight` definit l'ordre de suppression : les plus petits sont supprimes
// en premier (objets dependants), les plus grands en dernier (objets references).
// Cet ordre, combine aux passes successives, evite les erreurs de liaison.
export const resettableItemtypes = [
  // Objets ITIL : referencent assets, utilisateurs, fournisseurs
  { itemtype: 'Ticket', label: 'Tickets', weight: 10 },
  { itemtype: 'Problem', label: 'Problemes', weight: 11 },
  { itemtype: 'Change', label: 'Changements', weight: 12 },

  // Actifs (assets)
  { itemtype: 'Computer', label: 'Ordinateurs', weight: 30 },
  { itemtype: 'Monitor', label: 'Ecrans', weight: 31 },
  { itemtype: 'Phone', label: 'Telephones', weight: 34 },
  // { itemtype: 'NetworkEquipment', label: 'Equipements reseau', weight: 32 },
  // { itemtype: 'Peripheral', label: 'Peripheriques', weight: 33 },
  // { itemtype: 'Printer', label: 'Imprimantes', weight: 35 },
  // { itemtype: 'Enclosure', label: 'Chassis', weight: 36 },
  // { itemtype: 'Rack', label: 'Baies', weight: 37 },
  // { itemtype: 'PDU', label: 'PDU', weight: 38 },
  // { itemtype: 'PassiveDCEquipment', label: 'Equipements passifs', weight: 39 },
  // { itemtype: 'Cable', label: 'Cables', weight: 40 },
  // { itemtype: 'Simcard', label: 'Cartes SIM', weight: 41 },
  // { itemtype: 'Unmanaged', label: 'Equipements non geres', weight: 42 },
  // { itemtype: 'ConsumableItem', label: 'Consommables', weight: 43 },
  // { itemtype: 'CartridgeItem', label: 'Cartouches', weight: 44 },
  // { itemtype: 'Certificate', label: 'Certificats', weight: 46 },
  // { itemtype: 'Socket', label: 'Prises', weight: 47 },
  // { itemtype: 'Appliance', label: 'Appliances', weight: 48 },

  // Logiciels : les licences avant les logiciels
  // { itemtype: 'SoftwareLicense', label: 'Licences logicielles', weight: 45 },
  // { itemtype: 'Software', label: 'Logiciels', weight: 41 },

  { itemtype: 'Manufacturer', label: 'Fabricants', weight: 49 },

  // Gestion / references
  { itemtype: 'Document', label: 'Documents', weight: 50 },
  { itemtype: 'Contract', label: 'Contrats', weight: 51 },
  { itemtype: 'Supplier', label: 'Fournisseurs', weight: 52 },
  { itemtype: 'Contact', label: 'Contacts', weight: 53 },
  { itemtype: 'Budget', label: 'Budgets', weight: 54 },

  { itemtype: 'User', label: 'Utilisateurs', weight: 60 },

  { itemtype: 'Location', label: 'Lieux', weight: 100 },
]

// Nombre maximal de passes pour resoudre les dependances residuelles.
export const MAX_PASSES = 4

// Taille des lots envoyes a l'API DELETE de GLPI.
export const DELETE_CHUNK_SIZE = 100

export const orderedItemtypes = (itemtypes) =>
  [...itemtypes].sort((a, b) => a.weight - b.weight)
