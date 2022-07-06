import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

import Buy from "../../../../components/nfts/components/Buy";

const nftItemData = {
  imgSrc: '/images/nft/nft_owner_page/item1.png',
  title: 'Mutant Ape Yacht Club',
  value: '#314',
  blockQuote: '10,000 unique, randomly-generated PancakeSwap NFTs from the mind of Chef Cecy Meade. Join the squad.',
  cmcx: '0.0024',
  usd: '($1,314)'
};

const ownerItemData = [
  {
      id: 0,
      cmcx: '0.0123',
      usd: '(~$5.028)',
      ownerImg: '/images/nft/nft_buy/item2.png',
      ownerTitle: 'BilanCh',
      ownerAddress: '0xC7...061b'
  },
  {
      id: 1,
      cmcx: '0.0123',
      usd: '(~$5.028)',
      ownerImg: '/images/nft/nft_buy/item2.png',
      ownerTitle: 'BilanCh',
      ownerAddress: '0xC7...061b'
  },
  {
      id: 2,
      cmcx: '0.0123',
      usd: '(~$5.028)',
      ownerImg: '/images/nft/nft_buy/item2.png',
      ownerTitle: 'BilanCh',
      ownerAddress: '0xC7...061b'
  }
];

const detailsTableData = [
  {
      id: 0,
      cmcx: '0.0123',
      usd: '(~$5.028)',
      fromImg: '/images/nft/nft_buy/item2.png',
      from: 'BilanCh',
      toImg: '/images/nft/nft_buy/item3.png',
      to: '-',
      fromAddress: '0xC7...061b',
      toAddress: '0xC7...062b',
      date: '4.7.2022',
      time: '13:13',
      event: 'Modified'
  },
  {
      id: 1,
      cmcx: '0.0123',
      usd: '(~$5.028)',
      fromImg: '/images/nft/nft_buy/item2.png',
      from: 'BilanCh',
      toImg: '/images/nft/nft_buy/item3.png',
      to: '-',
      fromAddress: '0xC7...061b',
      toAddress: '0xC7...062b',
      date: '4.7.2022',
      time: '13:13',
      event: 'Sold'
  },
  {
      id: 2,
      cmcx: '0.0123',
      usd: '(~$5.028)',
      fromImg: '/images/nft/nft_buy/item2.png',
      from: 'BilanCh',
      toImg: '/images/nft/nft_buy/item3.png',
      to: '-',
      fromAddress: '0xC7...061b',
      toAddress: '0xC7...062b',
      date: '4.7.2022',
      time: '13:13',
      event: 'Delisted'
  },
  {
      id: 3 ,
      cmcx: '0.0123',
      usd: '(~$5.028)',
      fromImg: '/images/nft/nft_buy/item2.png',
      from: 'BilanCh',
      toImg: '/images/nft/nft_buy/item3.png',
      to: '-',
      toAddress: '0xC7...062b',
      fromAddress: '0xC7...061b',
      date: '4.7.2022',
      time: '13:13',
      event: 'Listed'
  }
];

const collectionItems = [
  {
      id: 0,
      img: '/images/nft/nft_buy/item4.png',
      title: 'Mutant Ape Yacht Club',
      subTitle: 'Alpha Kong #8223',
      priceCmcx: '1.024',
      priceUsd: '($10,314)'
  },
  {
      id: 1,
      img: '/images/nft/nft_buy/item4.png',
      title: 'Mutant Ape Yacht Club',
      subTitle: 'Alpha Kong #8223',
      priceCmcx: '1.024',
      priceUsd: '($10,314)'
  },
  {
      id:2,
      img: '/images/nft/nft_buy/item4.png',
      title: 'Mutant Ape Yacht Club',
      subTitle: 'Alpha Kong #8223',
      priceCmcx: '1.024',
      priceUsd: '($10,314)'
  },
  {
      id:3,
      img: '/images/nft/nft_buy/item4.png',
      title: 'Mutant Ape Yacht Club',
      subTitle: 'Alpha Kong #8223',
      priceCmcx: '1.024',
      priceUsd: '($10,314)'
  },
  {
      id:4,
      img: '/images/nft/nft_buy/item4.png',
      title: 'Mutant Ape Yacht Club',
      subTitle: 'Alpha Kong #8223',
      priceCmcx: '1.024',
      priceUsd: '($10,314)'
  },
  {
      id:5,
      img: '/images/nft/nft_buy/item4.png',
      title: 'Mutant Ape Yacht Club',
      subTitle: 'Alpha Kong #8223',
      priceCmcx: '1.024',
      priceUsd: '($10,314)'
  },
  {
      id:6,
      img: '/images/nft/nft_buy/item4.png',
      title: 'Mutant Ape Yacht Club',
      subTitle: 'Alpha Kong #8223',
      priceCmcx: '1.024',
      priceUsd: '($10,314)'
  },
  {
      id:7,
      img: '/images/nft/nft_buy/item4.png',
      title: 'Mutant Ape Yacht Club',
      subTitle: 'Alpha Kong #8223',
      priceCmcx: '1.024',
      priceUsd: '($10,314)'
  }
];

const BuyPage = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <Buy { ...props } />;
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{
      params: {
        buyId: "62c48170c86d95e8a1871733",
      },
      params: {
        buyId: "1",
      },
      params: {
        buyId: "2",
      },
      params: {
        buyId: "3",
      },
      params: {
        buyId: "4",
      },
      params: {
        buyId: "5",
      }
    }]
  };
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect("mongodb+srv://sokrat:sokrat12345@cluster0.x2cvw.mongodb.net/cmcx?retryWrites=true&w=majority");
  const db = client.db();

  const buyCollection = db.collection("buyInfo");
  const buyInfo = await buyCollection.find().toArray();

  client.close();
  const buyId = context.params.buyId;
  console.log(buyInfo);

  return {
    props: {
      buyDetails: buyInfo/*buyInfo.map(info => ({
        imgSrc: info.imgSrc,
        title: info.title,
        value: info.value,
        blockQuote: info.blockQuote,
        cmcx: info.cmcx,
        usd: info.usd,
        id: info._id.toString()
      }))*/,
      ownerItems: ownerItemData,
      detailsItems: detailsTableData,
      collectionsItems: collectionItems
    }
  };
}

export default BuyPage;
