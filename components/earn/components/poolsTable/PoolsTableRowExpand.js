import React from 'react';

import { useWindowDimension } from '../../../../hooks/useWindowDimension';
import { CoreTag, OpenSvg } from '../../../svg';
import Button from '../../../UI/button/Button';

import styles from './PoolsTableRowExpand.module.css';

const PoolsTableRowExpand = ({ item }) => {
  const [width, height] = useWindowDimension();
  return (
    <>
      {width <= 1200 && (
        <div className={styles.mobileExpand}>
          <div className={`${styles.firstSection}`}>
            <p>{item.data[2].text}</p>
            <p className={` font_12 ${styles.usd}`}>{item.data[2].text2}</p>
            <p className={` font_12 ${styles.subText}`}>{item.data[2].text3}</p>
          </div>
          {width <= 896 && (
            <>
              <div className={styles.secondSection}>
                <p>{item.data[1].text}</p>
                <p className={` font_12 ${styles.usd}`}>{item.data[1].text2}</p>
                <p className={` font_12 ${styles.subText}`}>{item.data[1].text3}</p>
              </div>
              <div className={styles.thirdSection}>
                <p>
                  {item.data[3].title} {item.data[3].svg1}
                </p>
                <p className={` font_12 ${styles.subText}`}>{item.data[3].subTitle}</p>
              </div>
            </>
          )}
        </div>
      )}
      <div className={styles.expandWrapper}>
        {item.data[6] && (
          <div className={styles.coreStatsSection}>
            <div>
              <p>Total Locked</p>
              <p>{item?.data[6]?.totalLocked}</p>
            </div>
            <div>
              <p>Average lock duration</p>
              <p>{item?.data[6]?.averageLockDuration}</p>
            </div>
            <div>
              <p>Performance fee</p>
              <p>{item?.data[6]?.performanceFee}</p>
            </div>
          </div>
        )}
        <div className={styles.section}>
          <div className={styles.startSection}>
            <p>Start Farming</p>
            <Button title={'Connect Wallet'} type={'blue'} className={styles.connectButton} />
          </div>
          <div className={styles.middleSection}>
            <p className={styles.coreEarned}>
              <span>CORE</span> Earned
            </p>
            <p className={styles.coreEarnedNum}>0</p>
          </div>
          <div className={styles.lastSection}>
            <button className={`btnBlue ${styles.disabledBtn}`}>Harvest</button>
          </div>
        </div>
        <div className={styles.lastRow}>
          <CoreTag />
          <div className={styles.pools__tableEndInner}>
            <div className={styles.pointer}>
              <p className={` ${styles.margin0} font_12 `}>Get CORE-BNB LP</p>
              <OpenSvg className={styles.openSvg} />
            </div>
            <div className={styles.pointer}>
              <p className='font_12'>View Contract</p>
              <OpenSvg className={styles.openSvg} />
            </div>
            <div className={styles.pointer}>
              <p className='font_12'>See Pair Info</p>
              <OpenSvg className={styles.openSvg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoolsTableRowExpand;
