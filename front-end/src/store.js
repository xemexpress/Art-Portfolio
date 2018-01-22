import { createStore, applyMiddleware } from 'redux'
import { promiseMiddleware } from './middleware'

const defaultState = {
  header: 'Yuen Pik Kwan',
  artist: 'Kate Yuen',
  concentration: 'Metal Maker & Multimedia Designer',
  units: null
}

const reducer = function(state = defaultState, action){
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

const middleware = applyMiddleware(promiseMiddleware)

const store = createStore(reducer, middleware)

export default store
