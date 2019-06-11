import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from "@/redux/actions";

const Todo = ({todo, toggleTodo}) => {
  const style = {
    marginRight: '30px'
  }

  return (
    <li onClick={() => toggleTodo(todo.id) }>
      <span style={style}>
        {
          todo.completed? "👌" : "👋"
        }
      </span>
      <span>{todo.content}</span>
    </li>
  )
}

export default connect(null, { toggleTodo })(Todo)