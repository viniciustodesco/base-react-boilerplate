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
    icon: 'ti-work',
    component: TodoList
  },
  {
    path: '/',
    pathTo: '/dashboard',
    name: 'outros',
    redirect: true
  }
]
export default AppRoutes
