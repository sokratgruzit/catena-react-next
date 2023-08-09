import Overview from '../../../components/nfts/Overview';

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

export async function getStaticProps() {
  return {
    props: {
      arrivals: nftArrivalsData,
    },
  };
}

const NftsPage = props => {
  return <Overview {...props} />;
};

export default NftsPage;
