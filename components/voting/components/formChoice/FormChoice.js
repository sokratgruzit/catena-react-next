import { useState } from 'react';

import styles from './FormChoice.module.css';

const FormChoice = ({ choice, index, setFormData }) => {
  const handleChoiceInput = (e, index) => {
    setFormData(prevState => ({
      ...prevState,
      choices: prevState.choices.map((item, id) =>
        id === index ? e.target.value : item,
      ),
    }));
  };

  const handleCloseInput = index => {
    setFormData(prevState => ({
      ...prevState,
      choices: prevState.choices.filter((e, id) => id !== index),
    }));
  };
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder='Input choice text'
        type='text'
        name='input choice text'
        onChange={e => handleChoiceInput(e, index)}
        value={choice}
      />
      {index > 1 && (
        <div className={styles.close} onClick={e => handleCloseInput(index)}>
          X
        </div>
      )}
    </div>
  );
};

export default FormChoice;
