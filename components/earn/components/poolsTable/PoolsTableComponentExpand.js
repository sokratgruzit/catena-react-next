import React, { useState } from 'react';
import { ClockSvg, ExclamationSvg, MathSignSvg, OpenSvg } from '../../../svg';

import styles from './PoolsTableComponentExpand.module.css';

const PoolsTableComponentExpand = ({ item }) => {
  const [itemType, setItemType] = useState(item?.data[6]?.tag);
  console.log(item.data);
  return (
    <main className={styles.item}>
      {itemType === 'auto' ? (
        <>
          <section className={styles.autoSection}>
            <div>
              <p>
                {item.data[4].text2}{' '}
                <ExclamationSvg className={styles.ExclamationSvg} />
              </p>
              <p>{item.data[4].text}</p>
            </div>
            <div>
              <p>Total Locked</p>
              <p>{item?.data[6]?.totalLocked}</p>
            </div>
            <div>
              <p>
                Average Lock Duration{' '}
                <ExclamationSvg className={styles.ExclamationSvg} />
              </p>
              <p>{item?.data[6]?.averageLockDuration}</p>
            </div>
            <div>
              <p>
                Performance Fee{' '}
                <ExclamationSvg className={styles.ExclamationSvg} />
              </p>
              <p>{item?.data[6]?.performanceFee}</p>
            </div>
          </section>
        </>
      ) : (
        <section className={styles.manualSection}>
          <div>
            <p>{item?.data[3]?.subTitle}</p>
            <p>
              {item?.data[3]?.title} <MathSignSvg />
            </p>
          </div>
          <div>
            <p>Max. stake per user</p>
            <p className={styles.maxUser}>
              {item.data[6].maxPerUser} &#160;
              <span>CMCX</span>
            </p>
          </div>
          <div>
            <p>Max. stake limit ends in</p>
            <p className={styles.maxStake}>
              {item.data[6].maxEndsIn} &#160; <span>Blocks</span> &#160;
              <ClockSvg />
            </p>
          </div>
          <div>
            <p>{item.data[4].text2} </p>
            <p className={styles.totalStaked}>{item.data[4].text}&#160;</p>
          </div>
        </section>
      )}
      <section className={styles.openSection}>
        <div>
          <p>See Token Info</p>
          <OpenSvg />
        </div>
        <div>
          <p>View Tutorial</p>
          <OpenSvg />
        </div>
        <div>
          <p>View Contract</p>
          <OpenSvg />
        </div>
      </section>
    </main>
  );
};

export default PoolsTableComponentExpand;
