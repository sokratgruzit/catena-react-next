import React from 'react';
import { CoreTag, InfoIcon, OpenSvg } from '../../../svg';
import Button from '../../../UI/button/Button';
import { useWindowDimension } from '../../../../hooks/useWindowDimension';

import styles from './FarmsTableRowExpand.module.css';

const FarmsTableRowExpand = ({ item }) => {
  const [width, height] = useWindowDimension();

  return (
    <>
      {width <= 896 && (
        <div className={styles.mobileExpand}>
          <section className={`${styles.expandItemSection}`}>
            <p className={styles.columnText}>
              Liquidity <InfoIcon className={styles.infoIcon} />
            </p>
            <p>{item.data[3].text}</p>
          </section>
          <section className={styles.expandItemSection}>
            <p className={styles.columnText}>
              Multiplier <InfoIcon className={styles.infoIcon} />
            </p>
            <p>{item.data[4].text}</p>
          </section>
          {width <= 600 && (
            <section className={styles.expandItemSection}>
              <p className={styles.columnText}>APR</p>
              <div className={styles.aprWrapper}>
                <p>{item.data[2].title}</p>
                <div>{item.data[2].svg1}</div>
              </div>
            </section>
          )}
        </div>
      )}
      <main className={styles.expandWrapper}>
        <div className={styles.section}>
          <div className={styles.startSection}>
            <p>Start Farming</p>
            <Button
              title={'Connect Wallet'}
              type={'blue'}
              className={styles.connectButton}
            />
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
          <div className={styles.farms__tableEndInner}>
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
      </main>
    </>
  );
};

export default FarmsTableRowExpand;
