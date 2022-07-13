import React from 'react';

import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import TopMovers from '../components/TopMovers/TopMovers';
import TokensTable from '../components/InfoTables/TokensTable';

import styles from '../InfoPages.module.css';

const InfoTokens = () => {
  return (
    <div className={styles.section}>
      <InfoRoutes showStar={true} prevRoute={'tokens'} />
      <TopMovers />
      <h2 className={`${styles.tokensTitle} font_30`}>All Tokens</h2>
      <TokensTable />
    </div>
  );
};

export default InfoTokens;
