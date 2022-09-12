import React from 'react';

import styles from './ChoiceItemRow.module.css';

const ChoiceItemRow = ({ choice, setVotingChoice, index }) => {
  return (
    <label
      onClick={e => setVotingChoice(choice)}
      className={styles.radioContainer}
    >
      {choice.value}
      <input
        type='radio'
        name={'choice'}
        onChange={() => setVotingChoice(choice)}
      />
      <span className={styles.radioCheckmark}></span>
    </label>
  );
};

export default ChoiceItemRow;
