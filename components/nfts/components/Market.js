import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Market.module.css';
import Marquee from '../../UI/marquee/Marquee';

export default function Market() {
  const [btnActive, setActiveBtn] = useState(false);
  const [matchedAddress, setMatchedAddress] = useState(null);
  const nftStatsData = useSelector(state => state.connect.nftStatisticsData);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if (nftStatsData) {
      setAddresses(Object.keys(nftStatsData));
    }
  }, [nftStatsData]);

  const searchInputHandler = event => {
    addresses.forEach(item => {
      if (item === event.target.value) {
        setActiveBtn(true);
        setMatchedAddress(item);
      }
      if (item.length > event.target.value.length) {
        setActiveBtn(false);
      }
    });
  };

  return (
    <div>
      {' '}
      <div className={`${styles.container} container`}>
        <div>
          <p className={`${styles.title} font_51`}>
            <span className={`font_51`}>NFT</span> Market
          </p>
          <p className={`${styles.titleTeaser} font_30`}>
            Buy And Sell NFT’s on <span className={`font_30`}> CATENA </span>
          </p>
          <Link href={`/nfts/activity`}>
            <div className={styles.Activity__btn}>
              See Activities
              <svg width='14' height='11' viewBox='0 0 14 11' fill='FF7152' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13.6602 5.94727C13.6602 5.71707 13.5687 5.49631 13.4059 5.33354L9.27388 1.20148C8.93493 0.862529 8.38538 0.862529 8.04643 1.20148C7.70748 1.54043 7.70748 2.08998 8.04643 2.42893L11.5648 5.94727L8.04643 9.4656C7.70748 9.80455 7.70748 10.3541 8.04643 10.6931C8.38538 11.032 8.93493 11.032 9.27388 10.6931L13.4059 6.56099C13.5687 6.39822 13.6602 6.17746 13.6602 5.94727Z'
                  fill='#FF7152'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13.5469 5.94652C13.5469 5.46717 13.1583 5.07858 12.679 5.07858L1.22317 5.07858C0.743857 5.07858 0.3553 5.46717 0.3553 5.94652C0.3553 6.42586 0.743857 6.81445 1.22317 6.81445L12.679 6.81445C13.1583 6.81445 13.5469 6.42586 13.5469 5.94652Z'
                  fill='#FF7152'
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className={styles.imagesWrapper}>
          <div className={styles.planet1}>
            <Image layout='fill' src='/images/nft/planets/moon.svg' alt='' />
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.astronautFigureBg}>
              <Image layout='fill' src='/images/nft/asstronaut/astronautBg.png' alt='' />
            </div>
            <div className={styles.astronautFigure}>
              <Image layout='fill' src='/images/nft/asstronaut/astronaut.png' alt='' />
            </div>
          </div>
          <div className={styles.planet2}>
            <Image layout='fill' src='/images/nft/planets/planet.png' alt='' />
          </div>
          <div className={styles.planet3}>
            <svg width='133' height='109' viewBox='0 0 133 109' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_1529_22972)'>
                <path
                  d='M132.32 84.92L79.24 0L0 108.78L132.32 84.92ZM130.22 83.45L74.33 58.74L79.57 2.41L130.22 83.45ZM78.54 2.66L73.32 58.77L3.16 106.07L78.54 2.66ZM3.33 107.16L73.85 59.62L129.85 84.36L3.33 107.16Z'
                  fill='#162029'
                />
              </g>
              <defs>
                <clipPath id='clip0_1529_22972'>
                  <rect width='132.32' height='108.78' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.planet4}>
            <svg width='93' height='93' viewBox='0 0 93 93' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_1529_22974)'>
                <path
                  d='M1 3.2055e-05C0.734784 3.2055e-05 0.48043 0.105389 0.292893 0.292925C0.105357 0.480462 0 0.734816 0 1.00003L0 61.6C0.00110462 61.8624 0.105256 62.1138 0.29 62.3L30.59 92.6C30.6826 92.6945 30.7931 92.7697 30.9149 92.8212C31.0368 92.8727 31.1677 92.8995 31.3 92.9H91.9C92.0307 92.8985 92.1598 92.8713 92.28 92.82C92.5243 92.7186 92.7185 92.5244 92.82 92.28C92.8712 92.1598 92.8984 92.0307 92.9 91.9V31.3C92.8995 31.1677 92.8727 31.0368 92.8212 30.915C92.7697 30.7931 92.6945 30.6826 92.6 30.59L62.31 0.290032C62.2188 0.203567 62.1141 0.132627 62 0.0800321C61.8736 0.026165 61.7374 -0.00106817 61.6 3.2055e-05H1ZM60.6 2.00003V60.6H2V2.00003H60.6ZM90.9 45L62.6 16.67V9.78003L90.9 38.08V45ZM90.9 52.59L62.6 24.26V17.37L90.9 45.67V52.59ZM90.9 60.19L62.6 31.86V25L90.9 53.3V60.19ZM90.9 67.78L62.6 39.46V32.57L90.9 60.87V67.78ZM90.9 75.38L62.6 47.05V40.16L90.9 68.46V75.38ZM90.9 82.98L62.6 54.65V47.76L90.9 76.06V82.98ZM90.9 89.51L62.6 61.18V55.35L90.9 83.65V89.51ZM45.55 90.9L17.25 62.6H24.16L52.46 90.9H45.55ZM53.17 90.9L24.87 62.6H31.78L60.08 90.9H53.17ZM60.79 90.9L32.49 62.6H39.4L67.69 90.9H60.79ZM68.4 90.9L40.1 62.6H47L75.3 90.9H68.4ZM76.02 90.9L47.72 62.6H54.63L82.93 90.9H76.02ZM16.55 62.6L44.85 90.9H37.94L9.64 62.6H16.55ZM83.63 90.9L55.33 62.6H61.18L89.48 90.9H83.63ZM3.41 62.6H8.93L37.23 90.9H31.71L3.41 62.6ZM90.9 31.71V37.37L62.6 9.07003V3.41003L90.9 31.71Z'
                  fill='#162029'
                />
              </g>
              <defs>
                <clipPath id='clip0_1529_22974'>
                  <rect width='92.9' height='92.9' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.marqueeContainer}>
        <Marquee direction='forward' speed={1} label='overview' />
      </div>
    </div>
  );
}
