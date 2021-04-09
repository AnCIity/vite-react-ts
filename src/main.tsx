import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
