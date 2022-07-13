import React from 'react';
import Image from 'next/image';

import InfoRoutes from '../components/InfoRoutes/InfoRoutes';
import SearchBar from '../components/SearchBar/SearchBar';
import TokensTable from '../components/InfoTables/TokensTable';
import PoolsTable from '../components/InfoTables/PoolsTable';
import TransactionTable from '../components/InfoTables/TransactionTable';
import InfoCharts from '../components/InfoCharts/InfoCharts';
import Gradient from '../../../public/images/Info/background/gradient.png';
import smokeBackground from '../../../public/images/Info/background/smokeBackground.png';

// import InfoCharts from './components/InfoCharts';
// import InfoTables from './components/InfoTables';

import styles from '../InfoPages.module.css';

const InfoOverview = () => {
  return (
    <>
      <div>
        <InfoRoutes />
        <SearchBar />

        <div className={styles.section}>
          <h2 className={styles.title}>CoreMultiChain Info & Analytics</h2>
          <InfoCharts />
          {/* <div className={styles.gradient}></div> */}
          <h2 className={styles.title}>Top Tokens</h2>
          <TokensTable />
          <h2 className={styles.title}>Top Pools</h2>
          <PoolsTable />
          <h2 className={styles.title}>Transaction</h2>
          <TransactionTable />
        </div>
      </div>
      {/* <div className={styles.gradient}>
        <Image src={Gradient} alt='gradient' width='500px' height='500px' />/
        <Image src={smokeBackground} alt='shit' quality={100} />
        <div className={styles.test}></div>
      </div> */}
    </>
  );
};

export default InfoOverview;
