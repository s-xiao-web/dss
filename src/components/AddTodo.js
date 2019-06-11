import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '@/redux/actions'
const mapStateToProps = (state) => {
  return {
    count: state
  }
}

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  updateInput = input => {
    this.setState({input})
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({input: ''})
  }
  
  componentWillMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.input} onChange={e => this.updateInput(e.target.value)}/>
        <button onClick={this.handleAddTodo}>新增</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, {addTodo})(AddTodo)