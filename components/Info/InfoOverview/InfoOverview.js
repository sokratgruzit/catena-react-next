import React from 'react';

import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import SearchBar from '../components/SearchBar/SearchBar';
import TokensTable from '../components/InfoTables/TokensTable';
import PoolsTable from '../components/InfoTables/PoolsTable';
import TransactionTable from '../components/InfoTables/TransactionTable';
import InfoCharts from '../components/InfoCharts/InfoCharts';
// import InfoCharts from './components/InfoCharts';
// import InfoTables from './components/InfoTables';

import styles from '../InfoPages.module.css';

const InfoOverview = () => {
  return (
    <div>
      <InfoRoutes />
      <SearchBar />
      <InfoCharts />
      <div className={styles.section}>
        {/* <div className={styles.gradient}></div> */}
        <h2 className={styles.title}>Top Tokens</h2>
        <TokensTable />
        <h2 className={styles.title}>Top Pools</h2>
        <PoolsTable />
        <h2 className={styles.title}>Transaction</h2>
        <TransactionTable />
      </div>
    </div>
  );
};

export default InfoOverview;
