import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import '@/components/menu/menu.less'

const logo = require('@/logo.svg')

const Logo = (props) => {
  return (
    <div className="logo_wrap">
      <img src={ logo } alt="" className="logo_img"/>
      <span>It.s My First App !!!</span>
    </div>
  )
}

const DssMenu = (props) => {
  console.log( props.routeHash )
  return (
    <div>
      <Logo></Logo>
      <Menu theme="dark" selectedKeys={[props.routeHash]}>
        {
          props.data.map((val, index) => {
            return (
              <Menu.Item key={`#/${val.url}`}>
                <Link to={val.url} key={val.menu}>
                  <Icon type="pie-chart" />
                  {val.menu}
                </Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </div>
  )
}

export default DssMenu