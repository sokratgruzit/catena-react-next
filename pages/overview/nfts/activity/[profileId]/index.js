import React from 'react';
import Profile from '../../../../../components/nfts/components/Profile';

function profile() {
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

  return (
    <div>
      <Profile nftArrivalsData={nftArrivalsData} achivements={achivements} />
    </div>
  );
}

export default profile;
