import React from 'react';

import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import SearchBar from '../components/SearchBar/SearchBar';
import Watchlist from '../components/Watchlist/Watchlist';
import PoolsTable from '../components/InfoTables/PoolsTable';
// import InfoCharts from './components/InfoCharts';
// import InfoTables from './components/InfoTables';

import styles from '../InfoPages.module.css';

const InfoPools = () => {
  return (
    <div>
      <InfoRoutes />
      <Watchlist />
      <div className={styles.section}>
        <PoolsTable />
      </div>
      {/* <InfoCharts />
      <InfoTables /> */}
    </div>
  );
};

export default InfoPools;
