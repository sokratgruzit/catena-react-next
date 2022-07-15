import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '../button/Button';
import { OpenSVG } from '../../svg/InfoIcons';

import styles from './ListItemRow.module.css';

const ListItemRow = props => {
  let data = props.data;
  let type = props.type;
  let obj = null;

  const [activeList, setActiveList] = useState(null);

  const router = useRouter();

  const mobileListOpener = hash => {
    if (activeList === hash) {
      console.log('here');
      setActiveList(null);
    } else {
      console.log('here2');
      setActiveList(hash);
    }

    console.log(activeList);
  };

  const goToHandler = () => {
    console.log('hello');
  };

  let imgTextItem = (img, title, subTitle) => {
    let item = (
      <div className={`${styles.td} ${styles.imgTextItem}`}>
        <img src={img} />
        <div className={styles.imgTextWrap}>
          <p className={styles.imgTextTitle}>{title}</p>
          <p className={styles.imgTextSubTitle}>{subTitle}</p>
        </div>
      </div>
    );

    return item;
  };

  let textItem = text => {
    let item = <div className={`${styles.td} ${styles.textItem}`}>{text}</div>;

    return item;
  };

  let multTextItem = (text1, text2, st) => {
    st = st === null ? '' : st;
    let item = (
      <div className={`${styles.td} ${styles.multTextItem} ${st}`}>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    );

    return item;
  };

  var unitlist = ['', 'K', 'M', 'B'];
  function formatnumber(number) {
    let sign = Math.sign(number);
    let unit = 0;

    while (Math.abs(number) > 1000) {
      unit = unit + 1;
      number = Math.floor(Math.abs(number) / 100) / 10;
    }
    return '$' + sign * Math.abs(number) + unitlist[unit];
  }

  let btnItem = type => {
    let item = null;

    if (type === 'nft_activity') {
      item = (
        <div className={`${styles.td} ${styles.btnItem}`}>
          {multTextItem(data.dateDay, data.dateTime, null)}
          <Link href={`/sometransaction`}>
            <svg
              className={styles.Table__transaction}
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.5817 1.32819C13.8442 1.58568 13.8483 2.00719 13.5908 2.26967L8.49551 7.46375C8.23803 7.72623 7.81651 7.73027 7.55403 7.47279C7.29155 7.2153 7.2875 6.79379 7.54499 6.53131L12.6403 1.33723C12.8977 1.07475 13.3193 1.07071 13.5817 1.32819Z'
                fill='#0500FF'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.9646 1.29662C9.9646 0.92893 10.2627 0.630859 10.6304 0.630859H13.6129C13.9806 0.630859 14.2787 0.92893 14.2787 1.29662V4.33705C14.2787 4.70474 13.9806 5.00281 13.6129 5.00281C13.2453 5.00281 12.9472 4.70474 12.9472 4.33705V1.96238H10.6304C10.2627 1.96238 9.9646 1.66431 9.9646 1.29662Z'
                fill='#0500FF'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.71976 1.85971C2.60449 0.957827 3.91306 0.630859 5.53491 0.630859H6.77766C7.14535 0.630859 7.44342 0.92893 7.44342 1.29662C7.44342 1.66431 7.14535 1.96238 6.77766 1.96238H5.53491C4.0499 1.96238 3.18365 2.26883 2.67028 2.79215C2.15381 3.31865 1.85105 4.21003 1.85105 5.73059V9.53113C1.85105 11.0517 2.15381 11.9431 2.67028 12.4696C3.18365 12.9929 4.0499 13.2993 5.53491 13.2993H9.26316C10.7482 13.2993 11.6144 12.9929 12.1278 12.4696C12.6443 11.9431 12.947 11.0517 12.947 9.53113V8.26428C12.947 7.8966 13.2451 7.59853 13.6128 7.59853C13.9805 7.59853 14.2785 7.8966 14.2785 8.26428V9.53113C14.2785 11.1777 13.9599 12.5033 13.0783 13.402C12.1936 14.3039 10.885 14.6309 9.26316 14.6309H5.53491C3.91306 14.6309 2.60449 14.3039 1.71976 13.402C0.838149 12.5033 0.519531 11.1777 0.519531 9.53113V5.73059C0.519531 4.08402 0.838149 2.75842 1.71976 1.85971Z'
                fill='#0500FF'
              />
            </svg>
          </Link>
        </div>
      );
    }

    if (type === 'staking') {
      item = (
        <div className={`${styles.td} ${styles.btnItem}`}>
          <Button />
          <Button />
        </div>
      );
    }

    return item;
  };

  let plusItem = hash => {
    let item = (
      <div
        className={`${styles.plusIcon} ${
          activeList === hash ? styles.activePlusIcon : ''
        }`}
      >
        <span></span>
        <span></span>
      </div>
    );

    return item;
  };

  let expandItem = itemArr => {
    let item = (
      <div
        className={`${styles.mobileRow} ${
          activeList === data.hash ? styles.activeMobileRow : ''
        }`}
      >
        {itemArr.map(item => {
          return (
            <div key={item.name} className={styles.mobileRowItem}>
              <div className={`${styles.mobileRowTtl}`}>{item.name}</div>
              <div
                className={`${
                  item.name === 'Result' ? styles.resultColor : null
                } ${styles.mobileRowContent}`}
              >
                {item.data}
              </div>
            </div>
          );
        })}
      </div>
    );

    return item;
  };

  if (type === 'nft_activity') {
    obj = (
      <div className={styles.TableRow__items}>
        <div className={styles.TableRow__item}>
          <Image
            width={30}
            height={30}
            className={styles.TableRow__img}
            src={data.itemImg}
          />
          <div className={styles.TableRow__titles}>
            <p>{data.itemTitle}</p>
            <p>{data.itemSubTitle}</p>
          </div>
          <p className={styles.TableRow__event}>{data.event}</p>
          <div className={styles.TableRow__titles}>
            <p>
              <span>CMCX</span>
              {data.priceInCmcx}
            </p>
            <p>{data.priceInDollar}</p>
          </div>
          <div className={styles.TableRow__from}>
            <Image width={30} height={30} src={data.fromImg} />
            <div className={styles.TableRow__fromInner}>
              <p>{data.from}</p>
              <p>{data.fromAddress}</p>
            </div>
          </div>
          <div className={styles.TableRow__to}>
            <Image width={30} height={30} src={data.toReciverImg} />
            <div className={styles.TableRow__toInner}>
              <p>{data.toReciver}</p>
              <p>{data.toReciverAddress}</p>
            </div>
          </div>
          <div className={styles.TableRow__date}>
            <p>{data.dateDay}</p>
            <p>{data.dateTime}</p>
            <Link href={`/sometransaction`}>
              <svg
                className={styles.TableRow__link}
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
      </div>
    );
  }

  if (type === 'nft_creator') {
    obj = (
      <>
        <div className={styles.TableRow__items}>
          <div className={styles.TableRow__item}>
            <img className={styles.TableRow__img} src={data.img} />
            <div className={styles.TableRow__titles}>
              <p>{data.title}</p>
              <p>{data.subTitle}</p>
            </div>
            <p className={styles.TableRow__event}>{data.event}</p>
            <div className={styles.TableRow__titles}>
              <p>
                <span>CMCX</span>
                {data.priceCmcx}
              </p>
              <p>{data.priceUsd}</p>
            </div>
            <div className={styles.TableRow__from}>
              <img src={data.fromImg} />
              <div className={styles.TableRow__fromInner}>
                <p>{data.fromTitle}</p>
                <p>{data.fromAddress}</p>
              </div>
            </div>
            <div className={styles.TableRow__to}>
              <img src={data.toImg} />
              <div className={styles.TableRow__toInner}>
                <p>{data.toTitle}</p>
                <p>{data.toAddress}</p>
              </div>
              <div className={styles.TableRow__date}>
                <p>{data.date}</p>
                <p>{data.time}</p>
                <Link
                  className={styles.TableRow__link}
                  href={`/sometransaction`}
                >
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
          </div>
        </div>
      </>
    );
  }

  if (type === 'staking') {
    obj = (
      <div className={styles.rowItem}>
        {textItem(parseFloat(data.amount) / 10 ** 18)}
        {textItem(data.staketime)}
        {textItem(data.unstaketime)}
        {textItem('CMCX')}
        {textItem(parseFloat(data.realtimeRewardPerBlock).toFixed(10))}
        {btnItem(type)}
      </div>
    );
  }

  if (type === 'dashboard') {
    obj = (
      <div
        onClick={() => {
          mobileListOpener(data.hash);
        }}
        className={`${styles.rowItem} ${styles.dashboardRowItem}`}
      >
        {textItem(data.hash)}
        {textItem(data.from)}
        {textItem(data.to)}
        {textItem(data.transactionType)}
        {textItem(data.result)}
        {textItem(data.amount)}
        {plusItem(data.hash)}
        {expandItem([
          {
            name: 'From',
            data: data.from,
          },
          {
            name: 'To',
            data: data.to,
          },
          {
            name: 'Result',
            data: data.result,
          },
        ])}
      </div>
    );
  }

  if (type === 'voting') {
    let statusColor = styles.carrot;
    let statusIcon = null;

    if (data.activeStatus === 'Soon') {
      statusColor = styles.yellow;
      statusIcon = (
        <svg
          width='9'
          height='11'
          viewBox='0 0 9 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.50829 1.90479C2.11805 1.90479 0.172852 3.84998 0.172852 6.24022C0.172852 8.63046 2.11805 10.5807 4.50829 10.5807C6.89853 10.5807 8.84372 8.63546 8.84372 6.24522C8.84372 3.85498 6.89853 1.90479 4.50829 1.90479ZM4.88332 6.0802C4.88332 6.28522 4.71331 6.45524 4.50829 6.45524C4.30327 6.45524 4.13325 6.28522 4.13325 6.0802V3.57995C4.13325 3.37493 4.30327 3.20492 4.50829 3.20492C4.71331 3.20492 4.88332 3.37493 4.88332 3.57995V6.0802Z'
            fill='#FFA726'
          />
          <path
            d='M5.95345 1.30564H3.06316C2.86314 1.30564 2.70312 1.14562 2.70312 0.945603C2.70312 0.745583 2.86314 0.580566 3.06316 0.580566H5.95345C6.15347 0.580566 6.31349 0.740582 6.31349 0.940602C6.31349 1.14062 6.15347 1.30564 5.95345 1.30564Z'
            fill='#FFA726'
          />
        </svg>
      );
    }

    if (data.activeStatus === 'Close') {
      statusColor = styles.grey;
      statusIcon = (
        <svg
          width='11'
          height='11'
          viewBox='0 0 11 11'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.61067 2.34556L2.61071 9.34552C2.60071 9.35552 2.59571 9.36052 2.58571 9.36552C2.39571 9.20552 2.22071 9.03052 2.06071 8.84052C1.27472 7.9366 0.843055 6.77839 0.845715 5.58054C0.845715 2.82055 3.0857 0.580566 5.84569 0.580566C7.09068 0.580566 8.23068 1.03556 9.10567 1.79556C9.29567 1.95556 9.47067 2.13056 9.63067 2.32056C9.62567 2.33056 9.62067 2.33556 9.61067 2.34556Z'
            fill='#B0BEC5'
          />
          <path
            d='M10.8451 5.58048C10.8451 8.32547 8.59012 10.5805 5.84513 10.5805C5.09514 10.5805 4.38514 10.4155 3.74514 10.1155C3.43515 9.97046 3.37515 9.55546 3.61514 9.31046L9.57511 3.3505C9.81511 3.1105 10.2351 3.1705 10.3801 3.4805C10.6801 4.11549 10.8451 4.83049 10.8451 5.58048Z'
            fill='#B0BEC5'
          />
          <path
            d='M10.7301 0.695019C10.5801 0.54502 10.3351 0.54502 10.1851 0.695019L0.960156 9.92497C0.810156 10.075 0.810156 10.32 0.960156 10.47C0.99575 10.5054 1.03804 10.5335 1.08458 10.5525C1.13111 10.5714 1.18095 10.581 1.2312 10.5805C1.28145 10.58 1.33111 10.5696 1.37728 10.5497C1.42345 10.5299 1.46522 10.5011 1.50015 10.465L10.7301 1.23502C10.8851 1.08502 10.8851 0.845018 10.7301 0.695019Z'
            fill='#B0BEC5'
          />
        </svg>
      );
    }

    obj = (
      <div
        onClick={() => {
          goToHandler();
        }}
        className={`${styles.votingNow__bar} ${styles.border}`}
      >
        <p>{data.title}</p>
        <div className={styles.display}>
          <p className={`${`${styles.transparent} font_13 `} font_13 `}>
            {data.date}
          </p>
          <div className={styles.readMore}>
            <Link href={`/proposal`} className='font_13'>
              Read More
            </Link>
            <svg
              width='12'
              height='10'
              viewBox='0 0 12 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.42941 8.73395L11 5.16336L7.42941 1.59277'
                stroke='white'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1.00039 5.16309L10.9004 5.16309'
                stroke='white'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
        <div className={styles.display}>
          <div className={styles.votingNow__category}>
            <span className={`${styles.pointer} font_10 ${statusColor}`}>
              {statusIcon}
              {data.activeStatus}
            </span>
            <span
              className={` font_10 ${
                data.location === 'Community' ? styles.red : styles.lightBlue
              }`}
            >
              {data.location === 'Community' ? (
                <svg
                  width='11'
                  height='11'
                  viewBox='0 0 11 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.49441 0.173096C3.18696 0.173096 2.12402 1.23603 2.12402 2.54348C2.12402 3.82599 3.12707 4.86397 4.43453 4.90888C4.47445 4.90389 4.51437 4.90389 4.54432 4.90888H4.57925C5.19273 4.88841 5.77421 4.63016 6.20074 4.18874C6.62726 3.74731 6.8654 3.15731 6.8648 2.54348C6.8648 1.23603 5.80187 0.173096 4.49441 0.173096Z'
                    fill='#E91E63'
                  />
                  <path
                    d='M7.02968 6.2357C5.63739 5.3075 3.3668 5.3075 1.96453 6.2357C1.33077 6.65987 0.981445 7.23375 0.981445 7.84756C0.981445 8.46137 1.33077 9.03026 1.95954 9.44945C2.65818 9.91853 3.5764 10.1531 4.49461 10.1531C5.41282 10.1531 6.33104 9.91853 7.02968 9.44945C7.65846 9.02527 8.00778 8.45638 8.00778 7.83758C8.00279 7.22377 7.65846 6.65488 7.02968 6.2357V6.2357Z'
                    fill='#E91E63'
                  />
                  <path
                    d='M9.97921 2.83701C10.0591 3.80513 9.3704 4.65348 8.41725 4.76826H8.3923C8.36236 4.76826 8.33242 4.76826 8.30747 4.77824C7.82341 4.80319 7.37927 4.64849 7.04492 4.36404C7.55892 3.90494 7.85335 3.21628 7.79347 2.46773C7.75922 2.07849 7.62704 1.70425 7.40921 1.37985C7.6707 1.25264 7.95921 1.19095 8.24985 1.20011C8.54049 1.20927 8.82455 1.289 9.0775 1.43242C9.33046 1.57585 9.54473 1.77866 9.70182 2.02336C9.85891 2.26806 9.95411 2.54731 9.97921 2.83701V2.83701Z'
                    fill='#E91E63'
                  />
                  <path
                    d='M10.9766 7.45382C10.9367 7.93788 10.6273 8.35707 10.1083 8.64151C9.60927 8.91598 8.98049 9.04573 8.35671 9.03076C8.71601 8.70639 8.9256 8.30217 8.96552 7.87301C9.01542 7.25421 8.721 6.66037 8.13214 6.18629C7.79779 5.92181 7.40855 5.71221 6.98438 5.55751C8.08723 5.23814 9.47453 5.45272 10.3279 6.14138C10.787 6.51066 11.0215 6.97476 10.9766 7.45382V7.45382Z'
                    fill='#E91E63'
                  />
                </svg>
              ) : (
                <svg
                  width='11'
                  height='11'
                  viewBox='0 0 11 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.78775 4.95072L9.10792 4.16092C8.97796 4.01096 8.87298 3.73103 8.87298 3.53108V2.68129C8.87298 2.15142 8.43809 1.71653 7.90822 1.71653H7.05843C6.86348 1.71653 6.57855 1.61156 6.42859 1.48159L5.63879 0.801761C5.29388 0.506835 4.72902 0.506835 4.3791 0.801761L3.5943 1.48659C3.44434 1.61156 3.15941 1.71653 2.96446 1.71653H2.09967C1.56981 1.71653 1.13491 2.15142 1.13491 2.68129V3.53608C1.13491 3.73103 1.02994 4.01096 0.904972 4.16092L0.230141 4.95572C-0.0597866 5.30064 -0.0597866 5.8605 0.230141 6.20541L0.904972 7.00021C1.02994 7.15017 1.13491 7.4301 1.13491 7.62506V8.47984C1.13491 9.00971 1.56981 9.4446 2.09967 9.4446H2.96446C3.15941 9.4446 3.44434 9.54957 3.5943 9.67954L4.3841 10.3594C4.72902 10.6543 5.29388 10.6543 5.64379 10.3594L6.43359 9.67954C6.58355 9.54957 6.86348 9.4446 7.06343 9.4446H7.91322C8.44309 9.4446 8.87798 9.00971 8.87798 8.47984V7.63005C8.87798 7.4351 8.98295 7.15017 9.11292 7.00021L9.79275 6.21041C10.0827 5.8655 10.0827 5.29564 9.78775 4.95072ZM7.08843 4.6358L4.67403 7.0502C4.60373 7.12041 4.50845 7.15984 4.4091 7.15984C4.30975 7.15984 4.21446 7.12041 4.14416 7.0502L2.93446 5.8405C2.86474 5.76995 2.82564 5.67476 2.82564 5.57557C2.82564 5.47638 2.86474 5.38119 2.93446 5.31063C3.07943 5.16567 3.31937 5.16567 3.46433 5.31063L4.4091 6.2554L6.55856 4.10594C6.70352 3.96097 6.94346 3.96097 7.08843 4.10594C7.23339 4.2509 7.23339 4.49084 7.08843 4.6358Z'
                    fill='#7464D7'
                  />
                </svg>
              )}
              {data.location}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'nft_collections') {
    obj = (
      <div className={styles.Collections__item}>
        <div className={styles.Collections__item__titles}>
          <img className={styles.Collections__item__img} src={data.logo} />
          <p>{data.artist}</p>
        </div>
        <p className={styles.Collection__subItem}>
          <span>CMCX</span> {data.priceCmcx}
        </p>
        <p className={styles.Collection__subItem}>{data.lowest}</p>
        <p className={styles.Collection__subItem}>{data.highest}</p>
        <p className={styles.Collection__subItem}>{data.items}</p>
        <p className={styles.Collection__subItem}>{data.supply}</p>
      </div>
    );
  }

  if (type === 'info_table_tokens') {
    obj = (
      <div
        onClick={() => {
          mobileListOpener(data.hash);
        }}
        className={`${styles.rowItem} ${styles.InfoTokensRowItem}`}
      >
        {textItem(data.market_cap_rank)}
        {/* {imgTextItem(data.imgSrc, data.name)} */}
        <div className={styles.td}>
          <div
            onClick={() => router.push(`/info/tokens/${data.id}`)}
            className={styles.poolsTableTitle}
          >
            <img src={data.image} alt='pool' />
            <div className={styles.poolsTableImgText}>
              <p className={styles.imgTextTitle}>{data.name}</p>
            </div>
          </div>
        </div>
        {textItem('$' + data.current_price)}
        <div className={`${styles.td} ${styles.textItem}`}>
          {data.price_change_percentage_24h > 0 ? (
            <svg
              width='10'
              height='7'
              viewBox='0 0 10 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.3'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.209209 5.92556C0.488155 6.2045 0.940416 6.2045 1.21936 5.92556L4.7475 2.39742C4.88522 2.2597 5.11478 2.2597 5.2525 2.39742L8.78064 5.92556C9.05958 6.2045 9.51184 6.2045 9.79079 5.92556C10.0697 5.64661 10.0697 5.19435 9.79079 4.9154L6.26265 1.38727C5.56704 0.691654 4.43296 0.691654 3.73735 1.38727L0.209209 4.9154C-0.0697365 5.19435 -0.0697365 5.64661 0.209209 5.92556Z'
                fill='#29765A'
              />
            </svg>
          ) : (
            <svg
              width='10'
              height='7'
              viewBox='0 0 10 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.3'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.79079 1.07444C9.51184 0.795498 9.05958 0.795498 8.78064 1.07444L5.2525 4.60258C5.11478 4.7403 4.88522 4.7403 4.7475 4.60258L1.21936 1.07444C0.940416 0.795498 0.488155 0.795498 0.209209 1.07444C-0.069737 1.35339 -0.069737 1.80565 0.209209 2.0846L3.73735 5.61273C4.43296 6.30835 5.56704 6.30835 6.26265 5.61273L9.79079 2.0846C10.0697 1.80565 10.0697 1.35339 9.79079 1.07444Z'
                fill='#E94A4A'
              />
            </svg>
          )}
          <p
            className={`${
              data.price_change_percentage_24h > 0
                ? styles.PositiveNum
                : styles.NegativeNum
            }`}
          >
            {Math.abs(data.price_change_percentage_24h?.toFixed(3))}%
          </p>
        </div>
        {textItem(formatnumber(data.market_cap_change_24h))}
        {textItem(formatnumber(data.total_volume))}
        {plusItem(data.hash)}
        {expandItem([
          {
            name: 'Price Change',
            data: (
              <div className={`${styles.priceChange} `}>
                {data.price_change > 0 ? (
                  <svg
                    width='10'
                    height='7'
                    viewBox='0 0 10 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.3'
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.209209 5.92556C0.488155 6.2045 0.940416 6.2045 1.21936 5.92556L4.7475 2.39742C4.88522 2.2597 5.11478 2.2597 5.2525 2.39742L8.78064 5.92556C9.05958 6.2045 9.51184 6.2045 9.79079 5.92556C10.0697 5.64661 10.0697 5.19435 9.79079 4.9154L6.26265 1.38727C5.56704 0.691654 4.43296 0.691654 3.73735 1.38727L0.209209 4.9154C-0.0697365 5.19435 -0.0697365 5.64661 0.209209 5.92556Z'
                      fill='#29765A'
                    />
                  </svg>
                ) : (
                  <svg
                    width='10'
                    height='7'
                    viewBox='0 0 10 7'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.3'
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9.79079 1.07444C9.51184 0.795498 9.05958 0.795498 8.78064 1.07444L5.2525 4.60258C5.11478 4.7403 4.88522 4.7403 4.7475 4.60258L1.21936 1.07444C0.940416 0.795498 0.488155 0.795498 0.209209 1.07444C-0.069737 1.35339 -0.069737 1.80565 0.209209 2.0846L3.73735 5.61273C4.43296 6.30835 5.56704 6.30835 6.26265 5.61273L9.79079 2.0846C10.0697 1.80565 10.0697 1.35339 9.79079 1.07444Z'
                      fill='#E94A4A'
                    />
                  </svg>
                )}
                <p
                  className={`${
                    data.price_change > 0
                      ? styles.PositiveNum
                      : styles.NegativeNum
                  }`}
                >
                  {Math.abs(data.price_change)}%
                </p>
              </div>
            ),
          },
          {
            name: 'Volume 24H',
            data: '$' + data.volume_24h + 'M',
          },
          {
            name: 'Liquidity',
            data: '$' + data.liquidity + 'B',
          },
        ])}
      </div>
    );
  }

  if (type === 'info_table_pools') {
    obj = (
      <div
        onClick={() => {
          mobileListOpener(data.hash);
        }}
        className={`${styles.rowItem} ${styles.InfoPoolsRowItem}`}
      >
        {textItem(data.id + 1)}
        <div className={styles.td}>
          <div
            onClick={() =>
              router.push(`/info/pools/${data.name.replace('/', '-')}`)
            }
            className={styles.poolsTableTitle}
          >
            <img src={data.imgSrc} alt='pool' />
            <div className={styles.poolsTableImgText}>
              <p className={styles.imgTextTitle}>{data.name}</p>
            </div>
          </div>
        </div>
        {textItem('$' + data.volume_24h)}
        {textItem('$' + data.volume_7d + 'M')}
        {textItem('$' + data.reward_fees + 'k')}
        {textItem('$' + data.reward_apr + '%')}
        {textItem('$' + data.liquidity + 'M')}
        {plusItem(data.hash)}
        {expandItem([
          {
            name: 'Volume 24H',
            data: '$' + data.volume_24h + 'M',
          },
          {
            name: 'Liquidity',
            data: '$' + data.liquidity + 'B',
          },
        ])}
      </div>
    );
  }

  if (type === 'info_table_transactions') {
    obj = (
      <div
        onClick={() => {
          mobileListOpener(data.hash);
        }}
        className={`${styles.rowItem} ${styles.InfoTransactionsRowItem}`}
      >
        {/* {textItem(data.action)} */}
        <div className={`${styles.td} ${styles.transactionTableTextWrapper}`}>
          <p className={styles.transactionTableText}>{data.action}</p>
          <OpenSVG />
        </div>
        {textItem('$' + data.total_value + 'M')}
        {multTextItem(
          formatnumber(data.token_1.amount),
          data.token_1.token,
          styles.InfoTransactionsRowItem__flex,
        )}
        {multTextItem(
          formatnumber(data.token_2.amount),
          data.token_2.token,
          styles.InfoTransactionsRowItem__flex,
        )}
        <div className={`${styles.td} ${styles.transactionTableTextWrapper}`}>
          <p className={`${styles.transactionTableText} ${styles.blue}`}>
            {data.account}
          </p>
          <OpenSVG />
        </div>
        {textItem(data.time)}
        {plusItem(data.hash)}
        {expandItem([
          {
            name: 'Total Value',
            data: '$' + data.total_value + 'M',
          },
          {
            name: 'Token Amount',
            data: multTextItem(
              formatnumber(data.token_1.amount),
              data.token_2.token,
              styles.InfoTransactionsRowItem__responsive,
            ),
          },
          {
            name: 'Token Amount1',
            data: multTextItem(
              formatnumber(data.token_2.amount),
              data.token_2.token,
              styles.InfoTransactionsRowItem__responsive,
            ),
          },
          {
            name: 'Account',
            data: data.account,
          },
        ])}
      </div>
    );
  }

  return obj;
};

export default ListItemRow;
