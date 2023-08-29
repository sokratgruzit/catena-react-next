import React from 'react';
import { useState } from 'react';

import InfoCharts from '../components/InfoCharts/InfoCharts';
import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import SearchBar from '../components/SearchBar/SearchBar';
import TableTokens from '../components/tableTokens/TableTokens'

import styles from '../InfoPages.module.css';

const Table__Types = [
  {
    type: 'All',
  },
  {
    type: 'Swaps',
  },
  {
    type: 'Adds',
  },
  {
    type: 'Removes',
  },
];

const tableHead = [
  {
    name: 'Staked Amount',
    width: 15,
    mobileWidth: 45,
    id: 0,
  },
  {
    name: 'Stake Date ',
    width: 15,
    id: 1,
  },
  {
    name: 'Unstake Date',
    width: 15,
    id: 2,
  },
  {
    name: 'Earn Reward',
    width: 15,
    id: 3,
  },
  {
    name: 'Harvest',
    width: 15,
    mobileWidth: 45,
    id: 4,
  },
];
const stakersRecord = [
  {
    id: 12123,
    amount: '1,220,000.2',
    staketime: '01.02.2023 10:00AM',
    unstaketime: '01.02.2023 08:15PM',
    CML: 'CML',
    realtimeRewardPerBlock: '1,132,000.1',
  },
  {
    id: 2121234,
    amount: '1,220,000.2',
    staketime: '01.02.2023 10:00AM',
    unstaketime: '01.02.2023 08:15PM',
    CML: 'CML',
    realtimeRewardPerBlock: '1,132,000.1',
  },
  {
    id: 1221235,
    amount: '1,220,000.2',
    staketime: '01.02.2023 10:00AM',
    unstaketime: '01.02.2023 08:15PM',
    CML: 'CML',
    realtimeRewardPerBlock: '1,132,000.1',
  },
];

const InfoOverview = () => {
  return (
    <div className='pT-180'>
      <div className='container'>
        <div className={styles.section}>
          <InfoRoutes />
          <SearchBar />
          <InfoCharts />
          <TableTokens title="Top Tokens" tableInfo={stakersRecord} tableHead={tableHead} />
          <TableTokens title="Top Pools" tableInfo={stakersRecord} tableHead={tableHead} />
          <TableTokens title="Transaction" tableInfo={stakersRecord} tableHead={tableHead} Table__Types={Table__Types} />
          {/* <TransactionTable tableHead={tableHead} tableInfo={stakersRecord}/> */}
        </div>
      </div>
    </div>
  );
};

export default InfoOverview;
