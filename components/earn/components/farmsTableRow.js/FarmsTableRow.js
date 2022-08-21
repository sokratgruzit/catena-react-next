import React, { useState } from 'react';
import { MathSignSvg, OpenSvg, VectorSvg } from '../../../svg';

import { useWindowDimension } from '../../../../hooks/useWindowDimension';

import styles from './FarmsTableRow.module.css';

const FarmsTableRow = ({ item }) => {
  const [expandRow, setExpandRow] = useState(false);
  const [width, height] = useWindowDimension();
  return (
    <section
      className={styles.farms__tableWrapper}
      onClick={() => setExpandRow(prevState => !prevState)}
    >
      <div className={styles.farms__table}>
        <div className={styles.farms__tableItem}>
          {item.token}
          <p className={styles.farms__coloredItem}>{item.title}</p>
        </div>
        <div className={`${styles.farms__tableItems} ${styles.item}`}>
          {item.earned}
        </div>
        <div className={`${styles.farms__tableItems} ${styles.item1}`}>
          {item.apr} <MathSignSvg />
        </div>
        <div className={`${styles.farms__tableItems} ${styles.item2}`}>
          {item.liquidity}
        </div>
        <div className={`${styles.farms__tableItems} ${styles.item3}`}>
          {item.multiplier}
        </div>
        <VectorSvg
          className={`${styles.farms__tableArrow} ${
            expandRow && styles.farms__tableArrowActive
          }`}
        />
      </div>
      <div
        className={`${styles.farms__subTable} ${
          expandRow && styles.expandTableRow
        }`}
      >
        <div className={styles.flex}>
          <p className={styles.width}>Start Farming</p>
          <p>
            <span className={styles.farms__coloredItem}>CORE</span> Earned
          </p>
        </div>
        <div className={styles.farms__subTableInner}>
          <button className='btnBlue'>Connect Wallet</button>
          <p>0</p>
          <button className={`btnBlue ${styles.disabledBtn}`}>Harvest</button>
        </div>
        <div className={styles.farms__tableEnd}>
          <svg
            className={styles.coreSvg}
            width='52'
            height='21'
            viewBox='0 0 52 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='0.535156'
              y='1.46875'
              width='50.16'
              height='19'
              rx='9.5'
              fill='#00050F'
              stroke='#7464D7'
            />
            <path
              d='M25.2313 14.1188C26.7613 14.1188 27.4613 13.5987 27.6213 13.5087V12.3387C27.0413 12.8287 26.1213 13.0887 25.2313 13.0887C23.5813 13.0887 22.6113 11.9987 22.6113 10.5687C22.6113 9.14875 23.5813 8.03875 25.2313 8.03875C26.4213 8.03875 27.3713 8.66875 27.4313 8.76875V7.61875C27.0813 7.37875 26.3513 7.01875 25.2313 7.01875C23.0013 6.98875 21.4513 8.62875 21.4813 10.5687C21.4513 12.5087 23.0013 14.1488 25.2313 14.1188ZM31.5023 14.1188C33.0723 14.1188 34.3323 12.8987 34.3323 11.3887C34.3323 9.87875 33.0723 8.64875 31.5023 8.64875C29.9323 8.64875 28.6723 9.87875 28.6723 11.3887C28.6723 12.8987 29.9323 14.1188 31.5023 14.1188ZM31.5023 13.1487C30.4823 13.1487 29.7123 12.3587 29.7123 11.3887C29.7123 10.4087 30.4823 9.61875 31.5023 9.61875C32.5223 9.61875 33.2923 10.4087 33.2923 11.3887C33.2923 12.3587 32.5223 13.1487 31.5023 13.1487ZM35.7371 13.9688H36.8171V11.3787C36.8371 10.2787 37.6271 9.52875 38.9371 9.52875V8.63875C37.8371 8.63875 37.0571 9.15875 36.8171 9.78875V8.78875H35.7371V13.9688ZM42.4987 14.1188C44.0087 14.1188 44.5687 13.5887 44.5687 13.5887V12.6187C44.5587 12.6187 43.7887 13.1587 42.5187 13.1587C41.3487 13.1587 40.7887 12.4387 40.6687 11.6387H44.7987V11.1387C44.7987 9.88875 43.9287 8.64875 42.4287 8.64875C40.8287 8.64875 39.6387 9.82875 39.6387 11.3787C39.6387 12.8687 40.6787 14.1188 42.4987 14.1188ZM40.7187 10.7987C40.7787 10.3987 41.1587 9.52875 42.2887 9.52875C43.4187 9.52875 43.6787 10.3987 43.7187 10.7987H40.7187Z'
              fill='#7464D7'
            />
            <path
              d='M15.8102 10.3389L15.1304 9.54911C15.0004 9.39914 14.8954 9.11921 14.8954 8.91926V8.06947C14.8954 7.53961 14.4606 7.10472 13.9307 7.10472H13.0809C12.8859 7.10472 12.601 6.99974 12.4511 6.86977L11.6613 6.18994C11.3163 5.89502 10.7515 5.89502 10.4016 6.18994L9.61676 6.87477C9.4668 6.99974 9.18187 7.10472 8.98692 7.10472H8.12213C7.59227 7.10472 7.15738 7.53961 7.15738 8.06947V8.92426C7.15738 9.11921 7.0524 9.39914 6.92743 9.54911L6.2526 10.3439C5.96267 10.6888 5.96267 11.2487 6.2526 11.5936L6.92743 12.3884C7.0524 12.5384 7.15738 12.8183 7.15738 13.0132V13.868C7.15738 14.3979 7.59227 14.8328 8.12213 14.8328H8.98692C9.18187 14.8328 9.4668 14.9378 9.61676 15.0677L10.4066 15.7476C10.7515 16.0425 11.3163 16.0425 11.6662 15.7476L12.4561 15.0677C12.606 14.9378 12.8859 14.8328 13.0859 14.8328H13.9357C14.4655 14.8328 14.9004 14.3979 14.9004 13.868V13.0182C14.9004 12.8233 15.0054 12.5384 15.1354 12.3884L15.8152 11.5986C16.1051 11.2537 16.1051 10.6838 15.8102 10.3389ZM13.1109 10.024L10.6965 12.4384C10.6262 12.5086 10.5309 12.548 10.4316 12.548C10.3322 12.548 10.2369 12.5086 10.1666 12.4384L8.95693 11.2287C8.8872 11.1581 8.8481 11.0629 8.8481 10.9638C8.8481 10.8646 8.8872 10.7694 8.95693 10.6988C9.10189 10.5539 9.34183 10.5539 9.48679 10.6988L10.4316 11.6436L12.581 9.49412C12.726 9.34915 12.9659 9.34915 13.1109 9.49412C13.2559 9.63908 13.2559 9.87902 13.1109 10.024Z'
              fill='#7464D7'
            />
          </svg>
          <div className={styles.farms__tableEndInner}>
            <div className={styles.pointer}>
              <p className={` ${styles.margin0} font_12 `}>Get CORE-BNB LP</p>
              <OpenSvg className={styles.openSvg} />
            </div>
            <div className={styles.pointer}>
              <p className='font_12'>View Contract</p>
              <OpenSvg className={styles.openSvg} />
            </div>
            <div className={styles.pointer}>
              <p className='font_12'>See Pair Info</p>
              <OpenSvg className={styles.openSvg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmsTableRow;
