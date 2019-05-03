import { TodoList } from '../../Todo'
import React from 'react'

let AppRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ti-dashboard',
    component: () => <p>TESTES</p>
  },
  {
    path: '/todo',
    name: 'To-do',
    icon: 'ti-move',
    component: TodoList
  },
  {
    path: '/',
    pathTo: '/dashboard',
    name: 'any',
    redirect: true
  }
]
export default AppRoutes
