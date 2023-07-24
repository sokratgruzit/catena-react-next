import React from 'react';

import ArrowBtn from '../../UI/button/ArrowBtn';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';

import styles from './CompetitionFinished.module.css';
// import mainStyles from '../../main.module.css'

let finishedData = [
  {
    id: 0,
    img: '../../images/win/background/mobBoxBg.png',
    text: 'Mobox Competition',
  },
  {
    id: 1,
    img: '../../images/win/background/fanTokenBg.png',
    text: 'Binance Fan token Trading Competition',
  },
  {
    id: 3,
    img: '../../images/win/background/trendingBg.png',
    text: 'Easter Trading Competition',
  },
];

const CompetitionFinished = () => {
  return (
    <div>
      <img
        className={styles.CompetitionFinished__background}
        src={'../../images/win/background/competitionFinishdbg.png'}
        alt='competitionFinishdbg'
      />
      <div className={styles.backBt}>
        <ArrowBtn route={'competitionFinished'} direction={'back'} />
      </div>
      <div className={styles.mainContainer}>
        {finishedData.map((item, index) => (
          <div key={index}>
            <div className={styles.mainBox}>
              <CornerDecor />
              <img className={styles.imgBg} src={item.img} alt='bg' />
              <p className={styles.bgText}>{item.text}</p>
            </div>
          </div>
        ))}
        <div>
          <img className={styles.cosmosBlur} src={'../../images/win/cloud.png'} alt='cloud' />
          <img className={styles.dimond} src={'../../images/win/dimond1.png'} alt='dimond' />
          <img className={styles.gold} src={'../../images/win/gold.png'} alt='gold' />
          <img className={styles.sun} src={'../../images/win/sun.png'} alt='sun' />
          <img className={styles.planetBlur} src={'../../images/win/cosmosBlur.png'} alt='planetBlur' />
        </div>
      </div>
    </div>
  );
};

export default CompetitionFinished;
