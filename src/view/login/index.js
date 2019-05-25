import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.less'
import axios from 'axios'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: {
        username: '',
        password: ''
      },
      checked: false 
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.userLogin()
      }
    });
  };

  userLogin() {
    console.log( this.props.form )
    console.log( this.state )
    axios({
      method: 'post',
      data: this.state.params,
      url: 'apis/common/user/login',
    }).then(res => {
      console.log( res )
    })
  }
  changeUserName(key, event) {
    let value = event.target.value
    let newState = {}
    newState[key] = value
    let obj = Object.assign(this.state.params, newState)
    this.setState({params: obj})
  }

  ChangeChecked(event) {
    const checked = event.target.checked
    this.setState({
      checked: {checked}
    })
  }

  enterSub(val) {
    alert('哈哈 我被执行了')
    
  }

  render() {
    let fontColor = '#1890ff'
    let { getFieldDecorator } = this.props.form

    return (
      <div className="login_wrapper">
        <div className="form_box">
          <h3 style={{color: fontColor}}> Hellow my App </h3>
          <Form className="login_form" onSubmit={this.handleSubmit}>
            <Form.Item>
              {
                getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }]
                })(
                  <Input placeholder="请输入用户名"  allowClear={true} onChange={this.changeUserName.bind(this, 'username')} prefix={<Icon type="gitlab" theme="filled" />} size="large" onPressEnter={this.handleSubmit.bind(this)}></Input>
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your password!' }]
                })(
                  <Input.Password placeholder="请输入密码"  allowClear={true} onChange={this.changeUserName.bind(this, 'password')}  prefix={<Icon type="unlock" theme="filled" />} size="large"></Input.Password>
                )
              }
              
            </Form.Item>
            <Form.Item className="df_left">
              <Checkbox checked={this.checked} onChange={this.ChangeChecked.bind(this)}>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" block  size="large" htmlType="submit">Login</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
const LoginForm = Form.create({name: 'normal_login'})(Login)
export default LoginForm