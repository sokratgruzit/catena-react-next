import { useState } from 'react';

import styles from './FormChoice.module.css';

const FormChoice = ({ choice, handleChoiceInput, index, handleCloseInput }) => {
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
