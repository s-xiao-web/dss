import React, {Component} from 'react'
import {Layout } from 'antd'
import DssMenu from '../../components/menu'

const { Header, Footer, Sider, Content } = Layout ;

export default class DssHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <DssMenu></DssMenu>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}