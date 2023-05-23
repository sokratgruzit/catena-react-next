import React from 'react'
import Link from 'next/link'

const JoinUsSection = (props) => {
    const { title, description, text } = props

    return (
        <div>
            <h2 className='font-51'>{title}</h2>
            <p>{text}</p>
            <Link element="Community" href="/community" >
                <p>{description}</p>
            </Link>
        </div>
    )
}

export default JoinUsSection
