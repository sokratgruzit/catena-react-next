import { CloseSvg } from '../../../svg'

import styles from './FormChoice.module.css'

const FormChoice = ({ choice, index, setFormData, setEditedField }) => {
  const handleChoiceInput = (e, index) => {
    setFormData(prevState => ({
      ...prevState,
      choices: prevState.choices.map((item, id) =>
        id === index ? { ...prevState.choices[id], value: e.target.value } : item,
      ),
    }))
    setEditedField(prevState => ({ ...prevState, choices: true }))
  }

  const handleCloseInput = index => {
    setFormData(prevState => ({
      ...prevState,
      choices: prevState.choices.filter((e, id) => id !== index),
    }))
  }
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder='Input choice text'
        type='text'
        name='input choice text'
        onChange={e => handleChoiceInput(e, index)}
        value={choice.value}
      />
      {index > 1 && (
        <div className={styles.close} onClick={e => handleCloseInput(index)}>
          <CloseSvg className={styles.closeSvg} />
        </div>
      )}
    </div>
  )
}

export default FormChoice
