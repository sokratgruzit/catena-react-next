import styles from './DashboardAssetsSlider.module.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import SlideNextButton from '../SlideIcons/SlideIcons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DashboardAssetsSlider = () => {
  const swiper = useSwiper();

  return (
    <div className={`container ${styles.marginTop}`}>
      <div className={styles.dashboardMid__wrapper}>
        <div className={styles.dashboardMid__sliderContainer}>
          <div className={styles.sliderHeader}>
            <div className={`${styles.assetsBtn}`}>
              <svg
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.20508 16.9719C3.79205 16.9719 0.205078 13.3849 0.205078 8.97192C0.205078 4.5589 3.79205 0.971924 8.20508 0.971924C12.6181 0.971924 16.2051 4.5589 16.2051 8.97192C16.2051 13.3849 12.6181 16.9719 8.20508 16.9719ZM8.20508 2.0882C4.40973 2.0882 1.32136 5.17658 1.32136 8.97192C1.32136 12.7673 4.40973 15.8556 8.20508 15.8556C12.0004 15.8556 15.0888 12.7673 15.0888 8.97192C15.0888 5.17658 12.0004 2.0882 8.20508 2.0882Z'
                  fill='white'
                />
                <path
                  d='M11.1815 9.52985H5.22806C4.92295 9.52985 4.66992 9.27683 4.66992 8.97171C4.66992 8.6666 4.92295 8.41357 5.22806 8.41357H11.1815C11.4867 8.41357 11.7397 8.6666 11.7397 8.97171C11.7397 9.27683 11.4867 9.52985 11.1815 9.52985Z'
                  fill='white'
                />
                <path
                  d='M8.20462 12.5068C7.89951 12.5068 7.64648 12.2538 7.64648 11.9486V5.99515C7.64648 5.69003 7.89951 5.43701 8.20462 5.43701C8.50974 5.43701 8.76276 5.69003 8.76276 5.99515V11.9486C8.76276 12.2538 8.50974 12.5068 8.20462 12.5068Z'
                  fill='white'
                />
              </svg>
              <p className='font_13'>Add Assets</p>
            </div>
            <div className={styles.dashboardMid__checkbox}>
              <div className='radio-btn'>
                <input type='checkbox' />
                <div className='radio-btn__inner'>
                  <div className='radio-btn__icon'></div>
                </div>
                Staked only
              </div>
            </div>
            <input
              type='search'
              placeholder='Search Farms'
              className={styles.sliderHeader__search}
            ></input>
          </div>
          <Swiper
            slidesPerView={'auto'}
            keyboard={{
              enabled: true,
            }}
            spaceBetween={20}
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
          >
            <SwiperSlide>
              {' '}
              <div className={styles.itemContainer}>
                <div className={styles.dashboardMid__slider}>
                  <div className={styles.dashboardMid__slide}>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.marginZero}`}
                    >
                      <svg
                        className={styles.dashboardMid__sliderLogo}
                        width='19'
                        height='21'
                        viewBox='0 0 19 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.8803 6.02916C3.69141 4.95801 4.75404 4.10229 5.97459 3.53735C7.19515 2.97241 8.53619 2.71558 9.87963 2.78947C11.2231 2.86336 12.5277 3.26571 13.6786 3.96109C14.8296 4.65648 15.7915 5.62355 16.4797 6.77717L17.0741 6.44765L18.0649 5.8677C17.176 4.37565 15.9137 3.13983 14.4017 2.28153C12.8898 1.42322 11.1801 0.971924 9.44057 0.971924C7.70103 0.971924 5.99138 1.42322 4.47941 2.28153C2.96743 3.13983 1.70509 4.37565 0.81628 5.8677L0.324219 6.63877L1.1102 7.10339L4.15173 8.90585C3.65424 10.1543 3.61961 11.5389 4.05407 12.8105C4.48853 14.0822 5.36355 15.1573 6.5217 15.8426C7.67984 16.5278 9.04506 16.7782 10.3717 16.5486C11.6983 16.3189 12.8993 15.6244 13.7585 14.59L15.9744 15.9081C15.1631 16.9802 14.0998 17.8365 12.8783 18.4016C11.6569 18.9667 10.3148 19.2231 8.97055 19.1482C7.62629 19.0733 6.32116 18.6694 5.17034 17.9721C4.01952 17.2749 3.05838 16.3058 2.37172 15.1502L0.803071 16.0762C1.69188 17.5682 2.95422 18.804 4.4662 19.6623C5.97817 20.5206 7.68782 20.9719 9.42736 20.9719C11.1669 20.9719 12.8765 20.5206 14.3885 19.6623C15.9005 18.804 17.1628 17.5682 18.0516 16.0762L18.5206 15.2919L17.7346 14.8273L15.238 13.3477L13.0848 12.1088C12.8227 12.9413 12.2829 13.6593 11.5553 14.1435C10.8276 14.6276 9.95578 14.8487 9.08474 14.77C8.21369 14.6914 7.39585 14.3177 6.76712 13.711C6.13839 13.1044 5.73663 12.3013 5.62859 11.4353C5.52056 10.5693 5.71276 9.69253 6.17326 8.95061C6.63375 8.20869 7.33482 7.64633 8.15995 7.35699C8.98509 7.06765 9.8846 7.06875 10.709 7.36011C11.5334 7.65146 12.2331 8.21553 12.6918 8.95857L14.2737 8.0491C13.809 7.28004 13.167 6.63279 12.4011 6.16117C11.6351 5.68956 10.7675 5.4072 9.87016 5.33758C8.97286 5.26797 8.07187 5.41311 7.24211 5.76093C6.41234 6.10875 5.67779 6.6492 5.09953 7.33735L2.8803 6.02916Z'
                          fill='#FF7152'
                        />
                      </svg>
                      <p>CMCX (CMCX)</p>
                    </div>
                    <div className={styles.dashboardMid__flex}>
                      <span className='font_13'>Available:&nbsp;</span>{' '}
                      <p className='font_13'>345.400214</p>
                      <span className='font_13'>Stake:&nbsp;</span>{' '}
                      <p className='font_13'>30</p>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.dashboardMid__flexLast} font_13`}
                    >
                      <span className='font_13'>Value:&nbsp;</span> 345.400214
                      &nbsp;
                      <span className={`${styles.orangeColor} font_13`}>
                        CMCX&nbsp;
                      </span>{' '}
                      <span className='font_13'>(~ $20.1231)</span>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.sliderButtons}`}
                    >
                      <button
                        className={`btn font_13 btnBlueBordered font_13 ${styles.marginZero}`}
                      >
                        Send
                      </button>
                      <button className={`btn font_13 btnBlueBordered font_13`}>
                        Receive
                      </button>
                      <button
                        className={`btn font_13 btnBlueBordered ${styles.marginZero}`}
                      >
                        JustSwap
                      </button>
                      <svg
                        className={styles.miniMenu}
                        width='4'
                        height='18'
                        viewBox='0 0 4 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='1.70508'
                          cy='1.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='8.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='15.9719'
                          r='1.5'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.sliderModal}>
                    <p>Multi-signature</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div className={styles.itemContainer}>
                <div className={styles.dashboardMid__slider}>
                  <div className={styles.dashboardMid__slide}>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.marginZero}`}
                    >
                      <svg
                        className={styles.dashboardMid__sliderLogo}
                        width='19'
                        height='21'
                        viewBox='0 0 19 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.8803 6.02916C3.69141 4.95801 4.75404 4.10229 5.97459 3.53735C7.19515 2.97241 8.53619 2.71558 9.87963 2.78947C11.2231 2.86336 12.5277 3.26571 13.6786 3.96109C14.8296 4.65648 15.7915 5.62355 16.4797 6.77717L17.0741 6.44765L18.0649 5.8677C17.176 4.37565 15.9137 3.13983 14.4017 2.28153C12.8898 1.42322 11.1801 0.971924 9.44057 0.971924C7.70103 0.971924 5.99138 1.42322 4.47941 2.28153C2.96743 3.13983 1.70509 4.37565 0.81628 5.8677L0.324219 6.63877L1.1102 7.10339L4.15173 8.90585C3.65424 10.1543 3.61961 11.5389 4.05407 12.8105C4.48853 14.0822 5.36355 15.1573 6.5217 15.8426C7.67984 16.5278 9.04506 16.7782 10.3717 16.5486C11.6983 16.3189 12.8993 15.6244 13.7585 14.59L15.9744 15.9081C15.1631 16.9802 14.0998 17.8365 12.8783 18.4016C11.6569 18.9667 10.3148 19.2231 8.97055 19.1482C7.62629 19.0733 6.32116 18.6694 5.17034 17.9721C4.01952 17.2749 3.05838 16.3058 2.37172 15.1502L0.803071 16.0762C1.69188 17.5682 2.95422 18.804 4.4662 19.6623C5.97817 20.5206 7.68782 20.9719 9.42736 20.9719C11.1669 20.9719 12.8765 20.5206 14.3885 19.6623C15.9005 18.804 17.1628 17.5682 18.0516 16.0762L18.5206 15.2919L17.7346 14.8273L15.238 13.3477L13.0848 12.1088C12.8227 12.9413 12.2829 13.6593 11.5553 14.1435C10.8276 14.6276 9.95578 14.8487 9.08474 14.77C8.21369 14.6914 7.39585 14.3177 6.76712 13.711C6.13839 13.1044 5.73663 12.3013 5.62859 11.4353C5.52056 10.5693 5.71276 9.69253 6.17326 8.95061C6.63375 8.20869 7.33482 7.64633 8.15995 7.35699C8.98509 7.06765 9.8846 7.06875 10.709 7.36011C11.5334 7.65146 12.2331 8.21553 12.6918 8.95857L14.2737 8.0491C13.809 7.28004 13.167 6.63279 12.4011 6.16117C11.6351 5.68956 10.7675 5.4072 9.87016 5.33758C8.97286 5.26797 8.07187 5.41311 7.24211 5.76093C6.41234 6.10875 5.67779 6.6492 5.09953 7.33735L2.8803 6.02916Z'
                          fill='#FF7152'
                        />
                      </svg>
                      <p>CMCX (CMCX)</p>
                    </div>
                    <div className={styles.dashboardMid__flex}>
                      <span className='font_13'>Available:&nbsp;</span>{' '}
                      <p className='font_13'>345.400214</p>
                      <span className='font_13'>Stake:&nbsp;</span>{' '}
                      <p className='font_13'>30</p>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.dashboardMid__flexLast} font_13`}
                    >
                      <span className='font_13'>Value:&nbsp;</span> 345.400214
                      &nbsp;
                      <span className={`${styles.orangeColor} font_13`}>
                        CMCX&nbsp;
                      </span>{' '}
                      <span className='font_13'>(~ $20.1231)</span>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.sliderButtons}`}
                    >
                      <button
                        className={`btn font_13 btnBlueBordered font_13 ${styles.marginZero}`}
                      >
                        Send
                      </button>
                      <button className={`btn font_13 btnBlueBordered font_13`}>
                        Receive
                      </button>
                      <button
                        className={`btn font_13 btnBlueBordered ${styles.marginZero}`}
                      >
                        JustSwap
                      </button>
                      <svg
                        className={styles.miniMenu}
                        width='4'
                        height='18'
                        viewBox='0 0 4 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='1.70508'
                          cy='1.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='8.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='15.9719'
                          r='1.5'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.sliderModal}>
                    <p>Multi-signature</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div className={styles.itemContainer}>
                <div className={styles.dashboardMid__slider}>
                  <div className={styles.dashboardMid__slide}>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.marginZero}`}
                    >
                      <svg
                        className={styles.dashboardMid__sliderLogo}
                        width='19'
                        height='21'
                        viewBox='0 0 19 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.8803 6.02916C3.69141 4.95801 4.75404 4.10229 5.97459 3.53735C7.19515 2.97241 8.53619 2.71558 9.87963 2.78947C11.2231 2.86336 12.5277 3.26571 13.6786 3.96109C14.8296 4.65648 15.7915 5.62355 16.4797 6.77717L17.0741 6.44765L18.0649 5.8677C17.176 4.37565 15.9137 3.13983 14.4017 2.28153C12.8898 1.42322 11.1801 0.971924 9.44057 0.971924C7.70103 0.971924 5.99138 1.42322 4.47941 2.28153C2.96743 3.13983 1.70509 4.37565 0.81628 5.8677L0.324219 6.63877L1.1102 7.10339L4.15173 8.90585C3.65424 10.1543 3.61961 11.5389 4.05407 12.8105C4.48853 14.0822 5.36355 15.1573 6.5217 15.8426C7.67984 16.5278 9.04506 16.7782 10.3717 16.5486C11.6983 16.3189 12.8993 15.6244 13.7585 14.59L15.9744 15.9081C15.1631 16.9802 14.0998 17.8365 12.8783 18.4016C11.6569 18.9667 10.3148 19.2231 8.97055 19.1482C7.62629 19.0733 6.32116 18.6694 5.17034 17.9721C4.01952 17.2749 3.05838 16.3058 2.37172 15.1502L0.803071 16.0762C1.69188 17.5682 2.95422 18.804 4.4662 19.6623C5.97817 20.5206 7.68782 20.9719 9.42736 20.9719C11.1669 20.9719 12.8765 20.5206 14.3885 19.6623C15.9005 18.804 17.1628 17.5682 18.0516 16.0762L18.5206 15.2919L17.7346 14.8273L15.238 13.3477L13.0848 12.1088C12.8227 12.9413 12.2829 13.6593 11.5553 14.1435C10.8276 14.6276 9.95578 14.8487 9.08474 14.77C8.21369 14.6914 7.39585 14.3177 6.76712 13.711C6.13839 13.1044 5.73663 12.3013 5.62859 11.4353C5.52056 10.5693 5.71276 9.69253 6.17326 8.95061C6.63375 8.20869 7.33482 7.64633 8.15995 7.35699C8.98509 7.06765 9.8846 7.06875 10.709 7.36011C11.5334 7.65146 12.2331 8.21553 12.6918 8.95857L14.2737 8.0491C13.809 7.28004 13.167 6.63279 12.4011 6.16117C11.6351 5.68956 10.7675 5.4072 9.87016 5.33758C8.97286 5.26797 8.07187 5.41311 7.24211 5.76093C6.41234 6.10875 5.67779 6.6492 5.09953 7.33735L2.8803 6.02916Z'
                          fill='#FF7152'
                        />
                      </svg>
                      <p>CMCX (CMCX)</p>
                    </div>
                    <div className={styles.dashboardMid__flex}>
                      <span className='font_13'>Available:&nbsp;</span>{' '}
                      <p className='font_13'>345.400214</p>
                      <span className='font_13'>Stake:&nbsp;</span>{' '}
                      <p className='font_13'>30</p>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.dashboardMid__flexLast} font_13`}
                    >
                      <span className='font_13'>Value:&nbsp;</span> 345.400214
                      &nbsp;
                      <span className={`${styles.orangeColor} font_13`}>
                        CMCX&nbsp;
                      </span>{' '}
                      <span className='font_13'>(~ $20.1231)</span>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.sliderButtons}`}
                    >
                      <button
                        className={`btn font_13 btnBlueBordered font_13 ${styles.marginZero}`}
                      >
                        Send
                      </button>
                      <button className={`btn font_13 btnBlueBordered font_13`}>
                        Receive
                      </button>
                      <button
                        className={`btn font_13 btnBlueBordered ${styles.marginZero}`}
                      >
                        JustSwap
                      </button>
                      <svg
                        className={styles.miniMenu}
                        width='4'
                        height='18'
                        viewBox='0 0 4 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='1.70508'
                          cy='1.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='8.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='15.9719'
                          r='1.5'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.sliderModal}>
                    <p>Multi-signature</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div className={styles.itemContainer}>
                <div className={styles.dashboardMid__slider}>
                  <div className={styles.dashboardMid__slide}>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.marginZero}`}
                    >
                      <svg
                        className={styles.dashboardMid__sliderLogo}
                        width='19'
                        height='21'
                        viewBox='0 0 19 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.8803 6.02916C3.69141 4.95801 4.75404 4.10229 5.97459 3.53735C7.19515 2.97241 8.53619 2.71558 9.87963 2.78947C11.2231 2.86336 12.5277 3.26571 13.6786 3.96109C14.8296 4.65648 15.7915 5.62355 16.4797 6.77717L17.0741 6.44765L18.0649 5.8677C17.176 4.37565 15.9137 3.13983 14.4017 2.28153C12.8898 1.42322 11.1801 0.971924 9.44057 0.971924C7.70103 0.971924 5.99138 1.42322 4.47941 2.28153C2.96743 3.13983 1.70509 4.37565 0.81628 5.8677L0.324219 6.63877L1.1102 7.10339L4.15173 8.90585C3.65424 10.1543 3.61961 11.5389 4.05407 12.8105C4.48853 14.0822 5.36355 15.1573 6.5217 15.8426C7.67984 16.5278 9.04506 16.7782 10.3717 16.5486C11.6983 16.3189 12.8993 15.6244 13.7585 14.59L15.9744 15.9081C15.1631 16.9802 14.0998 17.8365 12.8783 18.4016C11.6569 18.9667 10.3148 19.2231 8.97055 19.1482C7.62629 19.0733 6.32116 18.6694 5.17034 17.9721C4.01952 17.2749 3.05838 16.3058 2.37172 15.1502L0.803071 16.0762C1.69188 17.5682 2.95422 18.804 4.4662 19.6623C5.97817 20.5206 7.68782 20.9719 9.42736 20.9719C11.1669 20.9719 12.8765 20.5206 14.3885 19.6623C15.9005 18.804 17.1628 17.5682 18.0516 16.0762L18.5206 15.2919L17.7346 14.8273L15.238 13.3477L13.0848 12.1088C12.8227 12.9413 12.2829 13.6593 11.5553 14.1435C10.8276 14.6276 9.95578 14.8487 9.08474 14.77C8.21369 14.6914 7.39585 14.3177 6.76712 13.711C6.13839 13.1044 5.73663 12.3013 5.62859 11.4353C5.52056 10.5693 5.71276 9.69253 6.17326 8.95061C6.63375 8.20869 7.33482 7.64633 8.15995 7.35699C8.98509 7.06765 9.8846 7.06875 10.709 7.36011C11.5334 7.65146 12.2331 8.21553 12.6918 8.95857L14.2737 8.0491C13.809 7.28004 13.167 6.63279 12.4011 6.16117C11.6351 5.68956 10.7675 5.4072 9.87016 5.33758C8.97286 5.26797 8.07187 5.41311 7.24211 5.76093C6.41234 6.10875 5.67779 6.6492 5.09953 7.33735L2.8803 6.02916Z'
                          fill='#FF7152'
                        />
                      </svg>
                      <p>CMCX (CMCX)</p>
                    </div>
                    <div className={styles.dashboardMid__flex}>
                      <span className='font_13'>Available:&nbsp;</span>{' '}
                      <p className='font_13'>345.400214</p>
                      <span className='font_13'>Stake:&nbsp;</span>{' '}
                      <p className='font_13'>30</p>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.dashboardMid__flexLast} font_13`}
                    >
                      <span className='font_13'>Value:&nbsp;</span> 345.400214
                      &nbsp;
                      <span className={`${styles.orangeColor} font_13`}>
                        CMCX&nbsp;
                      </span>{' '}
                      <span className='font_13'>(~ $20.1231)</span>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.sliderButtons}`}
                    >
                      <button
                        className={`btn font_13 btnBlueBordered font_13 ${styles.marginZero}`}
                      >
                        Send
                      </button>
                      <button className={`btn font_13 btnBlueBordered font_13`}>
                        Receive
                      </button>
                      <button
                        className={`btn font_13 btnBlueBordered ${styles.marginZero}`}
                      >
                        JustSwap
                      </button>
                      <svg
                        className={styles.miniMenu}
                        width='4'
                        height='18'
                        viewBox='0 0 4 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='1.70508'
                          cy='1.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='8.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='15.9719'
                          r='1.5'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.sliderModal}>
                    <p>Multi-signature</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div className={styles.itemContainer}>
                <div className={styles.dashboardMid__slider}>
                  <div className={styles.dashboardMid__slide}>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.marginZero}`}
                    >
                      <svg
                        className={styles.dashboardMid__sliderLogo}
                        width='19'
                        height='21'
                        viewBox='0 0 19 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.8803 6.02916C3.69141 4.95801 4.75404 4.10229 5.97459 3.53735C7.19515 2.97241 8.53619 2.71558 9.87963 2.78947C11.2231 2.86336 12.5277 3.26571 13.6786 3.96109C14.8296 4.65648 15.7915 5.62355 16.4797 6.77717L17.0741 6.44765L18.0649 5.8677C17.176 4.37565 15.9137 3.13983 14.4017 2.28153C12.8898 1.42322 11.1801 0.971924 9.44057 0.971924C7.70103 0.971924 5.99138 1.42322 4.47941 2.28153C2.96743 3.13983 1.70509 4.37565 0.81628 5.8677L0.324219 6.63877L1.1102 7.10339L4.15173 8.90585C3.65424 10.1543 3.61961 11.5389 4.05407 12.8105C4.48853 14.0822 5.36355 15.1573 6.5217 15.8426C7.67984 16.5278 9.04506 16.7782 10.3717 16.5486C11.6983 16.3189 12.8993 15.6244 13.7585 14.59L15.9744 15.9081C15.1631 16.9802 14.0998 17.8365 12.8783 18.4016C11.6569 18.9667 10.3148 19.2231 8.97055 19.1482C7.62629 19.0733 6.32116 18.6694 5.17034 17.9721C4.01952 17.2749 3.05838 16.3058 2.37172 15.1502L0.803071 16.0762C1.69188 17.5682 2.95422 18.804 4.4662 19.6623C5.97817 20.5206 7.68782 20.9719 9.42736 20.9719C11.1669 20.9719 12.8765 20.5206 14.3885 19.6623C15.9005 18.804 17.1628 17.5682 18.0516 16.0762L18.5206 15.2919L17.7346 14.8273L15.238 13.3477L13.0848 12.1088C12.8227 12.9413 12.2829 13.6593 11.5553 14.1435C10.8276 14.6276 9.95578 14.8487 9.08474 14.77C8.21369 14.6914 7.39585 14.3177 6.76712 13.711C6.13839 13.1044 5.73663 12.3013 5.62859 11.4353C5.52056 10.5693 5.71276 9.69253 6.17326 8.95061C6.63375 8.20869 7.33482 7.64633 8.15995 7.35699C8.98509 7.06765 9.8846 7.06875 10.709 7.36011C11.5334 7.65146 12.2331 8.21553 12.6918 8.95857L14.2737 8.0491C13.809 7.28004 13.167 6.63279 12.4011 6.16117C11.6351 5.68956 10.7675 5.4072 9.87016 5.33758C8.97286 5.26797 8.07187 5.41311 7.24211 5.76093C6.41234 6.10875 5.67779 6.6492 5.09953 7.33735L2.8803 6.02916Z'
                          fill='#FF7152'
                        />
                      </svg>
                      <p>CMCX (CMCX)</p>
                    </div>
                    <div className={styles.dashboardMid__flex}>
                      <span className='font_13'>Available:&nbsp;</span>{' '}
                      <p className='font_13'>345.400214</p>
                      <span className='font_13'>Stake:&nbsp;</span>{' '}
                      <p className='font_13'>30</p>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.dashboardMid__flexLast} font_13`}
                    >
                      <span className='font_13'>Value:&nbsp;</span> 345.400214
                      &nbsp;
                      <span className={`${styles.orangeColor} font_13`}>
                        CMCX&nbsp;
                      </span>{' '}
                      <span className='font_13'>(~ $20.1231)</span>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.sliderButtons}`}
                    >
                      <button
                        className={`btn font_13 btnBlueBordered font_13 ${styles.marginZero}`}
                      >
                        Send
                      </button>
                      <button className={`btn font_13 btnBlueBordered font_13`}>
                        Receive
                      </button>
                      <button
                        className={`btn font_13 btnBlueBordered ${styles.marginZero}`}
                      >
                        JustSwap
                      </button>
                      <svg
                        className={styles.miniMenu}
                        width='4'
                        height='18'
                        viewBox='0 0 4 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='1.70508'
                          cy='1.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='8.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='15.9719'
                          r='1.5'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.sliderModal}>
                    <p>Multi-signature</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div className={styles.itemContainer}>
                <div className={styles.dashboardMid__slider}>
                  <div className={styles.dashboardMid__slide}>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.marginZero}`}
                    >
                      <svg
                        className={styles.dashboardMid__sliderLogo}
                        width='19'
                        height='21'
                        viewBox='0 0 19 21'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.8803 6.02916C3.69141 4.95801 4.75404 4.10229 5.97459 3.53735C7.19515 2.97241 8.53619 2.71558 9.87963 2.78947C11.2231 2.86336 12.5277 3.26571 13.6786 3.96109C14.8296 4.65648 15.7915 5.62355 16.4797 6.77717L17.0741 6.44765L18.0649 5.8677C17.176 4.37565 15.9137 3.13983 14.4017 2.28153C12.8898 1.42322 11.1801 0.971924 9.44057 0.971924C7.70103 0.971924 5.99138 1.42322 4.47941 2.28153C2.96743 3.13983 1.70509 4.37565 0.81628 5.8677L0.324219 6.63877L1.1102 7.10339L4.15173 8.90585C3.65424 10.1543 3.61961 11.5389 4.05407 12.8105C4.48853 14.0822 5.36355 15.1573 6.5217 15.8426C7.67984 16.5278 9.04506 16.7782 10.3717 16.5486C11.6983 16.3189 12.8993 15.6244 13.7585 14.59L15.9744 15.9081C15.1631 16.9802 14.0998 17.8365 12.8783 18.4016C11.6569 18.9667 10.3148 19.2231 8.97055 19.1482C7.62629 19.0733 6.32116 18.6694 5.17034 17.9721C4.01952 17.2749 3.05838 16.3058 2.37172 15.1502L0.803071 16.0762C1.69188 17.5682 2.95422 18.804 4.4662 19.6623C5.97817 20.5206 7.68782 20.9719 9.42736 20.9719C11.1669 20.9719 12.8765 20.5206 14.3885 19.6623C15.9005 18.804 17.1628 17.5682 18.0516 16.0762L18.5206 15.2919L17.7346 14.8273L15.238 13.3477L13.0848 12.1088C12.8227 12.9413 12.2829 13.6593 11.5553 14.1435C10.8276 14.6276 9.95578 14.8487 9.08474 14.77C8.21369 14.6914 7.39585 14.3177 6.76712 13.711C6.13839 13.1044 5.73663 12.3013 5.62859 11.4353C5.52056 10.5693 5.71276 9.69253 6.17326 8.95061C6.63375 8.20869 7.33482 7.64633 8.15995 7.35699C8.98509 7.06765 9.8846 7.06875 10.709 7.36011C11.5334 7.65146 12.2331 8.21553 12.6918 8.95857L14.2737 8.0491C13.809 7.28004 13.167 6.63279 12.4011 6.16117C11.6351 5.68956 10.7675 5.4072 9.87016 5.33758C8.97286 5.26797 8.07187 5.41311 7.24211 5.76093C6.41234 6.10875 5.67779 6.6492 5.09953 7.33735L2.8803 6.02916Z'
                          fill='#FF7152'
                        />
                      </svg>
                      <p>CMCX (CMCX)</p>
                    </div>
                    <div className={styles.dashboardMid__flex}>
                      <span className='font_13'>Available:&nbsp;</span>{' '}
                      <p className='font_13'>345.400214</p>
                      <span className='font_13'>Stake:&nbsp;</span>{' '}
                      <p className='font_13'>30</p>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.dashboardMid__flexLast} font_13`}
                    >
                      <span className='font_13'>Value:&nbsp;</span> 345.400214
                      &nbsp;
                      <span className={`${styles.orangeColor} font_13`}>
                        CMCX&nbsp;
                      </span>{' '}
                      <span className='font_13'>(~ $20.1231)</span>
                    </div>
                    <div
                      className={`${styles.dashboardMid__flex} ${styles.sliderButtons}`}
                    >
                      <button
                        className={`btn font_13 btnBlueBordered font_13 ${styles.marginZero}`}
                      >
                        Send
                      </button>
                      <button className={`btn font_13 btnBlueBordered font_13`}>
                        Receive
                      </button>
                      <button
                        className={`btn font_13 btnBlueBordered ${styles.marginZero}`}
                      >
                        JustSwap
                      </button>
                      <svg
                        className={styles.miniMenu}
                        width='4'
                        height='18'
                        viewBox='0 0 4 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='1.70508'
                          cy='1.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='8.97192'
                          r='1.5'
                          fill='white'
                        />
                        <circle
                          cx='1.70508'
                          cy='15.9719'
                          r='1.5'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.sliderModal}>
                    <p>Multi-signature</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SlideNextButton />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DashboardAssetsSlider;
