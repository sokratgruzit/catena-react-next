import { useState } from 'react';

import styles from './FormChoice.module.css';

const FormChoice = ({ choice, handleChoiceInput, index, handleCloseInput }) => {
  return (
    <div>
      <input
        className={styles.input}
        placeholder='Input choice text'
        type='text'
        name='input choice text'
        onChange={e => handleChoiceInput(e, index)}
        value={choice}
      />
      {index > 1 && <div onClick={e => handleCloseInput(index)}>close</div>}
    </div>
  );
};

export default FormChoice;
