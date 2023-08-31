import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import ChartBlock from './chartBlock/ChartBlock';
import FirstBlock from './firstBlock/FirstBlock';
import SecondBlock from './secondBlock/SecondBlock';
import { OpenSvg, StarSvg, SmlArrowSvg } from '../../../svg';
import Button from '../../../UI/button/Button';
import InfoRoutes from '../infoRoutes/InfoRoutes';
import TableTokens from '../tableTokens/TableTokens';
import SearchBar from '../searchBar/SearchBar';

import styles from './PoolsSection.module.css';
import Link from 'next/link';

const PoolsSection = ({ data, tableHead, Table__Types, stakersRecord }) => {
  const router = useRouter();
  return (
    <div className={styles.section}>
      <div className={styles.topSectionWrapper}>
        <div className={styles.goBackWrapper}>
          <div onClick={() => router.push(`/info/pools`)} className={styles.goBackText}>
            <SmlArrowSvg />
            <p>Back To Pools</p>
          </div>
        </div>
        <InfoRoutes />
        <Link href={`/info/pools/watchlist`}>
          <div className={styles.starWrapper}>
            <StarSvg className={styles.starSVG} />
            <div className={styles.favCount}>3</div>
          </div>
        </Link>
      </div>
      <SearchBar />
      <div className={styles.titleRow}>
        <div className={styles.title}>
          <div className={styles.titleTopRow}>
            {/* <Image width={30} height={30} className={styles.logo} src={data.imgSrc1} alt='logo1' />
            <Image width={30} height={30} className={styles.logo} src={data.imgSrc2} alt='logo2' /> */}
            <p>{data.name}</p>
          </div>
        </div>
        <div className={styles.view}>
          <div className={styles.titleBottomRow}>
            {/* <Image width={25} height={25} className={styles.logoSm} src={data.imgSrc1} alt='logo1' /> */}
            <p>
              1 {data.name1} = {data.rate1} {data.name2}
            </p>
            {/* <Image width={25} height={25} className={styles.logoSm} src={data.imgSrc2} alt='logo2' /> */}
            <p>
              1 {data.name2} = {data.rate2} {data.name1}
            </p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.flex}>
              <div className={styles.name1}>
                <StarSvg className={styles.starSVG} />
                <p>Add Wishlist</p>
              </div>
              <div className={styles.name}>
                <p>View on BscScan</p>
                <OpenSvg />
              </div>
            </div>
            <div className={styles.flex}>
              <Button
                title='Add Liquidity'
                type='blue__border'
                customStyles={{
                  padding: '5px',
                  borderRadius: '4px',
                  width: '122px',
                  height: '32px',
                }}
              />
              <Button
                title='Trade'
                type='blue'
                customStyles={{
                  padding: '5px',
                  borderRadius: '4px',
                  width: '71px',
                  height: '32px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.displayPoolsSection}>
        <div>
          <FirstBlock data={data} />
          <SecondBlock data={data} />
        </div>
        <ChartBlock />
      </div>
      <TableTokens title="Top Tokens" tableInfo={stakersRecord} tableHead={tableHead} />
      <TableTokens title="Transaction" tableInfo={stakersRecord} tableHead={tableHead} Table__Types={Table__Types} />
    </div>
  );
};

export default PoolsSection;
