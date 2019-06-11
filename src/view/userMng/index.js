import React from 'react';
import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'
class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: []
    }
  }

  componentDidMount() {
    console.log()
  }

  addData(val) {
    let arr = this.state.todoList.concat()
    arr.push(val)
    console.log(arr)
    this.setState({
      todoList:arr
    })
  }
  render() {
    return(
      <div className="TodoApp">
        <AddTodo />
        <TodoList data={this.state.todoList}/>
      </div>
    )
  }
}
export default TodoApp