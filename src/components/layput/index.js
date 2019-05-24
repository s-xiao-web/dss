import React from 'react'
import {Layout } from 'antd'
import DssMenu from '../menu'
const { Header, Footer, Sider, Content } = Layout ;


const LayoutNode =  () => {
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

export default LayoutNode