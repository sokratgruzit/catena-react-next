import { useRouter } from 'next/router';

import Buy from '../../../../../components/nfts/components/Buy';

const collections = [
  '0x4bd2a30435e6624CcDee4C60229250A84a2E4cD6',
  '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07',
  '0x11304895f41C5A9b7fBFb0C4B011A92f1020EF96',
  '0x3347e7AD69068E5D931B8De98fFc6e536cdf10eA',
  '0xA46A4920B40f134420b472B16b3328d74D7B6B70',
  '0xebFBFD7C41B123500fb16B71C43B400c12B08bE0',
  '0x57A7c5d10c3F87f5617Ac1C60DA60082E44D539e',
  '0x98F606A4cdDE68b9f68732D21fb9bA8B5510eE48',
];

const nftOwners = [
  '0x9d0fbf84f1173f6108170c00a3fead067fcf86d2',
  '0xfd21125fbd33dffec4a0ac0c87dc4e4316e4a153',
  '0x26a1dc454cbd9bd138337762e6cb261c3266b6e2',
];

const creator = ['0x2188c2e746ea138d7d3c7bf6f16a32947363f56e'];

const ownerItemData = [
  {
    id: 0,
    cmcx: '0.0123',
    usd: '(~$5.028)',
    ownerImg: '/images/nft/nft_buy/item2.png',
    ownerTitle: 'BilanCh',
    ownerAddress: '0xC7...061b',
  },
  {
    id: 1,
    cmcx: '0.0123',
    usd: '(~$5.028)',
    ownerImg: '/images/nft/nft_buy/item2.png',
    ownerTitle: 'BilanCh',
    ownerAddress: '0xC7...061b',
  },
  {
    id: 2,
    cmcx: '0.0123',
    usd: '(~$5.028)',
    ownerImg: '/images/nft/nft_buy/item2.png',
    ownerTitle: 'BilanCh',
    ownerAddress: '0xC7...061b',
  },
];

const detailsTableData = [
  {
    id: 0,
    data: [
      {
        text: 'Modified',
        type: 'text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0123',
        priceInDollar: '(~$5.028)',
        type: 'price',
      },
      {
        img: '/images/nft/nft_buy/item2.png',
        title: 'BilanCh',
        subTitle: '0xC7...061b',
        type: 'img_text',
      },
      {
        img: '/images/nft/nft_buy/item3.png',
        title: '-',
        subTitle: '0xC7...062b',
        type: 'img_text',
      },
      {
        title: '4.7.2022',
        subTitle: '13:13',
        type: 'svg',
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        text: 'Sold',
        type: 'text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0123',
        priceInDollar: '(~$5.028)',
        type: 'price',
      },
      {
        img: '/images/nft/nft_buy/item2.png',
        title: 'BilanCh',
        subTitle: '0xC7...061b',
        type: 'img_text',
      },
      {
        img: '/images/nft/nft_buy/item3.png',
        title: '-',
        subTitle: '0xC7...062b',
        type: 'img_text',
      },
      {
        title: '4.7.2022',
        subTitle: '13:13',
        type: 'svg',
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        text: 'Delisted',
        type: 'text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0123',
        priceInDollar: '(~$5.028)',
        type: 'price',
      },
      {
        img: '/images/nft/nft_buy/item2.png',
        title: 'BilanCh',
        subTitle: '0xC7...061b',
        type: 'img_text',
      },
      {
        img: '/images/nft/nft_buy/item3.png',
        title: '-',
        subTitle: '0xC7...062b',
        type: 'img_text',
      },
      {
        title: '4.7.2022',
        subTitle: '13:13',
        type: 'svg',
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        text: 'Listed',
        type: 'text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0123',
        priceInDollar: '(~$5.028)',
        type: 'price',
      },
      {
        img: '/images/nft/nft_buy/item2.png',
        title: 'BilanCh',
        subTitle: '0xC7...061b',
        type: 'img_text',
      },
      {
        img: '/images/nft/nft_buy/item3.png',
        title: '-',
        subTitle: '0xC7...062b',
        type: 'img_text',
      },
      {
        title: '4.7.2022',
        subTitle: '13:13',
        type: 'svg',
      },
    ],
  },
];

const collectionItems = [
  {
    id: 0,
    img: '/images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 1,
    img: '/images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 2,
    img: '/images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 3,
    img: '/images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 4,
    img: '/images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 5,
    img: '/images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 6,
    img: '/images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 7,
    img: '/images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
];

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      { params: { buyId: '62c48170c86d95e8a1871733' } },
      { params: { buyId: '1' } },
      { params: { buyId: '2' } },
      { params: { buyId: '3' } },
      { params: { buyId: '4' } },
      { params: { buyId: '5' } },
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
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <Buy {...props} />;
};

export default index;
