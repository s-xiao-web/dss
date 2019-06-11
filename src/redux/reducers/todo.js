const initialState = {
  allIds: [],
  byIds: {}
};

const reducer = function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      const { id, content } = action.payload;
      return {
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            completed: false,
            content
          }
        }
      }
    case 'TOGGLE_TODO': {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
          // ...state.byIds,
        }
      }
    }
      // let { id } = action.payload
    default:
      return state
  }
}

export default reducer