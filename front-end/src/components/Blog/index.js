import React from 'react'
import { connect } from 'react-redux'

import Article from './Article'
import agent from '../../agent'

import {
  BLOG_PAGE_LOADED,
  BLOG_PAGE_UNLOADED
} from '../../constants'

const mapStateToProps = state => ({
  articles: state.blog.articles,
  articlesCount: state.blog.articlesCount
})

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({
    type: BLOG_PAGE_LOADED,
    payload
  }),
  onUnload: () => dispatch({
    type: BLOG_PAGE_UNLOADED
  })
})

class Blog extends React.Component {
  componentWillMount(){
    this.props.onLoad(agent.Articles.all())
  }

  componentWillUnmount(){
    this.props.onUnload()
  }

  render(){
    if(!this.props.articles){
      return <div className='blog'>Loading articles...</div>
    }
  
    if(this.props.articles.length === 0){
      return <div className='blog'>No articles here yet.</div>
    }
  
    return (
      <div className='blog'>
        {
          this.props.articles.map(article => {
            return <Article article={article} key={article.id} />
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
