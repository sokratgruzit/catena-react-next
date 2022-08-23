import React, { useState } from 'react';
import {
  CoreTag,
  ETHCORE,
  InfoIcon,
  MathSignSvg,
  OpenSvg,
  VectorSvg,
} from '../../../svg';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import Button from '../../../UI/button/Button';

import styles from './FarmsTableComponent.module.css';

const FarmsTableComponent = ({ item }) => {
  const [expandItem, setExpandItem] = useState(false);

  return (
    <div className={styles.itemWrapper}>
      <CornerDecor />
      <div className={styles.topSection}>
        <ETHCORE />
        <div className={styles.titleWrapper}>
          <h1>{item.title}</h1>
          <CoreTag className={styles.coreSvg} />
        </div>
        <div className={styles.multiplier}>
          <p>{item.multiplier}</p>
          <InfoIcon className={styles.infoIcon} />
        </div>
      </div>
      <div className={styles.dataSection}>
        <div className={styles.dataSectionRow}>
          <p>APR:</p>
          <p>
            {item.apr} <MathSignSvg />
          </p>
        </div>
        <div className={styles.dataSectionRow}>
          <p>Liquidity:</p>
          <p>{item.liquidity}</p>
        </div>
        <div className={styles.dataSectionRow}>
          <p>Earn:</p>
          <p>CMCX + Fees</p>
        </div>
      </div>
      <div className={styles.actionSection}>
        <h2 className={styles.coreEarned}>
          <span>CORE</span> Earned
        </h2>
        <div className={styles.harvestRow}>
          <p>0</p>
          <button className={`btnBlue ${styles.disabledBtn}`}>Harvest</button>
        </div>
        <div className={styles.bottomRow}>
          <h2>
            <span>{item.title} </span>Staked
          </h2>
          <Button
            title={'Connect Wallet'}
            type={'blue'}
            customStyles={{
              height: '42px',
              width: '100%',
              transition: '.5s',
            }}
          />
        </div>
        <p
          className={styles.expand}
          onClick={() => setExpandItem(prevState => !prevState)}
        >
          {expandItem ? 'Hide' : 'Details'}{' '}
          <VectorSvg
            className={`${styles.vector} ${expandItem && styles.vectorActive}`}
          />
        </p>
      </div>
      <div
        className={`${styles.expandSection} ${
          expandItem && styles.expandedSection
        }`}
      >
        <p>
          Get CMCX-BNB LP <OpenSvg className={styles.openSvg} />
        </p>
        <p>
          View Contract <OpenSvg className={styles.openSvg} />
        </p>
        <p>
          See Pair Info <OpenSvg className={styles.openSvg} />
        </p>
      </div>
    </div>
  );
};

export default FarmsTableComponent;
