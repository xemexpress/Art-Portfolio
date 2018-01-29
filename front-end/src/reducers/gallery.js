export default (state={}, action) => {
  switch(action.type){
    case 'GALLERY_PAGE_LOADED':
      console.log(action.payload.units)
      var items = [], descriptions = []
      action.payload.units.forEach(unit => {
        items.push({
          original: unit.image,
          originalAlt: `Pos at ${unit.pos}`
        })
        descriptions.push(unit.text ? unit.text : '')
      })
      
      return {
        ...state,
        items: items,
        descriptions: descriptions,
        max_index: items.length - 1
      }
    case 'GALLERY_PAGE_UNLOADED':
      return {}
    default:
  }
  return state
}
