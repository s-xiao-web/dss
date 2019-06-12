import React from 'react'
import { Layout, Icon } from 'antd'

const { Header } = Layout

class MyHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  toggle = () => {
    console.log( window.toggle )
    this.setState({
      collapsed : !this.state.collapsed
    })
  }

  render() {
    return (
      <Header style={{ background: '#fff'}}>
        <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}  onClick={this.toggle}/>
        <div>
          user
        </div>
      </Header>
    )
  }
}
export default MyHeader