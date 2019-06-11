import React, {Component} from 'react';
import { createBrowserHistory } from 'history';
import DssMenu from '../../components/menu';
import Dssbread from '../../components/bread';

import { getMenuList } from '@/api';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout; 

const history = createBrowserHistory();
const location = history.location;

class DssLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuList: []
    }
  }

  componentWillMount() {
    getMenuList().then(res => {
      this.setState({
        menuList : res.data
      })
    })
  }

  render() {
    let {hash} = location
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <DssMenu data={this.state.menuList} routeHash={ hash }></DssMenu>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <div style={{ height: '100%' }}>
              <Dssbread></Dssbread>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default DssLayout