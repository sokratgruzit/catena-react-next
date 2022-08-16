import React from 'react';
import styles from './TopMovers.module.css';
import TopMoversSingleItem from './TopMoversSingleItem';

const TopMovers_Data = [
  {
    id: 0,
    imgSrc: '/images/Info/TopTokens/1.png',
    name: 'WBNB',
    price_change: 4.06,
    price: 327.09,
  },
  {
    id: 1,
    imgSrc: '/images/Info/TopTokens/2.png',
    name: 'BUSD',
    price_change: -4.06,
    price: 1.0,
  },
  {
    id: 2,
    imgSrc: '/images/Info/TopTokens/3.png',
    name: 'USDT',
    price_change: 4.06,
    price: 0.99,
  },
  {
    id: 3,
    imgSrc: '/images/Info/TopTokens/4.png',
    name: 'USDC',
    price_change: 4.06,
    price: 1,
  },
  {
    id: 4,
    imgSrc: '/images/Info/TopTokens/5.png',
    name: 'GST',
    price_change: 4.06,
    price: 19.88,
  },
  {
    id: 5,
    imgSrc: '/images/Info/TopTokens/6.png',
    name: 'LUNA',
    price_change: 4.06,
    price: 0.00018,
  },
  {
    id: 6,
    imgSrc: '/images/Info/TopTokens/7.png',
    name: 'CMC',
    price_change: 4.06,
    price: 5.03,
  },
];

const TopMovers = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={`${styles.moversTitle} font_16`}>Top Movers</h2>
        <div className={styles.slideWrapper}>
          <div className={styles.slider}>
            <div className={styles.slideTrack}>
              {TopMovers_Data.map(item => (
                <TopMoversSingleItem key={item.id} data={item} />
              ))}
              {TopMovers_Data.map(item => (
                <TopMoversSingleItem key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className={styles.topMoversWrapper}>
          {TopMovers_Data.map(item => (
            <TopMoversSingleItem key={item.id} data={item} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default TopMovers;
