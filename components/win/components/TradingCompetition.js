import Image from 'next/image';
import React from 'react';

import WinRoutes from './WinRoutes';
import ArrowBtn from '../../UI/button/ArrowBtn';

import styles from './TradingCompetition.module.css';

let tabsData = [
  {
    id: 0,
    label: 'Trading Compatition',
  },
  {
    id: 1,
    label: 'Prediction',
  },
  {
    id: 2,
    label: 'Lottery',
  },
];

const TradingCompetition = () => {
  return (
    <>
      <div className={`${styles.competitionMargin} container`}>
        <div className={styles.mainContent}>
          <div className={styles.leftSideContent}>
            <p className={styles.day}>MAY 14-20, 2022</p>
            <h1 className='ttl font-90'>CATENA Fan Token Trading Competition</h1>
            <h4 className={styles.prizes}>$300,000 in Prizes!</h4>
            <p>Compete with other teams for the highest trading volume!</p>
            <div className={styles.voutingBox}>
              <div className={styles.competition}>
                <div className={styles.box}>
                  <div className={styles.boxhour}>
                    <img src='/images/win/timer.png' />
                  </div>
                  <h5 className={styles.ttl}>Finished!</h5>
                </div>
                <div className={styles.voutingCompetition}>
                  <div className={styles.voutingIcone}>
                    <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <g opacity='0.7'>
                        <path
                          d='M8.49805 16.4229C4.08502 16.4229 0.498047 12.8359 0.498047 8.42285C0.498047 4.00983 4.08502 0.422852 8.49805 0.422852C12.9111 0.422852 16.498 4.00983 16.498 8.42285C16.498 12.8359 12.9111 16.4229 8.49805 16.4229ZM8.49805 1.53913C4.7027 1.53913 1.61433 4.6275 1.61433 8.42285C1.61433 12.2182 4.7027 15.3066 8.49805 15.3066C12.2934 15.3066 15.3818 12.2182 15.3818 8.42285C15.3818 4.6275 12.2934 1.53913 8.49805 1.53913Z'
                          fill='#389A5F'
                        />
                        <path
                          d='M7.44177 11.0869C7.29379 11.0868 7.15193 11.0279 7.04735 10.9232L4.94131 8.81712C4.83751 8.71208 4.7793 8.57037 4.7793 8.4227C4.7793 8.27503 4.83751 8.13331 4.94131 8.02828C5.15712 7.81246 5.51433 7.81246 5.73014 8.02828L7.44177 9.73991L11.2669 5.91479C11.4827 5.69898 11.8399 5.69898 12.0557 5.91479C12.2715 6.1306 12.2715 6.48781 12.0557 6.70363L7.83619 10.9232C7.73162 11.0279 7.58975 11.0868 7.44177 11.0869V11.0869Z'
                          fill='#389A5F'
                        />
                      </g>
                    </svg>
                    <p className={styles.Ttl}>Entry</p>
                  </div>
                  <span>
                    <svg width='61' height='2' viewBox='0 0 61 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <line
                        opacity='0.5'
                        x1='0.498047'
                        y1='0.922852'
                        x2='60.498'
                        y2='0.922852'
                        stroke='url(#paint0_linear_1528_4102)'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear_1528_4102'
                          x1='60.498'
                          y1='1.42283'
                          x2='0.498047'
                          y2='1.42283'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#389A5F;' stopOpacity='0' />
                          <stop offset='0.489583' stopColor='#389A5F' />
                          <stop offset='1' stopColor='#389A5F' stopOpacity='0' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className={styles.voutingIcone}>
                    <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <g opacity='0.7'>
                        <path
                          d='M8.49805 16.4229C4.08502 16.4229 0.498047 12.8359 0.498047 8.42285C0.498047 4.00983 4.08502 0.422852 8.49805 0.422852C12.9111 0.422852 16.498 4.00983 16.498 8.42285C16.498 12.8359 12.9111 16.4229 8.49805 16.4229ZM8.49805 1.53913C4.7027 1.53913 1.61433 4.6275 1.61433 8.42285C1.61433 12.2182 4.7027 15.3066 8.49805 15.3066C12.2934 15.3066 15.3818 12.2182 15.3818 8.42285C15.3818 4.6275 12.2934 1.53913 8.49805 1.53913Z'
                          fill='#389A5F'
                        />
                        <path
                          d='M7.44177 11.0869C7.29379 11.0868 7.15193 11.0279 7.04735 10.9232L4.94131 8.81712C4.83751 8.71208 4.7793 8.57037 4.7793 8.4227C4.7793 8.27503 4.83751 8.13331 4.94131 8.02828C5.15712 7.81246 5.51433 7.81246 5.73014 8.02828L7.44177 9.73991L11.2669 5.91479C11.4827 5.69898 11.8399 5.69898 12.0557 5.91479C12.2715 6.1306 12.2715 6.48781 12.0557 6.70363L7.83619 10.9232C7.73162 11.0279 7.58975 11.0868 7.44177 11.0869V11.0869Z'
                          fill='#389A5F'
                        />
                      </g>
                    </svg>
                    <p className={styles.Ttl}>Live</p>
                  </div>
                  <span>
                    <svg width='61' height='2' viewBox='0 0 61 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <line
                        opacity='0.5'
                        x1='0.498047'
                        y1='0.922852'
                        x2='60.498'
                        y2='0.922852'
                        stroke='url(#paint0_linear_1528_4102)'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear_1528_4102'
                          x1='60.498'
                          y1='1.42283'
                          x2='0.498047'
                          y2='1.42283'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#389A5F' stopOpacity='0' />
                          <stop offset='0.489583' stopColor='#389A5F' />
                          <stop offset='1' stopColor='#389A5F' stopOpacity='0' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className={styles.voutingIcone}>
                    <img className={styles.groupImg} src='/images/win/Group.png' />
                    <p className={styles.oreTtl}>End</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.allCompetition}>
              <div className='font-40'>See all finished competition</div>
              <div className={styles.boxArrow}>
                <img className={styles.arrow} src='/images/win/arrow.png' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradingCompetition;
