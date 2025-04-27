const initialState = {
    todos: [],
    loading: false,
    error: null,
  }
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return { ...state, loading: true }
      case 'FETCH_TODOS_SUCCESS':
        return { ...state, todos: action.payload, loading: false }
      case 'FETCH_TODOS_FAILURE':
        return { ...state, error: action.payload, loading: false }
      case 'CREATE_TODO_SUCCESS':
        return { ...state, todos: [...state.todos, action.payload] }
      default:
        return state
    }
  }
  
  export default todoReducer
  