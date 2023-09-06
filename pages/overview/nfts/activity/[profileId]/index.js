import React from 'react';
import { useRouter } from 'next/router';
import Profile from '../../../../../components/nfts/components/Profile';

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      { params: { profileId: 'some-profile-id-1' } },
      { params: { profileId: 'some-profile-id-2' } },
      { params: { profileId: 'some-profile-id-3' } },
      { params: { profileId: 'some-profile-id-4' } },
      { params: { profileId: 'some-profile-id-5' } },
      { params: { profileId: 'some-profile-id-6' } },
    ],
  };
}

export async function getStaticProps(context) {
  return {
    props: {
      buyDetails: {
        imgSrc: '',
        title: '',
        value: '',
        blockQuote: '',
        cmcx: '',
        usd: '',
        id: '',
      },
      ownerItems: '',
      detailsItems: '',
      collectionsItems: '',
    },
  };
}

const index = props => {
  let nftArrivalsData = [
    {
      id: 0,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
    {
      id: 1,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
    {
      id: 2,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
    {
      id: 3,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
    {
      id: 4,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
    {
      id: 5,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
    {
      id: 6,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
    {
      id: 7,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
    {
      id: 8,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
    {
      id: 9,
      imgSrc: '/images/nft/arrivals/fig1.png',
      title: 'Alfa Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '$10,314',
    },
  ];

  let achivements = [
    {
      id: 0,
      img: '/images/nft/profile/achivement.png',
      teaser: '1 Years',
      text: 'Joined Catena during the first year of our journey!',
    },
    {
      id: 1,
      img: '/images/nft/profile/achivement.png',
      teaser: '1 Years',
      text: 'Joined Catena during the first year of our journey!',
    },
    {
      id: 2,
      img: '/images/nft/profile/achivement.png',
      teaser: '1 Years',
      text: 'Joined Catena during the first year of our journey!',
    },
    {
      id: 3,
      img: '/images/nft/profile/achivement.png',
      teaser: '1 Years',
      text: 'Joined Catena during the first year of our journey!',
    },
    {
      id: 4,
      img: '/images/nft/profile/achivement.png',
      teaser: '1 Years',
      text: 'Joined Catena during the first year of our journey!',
    },
  ];
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <Profile nftArrivalsData={nftArrivalsData} achivements={achivements} {...props} />;
};

export default index;
