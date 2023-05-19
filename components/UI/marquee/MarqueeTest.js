import React, { useState, useEffect } from 'react'

import styles from './MarqueeTest.module.css'

const MaruqeeTest = props => {
  const [lineElements, setLineElements] = useState([])

  useEffect(() => {
    if (props.label === 'voting') {
      let lineItems = []

      for (let i = 0; i < props.lineElementsCount; i++) {
        lineItems.push(
          <div style={{ width: 100 / props.lineElementsCount + '%' }} className={styles.marqueeItem} key={i}>
            {i}
          </div>,
        )
      }

      setLineElements(lineItems)
    }
  }, [props.label, props.lineElementsCount])

  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marqueeLine}>{lineElements}</div>
      <div className={styles.marqueeLine2}>{lineElements}</div>
    </div>
  )
}

export default MaruqeeTest
