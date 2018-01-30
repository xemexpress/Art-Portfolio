import {
  UPDATE_FIELD_ABOUT,
  SEND_MAIL,
  ASYNC_START,
  ABOUT_PAGE_UNLOADED
} from '../constants'

const defaultState = {
  messager: '',
  message: ''
}

export default (state=defaultState, action) => {
  switch(action.type){
    case UPDATE_FIELD_ABOUT:
      return {
        ...state,
        [action.key]: action.value
      }
    case SEND_MAIL:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      }
    case ASYNC_START:
      if(action.subtype === 'SEND_MAIL'){
        return {
          ...state,
          inProgress: true
        }
      }
      break
    case ABOUT_PAGE_UNLOADED:
      return defaultState
    default:
  }
  
  return state
}
