import React from 'react';
import Image from 'next/image';

import styles from './RunningLogos.module.css';

const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

const RunningLogos = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {arr.map(num => (
          <div key={num} className={styles.logoWrapper}>
            <div className={styles.logo}>
              <Image
                layout='fill'
                objectFit='contain'
                src={`/images/home/logos/coin${num}.png`}
                quality={100}
                alt=''
              />
            </div>
          </div>
        ))}
        {arr.map(num => (
          <div key={num} className={styles.logoWrapper}>
            <div className={styles.logo}>
              <Image
                layout='fill'
                objectFit='contain'
                src={`/images/home/logos/coin${num}.png`}
                quality={100}
                alt=''
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningLogos;
