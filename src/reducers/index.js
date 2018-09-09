import { combineReducers } from 'redux'

import todosReducer from './todos'
import visibilityReducer from './visibilityFilter'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityReducer
})
