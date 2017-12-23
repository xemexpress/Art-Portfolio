import React from 'react'

import './Gallery.css'
import IMG_4543 from '../../IMG_4543.jpg'

class Gallery extends React.Component {
  render(){
    return (
      <div className='gallery col-lg-8 col-md-7'>
        <img className='image-gallery-image' src={IMG_4543} alt='mock-up' />
      </div>
    )
  }
}

export default Gallery