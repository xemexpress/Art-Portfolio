import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';

import App from './components/App'
import Blog from './components/Blog'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import store from './store'

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Blog} />
        <Route path='gallery/:slug' component={Gallery} />
        <Route path='contact' component={Contact} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
