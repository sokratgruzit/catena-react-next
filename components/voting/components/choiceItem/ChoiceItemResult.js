import React from 'react';

import styles from './ChoiceItemResult.module.css';

const ChoiceItemResult = ({ choice }) => {
  return (
    <div>
      {/* <p className={styles.choice}>{choice.value}</p>
      <div className={styles.voteLengthContainer}>
        <span className={styles.placeHolder}></span>
        <span
          className={styles.voteLength}
          style={{ width: choice.percentage + '%' }}
        ></span>
      </div>
      <div className={styles.voteNumbers}>
        <p>{choice.totalVotes} Votes</p>
        <p>{choice.percentage}%</p>
      </div> */}
    </div>
  );
};

export default ChoiceItemResult;
