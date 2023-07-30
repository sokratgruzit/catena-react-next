import Image from 'next/image';
import React from 'react';

import CornerDecor from '../../../../UI/cornerDecor/CornerDecor';
import Tooltip from '../../../../UI/tooltip/Tooltip';

import styles from './FirstBlock.module.css';

const FirstBlock = ({ data }) => {
  return (
    <div className={styles.firstBlock}>
      <CornerDecor />
      <div className={styles.poolsTopRow}>
        <div>
          <h4>Liquidity</h4>
          <p className='font_20'>${data.liquidity}M</p>
          <p>up down</p>
        </div>
        <div>
          <h4>LP REWARD APR</h4>
          <p className='font_20'>{data.lp_reward_apr}</p>
          <Tooltip title={'7 day performance'} type={'dashboard'} text={'dummy'} />
          {/* <div className={styles.info}>
            <InfoIcon className={styles.icon} />7 day performance
          </div> */}
        </div>
      </div>
      <div className={styles.poolsBottomRow}>
        <h4 className={styles.totalTokensTitle}>TOTAL TOKENS LOCKED</h4>
        <div className={styles.totalTokens}>
          <CornerDecor />
          <div className={styles.totalTokensRow}>
            <div>
              <Image width={30} height={30} src={data.imgSrc1} alt='logo1' />
              <p>{data.name1}</p>
            </div>
            <p>{data.total_tokens1}M</p>
          </div>
          <div className={styles.totalTokensRow}>
            <div>
              <Image width={30} height={30} src={data.imgSrc2} alt='logo2' />
              <p>{data.name2}</p>
            </div>
            <p>{data.total_tokens2}K</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
