import React from 'react'
import marked from 'marked'

const Description = props => {
  if(props.descriptions){
    const markup = { __html: marked(`${props.artist}<br />${props.descriptions[props.index]}`) }
    return (
      <div className='description' dangerouslySetInnerHTML={markup}></div>
    )
  }
  return null
}

export default Description
