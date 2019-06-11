import React from 'react'
import { Breadcrumb } from 'antd'

const Bread = props => {
  let baseStyle = {
    height: '60px',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
  }
  return (
    <div style={ baseStyle }>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Bread