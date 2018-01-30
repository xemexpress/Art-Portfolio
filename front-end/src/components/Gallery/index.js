import React from 'react'
import { connect } from 'react-redux'
import ImageGallery from 'react-image-gallery'

import Description from './Description'
import agent from '../../agent'
import './Gallery.css'

import {
  GALLERY_PAGE_LOADED,
  GALLERY_PAGE_UNLOADED
} from '../../constants'

const mapStateToProps = state => ({
  artist: state.common.artist,
  items: state.gallery.items,
  descriptions: state.gallery.descriptions,
  max_index: state.gallery.max_index
})

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({
    type: GALLERY_PAGE_LOADED,
    payload
  }),
  onUnload: () => dispatch({
    type: GALLERY_PAGE_UNLOADED
  })
})

class Gallery extends React.Component {
  constructor(){
    super()
    this.state = {
      index: 0
    }
  }

  componentWillMount(){
    this.props.onLoad(agent.Units.fromCollection(this.props.params.slug))
  }

  componentWillUnmount(){
    this.props.onUnload()
  }
  
  componentWillUpdate(nextProps, nextState){
    if(nextProps.params.slug !== this.props.params.slug){
      this.props.onLoad(agent.Units.fromCollection(nextProps.params.slug))
    }
  }

  // Customize ImageGallery
  _renderLeftNav(onClick, disabled) {
    const previous = () => {
      if(this.state.index === 0){
        this.setState({
          index: this.props.max_index
        })
      }else{
        this.setState({
          index: this.state.index - 1
        })
      }
      onClick()
    }

    return (
      <button
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={previous} />
    )
  }

  _renderRightNav(onClick, disabled) {
    const next = () => {
      if(this.state.index === this.props.max_index){
        this.setState({
          index: 0
        })
      }else{
        this.setState({
          index: this.state.index + 1
        })
      }
      onClick()
    }
    
    return (
      <button
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={next}/>
    )
  }

  render(){
    if(this.props.items !== null){
      return (
        <div className='gallery'>
          <ImageGallery
            items={this.props.items}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            renderLeftNav={this._renderLeftNav.bind(this)}
            renderRightNav={this._renderRightNav.bind(this)} />
          <Description
            artist={this.props.artist}
            descriptions={this.props.descriptions}
            index={this.state.index} />
        </div>
      )
    }
    return <h2>&nbsp;&nbsp;&nbsp;&nbsp;No images in this collection <i>"{this.props.params.slug}"</i> ...yet</h2>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
