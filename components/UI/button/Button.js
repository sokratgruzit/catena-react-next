import React from 'react'

import styles from './Button.module.css'

const Button = props => {
  let color = styles[props.type]

  return (
    <div
      className={`${styles.buttonWrap} ${color} ${props.className}`}
      style={props.customStyles}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  )
}

export default Button
