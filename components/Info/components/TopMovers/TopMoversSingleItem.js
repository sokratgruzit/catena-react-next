import React from 'react';

import Image from 'next/image';

import styles from './TopMoversSingleItem.module.css';

const TopMoversSingleItem = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.logo}>
          <Image width={20} height={20} src={data.imgSrc} alt='logo' />
        </div>
        <p>{data.name}</p>
      </div>
      <div className={styles.prices}>
        <p>${data.price}</p>
        <div className={`${styles.price_change} `}>
          {data.price_change > 0 ? (
            <svg
              width='10'
              height='7'
              viewBox='0 0 10 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.3'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.209209 5.92556C0.488155 6.2045 0.940416 6.2045 1.21936 5.92556L4.7475 2.39742C4.88522 2.2597 5.11478 2.2597 5.2525 2.39742L8.78064 5.92556C9.05958 6.2045 9.51184 6.2045 9.79079 5.92556C10.0697 5.64661 10.0697 5.19435 9.79079 4.9154L6.26265 1.38727C5.56704 0.691654 4.43296 0.691654 3.73735 1.38727L0.209209 4.9154C-0.0697365 5.19435 -0.0697365 5.64661 0.209209 5.92556Z'
                fill='#29765A'
              />
            </svg>
          ) : (
            <svg
              width='10'
              height='7'
              viewBox='0 0 10 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.3'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.79079 1.07444C9.51184 0.795498 9.05958 0.795498 8.78064 1.07444L5.2525 4.60258C5.11478 4.7403 4.88522 4.7403 4.7475 4.60258L1.21936 1.07444C0.940416 0.795498 0.488155 0.795498 0.209209 1.07444C-0.069737 1.35339 -0.069737 1.80565 0.209209 2.0846L3.73735 5.61273C4.43296 6.30835 5.56704 6.30835 6.26265 5.61273L9.79079 2.0846C10.0697 1.80565 10.0697 1.35339 9.79079 1.07444Z'
                fill='#E94A4A'
              />
            </svg>
          )}
          <p
            className={`${
              data.price_change > 0 ? styles.PositiveNum : styles.NegativeNum
            }`}
          >
            {Math.abs(data.price_change)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopMoversSingleItem;
