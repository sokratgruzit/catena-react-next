import Image from 'next/image';
import React from 'react';

import InfoTokens from '../../../../components/Info/InfoTokens/InfoTokens';
import BackgroundImg from '../../../../public/images/Info/background/background.png';

import styles from '../../../../components/Info/InfoPages.module.css';

const index = () => {
  return (
    <div>
      <div className={styles.backgroundMain}>
        <Image layout='responsive' objectFit='cover' quality={100} src={BackgroundImg} alt='background' />
      </div>
      <InfoTokens />
    </div>
  );
};

export default index;
