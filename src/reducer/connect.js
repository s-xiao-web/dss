let action_slidecollapsed  = {
  type: 'slidecollapsed'
}

export const mapStateToProps = state => {
  return {slidecollapsed: state.slidecollapsed}
}

export const mapDispatchToProps = (dispatch) => {
  return {onSlidecollapsed: () => dispatch(action_slidecollapsed)}
}