const todos = (state = {
  todos: {}
}, action) => {
  switch (action.type) {
    case 'TODOS_FETCHED':
      return {...state, todos: action.payload}
    default:
      return state
  }
}

export { todos }
