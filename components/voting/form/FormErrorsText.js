import React from 'react'

import styles from './Form.module.css'

const FormErrorsText = ({ text }) => {
  return <p className={styles.formErrorsText}>{text}</p>
}

export default FormErrorsText
