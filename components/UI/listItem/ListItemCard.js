import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CornerDecor from '../../UI/cornerDecor/CornerDecor';

import styles from './ListItemCard.module.css';

const ListItemCard = props => {
  let data = props.data;
  let type = props.type;
  let obj = null;

  if (type === 'nft_arrivals' || type === 'nft_activity' || type === 'nft_creator') {
    obj = (
      <div key={data.id} className={styles.Arrivals__listItemWrap}>
        <Link href={`/nfts/collections/buy`}>
          <a>
            <div className={styles.Arrivals__imgBlock}>
              <div className={styles.imgWrap}>
                <img src={data.imgSrc} />
              </div>
              <p className={`${styles.nftArrivals__imgBlockTitle} font_13`}>{data.title}</p>
              <p className={`${styles.nftArrivals__imgBlockTeaser} font_13`}>{data.subTitle}</p>
            </div>
            <div className={styles.nftArrivals__content}>
              <p className={styles.Arrivals__contentTitle}>Asking Price:</p>
              <div className={styles.Arrivals__contentTeaserDiv}>
                <p className={`${styles.Arrivals__contentTeaser} ${styles.Arrivals__contentTeaserSpan} font_13`}>
                  ({data.priceUSD})
                </p>
                <p className={styles.price}>
                  {data.price}
                  <span className={styles.colored}> {data.value}</span>
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }

  if (type === 'nft_activity_mobile') {
    obj = (
      <div className={styles.Activity__mobile__itemWrap}>
        <div className={styles.Activity__mobile__item}>
          <Image src={data.itemImg} width={30} height={30} alt='nft' />
          <div className={styles.Activity__item__titles}>
            <p>
              {data.itemTitle}
              <Link href={`/sometransaction`}>
                <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M13.3952 1.14362C13.6577 1.40111 13.6617 1.82262 13.4043 2.0851L8.30899 7.27918C8.0515 7.54166 7.62999 7.5457 7.36751 7.28822C7.10503 7.03073 7.10098 6.60922 7.35847 6.34674L12.4537 1.15266C12.7112 0.890184 13.1327 0.886136 13.3952 1.14362Z'
                    fill='#0500FF'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.7793 1.11302C9.7793 0.745336 10.0774 0.447266 10.4451 0.447266H13.4276C13.7953 0.447266 14.0934 0.745336 14.0934 1.11302V4.15346C14.0934 4.52115 13.7953 4.81922 13.4276 4.81922C13.06 4.81922 12.7619 4.52115 12.7619 4.15346V1.77878H10.4451C10.0774 1.77878 9.7793 1.48071 9.7793 1.11302Z'
                    fill='#0500FF'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M1.53422 1.67612C2.41894 0.774233 3.72751 0.447266 5.34937 0.447266H6.59211C6.9598 0.447266 7.25787 0.745336 7.25787 1.11302C7.25787 1.48071 6.9598 1.77878 6.59211 1.77878H5.34937C3.86435 1.77878 2.9981 2.08524 2.48474 2.60856C1.96826 3.13505 1.6655 4.02643 1.6655 5.54699V9.34754C1.6655 10.8681 1.96826 11.7595 2.48474 12.286C2.9981 12.8093 3.86435 13.1157 5.34937 13.1157H9.07761C10.5626 13.1157 11.4289 12.8093 11.9422 12.286C12.4587 11.7595 12.7615 10.8681 12.7615 9.34754V8.08069C12.7615 7.713 13.0595 7.41493 13.4272 7.41493C13.7949 7.41493 14.093 7.713 14.093 8.08069V9.34754C14.093 10.9941 13.7744 12.3197 12.8928 13.2184C12.008 14.1203 10.6995 14.4473 9.07761 14.4473H5.34937C3.72751 14.4473 2.41894 14.1203 1.53422 13.2184C0.652602 12.3197 0.333984 10.9941 0.333984 9.34754V5.54699C0.333984 3.90043 0.652602 2.57483 1.53422 1.67612Z'
                    fill='#0500FF'
                  />
                </svg>
              </Link>
            </p>
            <p className={`font_13`}>{data.itemSubTitle}</p>
          </div>
        </div>
        <div className={styles.Activity__item}>
          <p className={styles.Activity__mob__item__title}>Event</p>
          <p className={styles.Activity__item__event}>{data.event}</p>
        </div>
        <div className={styles.Activity__item}>
          <p className={styles.Activity__mob__item__title}>Price</p>
          <div className={styles.Activity__item__event}>
            {data.priceInCmcx}
            <p className={`font_13`}>{data.priceInDollar}</p>
          </div>
        </div>
        <div className={styles.Activity__item}>
          <p className={styles.Activity__mob__item__title}>From</p>
          <div className={styles.Activity__item__inner}>
            <Image src={data.fromImg} width={30} height={30} alt='nft' />
            <div className={styles.Activity__item__from}>
              <p>{data.from}</p>
              <p>{data.fromAddress}</p>
            </div>
          </div>
        </div>
        <div className={styles.Activity__item}>
          <p className={styles.Activity__mob__item__title}>To</p>
          <div className={styles.Activity__item__inner}>
            <Image src={data.toReciverImg} width={30} height={30} alt='nft' />
            <div className={styles.Activity__item__from}>
              <p>{data.toReciver}</p>
              <p>{data.toReciverAddress}</p>
            </div>
          </div>
        </div>
        <div className={styles.Activity__item}>
          <p className={styles.Activity__mob__item__title}>Date</p>
          <div className={styles.Activity__item__inner}>
            <p>{data.dateDay}</p>
            <p>{data.dateTime}</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'nft_collections') {
    obj = (
      <div className={styles.Collections__listItemWrap}>
        <Link href={`/overview/nfts/collections/${data.id}`}>
          <div className={styles.Product}>
            <div className={styles.Product__content}>
              <div className={styles.Product__images}>
                {/* <Image src={data.toReciverImg} layout='fill' alt='nft' /> */}
                {/* <Image src='/images/nft/nft_collection_items/fig1.png' width={30} height={30} alt='img' />
                <Image src='/images/nft/nft_collection_items/fig2.png' width={30} height={30} alt='img' /> */}
                <img
                  className={styles.Product__images__img}
                  src='/images/nft/nft_collection_items/fig4.png'
                  alt='img'
                />
              </div>
              <div className={styles.Product__logo}>
                <img src='/images/nft/nft_collection_items/logo1.png' alt='img' />
              </div>
              <div className={styles.Product__titles}>
                <p>The AKC</p>
              </div>
            </div>
            <div className={styles.Product__content__inner}>
              <div className={styles.Product__volume}>
                <p>Volume:</p>
              </div>
              <div className={styles.Product__price}>
                <p>
                  1.04 <span>CMCX</span>
                </p>
                {/* <p>
                  <span>items</span>8.9K
                </p> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return obj;
};

export default ListItemCard;
