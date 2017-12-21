import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='gallery'></div>
        <div className='nav'>
          <div className='artist-name'>YUEN PIK KWAN</div>
          <div className='artist-title'>Metal Maker & Multimedia Designer</div>
          <ul className='navbar'>
            <li className='nav-item'>
              <a>Blog</a>
            </li>
            <li className='nav-item'>
              <a>Crafts</a>
            </li>
            <li className='nav-item'>
              <a>Design</a>
            </li>
            <li className='nav-item'>
              <a>About</a>
            </li>
            <li className='nav-item'>
              <a>Contact</a>
            </li>
          </ul>
          <div className='nav-deco'>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
