import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { createBrowserHistory } from 'history'
import { getMenuList } from '@/api'
import './index.css'

const history = createBrowserHistory()
const selectPath = history.location.pathname.replace(/\//g, '')

const { Sider } = Layout
const { SubMenu }  = Menu;

class MySider extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      meunList: []
    }
  }

  componentWillMount() {
    getMenuList().then(res => this.setState({meunList: res.data}))
  }

  render() {
    return (
      <Sider id="my_sider">
        <div className="logo"></div>
        <Menu theme="dark" defaultSelectedKeys={[selectPath]}>
          {
            this.state.meunList.map(data => {
              return (
                <Menu.Item key={data.url}>
                  <Link to={data.url}>
                  <Icon type="radar-chart" spin={true}/>
                  {data.menu}
                  </Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
    )
  }
}

export default MySider