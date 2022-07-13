import React from 'react';

import { useRouter } from 'next/router';
import Table from '../../../UI/table/Table';
import { GoBackSVG } from '../../../svg/InfoIcons';

import styles from './Watchlist.module.css';

const Watchlist = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.container}>
      <div className={styles.goBackWrapper}>
        <div
          onClick={() => router.push(`/info/tokens`)}
          className={styles.goBackText}
        >
          <GoBackSVG />
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
