import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export const RouteWithSubRoutes = (route) => {
  return (
    <Route 
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routeMsg={route}></route.component>}
    ></Route>
  )
}

export const RenderRoutes = ({routers}) => { return routers.map((route,i) => { return <RouteWithSubRoutes key={i} {...route}/>})}