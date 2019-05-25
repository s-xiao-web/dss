import React, {Component} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'

import login from '@/view/login/index.js'
import Home from '@/view/home'
export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component= {login}/>
          <Route path="/" component= {Home}/>
        </Switch>
      </HashRouter>
    )
  }
}