import Image from 'next/image'
import React from 'react'
import Countdown from 'react-countdown'

import { HourGlass } from '../../../svg'

import styles from './CountdownItem.module.css'

const CountdownItem = ({ votingTo, ...props }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <></>
    } else {
      return (
        <div className={styles.Countdown}>
          <HourGlass className={styles.HourGlass} />
          <span>
            {days} <sup>D</sup>
          </span>
          :
          <span>
            {`${hours}`.length === 1 ? '0' + hours : hours} <sup>H</sup>
          </span>
          :
          <span>
            {`${minutes}`.length === 1 ? '0' + minutes : minutes}
            <sup>M</sup>
          </span>
          :
          <span>
            {`${seconds}`.length === 1 ? '0' + seconds : seconds}
            <sup>S</sup>
          </span>
        </div>
      )
    }
  }
  return (
    <div className={styles.relative}>
      <div className={styles.CountdownBg}>
        <Image layout='fill' objectFit='contain' src={'/images/voting/countdownBg.png'} quality={100} alt='' />
      </div>
      <Countdown date={votingTo} renderer={renderer} {...props} />
    </div>
  )
}

export default CountdownItem
