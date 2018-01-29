import React from 'react'
import marked from 'marked'

const Article = props => {
  const article = props.article

  // Format date
  let date = new Date(article.createdAt).toDateString()
  date = date.slice(4)
  date = date.slice(4,7) + date.slice(0,4) + date.slice(7)

  // Body
  const markup = { __html: marked(article.body) }
  
  return (
    <div className='blog-unit' key={article.id}>
      <img src={article.image} alt={article.id} />
      <div className='blog-date'>{date}</div>
      <div className='blog-body' dangerouslySetInnerHTML={markup}></div>
    </div>
  )
}

export default Article
