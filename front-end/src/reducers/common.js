const defaultState = {
  header: 'Yuen Pik Kwan',
  artist: 'Kate Yuen',
  concentration: 'Metal Maker & Multimedia Designer'
}

export default (state=defaultState, action) => {
  switch(action.type){
    case 'REDIRECT':
      return {
        ...state,
        redirectTo: null
      }
    case 'SEND_MAIL':
      return {
        ...state,
        redirectTo: action.error ? null : '/'
      }
    default:
  }
  return state
}
