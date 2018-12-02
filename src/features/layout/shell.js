import React from 'react'
import { Switch, Route } from 'react-router'
import { TodoList } from '../Todo'

const Shell = () => (
  <div>
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route path="/route1" component={() => <h1>route 1</h1>} />
      <Route path="/route2" component={() => <h1>route 2</h1>} />
    </Switch>
  </div>
)

export default Shell
