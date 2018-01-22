import React from 'react'
import { connect } from 'react-redux'

import Gallery from '../Gallery'
import ArticleList from '../ArticleList'
import agent from '../../agent'
// Testing Purpose
// import IMG_4543 from './IMG_4543.jpg'
// import IMG_4544 from './IMG_4544.jpg'

const mapStateToProps = state => ({
  artist: state.artist,
  articles: state.articles
})

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

    return (
      <div className='main-view col-lg-8 col-md-7'>
      {
        images ?
        <Gallery
          images={images}
          artist={this.props.artist} />
        :
        <ArticleList
          articles={this.props.articles} />
      }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
