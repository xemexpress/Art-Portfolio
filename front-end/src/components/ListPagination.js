import React from 'react'

import {
  PER_PAGE
} from '../constants'

const ListPagination = props => {
  if(props.articlesCount <= PER_PAGE){
    return null
  }

  const range = []
  for(let i = 0; i < Math.ceil(props.articlesCount / PER_PAGE); i++){
    range.push(i)
  }

  const previousPage = ev => {
    ev.preventDefault()
    props.onSetPage(props.currentPage - 1)
  }

  const nextPage = ev => {
    ev.preventDefault()
    props.onSetPage(props.currentPage + 1)
  }

  return (
    <nav>
      <ul className='pagination'>
        {
          props.currentPage !== 0 ?
          <span
            className='getPointer'
            onClick={previousPage}>
            &#60;
          </span>
          : <span>&#60;</span>
        }
        {
          range.map(n => {
            const isCurrent = n === props.currentPage
            const handleClick = ev => {
              ev.preventDefault()
              props.onSetPage(n)
            }
            return (
              <li
                className={ isCurrent ? 'page-item active' : 'page-item' }
                onClick={handleClick}
                key={n.toString()}>
                <a className='page-link'>{n + 1}</a>
              </li>
            )
          })
        }
        {
          props.currentPage !== range[range.length - 1] ?
          <span
            className='getPointer'
            onClick={nextPage}>
            &#62;
          </span>
          : <span>&#62;</span>
        }
      </ul>
    </nav>
  )
}

export default ListPagination
