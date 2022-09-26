import React from 'react';

import styles from './AuctionScheduleExpand.module.css';

const AuctionScheduleExpand = ({ setShowWhiteListedWallets }) => {
  return (
    <div className={styles.auction__expandDetails}>
      <span className={styles.auction__borderBottom}></span>
      <div>
        <p>Multiplier per farm</p>
        <p>1x each</p>
      </div>
      <div>
        <p>Total whitelisted bidders</p>
        <p onClick={() => setShowWhiteListedWallets(prevState => !prevState)}>
          19
        </p>
      </div>
    </div>
  );
};

export default AuctionScheduleExpand;
