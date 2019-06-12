import React, {Component} from 'react'
import { Layout } from 'antd';

import MySider from '@/components/layout/MySlider'
import MyHeader from '@/components/layout/MyHeader'
import MyCrumb from '@/components/layout/MyCrumb'
import MyContent from '@/components/layout/MyContent'


const { Header, Sider, Content } = Layout; 
class Index extends Component {

  constructor(props) {
    super(props)
    this.setState = {

    }
  }

  componentWillMount() {
    console.log( this.props )
  }

  render() {
    return (
      <Layout style={{height: '100vh'}}>
        <MySider></MySider>
        <Layout>
          <MyHeader></MyHeader>
          <MyCrumb></MyCrumb>
          <MyContent route={this.props.route}></MyContent> 
        </Layout>
      </Layout>
    )
  }
}

export default Index