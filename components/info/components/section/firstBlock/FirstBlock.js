import React, { useState } from 'react';
import styles from './FirstBlock.module.css';

const FirstBlock = ({ data }) => {
  const [activeMenuItem, setactiveMenuItem] = useState('24H');

  return (
    <div className={`${styles.firstBlock} container`}>
      <div className={styles.poolsTopRow}>
        <div>
          <h4>Liquidity</h4>
          <p>
            <p style={{ color: "#162029" }} className='font_20'>${data?.liquidity}M</p>
            <p style={{ color: "#E94A4A", paddingRight: "15px", fontSize: "12px" }}>
              10.97%
            </p>
          </p>
        </div>
      </div>
      <div className={styles.poolsTopRow}>
        <div>
        <h4>Volume {activeMenuItem}</h4>
        <p className='font_20'>$ {activeMenuItem === '24H' ? data?.volume_24h : data?.volume_7d} M</p>
        </div>
      </div>
      <div className={styles.poolsTopRow}> 
      <div>
        <h4> volume {activeMenuItem}</h4>
        <p className='font_20'>
          {activeMenuItem === '24H' ? '$' + data?.lp_reward_fee_24h + 'M' : '$' + data?.lp_reward_fee_7d + 'M'}
        </p>
        </div>
      </div>
      <div className={styles.poolsTopRow}> 
      <div style={{borderBottom: "none"}}>
        <h4> volume {activeMenuItem}</h4>
        <p className='font_20'>
          {activeMenuItem === '24H' ? '$' + data?.lp_reward_fee_24h + 'M' : '$' + data?.lp_reward_fee_7d + 'M'}
        </p>
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
