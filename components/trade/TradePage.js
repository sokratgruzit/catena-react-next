import React from 'react';
import { useState } from 'react';

import styles from './TradePage.module.css';
import TradeRoutes from './components/tradeRoutes/TradeRoutes';

const TradePage = ({ page, data }) => {
  return (
    <div className='pT-180'>
      <div className='container'>
        <div className={styles.section}>
          <TradeRoutes />
          {!page &&
            <>
              rame1
            </>
          }
          {page === 'staking' &&
            <>
             rame2
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default TradePage;
