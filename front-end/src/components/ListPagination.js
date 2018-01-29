import React from 'react'

const ListPagination = props => {
  const PER_PAGE = 1
  if(props.articlesCount <= PER_PAGE){
    return null
  }

  const range = []
  for(let i = 0; i < Math.ceil(props.articlesCount / PER_PAGE); i++){
    range.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
      &#60;
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
      &#62;
      </ul>
    </nav>
  )
}

export default ListPagination
