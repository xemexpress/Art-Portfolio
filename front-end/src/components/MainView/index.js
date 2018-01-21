import React from 'react'
import { connect } from 'react-redux'

import Gallery from '../Gallery'
import agent from '../../agent'
// Testing Purpose
// import IMG_4543 from './IMG_4543.jpg'
// import IMG_4544 from './IMG_4544.jpg'

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({
    type: 'BLOG_PAGE_LOADED',
    payload: payload
  })
})

class MainView extends React.Component {
  componentWillMount(){
    this.props.onLoad(agent.Articles.all())
  }

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

    if(images){
      return (      
        <div className='gallery-base col-lg-8 col-md-7'>
          <Gallery
            images={images}
            artist={this.props.artist} />
        </div>
      )
    }else{
      return <h1>&nbsp;&nbsp;&nbsp;&nbsp;Loading</h1>
    }
  }
}

export default connect(()=>({}), mapDispatchToProps)(MainView)
