import React from 'react'

import FAQRow from './FAQRow'
import Expand from '../UI/expand/Expand'

import styles from './FAQ.module.css'

const FAQtest = ({ data }) => {
  return (
    <div className={styles.row}>
      {data.map(({ question, answer }, index) => (
        <Expand expandContent={<div>{answer}</div>} key={index}>
          <FAQRow question={question} />
        </Expand>
      ))}
    </div>
  )
}

export default FAQtest
