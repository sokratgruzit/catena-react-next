import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';

import { StarSvg } from '../../svg/index';
import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import PoolsTable from '../components/InfoTables/PoolsTable';
import { TableElement } from '@catena-network/catena-ui-module';

import styles from '../InfoPages.module.css';

const InfoPools = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className='pT-180'>
      <div className='container'>
        <div className={styles.section}>
          <div className={styles.routesWrapper}>
            {/* <div className={styles.space}></div> */}
            <InfoRoutes />
            {/* <div className={styles.starWrapper}>
              <StarSvg className={styles.starSVG} onClick={() => router.push(`/overview/info/pools/watchlist`)} />
              <div className={styles.favCount}>3</div>
            </div> */}
          </div>
          <div className='container'>
            <h2 style={{ color: '#162029' }} className='font-40 ttl'>All Pools</h2>
          </div>
          <PoolsTable />
            <TableElement
              type={"pagination"}
              currentPage={currentPage}
              totalCount={20}
              onPageChange={(page) => setCurrentPage(page)}
              customStyle={{ margin: '20px 0 40px 0' }}
            />
        </div>
      </div>
    </div>
  );
};

export default InfoPools;
