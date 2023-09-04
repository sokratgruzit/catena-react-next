// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import ChartBlock from './chartBlock/ChartBlock';
import FirstBlock from './firstBlock/FirstBlock';
import SecondBlock from './secondBlock/SecondBlock';
import { OpenSvg, StarSvg, SmlArrowSvg } from '../../../svg';
import { Button } from '@catena-network/catena-ui-module';
import InfoRoutes from '../infoRoutes/InfoRoutes';
import TableTokens from '../tableTokens/TableTokens';
import SearchBar from '../searchBar/SearchBar';

import styles from './Section.module.css';

const Section = ({ data, tableHead, Table__Types, tableInfo }) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`${styles.section} container`}>
      <div className={styles.topSectionWrapper}>
        <div className={styles.goBackWrapper}>
          <div onClick={() => router.push(`/overview/info/pools`)} className={styles.goBackText}>
            <SmlArrowSvg />
            <p>Back</p>
          </div>
        </div>
      </div>
      <div className={styles.titleRow}>
        <div className={styles.titleTopRow}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 70 70" fill="none">
            <path d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z" fill="#FFF3E5" />
            <path d="M69.5 35C69.5 54.0538 54.0538 69.5 35 69.5C15.9462 69.5 0.5 54.0538 0.5 35C0.5 15.9462 15.9462 0.5 35 0.5C54.0538 0.5 69.5 15.9462 69.5 35Z" stroke="#162029" strokeOpacity="0.2" />
            <path fillRule="evenodd" clipRule="evenodd" d="M43.7489 52.456C46.9474 52.4563 50.0847 51.581 52.82 49.9252C55.5554 48.2695 57.784 45.8966 59.2638 43.0645C60.7436 40.2324 61.418 37.0493 61.2136 33.8613C61.0093 30.6732 59.934 27.602 58.1047 24.9815C56.2753 22.361 53.7619 20.2914 50.8375 18.9976C47.9131 17.7038 44.6896 17.2352 41.5173 17.6429C38.345 18.0506 35.3453 19.3188 32.844 21.3099C30.3428 23.3009 28.4357 25.9386 27.3301 28.9362C28.3435 29.2344 29.2651 29.7836 30.0089 30.533C32.4286 31.8708 36.1444 32.8634 39.7306 30.7919C40.4304 30.0056 41.3162 29.4069 42.3072 29.0503C43.2981 28.6937 44.3627 28.5906 45.4037 28.7504C46.4448 28.9102 47.4292 29.3279 48.2672 29.9653C49.1052 30.6026 49.7701 31.4394 50.2012 32.3993C50.6323 33.3592 50.8158 34.4116 50.7352 35.4606C50.6545 36.5095 50.3122 37.5216 49.7394 38.4044C49.1666 39.2873 48.3815 40.0129 47.4559 40.5149C46.5303 41.017 45.4936 41.2796 44.4403 41.2787C43.0724 41.2728 41.7414 40.8347 40.638 40.0272C38.1752 38.8188 33.768 37.6968 29.4472 39.9409C28.8186 40.4347 28.0994 40.8012 27.3301 41.0198C28.5674 44.3744 30.8048 47.2693 33.7407 49.3142C36.6766 51.3592 40.1697 52.4557 43.7489 52.456Z" fill="#FF6969" />
            <path fillRule="evenodd" clipRule="evenodd" d="M42.6693 28.9792C41.2492 25.1289 38.5181 21.9004 34.9543 19.8591C31.3904 17.8179 27.2212 17.0941 23.1768 17.8145C19.1324 18.5349 15.4707 20.6536 12.833 23.7994C10.1954 26.9453 8.75 30.9177 8.75 35.021C8.75 39.1243 10.1954 43.0967 12.833 46.2426C15.4707 49.3884 19.1324 51.5071 23.1768 52.2275C27.2212 52.9479 31.3904 52.2241 34.9543 50.1829C38.5181 48.1416 41.2492 44.9131 42.6693 41.0628C41.9328 40.8492 41.2436 40.4977 40.6386 40.027C38.1757 38.8187 33.7686 37.6966 29.4478 39.9407C28.3436 40.819 26.9706 41.2913 25.5592 41.2785C24.7307 41.2785 23.9104 41.1156 23.1451 40.7989C22.3797 40.4823 21.6843 40.0182 21.0985 39.4331C20.5127 38.848 20.0481 38.1535 19.731 37.389C19.414 36.6246 19.2509 35.8053 19.2509 34.9778C19.2509 34.1504 19.414 33.3311 19.731 32.5667C20.0481 31.8022 20.5127 31.1076 21.0985 30.5226C21.6843 29.9375 22.3797 29.4734 23.1451 29.1567C23.9104 28.8401 24.7307 28.6771 25.5592 28.6771C26.3877 28.6719 27.2089 28.8335 27.9735 29.1524C28.7382 29.4712 29.4306 29.9407 30.0095 30.5328C32.4291 31.8706 36.145 32.8632 39.7312 30.7918C40.5245 29.9285 41.5413 29.3012 42.6693 28.9792Z" fill="#A6D0DD" />
          </svg>
          <h2 className='font-40 ttl'>Catena</h2>
        </div>
        <div className={styles.view}>
          <div className={styles.titleBottomRow}>
            <div>
              <span className='font-20'>
                $1.97
              </span>
              <p style={{ color: "#E94A4A", paddingRight: "15px" }}>
                10.97%
              </p>
            </div>
            <div className={styles.name}>
              <span>View on BscScan</span>
              <OpenSvg />
            </div>
            <div className={styles.name1}>
              <StarSvg className={styles.starSVG} />
              <span>Add Wishlist</span>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.flex}>
              <Button
                label={"Add Liquidity"}
                size={"btn-lg"}
                type={"btn-primary"}
                // arrow={"arrow-right"}
                element={"button"}
                onClick={() => setToggle((prevState) => !prevState)}
                customStyles={{ width: "200px" }}
              />
              <Button
                label={"Trade"}
                size={"btn-lg"}
                type={"btn-primary"}
                arrow={"arrow-right"}
                element={"button"}
                onClick={() => setToggle((prevState) => !prevState)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.displayPoolsSection}>
        <FirstBlock data={data} />
        <ChartBlock />
      </div>
      <TableTokens title="Top Tokens" tableInfo={tableInfo} tableHead={tableHead} />
      <TableTokens title="Transaction" tableInfo={tableInfo} tableHead={tableHead} Table__Types={Table__Types} />
    </div>
  );
};

export default Section;
