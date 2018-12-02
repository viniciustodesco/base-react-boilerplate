import React from 'react'
import ReactDOM from 'react-dom'
import App from './features/App'
import { store, persistor, history } from './redux-cfg'

ReactDOM.render(
  <App store={store} persistor={persistor} history={history} />,
  document.getElementById('root')
)
