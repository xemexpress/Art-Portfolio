export default (state = {}, action) => { 
  switch(action.type){ 
    case 'BLOG_PAGE_LOADED': 
      return { 
        ...state, 
        articles: action.payload.articles 
      } 
    default: 
  } 
  return state 
} 
