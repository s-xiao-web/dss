import React, {Component} from 'react'
import {HashRouter, Switch, Route } from 'react-router-dom'

import login from '@/view/login/index.js'
import Home from '@/view/home'
import UserMng from '@/view/userMng'

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={login}/>
          <Route path="/admin" component={Home}>
              <Route path="/admin/userMng" component={UserMng}></Route>
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}