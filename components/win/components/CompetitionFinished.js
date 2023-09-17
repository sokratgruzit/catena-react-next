import React from 'react';

import Link from 'next/link';
import ArrowBtn from '../../UI/button/ArrowBtn';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';

import styles from './CompetitionFinished.module.css';
// import mainStyles from '../../main.module.css'

let finishedData = [
  {
    id: 0,
    img: '../../images/win/background/Mask group.png',

    text: 'Mobox Competition',
  },
  {
    id: 1,
    img: '../../images/win/background/Mask groupTwo.png',
    text: 'Binance Fan token Trading Competition',
  },
  {
    id: 3,
    img: '../../images/win/background/Mask groupOne.png',
    text: 'Easter Trading Competition',
  },
];

const CompetitionFinished = () => {
  return (
    <div className='container'>
      <div className={styles.mainContainer}>
        <div className={styles.backBtn}>
          <Link href={`/overview/win/competition`}>
            <div className={styles.btn}>
              <img src='/images/Frame.png' />
              <h1>Back</h1>
            </div>
          </Link>
        </div>
        {finishedData.map((item, index) => (
          <div key={index}>
            <div className={styles.mainBox}>
              {/* <CornerDecor /> */}
              <img className={styles.imgBg} src={item.img} alt='bg' />

              <p className={`${styles.bgText} ttl`}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitionFinished;
