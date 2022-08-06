import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../button/Button';
import { OpenSVG } from '../../svg/InfoIcons';

import { formatCurrency } from '../../utils/formatCurrency';

import ImgTextItem from './components/ImgTextItem/ImgTextItem';
import TextItem from './components/TextItem/TextItem';
import PriceItem from './components/PriceItem/PriceItem';
import PriceChange from './components/priceChange/PriceChange';
import TextSvg from './components/TextSvg/TextSvg';

import styles from './ListItemRow.module.css';

const ListItemRow = props => {
  let data = props.data;
  let type = props.type;
  let obj = null;

  const [activeList, setActiveList] = useState(null);
  const router = useRouter();

  const mobileListOpener = hash => {
    if (activeList === hash) {
      setActiveList(null);
    } else {
      setActiveList(hash);
    }
  };

  let cs = styles.nft_activity_table;

  if (type === 'dashboard') {
    cs = styles.dashboardRowItem;
  }

  if (type === 'nft_activity') {
    cs = styles.nft_activity_table;
  }
  
  if (type === 'nft_collections') {
    cs = styles.Collections__item;
  }

  if (type === 'info_table_tokens') {
    cs = styles.InfoTokensRowItem;
  }

  if (type === 'info_table_pools') {
    cs = styles.InfoPoolsRowItem;
  }

  if (type === 'info_table_transactions') {
    cs = styles.InfoTransactionsRowItem;
  }

  if (type === 'nft_buy') {
    cs = styles.buy__outer;
  }

  obj = (
    <div
      className={`${cs} ${styles.rowItem}`}
    >
      {data?.data?.map((item, index) => {
        if (item.type === "img_text") {
          return <ImgTextItem key={"img_text" + type + index} data={item} onClick={item.onClick} />;
        }

        if (item.type === "text") {
          return <TextItem key={"text" + type + index} data={item} />;
        }

        if (item.type === "multi_text") {
          return <div>Multi text</div>;
        }

        if (item.type === "price") {
          return <PriceItem key={"price" + type + index} data={item} />;
        }

        if (item.type === "svg") {
          return <TextSvg key={"svg" + type + index} data={item} />;
        }

        if (item.type === "price_change") {
          return <PriceChange key={"price_change" + type + index} data={item} />;
        }

      })}
    </div>
  );

  /*if (type === 'nft_buy_mobile') {
    obj = (
      <>
        <div className={styles.mobBuy__item}>
          <p className={styles.item__label}>Event</p>
          <p className={styles.item__data}>{data.event}</p>
        </div>
        <div className={styles.mobBuy__item}>
          <p className={styles.item__label}>Price</p>
          <div className={styles.item__data__inner}>
            <p>
              <span>CMCX</span> {data.cmcx}
            </p>
            <p className={styles.item__teaser}>{data.usd}</p>
          </div>
        </div>
        <div className={styles.mobBuy__item}>
          <p className={styles.item__label}>From</p>
          <div className={styles.item__data}>
            <img src={data.fromImg} />
            <div className={styles.item__data__inner}>
              <p>{data.from}</p>
              <p>{data.fromAddress}</p>
            </div>
          </div>
        </div>
        <div className={styles.mobBuy__item}>
          <p className={styles.item__label}>To</p>
          <div className={styles.item__data}>
            <img src={data.toImg} />
            <div className={styles.item__data__inner}>
              <p>{data.to}</p>
              <p>{data.toAddress}</p>
            </div>
          </div>
        </div>
        <div className={styles.mobBuy__item}>
          <p className={styles.item__label}>Date</p>
          <div className={styles.item__data}>
            <p>{data.date}</p>
            <p>{data.time}</p>
            <Link className={styles.TableRow__link} href={`/sometransaction`}>
              <svg
                width='14'
                height='15'
                viewBox='0 0 14 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13.281 1.14362C13.5434 1.40111 13.5475 1.82262 13.29 2.0851L8.19473 7.27918C7.93724 7.54166 7.51573 7.5457 7.25325 7.28822C6.99077 7.03073 6.98672 6.60922 7.24421 6.34674L12.3395 1.15266C12.597 0.890184 13.0185 0.886136 13.281 1.14362Z'
                  fill='#0500FF'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.66406 1.11302C9.66406 0.745336 9.96213 0.447266 10.3298 0.447266H13.3124C13.6801 0.447266 13.9782 0.745336 13.9782 1.11302V4.15346C13.9782 4.52115 13.6801 4.81922 13.3124 4.81922C12.9447 4.81922 12.6466 4.52115 12.6466 4.15346V1.77878H10.3298C9.96213 1.77878 9.66406 1.48071 9.66406 1.11302Z'
                  fill='#0500FF'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1.41898 1.67612C2.30371 0.774233 3.61227 0.447266 5.23413 0.447266H6.47688C6.84457 0.447266 7.14264 0.745336 7.14264 1.11302C7.14264 1.48071 6.84457 1.77878 6.47688 1.77878H5.23413C3.74911 1.77878 2.88287 2.08524 2.3695 2.60856C1.85302 3.13505 1.55027 4.02643 1.55027 5.54699V9.34754C1.55027 10.8681 1.85302 11.7595 2.3695 12.286C2.88287 12.8093 3.74911 13.1157 5.23413 13.1157H8.96238C10.4474 13.1157 11.3136 12.8093 11.827 12.286C12.3435 11.7595 12.6462 10.8681 12.6462 9.34754V8.08069C12.6462 7.713 12.9443 7.41493 13.312 7.41493C13.6797 7.41493 13.9778 7.713 13.9778 8.08069V9.34754C13.9778 10.9941 13.6591 12.3197 12.7775 13.2184C11.8928 14.1203 10.5842 14.4473 8.96238 14.4473H5.23413C3.61227 14.4473 2.30371 14.1203 1.41898 13.2184C0.537368 12.3197 0.21875 10.9941 0.21875 9.34754V5.54699C0.21875 3.90043 0.537368 2.57483 1.41898 1.67612Z'
                  fill='#0500FF'
                />
              </svg>
            </Link>
          </div>
        </div>
      </>
    );
  }*/

  return obj;
};

export default ListItemRow;
