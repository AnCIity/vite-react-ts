import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './assets/css/reset.css'
import Home from '@/views/Home/Home'
import Code from './views/Code/Code'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/code' component={Code} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
