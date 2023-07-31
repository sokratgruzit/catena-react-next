import React, { useState } from 'react';

import { ArrowToLast, FinishedSvg, SmlArrowSvg } from '../../../svg';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import TabFilter from '../../../UI/filters/TabFilter';

import styles from './AuctionTable.module.css';

const auctionData = [
  {
    id: 0,
    position: '#1',
    farm: 'PEAK-BNB (1x)',
    subFarm: 'PEAKDEFI',
    coreBid: '11,700',
    subCoreBid: '~$38,038',
    dotMenu: (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4.16667 8.33325C3.25 8.33325 2.5 9.08325 2.5 9.99992C2.5 10.9166 3.25 11.6666 4.16667 11.6666C5.08333 11.6666 5.83333 10.9166 5.83333 9.99992C5.83333 9.08325 5.08333 8.33325 4.16667 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M15.8327 8.33325C14.916 8.33325 14.166 9.08325 14.166 9.99992C14.166 10.9166 14.916 11.6666 15.8327 11.6666C16.7493 11.6666 17.4993 10.9166 17.4993 9.99992C17.4993 9.08325 16.7493 8.33325 15.8327 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M10.0007 8.33325C9.08398 8.33325 8.33398 9.08325 8.33398 9.99992C8.33398 10.9166 9.08398 11.6666 10.0007 11.6666C10.9173 11.6666 11.6673 10.9166 11.6673 9.99992C11.6673 9.08325 10.9173 8.33325 10.0007 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
      </svg>
    ),
  },
  {
    id: 1,
    position: '#2',
    farm: 'HAPPY-BNB (1x)',
    subFarm: 'HappyFans',
    coreBid: '111,410',
    subCoreBid: '~$36,887',
    dotMenu: (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4.16667 8.33325C3.25 8.33325 2.5 9.08325 2.5 9.99992C2.5 10.9166 3.25 11.6666 4.16667 11.6666C5.08333 11.6666 5.83333 10.9166 5.83333 9.99992C5.83333 9.08325 5.08333 8.33325 4.16667 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M15.8327 8.33325C14.916 8.33325 14.166 9.08325 14.166 9.99992C14.166 10.9166 14.916 11.6666 15.8327 11.6666C16.7493 11.6666 17.4993 10.9166 17.4993 9.99992C17.4993 9.08325 16.7493 8.33325 15.8327 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M10.0007 8.33325C9.08398 8.33325 8.33398 9.08325 8.33398 9.99992C8.33398 10.9166 9.08398 11.6666 10.0007 11.6666C10.9173 11.6666 11.6673 10.9166 11.6673 9.99992C11.6673 9.08325 10.9173 8.33325 10.0007 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
      </svg>
    ),
  },
  {
    id: 2,
    position: '#3',
    farm: 'HAPPY-BNB (1x)',
    subFarm: 'HappyFans',
    coreBid: '111,410',
    subCoreBid: '~$36,887',
    dotMenu: (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4.16667 8.33325C3.25 8.33325 2.5 9.08325 2.5 9.99992C2.5 10.9166 3.25 11.6666 4.16667 11.6666C5.08333 11.6666 5.83333 10.9166 5.83333 9.99992C5.83333 9.08325 5.08333 8.33325 4.16667 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M15.8327 8.33325C14.916 8.33325 14.166 9.08325 14.166 9.99992C14.166 10.9166 14.916 11.6666 15.8327 11.6666C16.7493 11.6666 17.4993 10.9166 17.4993 9.99992C17.4993 9.08325 16.7493 8.33325 15.8327 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M10.0007 8.33325C9.08398 8.33325 8.33398 9.08325 8.33398 9.99992C8.33398 10.9166 9.08398 11.6666 10.0007 11.6666C10.9173 11.6666 11.6673 10.9166 11.6673 9.99992C11.6673 9.08325 10.9173 8.33325 10.0007 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
      </svg>
    ),
  },
  {
    id: 3,
    position: '#4',
    farm: 'HAPPY-BNB (1x)',
    subFarm: 'HappyFans',
    coreBid: '111,410',
    subCoreBid: '~$36,887',
    dotMenu: (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4.16667 8.33325C3.25 8.33325 2.5 9.08325 2.5 9.99992C2.5 10.9166 3.25 11.6666 4.16667 11.6666C5.08333 11.6666 5.83333 10.9166 5.83333 9.99992C5.83333 9.08325 5.08333 8.33325 4.16667 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M15.8327 8.33325C14.916 8.33325 14.166 9.08325 14.166 9.99992C14.166 10.9166 14.916 11.6666 15.8327 11.6666C16.7493 11.6666 17.4993 10.9166 17.4993 9.99992C17.4993 9.08325 16.7493 8.33325 15.8327 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M10.0007 8.33325C9.08398 8.33325 8.33398 9.08325 8.33398 9.99992C8.33398 10.9166 9.08398 11.6666 10.0007 11.6666C10.9173 11.6666 11.6673 10.9166 11.6673 9.99992C11.6673 9.08325 10.9173 8.33325 10.0007 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
      </svg>
    ),
  },
  {
    id: 4,
    position: '#5',
    farm: 'HAPPY-BNB (1x)',
    subFarm: 'HappyFans',
    coreBid: '111,410',
    subCoreBid: '~$36,887',
    dotMenu: (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4.16667 8.33325C3.25 8.33325 2.5 9.08325 2.5 9.99992C2.5 10.9166 3.25 11.6666 4.16667 11.6666C5.08333 11.6666 5.83333 10.9166 5.83333 9.99992C5.83333 9.08325 5.08333 8.33325 4.16667 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M15.8327 8.33325C14.916 8.33325 14.166 9.08325 14.166 9.99992C14.166 10.9166 14.916 11.6666 15.8327 11.6666C16.7493 11.6666 17.4993 10.9166 17.4993 9.99992C17.4993 9.08325 16.7493 8.33325 15.8327 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
        <path
          d='M10.0007 8.33325C9.08398 8.33325 8.33398 9.08325 8.33398 9.99992C8.33398 10.9166 9.08398 11.6666 10.0007 11.6666C10.9173 11.6666 11.6673 10.9166 11.6673 9.99992C11.6673 9.08325 10.9173 8.33325 10.0007 8.33325Z'
          stroke='white'
          strokeWidth='1.5'
        />
      </svg>
    ),
  },
];

const tabsData = [
  {
    id: 0,
    label: 'Latest',
  },
  {
    id: 1,
    label: 'Archieve',
  },
];

const AuctionTable = () => {
  const [active, setActive] = useState('Latest');

  const navigationHandler = activeItem => {
    setActive(activeItem);
  };

  return (
    <div className={styles.auction__table}>
      <CornerDecor />
      <FinishedSvg className={styles.auction__finished} />
      <div className={`${styles.auction__tabInner}`}>
        <TabFilter
          onClick={navigationHandler}
          data={tabsData}
          activeMenu={active}
          css={{
            wrap: styles.Activity__filterWrap,
            filter: styles.Activity__filter,
            active: styles.Activity__filterActive,
            item: styles.Activity__filter__item,
          }}
        />
      </div>
      <div className={styles.auction__tableInner}>
        <div className={styles.auction__number}>
          <p className='font-20'>
            Auction <span className={`${styles.hash} font-20`}>#</span><span className={`font-20`}>23</span>
          </p>
          {active === 'Archieve' && (
            <>
              <SmlArrowSvg className={styles.prevBtn} />
              <SmlArrowSvg className={styles.nextBtn} />
              <ArrowToLast className={styles.lastBtn} />
              <p className={styles.archieveDate}>Ended Jun 07, 2022, 06:00 PM</p>
            </>
          )}
        </div>
        <div className={styles.auction__innerTable}>
          <div className={styles.auctions__tableHeader}>
            <div>POSITION</div>
            <div>FARM</div>
            <div>CATENA BID</div>
          </div>
          {auctionData.map(item => {
            return (
              <div key={item.id} className={styles.auctions__tableItems}>
                <div>{item.position}</div>
                <div>
                  <div>{item.farm}</div>
                  <div className={`font_10 ${styles.auction__tableSubText}`}>{item.subFarm}</div>
                </div>
                <div>
                  <div>{item.coreBid}</div>
                  <div className={`font_10 ${styles.auction__tableSubText}`}>{item.subCoreBid}</div>
                </div>
                <div className={styles.auction__dotMenu}>{item.dotMenu}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AuctionTable;
