import React from 'react';
import { useState } from 'react';

import styles from './TradePage.module.css';
import TradeRoutes from './components/tradeRoutes/TradeRoutes';
import { Button, Input, HelpText } from '@catena-network/catena-ui-module';
import Expand from '../UI/expand/Expand';
import AuctionSchedule from '../earn/components/auctionSchedule/AuctionSchedule';
import AuctionScheduleExpand from '../earn/components/auctionSchedule/AuctionScheduleExpand';
import ArrowDiagonalSvg from '../svg/ArrowDiagonalSvg';
import ArrowWithBorderSvg from '../svg/ArrowWithBorderSvg';
import ExpandButton from '../UI/expand/ExpandButton';
import AuctionTable from '../earn/components/auctionTable/AuctionTable';

const stakersRecord = [
  {
    id: 12123,
    amount: '1,220,000.2',
    staketime: '01.02.2023 10:00AM',
    unstaketime: '01.02.2023 08:15PM',
    CML: 'CML',
    realtimeRewardPerBlock: '1,132,000.1',
    address: "0xfCcA771Dc22359E4D6e9e9daC743EAb38f51EECe"
  },
  {
    id: 2121234,
    amount: '1,220,000.2',
    staketime: '01.02.2023 10:00AM',
    unstaketime: '01.02.2023 08:15PM',
    CML: 'CML',
    realtimeRewardPerBlock: '1,132,000.1',
    address: "0xfCcA771Dc22359E4D6e9e9daC743EAb38f51EECe"
  },
  {
    id: 1221235,
    amount: '1,220,000.2',
    staketime: '01.02.2023 10:00AM',
    unstaketime: '01.02.2023 08:15PM',
    CML: 'CML',
    realtimeRewardPerBlock: '1,132,000.1',
    address: "0xfCcA771Dc22359E4D6e9e9daC743EAb38f51EECe"
  },
];

const TradePage = ({ page, data }) => {
  const [showWhiteListedWallets, setShowWhiteListedWallets] = useState(true);

  return (
    <div className='pT-180'>
      <div className='container'>
        <div className={styles.section}>
          <TradeRoutes />
          {!page &&
            <>
              <div className={styles.auction__tableContainer}>
                <div className={styles.auction__leftPanel} >
                    <div>
                      <p className={` font_20 ${styles.auction__nextDate}`}>Swap</p>
                      <span className={styles.auction__borderBottom}></span>
                      <p className={styles.auction__schedule}>AUCTION SCHEDULE</p>
                    </div>
                    <div className={styles.auction__leftPanelInner}>
                      <div>
                        <p>start</p>
                        <p>To be announced</p>
                      </div>
                    </div>
                    <div className={styles.auction__panelQuestion}>
                      <p>Why cant I bid for a farm?</p>
                      <div className={styles.questionMarkWrapper}>
                      </div>
                  </div>
                </div>
                <div className={styles.tableContainer}>
                  <AuctionTable tableDataArr={stakersRecord} />
                </div>
              </div>
            </>
          }
          {page === 'staking' &&
            <>
              <div className={styles.allWallets}>
                <div className={styles.allWalletsHeader}>
                  <ArrowWithBorderSvg onClick={() => setShowWhiteListedWallets(false)} className={styles.arrowSvgHover} />
                  <h2>All Whitelisted Project Wallets</h2>
                </div>
                <Input
                  type={"search-input"}
                  // onChange={changeHandler}
                  // defaultData={defaultData}
                  // selectHandler={selectHandler}
                  selectLabel={"select"}
                  placeholder={"Search address or token"}
                  customStyles={{ width: "100%" }}
                />
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default TradePage;
