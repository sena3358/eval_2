const navigationSections = [
  {
    title: 'Tableau de bord',
    items: [
      {
        key: 'dashboard',
        label: 'Dashboard',
        to: '/dashboard',
        icon: 'bi-speedometer2',
        disabled: false,
      },
      {
        key: 'tickets',
        label: 'Tickets',
        to: '/tickets',
        icon: 'bi-ticket-detailed',
        disabled: false,
      },
      // {
      //   key: 'glpi',
      //   label: 'Test GLPI',
      //   to: '/glpi',
      //   icon: 'bi-hdd-network',
      //   disabled: false,
      // },
      // {
      //   key: 'sqlite',
      //   label: 'Test SQLite',
      //   to: '/sqlite',
      //   icon: 'bi-database',
      //   disabled: false,
      // },
      {
        key: 'kanban-settings',
        label: 'Paramètres Kanban',
        to: '/kanban-settings',
        icon: 'bi-palette',
        disabled: false,
      },
    ],
  },
  {
    title: 'Maintenance',
    items: [
      {
        key: 'reset',
        label: 'Reinitialisation',
        to: '/reset',
        icon: 'bi-trash3',
        disabled: false,
      },
      {
        key: 'import',
        label: 'Importation',
        to: '/import',
        icon: 'bi-upload',
        disabled: false,
      },
    ],
  },
]

export const getNavigationSections = () => navigationSections

export const getNavigationItems = () =>
  navigationSections.flatMap((section) => section.items)
