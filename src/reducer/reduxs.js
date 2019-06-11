const SLIDECOLLAPSED = 'slidecollapsed'
export const slidecollapsed = (state = { slidecollapsed: false }, action) => {
  const slidecollapsed = state.slidecollapsed
  switch(action.type) {
    case SLIDECOLLAPSED:
      return Object.assign({}, state, {
        slidecollapsed: !slidecollapsed
    })
    default:
      return state
  }
}