import React from 'react'
import { Link } from 'next/router'

const CareersCore = () => {
  return (
    <div>
      <h1>
        <span>Careers</span>
        <div className='ttl_row'>
          <span>at</span>
          <span className='ttl_red'>CATENA</span>
        </div>
      </h1>
      <div className='open-positions__btn-container'>
        <Link className='open-positions__btn'>Open positions</Link>
      </div>
    </div>
  )
}

export default CareersCore
