import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { main as routerConfig } from './router/index'
import { RenderRoutes } from './router/utils'
import { Provider } from 'react-redux'
import store from '@/redux/store'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <RenderRoutes routers={routerConfig}></RenderRoutes>
          </div>
        </Router>  
      </Provider>
    )
  }
}
export default App