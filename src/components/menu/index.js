import React from 'react'
import { Menu, Divider } from 'antd'
import '@/components/menu/menu.less'

const logo = require('@/logo.svg')

const Logo = () => {
  return (
    <div class="logo_wrap">
      <img src={ logo } alt="" className="logo_img"/>
      <span>华西决策支持系统</span>
    </div>
  )
}

const DssMenu = () => {
  return (
    <div>
      <Logo />
      <Menu>
        {
          [1,2,3].map((val, index) => {
            return (
              <Menu.Item key={index}> Navigation One </Menu.Item>
            )
          })
        }
      </Menu>
    </div>
  )
}

export default DssMenu