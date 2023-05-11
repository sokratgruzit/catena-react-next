import React from 'react';
import Image from 'next/image';

import BackgroundImg from '../../../../public/images/Info/background/background.png';
import Watchlist from '../../../../components/Info/components/Watchlist/Watchlist';

import styles from '../../../../components/Info/InfoPages.module.css';

const index = () => {
  return (
    <div>
      <div>
        <div className={styles.backgroundMain}>
          <Image
            layout='responsive'
            objectFit='cover'
            quality={100}
            src={BackgroundImg}
            alt='background'
          />
        </div>
        <Watchlist route={'tokens'} />
      </div>
    </div>
  );
};

export default index;
