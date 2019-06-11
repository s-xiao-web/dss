import React from 'react'
import { createStore } from 'redux'

const ActiceTypes = {
  ADD_NUM: 'ADD_NUM',
  MINUSE_NUM: 'MINUSE_NUM'
}

const ActionCreators = {
  AddNum(num) {
    return {
      type: ActiceTypes.ADD_NUM,
      payload: num
    }
  },
  MinuseNum(num) {
    return {
      type: ActiceTypes.MINUSE_NUM,
      payload: num
    }
  }
}

const numReducer = (state = 123, action) => {
  switch(action.type) {
    case ActiceTypes.ADD_NUM:
      return state + action.payload
    case ActiceTypes.MINUSE_NUM:
      return state - action.payload
    default:
      return state
  }
}

const store = createStore(numReducer)

class Index extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }

  componentWillMount() {
    console.log( store.getState() )
    store.subscribe(() => {
      this.setState({
        num: store.getState()
      })
    })
  }

  render() {
    return (
      <div>
       <h1>store的值是:  {store.getState()}</h1>
       <h1>当前组件的值是 {this.state.num}</h1>
        <button onClick={() => {
          store.dispatch(ActionCreators.AddNum(1))
        }}>增加</button>
        <button onClick={() => {
          store.dispatch(ActionCreators.MinuseNum(1))
        }}>减少</button>

      </div>
    )
  }

}

export default Index