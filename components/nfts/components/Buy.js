import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowBtn from '../../UI/button/ArrowBtn';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';
import Button from '../../UI/button/Button';
import useConnect from '../../../hooks/use-connect';
import ListItemRow from '../../UI/listItem/ListItemRow';

import styles from './Buy.module.css';

const nftItemData = {
  imgSrc: '../../../images/nft/nft_owner_page/item1.png',
  title: 'Mutant Ape Yacht Club',
  value: '#314',
  blockQuote:
    '10,000 unique, randomly-generated PancakeSwap NFTs from the mind of Chef Cecy Meade. Join the squad.',
  cmcx: '0.0024',
  usd: '($1,314)',
};
const ownerItemData = [
  {
    id: 0,
    cmcx: '0.0123',
    usd: '(~$5.028)',
    ownerImg: '../../../images/nft/nft_buy/item2.png',
    ownerTitle: 'BilanCh',
    ownerAddress: '0xC7...061b',
    tokenId: '312',
  },
];
const detailsTableData = [
  {
    id: 0,
    cmcx: '0.0123',
    usd: '(~$5.028)',
    fromImg: '../../../images/nft/nft_buy/item2.png',
    from: 'BilanCh',
    toImg: '../../../images/nft/nft_buy/item3.png',
    to: '-',
    fromAddress: '0xC7...061b',
    toAddress: '0xC7...062b',
    date: '4.7.2022',
    time: '13:13 AM',
    event: 'Modified',
  },
  // {
  //     id: 1,
  //     cmcx: '0.0123',
  //     usd: '(~$5.028)',
  //     fromImg: '../../../images/nft/nft_buy/item2.png',
  //     from: 'BilanCh',
  //     toImg: '../../../images/nft/nft_buy/item3.png',
  //     to: '-',
  //     fromAddress: '0xC7...061b',
  //     toAddress: '0xC7...062b',
  //     date: '4.7.2022',
  //     time: '13:13 PM',
  //     event: 'Sold'
  // },
  // {
  //     id: 2,
  //     cmcx: '0.0123',
  //     usd: '(~$5.028)',
  //     fromImg: '../../../images/nft/nft_buy/item2.png',
  //     from: 'BilanCh',
  //     toImg: '../../../images/nft/nft_buy/item3.png',
  //     to: '-',
  //     fromAddress: '0xC7...061b',
  //     toAddress: '0xC7...062b',
  //     date: '4.7.2022',
  //     time: '13:13 AM',
  //     event: 'Delisted'
  // },
  // {
  //     id: 3 ,
  //     cmcx: '0.0123',
  //     usd: '(~$5.028)',
  //     fromImg: '../../../images/nft/nft_buy/item2.png',
  //     from: 'BilanCh',
  //     toImg: '../../../images/nft/nft_buy/item3.png',
  //     to: '-',
  //     toAddress: '0xC7...062b',
  //     fromAddress: '0xC7...061b',
  //     date: '4.7.2022',
  //     time: '13:13 PM',
  //     event: 'Listed'
  // }
];
const collectionItems = [
  {
    id: 0,
    img: '../../../images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 1,
    img: '../../../images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 2,
    img: '../../../images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 3,
    img: '../../../images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 4,
    img: '../../../images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 5,
    img: '../../../images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 6,
    img: '../../../images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
  {
    id: 7,
    img: '../../../images/nft/nft_buy/item4.png',
    title: 'Mutant Ape Yacht Club',
    subTitle: 'Alpha Kong #8223',
    priceCmcx: '1.024',
    priceUsd: '($10,314)',
  },
];
const manageTable = [
  {
    id: 0,
    item: 'Background',
    title: 'Pink',
    subTitle: '(14.66%)',
  },
  {
    id: 1,
    item: 'Background',
    title: 'Pink',
    subTitle: '(14.66%)',
  },
  {
    id: 2,
    item: 'Background',
    title: 'Pink',
    subTitle: '(14.66%)',
  },
  {
    id: 3,
    item: 'Background',
    title: 'Pink',
    subTitle: '(14.66%)',
  },
  {
    id: 4,
    item: 'Background',
    title: 'Pink',
    subTitle: '(14.66%)',
  },
  {
    id: 5,
    item: 'Background',
    title: 'Pink',
    subTitle: '(14.66%)',
  },
  {
    id: 6,
    item: 'Background',
    title: 'Pink',
    subTitle: '(14.66%)',
  },
  {
    id: 7,
    item: 'Background',
    title: 'Pink',
    subTitle: '(14.66%)',
  },
];

const Buy = props => {
  const [screeWidth, setScreenWidth] = useState(window.innerWidth);
  const [step, setStep] = useState(false);
  const { connect, disconnect, account, isActive, library, handleWalletModal } =
    useConnect();
  const isConnected = useSelector(state => state.connect.isConnected);
  const [balance, setBalance] = useState(0);
  const [connected, setConnected] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  let web3Obj = library;

  //   const getBalance = async () => {
  //     if (web3Obj !== undefined) {
  //       web3Obj.eth.getBalance(account).then(res => {
  //         setBalance(res);
  //       });
  //     }
  //   };

  //   useEffect(() => {
  //     if (isActive || isConnected) {
  //       getBalance();
  //     } else {
  //       setBalance(0);
  //     }
  //   }, [isActive, account]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  let connectButton = (
    <p className={styles.item}>You don’t have any of this item.</p>
  );
  let variableButton = (
    <Button
      title={'Buy'}
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
  let variableStep = (
    <div className={styles.buy__item__details}>
      <div className={styles.details__teaser}>
        <p className={'font_13'}>{nftItemData.title}</p>
        <p className={'font_30'}>{nftItemData.value}</p>
        <p>{nftItemData.blockQuote}</p>
        <p className={'font_13'}>Price</p>
      </div>
      <div className={styles.details__prices}>
        <p className={'font_20'}>
          <span className={'font_20'}>CMCX</span> {nftItemData.cmcx}
        </p>
        <p className={'font_13'}>{nftItemData.usd}</p>
      </div>
      <Button
        title={'Buy'}
        type={'blue'}
        onClick={() => {
          setStep(true);
        }}
        customStyles={{
          padding: '10px 160px',
          width: '350px',
          margin: '50px 0px',
          transition: '.5s',
        }}
      />
    </div>
  );
  let detailTable = (
    <div className={styles.NftBuy__infoTable}>
      <CornerDecor />
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

  if (screeWidth < 1200) {
    detailTable = (
      <div className={styles.buy__mobile__table}>
        <CornerDecor />
        {detailsTableData.map(item => {
          return (
            <ListItemRow
              key={item.id + 'mobile'}
              data={item}
              type={'nft_buy_mobile'}
            />
          );
        })}
      </div>
    );
  }
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
  if (isConnected === false && isActive === false) {
    connectButton = (
      <div className={styles.buttonWrap}>
        <Button
          title={'Connect Wallet'}
          type={'blue'}
          onClick={() => {
            handleWalletModal(true);
            setConnected(true);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
          customStyles={{
            padding: '2% 0',
            width: '150px',
          }}
        />
      </div>
    );
  }
  if (step === true) {
    variableStep = (
      <div className={styles.buy__item__details}>
        <p className={'font_13'}>
          Token ID <span className={'font_13'}>{nftItemData.tokenId}321</span>
        </p>
        <p className={'font_30'}>{nftItemData.value}</p>
        <p className={'font_13'}>Price</p>
        <div className={styles.NftBuy__itemPrices}>
          <p className={'font_20'}>
            <span className={'font_20'}>CMCX</span> {nftItemData.cmcx}
          </p>
          <p className={'font_13'}>{nftItemData.usd}</p>
        </div>
        <div className={styles.pay}>
          <p className={'font_13'}>Pay With</p>
          <div className={styles.payBtns}>
            <p className={styles.payBtn}>BNB</p>
            <p className={`${styles.payBtn} ${styles.payBtn__active}`}>WBNB</p>
          </div>
        </div>
        <div
          className={styles.pay}
          style={{ display: isConnected && isActive ? 'none' : 'block' }}
        >
          <p className={'font_13'}>WBNB in Wallet</p>
          <div className={styles.connect__wallet}>
            <Button
              title={'Connect Wallet'}
              type={'blue'}
              onClick={() => {
                handleWalletModal(true);
                setConnected(true);
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                });
              }}
              customStyles={{
                padding: '2% 0',
                width: '150px',
              }}
            />
          </div>
        </div>
        <div className={styles.covnert}>
          <p>
            Convert between BNB and WBNB for free:
            <Link href={`/swap`}>
              <span className={styles.convert}>Convert</span>
            </Link>
          </p>
        </div>
        <div className={styles.checkout}>
          <p className={styles.checkoutBtn}>Checkout</p>
          <p className={styles.getBtn}>Get BNB or WBNB</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.buy__outer} ${styles.container}`}>
      <ArrowBtn route={'back__collections'} direction={'back'} />
      <div className={styles.buy__item}>
        <div className={styles.buy__img}>
          <picture>
            <img src={nftItemData.imgSrc} alt='nft' />
          </picture>
        </div>
        {variableStep}
      </div>
      <div className={styles.buy__tables}>
        <div className={styles.buy__manage}>
          <CornerDecor />
          <div
            onClick={() => {
              if (!isManageOpen) {
                setIsManageOpen(true);
              } else {
                setIsManageOpen(false);
              }
            }}
            className={`${styles.NftBuy__walletConnect} ${
              isManageOpen ? styles.opend : ''
            }`}
          >
            <p className={styles.NftBuy__walletConnectTitle}>
              Manage Yours
              <svg
                className={`${styles.svg} ${
                  isManageOpen ? styles.rotated : ''
                }`}
                width='15'
                height='8'
                viewBox='0 0 15 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.2788 1.0918L8.33941 6.03119C7.75608 6.61452 6.80154 6.61452 6.2182 6.03119L1.27881 1.0918'
                  stroke='white'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </p>
            {connectButton}
          </div>
          <div
            onClick={() => {
              if (!isPropertiesOpen) {
                setIsPropertiesOpen(true);
              } else {
                setIsPropertiesOpen(false);
              }
            }}
            className={`${styles.NftBuy__properties} ${
              isPropertiesOpen ? styles.opendP : ''
            }`}
          >
            <p className={styles.NftBuy__propertiesTitle}>
              Properties
              <svg
                className={`${styles.svg} ${
                  isPropertiesOpen ? styles.rotated : ''
                }`}
                width='15'
                height='8'
                viewBox='0 0 15 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.2788 1.0918L8.33941 6.03119C7.75608 6.61452 6.80154 6.61452 6.2182 6.03119L1.27881 1.0918'
                  stroke='white'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </p>
            <div className={styles.NftBuy__properties__inner}>
              {manageTable.map(item => {
                return (
                  <div
                    key={item.id}
                    className={styles.NftBuy__properties__item}
                  >
                    <p>{item.item}</p>
                    <p>
                      <span className={styles.NftBuy__properties__itemTitle}>
                        {item.title}
                      </span>
                      {item.subTitle}
                    </p>
                  </div>
                );
              })}
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
            className={`${styles.NftBuy__details} ${
              isDetailsOpen ? styles.opendD : ''
            }`}
          >
            <p className={styles.NftBuy__propertiesTitle}>
              Details
              <svg
                className={`${styles.svg} ${
                  isDetailsOpen ? styles.rotated : ''
                }`}
                width='15'
                height='8'
                viewBox='0 0 15 8'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.2788 1.0918L8.33941 6.03119C7.75608 6.61452 6.80154 6.61452 6.2182 6.03119L1.27881 1.0918'
                  stroke='white'
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
                  <p>Contract Adr.</p>
                  <div className={styles.NftBuy__details__link}>
                    <p className={styles.hover}>
                      <Link href={`/sometransaction`}>0xF5...301c</Link>
                    </p>
                    <svg
                      width='13'
                      height='13'
                      viewBox='0 0 13 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12.22 0.94934C12.4489 1.1739 12.4524 1.54151 12.2279 1.77043L7.78417 6.30029C7.55961 6.5292 7.192 6.53273 6.96308 6.30817C6.73417 6.08361 6.73064 5.716 6.9552 5.48709L11.3989 0.957225C11.6234 0.728311 11.9911 0.724781 12.22 0.94934Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.06641 0.922419C9.06641 0.60175 9.32636 0.341797 9.64703 0.341797H12.2482C12.5689 0.341797 12.8288 0.60175 12.8288 0.922419V3.57405C12.8288 3.89472 12.5689 4.15467 12.2482 4.15467C11.9275 4.15467 11.6676 3.89472 11.6676 3.57405V1.50304H9.64703C9.32636 1.50304 9.06641 1.24309 9.06641 0.922419Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1.87487 1.41351C2.64646 0.626953 3.78769 0.341797 5.20215 0.341797H6.28597C6.60664 0.341797 6.8666 0.60175 6.8666 0.922419C6.8666 1.24309 6.60664 1.50304 6.28597 1.50304H5.20215C3.90703 1.50304 3.15156 1.77031 2.70384 2.22671C2.25341 2.68587 1.98937 3.46327 1.98937 4.78938V8.10392C1.98937 9.43003 2.25341 10.2074 2.70384 10.6666C3.15156 11.123 3.90703 11.3903 5.20215 11.3903H8.45363C9.74874 11.3903 10.5042 11.123 10.9519 10.6666C11.4024 10.2074 11.6664 9.43003 11.6664 8.10392V6.99907C11.6664 6.6784 11.9264 6.41845 12.247 6.41845C12.5677 6.41845 12.8277 6.6784 12.8277 6.99907V8.10392C12.8277 9.53992 12.5498 10.696 11.7809 11.4798C11.0093 12.2663 9.86809 12.5515 8.45363 12.5515H5.20215C3.78769 12.5515 2.64646 12.2663 1.87487 11.4798C1.106 10.696 0.828125 9.53992 0.828125 8.10392V4.78938C0.828125 3.35338 1.106 2.19729 1.87487 1.41351Z'
                        fill='#0500FF'
                      />
                    </svg>
                  </div>
                </div>
                <div className={styles.NftBuy__details__item}>
                  <p>IPFS JSON.</p>
                  <div className={styles.NftBuy__details__link}>
                    <a className={styles.hover} href='azuki.com'>
                      Azuki.com
                    </a>
                    <svg
                      width='13'
                      height='13'
                      viewBox='0 0 13 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12.22 0.94934C12.4489 1.1739 12.4524 1.54151 12.2279 1.77043L7.78417 6.30029C7.55961 6.5292 7.192 6.53273 6.96308 6.30817C6.73417 6.08361 6.73064 5.716 6.9552 5.48709L11.3989 0.957225C11.6234 0.728311 11.9911 0.724781 12.22 0.94934Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.06641 0.922419C9.06641 0.60175 9.32636 0.341797 9.64703 0.341797H12.2482C12.5689 0.341797 12.8288 0.60175 12.8288 0.922419V3.57405C12.8288 3.89472 12.5689 4.15467 12.2482 4.15467C11.9275 4.15467 11.6676 3.89472 11.6676 3.57405V1.50304H9.64703C9.32636 1.50304 9.06641 1.24309 9.06641 0.922419Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1.87487 1.41351C2.64646 0.626953 3.78769 0.341797 5.20215 0.341797H6.28597C6.60664 0.341797 6.8666 0.60175 6.8666 0.922419C6.8666 1.24309 6.60664 1.50304 6.28597 1.50304H5.20215C3.90703 1.50304 3.15156 1.77031 2.70384 2.22671C2.25341 2.68587 1.98937 3.46327 1.98937 4.78938V8.10392C1.98937 9.43003 2.25341 10.2074 2.70384 10.6666C3.15156 11.123 3.90703 11.3903 5.20215 11.3903H8.45363C9.74874 11.3903 10.5042 11.123 10.9519 10.6666C11.4024 10.2074 11.6664 9.43003 11.6664 8.10392V6.99907C11.6664 6.6784 11.9264 6.41845 12.247 6.41845C12.5677 6.41845 12.8277 6.6784 12.8277 6.99907V8.10392C12.8277 9.53992 12.5498 10.696 11.7809 11.4798C11.0093 12.2663 9.86809 12.5515 8.45363 12.5515H5.20215C3.78769 12.5515 2.64646 12.2663 1.87487 11.4798C1.106 10.696 0.828125 9.53992 0.828125 8.10392V4.78938C0.828125 3.35338 1.106 2.19729 1.87487 1.41351Z'
                        fill='#0500FF'
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
            <CornerDecor />
            <div className={styles.NftBuy__ownerTitle}>Owner</div>
            <div className={styles.NftBuy__ownerFiltres}>
              <p className={'font_13'}>Price</p>
              <p className={'font_13'}>Owner</p>
            </div>
            {ownerItemData.map(item => {
              return (
                <div
                  key={item.id}
                  className={`${styles.infoTable__buy} ${
                    isInfoOpen ? styles.open_buy : ''
                  }`}
                >
                  <div key={item.id} className={styles.NftBuy__ownerItem}>
                    <div className={styles.NftBuy__ownerItemPrices}>
                      <p>
                        <span>CMCX</span>
                        {item.cmcx}
                      </p>
                      <p className={'font_13'}>{item.usd}</p>
                    </div>
                    <div className={styles.NftBuy__itemOwner}>
                      <picture>
                        <img src={item.ownerImg} alt='ownerImg' />
                      </picture>
                      <div className={styles.NftBuy__itemOwnerTitles}>
                        <p>{item.ownerTitle}</p>
                        <p>{item.ownerAddress}</p>
                      </div>
                    </div>
                    <div className={styles.connect__buttonWrap}>
                      {variableButton}
                    </div>
                  </div>
                  <div className={styles.connectWallet__info}>
                    <div className={styles.tokenId__info}>
                      <p className={'font_13'}>
                        Token ID: <span>321</span>
                      </p>
                      <p className={'font_20'}>#314</p>
                    </div>
                    <div className={styles.payWith}>
                      <p className={'font_13'}>Pay With</p>
                      <div className={styles.payBtns}>
                        <p className={styles.payBtn}>BNB</p>
                        <p
                          className={`${styles.payBtn} ${styles.payBtn__active}`}
                        >
                          WBNB
                        </p>
                      </div>
                    </div>
                    <div className={styles.connectWallet}>
                      <div
                        className={styles.wallet__inner}
                        style={{
                          display: isConnected && isActive ? 'none' : 'block',
                        }}
                      >
                        <p className={'font_13'}>WBNB in Wallet</p>
                        <Button
                          title={'Connect Wallet'}
                          type={'blue'}
                          onClick={() => {
                            handleWalletModal(true);
                            setConnected(true);
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: 'smooth',
                            });
                          }}
                          customStyles={{
                            padding: '2% 0',
                            width: '100%',
                          }}
                        />
                      </div>
                      <p className={styles.font_13}>
                        Convert between BNB and WBNB for free:
                        <Link href={`/swap`}>
                          <span className={styles.convert}>Convert</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className={styles.checkout__info}>
                    <p className={styles.checkoutBtn}>Checkout</p>
                    <p className={styles.getBtn}>Get BNB or WBNB</p>
                  </div>
                </div>
              );
            })}
          </div>
          {detailTable}
        </div>
      </div>
      <div className={styles.Collections__section}>
        <div className={styles.Collections__titles}>
          <p className={'font_30'}>More From This Collection</p>
          <ArrowBtn
            route={'collections'}
            direction={'forward'}
            title={'viewAll'}
          />
        </div>
        <div className={styles.Collections__products}>
          <Swiper spaceBetween={30} slidesPerView={4.6}>
            {collectionItems.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <Link href={`/nfts/collections/buy`}>
                    <div className={styles.Collection__product}>
                      <CornerDecor />
                      <div className={styles.Collection__product__inner}>
                        <div className={styles.Collection__product__titles}>
                          <div className={styles.Collection__product__img}>
                            <picture>
                              <img src={item.img} alt='collectionImg' />
                            </picture>
                          </div>
                          <p
                            className={`${'font_13'} ${
                              styles.Collection__product__title
                            }`}
                          >
                            {item.title}
                          </p>
                          <p className={'font_13'}>{item.subTitle}</p>
                        </div>
                        <p
                          className={`${'font_13'} ${
                            styles.Collection__product__askingPrice
                          }`}
                        >
                          Asking Price:
                        </p>
                        <div className={styles.Collection__prices}>
                          <p>
                            <span>CMCX</span>
                            {item.priceCmcx}
                          </p>
                          <p
                            className={`${'font_13'} ${
                              styles.Collection__price
                            }`}
                          >
                            {item.priceUsd}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Buy;
