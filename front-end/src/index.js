import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App'

const defaultState = {
  artist: 'Yuen Pik Kwan',
  concentration: 'Metal Maker & Multimedia Designer',
  units: null
}
const reducer = function(state = defaultState, action){
  switch(action.type){
    case 'TOGGLE':
      return { ...state, checked: !state.checked }
    default:
  }
  return state
}

const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
