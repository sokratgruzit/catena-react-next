import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import createAxiosInstance from '../pages/api/axios';
import { create as ipfsHttpClient } from 'ipfs-http-client';

import { NFT_CONTRACT_ADDRESS } from '../components/abi/constants';
import NFT_MARKET_ABI from '../components/abi/NFT_MARKET_ABI.json';

export const useNftMarket = () => {
  const [nftData, setNftData] = useState('');

  const isConnected = useSelector(state => state.connect.isConnected);
  const providerType = useSelector(state => state.connect.providerType);

  const axios = createAxiosInstance();
  const { account, library } = useWeb3React();

  const dispatch = useDispatch();

  async function fetchNftData() {
    try {
      //https://gateway.pinata.cloud/ipfs/your_pin_hash_here
      const cid = 'QmSbbukbcNehKoPgVquE94sVmyrRWM24TFSmHjBmZxKV6o';
      const url = `https://api.pinata.cloud/data/pinList?status=pinned&metadata[pinataContentCID]=${cid}`;
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
        },
      };

      const res = await axios.get(url, config);

      return res.data;
    } catch (error) {
      console.error('Error fetching data from IPFS:', error);
    }
  }

  const fetchContract = async () => {
    if (account && isConnected && providerType === 'metaMask') {
      let nftContract = new library.eth.Contract(NFT_MARKET_ABI, NFT_CONTRACT_ADDRESS);

      return nftContract;
    }
  };

  const values = useMemo(
    () => ({
      account: account ?? '',
      library,
      fetchNftData,
      fetchContract,
    }),
    [account, library, fetchNftData, fetchContract],
  );

  return values;
};
