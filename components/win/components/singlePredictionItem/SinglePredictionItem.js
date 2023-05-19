import React from 'react'

import { ArrowSvg, CancelSvg, LaterSvg, LiveSvg, NextSvg, SmlArrowSvg } from '../../../svg'
import CornerDecor from '../../../UI/cornerDecor/CornerDecor'

import styles from './SinglePredictionItem.module.css'

const SinglePredictionItem = ({ item }) => {
  console.log(item.action)
  return (
    <div className={`${styles.sliderMainConteinerExpierd}`}>
      <CornerDecor />
      <div className={styles.titleExpierd}>
        <div>
          {item.action === 'expired' && <CancelSvg />}
          {item.action === 'live' && <LiveSvg />}
          {item.action === 'next' && <NextSvg />}
          {item.action === 'later' && <LaterSvg />}

          <p>{item.action}</p>
        </div>
        <p className={styles.titlePBorderExpierd}>{item.numHashTag}</p>
      </div>
      <div className={styles.upPriceExpierd}>
        <div>
          <SmlArrowSvg className={styles.priceUpSvg} />
          <p>UP</p>
          {item.action === 'live' && <p className={styles.UpBackground}></p>}
        </div>
        <p>{item.payOut}</p>
      </div>
      {item.action === 'expired' && (
        <div className={styles.lastPriceExpierd}>
          <h4>Last Price</h4>
          <div className={styles.mainPriceExpierd}>
            <h2 className={styles.price}>{item.lastPrice}</h2>
            <div className={styles.priceUpExpierd}>
              <ArrowSvg className={styles.arrowSvg} />
              {/* <svg
                width='12'
                height='15'
                viewBox='0 0 12 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.6829 6.37206C10.5391 6.37206 10.3953 6.31908 10.2817 6.20555L6.08875 2.01255L1.89575 6.20555C1.67626 6.42504 1.31297 6.42504 1.09348 6.20555C0.987913 6.09873 0.928711 5.9546 0.928711 5.80442C0.928711 5.65423 0.987913 5.5101 1.09348 5.40328L5.68761 0.809148C5.9071 0.589659 6.2704 0.589659 6.48988 0.809148L11.084 5.40328C11.3035 5.62277 11.3035 5.98606 11.084 6.20555C10.9781 6.31908 10.8267 6.37206 10.6829 6.37206Z'
                  fill='white'
                />
                <path
                  d='M6.08815 14.6447C5.77784 14.6447 5.52051 14.3874 5.52051 14.0771V1.33913C5.52051 1.02882 5.77784 0.771484 6.08815 0.771484C6.39846 0.771484 6.6558 1.02882 6.6558 1.33913V14.0771C6.6558 14.3874 6.39846 14.6447 6.08815 14.6447Z'
                  fill='white'
                />
              </svg> */}
              <p>{item.upPrice}</p>
            </div>
          </div>
          <div className={styles.border}>
            <div className={styles.widtBorder}>
              <h3>Lock Price:</h3>
              <p>Prize Pool:</p>
            </div>
            <div className={styles.leftSide}>
              <h3>{item.lockPrice}</h3>
              <p>{item.prizePool}</p>
            </div>
          </div>
        </div>
      )}
      {item.action === 'live' && (
        <div className={styles.lastPrice}>
          <h4>Last Price</h4>
          <div>
            <div className={styles.mainPrice}>
              <h2>{item.lastPrice}</h2>
              <div className={styles.priceUP}>
                <svg width='12' height='15' viewBox='0 0 12 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M10.6829 6.37206C10.5391 6.37206 10.3953 6.31908 10.2817 6.20555L6.08875 2.01255L1.89575 6.20555C1.67626 6.42504 1.31297 6.42504 1.09348 6.20555C0.987913 6.09873 0.928711 5.9546 0.928711 5.80442C0.928711 5.65423 0.987913 5.5101 1.09348 5.40328L5.68761 0.809148C5.9071 0.589659 6.2704 0.589659 6.48988 0.809148L11.084 5.40328C11.3035 5.62277 11.3035 5.98606 11.084 6.20555C10.9781 6.31908 10.8267 6.37206 10.6829 6.37206Z'
                    fill='white'
                  />
                  <path
                    d='M6.08815 14.6447C5.77784 14.6447 5.52051 14.3874 5.52051 14.0771V1.33913C5.52051 1.02882 5.77784 0.771484 6.08815 0.771484C6.39846 0.771484 6.6558 1.02882 6.6558 1.33913V14.0771C6.6558 14.3874 6.39846 14.6447 6.08815 14.6447Z'
                    fill='white'
                  />
                </svg>
                <p>{item.upPrice}</p>
              </div>
            </div>
          </div>
          <div className={styles.border}>
            <div className={styles.widtBorder}>
              <h3>Lock Price:</h3>
              <p>Prize Pool:</p>
            </div>
            <div className={styles.leftSide}>
              <h3>{item.lockPrice}</h3>
              <p>{item.prizePool}</p>
            </div>
          </div>
        </div>
      )}
      {item.action === 'next' && <div>shit</div>}
      {item.action === 'later' && <div>later</div>}

      <div className={styles.priceDownContainer}>
        <p>{item.payDown}</p>
        <div className={styles.priceDownExpierd}>
          <p className={styles.wtf}> DOWN</p>
          <span>
            {/* <svg
              width='10'
              height='13'
              viewBox='0 0 10 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.81891 8.07394L5.24832 11.6445L1.67773 8.07394'
                stroke='#E94A4A'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M5.24805 1.64492V11.5449'
                stroke='#E94A4A'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg> */}
          </span>
        </div>
      </div>
    </div>
  )
}

{
  /* <p><div style={{ background: 'transparent' }}>UP</div></p> */
}
export default SinglePredictionItem
