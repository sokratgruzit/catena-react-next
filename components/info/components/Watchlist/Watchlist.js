import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import { SmlArrowSvg } from '../../../svg';

import styles from './Watchlist.module.css';

const Watchlist = () => {
  const router = useRouter();
  const account = useSelector(state => state.connect.account);
  const { locale } = router;

  return (
    <div className={styles.container}>
      <div className={styles.goBackWrapper}>
        <div onClick={() => router.push(`/overview/info/pools`, undefined, { locale, address: account })} className={styles.goBackText}>
          <SmlArrowSvg />
          <p>Back To Tokens</p>
        </div>
      </div>
      <h2 className={`font_30 ${styles.title}`}>Your Watchlist</h2>

      {/* <Table
            tableLabels={[
              '#',
              'Name',
              'Price',
              'Price Change',
              'Volume 24H',
              'Liquidity',
              ''
            ]}
            tableData={InfoTableTokens_Data}
            type={'info_table_tokens_watchlist'}
          /> */}
    </div>
  );
};

export default Watchlist;
