import React from 'react';

import InfoCharts from '../components/InfoCharts/InfoCharts';
import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import PoolsTable from '../components/InfoTables/PoolsTable';
import TokensTable from '../components/InfoTables/TokensTable';
import TransactionTable from '../components/InfoTables/TransactionTable';
import SearchBar from '../components/SearchBar/SearchBar';

import styles from '../InfoPages.module.css';

const InfoOverview = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.routesWrapperMain}>
          <InfoRoutes />
        </div>
        <SearchBar />
        <h2 className={styles.title}>CATENA Network Info & Analytics</h2>
        <InfoCharts />
        <h2 className={styles.title}>Top Tokens</h2>
        <TokensTable />
        <h2 className={styles.title}>Top Pools</h2>
        <PoolsTable />
        <h2 className={styles.title}>Transaction</h2>
        <TransactionTable />
      </div>
    </>
  );
};

export default InfoOverview;
