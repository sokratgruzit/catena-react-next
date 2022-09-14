import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from '../../UI/button/Button';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';
import AuctionTable from '../components/AuctionTable/AuctionTable';
import FAQ from '../../faq/FAQ';

import styles from './CommunityAuctions.module.css';

let whitelistedData = [
  {
    id: 0,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: (
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.2424 0.990844C12.4713 1.2154 12.4749 1.58302 12.2503 1.81193L7.80663 6.34179C7.58207 6.57071 7.21446 6.57424 6.98555 6.34968C6.75663 6.12512 6.7531 5.75751 6.97766 5.52859L11.4213 0.998729C11.6459 0.769815 12.0135 0.766285 12.2424 0.990844Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.08887 0.963435C9.08887 0.642766 9.34882 0.382812 9.66949 0.382812H12.2707C12.5913 0.382812 12.8513 0.642766 12.8513 0.963435V3.61506C12.8513 3.93573 12.5913 4.19569 12.2707 4.19569C11.95 4.19569 11.69 3.93573 11.69 3.61506V1.54406H9.66949C9.34882 1.54406 9.08887 1.2841 9.08887 0.963435Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.89733 1.45452C2.66892 0.667968 3.81015 0.382812 5.22461 0.382812H6.30844C6.6291 0.382812 6.88906 0.642766 6.88906 0.963435C6.88906 1.2841 6.6291 1.54406 6.30844 1.54406H5.22461C3.92949 1.54406 3.17402 1.81132 2.7263 2.26772C2.27587 2.72689 2.01183 3.50428 2.01183 4.83039V8.14493C2.01183 9.47104 2.27587 10.2484 2.7263 10.7076C3.17402 11.164 3.92949 11.4313 5.22461 11.4313H8.47609C9.77121 11.4313 10.5267 11.164 10.9744 10.7076C11.4248 10.2484 11.6889 9.47104 11.6889 8.14493V7.04009C11.6889 6.71942 11.9488 6.45946 12.2695 6.45946C12.5902 6.45946 12.8501 6.71942 12.8501 7.04009V8.14493C12.8501 9.58093 12.5722 10.737 11.8034 11.5208C11.0318 12.3074 9.89055 12.5925 8.47609 12.5925H5.22461C3.81015 12.5925 2.66892 12.3074 1.89733 11.5208C1.12846 10.737 0.850586 9.58093 0.850586 8.14493V4.83039C0.850586 3.39439 1.12846 2.2383 1.89733 1.45452Z'
          fill='#0500FF'
        />
      </svg>
    ),
  },
  {
    id: 1,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: (
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.2424 0.990844C12.4713 1.2154 12.4749 1.58302 12.2503 1.81193L7.80663 6.34179C7.58207 6.57071 7.21446 6.57424 6.98555 6.34968C6.75663 6.12512 6.7531 5.75751 6.97766 5.52859L11.4213 0.998729C11.6459 0.769815 12.0135 0.766285 12.2424 0.990844Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.08887 0.963435C9.08887 0.642766 9.34882 0.382812 9.66949 0.382812H12.2707C12.5913 0.382812 12.8513 0.642766 12.8513 0.963435V3.61506C12.8513 3.93573 12.5913 4.19569 12.2707 4.19569C11.95 4.19569 11.69 3.93573 11.69 3.61506V1.54406H9.66949C9.34882 1.54406 9.08887 1.2841 9.08887 0.963435Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.89733 1.45452C2.66892 0.667968 3.81015 0.382812 5.22461 0.382812H6.30844C6.6291 0.382812 6.88906 0.642766 6.88906 0.963435C6.88906 1.2841 6.6291 1.54406 6.30844 1.54406H5.22461C3.92949 1.54406 3.17402 1.81132 2.7263 2.26772C2.27587 2.72689 2.01183 3.50428 2.01183 4.83039V8.14493C2.01183 9.47104 2.27587 10.2484 2.7263 10.7076C3.17402 11.164 3.92949 11.4313 5.22461 11.4313H8.47609C9.77121 11.4313 10.5267 11.164 10.9744 10.7076C11.4248 10.2484 11.6889 9.47104 11.6889 8.14493V7.04009C11.6889 6.71942 11.9488 6.45946 12.2695 6.45946C12.5902 6.45946 12.8501 6.71942 12.8501 7.04009V8.14493C12.8501 9.58093 12.5722 10.737 11.8034 11.5208C11.0318 12.3074 9.89055 12.5925 8.47609 12.5925H5.22461C3.81015 12.5925 2.66892 12.3074 1.89733 11.5208C1.12846 10.737 0.850586 9.58093 0.850586 8.14493V4.83039C0.850586 3.39439 1.12846 2.2383 1.89733 1.45452Z'
          fill='#0500FF'
        />
      </svg>
    ),
  },
  {
    id: 2,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: (
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.2424 0.990844C12.4713 1.2154 12.4749 1.58302 12.2503 1.81193L7.80663 6.34179C7.58207 6.57071 7.21446 6.57424 6.98555 6.34968C6.75663 6.12512 6.7531 5.75751 6.97766 5.52859L11.4213 0.998729C11.6459 0.769815 12.0135 0.766285 12.2424 0.990844Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.08887 0.963435C9.08887 0.642766 9.34882 0.382812 9.66949 0.382812H12.2707C12.5913 0.382812 12.8513 0.642766 12.8513 0.963435V3.61506C12.8513 3.93573 12.5913 4.19569 12.2707 4.19569C11.95 4.19569 11.69 3.93573 11.69 3.61506V1.54406H9.66949C9.34882 1.54406 9.08887 1.2841 9.08887 0.963435Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.89733 1.45452C2.66892 0.667968 3.81015 0.382812 5.22461 0.382812H6.30844C6.6291 0.382812 6.88906 0.642766 6.88906 0.963435C6.88906 1.2841 6.6291 1.54406 6.30844 1.54406H5.22461C3.92949 1.54406 3.17402 1.81132 2.7263 2.26772C2.27587 2.72689 2.01183 3.50428 2.01183 4.83039V8.14493C2.01183 9.47104 2.27587 10.2484 2.7263 10.7076C3.17402 11.164 3.92949 11.4313 5.22461 11.4313H8.47609C9.77121 11.4313 10.5267 11.164 10.9744 10.7076C11.4248 10.2484 11.6889 9.47104 11.6889 8.14493V7.04009C11.6889 6.71942 11.9488 6.45946 12.2695 6.45946C12.5902 6.45946 12.8501 6.71942 12.8501 7.04009V8.14493C12.8501 9.58093 12.5722 10.737 11.8034 11.5208C11.0318 12.3074 9.89055 12.5925 8.47609 12.5925H5.22461C3.81015 12.5925 2.66892 12.3074 1.89733 11.5208C1.12846 10.737 0.850586 9.58093 0.850586 8.14493V4.83039C0.850586 3.39439 1.12846 2.2383 1.89733 1.45452Z'
          fill='#0500FF'
        />
      </svg>
    ),
  },
  {
    id: 3,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: (
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.2424 0.990844C12.4713 1.2154 12.4749 1.58302 12.2503 1.81193L7.80663 6.34179C7.58207 6.57071 7.21446 6.57424 6.98555 6.34968C6.75663 6.12512 6.7531 5.75751 6.97766 5.52859L11.4213 0.998729C11.6459 0.769815 12.0135 0.766285 12.2424 0.990844Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.08887 0.963435C9.08887 0.642766 9.34882 0.382812 9.66949 0.382812H12.2707C12.5913 0.382812 12.8513 0.642766 12.8513 0.963435V3.61506C12.8513 3.93573 12.5913 4.19569 12.2707 4.19569C11.95 4.19569 11.69 3.93573 11.69 3.61506V1.54406H9.66949C9.34882 1.54406 9.08887 1.2841 9.08887 0.963435Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.89733 1.45452C2.66892 0.667968 3.81015 0.382812 5.22461 0.382812H6.30844C6.6291 0.382812 6.88906 0.642766 6.88906 0.963435C6.88906 1.2841 6.6291 1.54406 6.30844 1.54406H5.22461C3.92949 1.54406 3.17402 1.81132 2.7263 2.26772C2.27587 2.72689 2.01183 3.50428 2.01183 4.83039V8.14493C2.01183 9.47104 2.27587 10.2484 2.7263 10.7076C3.17402 11.164 3.92949 11.4313 5.22461 11.4313H8.47609C9.77121 11.4313 10.5267 11.164 10.9744 10.7076C11.4248 10.2484 11.6889 9.47104 11.6889 8.14493V7.04009C11.6889 6.71942 11.9488 6.45946 12.2695 6.45946C12.5902 6.45946 12.8501 6.71942 12.8501 7.04009V8.14493C12.8501 9.58093 12.5722 10.737 11.8034 11.5208C11.0318 12.3074 9.89055 12.5925 8.47609 12.5925H5.22461C3.81015 12.5925 2.66892 12.3074 1.89733 11.5208C1.12846 10.737 0.850586 9.58093 0.850586 8.14493V4.83039C0.850586 3.39439 1.12846 2.2383 1.89733 1.45452Z'
          fill='#0500FF'
        />
      </svg>
    ),
  },
  {
    id: 4,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: (
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.2424 0.990844C12.4713 1.2154 12.4749 1.58302 12.2503 1.81193L7.80663 6.34179C7.58207 6.57071 7.21446 6.57424 6.98555 6.34968C6.75663 6.12512 6.7531 5.75751 6.97766 5.52859L11.4213 0.998729C11.6459 0.769815 12.0135 0.766285 12.2424 0.990844Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.08887 0.963435C9.08887 0.642766 9.34882 0.382812 9.66949 0.382812H12.2707C12.5913 0.382812 12.8513 0.642766 12.8513 0.963435V3.61506C12.8513 3.93573 12.5913 4.19569 12.2707 4.19569C11.95 4.19569 11.69 3.93573 11.69 3.61506V1.54406H9.66949C9.34882 1.54406 9.08887 1.2841 9.08887 0.963435Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.89733 1.45452C2.66892 0.667968 3.81015 0.382812 5.22461 0.382812H6.30844C6.6291 0.382812 6.88906 0.642766 6.88906 0.963435C6.88906 1.2841 6.6291 1.54406 6.30844 1.54406H5.22461C3.92949 1.54406 3.17402 1.81132 2.7263 2.26772C2.27587 2.72689 2.01183 3.50428 2.01183 4.83039V8.14493C2.01183 9.47104 2.27587 10.2484 2.7263 10.7076C3.17402 11.164 3.92949 11.4313 5.22461 11.4313H8.47609C9.77121 11.4313 10.5267 11.164 10.9744 10.7076C11.4248 10.2484 11.6889 9.47104 11.6889 8.14493V7.04009C11.6889 6.71942 11.9488 6.45946 12.2695 6.45946C12.5902 6.45946 12.8501 6.71942 12.8501 7.04009V8.14493C12.8501 9.58093 12.5722 10.737 11.8034 11.5208C11.0318 12.3074 9.89055 12.5925 8.47609 12.5925H5.22461C3.81015 12.5925 2.66892 12.3074 1.89733 11.5208C1.12846 10.737 0.850586 9.58093 0.850586 8.14493V4.83039C0.850586 3.39439 1.12846 2.2383 1.89733 1.45452Z'
          fill='#0500FF'
        />
      </svg>
    ),
  },
  {
    id: 5,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: (
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.2424 0.990844C12.4713 1.2154 12.4749 1.58302 12.2503 1.81193L7.80663 6.34179C7.58207 6.57071 7.21446 6.57424 6.98555 6.34968C6.75663 6.12512 6.7531 5.75751 6.97766 5.52859L11.4213 0.998729C11.6459 0.769815 12.0135 0.766285 12.2424 0.990844Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.08887 0.963435C9.08887 0.642766 9.34882 0.382812 9.66949 0.382812H12.2707C12.5913 0.382812 12.8513 0.642766 12.8513 0.963435V3.61506C12.8513 3.93573 12.5913 4.19569 12.2707 4.19569C11.95 4.19569 11.69 3.93573 11.69 3.61506V1.54406H9.66949C9.34882 1.54406 9.08887 1.2841 9.08887 0.963435Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.89733 1.45452C2.66892 0.667968 3.81015 0.382812 5.22461 0.382812H6.30844C6.6291 0.382812 6.88906 0.642766 6.88906 0.963435C6.88906 1.2841 6.6291 1.54406 6.30844 1.54406H5.22461C3.92949 1.54406 3.17402 1.81132 2.7263 2.26772C2.27587 2.72689 2.01183 3.50428 2.01183 4.83039V8.14493C2.01183 9.47104 2.27587 10.2484 2.7263 10.7076C3.17402 11.164 3.92949 11.4313 5.22461 11.4313H8.47609C9.77121 11.4313 10.5267 11.164 10.9744 10.7076C11.4248 10.2484 11.6889 9.47104 11.6889 8.14493V7.04009C11.6889 6.71942 11.9488 6.45946 12.2695 6.45946C12.5902 6.45946 12.8501 6.71942 12.8501 7.04009V8.14493C12.8501 9.58093 12.5722 10.737 11.8034 11.5208C11.0318 12.3074 9.89055 12.5925 8.47609 12.5925H5.22461C3.81015 12.5925 2.66892 12.3074 1.89733 11.5208C1.12846 10.737 0.850586 9.58093 0.850586 8.14493V4.83039C0.850586 3.39439 1.12846 2.2383 1.89733 1.45452Z'
          fill='#0500FF'
        />
      </svg>
    ),
  },
  {
    id: 6,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: (
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.2424 0.990844C12.4713 1.2154 12.4749 1.58302 12.2503 1.81193L7.80663 6.34179C7.58207 6.57071 7.21446 6.57424 6.98555 6.34968C6.75663 6.12512 6.7531 5.75751 6.97766 5.52859L11.4213 0.998729C11.6459 0.769815 12.0135 0.766285 12.2424 0.990844Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.08887 0.963435C9.08887 0.642766 9.34882 0.382812 9.66949 0.382812H12.2707C12.5913 0.382812 12.8513 0.642766 12.8513 0.963435V3.61506C12.8513 3.93573 12.5913 4.19569 12.2707 4.19569C11.95 4.19569 11.69 3.93573 11.69 3.61506V1.54406H9.66949C9.34882 1.54406 9.08887 1.2841 9.08887 0.963435Z'
          fill='#0500FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.89733 1.45452C2.66892 0.667968 3.81015 0.382812 5.22461 0.382812H6.30844C6.6291 0.382812 6.88906 0.642766 6.88906 0.963435C6.88906 1.2841 6.6291 1.54406 6.30844 1.54406H5.22461C3.92949 1.54406 3.17402 1.81132 2.7263 2.26772C2.27587 2.72689 2.01183 3.50428 2.01183 4.83039V8.14493C2.01183 9.47104 2.27587 10.2484 2.7263 10.7076C3.17402 11.164 3.92949 11.4313 5.22461 11.4313H8.47609C9.77121 11.4313 10.5267 11.164 10.9744 10.7076C11.4248 10.2484 11.6889 9.47104 11.6889 8.14493V7.04009C11.6889 6.71942 11.9488 6.45946 12.2695 6.45946C12.5902 6.45946 12.8501 6.71942 12.8501 7.04009V8.14493C12.8501 9.58093 12.5722 10.737 11.8034 11.5208C11.0318 12.3074 9.89055 12.5925 8.47609 12.5925H5.22461C3.81015 12.5925 2.66892 12.3074 1.89733 11.5208C1.12846 10.737 0.850586 9.58093 0.850586 8.14493V4.83039C0.850586 3.39439 1.12846 2.2383 1.89733 1.45452Z'
          fill='#0500FF'
        />
      </svg>
    ),
  },
];

let faqData = [
  {
    question: 'Step 1: Submit application',
    answer:
      'Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the Application Form',
    id: 0,
  },
  {
    question: 'Step 1: Submit application',
    answer:
      'Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the Application Form',
    id: 1,
  },
  {
    question: 'Step 1: Submit application',
    answer:
      'Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the Application Form',
    id: 2,
  },
  {
    question: 'Step 1: Submit application',
    answer:
      'Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the Application Form',
    id: 3,
  },
];

let auctionTableData;

if (typeof window !== 'undefined') {
  // Client-side-only code
  if (window.innerWidth < 767) {
    auctionTableData = (
      <div>
        {auctionData.map(item => {
          return (
            <div key={item.id} className={styles.auction__tableMobile}>
              <div className={styles.auction__tableHeaderMobile}>
                <p>POSITION</p>
                <p>FARM</p>
                <p>CORE BID</p>
              </div>
              <div className={styles.table__innerMobile}>
                <p>{item.position}</p>
                <div className={styles.auction__farmMobile}>
                  <p>{item.farm}</p>
                  <p className={` font_10 ${styles.subText}`}>{item.subFarm}</p>
                </div>
                <div className={styles.table__innerMobile}>
                  <p>{item.coreBid}</p>
                  <p className={` font_10 ${styles.subText}`}>
                    {item.subCoreBid}
                  </p>
                </div>
              </div>
              <div>
                <svg
                  width='21'
                  height='21'
                  viewBox='0 0 21 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.01725 9.32129C4.10059 9.32129 3.35059 10.0713 3.35059 10.988C3.35059 11.9046 4.10059 12.6546 5.01725 12.6546C5.93392 12.6546 6.68392 11.9046 6.68392 10.988C6.68392 10.0713 5.93392 9.32129 5.01725 9.32129Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M16.6833 9.32129C15.7666 9.32129 15.0166 10.0713 15.0166 10.988C15.0166 11.9046 15.7666 12.6546 16.6833 12.6546C17.5999 12.6546 18.3499 11.9046 18.3499 10.988C18.3499 10.0713 17.5999 9.32129 16.6833 9.32129Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M10.8512 9.32129C9.93457 9.32129 9.18457 10.0713 9.18457 10.988C9.18457 11.9046 9.93457 12.6546 10.8512 12.6546C11.7679 12.6546 12.5179 11.9046 12.5179 10.988C12.5179 10.0713 11.7679 9.32129 10.8512 9.32129Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const CommunityAuctions = props => {
  const router = useRouter();

  return (
    <div className={`container ${styles.auction__container}`}>
      <picture>
        <img
          className={styles.galaxy}
          src='/images/earn/galaxy.png'
          alt='galaxy'
        ></img>
      </picture>
      <div className={styles.auction__inner}>
        <div className={styles.auction__head}>
          <div className={styles.astro}>
            <Image src='/images/earn/astro.png' alt='astro' />
          </div>
          <div className={styles.orbit}>
            <Image src='/images/earn/orbit.png' alt='orbit' />
          </div>
          <div className={styles.yellowStar}>
            <Image src='/images/earn/yellowStar.png' alt='yellowStar' />
          </div>
          <div className={styles.ufo}>
            <Image src='/images/earn/ufo.png' alt='ufo' />
          </div>
          <div className={styles.egg}>
            <Image src='/images/earn/egg.png' alt='egg' />
          </div>
          <div
            onClick={() => router.push('/earn/farms')}
            className={styles.communityAuctions}
          >
            <svg
              className={styles.svgHoverBlue}
              width='21'
              height='13'
              viewBox='0 0 21 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 11.5L1 6.5L6 1.5'
                stroke='#FF7152'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M19.2637 6.5L1.1396 6.5'
                stroke='#FF7152'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p className={`${styles.blueHover}`}>Farms</p>
          </div>
          <div className={styles.auction__title}>
            <h1 className='font_51'>Community Farm Auction</h1>
            <p className='font_20'>
              Each week, qualifying projects can bid CAKE for the right to host
              a 7-day Farm on Core MultiChain
            </p>
            <p className='font_20'>
              This page is for projects to bid for farms.{' '}
            </p>
            <p className='font_20'>
              If you’re not a whitelisted project, you won’t be able to
              participate, but you can still view what’s going on!
            </p>
            <Button
              title={'Apply For a Farm/Pool'}
              type={'blue'}
              customStyles={{
                width: '300px',
                fontSize: '16px',
                height: '32px',
                marginRight: '25px',
                lineHeight: '18px',
                marginTop: '80px',
                height: '56px',
              }}
            />
            {/* <button className={`${styles.auction__btn} btnBlue`}>
              Apply For a Farm/Pool
            </button> */}
          </div>
        </div>
      </div>
      <div className={styles.auction__notice}>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.11266 11.79H10.1927V11C10.8627 10.64 11.3227 9.94 11.3227 9.14C11.3227 7.97 10.3327 7.01 9.11266 7.01V8.04C9.74266 8.04 10.2127 8.53 10.2127 9.14C10.2127 9.75 9.74266 10.24 9.11266 10.24V11.79ZM9.62266 14.07C10.0627 14.07 10.4227 13.73 10.4227 13.27C10.4227 12.83 10.0627 12.47 9.62266 12.47C9.16266 12.47 8.82266 12.83 8.82266 13.27C8.82266 13.73 9.16266 14.07 9.62266 14.07Z'
            fill='white'
          />
          <rect
            x='0.5'
            y='0.5'
            width='19'
            height='19'
            rx='9.5'
            stroke='white'
          />
        </svg>
        <div className={styles.auction__noticeInner}>
          <h1>Notice</h1>
          <p>
            This page is a functional page, for projects to bid for farms. If
            you’re not a whitelisted project, you won’t be able to participate,
            but you can still view the auction bids in real time! Connect a
            whitelisted project wallet to participate in Auctions.
          </p>
        </div>
      </div>
      <div className={styles.auction__tableContainer}>
        <div className={styles.auction__whitelisTableCont}>
          <div className={styles.auction__whitelistHead}>
            <svg
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
            <p>All Whitelisted Project Wallets</p>
          </div>
          <span className={styles.auction__borderBottom}></span>
          <div className={styles.auction__whitelistSearch}>
            <input type='search' placeholder='Search address or token'></input>
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.57143 11.6932C3.41799 11.6932 0.850586 9.24808 0.850586 6.24481C0.850586 3.24153 3.41799 0.796387 6.57143 0.796387C9.72486 0.796387 12.2923 3.24153 12.2923 6.24481C12.2923 9.24808 9.72486 11.6932 6.57143 11.6932ZM6.57143 1.59372C3.87565 1.59372 1.68778 3.68272 1.68778 6.24481C1.68778 8.80689 3.87565 10.8959 6.57143 10.8959C9.2672 10.8959 11.4551 8.80689 11.4551 6.24481C11.4551 3.68272 9.2672 1.59372 6.57143 1.59372Z'
                fill='white'
              />
              <path
                d='M12.431 12.2258C12.325 12.2258 12.2189 12.1886 12.1352 12.1089L11.019 11.0458C10.9411 10.9707 10.8975 10.8695 10.8975 10.764C10.8975 10.6586 10.9411 10.5573 11.019 10.4823C11.1808 10.3282 11.4487 10.3282 11.6106 10.4823L12.7268 11.5454C12.8887 11.6996 12.8887 11.9547 12.7268 12.1089C12.6431 12.1886 12.5371 12.2258 12.431 12.2258Z'
                fill='white'
              />
            </svg>
          </div>
          {whitelistedData.map(item => {
            return (
              <div key={item.id} className={styles.auction__whitelistTable}>
                <div className={styles.auction__whitelistTableitem0}>
                  <p>{item.coin}</p>
                  <p className='font_10'>{item.subCoin}</p>
                </div>
                <div className={styles.auction__whitelistTableitem1}>
                  <p>{item.link}</p>
                  {item.subLink}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.auction__leftPanel}>
          <div>
            <p className={` font_20 ${styles.auction__nextDate}`}>
              Next Auction
            </p>
            <span className={styles.auction__borderBottom}></span>
            <p className={styles.auction__schedule}>AUCTION SCHEDULE</p>
          </div>
          <div className={styles.auction__leftPanelInner}>
            <div>
              <p>start</p>
              <p>To be announced</p>
            </div>
            <div>
              <p>end</p>
              <p>To be announced</p>
            </div>
          </div>
          <div className={styles.auction__panelQuestion}>
            <p>Why cant I bid for a farm?</p>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.11266 9.79H8.19266V9C8.86266 8.64 9.32266 7.94 9.32266 7.14C9.32266 5.97 8.33266 5.01 7.11266 5.01V6.04C7.74266 6.04 8.21266 6.53 8.21266 7.14C8.21266 7.75 7.74266 8.24 7.11266 8.24V9.79ZM7.62266 12.07C8.06266 12.07 8.42266 11.73 8.42266 11.27C8.42266 10.83 8.06266 10.47 7.62266 10.47C7.16266 10.47 6.82266 10.83 6.82266 11.27C6.82266 11.73 7.16266 12.07 7.62266 12.07Z'
                fill='#B2B4B7'
              />
              <rect
                x='0.5'
                y='0.5'
                width='15'
                height='15'
                rx='7.5'
                stroke='#B2B4B7'
              />
            </svg>
          </div>
          <div className={styles.auction__expendDetails}>
            <span className={styles.auction__borderBottom}></span>
            <div>
              <p>Multiplier per farm</p>
              <p>1x each</p>
            </div>
            <div>
              <p>Total whitelisted bidders</p>
              <p>19</p>
            </div>
            <span className={styles.auction__borderBottom}></span>
          </div>
          <div className={styles.auction__details}>
            <p>Details</p>
            <p>Hide</p>
            <svg
              width='8'
              height='6'
              viewBox='0 0 8 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0.234315 1.12543C0.546734 0.832538 1.05327 0.832538 1.36569 1.12543L4 3.5951L6.63432 1.12543C6.94673 0.832538 7.45327 0.832538 7.76569 1.12543C8.0781 1.41832 8.0781 1.8932 7.76569 2.18609L5.13134 4.65579C4.50781 5.24035 3.49219 5.24035 2.86866 4.65579L0.234315 2.18609C-0.0781049 1.8932 -0.0781049 1.41832 0.234315 1.12543Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
        {/* {content} */}
        <AuctionTable />
      </div>
      <div className={styles.auction__burnedContainer}>
        <div className={styles.auction__burnedInner}>
          <div>
            <h2 className='font_51'>
              699,580 CORE <span className='font_51'>BURNED</span>
            </h2>
            <p className='font_30'>through community auctions so far!</p>
            <p className='font_20'>~$2,227,764</p>
          </div>
          <div>
            <picture>
              <img
                className={styles.logo__stars}
                src='/images/earn/logoStars.png'
                alt='logoStars'
              ></img>
            </picture>
          </div>
        </div>
      </div>
      <FAQ type={'auctionFAQ'} />
    </div>
  );
};

export default CommunityAuctions;
