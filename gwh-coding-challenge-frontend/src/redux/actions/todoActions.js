import axios from 'axios'

const API_URL = 'http://localhost:8000/api/todos/'

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TODOS_REQUEST' })
  try {
    const res = await axios.get(API_URL)
    dispatch({
      type: 'FETCH_TODOS_SUCCESS',
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: 'FETCH_TODOS_FAILURE',
      payload: error.message,
    })
  }
}

export const createTodo = (todoData) => async (dispatch) => {
  try {
    const res = await axios.post(API_URL, todoData)
    dispatch({
      type: 'CREATE_TODO_SUCCESS',
      payload: res.data,
    })
  } catch (error) {
    // Optionally handle error feedback here
  }
}
