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
    name: 'Name',
    width: 15,
    mobileWidth: 45,
    id: 0,
  },
  {
    name: 'Price',
    width: 15,
    id: 1,
  },
  {
    name: 'PriceChange',
    width: 15,
    id: 2,
  },
  {
    name: 'Reward fees',
    width: 15,
    id: 3,
  },
  {
    name: 'Reward',
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
