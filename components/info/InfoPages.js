import React from 'react';
import { useState } from 'react';

import InfoCharts from './components/infoCharts/InfoCharts';
import InfoRoutes from './components/infoRoutes/InfoRoutes';
import SearchBar from './components/searchBar/SearchBar';
import TableTokens from './components/tableTokens/TableTokens';

import styles from './InfoPages.module.css';
import TopMovers from './components/topMovers/TopMovers';
import Section from './components/section/Section';

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
    mobileWidth: 15,
    id: 0,
  },
  {
    name: 'Stake Date ',
    mobileWidth: 15,
    width: 15,
    id: 1,
  },
  {
    name: 'Unstake Date',
    // mobileWidth: 15,
    width: 15,
    id: 2,
  },
  {
    name: 'Earn Reward',
    // mobileWidth: 15,
    width: 15,
    id: 3,
  },
  {
    name: 'Harvest',
    width: 15,
    mobileWidth: 15,
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

const InfoPages = ({ page, data }) => {
  return (
    <div className='pT-180'>
      <div className='container'>
        <div className={styles.section}>
          <InfoRoutes />
          <SearchBar />
          {!page && (
            <>
              <InfoCharts />
              <TableTokens title='Top Tokens' tableInfo={stakersRecord} tableHead={tableHead} />
              <TableTokens title='Top Pools' tableInfo={stakersRecord} tableHead={tableHead} />
              <TableTokens
                title='Transaction'
                tableInfo={stakersRecord}
                tableHead={tableHead}
                Table__Types={Table__Types}
              />
            </>
          )}
          {page === 'tokens' && (
            <>
              <TopMovers />
              <TableTokens title='All Tokens' tableInfo={stakersRecord} tableHead={tableHead} />
            </>
          )}
          {page === 'pools' && <TableTokens title='Top Pools' tableInfo={stakersRecord} tableHead={tableHead} />}
        </div>
      </div>
    </div>
  );
};

export default InfoPages;
