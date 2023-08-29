import React from 'react';
import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import TableTokens from '../../Info/components/tableTokens/TableTokens'
import TopMovers from '../components/TopMovers/TopMovers';
import SearchBar from '../components/SearchBar/SearchBar';

import styles from '../InfoPages.module.css';
import { StarSvg } from '../../svg';
import Link from 'next/link';

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
  {
    name: '',
    width: 10,
    id: 5,
    mobileWidth: 35,
    position: 'right',
    className: 'buttons-th',
    onClick: index => console.log(index),
  },
  {
    name: '',
    width: 7,
    id: 6,
    mobileWidth: 20,
    position: 'right',
    className: 'buttons-th',
    onClick: index => console.log(index),
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

const InfoTokens = () => {
  return (
    <div className='pT-180'>
      <div className='container'>
        <div className={styles.section}>
        <div className={styles.routesWrapper}>
            <div className={styles.space}></div>
            <InfoRoutes />
            <Link href={'/overview/info/pools/watchlist'}>
              <div className={styles.starWrapper}>
                <StarSvg className={styles.starSVG} />
                <div className={styles.favCount}>3</div>
              </div>
            </Link>
          </div>
          <SearchBar />
          <TopMovers />
          <TableTokens title="Top Tokens" tableInfo={stakersRecord} tableHead={tableHead} />
        </div>
      </div>
    </div>
  );
};

export default InfoTokens;
