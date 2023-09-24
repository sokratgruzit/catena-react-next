import { useMemo, useEffect } from "react";
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ethers } from "ethers";
import { Buffer } from "buffer";

import createAxiosInstance from "../pages/api/axios";
import { NFT_CONTRACT_ADDRESS_RSK } from "../components/abi/constants";
import NFT_MARKET_ABI_HARDHAT from "../components/abi/NFT_MARKET_ABI_HARDHAT.json";

export const useNftMarket = () => {
  //const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
  const apiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY;
  const secret = process.env.NEXT_PUBLIC_INFURA_API_SECRET;
  const subdomain = process.env.NEXT_PUBLIC_INFURA_SUB_DOMAIN;
  const auth = `Basic ${Buffer.from(`${apiKey}:${secret}`).toString("base64")}`;
  const client = ipfsHttpClient({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth
    }
  });

  const isConnected = useSelector((state) => state.connect.isConnected);
  const providerType = useSelector((state) => state.connect.providerType);
  
  const axios = createAxiosInstance();
  const { account, library } = useWeb3React();
  const router = useRouter();
  const dispatch = useDispatch();

  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `${subdomain}/ipfs/${added.path}`;
      return url;
    } catch (e) {
      console.log(e);
    }
  };

  const createNFT = async (
    name, 
    price, 
    image, 
    description, 
    website,
    royalties,
    fileSize,
    category,
    property,
    social
  ) => {
    try {
      if (
        !name || 
        !description || 
        !price || 
        !image 
      ) return console.log("Data missing");

      const data = JSON.stringify({ 
        name, 
        description, 
        image, 
        website, 
        royalties,
        fileSize,
        category,
        property,
        social 
      });

      try {
        const added = await client.add(data);
        const url = `https://infura-ipfs.io/ipfs/${added.path}`;

        let transaction = await createSale(url, price);

        return transaction;
      } catch (e) {
        console.log(e);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const connectToContract = async () => {
    if (account && isConnected && providerType === "metaMask") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      const contract = new library.eth.Contract(
        NFT_MARKET_ABI_HARDHAT.abi, 
        NFT_CONTRACT_ADDRESS_RSK,
        signer
      );

      return contract;
    }
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.utils.parseUnits(formInputPrice, "ether").toString();
      const contract = await connectToContract();
      let listingPrice = await contract.methods.getListingPrice().call();
      listingPrice = listingPrice.toString();
      const transaction = !isReselling 
      ? await contract.methods.createToken(url, price).send({ from: account, value: listingPrice })
      : await contract.methods.reSellToken(url, price).send({ from: account, value: listingPrice });

      return transaction;
      //await transaction.wait();
    } catch (e) {
      console.log(e);
    }
  };

  const lockNFT = async (tokenId) => {
    try {
      const contract = await connectToContract();
      const transaction = await contract.methods.lockNFT(tokenId).send({ from: account });

      return transaction;
      //await transaction.wait();
    } catch (e) {
      console.log(e);
    }
  };

  const fetchNFTs = async (cat) => {
    try {
      const contract = await connectToContract();
      const data = await contract.methods.fetchMarketItem().call();
      const items = await Promise.all(
        data.map(async ({ tokenId, seller, owner, price: unformattedPrice}) => {
          let tokenURI = await contract.methods.tokenURI(tokenId).call();
          
          // Because old NFTs was created with old gateway we need to directly access it
          const searchString = "https://infura-ipfs.io/ipfs";
          const customSearchString = "https://sokrat-nfts.infura-ipfs.io";
          
          if (tokenURI.includes(customSearchString)) tokenURI = tokenURI.replace(customSearchString, searchString);
          
          const { data } = await axios.post("admin/get-nft-url", {
            url: tokenURI,
            owner,
            tokenId
          });

          const image = data.image;
          const description = data.description;
          const name = data.name;
          const social = data.social;
          const fileSize = data.fileSize;
          const royalties = data.royalties;
          const property = data.property;
          const category = data.category;
          const website = data.website;
          const price = ethers.utils.formatUnits(unformattedPrice, "ether").toString();

          return {
            price,
            tokenId: Number(tokenId),
            seller,
            owner,
            image,
            name,
            description,
            social,
            fileSize,
            royalties,
            property,
            category,
            website,
            tokenURI
          };
        })
      );

      if (cat?.toLowerCase() === 'profile') items = items.filter((item, index, self) => item.category.toLowerCase() === cat.toLowerCase() && self.indexOf(item) === index);

      return items;
    } catch (e) {
      console.log(e);
    }
  };

  const fetchNewArrivals = async () => {
    try {
      const contract = await connectToContract();
      const data = await contract.methods.fetchMarketItem().call();
      const items = await Promise.all(
        data.map(async ({ tokenId, seller, owner, price: unformattedPrice}) => {
          let tokenURI = await contract.methods.tokenURI(tokenId).call();
          
          // Because old NFTs was created with old gateway we need to directly access it
          const searchString = "https://infura-ipfs.io/ipfs";
          const customSearchString = "https://sokrat-nfts.infura-ipfs.io";
          
          if (tokenURI.includes(customSearchString)) tokenURI = tokenURI.replace(customSearchString, searchString);
          
          const { data } = await axios.post("admin/get-nft-url", {
            url: tokenURI,
            owner,
            tokenId
          });

          const image = data.image;
          const description = data.description;
          const name = data.name;
          const social = data.social;
          const fileSize = data.fileSize;
          const royalties = data.royalties;
          const property = data.property;
          const category = data.category;
          const website = data.website;
          const price = ethers.utils.formatUnits(unformattedPrice, "ether").toString();
          
          return {
            price,
            tokenId: Number(tokenId),
            seller,
            owner,
            image,
            name,
            description,
            social,
            fileSize,
            royalties,
            property,
            category,
            website,
            tokenURI
          };
        })
      );

      if (items. length > 3) {
        items = items.slice(-3);
      }

      return items;
    } catch (e) {
      console.log(e);
    }
  };

  const fetchProfileNft = async tokenId => {
    try {
      const contract = await connectToContract();
      let tokenURI = await contract.methods.tokenURI(tokenId).call();
      let listingPrice = await contract.methods.getListingPrice().call();
      let raw = await contract.methods.fetchProfileNft(tokenId).call();
      // Because old NFTs was created with old gateway we need to directly access it
      const searchString = "https://infura-ipfs.io/ipfs";
      const customSearchString = "https://sokrat-nfts.infura-ipfs.io";
      
      if (tokenURI.includes(customSearchString)) tokenURI = tokenURI.replace(customSearchString, searchString);
      
      const { data } = await axios.post("admin/get-nft-url", {
        url: tokenURI,
        owner: account,
        tokenId
      });

      const image = data.image;
      const description = data.description;
      const name = data.name;
      const social = data.social;
      const fileSize = data.fileSize;
      const royalties = data.royalties;
      const property = data.property;
      const category = data.category;
      const website = data.website;
      const utilezedPrice = ethers.utils.formatUnits(raw[0].price, "ether").toString();

      return {
        price: utilezedPrice,
        tokenId: Number(raw[0].tokenId),
        seller: raw[0].seller,
        owner: raw[0].owner,
        image,
        name,
        description,
        social,
        fileSize,
        royalties,
        property,
        category,
        website,
        tokenURI,
        locked: raw[0].locked
      };
    } catch (e) {
      console.log(e);
    }
  };

  const fetchMyNFTsOrListedNFTs = async (type, cat) => {
    try {
      const contract = await connectToContract();
      const data = type === "fetchItemsListed" ? 
      await contract.methods.fetchItemsListed().call() :
      await contract.methods.fetchMyNFT().call();
      
      const items = await Promise.all(
        data.map(async ({ tokenId, seller, owner, price: unformattedPrice}) => {
          let tokenURI = await contract.methods.tokenURI(tokenId).call();

          // Because old NFTs was created with old gateway we need to directly access it
          const searchString = "https://infura-ipfs.io/ipfs";
          const customSearchString = "https://sokrat-nfts.infura-ipfs.io";
          
          if (tokenURI.includes(customSearchString)) tokenURI = tokenURI.replace(customSearchString, searchString);
          
          const { data } = await axios.post("admin/get-nft-url", {
            url: tokenURI,
            owner,
            tokenId
          });

          const image = data.image;
          const description = data.description;
          const name = data.name;
          const social = data.social;
          const fileSize = data.fileSize;
          const royalties = data.royalties;
          const property = data.property;
          const category = data.category;
          const website = data.website;
          const price = ethers.utils.formatUnits(unformattedPrice, "ether").toString();

          return {
            price,
            tokenId: Number(tokenId),
            seller,
            owner,
            image,
            name,
            description,
            social,
            fileSize,
            royalties,
            property,
            category,
            website,
            tokenURI
          };
        })
      );

      if (cat?.toLowerCase() === 'profile') items = items.filter((item, index, self) => item.category.toLowerCase() === cat.toLowerCase() && self.indexOf(item) === index);

      return items;
    } catch (e) {
      console.log(e);
    }
  };

  const buyNFT = async (nft, profile) => {
    try {
      const contract = await connectToContract();
      const price = ethers.utils.parseUnits(nft.price, "ether").toString();
      const transaction = await contract.methods.createMarketSale(nft.tokenId).send({ from: account, value: price });
      
      if (!profile) router.push('/overview/nfts/collections/creator');

      return transaction;
      //await transaction.wait();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  const values = useMemo(
    () => ({
      account: account ?? "",
      library,
      uploadToIPFS,
      createNFT,
      createSale,
      fetchNFTs,
      fetchMyNFTsOrListedNFTs,
      buyNFT,
      connectToContract,
      fetchNewArrivals,
      lockNFT,
      fetchProfileNft
    }),
    [
      account, 
      library, 
      uploadToIPFS, 
      createSale, 
      createNFT, 
      fetchNFTs, 
      fetchMyNFTsOrListedNFTs,
      buyNFT,
      connectToContract,
      fetchNewArrivals,
      lockNFT,
      fetchProfileNft
    ],
  );

  return values;
};