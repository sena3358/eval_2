// Catalogue des types d'elements (assets) consultables depuis le Front Office,
// avec les criteres de recherche GLPI associes.
//
// `field` = identifiant de la "searchoption" GLPI (stable entre itemtypes pour
// les champs communs : 1 = Nom, 2 = ID, 5 = N de serie, 6 = N d'inventaire).
// `searchtype` = operateur GLPI (`contains`, `equals`, ...).

// Criteres communs a la plupart des actifs materiels.
// Note: On change 'serial' (champ 5) par 'model' (champ 40 pour la plupart des assets)
const assetCriteria = [
  { key: 'name', field: 1, label: 'Nom', searchtype: 'contains' },
  { key: 'states_id', field: 31, label: 'Statut', searchtype: 'equals', type: 'select' },
  { key: 'model', field: 40, label: 'Modele', searchtype: 'contains' },
  { key: 'otherserial', field: 6, label: "N d'inventaire", searchtype: 'contains' },
]

// DCCM (Cables, Sockets) n'ont pas forcément de champ 'Model' (40) ou 'Inventory' (6) standard.
const dccmCriteria = [
  { key: 'name', field: 1, label: 'Nom', searchtype: 'contains' },
]

// Logiciels : pas de numero de serie, recherche par nom uniquement.
const softwareCriteria = [
  { key: 'name', field: 1, label: 'Nom', searchtype: 'contains' },
]

export const elementCatalog = [
  { itemtype: 'All', label: 'Tous les éléments', criteria: assetCriteria },
  { itemtype: 'Computer', label: 'Ordinateurs', criteria: assetCriteria },
  { itemtype: 'Monitor', label: 'Moniteurs', criteria: assetCriteria },
  { itemtype: 'Phone', label: 'Téléphones', criteria: assetCriteria },
  { itemtype: 'NetworkEquipment', label: 'Matériels réseau', criteria: assetCriteria },
  { itemtype: 'Printer', label: 'Imprimantes', criteria: assetCriteria },
  { itemtype: 'Peripheral', label: 'Périphériques', criteria: assetCriteria },
  { itemtype: 'Rack', label: 'Baies / Racks', criteria: assetCriteria },
  { itemtype: 'Enclosure', label: 'Châssis', criteria: assetCriteria },
  { itemtype: 'PDU', label: 'PDU / Multiprises', criteria: assetCriteria },
  { itemtype: 'PassiveDCEquipment', label: 'Équipements passifs', criteria: assetCriteria },
  { itemtype: 'Appliance', label: 'Appliances', criteria: assetCriteria },
  { itemtype: 'Software', label: 'Logiciels', criteria: softwareCriteria },
  { itemtype: 'SoftwareLicense', label: 'Licences', criteria: softwareCriteria },
  { itemtype: 'Certificate', label: 'Certificats', criteria: softwareCriteria },
]

export const findCatalogEntry = (itemtype) =>
  elementCatalog.find((entry) => entry.itemtype === itemtype) || elementCatalog[0]
