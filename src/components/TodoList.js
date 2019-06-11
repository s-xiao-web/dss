import React from 'react'
import { connect } from 'react-redux'
import filterData from '@/utils/filterData'
import Todo from './Todo'
const TodoList = ({data}) => {
  console.log( data )
  return (
    <ul>
      {
        (data && data.length)? data.map((val, index) => {
          return <Todo key={index} todo={val}/>
        }): '请先新增'
      }
    </ul>
  )
}
const mapStateToProps = state => {
  const {visibilityFilter} = state
  const data = filterData(state)
  return {data}
}

export default connect(mapStateToProps)(TodoList)