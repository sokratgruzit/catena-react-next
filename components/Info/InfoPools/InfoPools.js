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
    <div className={styles.section}>
      <div className={styles.routesWrapper}>
        <div className={styles.space}></div>
        <InfoRoutes />
        <div className={styles.starWrapper}>
          <StarSvg className={styles.starSVG} onClick={() => router.push(`/home/info/pools/watchlist`)} />
          <div className={styles.favCount}>3</div>
        </div>
      </div>
      <h2 style={{ color: '#162029' }} className={`${styles.tokensTitle} font-40 ttl`}>All Pools</h2>
      <PoolsTable />
      <div style={{marginTop: '50px'}}>
        <TableElement
          type={"pagination"}
          currentPage={currentPage}
          totalCount={20}
          onPageChange={(page) => setCurrentPage(page)}
        // color={"#F3E4D2"}
        />
      </div>
    </div>
  );
};

export default InfoPools;
