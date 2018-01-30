import {
  GALLERY_PAGE_LOADED,
  GALLERY_PAGE_UNLOADED
} from '../constants'

export default (state={}, action) => {
  switch(action.type){
    case GALLERY_PAGE_LOADED:
      var items = null, descriptions = null
      if(action.payload){
        items = []
        descriptions = []
        action.payload.units.forEach(unit => {
          items.push({
            original: unit.image,
            originalAlt: `Pos at ${unit.pos}`
          })
          descriptions.push(unit.text ? unit.text : '')
        })
      }
      return {
        ...state,
        items: items,
        descriptions: descriptions,
        max_index: items ? items.length - 1 : 0
      }
    case GALLERY_PAGE_UNLOADED:
      return {}
    default:
  }
  return state
}
