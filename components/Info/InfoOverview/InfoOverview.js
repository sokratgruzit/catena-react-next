import React from 'react';

import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import SearchBar from '../components/SearchBar/SearchBar';
import TokensTable from '../components/InfoTables/TokensTable';
import PoolsTable from '../components/InfoTables/PoolsTable';
import TransactionTable from '../components/InfoTables/TransactionTable';
import InfoCharts from '../components/InfoCharts/InfoCharts';

import styles from '../InfoPages.module.css';

const InfoOverview = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.routesWrapperMain}>
          <InfoRoutes />
        </div>
        <SearchBar />
        <h2 className={styles.title}>CoreMultiChain Info & Analytics</h2>
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
