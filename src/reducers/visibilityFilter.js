import { VisibilityFilters, Actions } from '../actions'

const visibilityReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case Actions.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityReducer
