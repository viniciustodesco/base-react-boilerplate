import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from './history'

import { TodoListReducer } from '../features/Todo'

export default combineReducers({
  router: connectRouter(history),
  todos: TodoListReducer
})
