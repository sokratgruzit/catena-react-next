import React from 'react';

import InfoCharts from '../components/InfoCharts/InfoCharts';
import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import PoolsTable from '../components/InfoTables/PoolsTable';
// import TokensTable from '../components/InfoTables/TokensTable';
import TransactionTable from '../components/InfoTables/TransactionTable';
import SearchBar from '../components/SearchBar/SearchBar';
import TableTokens from '../components/tableTokens/TableTokens'
import { useState } from 'react';
import { TableElement } from '@catena-network/catena-ui-module';

import styles from '../InfoPages.module.css';

const InfoOverview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className='pT-180'>
      <div className='container'>
        <div className={styles.section}>
          <div className={styles.routesWrapperMain}>
            <InfoRoutes />
          </div>
          <SearchBar />
          <h2 className='ttl font-40'>CATENA Network Info & Analytics</h2>
          <InfoCharts />
          <h2 className='ttl font-40'>Top Tokens</h2>
          <TableTokens />
          <TableElement
            type={"pagination"}
            currentPage={currentPage}
            totalCount={20}
            onPageChange={(page) => setCurrentPage(page)}
            customStyle={{ margin: '20px 0 40px 0' }}
          />
          <h2 className='ttl font-40'>Top Pools</h2>
          <PoolsTable />
          <TableElement
            type={"pagination"}
            currentPage={currentPage}
            totalCount={20}
            onPageChange={(page) => setCurrentPage(page)}
            customStyle={{ margin: '20px 0 40px 0' }}
          />
          <h2 className='ttl font-40'>Transaction</h2>
          <TableTokens />
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

export default InfoOverview;
