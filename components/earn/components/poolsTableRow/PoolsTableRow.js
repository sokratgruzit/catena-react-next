import React from 'react';
import { MathSignSvg, VectorSvg } from '../../../svg';

import styles from './PoolsTableRow.module.css';

const FarmsTableRow = ({ data, expandRow, toggleExpand }) => {
  return (
    <section className={styles.pools__tableInner} onClick={toggleExpand}>
      <div className={styles.farms__table}>
        <div
          className={` ${styles.pools__tableItemColumn} ${styles.pools__columnItem1} `}
        >
          <div
            className={`${styles.pools__tableItemRow} ${styles.pools__svgCont} `}
          >
            {data.coinIcon}
            {data.smallCoinIcon}
          </div>
          <p>{data.coinTitle}</p>
          <p className={` font_12 ${styles.pools__tableSubText} `}>
            {data.coinSubTitle}
          </p>
        </div>
        <div
          className={` ${styles.pools__tableItemColumn} ${styles.pools__columnItem2} `}
        >
          <p>{data.profitAmount}</p>
          <p className={` font_12 ${styles.pools__usd}`}>
            {data.profitAmountUsd}
          </p>
          <p className={` font_12 ${styles.pools__tableSubText} `}>
            {data.profitTitle}
          </p>
        </div>
        <div
          className={` ${styles.pools__tableItemColumn} ${styles.pools__columnItem3} `}
        >
          <p>{data.creditAmount}</p>
          <p className={` font_12 ${styles.pools__usd}`}>
            {data.creditAmountUsd}
          </p>
          <p className={` font_12 ${styles.pools__tableSubText} `}>
            {data.creditTitle}
          </p>
        </div>
        <div
          className={` ${styles.pools__rowItem} ${styles.pools__columnItem4}`}
        >
          <div className={`${styles.pools__tableItemRow} `}>
            <p>{data.apyPercentage}</p>
            <MathSignSvg />
          </div>
          <div className={` ${styles.pools__tableItemColumn}  `}>
            <p className={` font_12 ${styles.pools__tableSubText} `}>
              {data.apyTitle}
            </p>
          </div>
        </div>
        <div
          className={` ${styles.pools__tableItemColumn} ${styles.pools__columnItem5} `}
        >
          <p>{data.totalStaked}</p>
          <p className={` font_12 ${styles.pools__tableSubText} `}>
            {data.totalStakedTitle}
          </p>
          <div className={styles.pools__timer}>{data.timerIcon}</div>
        </div>
        <div className={styles.pools__arrow}>
          <VectorSvg
            className={`${styles.vectorSvg} ${
              expandRow === true && styles.active
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default FarmsTableRow;
