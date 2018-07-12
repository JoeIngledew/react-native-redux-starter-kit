const DASHBOARD_VISITS_INCREMENT = 'DASHBOARD_VISITS_INCREMENT'
const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'

export const visitsIncrement = (value = 1) => ({
  type: DASHBOARD_VISITS_INCREMENT,
  value
})

export const dashboardAddItem = (label) => ({
  type: DASHBOARD_ADD_ITEM,
  label
})

export const DASHBOARD_EDIT_ITEM = (label, index) => ({
  type: DASHBOARD_EDIT_ITEM,
  label,
  index
})

const initialState = {
  visitsCount: =,
  list: [
    { key: 0, label: 'Angular' },
    { key: 1, label: 'VanillaJS' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
  ]
}

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_VISITS_INCREMENT:
      state.visitsCount = state.visitsCount + action.value
      return Object.assign({}, state)
    default:
      return state
  }
}
