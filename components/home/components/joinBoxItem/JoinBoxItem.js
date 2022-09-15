import React from 'react';

import styles from './JoinBoxItem.module.css';

const JoinBoxItem = ({ num, type, subTitle }) => {
  return (
    <div className={styles.wrapper}>
      <h3>
        {num} <span>{type}</span>
      </h3>
      <p>{subTitle}</p>
    </div>
  );
};

export default JoinBoxItem;
