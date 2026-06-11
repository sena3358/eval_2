import { computed, reactive, ref, onMounted } from 'vue'
import { createTicketsApi } from '../../../services/tickets/ticketsApi'
import { createUsersApi } from '../../../services/users/userApi'
import { foAuthState } from '../../../services/frontoffice/auth/foAuthSession'

const emptyForm = () => {
  const now = new Date()
  // Format local YYYY-MM-DD HH:mm:ss sans passer par UTC (toISOString est en UTC)
  const pad = (n) => String(n).padStart(2, '0')
  const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
  
  return {
    name: '',
    content: '',
    type: 2, // 1 = Incident, 2 = Demande
    urgency: 3, // 3 = Moyenne
    date: `${dateStr} ${timeStr}`,
    _users_id_requester: 0, // Auto par defaut
    costs: [
      { name: "Main d'œuvre", actiontime: 0, cost_time: 0, cost_fixed: 0 }
    ]
  }
}

export const useTicketCreate = () => {
  // Reutilise le service tickets partage (memes createTicket/linkItem que le BO)
  // en injectant la session Front Office.
  const api = createTicketsApi({ getToken: () => foAuthState.sessionToken })
  const userApi = createUsersApi({ getToken: () => foAuthState.sessionToken })

  const form = reactive(emptyForm())
  const selectedElements = ref([])
  const users = ref([])

  const submitting = ref(false)
  const errorText = ref('')
  const successText = ref('')

  const fetchUsers = async () => {
    try {
      // On recupere les utilisateurs pour peupler le select "Demandeur"
      // On fait une recherche vide pour avoir une liste initiale
      const res = await userApi.searchUsers('')
      users.value = res
    } catch (e) {
      console.warn('Erreur chargement utilisateurs:', e)
    }
  }

  onMounted(fetchUsers)

  const addCostRow = () => {
    form.costs.push({ name: 'Coût', actiontime: 0, cost_time: 0, cost_fixed: 0 })
  }

  const removeCostRow = (index) => {
    form.costs.splice(index, 1)
  }

  const canSubmit = computed(() => form.name.trim().length > 0 && !submitting.value)

  const submit = async () => {
    errorText.value = ''
    successText.value = ''

    if (!form.name.trim()) {
      errorText.value = 'Le titre du ticket est obligatoire.'
      return false
    }

    submitting.value = true
    try {
      const input = {
        name: form.name.trim(),
        content: form.content.trim(),
        type: Number(form.type),
        urgency: Number(form.urgency),
        date: form.date,
      }

      // Si un demandeur specifique est choisi
      if (form._users_id_requester > 0) {
        input._users_id_requester = form._users_id_requester
      }

      const { id } = await api.createTicket(input)

      if (!id) {
        throw new Error('Ticket cree mais identifiant non renvoye par GLPI.')
      }

      // Ajout de tous les couts enregistres
      for (const cost of form.costs) {
        if (cost.actiontime > 0 || cost.cost_time > 0 || cost.cost_fixed > 0) {
          try {
            await api.addTicketCost(id, cost)
          } catch (costError) {
            console.warn('Echec adding cost:', costError)
          }
        }
      }

      // Rattachement des elements un par un ; on collecte les echecs eventuels
      const failed = []
      for (const element of selectedElements.value) {
        try {
          await api.linkItem(id, element.itemtype, element.id)
        } catch (error) {
          failed.push(`${element.label} (${error?.message || 'echec'})`)
        }
      }

      if (failed.length) {
        successText.value =
          `Ticket #${id} cree, mais certains elements n'ont pas pu etre rattaches : ` +
          failed.join(', ')
      } else {
        const count = selectedElements.value.length
        successText.value =
          `Ticket #${id} cree avec succes` +
          (count ? ` et ${count} element(s) rattache(s).` : '.')
      }

      // Reinitialisation du formulaire
      Object.assign(form, emptyForm())
      selectedElements.value = []
      return true
    } catch (error) {
      errorText.value = error?.message || 'Erreur lors de la creation du ticket.'
      return false
    } finally {
      submitting.value = false
    }
  }

  return {
    form,
    selectedElements,
    users,
    submitting,
    errorText,
    successText,
    canSubmit,
    submit,
    addCostRow,
    removeCostRow
  }
}
