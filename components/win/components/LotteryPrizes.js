import Image from 'next/image'
import React from 'react'

import WinRoutes from './WinRoutes'

import styles from './LotteryPrizes.module.css'

let tabsData = [
  {
    id: 0,
    label: 'Trading Compatition',
  },
  {
    id: 1,
    label: 'Prediction',
  },
  {
    id: 2,
    label: 'Lottery',
  },
]

const LotteryPrizes = () => {
  return (
    <>
      <div>
        <div className={styles.tab}>
          <picture>
            <img className={styles.Container__background} src='../images/win/background/lotteryBg.png' alt='' />
          </picture>
          <div className={styles.container}>
            <WinRoutes />
          </div>
        </div>
        <div>
          <h1 className={styles.title}>
            {' '}
            <span>CORE</span> MultiChain
          </h1>
          <h2 className={styles.titleDesc}>Lottery in Prizes!</h2>
        </div>
        <div className={styles.imgPosition}>
          <div className={styles.pinkTicket}>
            <Image layout='fill' objectFit='contain' src={'/images/win/pinkTicket.png'} alt='' />
          </div>
          <div className={styles.smallStar}>
            <Image layout='fill' objectFit='contain' src={'/images/win/pawawuna.png'} alt='' />
          </div>
          <div className={styles.star}>
            <Image layout='fill' objectFit='contain' src={'/images/win/star.png'} alt='' />
          </div>
        </div>
        <div className={styles.prizesContainer}>
          <div className={styles.blur}>
            <Image layout='fill' objectFit='contain' src={'/images/win/blurLottery.png'} alt='' />
          </div>
          <div className={styles.lotteryNumber}>
            <p>2</p>
            <p>4</p>
            <p>6</p>
            <p>0</p>
            <p>1</p>
            <p>1</p>
          </div>
        </div>
        <div className={styles.pictureContainer}>
          <div className={styles.littleStar}>
            <Image layout='fill' objectFit='contain' src={'/images/win/namceca.png'} alt='' />
          </div>
          <div className={styles.ticket}>
            <Image layout='fill' objectFit='contain' src={'/images/win/ticket.png'} alt='' />
          </div>
        </div>
        <div className={styles.buttonStyle}>
          <button className={styles.buyTicket}>Buy Tickets</button>
        </div>
        <div className={styles.pictureContainer}>
          <div className={styles.tickets}>
            <Image layout='fill' objectFit='contain' src={'/images/win/tickets.png'} alt='' />
          </div>
          <div className={styles.starr}>
            <Image layout='fill' objectFit='contain' src={'/images/win/pawawuna.png'} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default LotteryPrizes
