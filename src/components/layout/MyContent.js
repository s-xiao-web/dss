import React from 'react'
import { Layout } from 'antd'
import { RenderRoutes } from '@/router/utils'

const MyContent = (props) => {
  return (
    <Layout.Content className="content_box">
      <div style={{background:'#fff'}}>
        <RenderRoutes routers={props.route}></RenderRoutes>
      </div>
    </Layout.Content>
  )
}

export default MyContent