import React from 'react'

const Title = props => {
  return (
    <div className='left'>
      <h1>
        <span className='ttl_red'>{props.spanOne}</span>
        <span>{props.spanTwo}</span>
      </h1>
    </div>
  )
}

export default Title
