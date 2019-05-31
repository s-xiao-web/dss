import React from 'react'
import { Menu, Icon } from 'antd'
import '@/components/menu/menu.less'

const logo = require('@/logo.svg')

const Logo = (props) => {
  console.log( props.children )
  return (
    <div className="logo_wrap">
      <img src={ logo } alt="" className="logo_img"/>
      <span>It.s My First App !!!</span>
    </div>
  )
}

const DssMenu = (props) => {
  console.log(props)
  return (
    <div>
      <Logo> haha </Logo>
      <Menu theme="dark">
        {
          props.data.map((val, index) => {
            return (
              <Menu.Item key={val.url}>
                <Icon type="pie-chart" />
                {val.menu}
              </Menu.Item>
            )
          })
        }
      </Menu>
    </div>
  )
}

export default DssMenu