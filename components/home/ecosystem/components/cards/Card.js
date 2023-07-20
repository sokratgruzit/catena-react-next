// import { Button } from '@catena-network/catena-ui-module';
import Link from 'next/link';
import { useState } from 'react';

import styles from './Feature.module.css';

const Card = ({ title }) => {

  return (
    <div className={styles.container}>
      <div className={`${styles.openPositionsContainer}`}>
        rame
        <div className={styles.featuredJobs__btnContainer}>View all open positions</div>
      </div>
    </div>
  );
};

export default Card;
