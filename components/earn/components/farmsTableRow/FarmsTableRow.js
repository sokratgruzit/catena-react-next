import React, { useState } from 'react';
import { CoreTag, MathSignSvg, OpenSvg, VectorSvg } from '../../../svg';

import styles from './FarmsTableRow.module.css';

const FarmsTableRow = ({ item }) => {
  const [expandRow, setExpandRow] = useState(false);
  return (
    <section
      className={styles.farms__tableWrapper}
      onClick={() => setExpandRow(prevState => !prevState)}
    >
      <div className={styles.farms__table}>
        <div className={styles.farms__tableItem}>
          {item.token}
          <p className={styles.farms__coloredItem}>{item.title}</p>
        </div>
        <div className={`${styles.farms__tableItems} ${styles.item}`}>
          {item.earned}
        </div>
        <div className={`${styles.farms__tableItems} ${styles.item1}`}>
          {item.apr} <MathSignSvg />
        </div>
        <div className={`${styles.farms__tableItems} ${styles.item2}`}>
          {item.liquidity}
        </div>
        <div className={`${styles.farms__tableItems} ${styles.item3}`}>
          {item.multiplier}
        </div>
        <VectorSvg
          className={`${styles.farms__tableArrow} ${
            expandRow && styles.farms__tableArrowActive
          }`}
        />
      </div>
      <div
        className={`${styles.farms__subTable} ${
          expandRow && styles.expandTableRow
        }`}
      >
        <div className={styles.flex}>
          <p className={styles.width}>Start Farming</p>
          <p>
            <span className={styles.farms__coloredItem}>CORE</span> Earned
          </p>
        </div>
        <div className={styles.farms__subTableInner}>
          <button className='btnBlue'>Connect Wallet</button>
          <p>0</p>
          <button className={`btnBlue ${styles.disabledBtn}`}>Harvest</button>
        </div>
        <div className={styles.farms__tableEnd}>
          <CoreTag className={styles.coreSvg} />
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
      </div>
    </section>
  );
};

export default FarmsTableRow;
