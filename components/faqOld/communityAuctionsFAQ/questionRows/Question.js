import React from 'react';

import { VectorSvg } from '../../../svg';

import styles from '../CommunityAuctionsFAQ.module.css';

const Question = ({ title, expandRow }) => {
  return (
    <div className={styles.questionWrapper}>
      <p className={`${styles.title} ${expandRow && styles.brighten}`}>{title}</p>
      <VectorSvg className={`${styles.vectorSvg} ${expandRow && styles.rotate}`} />
    </div>
  );
};

export default Question;
