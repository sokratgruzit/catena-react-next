import React from 'react';

import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import TopMovers from '../components/TopMovers/TopMovers';
import TokensTable from '../components/InfoTables/TokensTable';

import styles from '../InfoPages.module.css';

const InfoTokens = () => {
  return (
    <div>
      <InfoRoutes />
      <TopMovers />
      <div className={styles.section}>
        <h2 className={`${styles.tokensTitle} font_30`}>All Tokens</h2>
        <TokensTable />
      </div>
    </div>
  );
};

export default InfoTokens;
