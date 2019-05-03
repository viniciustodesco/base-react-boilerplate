import React from 'react'
import { Switch, Route } from 'react-router'
import Routes from './routes/index.js'
import { HashRouter } from 'react-router-dom'

const Shell = () => (
  <HashRouter>
    <Switch>
      {Routes.map((prop, key) => {
        console.log(prop.name)
        return <Route path={prop.path} key={key} component={prop.component} />
      })}
    </Switch>
  </HashRouter>
)

export default Shell
