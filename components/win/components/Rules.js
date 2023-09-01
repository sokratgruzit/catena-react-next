import Image from 'next/image';
import { useState } from 'react';

import Finished from './Finished';
import FAQ from '../../faqOld/FAQ';
// import { Table } from '@catena-network/catena-ui-module';
// import { useMobileWidth } from '../../../hooks/useMobileWidth';

import styles from './Rules.module.css';

const Rules = () => {
  // const { tableFilterData, mobile, mobileExpand, mobileExpandFunc } = useMobileWidth();
  // const [tableExpand, setTableExpand] = useState(null);

  // let th = [
  //   {
  //     name: 'Staked Amount',
  //     width: 14.2,
  //     mobileWidth: 33.3,
  //     id: 0,
  //   },
  //   {
  //     name: 'Stake Date',
  //     width: 14.2,
  //     mobileWidth: 33.3,
  //     id: 1,
  //   },
  //   {
  //     name: 'Unstake Date',
  //     width: 14.2,
  //     mobileWidth: 33.3,
  //     id: 2,
  //   },
  //   {
  //     name: 'Earn Reward',
  //     width: 14.2,
  //     mobileSlide: true,
  //     id: 3,
  //   },
  //   {
  //     name: 'Harvest',
  //     width: 14.2,
  //     mobileSlide: true,
  //     id: 4,
  //   },
  //   {
  //     name: 'Action 1',
  //     width: 14.2,
  //     mobileSlide: true,
  //     id: 5,
  //   },
  //   {
  //     name: 'Action 2',
  //     width: 14.2,
  //     mobileSlide: true,
  //     id: 6,
  //   },
  // ];

  // let td = [
  //   {
  //     id: 12123,
  //     stakeAmout: '123123123123',
  //     stakeDate: '01.02.2023',
  //     unStakeDate: '01.02.2333',
  //     earnReward: '200',
  //     harvest: '200',
  //     withdrawan: false,
  //     unstaked: true,
  //   },
  //   {
  //     id: 12,
  //     stakeAmout: '123123123123',
  //     stakeDate: '01.02.2023',
  //     unStakeDate: '01.02.2333',
  //     earnReward: '200',
  //     harvest: '200',
  //     withdrawan: true,
  //     unstaked: false,
  //   },
  // ];

  // const tableExpandFunc = id => {
  //   if (id !== tableExpand) {
  //     setTableExpand(id);
  //   } else {
  //     setTableExpand(null);
  //   }
  // };

  // let tableData;
  // tableData = td.map((item, index) => {
  //   return (
  //     <div className={`table-parent ${mobileExpand == item.id ? 'active' : ''}`} key={index}>
  //       <div className='table more'>
  //         <div
  //           className={`td col ${th[0].mobileWidth ? true : false}`}
  //           style={{ width: `${mobile ? th[0].mobileWidth : th[0].width}%` }}
  //         >
  //           {/* <span>{item.id}</span> */}
  //           <span>{item.stakeAmout}</span>
  //         </div>
  //         <div
  //           onClick={() => {
  //             //   tableExpandFunc(item.id);
  //           }}
  //           className={`td expand ${tableExpand == item.id ? 'active' : ''} ${th[1].mobileWidth ? true : false}`}
  //           style={{ width: `${mobile ? th[1].mobileWidth : th[1].width}%` }}
  //         >
  //           <span>{item.stakeDate}</span>
  //         </div>
  //         <div
  //           className={`td ${th[2].mobileWidth ? true : false}`}
  //           style={{ width: `${mobile ? th[2].mobileWidth : th[2].width}%` }}
  //         >
  //           <span>{item.unStakeDate}</span>
  //         </div>
  //         <div
  //           className={`td ${th[3].mobileWidth ? true : false}`}
  //           style={{ width: `${mobile ? th[3].mobileWidth : th[3].width}%` }}
  //         >
  //           <span>{item.earnReward}</span>
  //         </div>
  //         <div
  //           className={`td ${th[4].mobileWidth ? true : false}`}
  //           style={{ width: `${mobile ? th[4].mobileWidth : th[4].width}%` }}
  //         >
  //           <span>{item.harvest}</span>
  //         </div>
  //         <div
  //           className={`td col ${th[5].mobileWidth ? true : false}`}
  //           style={{ width: `${mobile ? th[5].mobileWidth : th[5].width}%` }}
  //         >
  //           <span>{item.withdrawan ? 'harvesst' : 'harvestred'}</span>
  //         </div>
  //         <div
  //           className={`td ${th[6].mobileWidth ? true : false}`}
  //           style={{ width: `${mobile ? th[6].mobileWidth : th[6].width}%` }}
  //         >
  //           <span
  //             className={`alert-status-box
  //                               ${item.type === 'All Deposit' && 'alert-blue'}
  //                               ${item.type === 'Withdraw' && 'alert-yellow'}
  //                               ${item.type === 'Transfer' && 'alert-green'}
  //                               font-14`}
  //           >
  //             {item.unstaked ? 'stake' : 'staked'}
  //           </span>
  //         </div>
  //       </div>
  //       <div
  //         onClick={() => {
  //           mobileExpandFunc(item.id);
  //         }}
  //         className={`${'table-icon-place'}
  //               `}
  //       >
  //         <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
  //           <path
  //             d='M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325'
  //             stroke='#162029'
  //             u
  //             strokeWidth='1.5'
  //             strokeMiterlimit='10'
  //             strokeLinecap='round'
  //             strokeLinejoin='round'
  //           />
  //         </svg>
  //       </div>
  //       <div className={`table-mobile`}>
  //         <div className='table-mobile-content'>
  //           <div className='td'>
  //             <div className='mobile-ttl'>{th[3].name}</div>
  //             <span>{item.earnReward}</span>
  //           </div>
  //           <div className='td'>
  //             <div className='mobile-ttl'>{th[4].name}</div>
  //             <span>{item.harvest}</span>
  //           </div>
  //           <div className='td type'>
  //             <div className='mobile-ttl'>{th[5].name}</div>
  //             <span
  //               className={`alert-status-box
  //                 ${item.type === 'All Deposit' && 'alert-status-blue'}
  //                 ${item.type === 'Withdraw' && 'alert-status-yellow'}
  //                 ${item.type === 'Transfer' && 'alert-status-green'}
  //                 font-14`}
  //             >
  //               {item.withdrawan ? 'harvest' : 'harvested'}
  //             </span>
  //             <div className='mobile-ttl'>{th[6].name}</div>
  //             <span
  //               className={`alert-status-box
  //                 ${item.type === 'All Deposit' && 'alert-status-blue'}
  //                 ${item.type === 'Withdraw' && 'alert-status-yellow'}
  //                 ${item.type === 'Transfer' && 'alert-status-green'}
  //                 font-14`}
  //             >
  //               {item.unstaked ? 'stake' : 'staked'}
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.rulesIcones}>
          <div>
            <svg width='27' height='31' viewBox='0 0 27 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_1528_4756)'>
                <path
                  d='M5.42292 13.1374C4.67171 13.1914 3.91751 13.0856 3.21127 12.8273C2.50502 12.569 1.86317 12.1642 1.32906 11.6402C-0.414391 9.8618 0.130632 7.3623 0.130632 7.3623C1.65771 7.45507 3.09408 8.10921 4.15636 9.19567C4.67268 9.7041 5.05733 10.3277 5.27779 11.0138C5.49825 11.6999 5.54803 12.4283 5.42292 13.1374Z'
                  fill='#627EEA'
                />
                <path
                  d='M11.7933 9.16467C11.6688 9.89791 11.3863 10.5962 10.9648 11.2125C10.5433 11.8287 9.99262 12.3485 9.35002 12.7367C8.83025 12.2331 8.44121 11.6133 8.21587 10.9297C7.99054 10.2462 7.93556 9.51918 8.0556 8.81023C8.2769 7.31409 9.0607 5.95491 10.2512 5.00293C10.2512 5.00293 12.1587 6.72018 11.7933 9.16467Z'
                  fill='#627EEA'
                />
                <path
                  d='M14.4565 15.0228C14.4291 15.7656 14.2405 16.494 13.9034 17.1587C13.5663 17.8234 13.0886 18.409 12.5024 18.8759C11.9219 18.443 11.4556 17.8785 11.143 17.2301C10.8303 16.5818 10.6806 15.8687 10.7063 15.1511C10.7297 13.6433 11.3266 12.1993 12.3786 11.1055C12.3786 11.1055 14.4967 12.5508 14.4565 15.0228Z'
                  fill='#627EEA'
                />
                <path
                  d='M18.7794 18.3905C18.8251 19.1346 18.708 19.8796 18.4361 20.5751C18.1641 21.2705 17.7436 21.9 17.2032 22.4209C16.5831 22.0445 16.0642 21.526 15.6906 20.9095C15.317 20.293 15.0997 19.5965 15.0572 18.8794C14.9395 17.3754 15.3981 15.8827 16.3423 14.6963C16.3423 14.6963 18.5843 15.9277 18.7794 18.3905Z'
                  fill='#627EEA'
                />
                <path
                  d='M23.4402 21.1556C23.696 21.8512 23.7982 22.5927 23.74 23.3305C23.6818 24.0683 23.4645 24.7853 23.1026 25.4335C22.3976 25.2504 21.7479 24.902 21.2087 24.4179C20.6695 23.9337 20.2569 23.3282 20.0059 22.6529C19.452 21.2466 19.452 19.6866 20.0059 18.2803C20.0059 18.2803 22.5359 18.8517 23.4402 21.1556Z'
                  fill='#627EEA'
                />
                <path
                  d='M3.69845 4.24235C3.24633 1.79786 5.09816 0.0439453 5.09816 0.0439453C6.31759 0.952226 7.14656 2.27952 7.4207 3.76262C7.56606 4.46759 7.53697 5.19676 7.33589 5.88827C7.13481 6.57978 6.76768 7.21324 6.26562 7.73492C5.60909 7.36825 5.04009 6.86665 4.59717 6.26407C4.15425 5.66149 3.84776 4.97201 3.69845 4.24235Z'
                  fill='#627EEA'
                />
                <path
                  d='M5.20618 14.5211C5.85073 14.856 6.40414 15.339 6.8197 15.9293C7.23525 16.5196 7.50075 17.2 7.59375 17.9128C6.8918 18.1828 6.1393 18.3009 5.3871 18.2593C4.6349 18.2177 3.90052 18.0172 3.23358 17.6715C1.04111 16.4828 0.818146 13.9497 0.818146 13.9497C2.30176 13.5918 3.86747 13.7956 5.20618 14.5211Z'
                  fill='#627EEA'
                />
                <path
                  d='M8.30954 19.3275C9.01466 19.5113 9.6644 19.8603 10.2035 20.3449C10.7427 20.8296 11.1553 21.4355 11.4062 22.1111C10.7828 22.5282 10.0759 22.8084 9.33337 22.9328C8.5908 23.0572 7.82982 23.0229 7.10182 22.8323C4.69258 22.1539 3.90601 19.7339 3.90601 19.7339C5.27058 19.0594 6.84188 18.9144 8.30954 19.3275Z'
                  fill='#627EEA'
                />
                <path
                  d='M11.8488 23.3674C12.576 23.3332 13.301 23.4722 13.9623 23.7727C14.6236 24.0732 15.202 24.5263 15.6484 25.0938C15.1817 25.6783 14.5932 26.157 13.9227 26.4976C13.2522 26.8381 12.5153 27.0326 11.7621 27.0677C9.26302 27.138 7.7704 25.0663 7.7704 25.0663C8.86632 24.0161 10.3217 23.4098 11.8488 23.3674Z'
                  fill='#627EEA'
                />
                <path
                  d='M17.4641 26.3099C18.1818 26.1898 18.9183 26.2424 19.6111 26.4631C20.3039 26.6839 20.9324 27.0663 21.4434 27.578C21.0513 28.2125 20.5258 28.7566 19.9023 29.1736C19.2789 29.5905 18.572 29.8706 17.8295 29.995C15.3521 30.3617 13.618 28.4825 13.618 28.4825C14.5801 27.3098 15.9521 26.5348 17.4641 26.3099Z'
                  fill='#627EEA'
                />
                <path
                  d='M5.87894 8.92285L7.11762 8.96258C7.10214 9.4637 6.95659 21.2767 26.0664 26.8104L25.7258 27.9746C5.6343 22.1598 5.87274 9.05119 5.87894 8.92285Z'
                  fill='#627EEA'
                />
              </g>
              <defs>
                <clipPath id='clip0_1528_4756'>
                  <rect width='26' height='30' fill='white' transform='matrix(-1 0 0 1 26.0508 0.0439453)' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.rulsClock}>
            <Image layout='fill' objectFit={'contain'} src={'/images/win/rulsClock.png'} alt='Medal' />
          </div>
          <div>
            <svg width='27' height='31' viewBox='0 0 27 31' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_1528_4768)'>
                <path
                  d='M20.6786 13.1374C21.4299 13.1914 22.1841 13.0856 22.8903 12.8273C23.5965 12.569 24.2384 12.1642 24.7725 11.6402C26.516 9.8618 25.9709 7.3623 25.9709 7.3623C24.4439 7.45507 23.0075 8.10921 21.9452 9.19567C21.4289 9.7041 21.0442 10.3277 20.8238 11.0138C20.6033 11.6999 20.5535 12.4283 20.6786 13.1374Z'
                  fill='#627EEA'
                />
                <path
                  d='M14.3082 9.16467C14.4327 9.89791 14.7153 10.5962 15.1368 11.2125C15.5583 11.8287 16.1089 12.3485 16.7515 12.7367C17.2713 12.2331 17.6604 11.6133 17.8857 10.9297C18.111 10.2462 18.166 9.51918 18.046 8.81023C17.8247 7.31409 17.0409 5.95491 15.8504 5.00293C15.8504 5.00293 13.9428 6.72018 14.3082 9.16467Z'
                  fill='#627EEA'
                />
                <path
                  d='M11.6451 15.0228C11.6725 15.7656 11.8611 16.494 12.1982 17.1587C12.5352 17.8234 13.013 18.409 13.5991 18.8759C14.1796 18.443 14.646 17.8785 14.9586 17.2301C15.2712 16.5818 15.421 15.8687 15.3952 15.1511C15.3719 13.6433 14.775 12.1993 13.723 11.1055C13.723 11.1055 11.6048 12.5508 11.6451 15.0228Z'
                  fill='#627EEA'
                />
                <path
                  d='M7.32215 18.3905C7.27643 19.1346 7.39353 19.8796 7.66551 20.5751C7.93748 21.2705 8.35796 21.9 8.89838 22.4209C9.51846 22.0445 10.0373 21.526 10.4109 20.9095C10.7845 20.293 11.0018 19.5965 11.0444 18.8794C11.162 17.3754 10.7034 15.8827 9.75926 14.6963C9.75926 14.6963 7.51724 15.9277 7.32215 18.3905Z'
                  fill='#627EEA'
                />
                <path
                  d='M2.66137 21.1556C2.40558 21.8512 2.30337 22.5927 2.36159 23.3305C2.4198 24.0683 2.63709 24.7853 2.99891 25.4335C3.70393 25.2504 4.35369 24.902 4.89287 24.4179C5.43205 23.9337 5.84468 23.3282 6.09563 22.6529C6.64957 21.2466 6.64957 19.6866 6.09563 18.2803C6.09563 18.2803 3.56561 18.8517 2.66137 21.1556Z'
                  fill='#627EEA'
                />
                <path
                  d='M22.4031 4.24235C22.8552 1.79786 21.0034 0.0439453 21.0034 0.0439453C19.784 0.952226 18.955 2.27952 18.6809 3.76262C18.5355 4.46759 18.5646 5.19676 18.7657 5.88827C18.9668 6.57978 19.3339 7.21324 19.8359 7.73492C20.4925 7.36825 21.0615 6.86665 21.5044 6.26407C21.9473 5.66149 22.2538 4.97201 22.4031 4.24235Z'
                  fill='#627EEA'
                />
                <path
                  d='M20.8954 14.5211C20.2508 14.856 19.6974 15.339 19.2819 15.9293C18.8663 16.5196 18.6008 17.2 18.5078 17.9128C19.2098 18.1828 19.9623 18.3009 20.7145 18.2593C21.4667 18.2177 22.201 18.0172 22.868 17.6715C25.0605 16.4828 25.2834 13.9497 25.2834 13.9497C23.7998 13.5918 22.2341 13.7956 20.8954 14.5211Z'
                  fill='#627EEA'
                />
                <path
                  d='M17.792 19.3275C17.0869 19.5113 16.4372 19.8603 15.898 20.3449C15.3589 20.8296 14.9463 21.4355 14.6953 22.1111C15.3187 22.5282 16.0256 22.8084 16.7682 22.9328C17.5108 23.0572 18.2717 23.0229 18.9997 22.8323C21.409 22.1539 22.1956 19.7339 22.1956 19.7339C20.831 19.0594 19.2597 18.9144 17.792 19.3275Z'
                  fill='#627EEA'
                />
                <path
                  d='M14.2528 23.3674C13.5255 23.3332 12.8006 23.4722 12.1393 23.7727C11.4779 24.0732 10.8996 24.5263 10.4531 25.0938C10.9198 25.6783 11.5084 26.157 12.1789 26.4976C12.8494 26.8381 13.5862 27.0326 14.3395 27.0677C16.8385 27.138 18.3312 25.0663 18.3312 25.0663C17.2352 24.0161 15.7799 23.4098 14.2528 23.3674Z'
                  fill='#627EEA'
                />
                <path
                  d='M8.63748 26.3099C7.91974 26.1898 7.18322 26.2424 6.49046 26.4631C5.7977 26.6839 5.16916 27.0663 4.6582 27.578C5.0503 28.2125 5.57581 28.7566 6.19925 29.1736C6.82268 29.5905 7.52953 29.8706 8.27207 29.995C10.7494 30.3617 12.4836 28.4825 12.4836 28.4825C11.5215 27.3098 10.1495 26.5348 8.63748 26.3099Z'
                  fill='#627EEA'
                />
                <path
                  d='M20.2226 8.92285L18.9839 8.96258C18.9994 9.4637 19.145 21.2767 0.0351562 26.8104L0.375792 27.9746C20.4673 22.1598 20.2288 9.05119 20.2226 8.92285Z'
                  fill='#627EEA'
                />
              </g>
              <defs>
                <clipPath id='clip0_1528_4768'>
                  <rect width='26' height='30' fill='white' transform='translate(0.0507812 0.0439453)' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.rulesTitle}>
          <h3>Rules</h3>
        </div>
        <div className={styles.rulesDescription}>
          <div className={styles.rules}>
            <div>
              <h4 className='ttl'>Trade to increase your rank</h4>
              <p>
                Eligible pairs: SANTOS/BNB, PORTO/BNB, LAZIO/BNB, SANTOS/BUSD, PORTO/BUSD, LAZIO/BUSD, CMCX/BNB and
                CMCX/BUSD
              </p>
            </div>
          </div>
          <span>
            <svg
              className={styles.lines}
              width='2'
              height='201'
              viewBox='0 0 2 201'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line x1='0.914062' y1='0.827148' x2='0.91407' y2='200.827' stroke='url(#paint0_linear_1537_5961)' />
              <defs>
                <linearGradient
                  id='paint0_linear_1537_5961'
                  x1='0.414093'
                  y1='200.827'
                  x2='0.41408'
                  y2='0.827148'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7464D7' stopOpacity='0' />
                  <stop offset='0.510417' stopColor='#7464D7' />
                  <stop offset='1' stopColor='#7464D7' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className={styles.rules}>
            <div>
              <h4 className='ttl'>Play as a team</h4>
              <p>The higher your team’s rank, the better your prizes!</p>
            </div>
          </div>
          <span>
            <svg
              className={styles.lines}
              width='2'
              height='201'
              viewBox='0 0 2 201'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line x1='0.914062' y1='0.827148' x2='0.91407' y2='200.827' stroke='url(#paint0_linear_1537_5961)' />
              <defs>
                <linearGradient
                  id='paint0_linear_1537_5961'
                  x1='0.414093'
                  y1='200.827'
                  x2='0.41408'
                  y2='0.827148'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#7464D7' stopOpacity='0' />
                  <stop offset='0.510417' stopColor='#7464D7' />
                  <stop offset='1' stopColor='#7464D7' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div>
            <h4 className={`${styles.everyone} ttl`}>Everyone’s a winner!</h4>
            <p>Sign up for battle and you’re guaranteed a prize!</p>
          </div>
        </div>
      </div>
      <div className={styles.finishedRules}>
        <div className={styles.faqCompetition}>
          <FAQ type={'rules'} />
        </div>
        <div className={styles.spaceShipMeteorFinish}></div>
      </div>
      <div className={styles.runningLine}>
        {/* <Table type={'table-version'} tableHead={th} mobile={mobile} tableData={tableData} /> */}
      </div>
    </>
  );
};

export default Rules;
