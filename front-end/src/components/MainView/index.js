import React from 'react'
import ImageGallery from 'react-image-gallery'

import Description from './Description'
import IMG_4543 from './IMG_4543.jpg'
import IMG_4544 from './IMG_4544.jpg'
import './Gallery.css'

class MainView extends React.Component {
  render(){
    const images = [
      {
        original: IMG_4543,
        originalAlt: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: IMG_4544,
        originalAlt: 'http://lorempixel.com/250/150/nature/2/'
      }
    ]
    return (      
      <div className='gallery-base col-lg-8 col-md-7'>
        <div className='gallery'>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false} />
          <Description
            artist={this.props.artist} />
        </div>
      </div>
    )
  }
}

export default MainView
