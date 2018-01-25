export default (state={}, action) => {
  switch(action.type){
    case 'GALLERY_PAGE_LOADED':
      return {
        ...state,
        units: action.payload.units
      }
    default:
  }
  return state
}
