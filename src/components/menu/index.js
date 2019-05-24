import React from 'react'
import { Menu, Icon } from 'antd'

const DssMenu = () => {
  return (
    <Menu>
      {
        [1,2,3].map((val, index) => {
          return (
            <Menu.Item key={index}> Navigation One </Menu.Item>
          )
        })
      }
    </Menu>
  )
}

export default DssMenu