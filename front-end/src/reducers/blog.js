import {
  BLOG_PAGE_LOADED,
  BLOG_PAGE_UNLOADED,
  SET_PAGE
} from '../constants'

export default (state = {}, action) => { 
  switch(action.type){ 
    case BLOG_PAGE_LOADED: 
      return { 
        ...state, 
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        showBlogPagination: true,
        currentPage: 0
      }
    case SET_PAGE:
      return {
        ...state,
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        currentPage: action.page
      }
    case BLOG_PAGE_UNLOADED:
      return {}
    default: 
  } 
  
  return state 
} 
