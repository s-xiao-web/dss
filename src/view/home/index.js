import React, {Component} from 'react'
import { Layout } from 'antd'
import DssMenu from '../../components/menu'
import { getMenuList } from '@/api'
const { Header, Footer, Sider, Content } = Layout ;

export default class DssHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuList: []
    }
  }

  componentWillMount() {  // 相当于组件创建之前
    getMenuList().then(res => {
      this.setState({
        menuList : res.data
      })
    })
  }

  componentDidMount() {
    // alert(3)
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <DssMenu data={this.state.menuList}></DssMenu>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>{this.props.children}</Content>
        </Layout>
      </Layout>
    )
  }
}