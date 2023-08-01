import React from 'react';

import { useWindowDimension } from '../../../../hooks/useWindowDimension';
import { CoreTag, InfoIcon, OpenSvg } from '../../../svg';
import Button from '../../../UI/button/Button';

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
            <Button title={'Connect Wallet'} type={'red'} className={styles.connectButton} />
          </div>
          <div className={styles.middleSection}>
            <p className={styles.coreEarned}>
              <span>CATENA</span> Earned
            </p>
            <p className={styles.coreEarnedNum}>0</p>
          </div>
          <div className={styles.lastSection}>
            <p style={{ width: '100%', height: '24px' }}></p>
            <button className={`btnBlue ${styles.disabledBtn}`}>Harvest</button>
          </div>
          <div className={styles.pointer}>
            <p style={{ width: '100%', height: '24px' }}></p>
            <div style={{display: 'flex', gap: '8px'}}>
              <p style={{color: '#162029'}} className={` ${styles.margin0} font_12 `}>Get CATENA-BNB LP</p>
              <OpenSvg className={styles.openSvg} />
            </div>
          </div>
          <div className={styles.pointer}>
            <p style={{ width: '100%', height: '24px' }}></p>
            <div style={{display: 'flex', gap: '8px'}}>
              <p style={{color: '#162029'}} className='font_12'>View Contract</p>
              <OpenSvg className={styles.openSvg} />
            </div>
          </div>
          <div className={styles.pointer}>
            <p style={{ width: '100%', height: '24px' }}></p>
            <div style={{display: 'flex', gap: '8px'}}>
              <p style={{color: '#162029'}} className='font_12'>See Pair Info</p>
              <OpenSvg className={styles.openSvg} />
            </div>
          </div>
        </div>
        {/* <div className={styles.lastRow}> */}
          <CoreTag />
          {/* <div className={styles.farms__tableEndInner}>
            <div className={styles.pointer}>
              <p className={` ${styles.margin0} font_12 `}>Get CATENA-BNB LP</p>
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
          </div> */}
        {/* </div> */}
      </main>
    </>
  );
};

export default FarmsTableRowExpand;
