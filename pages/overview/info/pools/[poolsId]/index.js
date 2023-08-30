import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import BackgroundImg from '../../../../../public/images/Info/background/background.png';

import styles from '../../../../../components/Info/InfoPages.module.css';
import PoolsSection from '../../../../../components/info/components/poolsSection/PoolsSection';

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

export async function getStaticPaths(context) {
  return {
    fallback: true,
    paths: [
      {
        params: {
          poolsId: '1',
        },
      },
      {
        params: {
          poolsId: 'USDC-WBNB',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const poolsData = {
    imgSrc1: '',
    imgSrc2: '',
    name: '',
    name1: '',
    name2: '',
    rate1: '',
    rate2: '',
    total_tokens1: '',
    total_tokens2: '',
    liquidity: '',
    volume_24h: '',
    volume_24h_change: '',
    lp_reward_apr: '',
    lp_reward_fee_24h: '',
    lp_reward_fee_total_24h: '',
    lp_reward_fee_7d: '',
    lp_reward_fee_total_7d: '',
    volume_7d: '',
    volume_7d_change: '',
  };

  return {
    props: {
      infoPoolsDetails: {
        imgSrc1: poolsData.imgSrc1,
        imgSrc2: poolsData.imgSrc2,
        name: poolsData.name,
        name1: poolsData.name1,
        name2: poolsData.name2,
        rate1: poolsData.rate1,
        rate2: poolsData.rate2,
        total_tokens1: poolsData.total_tokens1,
        total_tokens2: poolsData.total_tokens2,
        liquidity: poolsData.liquidity,
        volume_24h: poolsData.volume_24h,
        volume_24h_change: poolsData.volume_24h_change,
        lp_reward_apr: poolsData.lp_reward_apr,
        lp_reward_fee_24h: poolsData.lp_reward_fee_24h,
        lp_reward_fee_total_24h: poolsData.lp_reward_fee_total_24h,
        lp_reward_fee_7d: poolsData.lp_reward_fee_7d,
        lp_reward_fee_total_7d: poolsData.lp_reward_fee_total_7d,
        volume_7d: poolsData.volume_7d,
        volume_7d_change: poolsData.volume_7d_change,
      },
    },
  };
}

const index = props => {
  const router = useRouter();
  const { id } = router.query;
  // fetch data by ID
  return (
    <div className={styles.section}>{props.infoPoolsDetails && <PoolsSection data={props.infoPoolsDetails} /> }</div>
  );
};

export default index;
