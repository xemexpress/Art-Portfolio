import React from 'react'

import Gallery from '../Gallery'
// Testing Purpose
// import IMG_4543 from './IMG_4543.jpg'
// import IMG_4544 from './IMG_4544.jpg'

class MainView extends React.Component {
  render(){
    // const images = [
    //   {
    //     original: IMG_4543,
    //     originalAlt: 'http://lorempixel.com/250/150/nature/1/',
    //   },
    //   {
    //     original: IMG_4544,
    //     originalAlt: 'http://lorempixel.com/250/150/nature/2/'
    //   }
    // ]
    const images = null

    return (      
      <div className='gallery-base col-lg-8 col-md-7'>
        {
          images ?
            <Gallery
              images={images}
              artist={this.props.artist} />
            : <h1>&nbsp;&nbsp;&nbsp;&nbsp;Loading</h1>
        }
      </div>
    )
  }
}

export default MainView
