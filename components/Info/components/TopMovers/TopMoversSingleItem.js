import Image from 'next/image';
import React from 'react';

import { PriceUp, PriceDown } from '../../../svg';

import styles from './TopMoversSingleItem.module.css';

const TopMoversSingleItem = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.logo}>
          <Image width={20} height={20} src={data?.imgSrc} alt='logo' />
        </div>
        <p>{data.name}</p>
      </div>
      <div className={styles.prices}>
        <p>${data.price}</p>
        <div className={`${styles.price_change} `}>
          {data.price_change > 0 ? <PriceUp /> : <PriceDown />}
          <p className={`${data.price_change > 0 ? styles.PositiveNum : styles.NegativeNum}`}>
            {Math.abs(data.price_change)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopMoversSingleItem;
