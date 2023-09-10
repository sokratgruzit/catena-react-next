import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ethers } from 'ethers';

import { useNftMarket } from '../../../hooks/useNftMarket';

import ArrowBtn from '../../UI/button/ArrowBtn';
import Button from '../../UI/button/Button';
import ListItemRow from '../../UI/listItem/ListItemRow';

import 'swiper/swiper-bundle.min.css';
import styles from './Buy.module.css';

const ownerItemData = [
  {
    id: 0,
    cmcx: '0.0123',
    usd: '(~$5.028)',
    ownerImg: '../../../images/nft/nft_activity_items/fig4.png',
    type: 'mini-img_text',
    ownerTitle: 'BilanCh',
    ownerAddress: '0xC7...061b',
    tokenId: '312',
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
        img: '/images/nft/nft_activity_items/fig4.png',
        title: 'BilanCh',
        subTitle: '0xC7...061b',
        type: 'mini-img_text',
      },
      {
        img: '/images/nft/nft_activity_items/fig4.png',
        title: '-',
        subTitle: '0xC7...062b',
        type: 'mini-img_text',
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
        img: '/images/nft/nft_activity_items/fig4.png',
        title: 'BilanCh',
        subTitle: '0xC7...061b',
        type: 'mini-img_text',
      },
      {
        img: '/images/nft/nft_activity_items/fig4.png',
        title: '-',
        subTitle: '0xC7...062b',
        type: 'mini-img_text',
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
        img: '/images/nft/nft_activity_items/fig4.png',
        title: 'BilanCh',
        subTitle: '0xC7...061b',
        type: 'mini-img_text',
      },
      {
        img: '/images/nft/nft_activity_items/fig4.png',
        title: '-',
        subTitle: '0xC7...062b',
        type: 'mini-img_text',
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
        img: '/images/nft/nft_activity_items/fig4.png',
        title: 'BilanCh',
        subTitle: '0xC7...061b',
        type: 'mini-img_text',
      },
      {
        img: '/images/nft/nft_activity_items/fig4.png',
        title: '-',
        subTitle: '0xC7...062b',
        type: 'mini-img_text',
      },
      {
        title: '4.7.2022',
        subTitle: '13:13',
        type: 'svg',
      },
    ],
  },
];

const Buy = ({ ownerId, nftId }) => {
  const [screeWidth, setScreenWidth] = useState(window.innerWidth);
  const [step, setStep] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('CMCX');
  const [nft, setNft] = useState({});
  const [collection, setCollection] = useState([]);
  const [nftOwner, setNftOwner] = useState('seller');
  const activeLang = useSelector(state => state.settings.activeLang);
  
  const nfts = useSelector(state => state.nftsState.nfts);
  const isConnected = useSelector(state => state.connect.isConnected);
  const balance = useSelector(state => state.connect.balance);

  const { 
    account,
    buyNFT,
  } = useNftMarket();

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    if (ownerId && nftId && account) {
      let found = nfts.find(item => item.owner === ownerId && item.tokenId.toString() === nftId.toString());
      setNft(found);

      let coll = nfts.filter(item => item.category === found?.category);
      setCollection(coll);

      if (found?.seller.toLowerCase() === account.toLowerCase()) {
        setNftOwner('owner');
      } else if (found?.owner.toLowerCase() === account.toLowerCase()) {
        setNftOwner('reseller');
      } else {
        setNftOwner('buyer');
      }
    }
  }, [ownerId, nftId, account]);

  let buyStep = (
    <div className={styles.buy__item__details}>
      <ArrowBtn route={'back__collections'} direction={'back'} />
      <div className={styles.details__teaser}>
        <p className={'font_30'}>{nft?.category}</p>
        <p className={'font_13'}>{nft?.name}</p>
        <p className={'font_30'}>#{nft?.tokenId}</p>
        <p>{nft?.description}</p>
        <p className={'font_13'}>Price</p>
      </div>
      <div className={styles.details__prices}>
        <p className={'font_20'}>
          <span className={'font_20'}>CMCX</span> {nft?.price}
        </p>
        <p className={'font_13'}>{nft?.price * 1663} USD</p>
      </div>
      {nftOwner === "owner" ? 
      (
        <Button
          title={'You are NFT owner'}
          type={'skyBlue'}
          onClick={() => { console.log(`Can't buty this NFT`) }}
          customStyles={{
            margin: '50px 0px',
            transition: '.5s',
          }}
        />
      ) : nftOwner === "reseller" ? (
        <Button
          title={'List NFT'}
          type={'skyBlue'}
          onClick={() => {
            setStep(true);
          }}
          customStyles={{
            margin: '50px 0px',
            transition: '.5s',
          }}
        />
      ) : (
        <Button
          title={'Buy'}
          type={'skyBlue'}
          onClick={() => {
            setStep(true);
          }}
          customStyles={{
            margin: '50px 0px',
            transition: '.5s',
          }}
        />
      )}
    </div>
  );

  if (step === true) {
    buyStep = (
      <div className={`${styles.buy__item__details} ${styles.details__teaser}`}>
        <div className={styles.introWratter}>
          <div className={styles.intro}>
            <p className={'font_30'}>{nft?.category}</p>
            <p className={`${styles.teaser} font_13`}>{nft?.name}</p>
            <p className={'font_30 ttl'}>#{nft?.tokenId}</p>
          </div>
          <div
            className={styles.closeBtn}
            onClick={() => {
              setStep(false);
            }}
          >
            Close
            <div className={styles.closeBtnWrap}>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.41367 7.99933L15.707 1.70759C15.8946 1.52 16 1.26557 16 1.00028C16 0.73499 15.8946 0.480564 15.707 0.292975C15.5194 0.105386 15.265 1.05158e-08 14.9997 1.05158e-08C14.7344 1.05158e-08 14.4799 0.105386 14.2923 0.292975L7.99967 6.58606L1.70766 0.292975C1.61477 0.200091 1.50449 0.126411 1.38313 0.0761418C1.26176 0.025873 1.13169 9.78699e-10 1.00032 0C0.868958 -9.78698e-10 0.73888 0.025873 0.617515 0.0761418C0.496151 0.126411 0.385876 0.200091 0.292988 0.292975C0.200099 0.38586 0.126416 0.49613 0.076145 0.61749C0.0258741 0.738849 9.57627e-09 0.868922 1.0555e-08 1.00028C1.15337e-08 1.13164 0.0258741 1.26171 0.076145 1.38307C0.126416 1.50443 0.200099 1.6147 0.292988 1.70759L6.58633 7.99933L0.292988 14.2924C0.200099 14.3853 0.126416 14.4956 0.076145 14.6169C0.0258741 14.7383 1.95748e-09 14.8684 0 14.9997C-1.95748e-09 15.1311 0.0258741 15.2612 0.076145 15.3825C0.126416 15.5039 0.200099 15.6141 0.292988 15.707C0.385876 15.7999 0.496151 15.8736 0.617515 15.9239C0.73888 15.9741 0.868958 16 1.00032 16C1.13169 16 1.26176 15.9741 1.38313 15.9239C1.50449 15.8736 1.61477 15.7999 1.70766 15.707L7.99967 9.41261L14.2923 15.7057C14.4799 15.8933 14.7344 15.9987 14.9997 15.9987C15.265 15.9987 15.5194 15.8933 15.707 15.7057C15.8946 15.5181 16 15.2637 16 14.9984C16 14.7331 15.8946 14.4787 15.707 14.2911L9.413 7.99933H9.41367Z'
                  fill='#162029'
                />
              </svg>
            </div>
          </div>
        </div>
        <p>{nft?.description}</p>
        <p className={'font_13'}>Price</p>
        <div className={styles.NftBuy__itemPrices}>
          <p>
            <span>CMCX</span> {nft?.price}
          </p>
          <p className={'font_13'}>{nft?.price * 1663} USD</p>
        </div>
        <div className={styles.pay}>
          <p className={'font_13'}>Pay With</p>
          <div className={styles.payBtns}>
            <p
              className={`${styles.payBtn} ${activeButton === 'CMCX' ? styles.payBtn__active : ''}`}
              onClick={() => handleButtonClick('CMCX')}
            >
              CMCX
            </p>
            <p
              className={`${styles.payBtn} ${activeButton === 'ETH' ? styles.payBtn__active : ''}`}
              onClick={() => handleButtonClick('ETH')}
            >
              ETH
            </p>
          </div>
        </div>
        <div className={styles.pay} style={{ display: isConnected ? 'none' : 'block' }}>
          <p className={'font_13'}>ETH in Wallet</p>
          <div className={styles.connect__wallet}>
            <Button
              className='ttl'
              title={'Connect Wallet'}
              type={'red'}
              customStyles={{
                padding: '2% 0',
                width: '150px',
                border: '1px solid #162029',
              }}
            />
          </div>
        </div>
        <div className={styles.covnert}>
          <p>
            Convert between CMCX and ETH for free:
            <Link href={`/swap`} locale={activeLang}>
              <span className={styles.convert}>Convert</span>
            </Link>
          </p>
        </div>
        <div className={styles.checkout}>
          {parseFloat(ethers.utils.formatEther(balance)) > parseFloat(nft?.price) ? (
            <Button
              title={'Checkout'}
              type={'black__border__transparent'}
              customStyles={{ paddingTop: '18px', paddingBottom: '18px' }}
              onClick={() => buyNFT(nft)}
            />
          ) : (
            <div>You don't have enough CMCX</div>
          )}
          <Button
            title={'Get BNB or WBNB'}
            type={'black__border__transparent'}
            customStyles={{ paddingTop: '18px', paddingBottom: '18px' }}
            onClick={() => {}}
          />
        </div>
      </div>
    );
  }

  let detailTable = (
    <div className={styles.NftBuy__infoTable}>
      <div className={styles.categories}>
        <p>Event</p>
        <p>Price</p>
        <p>From</p>
        <p>To</p>
        <p>Date</p>
      </div>
      {detailsTableData.map(item => {
        return <ListItemRow type={'nft_buy'} data={item} key={item.id} />;
      })}
    </div>
  );

  if (isInfoOpen) {
    variableButton = (
      <Button
        title={'Close'}
        type={'blue'}
        onClick={() => {
          if (!isInfoOpen) {
            setIsInfoOpen(true);
          } else {
            setIsInfoOpen(false);
          }
          // content changes function
        }}
        customStyles={{
          padding: '4px 26px',
          width: '90px',
          margin: '0px auto',
          transition: '.5s',
        }}
      />
    );
  }

  return (
    <div className={`${styles.buy__outer} ${styles.container}`}>
      <div className={`${styles.buy__item} ${step ? styles.vissibleItem : ''}`}>
        <div className={styles.buy__img}>
          <div className={styles.buy__img__wrap}>
            <picture>
              <img src={nft?.image} alt={nft?.name} />
            </picture>
          </div>
        </div>
        {buyStep}
      </div>
      <div className={styles.buy__tables}>
        <div className={styles.buy__manage}>
          <div
            onClick={() => {
              if (!isManageOpen) {
                setIsManageOpen(true);
              } else {
                setIsManageOpen(false);
              }
            }}
            className={`${styles.NftBuy__walletConnect} ${isManageOpen ? styles.opend : ''}`}
          >
            <p className={`${styles.NftBuy__walletConnectTitle} font-20 ttl`}>
              Manage Yours
              <svg
                className={`${styles.svg} ${isManageOpen ? styles.rotated : ''}`}
                width='15'
                height='8'
                viewBox='0 0 15 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.2788 1.0918L8.33941 6.03119C7.75608 6.61452 6.80154 6.61452 6.2182 6.03119L1.27881 1.0918'
                  stroke='#162029'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </p>

            <div className={styles.manageButtonWrap}>
              <Button
                className='ttl'
                title={'Connect Wallet'}
                type={'red'}
                customStyles={{
                  padding: '2% 0',
                  width: '100% !important',
                  border: '1px solid #162029',
                }}
              />
            </div>
          </div>
          <div
            onClick={() => {
              if (!isPropertiesOpen) {
                setIsPropertiesOpen(true);
              } else {
                setIsPropertiesOpen(false);
              }
            }}
            className={`${styles.NftBuy__properties} ${isPropertiesOpen ? styles.opendP : ''}`}
          >
            <p className={`${styles.NftBuy__propertiesTitle}  font-20 ttl`}>
              Properties
              <svg
                className={`${styles.svg} ${isPropertiesOpen ? styles.rotated : ''}`}
                width='15'
                height='8'
                viewBox='0 0 15 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.2788 1.0918L8.33941 6.03119C7.75608 6.61452 6.80154 6.61452 6.2182 6.03119L1.27881 1.0918'
                  stroke='#162029'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </p>
            <div className={styles.NftBuy__properties__inner}>
              <div className={styles.NftBuy__properties__item}>
                <p>Property:</p>
                <p>
                  <span className={styles.NftBuy__properties__itemTitle}>{nft?.property}</span>
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              if (!isDetailsOpen) {
                setIsDetailsOpen(true);
              } else {
                setIsDetailsOpen(false);
              }
            }}
            className={`${styles.NftBuy__details} ${isDetailsOpen ? styles.opendD : ''}`}
          >
            <p className={`${styles.NftBuy__propertiesTitle} font-20 ttl`}>
              Details
              <svg
                className={`${styles.svg} ${isDetailsOpen ? styles.rotated : ''}`}
                width='15'
                height='8'
                viewBox='0 0 15 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.2788 1.0918L8.33941 6.03119C7.75608 6.61452 6.80154 6.61452 6.2182 6.03119L1.27881 1.0918'
                  stroke='#162029'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </p>
            <div className={styles.NftBuy__details__inner}>
              <div className={styles.NftBuy__details__itemWrap}>
                <div className={styles.NftBuy__details__item}>
                  <p style={{ width: "35%" }}>Contract Address</p>
                  <div className={styles.NftBuy__details__link}>
                    <p className={styles.hover}>{nft?.owner}</p>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M18.5391 15.1046C18.6735 14.9703 18.7583 14.7864 18.7583 14.5743L18.7583 5.99003C18.7572 5.7916 18.6778 5.60164 18.5375 5.46133C18.3972 5.32101 18.2072 5.24167 18.0088 5.2405L9.42452 5.2405C9.01439 5.2405 8.67498 5.57991 8.67498 5.99003C8.67498 6.40015 9.01439 6.73956 9.42452 6.73956L17.2593 6.73956L17.2593 14.5743C17.2593 14.9844 17.5987 15.3238 18.0088 15.3238C18.2139 15.3309 18.4048 15.239 18.5391 15.1046Z'
                        fill='#162029'
                      />
                      <path
                        d='M6.5184 18.5404L18.419 6.63982C18.7089 6.3499 18.7089 5.86907 18.419 5.57916C18.1291 5.28924 17.6483 5.28924 17.3583 5.57916L5.45773 17.4798C5.16782 17.7697 5.16782 18.2505 5.45773 18.5404C5.74765 18.8303 6.22848 18.8303 6.5184 18.5404Z'
                        fill='#162029'
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.NftBuy__details__item}>
                  <p style={{ width: "35%" }}>IPFS JSON.</p>
                  <div className={styles.NftBuy__details__link}>
                    <a className={styles.hover} target="_blank" href={nft?.tokenURI}>
                      {nft?.tokenURI}
                    </a>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M18.5391 15.1046C18.6735 14.9703 18.7583 14.7864 18.7583 14.5743L18.7583 5.99003C18.7572 5.7916 18.6778 5.60164 18.5375 5.46133C18.3972 5.32101 18.2072 5.24167 18.0088 5.2405L9.42452 5.2405C9.01439 5.2405 8.67498 5.57991 8.67498 5.99003C8.67498 6.40015 9.01439 6.73956 9.42452 6.73956L17.2593 6.73956L17.2593 14.5743C17.2593 14.9844 17.5987 15.3238 18.0088 15.3238C18.2139 15.3309 18.4048 15.239 18.5391 15.1046Z'
                        fill='#162029'
                      />
                      <path
                        d='M6.5184 18.5404L18.419 6.63982C18.7089 6.3499 18.7089 5.86907 18.419 5.57916C18.1291 5.28924 17.6483 5.28924 17.3583 5.57916L5.45773 17.4798C5.16782 17.7697 5.16782 18.2505 5.45773 18.5404C5.74765 18.8303 6.22848 18.8303 6.5184 18.5404Z'
                        fill='#162029'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.NftBuy__tablesRightPanel}>
          <div className={styles.NftBuy__ownerTable}>
            {ownerItemData.map(item => {
              return (
                <div key={item.id} className={`${styles.infoTable__buy} ${isInfoOpen ? styles.open_buy : ''}`}>
                  <div className={styles.NftBuy__itemOwner}>
                    <div className={`${styles.NftBuy__ownerTitle} font-20 ttl`}>Owner:</div>
                    <picture>
                      <img src={item.ownerImg} alt='ownerImg' />
                    </picture>
                    <div className={styles.NftBuy__itemOwnerTitles}>
                      <p>{item.ownerTitle}</p>
                      <p>{item.ownerAddress}</p>
                    </div>
                  </div>
                  {/* <div className={styles.connect__buttonWrap}>{variableButton}</div> */}
                </div>
              );
            })}
          </div>
          {detailTable}
        </div>
      </div>
      <div className={styles.Collections__section}>
        <div className={styles.Collections__titles}>
          <p className={'font_51 ttl'}>Other NFTs in {nft?.category} collection</p>
          <Link href='/overview/nfts/collections' locale={activeLang}>
            <div className={`${styles.forwardBtn} `}>
              <p className='ttl'>View All</p>
              <div className={styles.svgWrapper}>
                <svg width='14' height='11' viewBox='0 0 14 11' fill='162029' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13.6602 5.94727C13.6602 5.71707 13.5687 5.49631 13.4059 5.33354L9.27388 1.20148C8.93493 0.862529 8.38538 0.862529 8.04643 1.20148C7.70748 1.54043 7.70748 2.08998 8.04643 2.42893L11.5648 5.94727L8.04643 9.4656C7.70748 9.80455 7.70748 10.3541 8.04643 10.6931C8.38538 11.032 8.93493 11.032 9.27388 10.6931L13.4059 6.56099C13.5687 6.39822 13.6602 6.17746 13.6602 5.94727Z'
                    fill='#162029'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13.5469 5.94652C13.5469 5.46717 13.1583 5.07858 12.679 5.07858L1.22317 5.07858C0.743857 5.07858 0.3553 5.46717 0.3553 5.94652C0.3553 6.42586 0.743857 6.81445 1.22317 6.81445L12.679 6.81445C13.1583 6.81445 13.5469 6.42586 13.5469 5.94652Z'
                    fill='#162029'
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.swiperWrapper}>
          <Swiper
            className={styles.Collections__products}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            mousewheel={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              767: {
                slidesPerView: 2.4,
                spaceBetween: 30,
              },
              1023: {
                slidesPerView: 2.8,
                spaceBetween: 30,
              },
              1365: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },

              1900: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {collection.map(item => {
              return (
                <SwiperSlide key={item.owner + item.tokenId}>
                  <Link href={`/overview/nfts/collections/${item.owner}/${item.tokenId}`} locale={activeLang}>
                    <div className={styles.Collection__product}>
                      <div className={styles.Collection__product__inner}>
                        <div className={styles.Collection__product__titles}>
                          <div className={styles.Collection__product__img}>
                            <picture>
                              <img src={item.image} alt={item.name} />
                            </picture>
                          </div>
                          <p className={`${'font_13'} ${styles.Collection__product__title}`}>{item.name}</p>
                          <p className={'font_20'}>{item.description}</p>
                        </div>
                        <div className={styles.bottomContent}>
                          <p className={` ${styles.Collection__product__askingPrice}`}>Asking Price:</p>
                          <div className={styles.Collection__prices}>
                            <p className={`${'font_13'} ${styles.Collection__price}`}>{item.price * 1663} USD</p>
                            <p className={`${styles.Collection__price__cmcx} font-20`}>
                              <span className='font-20'>{item.price}</span> CMCX
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
