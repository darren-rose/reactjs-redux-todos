let nextTodoId = 0

export const Actions = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

export const addTodo = text => ({
  type: Actions.ADD_TODO,
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: Actions.TOGGLE_TODO,
  id
})

export const setVisibilityFilter = filter => ({
  type: Actions.SET_VISIBILITY_FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
