import React from 'react';
import { useRouter } from 'next/router';
// import { MongoClient } from 'mongodb';
import Image from 'next/image';

import InfoRoutes from '../../../../components/Info/components/InfoRoutes/InfoRoutes';
import SearchBar from '../../../../components/Info/components/SearchBar/SearchBar';
import TokenSection from '../../../../components/Info/components/TokensSection/TokenSection';
import BackgroundImg from '../../../../public/images/Info/background/background.png';

import styles from '../../../../components/Info/InfoPages.module.css';

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

const InfoTokensInnerPage = props => {
  // const router = useRouter();
  // const { id } = router.query;
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
      <div className={styles.section}>
        <InfoRoutes showStar={true} goBack={'tokens'} text='Go To Tokens' />
        <SearchBar />
        <TokenSection data={props.infoTokensDetails} />
      </div>
    </div>
  );
};

export default InfoTokensInnerPage;

export async function getStaticPaths(context) {
  return {
    fallback: true,
    paths: [
      {
        params: {
          tokenId: 'bitcoin',
        },
      },
      {
        params: {
          tokenId: 'ethereum',
        },
      },
      {
        params: {
          tokenId: 'tether',
        },
      },
      {
        params: {
          tokenId: 'usd-coin',
        },
      },
      {
        params: {
          tokenId: 'binancecoin',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { tokenId } = context.params;

  // const client = await MongoClient.connect(
  //   'mongodb+srv://sokrat:sokrat12345@cluster0.x2cvw.mongodb.net/cmcx?retryWrites=true&w=majority',
  // );
  // const db = client.db();

  // const InfoTokensDetails = db.collection('InfoTokensDetails');
  // const tokensData = await InfoTokensDetails.findOne({ id: 1 });

  // delete tokensData._id;

  // client.close();

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tokenId}`,
  );

  const tokensData = await res.json();

  // console.log(tokensData);

  return {
    props: {
      infoTokensDetails: {
        ...tokensData[0],
      },
    },
  };
}
