import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch } from 'react-router-dom'
import './assets/css/reset.css'
import RouteView from '@/libs/router/RouteView'
import routes from '@/router'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <RouteView routes={routes} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
