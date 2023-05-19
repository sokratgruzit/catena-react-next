import React from 'react'

import { QuestionMarkIcon } from '../../../svg'

import styles from './AuctionSchedule.module.css'

const AuctionSchedule = () => {
  return (
    <div>
      <div>
        <p className={` font_20 ${styles.auction__nextDate}`}>Next Auction</p>
        <span className={styles.auction__borderBottom}></span>
        <p className={styles.auction__schedule}>AUCTION SCHEDULE</p>
      </div>
      <div className={styles.auction__leftPanelInner}>
        <div>
          <p>start</p>
          <p>To be announced</p>
        </div>
        <div>
          <p>end</p>
          <p>To be announced</p>
        </div>
      </div>
      <div className={styles.auction__panelQuestion}>
        <p>Why cant I bid for a farm?</p>
        <div className={styles.questionMarkWrapper}>
          <QuestionMarkIcon />
        </div>
      </div>
    </div>
  )
}

export default AuctionSchedule
