import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import InfoRoutes from '../../../components/Info/components/InfoRoutes/InfoRoutes';
import SearchBar from '../../../components/Info/components/SearchBar/SearchBar';
import PoolsSection from '../../../components/Info/components/PoolsSection/PoolsSection';
import BackgroundImg from '../../../public/images/Info/background/background.png';

import styles from '../../../components/Info/InfoPages.module.css';

const InfoTPoolsInngerPage_Data = {
  id: 1,
  imgSrc1: '/images/Info/TopTokens/4.png',
  imgSrc2: '/images/Info/TopTokens/1.png',
  name: 'USDC/WBNB',
  name1: 'USDC',
  name2: 'WBNB',
  rate1: 1.0003,
  rate2: 312.32,
  total_tokens1: 20.99,
  total_tokens2: 67.21,
  liquidity: 42.12,
  volume_24h: 123.43,
  volume_24h_change: 18.02,
  lp_reward_apr: 76.67,
  lp_reward_fee_24h: 140.73,
  lp_reward_fee_total_24h: 206.96,
  volume_7d: 574.26,
  volume_7d_change: 84.09,
  lp_reward_apr: 367.17,
  lp_reward_fee_7d: 1015.73,
  lp_reward_fee_total_7d: 1319.23,
};

const InfoPoolsInnerPage = () => {
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
      <PoolsSection data={InfoTPoolsInngerPage_Data} />
    </div>
  );
};

export default InfoPoolsInnerPage;
