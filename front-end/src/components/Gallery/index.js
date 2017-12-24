import React from 'react'

import ImageGallery from 'react-image-gallery'
import './Gallery.css'
import IMG_4543 from '../../IMG_4543.jpg'

class Gallery extends React.Component {
  render(){
    const images = [
      {
        original: IMG_4543,
        originalAlt: 'OAlt1',
        description: 'Some description1'
      },
      {
        original: IMG_4543,
        originalAlt: 'OAlt2',
        description: 'Some description2'
      }
    ]
    return (      
      <div className='col-lg-8 col-md-7'>
        <div className='gallery'>
          <ImageGallery items={images} showThumbnails={false} />
        </div>
      </div>
    )
  }
}

export default Gallery