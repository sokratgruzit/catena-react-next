import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../button/Button';
import { OpenSVG } from '../../svg/InfoIcons';

import { formatCurrency } from '../../utils/formatCurrency';

import Dashboard from './Rows/dashboard/Dashboard';
import NftActivity from './Rows/nftActivity/NftActivity';
import NftCollections from './Rows/nftCollections/NftCollections';
import InfoTableTokens from './Rows/infoTableTokens/InfoTableTokens';
import InfoTablePools from './Rows/infoTablePools/InfoTablePools';

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

  let btnItem = type => {
    let item = null;

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

  if (type === 'dashboard')
    obj = (
      <Dashboard
        data={data}
        activeList={activeList}
        mobileListOpener={mobileListOpener}
      />
    );

  if (type === 'nft_activity')
    obj = (
      <NftActivity
        data={data}
        activeList={activeList}
        mobileListOpener={mobileListOpener}
      />
    );

  if (type === 'nft_collections')
    obj = (
      <NftCollections
        data={data}
        activeList={activeList}
        mobileListOpener={mobileListOpener}
      />
    );

  if (type === 'info_table_tokens')
    obj = (
      <InfoTableTokens
        data={data}
        activeList={activeList}
        mobileListOpener={mobileListOpener}
      />
    );
  if (type === 'info_table_pools')
    obj = (
      <InfoTablePools
        data={data}
        activeList={activeList}
        mobileListOpener={mobileListOpener}
      />
    );

  // if (type === 'staking') {
  //   obj = (
  //     <div className={styles.rowItem}>
  //       {textItem(parseFloat(data.amount) / 10 ** 18)}
  //       {textItem(data.staketime)}
  //       {textItem(data.unstaketime)}
  //       {textItem('CMCX')}
  //       {textItem(parseFloat(data.realtimeRewardPerBlock).toFixed(10))}
  //       {btnItem(type)}
  //     </div>
  //   );
  // }

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
          formatCurrency(data.token_1.amount),
          data.token_1.token,
          styles.InfoTransactionsRowItem__flex,
        )}
        {multTextItem(
          formatCurrency(data.token_2.amount),
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
              formatCurrency(data.token_1.amount),
              data.token_2.token,
              styles.InfoTransactionsRowItem__responsive,
            ),
          },
          {
            name: 'Token Amount1',
            data: multTextItem(
              formatCurrency(data.token_2.amount),
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
  if (type === 'nft_buy') {
    obj = (
      <div key={data.id} className={styles.buy__outer}>
        <div className={styles.buy__item}>{data.event}</div>
        <div className={styles.buy__item}>
          <div className={styles.buy__itemPrice}>
            <p>
              <span>CMCX</span>
              {data.cmcx}
            </p>
            <p className={'font_13'}>{data.usd}</p>
          </div>
        </div>
        <div className={styles.buy__item}>
          <img src={data.fromImg} />
          <div className={styles.buy__itemTitles}>
            <p>{data.from}</p>
            <p>{data.fromAddress}</p>
          </div>
        </div>
        <div className={styles.buy__item}>
          <img src={data.toImg} />
          <div className={styles.buy__itemTitles}>
            <p>{data.to}</p>
            <p>{data.toAddress}</p>
          </div>
        </div>
        <div className={styles.buy__item}>
          <div className={styles.buy__item__inner}>
            <div className={styles.buy__item__date}>
              <p>{data.date},</p>
              <p>{data.time}</p>
            </div>
            <Link className={styles.toTransaction} href={`/sometrasaction`}>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13.3952 1.64558C13.6577 1.90306 13.6617 2.32458 13.4043 2.58706L8.30899 7.78113C8.0515 8.04361 7.62999 8.04766 7.36751 7.79017C7.10503 7.53268 7.10098 7.11117 7.35847 6.84869L12.4537 1.65462C12.7112 1.39214 13.1327 1.38809 13.3952 1.64558Z'
                  fill='#0500FF'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.7793 1.61302C9.7793 1.24534 10.0774 0.947266 10.4451 0.947266H13.4276C13.7953 0.947266 14.0934 1.24534 14.0934 1.61302V4.65346C14.0934 5.02115 13.7953 5.31922 13.4276 5.31922C13.06 5.31922 12.7619 5.02115 12.7619 4.65346V2.27878H10.4451C10.0774 2.27878 9.7793 1.98071 9.7793 1.61302Z'
                  fill='#0500FF'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1.53422 2.17612C2.41894 1.27423 3.72751 0.947266 5.34937 0.947266H6.59211C6.9598 0.947266 7.25787 1.24534 7.25787 1.61302C7.25787 1.98071 6.9598 2.27878 6.59211 2.27878H5.34937C3.86435 2.27878 2.9981 2.58524 2.48474 3.10856C1.96826 3.63505 1.6655 4.52643 1.6655 6.04699V9.84754C1.6655 11.3681 1.96826 12.2595 2.48474 12.786C2.9981 13.3093 3.86435 13.6157 5.34937 13.6157H9.07761C10.5626 13.6157 11.4289 13.3093 11.9422 12.786C12.4587 12.2595 12.7615 11.3681 12.7615 9.84754V8.58069C12.7615 8.213 13.0595 7.91493 13.4272 7.91493C13.7949 7.91493 14.093 8.213 14.093 8.58069V9.84754C14.093 11.4941 13.7744 12.8197 12.8928 13.7184C12.008 14.6203 10.6995 14.9473 9.07761 14.9473H5.34937C3.72751 14.9473 2.41894 14.6203 1.53422 13.7184C0.652602 12.8197 0.333984 11.4941 0.333984 9.84754V6.04699C0.333984 4.40043 0.652602 3.07483 1.53422 2.17612Z'
                  fill='#0500FF'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'nft_buy_mobile') {
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
  }

  return obj;
};

export default ListItemRow;
