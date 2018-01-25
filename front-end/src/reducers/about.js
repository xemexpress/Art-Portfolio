const defaultState = {
  messager: '',
  message: ''
}

export default (state=defaultState, action) => {
  switch(action.type){
    case 'UPDATE_FIELD_ABOUT':
      return {
        ...state,
        [action.key]: action.value
      }
    default:
  }
  return state
}
