import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import { StarSvg } from '../../svg';
import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
// import TokensTable from '../components/InfoTables/TokensTable';
import TopMovers from '../components/TopMovers/TopMovers';

import styles from '../InfoPages.module.css';

const InfoTokens = () => {
  const router = useRouter();
  const favTokens = useSelector(state => state.favorites.tokens);
  return (
    <div className={styles.section}>
      <div className={styles.routesWrapper}>
        <div className={styles.space}></div>
        <InfoRoutes />
        <div className={styles.starWrapper}>
          <StarSvg className={styles.starSVG} onClick={() => router.push(`/info/tokens/watchlist`)} />
          {favTokens.length > 0 && <div className={styles.favCount}>{favTokens.length}</div>}
        </div>
      </div>
      <TopMovers />
      <h2>All Tokens</h2>
      {/* <TokensTable /> */}
    </div>
  );
};

export default InfoTokens;
