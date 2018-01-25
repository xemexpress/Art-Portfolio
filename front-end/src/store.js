import { createStore, applyMiddleware, combineReducers } from 'redux'
import { promiseMiddleware } from './middleware'

import common from './reducers/common'
import blog from './reducers/blog'
import gallery from './reducers/gallery'
import about from './reducers/about'

const reducer = combineReducers({
  common,
  blog,
  gallery,
  about
})

const middleware = applyMiddleware(promiseMiddleware)

const store = createStore(reducer, middleware)

export default store
