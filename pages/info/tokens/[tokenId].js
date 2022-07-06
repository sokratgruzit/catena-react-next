import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import InfoRoutes from '../../../components/Info/components/InfoRoutes/InfoRoutes';
import SearchBar from '../../../components/Info/components/SearchBar/SearchBar';
import TokenSection from '../../../components/Info/components/TokensSection/TokenSection';
import BackgroundImg from '../../../public/images/Info/background/background.png';

import styles from '../../../components/Info/InfoPages.module.css';

const InfoTokensInngerPage_Data = {
  id: 1,
  imgSrc: '/images/Info/TopTokens/2.png',
  name: 'BUSD Token (BUSD)',
  price: 1.0,
  price_change: -4.06,
  volume_7d: 3.84,
  volume_24h: 123.43,
  volume_24h_change: 2322.02,
  liquidity: 1.66,
  liquidity_change: 26.28,
  transactions_24h: 2.02,
};

const InfoTokensInnerPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // fetch data by ID

  return (
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
      <InfoRoutes />
      <SearchBar />
      <TokenSection data={InfoTokensInngerPage_Data} />
    </div>
  );
};

export default InfoTokensInnerPage;
