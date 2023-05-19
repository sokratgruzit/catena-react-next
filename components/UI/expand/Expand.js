import React, { useState } from 'react'

import styles from './Expand.module.css'

const Expand = props => {
  const [expandRow, setExpandRow] = useState(false)
  //always pass component as child

  const toggleExpand = () => setExpandRow(prevState => !prevState)

  const childrenWithProps = React.Children.map(props.children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        expandRow,
        toggleExpand,
      })
    }
    return child
  })

  const buttonWithProps = React.Children.map(props.expandButton, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        expandRow,
        toggleExpand,
      })
    }
    return child
  })

  return (
    <div className={props.className}>
      <div onClick={props.onChildClick && toggleExpand}>{props.passingjSX ? props.children : childrenWithProps}</div>
      <div className={`${styles.expandContent} ${expandRow && styles.expandTableRow}`}>{props.expandContent}</div>
      {buttonWithProps}
    </div>
  )
}

export default Expand
