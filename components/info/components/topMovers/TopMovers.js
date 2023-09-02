import React from 'react';

import TopMoversSingleItem from './TopMoversSingleItem';

import styles from './TopMovers.module.css';

const TopMovers_Data = [
  {
    id: 0,
    imgSrc: '',
    name: 'WBNB',
    price_change: 4.06,
    price: 327.09,
  },
  {
    id: 1,
    imgSrc: '',
    name: 'BUSD',
    price_change: -4.06,
    price: 1.0,
  },
  {
    id: 2,
    imgSrc: '',
    name: 'USDT',
    price_change: 4.06,
    price: 0.99,
  },
  {
    id: 3,
    imgSrc: '',
    name: 'USDC',
    price_change: 4.06,
    price: 1,
  },
  {
    id: 4,
    imgSrc: '',
    name: 'GST',
    price_change: 4.06,
    price: 19.88,
  },
  {
    id: 5,
    imgSrc: '',
    name: 'LUNA',
    price_change: 4.06,
    price: 0.00018,
  },
  {
    id: 6,
    imgSrc: '',
    name: 'CMC',
    price_change: 4.06,
    price: 5.03,
  },
];

const TopMovers = () => {
  return (
    <div className='container_bordered'>
      <div className='container_bordered-child'>
        <div className={styles.wrapper}>
          <h2 className={`${styles.moversTitle} ttl`}>Top Movers</h2>
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
        </div>
      </div>
    </div>
  );
};

export default TopMovers;
