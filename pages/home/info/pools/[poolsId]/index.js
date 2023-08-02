import { MongoClient } from 'mongodb';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import PoolsSection from '../../../../../components/Info/components/PoolsSection/PoolsSection';
import BackgroundImg from '../../../../../public/images/Info/background/background.png';

import styles from '../../../../../components/Info/InfoPages.module.css';

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

const InfoPoolsInnerPage = props => {
  const router = useRouter();
  const { id } = router.query;
  // fetch data by ID
  return (
    <div>
      {/* <div className={styles.backgroundMain}>
        <Image layout='responsive' objectFit='cover' quality={100} src={BackgroundImg} alt='background' />
      </div> */}
      <div className={styles.section}>{props.infoPoolsDetails && <PoolsSection data={props.infoPoolsDetails} />}</div>
    </div>
  );
};

export default InfoPoolsInnerPage;

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
  const client = await MongoClient.connect(
    'mongodb+srv://sokrat:lalala12345@cluster0.x2cvw.mongodb.net/cmcx?retryWrites=true&w=majority',
  );
  const db = client.db();

  const poolsId = context.params.poolsId.replace('-', '/');

  const InfoPoolsDetails = db.collection('InfoPoolsDetails');
  const poolsData = await InfoPoolsDetails.findOne({ name: 'USDC/WBNB' });

  client.close();
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

// "_imgSrc1":"/images/Info/TopTokens/4.png",
// "_imgSrc2":"/images/Info/TopTokens/1.png",
// "_name":"USDC/WBNB",
// "_name1":"USDC",
// "_name2":"WBNB",
// "_rate1":"1.0003",
// "_rate2":"312.32",
// "_total_tokens1":"20.99",
// "_total_tokens2":"67.21",
// "_liquidity":"42.12",
// "_volume_24h":"123.43",
// "_volume_24h_change":"18.02",
// "_lp_reward_apr":"76.67",
// "_lp_reward_fee_24h":"140.73",
// "_lp_reward_fee_total_24h":"206.96",
// "_volume_7d":"574.26",
// "_volume_7d_change":"84.09",
// "_lp_reward_apr":"367.17",
// "_lp_reward_fee_7d":"1015.73",
// "_lp_reward_fee_total_7d":"1319.23"
