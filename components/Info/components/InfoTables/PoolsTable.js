import React, { useState, useEffect } from 'react';

import Table from '../../../UI/table/Table';
import Button from '../../../UI/button/Button';
import PageNumber from './PageNumber';
import { PaginationButtonSVG } from '../../../svg/InfoIcons';

import styles from './InfoTables.module.css';

const InfoTablePool_Data = [
  {
    id: 0,
    imgSrc: '../../images/Info/TopTokens/1.png',
    name: 'USDC/WBNB',
    volume_7d: 197.24,
    volume_24h: 327.09,
    reward_fees: 73.35,
    reward_apr: 67.37,
    liquidity: 27.59,
  },
  {
    id: 1,
    imgSrc: '../../images/Info/TopTokens/2.png',
    name: 'WBNB/BUSD',
    volume_24h: 1.0,
    volume_7d: 333.99,
    reward_fees: 66.47,
    reward_apr: 10.69,
    liquidity: 283.89,
  },
  {
    id: 2,
    imgSrc: '../../images/Info/TopTokens/3.png',
    name: 'USDT/WBNB',
    volume_7d: 371.04,
    volume_24h: 0.99,
    reward_fees: 64.65,
    reward_apr: 13.7,
    liquidity: 240.33,
  },
  {
    id: 3,
    imgSrc: '../../images/Info/TopTokens/4.png',
    name: 'GSD/USDC',
    volume_7d: 163.73,
    volume_24h: 1,
    reward_fees: 61.74,
    reward_apr: 32.26,
    liquidity: 45.0,
  },
  {
    id: 4,
    imgSrc: '../../images/Info/TopTokens/5.png',
    name: 'LUNA/BUSD',
    volume_7d: 143.11,
    volume_24h: 19.88,
    reward_fees: 23.98,
    reward_apr: 1.81,
    liquidity: 699.11,
  },
  {
    id: 5,
    imgSrc: '../../images/Info/TopTokens/6.png',
    name: 'Core/WBNB',
    volume_24h: 0.00018,
    volume_7d: 333.99,
    reward_fees: 64.65,
    reward_apr: 2.23,
    liquidity: 202.15,
  },
  {
    id: 6,
    imgSrc: '../../images/Info/TopTokens/7.png',
    name: 'LUNA/USDT',
    volume_7d: 371.04,
    volume_24h: 5.03,
    reward_fees: 66.47,
    reward_apr: 992.07,
    liquidity: 536.62,
  },
  {
    id: 7,
    imgSrc: '../../images/Info/TopTokens/8.png',
    name: 'USDT/BUSD',
    volume_7d: 61.74,
    volume_24h: 1.44,
    reward_fees: 61.74,
    reward_apr: 2.08,
    liquidity: 416.94,
  },
  {
    id: 8,
    imgSrc: '../../images/Info/TopTokens/9.png',
    name: 'GMT/USDC',
    volume_7d: 143.11,
    volume_24h: 30442.32,
    reward_fees: 25.98,
    reward_apr: 46.92,
    liquidity: 18.43,
  },
  {
    id: 9,
    imgSrc: '../../images/Info/TopTokens/10.png',
    name: 'Core/BUSD',
    volume_7d: 333.99,
    volume_24h: 2060.94,
    reward_fees: 64.65,
    reward_apr: 17.77,
    liquidity: 12.59,
  },
];

const PoolsTable = props => {
  const [pageCountPools, setPageCountPools] = useState(1);
  const itemsPerPage = props.itemsPerPage || 10;
  const [filteredData, setFilteredData] = useState(
    InfoTablePool_Data.slice(
      itemsPerPage * (pageCountPools - 1),
      itemsPerPage - 1 + pageCountPools,
    ),
  );

  return (
    <div className={styles.Table__wrapper}>
      <Table
        tableLabels={[
          '#',
          'Pool',
          'Volume 24H',
          'Volume 7D',
          'LP Reward Fees - 24H',
          'LP Reward APR',
          'Liquidity',
          '',
        ]}
        tableData={filteredData}
        type={'info_table_pools'}
      />
      <div className={styles.Table__buttons}>
        <Button
          customStyles={{ marginRight: '10px' }}
          title={
            <PaginationButtonSVG
              className={styles.back}
              pageCountTokens={pageCountPools}
              disabled={1}
            />
          }
          onClick={() => {
            if (pageCountPools > 1)
              setPageCountPools(prevValue => prevValue - 1);
          }}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={1}
          state={pageCountPools}
          setState={setPageCountPools}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={2}
          state={pageCountPools}
          setState={setPageCountPools}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={3}
          state={pageCountPools}
          setState={setPageCountPools}
        />
        <Button
          customStyles={{
            marginLeft: '10px',
          }}
          title={
            <PaginationButtonSVG
              className={styles.forward}
              pageCountTokens={pageCountPools}
              disabled={3}
            />
          }
          onClick={() => {
            if (pageCountPools < 3)
              setPageCountPools(prevValue => prevValue + 1);
          }}
        />
      </div>
    </div>
  );
};
export default PoolsTable;
