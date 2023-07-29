import Image from 'next/image';
import React from 'react';

import InfoPools from '../../../../components/Info/InfoPools/InfoPools';
import BackgroundImg from '../../../../public/images/Info/background/background.png';

import styles from '../../../../components/Info/InfoPages.module.css';

const index = () => {
  return (
    <div>
      <div className={styles.backgroundMain}>
        <Image layout='responsive' objectFit='cover' quality={100} src={BackgroundImg} alt='background' />
      </div>
      <InfoPools />
    </div>
  );
};

export default index;
