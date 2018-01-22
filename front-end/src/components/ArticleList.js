import React from 'react'

import ArticlePreview from './ArticlePreview'

const ArticleList = props => {
  if(!props.articles){
    return <div>Loading articles...</div>
  }

  if(props.articles.length === 0){
    return <div>No articles here yet.</div>
  }

  return (
    <div className='blog'>
      {
        props.articles.map(article => {
          return <ArticlePreview article={article} key={article.id} />
        })
      }
    </div>
  )
}

export default ArticleList
