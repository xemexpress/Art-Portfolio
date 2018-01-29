import React from 'react'

const Description = props => {
  console.log(props.index)
  return (
    <div className='description'>
      {props.artist}<br />
      {props.descriptions[props.index]}
    </div>
  )
}

export default Description
