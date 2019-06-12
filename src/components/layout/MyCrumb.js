import React, {Component} from 'react'
import { Breadcrumb } from 'antd'

class MyCrumb extends Component {
  
  render() {
    return (
      <Breadcrumb style={{ padding: '20px' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default MyCrumb