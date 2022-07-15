import React from 'react';
import { useRouter } from 'next/router';

import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import TopMovers from '../components/TopMovers/TopMovers';
import TokensTable from '../components/InfoTables/TokensTable';
import { StarSVG } from '../../svg/InfoIcons';

import styles from '../InfoPages.module.css';

const InfoTokens = () => {
  const router = useRouter();
  return (
    <div className={styles.section}>
      <div className={styles.routesWrapper}>
        <div className={styles.space}></div>
        <InfoRoutes />
        <div className={styles.starWrapper}>
          <StarSVG
            className={styles.starSVG}
            onClick={() => router.push(`/info/tokens/watchlist`)}
          />
          <div className={styles.favCount}>3</div>
        </div>
      </div>
      <TopMovers />
      <h2 className={`${styles.tokensTitle} font_30`}>All Tokens</h2>
      <TokensTable />
    </div>
  );
};

export default InfoTokens;
