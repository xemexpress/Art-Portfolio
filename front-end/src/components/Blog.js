import React from 'react'
import { connect } from 'react-redux'

import ArticlePreview from './ArticlePreview'
import agent from '../agent'

const mapStateToProps = state => ({
  articles: state.articles
})

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({
    type: 'BLOG_PAGE_LOADED',
    payload: payload
  })
})

class Blog extends React.Component {
  componentWillMount(){
    this.props.onLoad(agent.Articles.all())
  }

  render(){
    if(!this.props.articles){
      return <div>Loading articles...</div>
    }
  
    if(this.props.articles.length === 0){
      return <div>No articles here yet.</div>
    }
  
    return (
      <div className='blog'>
        {
          this.props.articles.map(article => {
            return <ArticlePreview article={article} key={article.id} />
          })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
