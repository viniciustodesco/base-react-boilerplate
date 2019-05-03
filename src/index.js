import React from 'react'
import ReactDOM from 'react-dom'
import App from './features/App'
import { store, persistor, history } from './redux-cfg'

import './assets/scss/style.css'

ReactDOM.render(
  <App store={store} persistor={persistor} history={history} />,
  document.getElementById('root')
)
