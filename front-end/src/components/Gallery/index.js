import React from 'react'
import ImageGallery from 'react-image-gallery'

import Description from './Description'
import './Gallery.css'

class Gallery extends React.Component {
  render(){
    if(this.props.images){
      return (
        <div className='gallery'>
          <ImageGallery
            items={this.props.images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false} />
          <Description
            artist={this.props.artist} />
        </div>
      )
    }
    return null
  }
}

export default Gallery