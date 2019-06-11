// 获取todo
const getTodo = (state) => state.todo
// 获取 id
const getTodoList = store => getTodo(store).allIds

const mergeTodo = (store, id) => ({...getTodo(store).byIds[id], id})

const getAllTodo = (store) => (getTodoList(store).map(id => mergeTodo(store, id)))

const filterData = (store, visibilityFilter) => {
  return getAllTodo(store)
}

export default filterData