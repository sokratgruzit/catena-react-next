import React, { useState } from 'react';

import TabFilter from '../../../UI/filters/TabFilter';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';

import styles from './AuctionTable.module.css';

let auctionData = [
  {
    id: 0,
    position: '#1',
    farm: 'PEAK-BNB (1x)',
    subFarm: 'PEAKDEFI',
    coreBid: '11,700',
    subCoreBid: '~$38,038',
    dotMenu: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
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
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
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
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
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
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
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
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
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

let tabsData = [
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
      <svg
        className={styles.auction__finished}
        width='104'
        height='104'
        viewBox='0 0 104 104'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M34 7.70899e-07L104 69.9999L104 104L-5.13934e-07 5.13932e-07L34 7.70899e-07Z'
          fill='#E94A4A'
        />
        <path
          d='M46.8502 25.5807L47.9321 24.4989L42.6712 19.238L35.4693 26.4399L36.6254 27.596L39.9241 24.2973L43.1909 27.5642L44.2728 26.4823L41.006 23.2155L42.7454 21.476L46.8502 25.5807ZM48.8975 27.3311C49.2688 27.7023 49.8415 27.7023 50.2021 27.3417C50.5734 26.9705 50.5734 26.3977 50.2021 26.0265C49.8415 25.6658 49.2688 25.6658 48.8975 26.0371C48.5369 26.3977 48.5369 26.9705 48.8975 27.3311ZM42.1093 33.0799L43.2548 34.2254L48.749 28.7311L47.6035 27.5856L42.1093 33.0799ZM53.556 33.2199C52.2195 31.8835 50.9998 32.3608 50.9998 32.3608L51.6786 31.6819L50.5331 30.5364L45.0495 36.02L46.195 37.1656L49.2815 34.079C50.3104 33.0502 51.5725 33.2729 52.368 34.0684C53.1211 34.8215 53.0999 35.7973 52.2195 36.6776L48.9633 39.9339L50.1088 41.0794L53.4817 37.7065C54.9879 36.2004 54.7863 34.4503 53.556 33.2199ZM58.6133 37.0469C58.9846 37.4181 59.5573 37.4181 59.9179 37.0575C60.2892 36.6863 60.2892 36.1135 59.9179 35.7423C59.5573 35.3817 58.9846 35.3817 58.6133 35.7529C58.2527 36.1135 58.2527 36.6863 58.6133 37.0469ZM51.8251 42.7957L52.9706 43.9412L58.4648 38.447L57.3193 37.3014L51.8251 42.7957ZM55.7411 47.0299C57.2791 48.5678 58.7322 48.3663 59.5701 47.5284C60.3974 46.7011 60.3444 45.9268 60.0368 44.7707C59.6443 43.2751 59.464 42.8615 59.814 42.5114C60.1004 42.2251 60.5565 42.2781 61.1717 42.8933C61.7232 43.4448 61.9778 44.1661 61.9884 44.6434L63.1127 43.5191C63.0066 43.0948 62.7202 42.4054 62.052 41.7372C61.055 40.7401 59.6443 40.5174 58.7109 41.4508C57.7988 42.363 58.1064 43.3706 58.4246 44.4949C58.7109 45.5025 58.8382 46.1177 58.4352 46.5207C58.0745 46.8814 57.4806 46.7329 56.7487 46.001C55.8578 45.1101 55.7623 43.763 55.7623 43.763L54.638 44.8873C54.638 44.8873 54.8077 46.0965 55.7411 47.0299ZM67.8382 47.5021C66.5017 46.1657 65.282 46.643 65.282 46.643L67.87 44.055L66.5336 43.1004L59.3317 50.3022L60.4772 51.4478L63.5637 48.3612C64.5926 47.3324 65.8547 47.5551 66.6502 48.3506C67.4033 49.1037 67.3821 50.0795 66.5017 50.9599L63.2455 54.2161L64.391 55.3616L67.7639 51.9887C69.2701 50.4826 69.0685 48.7325 67.8382 47.5021ZM68.4316 59.7204C70.0332 61.322 71.1894 61.3538 71.1894 61.3538L72.2182 60.325C72.2076 60.3144 70.8181 60.0704 69.4711 58.7234C68.2301 57.4824 68.3998 56.1248 69.1211 55.149L73.5016 59.5295L74.0319 58.9992C75.3578 57.6733 75.7502 55.4353 74.1592 53.8444C72.4622 52.1473 69.9484 52.1367 68.3044 53.7807C66.724 55.3611 66.5012 57.79 68.4316 59.7204ZM70.0651 54.311C70.553 53.9504 71.8788 53.4307 73.0773 54.6292C74.2759 55.8278 73.6289 57.0263 73.247 57.493L70.0651 54.311ZM74.5803 65.8691C75.4713 66.76 76.4047 66.9934 77.1365 66.9828L76.5638 67.5343L77.7305 68.7011L85.1233 61.3082L83.7869 60.3537L81.5383 62.6023C81.5383 61.8386 81.1776 60.8628 80.3821 60.0673C78.7063 58.3914 76.2137 58.5081 74.6121 60.1097C73.0106 61.7113 72.9045 64.1932 74.5803 65.8691ZM75.6834 64.9357C74.6546 63.9069 74.697 62.2522 75.7364 61.2128C76.7759 60.1733 78.4199 60.1415 79.4488 61.1704C80.467 62.1886 80.5837 63.6841 79.3957 64.8721C78.1972 66.0706 76.7016 65.9539 75.6834 64.9357Z'
          fill='white'
        />
      </svg>
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
          <p className='font_20'>
            Auction #<span className={styles.number}>23</span>
          </p>
          {active === 'Archieve' && (
            <>
              <div className={styles.prev}>
                <svg
                  className={styles.prevBtn}
                  width='15'
                  height='11'
                  viewBox='0 0 15 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.850586 5.98779C0.850586 5.7576 0.946792 5.53684 1.11804 5.37407L5.46532 1.24201C5.82193 0.903056 6.4001 0.903056 6.7567 1.24201C7.11331 1.58096 7.11331 2.1305 6.7567 2.46945L3.05511 5.98779L6.7567 9.50613C7.11331 9.84508 7.11331 10.3946 6.7567 10.7336C6.4001 11.0725 5.82193 11.0725 5.46532 10.7336L1.11804 6.60152C0.946792 6.43875 0.850586 6.21798 0.850586 5.98779Z'
                    fill='white'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.970703 5.98802C0.970703 5.50867 1.37953 5.12008 1.88385 5.12008L13.9374 5.12008C14.4417 5.12008 14.8505 5.50867 14.8505 5.98802C14.8505 6.46737 14.4417 6.85596 13.9374 6.85596L1.88385 6.85596C1.37953 6.85596 0.970703 6.46737 0.970703 5.98802Z'
                    fill='white'
                  />
                </svg>
              </div>
              <div className={styles.next}>
                <svg
                  className={styles.nextBtn}
                  width='15'
                  height='11'
                  viewBox='0 0 15 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.8506 5.98779C14.8506 5.7576 14.7544 5.53684 14.5831 5.37407L10.2355 1.24201C9.87888 0.903056 9.30067 0.903056 8.94404 1.24201C8.58741 1.58096 8.58741 2.1305 8.94404 2.46945L12.6459 5.98779L8.94404 9.50613C8.5874 9.84508 8.5874 10.3946 8.94404 10.7336C9.30067 11.0725 9.87888 11.0725 10.2355 10.7336L14.5831 6.60152C14.7544 6.43875 14.8506 6.21798 14.8506 5.98779Z'
                    fill='white'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.7314 5.98802C14.7314 5.50867 14.3226 5.12008 13.8182 5.12008L1.76385 5.12008C1.25949 5.12008 0.850635 5.50867 0.850635 5.98802C0.850635 6.46737 1.25949 6.85596 1.76385 6.85596L13.8182 6.85596C14.3226 6.85596 14.7314 6.46737 14.7314 5.98802Z'
                    fill='white'
                  />
                </svg>
              </div>
              <div className={styles.last}>
                <svg
                  className={styles.lastBtn}
                  width='17'
                  height='11'
                  viewBox='0 0 17 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.8506 5.98779C14.8506 5.7576 14.7544 5.53684 14.5831 5.37407L10.2355 1.24201C9.87888 0.903056 9.30067 0.903056 8.94404 1.24201C8.58741 1.58096 8.58741 2.1305 8.94404 2.46945L12.6459 5.98779L8.94404 9.50613C8.5874 9.84508 8.5874 10.3946 8.94404 10.7336C9.30067 11.0725 9.87888 11.0725 10.2355 10.7336L14.5831 6.60152C14.7544 6.43875 14.8506 6.21798 14.8506 5.98779Z'
                    fill='white'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.7314 5.98802C14.7314 5.50867 14.3226 5.12008 13.8182 5.12008L1.76385 5.12008C1.25949 5.12008 0.850635 5.50867 0.850635 5.98802C0.850635 6.46737 1.25949 6.85596 1.76385 6.85596L13.8182 6.85596C14.3226 6.85596 14.7314 6.46737 14.7314 5.98802Z'
                    fill='white'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M15.8506 0.987793C16.4029 0.987793 16.8506 1.43551 16.8506 1.98779V9.98779C16.8506 10.5401 16.4029 10.9878 15.8506 10.9878C15.2983 10.9878 14.8506 10.5401 14.8506 9.98779V1.98779C14.8506 1.43551 15.2983 0.987793 15.8506 0.987793Z'
                    fill='white'
                  />
                </svg>
              </div>

              <p className={styles.archieveDate}>
                Ended Jun 07, 2022, 06:00 PM
              </p>
            </>
          )}
        </div>
        <div className={styles.auction__innerTable}>
          <div className={styles.auctions__tableHeader}>
            <div>POSITION</div>
            <div>FARM</div>
            <div>CORE BID</div>
          </div>
          {auctionData.map(item => {
            return (
              <div key={item.id} className={styles.auctions__tableItems}>
                <div>{item.position}</div>
                <div>
                  <div>{item.farm}</div>
                  <div className={`font_10 ${styles.auction__tableSubText}`}>
                    {item.subFarm}
                  </div>
                </div>
                <div>
                  <div>{item.coreBid}</div>
                  <div className={`font_10 ${styles.auction__tableSubText}`}>
                    {item.subCoreBid}
                  </div>
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
