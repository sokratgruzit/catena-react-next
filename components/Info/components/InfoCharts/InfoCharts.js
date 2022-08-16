import React from 'react';

import CornerDecor from '../../../UI/cornerDecor/CornerDecor';

import styles from './InfoCharts.module.css';

const InfoCharts = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Chart}>
        <CornerDecor />
      </div>
      <div className={styles.Chart}>
        <CornerDecor />
      </div>
    </div>
  );
};

export default InfoCharts;
