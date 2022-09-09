import React from 'react';

import styles from './ChoiceItemResult.module.css';

const ChoiceItemResult = ({ choice }) => {
  return (
    <div>
      <p className={styles.choice}>{choice}</p>
      <div className={styles.voteLengthContainer}>
        <span className={styles.placeHolder}></span>
        <span className={styles.voteLength}></span>
      </div>
      <div className={styles.voteNumbers}>
        <p>1,368,085.43 Votes</p>
        <p>93.08%</p>
      </div>
    </div>
  );
};

export default ChoiceItemResult;
