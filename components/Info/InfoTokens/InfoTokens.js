import React from 'react';
import { useState } from 'react';
// import { StarSvg } from '../../svg';
import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import TableTokens from '../../Info/components/tableTokens/TableTokens'
import TopMovers from '../components/TopMovers/TopMovers';
import styles from '../InfoPages.module.css';
import SearchBar from '../components/SearchBar/SearchBar';
// import Link from 'next/link';
import { TableElement } from '@catena-network/catena-ui-module';

const InfoTokens = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const favTokens = useSelector(state => state.favorites.tokens);
  return (
    <div className='pT-180'>
      <div className='container'>
        <div className={styles.section}>
          <div className={styles.routesWrapper}>
            <div className={styles.space}></div>
            <InfoRoutes />
            {/* <Link href={`/overview/info/tokens/watchlist`}>
            <StarSvg className={styles.starSVG}/>
            {favTokens.length > 0 && <div className={styles.favCount}>{favTokens.length}</div>}
          </Link> */}
          </div>
          <SearchBar />
          <TopMovers />
          <div className='container'>
            <h2 className='ttl font-40'>All Tokens</h2>
          </div>
          <TableTokens />
          <TableElement
            type={"pagination"}
            currentPage={currentPage}
            totalCount={20}
            onPageChange={(page) => setCurrentPage(page)}
            customStyle={{ margin: '40px 0 80px 0' }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoTokens;
