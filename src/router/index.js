import React, {Component} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'

// const login = import("../view/login");
import login from '../view/login'
import Home from '../view/home'
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