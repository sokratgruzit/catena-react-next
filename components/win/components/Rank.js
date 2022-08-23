import { useState } from 'react';
import Image from 'next/image';

import CornerDecor from '../../UI/cornerDecor/CornerDecor';
import TabFilter from '../../UI/filters/TabFilter';
import filterStyles from '../../UI/filters/TabFilter.module.css';
import CompetitionTable from './competitionTable/CompetitionTable';
import { VectorSvg } from '../../svg/index';

import styles from './Rank.module.css';

let tabsData = [
  {
    id: 0,
    label: 'total',
  },
  {
    id: 1,
    label: 'storm',
  },
  {
    id: 2,
    label: 'flippers',
  },
  {
    id: 3,
    label: 'cakers',
  },
];

const Rank = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('total');
  const [details, setDetails] = useState(false);

  const DetailsHendler = () => {
    setDetails(!details);
  };
  const changeTabHendler = status => {
    setActiveMenuItem(status);
  };
  return (
    <>
      <div className={styles.rankBkPosition}>
        <div className={styles.Rank__background}>
          <Image
            layout='fill'
            src={'/images/win/background/backgroundRank.png'}
            alt='HomeScreen'
            objectFit={'contain'}
          />
        </div>
        <div className={styles.rank}>
          <div className={styles.rankCup}>
            <div>
              <svg
                className={styles.svgImg}
                width='27'
                height='31'
                viewBox='0 0 27 31'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_605_19420)'>
                  <path
                    d='M6.16315 13.7429C5.41194 13.7968 4.65775 13.6911 3.9515 13.4328C3.24526 13.1745 2.60341 12.7696 2.06929 12.2456C0.325844 10.4673 0.870867 7.96777 0.870867 7.96777C2.39794 8.06053 3.83432 8.71468 4.89659 9.80114C5.41291 10.3096 5.79757 10.9332 6.01802 11.6193C6.23848 12.3054 6.28826 13.0338 6.16315 13.7429Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M12.5336 9.77014C12.4091 10.5034 12.1265 11.2017 11.705 11.8179C11.2835 12.4342 10.7329 12.954 10.0903 13.3422C9.57048 12.8386 9.18144 12.2187 8.9561 11.5352C8.73077 10.8517 8.67579 10.1246 8.79584 9.4157C9.01713 7.91956 9.80093 6.56038 10.9914 5.6084C10.9914 5.6084 12.899 7.32565 12.5336 9.77014Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M15.1967 15.6282C15.1693 16.371 14.9807 17.0994 14.6436 17.7641C14.3065 18.4289 13.8288 19.0145 13.2427 19.4814C12.6621 19.0485 12.1958 18.484 11.8832 17.8356C11.5706 17.1873 11.4208 16.4741 11.4466 15.7566C11.4699 14.2488 12.0668 12.8047 13.1188 11.7109C13.1188 11.7109 15.237 13.1562 15.1967 15.6282Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M19.5196 18.996C19.5654 19.7401 19.4483 20.4851 19.1763 21.1805C18.9043 21.876 18.4838 22.5055 17.9434 23.0264C17.3233 22.65 16.8045 22.1315 16.4309 21.515C16.0573 20.8984 15.84 20.202 15.7974 19.4849C15.6798 17.9809 16.1384 16.4881 17.0825 15.3018C17.0825 15.3018 19.3246 16.5332 19.5196 18.996Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M24.1804 21.7611C24.4362 22.4567 24.5384 23.1982 24.4802 23.936C24.422 24.6738 24.2047 25.3907 23.8429 26.0389C23.1379 25.8559 22.4881 25.5075 21.9489 25.0234C21.4097 24.5392 20.9971 23.9337 20.7462 23.2583C20.1922 21.852 20.1922 20.292 20.7462 18.8857C20.7462 18.8857 23.2762 19.4571 24.1804 21.7611Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M4.43868 4.84782C3.98656 2.40333 5.8384 0.649414 5.8384 0.649414C7.05782 1.5577 7.8868 2.88498 8.16093 4.36809C8.3063 5.07306 8.2772 5.80223 8.07612 6.49374C7.87504 7.18525 7.50791 7.81871 7.00586 8.34038C6.34933 7.97372 5.78033 7.47212 5.33741 6.86954C4.89449 6.26696 4.58799 5.57748 4.43868 4.84782Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M5.94642 15.1266C6.59096 15.4615 7.14438 15.9444 7.55993 16.5348C7.97549 17.1251 8.24098 17.8054 8.33398 18.5183C7.63203 18.7883 6.87954 18.9064 6.12734 18.8648C5.37514 18.8231 4.64075 18.6227 3.97381 18.2769C1.78134 17.0883 1.55838 14.5552 1.55838 14.5552C3.042 14.1972 4.60771 14.4011 5.94642 15.1266Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M9.04977 19.9329C9.7549 20.1167 10.4046 20.4658 10.9438 20.9504C11.4829 21.435 11.8955 22.0409 12.1465 22.7166C11.523 23.1336 10.8162 23.4138 10.0736 23.5382C9.33103 23.6626 8.57005 23.6284 7.84206 23.4377C5.43281 22.7594 4.64625 20.3393 4.64625 20.3393C6.01081 19.6649 7.58211 19.5198 9.04977 19.9329Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M12.589 23.9729C13.3163 23.9386 14.0412 24.0777 14.7025 24.3782C15.3639 24.6786 15.9422 25.1318 16.3887 25.6993C15.922 26.2838 15.3334 26.7625 14.6629 27.103C13.9924 27.4436 13.2556 27.6381 12.5023 27.6732C10.0033 27.7435 8.51064 25.6718 8.51064 25.6718C9.60656 24.6216 11.0619 24.0153 12.589 23.9729Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M18.2043 26.9154C18.9221 26.7953 19.6586 26.8478 20.3513 27.0686C21.0441 27.2894 21.6726 27.6718 22.1836 28.1835C21.7915 28.818 21.266 29.3621 20.6426 29.779C20.0191 30.196 19.3123 30.4761 18.5697 30.6005C16.0924 30.9671 14.3582 29.088 14.3582 29.088C15.3203 27.9153 16.6923 27.1402 18.2043 26.9154Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M6.61917 9.52832L7.85786 9.56804C7.84237 10.0692 7.69683 21.8822 26.8066 27.4159L26.466 28.5801C6.37453 22.7652 6.61298 9.65666 6.61917 9.52832Z'
                    fill='#627EEA'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_605_19420'>
                    <rect
                      width='26'
                      height='30'
                      fill='white'
                      transform='matrix(-1 0 0 1 26.791 0.649414)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.cup}>
              <Image
                layout='fill'
                objectFit='contain'
                src={'/images/win/cup.png'}
                alt='cup'
              />
            </div>
            <div>
              <svg
                width='27'
                height='31'
                viewBox='0 0 27 31'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_605_19432)'>
                  <path
                    d='M21.4189 13.7429C22.1701 13.7968 22.9243 13.6911 23.6305 13.4328C24.3368 13.1745 24.9786 12.7696 25.5127 12.2456C27.2562 10.4673 26.7112 7.96777 26.7112 7.96777C25.1841 8.06053 23.7477 8.71468 22.6854 9.80114C22.1691 10.3096 21.7845 10.9332 21.564 11.6193C21.3435 12.3054 21.2938 13.0338 21.4189 13.7429Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M15.0485 9.77014C15.1729 10.5034 15.4555 11.2017 15.877 11.8179C16.2985 12.4342 16.8492 12.954 17.4918 13.3422C18.0115 12.8386 18.4006 12.2187 18.6259 11.5352C18.8513 10.8517 18.9062 10.1246 18.7862 9.4157C18.5649 7.91956 17.7811 6.56038 16.5906 5.6084C16.5906 5.6084 14.6831 7.32565 15.0485 9.77014Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M12.3853 15.6282C12.4127 16.371 12.6013 17.0994 12.9384 17.7641C13.2755 18.4289 13.7532 19.0145 14.3394 19.4814C14.9199 19.0485 15.3862 18.484 15.6988 17.8356C16.0115 17.1873 16.1612 16.4741 16.1355 15.7566C16.1121 14.2488 15.5152 12.8047 14.4632 11.7109C14.4632 11.7109 12.3451 13.1562 12.3853 15.6282Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M8.06239 18.996C8.01666 19.7401 8.13377 20.4851 8.40574 21.1805C8.67772 21.876 9.0982 22.5055 9.63861 23.0264C10.2587 22.65 10.7776 22.1315 11.1512 21.515C11.5248 20.8984 11.7421 20.202 11.7846 19.4849C11.9023 17.9809 11.4437 16.4881 10.4995 15.3018C10.4995 15.3018 8.25748 16.5332 8.06239 18.996Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M3.40161 21.7611C3.14582 22.4567 3.04361 23.1982 3.10182 23.936C3.16003 24.6738 3.37733 25.3907 3.73915 26.0389C4.44417 25.8559 5.09393 25.5075 5.63311 25.0234C6.17228 24.5392 6.58491 23.9337 6.83586 23.2583C7.38981 21.852 7.38981 20.292 6.83586 18.8857C6.83586 18.8857 4.30585 19.4571 3.40161 21.7611Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M23.1434 4.84782C23.5955 2.40333 21.7436 0.649414 21.7436 0.649414C20.5242 1.5577 19.6952 2.88498 19.4211 4.36809C19.2757 5.07306 19.3048 5.80223 19.5059 6.49374C19.707 7.18525 20.0741 7.81871 20.5762 8.34038C21.2327 7.97372 21.8017 7.47212 22.2446 6.86954C22.6875 6.26696 22.994 5.57748 23.1434 4.84782Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M21.6356 15.1266C20.9911 15.4615 20.4377 15.9444 20.0221 16.5348C19.6065 17.1251 19.3411 17.8054 19.248 18.5183C19.95 18.7883 20.7025 18.9064 21.4547 18.8648C22.2069 18.8231 22.9413 18.6227 23.6082 18.2769C25.8007 17.0883 26.0237 14.5552 26.0237 14.5552C24.54 14.1972 22.9743 14.4011 21.6356 15.1266Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M18.5323 19.9329C17.8271 20.1167 17.1774 20.4658 16.6383 20.9504C16.0991 21.435 15.6865 22.0409 15.4355 22.7166C16.059 23.1336 16.7659 23.4138 17.5084 23.5382C18.251 23.6626 19.012 23.6284 19.74 23.4377C22.1492 22.7594 22.9358 20.3393 22.9358 20.3393C21.5712 19.6649 19.9999 19.5198 18.5323 19.9329Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M14.993 23.9729C14.2658 23.9386 13.5408 24.0777 12.8795 24.3782C12.2182 24.6786 11.6398 25.1318 11.1934 25.6993C11.6601 26.2838 12.2486 26.7625 12.9191 27.103C13.5896 27.4436 14.3264 27.6381 15.0797 27.6732C17.5788 27.7435 19.0714 25.6718 19.0714 25.6718C17.9755 24.6216 16.5201 24.0153 14.993 23.9729Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M9.37772 26.9154C8.65997 26.7953 7.92345 26.8478 7.23069 27.0686C6.53793 27.2894 5.90939 27.6718 5.39844 28.1835C5.79053 28.818 6.31604 29.3621 6.93948 29.779C7.56292 30.196 8.26977 30.4761 9.0123 30.6005C11.4897 30.9671 13.2238 29.088 13.2238 29.088C12.2617 27.9153 10.8897 27.1402 9.37772 26.9154Z'
                    fill='#627EEA'
                  />
                  <path
                    d='M20.9629 9.52832L19.7242 9.56804C19.7397 10.0692 19.8852 21.8822 0.775391 27.4159L1.11603 28.5801C21.2075 22.7652 20.9691 9.65666 20.9629 9.52832Z'
                    fill='#627EEA'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_605_19432'>
                    <rect
                      width='26'
                      height='30'
                      fill='white'
                      transform='translate(0.791016 0.649414)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className={styles.rankTitle}>
            <p>Team Ranks</p>
          </div>
        </div>
        <div className={styles.rankPosition}>
          <Image
            layout='fill'
            src={'/images/win/rankPosition.png'}
            objectFit={'contain'}
            alt='rankPosition'
          />
        </div>
        <div className={styles.rankVolume}>
          <div>
            <p>$33,350,574</p>
            <p className={styles.volume}>volume</p>
          </div>
          <div>
            <p>$79,350,574</p>
            <p className={styles.volume}>volume</p>
          </div>
          <div>
            <p>$9,350,574</p>
            <p className={styles.volume}>volume</p>
          </div>
        </div>
      </div>
      <div className={styles.rankBorder}>
        <CornerDecor />
        <div className={styles.rankTrades}>
          <h5>Top Traders</h5>
          <p>Since start of the competition</p>
        </div>
        <div>
          <TabFilter
            onClick={changeTabHendler}
            activeMenu={activeMenuItem}
            data={tabsData}
            css={{
              wrap: filterStyles.Rank__filterWrap,
              filter: filterStyles.Activity__filter,
              active: filterStyles.Rank__filterActive,
              item: filterStyles.Rank__filter__item,
            }}
          />
        </div>
        <div
          className={`${styles.contentActve} ${
            details === false ? styles.content : ''
          }`}
        >
          <CompetitionTable activeMenuItem={activeMenuItem} />
        </div>
        <div className={styles.buttonShowMore}>
          <button
            onClick={() => {
              DetailsHendler();
            }}
          >
            {details === false ? 'Show More' : 'Hidden'}
          </button>
          <VectorSvg
            className={`${styles.vectorSvg} ${details ? styles.rotate : ''}`}
          />
        </div>
      </div>
    </>
  );
};

export default Rank;