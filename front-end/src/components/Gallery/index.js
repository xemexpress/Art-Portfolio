import React from 'react'
import ImageGallery from 'react-image-gallery'

import IMG_4543 from './IMG_4543.jpg'
import IMG_4544 from './IMG_4544.jpg'
import './Gallery.css'

class Gallery extends React.Component {
  render(){
    const images = [
      {
        original: IMG_4543,
        originalAlt: 'OAlt1'
      },
      {
        original: IMG_4544,
        originalAlt: 'OAlt2'
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
          <div className='description'>
            {this.props.artist}<br />
            <i>Metal Folding</i>, 2017<br />
            Brass, silver
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
