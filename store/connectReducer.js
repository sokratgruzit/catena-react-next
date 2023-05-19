const INIT_STATE = {
  isConnected: false,
  providerType: '',
  walletModal: false,
  balance: 0,
  activeBuyTicketsBtn: false,
  nftStatisticsData: {
    '0x0D464bDde2301C30871bB4C29bB7DD935f5a985C': {
      name: 'Spaceman',
      address: '0x0D464bDde2301C30871bB4C29bB7DD935f5a985C',
      accountPhotoSrc: '../images/accountImg.png',
      nftCollected: 185,
      points: 440,
      achievements: 4,
      items: '12,203',
      tottalPoints: 1080,
      userData: true,
      nfts: [
        {
          id: 0,
          imgSrc: '../images/nft/arrivals/fig1.png',
          title: 'Alfa Kongs Club - AKC',
          subTitle: 'Alpha Kong #8223',
          value: 'CMCX',
          price: '10.24',
          priceUSD: '$10,314',
        },
        {
          id: 1,
          imgSrc: '../images/nft/arrivals/fig1.png',
          title: 'Alfa Kongs Club - AKC',
          subTitle: 'Alpha Kong #8223',
          value: 'CMCX',
          price: '10.24',
          priceUSD: '$10,314',
        },
        {
          id: 2,
          imgSrc: '../images/nft/arrivals/fig1.png',
          title: 'Alfa Kongs Club - AKC',
          subTitle: 'Alpha Kong #8223',
          value: 'CMCX',
          price: '10.24',
          priceUSD: '$10,314',
        },
        {
          id: 3,
          imgSrc: '../images/nft/arrivals/fig1.png',
          title: 'Alfa Kongs Club - AKC',
          subTitle: 'Alpha Kong #8223',
          value: 'CMCX',
          price: '10.24',
          priceUSD: '$10,314',
        },
        {
          id: 4,
          imgSrc: '../images/nft/arrivals/fig1.png',
          title: 'Alfa Kongs Club - AKC',
          subTitle: 'Alpha Kong #8223',
          value: 'CMCX',
          price: '10.24',
          priceUSD: '$10,314',
        },
        {
          id: 5,
          imgSrc: '../images/nft/arrivals/fig1.png',
          title: 'Alfa Kongs Club - AKC',
          subTitle: 'Alpha Kong #8223',
          value: 'CMCX',
          price: '10.24',
          priceUSD: '$10,314',
        },
        {
          id: 6,
          imgSrc: '../images/nft/arrivals/fig1.png',
          title: 'Alfa Kongs Club - AKC',
          subTitle: 'Alpha Kong #8223',
          value: 'CMCX',
          price: '10.24',
          priceUSD: '$10,314',
        },
        {
          id: 7,
          imgSrc: '../images/nft/arrivals/fig1.png',
          title: 'Alfa Kongs Club - AKC',
          subTitle: 'Alpha Kong #8223',
          value: 'CMCX',
          price: '10.24',
          priceUSD: '$10,314',
        },
      ],
      achvimentsData: [
        {
          img: '../images/nft/nft_statistics/achviments/achv1.png',
          title: '1 Year',
          subTitle: 'Joined CoreMultiChain during the first year of our journey!',
          point: 100,
        },
        {
          img: '../images/nft/nft_statistics/achviments/achv2.png',
          title: 'Syrup Soaker',
          subTitle: 'Took a dip in the early days of the Auto CORE Pool',
          point: 100,
        },
        {
          img: '../images/nft/nft_statistics/achviments/achv3.png',
          title: 'xaixui',
          subTitle: 'Took a dip in the early days of the Auto CORE Pool',
          point: 100,
        },
        {
          img: '../images/nft/nft_statistics/achviments/achv4.png',
          title: 'Syrup Soaker',
          subTitle: 'Took a dip in the early days of the Auto CORE Pool',
          point: 100,
        },
        {
          img: '../images/nft/nft_statistics/achviments/achv5.png',
          title: 'Lucky',
          subTitle: 'random text random text random text random text ',
          point: 200,
        },
      ],
      nftStatisticsActivityData: [
        {
          id: 0,
          itemImg: '../images/nft/nft_activity_items/item1.png',
          itemTitle: 'Alpha Kong #8223',
          itemSubTitle: 'Alpha Kongs Club - AKC',
          event: 'Listed',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          fromImg: '../images/nft/nft_activity_items/sub_item1.png',
          from: 'BilanCh',
          fromAddress: '0xC7...061b',
          toReciverImg: '../images/nft/nft_activity_items/sub_item2.png',
          toReciver: '-',
          toReciverAddress: '0xF5...301c',
          dateDay: '4.7.2022',
          dateTime: '6:28 PM',
          lowestPrice: '0.198',
          hightestPrice: '10,000',
          items: '895',
          supply: '7777',
        },
        {
          id: 1,
          itemImg: '../images/nft/nft_activity_items/item1.png',
          itemTitle: 'Alpha Kong #8223',
          itemSubTitle: 'Alpha Kongs Club - AKC',
          event: 'Sold',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          fromImg: '../images/nft/nft_activity_items/sub_item1.png',
          from: 'BilanCh',
          fromAddress: '0xC7...061b',
          toReciverImg: '../images/nft/nft_activity_items/sub_item2.png',
          toReciver: '-',
          toReciverAddress: '0xF5...301c',
          dateDay: '4.7.2022',
          dateTime: '6:28 PM',
          lowestPrice: '0.198',
          hightestPrice: '10,000',
          items: '895',
          supply: '7777',
        },
        {
          id: 2,
          itemImg: '../images/nft/nft_activity_items/item1.png',
          itemTitle: 'Alpha Kong #8223',
          itemSubTitle: 'Alpha Kongs Club - AKC',
          event: 'Delisted',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          fromImg: '../images/nft/nft_activity_items/sub_item1.png',
          from: 'BilanCh',
          fromAddress: '0xC7...061b',
          toReciverImg: '../images/nft/nft_activity_items/sub_item2.png',
          toReciver: '-',
          toReciverAddress: '0xF5...301c',
          dateDay: '4.7.2022',
          dateTime: '6:28 PM',
          lowestPrice: '0.198',
          hightestPrice: '10,000',
          items: '895',
          supply: '7777',
        },
        {
          id: 3,
          itemImg: '../images/nft/nft_activity_items/item1.png',
          itemTitle: 'Alpha Kong #8223',
          itemSubTitle: 'Alpha Kongs Club - AKC',
          event: 'Modified',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          fromImg: '../images/nft/nft_activity_items/sub_item1.png',
          from: 'BilanCh',
          fromAddress: '0xC7...061b',
          toReciverImg: '../images/nft/nft_activity_items/sub_item2.png',
          toReciver: '-',
          toReciverAddress: '0xF5...301c',
          dateDay: '4.7.2022',
          dateTime: '6:28 PM',
          lowestPrice: '0.198',
          hightestPrice: '10,000',
          items: '895',
          supply: '7777',
        },
        {
          id: 4,
          itemImg: '../images/nft/nft_activity_items/item1.png',
          itemTitle: 'Alpha Kong #8223',
          itemSubTitle: 'Alpha Kongs Club - AKC',
          event: 'Collection',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          fromImg: '../images/nft/nft_activity_items/sub_item1.png',
          from: 'BilanCh',
          fromAddress: '0xC7...061b',
          toReciverImg: '../images/nft/nft_activity_items/sub_item2.png',
          toReciver: '-',
          toReciverAddress: '0xF5...301c',
          dateDay: '4.7.2022',
          dateTime: '6:28 PM',
          lowestPrice: '0.198',
          hightestPrice: '10,000',
          items: '895',
          supply: '7777',
        },
        {
          id: 5,
          itemImg: '../images/nft/nft_activity_items/item1.png',
          itemTitle: 'Alpha Kong #8223',
          itemSubTitle: 'Alpha Kongs Club - AKC',
          event: 'Listed',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          fromImg: '../images/nft/nft_activity_items/sub_item1.png',
          from: 'BilanCh',
          fromAddress: '0xC7...061b',
          toReciverImg: '../images/nft/nft_activity_items/sub_item2.png',
          toReciver: '-',
          toReciverAddress: '0xF5...301c',
          dateDay: '4.7.2022',
          dateTime: '6:28 PM',
          lowestPrice: '0.198',
          hightestPrice: '10,000',
          items: '895',
          supply: '7777',
        },
        {
          id: 6,
          itemImg: '../images/nft/nft_activity_items/item1.png',
          itemTitle: 'Alpha Kong #8223',
          itemSubTitle: 'Alpha Kongs Club - AKC',
          event: 'Modified',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          fromImg: '../images/nft/nft_activity_items/sub_item1.png',
          from: 'BilanCh',
          fromAddress: '0xC7...061b',
          toReciverImg: '../images/nft/nft_activity_items/sub_item2.png',
          toReciver: '-',
          toReciverAddress: '0xF5...301c',
          dateDay: '4.7.2022',
          dateTime: '6:28 PM',
          lowestPrice: '0.198',
          hightestPrice: '10,000',
          items: '895',
          supply: '7777',
        },
        {
          id: 7,
          itemImg: '../images/nft/nft_activity_items/item1.png',
          itemTitle: 'Alpha Kong #8223',
          itemSubTitle: 'Alpha Kongs Club - AKC',
          event: 'Sold',
          priceInCmcx: '0.0123',
          priceInDollar: '(~$51.028)',
          fromImg: '../images/nft/nft_activity_items/sub_item1.png',
          from: 'BilanCh',
          fromAddress: '0xC7...061b',
          toReciverImg: '../images/nft/nft_activity_items/sub_item2.png',
          toReciver: '-',
          toReciverAddress: '0xF5...301c',
          dateDay: '4.7.2022',
          dateTime: '6:28 PM',
          lowestPrice: '0.198',
          hightestPrice: '10,000',
          items: '895',
          supply: '7777',
        },
      ],
    },
    '0x0D464bDde2301C30871bB4C29bB7DD935f5a985B': {
      name: 'noDataUserTest',
      address: '0x0D464bDde2301C30871bB4C29bB7DD935f5a985C',
      accountPhotoSrc: '../images/accountImg.png',
      nftCollected: 0,
      points: 0,
      achievements: 0,
      items: '0',
      tottalPoints: 0,
      userData: false,
      nfts: [],
      achvimentsData: [],
      nftStatisticsActivityData: [],
    },
  },
  votingData: {
    QmbtMK57ksC7DEeqkqKSx7ehFg1ahYMCtiAAAiGaYjVbw41: {
      id: 0,
      title: 'test12345',
      subTitle: 'subTitle #2',
      date: 'Ends Mar 6th, 2022 11:15',
      location: 'Community',
      activeStatus: true,
    },
    QmbtMK57ksC7DEeqkqKSx7ehFg1ahYMCtiAAAiGaYjVbw42: {
      id: 1,
      title: 'Stop Minting more CORE',
      subTitle: 'subTitle 1',
      date: 'Ends Mar 6th, 2022 11:15',
      location: 'Core',
      activeStatus: true,
    },
    QmbtMK57ksC7DEeqkqKSx7ehFg1ahYMCtiAAAiGaYjVbw43: {
      id: 2,
      title: 'test#2',
      subTitle: 'test593059',
      date: 'Ends Mar 6th, 2022 11:15',
      location: 'Community',
      activeStatus: false,
    },
    QmbtMK57ksC7DEeqkqKSx7ehFg1ahYMCtiAAAiGaYjVbw44: {
      id: 3,
      title: 'Stop Minting more CORE',
      subTitle: 'qwerty',
      date: 'Ends Mar 6th, 2022 11:15',
      location: 'Core',
      activeStatus: false,
    },
    QmbtMK57ksC7DEeqkqKSx7ehFg1ahYMCtiAAAiGaYjVbw45: {
      id: 4,
      title: 'test#3',
      subTitle: 'qwerty123',
      date: 'Ends Mar 6th, 2022 11:15',
      location: 'Community',
      activeStatus: true,
    },
  },
}

const connectReducer = (state = INIT_STATE, action) => {
  if (action.type === 'TOGGLE_WALLET_CONNECT_MODAL') {
    return {
      ...state,
      walletModal: action.payload.walletModal,
    }
  }

  if (action.type === 'GET_BALANCE') {
    return {
      ...state,
      balance: action.payload.balance,
    }
  }

  if (action.type === 'CONNECT') {
    return {
      ...state,
      isConnected: action.payload.isConnected,
      providerType: action.payload.providerType,
    }
  }

  if (action.type === 'BUY_TICKETS_ACTIVE') {
    return {
      ...state,
      activeBuyTicketsBtn: action.payload.activeBuyTicketsBtn,
    }
  }

  return state
}

export default connectReducer
