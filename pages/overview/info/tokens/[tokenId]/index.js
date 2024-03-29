import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import TokenSection from '../../../../../components/Info/components/TokensSection/TokenSection';
import BackgroundImg from '../../../../../public/images/Info/background/background.png';

import styles from '../../../../../components/Info/InfoPages.module.css';

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

export async function getStaticPaths(context) {
  console.log(context);
  return {
    fallback: true,
    paths: [
      // { params: { tokenId: 'bitcoin' }, locale: 'ge' },
      // { params: { tokenId: 'bitcoin' }, locale: 'en' },
      // { params: { tokenId: 'bitcoin' }, locale: 'fr' },
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

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tokenId}`);

  const tokensData = await res.json();

  return {
    props: {
      infoTokensDetails: {
        ...tokensData[0],
      },
    },
  };
}

const index = props => {
  const router = useRouter();
  const { tokenId } = router.query;

  return <TokenSection data={props.infoTokensDetails} />
};

export default index;
