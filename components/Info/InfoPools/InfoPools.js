import React from 'react';

import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import Watchlist from '../components/Watchlist/Watchlist';
import PoolsTable from '../components/InfoTables/PoolsTable';

import styles from '../InfoPages.module.css';

const InfoPools = () => {
  return (
    <div className={styles.section}>
      <InfoRoutes showStar={true} prevRoute={'pools'} />
      <h2 className={`${styles.tokensTitle} font_30`}>All Pools</h2>
      <PoolsTable />
    </div>
  );
};

export default InfoPools;
