import {
  HEADER,
  ARTIST,
  CONCENTRATION,
  REDIRECT,
  SEND_MAIL
} from '../constants'

const defaultState = {
  header: HEADER,
  artist: ARTIST,
  concentration: CONCENTRATION
}

export default (state=defaultState, action) => {
  switch(action.type){
    case REDIRECT:
      return {
        ...state,
        redirectTo: null
      }
    case SEND_MAIL:
      return {
        ...state,
        redirectTo: action.error ? null : '/'
      }
    default:
  }
  return state
}
