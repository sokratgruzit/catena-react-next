import React from 'react'

import { CoreTag, InfoIcon, MathSignSvg } from '../../../svg'
import Button from '../../../UI/button/Button'

import styles from './FarmsTableComponent.module.css'

const FarmsTableComponent = ({ item }) => {
  return (
    <>
      <div className={styles.topSection}>
        {item.data[0].svg1}
        <div className={styles.titleWrapper}>
          <h1>{item.data[0].title}</h1>
          <CoreTag className={styles.coreSvg} />
        </div>
        <div className={styles.multiplier}>
          <p>{item.data[4].text}</p>
          <InfoIcon className={styles.infoIcon} />
        </div>
      </div>
      <div className={styles.dataSection}>
        <div className={styles.dataSectionRow}>
          <p>APR:</p>
          <p>
            {item.data[2].title} <MathSignSvg />
          </p>
        </div>
        <div className={styles.dataSectionRow}>
          <p>Liquidity:</p>
          <p>{item.data[3].text}</p>
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
              marginBottom: '10px',
            }}
          />
        </div>
      </div>
    </>
  )
}

export default FarmsTableComponent
