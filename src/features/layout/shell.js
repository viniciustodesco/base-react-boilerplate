import React from 'react'
import { Switch, Route } from 'react-router'
import { TodoList } from '../Todo'

const Shell = () => (
  <div>
    <Switch>
      <Route path="/todo" component={TodoList} />
      <Route path="/rota1" component={() => <h1>rota 1</h1>} />
      <Route path="/rota2" component={() => <h1>rota 2</h1>} />
    </Switch>
  </div>
)

export default Shell
