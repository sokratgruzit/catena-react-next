import React from 'react';

import CornerDecor from '../../../UI/cornerDecor/CornerDecor';

import styles from './InfoCharts.module.css';

const InfoCharts = () => {
  return (
    <>
      <h2 className='ttl font-40'>CATENA Network Info & Analytics</h2>
      <div className={styles.Container}>
        <div className={styles.Chart}>
          <CornerDecor />
        </div>
        <div className={styles.Chart}>
          <CornerDecor />
        </div>
      </div>
    </>
  );
};

export default InfoCharts;
