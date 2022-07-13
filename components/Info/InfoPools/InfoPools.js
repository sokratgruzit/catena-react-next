import React from 'react';

import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import Watchlist from '../components/Watchlist/Watchlist';
import PoolsTable from '../components/InfoTables/PoolsTable';

import styles from '../InfoPages.module.css';

const InfoPools = () => {
  return (
    <div>
      <InfoRoutes />
      <Watchlist />
      <div className={styles.section}>
        <h2 className={`${styles.tokensTitle} font_30`}>All Pools</h2>
        <PoolsTable />
      </div>
    </div>
  );
};

export default InfoPools;
