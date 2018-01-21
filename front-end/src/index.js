import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App'
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

const store = createStore(reducer, applyMiddleware(promiseMiddleware))

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
