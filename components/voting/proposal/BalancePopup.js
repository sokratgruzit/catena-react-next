import React from 'react';

import styles from './BalancePopup.module.css';

const BalancePopup = ({ message, onClose, votingPower, votingPowerAtBlock }) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popup}>
        <div className={styles.votingPower}>
          <p className='font_30 ttl'> Voting Power</p>
          <svg
            onClick={onClose}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z'
              fill='#162029'
            />
            <path
              d='M9.17006 15.5804C8.98006 15.5804 8.79007 15.5104 8.64007 15.3604C8.50058 15.2192 8.42236 15.0288 8.42236 14.8304C8.42236 14.6319 8.50058 14.4415 8.64007 14.3004L14.3001 8.64035C14.5901 8.35035 15.0701 8.35035 15.3601 8.64035C15.6501 8.93035 15.6501 9.41035 15.3601 9.70035L9.70006 15.3604C9.56006 15.5104 9.36006 15.5804 9.17006 15.5804Z'
              fill='#162029'
            />
            <path
              d='M14.8301 15.5804C14.6401 15.5804 14.4501 15.5104 14.3001 15.3604L8.64007 9.70035C8.50058 9.55921 8.42236 9.36878 8.42236 9.17035C8.42236 8.97192 8.50058 8.78149 8.64007 8.64035C8.93007 8.35035 9.41006 8.35035 9.70006 8.64035L15.3601 14.3004C15.6501 14.5904 15.6501 15.0704 15.3601 15.3604C15.2101 15.5104 15.0201 15.5804 14.8301 15.5804Z'
              fill='#162029'
            />
          </svg>
        </div>
        <div className={styles.popupBody}>
          <p>
            Your voting power is determined by the amount of <span className={styles.stakedCoins}>Staked Coins</span>{' '}
            you held and the remaining duration on the fixed-term staking position (if you have one) at the block
            detailed below. <span className={styles.stakedCoins}>Staked Coins</span> held in other places does not
            contribute to your voting power.
          </p>
          <div className={styles.overviewWrapper}>
            <p className={`${styles.overview} font-20 ttl`}>Overview</p>
            <p className={`${styles.votingPowerBalance} font-20`}>
              Your Voting Power <span className='font-20'>{votingPower}</span>
            </p>
          </div>
          <p>
            Your voting power at block <span>{votingPowerAtBlock}</span>
          </p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default BalancePopup;
