import React from 'react'
import { connect } from 'react-redux'
import ImageGallery from 'react-image-gallery'

import Description from './Description'
import agent from '../../agent'
import './Gallery.css'

const mapStateToProps = state => ({
  artist: state.common.artist,
  units: state.gallery.units
})

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({
    type: 'GALLERY_PAGE_LOADED',
    payload
  }),
  onUnload: () => dispatch({
    type: 'GALLERY_PAGE_UNLOADED'
  })
})

class Gallery extends React.Component {
  componentWillMount(){
    this.props.onLoad(agent.Units.fromCollection(this.props.params.slug))
  }

  componentWillUnmount(){
    this.props.onUnload()
  }
  
  // Customize ImageGallery
  _renderLeftNav(onClick, disabled) {
    return (
      <button
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick} />
    )
  }

  _renderRightNav(onClick, disabled) {
    return (
      <button
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={onClick}/>
    )
  }

  render(){
    if(this.props.units){
      let items = [], descriptions = []
      this.props.units.forEach(unit => {
        items.push({
          original: unit.image,
          originalAlt: `Pos at ${unit.pos}`
        })
        descriptions.push(unit.text)
      })
      console.log(items, descriptions)
      return (
        <div className='gallery'>
          <ImageGallery
            items={items}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            renderLeftNav={this._renderLeftNav.bind(this)}
            renderRightNav={this._renderRightNav.bind(this)} />
          <Description
            artist={this.props.artist}
            descriptions={descriptions} />
        </div>
      )
    }
    return <h1>Nothing</h1>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
