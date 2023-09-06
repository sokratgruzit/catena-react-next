import React from 'react';

import { ProposalsText } from '../../../svg';

import styles from './RunningText.module.css';

const RunningText = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        <ProposalsText opacity={0.8} />
        <ProposalsText opacity={0.6} />
        <ProposalsText opacity={0.3} />
        <ProposalsText opacity={0.8} />
        <ProposalsText opacity={0.6} />
        <ProposalsText opacity={0.3} />
        <ProposalsText opacity={0.8} />
        <ProposalsText opacity={0.6} />
        <ProposalsText opacity={0.3} />
      </div>
    </div>
  );
};

export default RunningText;
