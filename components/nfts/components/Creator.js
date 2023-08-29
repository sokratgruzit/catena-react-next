// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// // import ListItemCard from '../../UI/listItem/ListItemCard';
// import styles from './Creator.module.css';
// import ListItemRow from '../../UI/listItem/ListItemRow';
// import ListItemCard from '../../UI/listItem/ListItemCard';

// // import DropDownFilter from "../../UI/filters/DropDownFilter";
// // import ListItemRow from '../../UI/listItem/ListItemRow';
// // import AddressSearch from '../../UI/AddressSearch/AddressSearch';
// // import DropDown from '../../UI/dropDown/DropDown';
// // import DataBox from '../../UI/dataBox/DataBox.js';

// const Creator = props => {
//   const azukiItems = [
//     {
//       id: 0,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//       event: 'On Sale',
//     },
//     {
//       id: 1,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//       event: 'On Sale',
//     },
//     {
//       id: 2,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//       event: 'On Sale',
//     },
//     {
//       id: 3,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//       event: 'On Sale',
//     },
//     {
//       id: 4,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//     },
//     {
//       id: 5,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//       event: 'On Sale',
//     },
//     {
//       id: 6,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//     },
//     {
//       id: 7,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//     },
//     {
//       id: 8,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//     },
//     {
//       id: 9,
//       title: 'Alpha Kongs Club - AKC',
//       subTitle: 'Alpha Kong #8223',
//       imgSrc: '../../images/nft/arrivals/fig1.png',
//       value: 'CMCX',
//       price: '10.24',
//       priceUSD: '10.301',
//       event: 'On Sale',
//     },
//   ];
//   const azukiTraits = [
//     {
//       id: 0,
//       name: 'Background',
//       title1: 'Pink',
//       count1: 882,
//       rarity1: '11.34%',
//       title2: 'Army Green',
//       count2: 876,
//       rarity2: '11.29%',
//       title3: 'Gray',
//       count3: 830,
//       rarity3: '11.19%',
//       title4: 'Mint Green',
//       count4: 776,
//       rarity4: '10.67%',
//       title5: 'Tan',
//       count5: 775,
//       rarity5: '10.6%',
//       title6: 'Orange',
//       count6: 170,
//       rarity6: '9.98%',
//     },
//     {
//       id: 1,
//       name: 'Base',
//       title1: 'Pink',
//       count1: 882,
//       rarity1: '11.34%',
//       title2: 'Army Green',
//       count2: 876,
//       rarity2: '11.29%',
//       title3: 'Gray',
//       count3: 830,
//       rarity3: '11.19%',
//       title4: 'Mint Green',
//       count4: 776,
//       rarity4: '10.67%',
//       title5: 'Tan',
//       count5: 775,
//       rarity5: '10.6%',
//       title6: 'Orange',
//       count6: 170,
//       rarity6: '9.98%',
//     },
//     {
//       id: 2,
//       name: 'Clothing',
//       title1: 'Pink',
//       count1: 882,
//       rarity1: '11.34%',
//       title2: 'Army Green',
//       count2: 876,
//       rarity2: '11.29%',
//       title3: 'Gray',
//       count3: 830,
//       rarity3: '11.19%',
//       title4: 'Mint Green',
//       count4: 776,
//       rarity4: '10.67%',
//       title5: 'Tan',
//       count5: 775,
//       rarity5: '10.6%',
//       title6: 'Orange',
//       count6: 170,
//       rarity6: '9.98%',
//     },
//     {
//       id: 3,
//       name: 'Eyes',
//       title1: 'Pink',
//       count1: 882,
//       rarity1: '11.34%',
//       title2: 'Army Green',
//       count2: 876,
//       rarity2: '11.29%',
//       title3: 'Gray',
//       count3: 830,
//       rarity3: '11.19%',
//       title4: 'Mint Green',
//       count4: 776,
//       rarity4: '10.67%',
//       title5: 'Tan',
//       count5: 775,
//       rarity5: '10.6%',
//       title6: 'Orange',
//       count6: 170,
//       rarity6: '9.98%',
//     },
//     {
//       id: 4,
//       name: 'Hat',
//       title1: 'Pink',
//       count1: 882,
//       rarity1: '11.34%',
//       title2: 'Army Green',
//       count2: 876,
//       rarity2: '11.29%',
//       title3: 'Gray',
//       count3: 830,
//       rarity3: '11.19%',
//       title4: 'Mint Green',
//       count4: 776,
//       rarity4: '10.67%',
//       title5: 'Tan',
//       count5: 775,
//       rarity5: '10.6%',
//       title6: 'Orange',
//       count6: 170,
//       rarity6: '9.98%',
//     },
//     {
//       id: 5,
//       name: 'Mouth',
//       title1: 'Pink',
//       count1: 882,
//       rarity1: '11.34%',
//       title2: 'Army Green',
//       count2: 876,
//       rarity2: '11.29%',
//       title3: 'Gray',
//       count3: 830,
//       rarity3: '11.19%',
//       title4: 'Mint Green',
//       count4: 776,
//       rarity4: '10.67%',
//       title5: 'Tan',
//       count5: 775,
//       rarity5: '10.6%',
//       title6: 'Orange',
//       count6: 170,
//       rarity6: '9.98%',
//     },
//     {
//       id: 6,
//       name: 'Prop',
//       title1: 'Pink',
//       count1: 882,
//       rarity1: '11.34%',
//       title2: 'Army Green',
//       count2: 876,
//       rarity2: '11.29%',
//       title3: 'Gray',
//       count3: 830,
//       rarity3: '11.19%',
//       title4: 'Mint Green',
//       count4: 776,
//       rarity4: '10.67%',
//       title5: 'Tan',
//       count5: 775,
//       rarity5: '10.6%',
//       title6: 'Orange',
//       count6: 170,
//       rarity6: '9.98%',
//     },
//   ];
//   let nftActivityData = [
//     {
//       id: 0,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Listed',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 1,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Sold',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 2,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Delisted',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 3,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Modified',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 4,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Collection',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 5,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Listed',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 6,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Modified',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 7,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Sold',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 12312323,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Listed',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 13232,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Sold',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 22222,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Delisted',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 3555,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Modified',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 411,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Collection',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 51,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Listed',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 6343,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Modified',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 72,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Sold',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 999,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Listed',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 15,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Sold',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 4343,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Collection',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 5551,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Listed',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 61,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Modified',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//     {
//       id: 71,
//       itemImg: '../../images/nft/nft_activity_items/item1.png',
//       itemTitle: 'Alpha Kong #8223',
//       itemSubTitle: 'Alpha Kongs Club - AKC',
//       event: 'Sold',
//       priceInCmcx: '0.0123',
//       priceInDollar: '(~$51.028)',
//       fromImg: '../../images/nft/nft_activity_items/sub_item1.png',
//       from: 'BilanCh',
//       fromAddress: '0xC7...061b',
//       toReciverImg: '../../images/nft/nft_activity_items/sub_item2.png',
//       toReciver: '-',
//       toReciverAddress: '0xF5...301c',
//       dateDay: '4.7.2022',
//       dateTime: '6:28 PM',
//       lowestPrice: '0.198',
//       hightestPrice: '10,000',
//       items: '895',
//       supply: '7777',
//     },
//   ];

//   const [activeTab, setActiveTab] = useState('items');
//   const [activeItem, setActiveItem] = useState(null);
//   const [screeWidth, setScreenWidth] = useState(window.innerWidth);

//   let content = '';
//   let listItemType = (
//     <div className={`${styles.TableRow} container }`}>
//       <div className={styles.TableRow__header}>
//         <p>Name</p>
//         <p>Event</p>
//         <p>Price</p>
//         <p>From</p>
//         <p>To</p>
//         <p>Date</p>
//       </div>
//       {nftActivityData.map(item => {
//         return <ListItemRow key={item.id} data={item} type={'nft_creator_activity'} />;
//       })}
//     </div>
//   );

//   let openItem = id => {
//     if (activeItem === id) {
//       setActiveItem(null);
//     } else {
//       setActiveItem(id);
//     }
//   };

//   useEffect(() => {
//     setScreenWidth(window.innerWidth);
//   }, []);

//   if (screeWidth < 1200) {
//     listItemType = (
//       <div className={styles.Activity__wrap}>
//         {nftActivityData.map(item => {
//           return <ListItemCard key={item.id + 'mobile'} data={item} type={'nft_creator_mobile'} />;
//         })}
//       </div>
//     );
//   }
//   if (activeTab === 'items') {
//     content = (
//       <div className={` container ${styles.nftCreatorWrapper}`}>
//         {/* <DropDownFilter /> */}
//         {/* <DropDown /> */}
//         <div className={styles.Creator__itemsSum}>
//           <p>12,203 Items</p>
//         </div>
//         <div className={styles.Creator__productsWrap}>
//           {azukiItems.map(item => {
//             return <ListItemCard key={item.id} data={item} type={'nft_creator'} />;
//           })}
//         </div>
//       </div>
//     );
//   }
//   if (activeTab === 'traits') {
//     content = (
//       <div className={`${styles.Creator__traits} container }`}>
//         {azukiTraits.map(itemTraits => {
//           return (
//             <div
//               onClick={() => {
//                 openItem(itemTraits.id);
//               }}
//               key={itemTraits.id}
//               className={`${styles.Traits__name} ${activeItem === itemTraits.id ? styles.opend : ''}`}
//             >
//               <div className={styles.Traits__name__title}>
//                 <p className='font_20'>{itemTraits.name}</p>
//                 <svg
//                   className={activeItem === itemTraits.id ? styles.Traits__svg : styles.Traits__svg__default}
//                   width='15'
//                   height='9'
//                   viewBox='0 0 15 9'
//                   fill='none'
//                   xmlns='http://www.w3.org/2000/svg'
//                 >
//                   <path
//                     fillRule='evenodd'
//                     clipRule='evenodd'
//                     d='M0.862229 1.16985C1.25275 0.779322 1.88592 0.779322 2.27644 1.16985L7.21584 6.10924C7.40865 6.30205 7.73003 6.30205 7.92283 6.10924L12.8622 1.16985C13.2528 0.779322 13.8859 0.779322 14.2764 1.16985C14.667 1.56037 14.667 2.19354 14.2764 2.58406L9.33705 7.52345C8.36319 8.49731 6.77548 8.49731 5.80162 7.52345L0.862229 2.58406C0.471705 2.19354 0.471705 1.56037 0.862229 1.16985Z'
//                     fill='white'
//                   />
//                 </svg>
//               </div>
//               <div className={styles.Traits__tableWrap}>
//                 <div className={styles.Traits__header}>
//                   <p className='font_13'>Name</p>
//                   <p className='font_13'>Count</p>
//                   <div className={styles.Traits__table__rarity}>
//                     <p className='font_13'>Rarity</p>
//                     <svg width='13' height='14' viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
//                       <path
//                         fillRule='evenodd'
//                         clipRule='evenodd'
//                         d='M5.17562 12.9563C4.87029 13.2622 4.37476 13.2627 4.06883 12.9574L0.798952 9.694C0.493014 9.38867 0.49252 8.89314 0.797849 8.5872C1.10318 8.28126 1.59871 8.28077 1.90464 8.5861L5.17452 11.8495C5.48046 12.1548 5.48095 12.6503 5.17562 12.9563Z'
//                         fill='#627EEA'
//                       />
//                       <path
//                         fillRule='evenodd'
//                         clipRule='evenodd'
//                         d='M4.62167 0.546875C5.0539 0.546875 5.4043 0.897268 5.4043 1.3295L5.4043 12.4028C5.4043 12.835 5.0539 13.1854 4.62167 13.1854C4.18944 13.1854 3.83905 12.835 3.83905 12.4028L3.83905 1.3295C3.83905 0.897267 4.18944 0.546875 4.62167 0.546875Z'
//                         fill='#627EEA'
//                       />
//                       <path
//                         fillRule='evenodd'
//                         clipRule='evenodd'
//                         d='M12.3407 5.14571C12.0353 5.45164 11.5398 5.45214 11.2339 5.14681L7.96399 1.88345C7.65805 1.57812 7.65756 1.08259 7.96289 0.776652C8.26822 0.470714 8.76375 0.47022 9.06968 0.775549L12.3396 4.03891C12.6455 4.34424 12.646 4.83977 12.3407 5.14571Z'
//                         fill='#627EEA'
//                       />
//                       <path
//                         fillRule='evenodd'
//                         clipRule='evenodd'
//                         d='M8.51718 0.546875C8.94941 0.546875 9.2998 0.897268 9.2998 1.3295L9.2998 12.4028C9.2998 12.835 8.94941 13.1854 8.51718 13.1854C8.08495 13.1854 7.73456 12.835 7.73456 12.4028L7.73456 1.3295C7.73456 0.897267 8.08495 0.546875 8.51718 0.546875Z'
//                         fill='#627EEA'
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className={styles.Traits__itemsWrap}>
//                   <div className={styles.Traits__item}>
//                     <p>{itemTraits.title1}</p>
//                     <p>{itemTraits.count1}</p>
//                     <p>{itemTraits.rarity1}</p>
//                   </div>
//                   <div className={styles.Traits__item}>
//                     <p>{itemTraits.title2}</p>
//                     <p>{itemTraits.count2}</p>
//                     <p>{itemTraits.rarity2}</p>
//                   </div>
//                   <div className={styles.Traits__item}>
//                     <p>{itemTraits.title3}</p>
//                     <p>{itemTraits.count3}</p>
//                     <p>{itemTraits.rarity3}</p>
//                   </div>
//                   <div className={styles.Traits__item}>
//                     <p>{itemTraits.title4}</p>
//                     <p>{itemTraits.count4}</p>
//                     <p>{itemTraits.rarity4}</p>
//                   </div>
//                   <div className={styles.Traits__item}>
//                     <p>{itemTraits.title5}</p>
//                     <p>{itemTraits.count5}</p>
//                     <p>{itemTraits.rarity5}</p>
//                   </div>
//                   <div className={styles.Traits__item}>
//                     <p>{itemTraits.title5}</p>
//                     <p>{itemTraits.count5}</p>
//                     <p>{itemTraits.rarity5}</p>
//                   </div>
//                   <div className={styles.Traits__item}>
//                     <p>{itemTraits.title6}</p>
//                     <p>{itemTraits.count6}</p>
//                     <p>{itemTraits.rarity6}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
//   if (activeTab === 'activity') {
//     content = listItemType;
//   }

//   return (
//     <div className={styles.Creator}>
//       <div className={`${styles.Creator__inner} container`}>
//         <Link href={`/nfts/collections`}>
//           <div className={styles.Creator__backBtn}>
//             <svg width='15' height='11' viewBox='0 0 15 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
//               <path
//                 fillRule='evenodd'
//                 clipRule='evenodd'
//                 d='M0.864746 5.41992C0.864746 5.18973 0.956189 4.96897 1.11896 4.8062L5.25102 0.674136C5.58997 0.335185 6.13952 0.335185 6.47847 0.674136C6.81742 1.01309 6.81742 1.56263 6.47847 1.90158L2.96013 5.41992L6.47847 8.93826C6.81742 9.27721 6.81742 9.82676 6.47847 10.1657C6.13952 10.5047 5.58997 10.5047 5.25102 10.1657L1.11896 6.03365C0.956189 5.87088 0.864746 5.65011 0.864746 5.41992Z'
//                 fill='#FF7152'
//               />
//               <path
//                 fillRule='evenodd'
//                 clipRule='evenodd'
//                 d='M0.979004 5.42015C0.979004 4.9408 1.36759 4.55221 1.84694 4.55221L13.3037 4.55221C13.7831 4.55221 14.1717 4.9408 14.1717 5.42015C14.1717 5.8995 13.7831 6.28809 13.3037 6.28809L1.84694 6.28809C1.36759 6.28809 0.979004 5.8995 0.979004 5.42015Z'
//                 fill='#FF7152'
//               />
//             </svg>
//             <p>Back to Collections</p>
//           </div>
//         </Link>
//         <AddressSearch type={'creator'} />
//       </div>
//       <div className={styles.Creator__imgs}>
//         <img className={styles.Creator__cover} src='../../images/nft/nft_owner_page/fig1.png' />
//         <img className={styles.Creator__logo} src='../../images/nft/nft_owner_page/logo1.png' />
//       </div>
//       <div className={`${styles.Creator__info} container `}>
//         <p className='font_30'>Azuki</p>
//         <div className={styles.Creator__hotLink}>
//           <a target='blank' href='https://www.azuki.com/'>
//             <p>Azuki.com</p>
//             <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
//               <path
//                 fillRule='evenodd'
//                 clipRule='evenodd'
//                 d='M13.4611 1.11726C13.7236 1.37474 13.7277 1.79626 13.4702 2.05874L8.37491 7.25281C8.11742 7.51529 7.6959 7.51934 7.43343 7.26185C7.17095 7.00436 7.1669 6.58285 7.42438 6.32037L12.5196 1.1263C12.7771 0.863817 13.1986 0.859769 13.4611 1.11726Z'
//                 fill='#0500FF'
//               />
//               <path
//                 fillRule='evenodd'
//                 clipRule='evenodd'
//                 d='M9.84375 1.08568C9.84375 0.717992 10.1418 0.419922 10.5095 0.419922H13.4921C13.8598 0.419922 14.1579 0.717992 14.1579 1.08568V4.12612C14.1579 4.4938 13.8598 4.79187 13.4921 4.79187C13.1244 4.79187 12.8263 4.4938 12.8263 4.12612V1.75144H10.5095C10.1418 1.75144 9.84375 1.45337 9.84375 1.08568Z'
//                 fill='#0500FF'
//               />
//               <path
//                 fillRule='evenodd'
//                 clipRule='evenodd'
//                 d='M1.59916 1.64877C2.48389 0.74689 3.79245 0.419922 5.41431 0.419922H6.65706C7.02474 0.419922 7.32281 0.717992 7.32281 1.08568C7.32281 1.45337 7.02474 1.75144 6.65706 1.75144H5.41431C3.92929 1.75144 3.06304 2.0579 2.54968 2.58121C2.0332 3.10771 1.73044 3.99909 1.73044 5.51965V9.3202C1.73044 10.8408 2.0332 11.7321 2.54968 12.2586C3.06304 12.7819 3.92929 13.0884 5.41431 13.0884H9.14255C10.6276 13.0884 11.4938 12.7819 12.0072 12.2586C12.5237 11.7321 12.8264 10.8408 12.8264 9.3202V8.05335C12.8264 7.68566 13.1245 7.38759 13.4922 7.38759C13.8599 7.38759 14.1579 7.68566 14.1579 8.05335V9.3202C14.1579 10.9668 13.8393 12.2924 12.9577 13.1911C12.073 14.093 10.7644 14.4199 9.14255 14.4199H5.41431C3.79245 14.4199 2.48389 14.093 1.59916 13.1911C0.717543 12.2924 0.398926 10.9668 0.398926 9.3202V5.51965C0.398926 3.87309 0.717543 2.54748 1.59916 1.64877Z'
//                 fill='#0500FF'
//               />
//             </svg>
//           </a>
//         </div>
//         <p className={styles.nftCreator__infoTeaser}>
//           Azuki starts with a collection of 10,000 avatars that give you membership access. Azuki holders receive access
//           to exclusive drops,experiences, and more.
//         </p>
//       </div>
//       <DataBox type={'creator'} items={4} />
//       <div className={`${styles.Creator__filter} container`}>
//         <div className={styles.Creator__filter__inner}>
//           <ul>
//             <li
//               onClick={() => {
//                 setActiveTab('items');
//               }}
//               className={activeTab === 'items' ? styles.Creator__active__filter : styles.Creator__deactive__filter}
//             >
//               Items
//             </li>
//             <li
//               onClick={() => {
//                 setActiveTab('traits');
//               }}
//               className={activeTab === 'traits' ? styles.Creator__active__filter : styles.Creator__deactive__filter}
//             >
//               Traits
//             </li>
//             <li
//               onClick={() => {
//                 setActiveTab('activity');
//               }}
//               className={activeTab === 'activity' ? styles.Creator__active__filter : styles.Creator__deactive__filter}
//             >
//               Activity
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className='container'>{content}</div>
//     </div>
//   );
// };

// export default Creator;

import React from 'react';

export default function Creator() {
  return <div>Creator</div>;
}
