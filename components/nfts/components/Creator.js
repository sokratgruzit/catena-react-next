import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useNftMarket } from '../../../hooks/useNftMarket';

import ListItemCard from '../../UI/listItem/ListItemCard';
import ListItemRow from '../../UI/listItem/ListItemRow';
import DropDownFilter from '../../UI/filters/DropDownFilter';
import AddressSearch from '../../UI/AddressSearch/AddressSearch';
import DataBox from '../../UI/dataBox/DataBox.js';
import ArrowBtn from '../../UI/button/ArrowBtn';
import ActivityTable from './ActivityTable';
import Expand from '../../UI/expand/Expand';
import Question from './Question';

import styles from './Creator.module.css';

const Creator = () => {
  let content = '';
  const azukiItems = [
    {
      id: 0,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
      event: 'On Sale',
    },
    {
      id: 1,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
      event: 'On Sale',
    },
    {
      id: 2,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
      event: 'On Sale',
    },
    {
      id: 3,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
      event: 'On Sale',
    },
    {
      id: 4,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
    },
    {
      id: 5,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
      event: 'On Sale',
    },
    {
      id: 6,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
    },
    {
      id: 7,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
    },
    {
      id: 8,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
    },
    {
      id: 9,
      title: 'Alpha Kongs Club - AKC',
      subTitle: 'Alpha Kong #8223',
      imgSrc: '/images/nft/arrivals/fig1.png',
      value: 'CMCX',
      price: '10.24',
      priceUSD: '10.301',
      event: 'On Sale',
    },
  ];
  const azukiTraits = [
    {
      id: 0,
      name: 'Background',
      title1: 'Pink',
      count1: 882,
      rarity1: '11.34%',
      title2: 'Army Green',
      count2: 876,
      rarity2: '11.29%',
      title3: 'Gray',
      count3: 830,
      rarity3: '11.19%',
      title4: 'Mint Green',
      count4: 776,
      rarity4: '10.67%',
      title5: 'Tan',
      count5: 775,
      rarity5: '10.6%',
      title6: 'Orange',
      count6: 170,
      rarity6: '9.98%',
    },
    {
      id: 1,
      name: 'Base',
      title1: 'Pink',
      count1: 882,
      rarity1: '11.34%',
      title2: 'Army Green',
      count2: 876,
      rarity2: '11.29%',
      title3: 'Gray',
      count3: 830,
      rarity3: '11.19%',
      title4: 'Mint Green',
      count4: 776,
      rarity4: '10.67%',
      title5: 'Tan',
      count5: 775,
      rarity5: '10.6%',
      title6: 'Orange',
      count6: 170,
      rarity6: '9.98%',
    },
    {
      id: 2,
      name: 'Clothing',
      title1: 'Pink',
      count1: 882,
      rarity1: '11.34%',
      title2: 'Army Green',
      count2: 876,
      rarity2: '11.29%',
      title3: 'Gray',
      count3: 830,
      rarity3: '11.19%',
      title4: 'Mint Green',
      count4: 776,
      rarity4: '10.67%',
      title5: 'Tan',
      count5: 775,
      rarity5: '10.6%',
      title6: 'Orange',
      count6: 170,
      rarity6: '9.98%',
    },
    {
      id: 3,
      name: 'Eyes',
      title1: 'Pink',
      count1: 882,
      rarity1: '11.34%',
      title2: 'Army Green',
      count2: 876,
      rarity2: '11.29%',
      title3: 'Gray',
      count3: 830,
      rarity3: '11.19%',
      title4: 'Mint Green',
      count4: 776,
      rarity4: '10.67%',
      title5: 'Tan',
      count5: 775,
      rarity5: '10.6%',
      title6: 'Orange',
      count6: 170,
      rarity6: '9.98%',
    },
    {
      id: 4,
      name: 'Hat',
      title1: 'Pink',
      count1: 882,
      rarity1: '11.34%',
      title2: 'Army Green',
      count2: 876,
      rarity2: '11.29%',
      title3: 'Gray',
      count3: 830,
      rarity3: '11.19%',
      title4: 'Mint Green',
      count4: 776,
      rarity4: '10.67%',
      title5: 'Tan',
      count5: 775,
      rarity5: '10.6%',
      title6: 'Orange',
      count6: 170,
      rarity6: '9.98%',
    },
    {
      id: 5,
      name: 'Mouth',
      title1: 'Pink',
      count1: 882,
      rarity1: '11.34%',
      title2: 'Army Green',
      count2: 876,
      rarity2: '11.29%',
      title3: 'Gray',
      count3: 830,
      rarity3: '11.19%',
      title4: 'Mint Green',
      count4: 776,
      rarity4: '10.67%',
      title5: 'Tan',
      count5: 775,
      rarity5: '10.6%',
      title6: 'Orange',
      count6: 170,
      rarity6: '9.98%',
    },
    {
      id: 6,
      name: 'Prop',
      title1: 'Pink',
      count1: 882,
      rarity1: '11.34%',
      title2: 'Army Green',
      count2: 876,
      rarity2: '11.29%',
      title3: 'Gray',
      count3: 830,
      rarity3: '11.19%',
      title4: 'Mint Green',
      count4: 776,
      rarity4: '10.67%',
      title5: 'Tan',
      count5: 775,
      rarity5: '10.6%',
      title6: 'Orange',
      count6: 170,
      rarity6: '9.98%',
    },
  ];
  let nftActivityData = [
    {
      id: 0,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 1,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Modified',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 2,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Modified',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 3,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 4,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 6,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 7,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 8,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Delisted',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 10,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 11,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 12,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Delisted',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 3555,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 411,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Sold',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 51,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 6343,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 72,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 999,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 15234234,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 21,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 13854345,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 4343,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 5551,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 61,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
    {
      id: 71,
      data: [
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'Alpha Kong #8223',
          subTitle: 'Alpha Kongs Club - AKC',
          type: 'img_text',
        },
        {
          text: 'Listed',
          type: 'text',
        },
        {
          symbol: 'CMCX',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          type: 'price',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: 'BilanCh',
          subTitle: '0xC7...061b',
          type: 'mini-img_text',
        },
        {
          img: '/images/nft/nft_activity_items/fig4.png',
          title: '-',
          subTitle: '0xF5...301c',
          type: 'mini-img_text',
        },
        {
          title: '4.7.2022',
          subTitle: '6:28 PM',
          type: 'svg',
        },
      ],
      lowestPrice: '0.198',
      hightestPrice: '10,000',
      items: '895',
      supply: '7777',
    },
  ];

  const [activeTab, setActiveTab] = useState('items');
  const [activeItem, setActiveItem] = useState(null);
  const [screeWidth, setScreenWidth] = useState(window.innerWidth);
  const [activityActiveTab, setactivityActiveTab] = useState('Listed');
  const [toggle, setToggle] = useState(false);
  const [myNfts, setMyNfts] = useState([]);
  const [nfts, setNfts] = useState([]);

  const { 
    account,
    fetchMyNFTsOrListedNFTs,
  } = useNftMarket();

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  let listItemType = <ActivityTable activityData={nftActivityData} activeTab={activeTab} onTabClick={handleTabClick} />;

  let openItem = id => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    if (account) {
      fetchMyNFTsOrListedNFTs("fetchItemsListed")
      .then(items => {
        setNfts(items);
      });
  
      fetchMyNFTsOrListedNFTs("fetchMyNfts")
      .then(items => {
        setMyNfts(items);
      });
    }
  }, [account]);

  console.log(myNfts, nfts)

  if (activeTab === 'items') {
    content = (
      <div className={`  ${styles.nftCreatorWrapper}`}>
        <DropDownFilter />
        <div className={styles.Creator__productsWrap}>
          {myNfts?.map(item => {
            return <ListItemCard key={item?.tokenId} data={item} type={'nft_creator'} />;
          })}
        </div>
        <div className={styles.Creator__productsWrap}>
          {nfts?.map(item => {
            return <ListItemCard key={item?.tokenId} data={item} type={'nft_creator'} />;
          })}
        </div>
      </div>
    );
  }

  if (activeTab === 'traits') {
    content = (
      <div className={`${styles.Creator__traits} }`}>
        {azukiTraits.map((item, index) => {
          return (
            <div key={index}>
              <Expand
                expandContent={
                  <div>
                    <div className={styles.Traits__tableWrap}>
                      <div className={styles.Traits__header}>
                        <p>Name</p>
                        <p>Count</p>
                        <div className={styles.Traits__table__rarity}>
                          <p>Rarity</p>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M6.64216 15.7084C6.25564 16.0957 5.62835 16.0963 5.24106 15.7098L1.1017 11.5787C0.714411 11.1922 0.713786 10.5649 1.1003 10.1776C1.48682 9.79031 2.11412 9.78968 2.50141 10.1762L6.64076 14.3073C7.02805 14.6938 7.02868 15.3211 6.64216 15.7084Z'
                              fill='#162029'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M5.94091 -4.33061e-08C6.48808 -1.93888e-08 6.93164 0.443565 6.93164 0.990729L6.93164 15.0085C6.93164 15.5556 6.48808 15.9992 5.94091 15.9992C5.39375 15.9992 4.95018 15.5556 4.95018 15.0085L4.95018 0.990729C4.95018 0.443564 5.39375 -6.72235e-08 5.94091 -4.33061e-08Z'
                              fill='#162029'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M15.7105 5.82169C15.324 6.20898 14.6967 6.20961 14.3094 5.82309L10.1701 1.69198C9.78277 1.30546 9.78214 0.678166 10.1687 0.290876C10.5552 -0.0964129 11.1825 -0.0970383 11.5698 0.289479L15.7091 4.42059C16.0964 4.80711 16.097 5.43441 15.7105 5.82169Z'
                              fill='#162029'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M10.8706 -4.33061e-08C11.4178 -1.93888e-08 11.8613 0.443565 11.8613 0.990729L11.8613 15.0085C11.8613 15.5556 11.4178 15.9992 10.8706 15.9992C10.3234 15.9992 9.87987 15.5556 9.87987 15.0085L9.87987 0.990729C9.87987 0.443564 10.3234 -6.72235e-08 10.8706 -4.33061e-08Z'
                              fill='#162029'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={styles.Traits__itemsWrap}>
                        <div className={styles.Traits__item}>
                          <p>{item.title1}</p>
                          <p>{item.count1}</p>
                          <p>{item.rarity1}</p>
                        </div>
                        <div className={styles.Traits__item}>
                          <p>{item.title2}</p>
                          <p>{item.count2}</p>
                          <p>{item.rarity2}</p>
                        </div>
                        <div className={styles.Traits__item}>
                          <p>{item.title3}</p>
                          <p>{item.count3}</p>
                          <p>{item.rarity3}</p>
                        </div>
                        <div className={styles.Traits__item}>
                          <p>{item.title4}</p>
                          <p>{item.count4}</p>
                          <p>{item.rarity4}</p>
                        </div>
                        <div className={styles.Traits__item}>
                          <p>{item.title5}</p>
                          <p>{item.count5}</p>
                          <p>{item.rarity5}</p>
                        </div>
                        <div className={styles.Traits__item}>
                          <p>{item.title5}</p>
                          <p>{item.count5}</p>
                          <p>{item.rarity5}</p>
                        </div>
                        <div className={styles.Traits__item}>
                          <p>{item.title6}</p>
                          <p>{item.count6}</p>
                          <p>{item.rarity6}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                onChildClick={true}
                className={styles.borderBottom}
              >
                <Question title={item.name} setToggle={setToggle} />
              </Expand>
            </div>
          );
        })}
      </div>
    );
  }

  if (activeTab === 'activity') {
    content = listItemType;
  }

  return (
    <div className={`${styles.Creator} container`}>
      <div className={`${styles.Creator__inner} `}>
        <Link href={`/nfts/collections`}>
          <div className={styles.Creator__backBtn}>
            <ArrowBtn route={'back__collections'} direction={'back'} />
          </div>
        </Link>
        <AddressSearch type={'creator'} />
      </div>
      <div className={styles.Creator__imgs}>
        <img className={styles.Creator__cover} src='/images/nft/nft_owner_page/fig1.png' />
        <img className={styles.Creator__logo} src='/images/nft/nft_owner_page/logo1.png' />
      </div>
      <div className={`${styles.Creator__info}  `}>
        <p className='font_30 ttl'>Azuki</p>
        <div className={styles.Creator__hotLink}>
          <a target='blank' href='https://www.azuki.com/'>
            <p>Azuki.com</p>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M16.4858 14.5114C16.602 14.3952 16.6754 14.2361 16.6754 14.0526L16.6754 6.62724C16.6744 6.4556 16.6057 6.29128 16.4844 6.16991C16.363 6.04854 16.1987 5.9799 16.027 5.97889L8.60163 5.97889C8.24687 5.97889 7.95328 6.27248 7.95328 6.62724C7.95328 6.98199 8.24687 7.27558 8.60163 7.27558L15.3787 7.27558L15.3787 14.0526C15.3787 14.4074 15.6723 14.701 16.027 14.701C16.2044 14.7071 16.3696 14.6276 16.4858 14.5114Z'
                fill='#FF6969'
              />
              <path
                d='M6.08854 17.4827L16.3826 7.18871C16.6333 6.93793 16.6333 6.52201 16.3826 6.27124C16.1318 6.02046 15.7159 6.02046 15.4651 6.27124L5.17107 16.5653C4.92029 16.816 4.92029 17.232 5.17107 17.4827C5.42184 17.7335 5.83776 17.7335 6.08854 17.4827Z'
                fill='#FF6969'
              />
            </svg>
          </a>
        </div>
        <p className={styles.nftCreator__infoTeaser}>
          Azuki starts with a collection of 10,000 avatars that give you membership access. Azuki holders receive access
          to exclusive drops,experiences, and more.
        </p>
      </div>
      <DataBox type={'creator'} items={4} />
      <div className={`${styles.Creator__filter} `}>
        <div className={styles.Creator__filter__inner}>
          <ul>
            <li
              onClick={() => {
                setActiveTab('items');
              }}
              className={activeTab === 'items' ? styles.Creator__active__filter : styles.Creator__deactive__filter}
            >
              Items
            </li>
            <li
              onClick={() => {
                setActiveTab('traits');
              }}
              className={activeTab === 'traits' ? styles.Creator__active__filter : styles.Creator__deactive__filter}
            >
              Traits
            </li>
            <li
              onClick={() => {
                setActiveTab('activity');
              }}
              className={activeTab === 'activity' ? styles.Creator__active__filter : styles.Creator__deactive__filter}
            >
              Activity
            </li>
          </ul>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Creator;
