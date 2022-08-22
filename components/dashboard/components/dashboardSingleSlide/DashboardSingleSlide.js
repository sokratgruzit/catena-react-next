import React from 'react';

import Button from '../../../UI/button/Button';
import { ThreeDotsSvg } from '../../../svg';

import styles from './DashboardSingleSlide.module.css';

const DashboardSingleSlide = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.dashboardMid__slider}>
        <div className={styles.dashboardMid__slide}>
          <div className={`${styles.dashboardMid__flex} ${styles.marginZero}`}>
            <div className={styles.dashboardMid__sliderLogo}>
              {item.logoSvg}
            </div>
            <p>{item.assetName}</p>
          </div>
          <div className={styles.dashboardMid__flex}>
            <span className='font_13'>Available:&nbsp;</span>{' '}
            <p className='font_13'>{item.available}</p>
            <span className='font_13'>Stake:&nbsp;</span>{' '}
            <p className='font_13'>{item.stake}</p>
          </div>
          <div
            className={`${styles.dashboardMid__flex} ${styles.dashboardMid__flexLast} font_13`}
          >
            <span className='font_13'>Value:&nbsp;</span> {item.value} &nbsp;
            <span className={`${styles.orangeColor} font_13`}>
              CMCX&nbsp;
            </span>{' '}
            <span className='font_13'>(~ ${item.inCMCX})</span>
          </div>
          <div
            className={`${styles.dashboardMid__flex} ${styles.sliderButtons}`}
          >
            <Button
              title={'Send'}
              type={'blue__border'}
              customStyles={{
                padding: '10px 30px',
                fontSize: '13px',
                lineHeight: '18px',
              }}
            />
            <Button
              title={'Receive'}
              type={'blue__border'}
              customStyles={{
                padding: '10px 30px',
                fontSize: '13px',
                lineHeight: '18px',
                margin: '0 20px',
              }}
            />
            <Button
              title={'JustSWap'}
              type={'blue__border'}
              customStyles={{
                padding: '10px 27px',
                fontSize: '13px',
                lineHeight: '18px',
              }}
            />

            <ThreeDotsSvg className={styles.miniMenu} />
          </div>
        </div>
        <div className={styles.sliderModal}>
          <p>Multi-signature</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSingleSlide;
