import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Gallery from './components/Gallery'
// import mockImage1 from './IMG_4543.jpg'
// import mockImage2 from './IMG_4544.jpg'

class App extends React.Component {
  render() {
    // const images = [{
    //   original: mockImage1,
    //   originalAlt: 'picture 1',
    //   description: 'Picture 1'
    // }]

    // const images = [{
    //   original: mockImage1,
    //   originalAlt: 'picture 1',
    //   description: 'Picture 1',
    //   sizes:'200px'
    // }, {
    //   original: mockImage2,
    //   originalAlt: 'picture 2',
    //   description: 'Picture 2'
    // }]
    
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Gallery />
          <div className='col-lg-4 col-md-5'>
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
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
