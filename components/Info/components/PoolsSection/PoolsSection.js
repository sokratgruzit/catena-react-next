import React from 'react';
import Image from 'next/image';

import Button from '../../../UI/button/Button';
import FirstBlock from './FirstBlock/FirstBlock';
import SecondBlock from './SecondBlock/SecondBlock';
import ChartBlock from './ChartBlock/ChartBlock';
import { StarSVG, OpenSVG } from '../../../svg/InfoIcons';

import styles from './PoolsSection.module.css';
const PoolsSection = ({ data }) => {
  return (
    <>
      {data && (
        <div className={styles.section}>
          <div className={styles.titleRow}>
            <div className={styles.title}>
              <div className={styles.titleTopRow}>
                <Image
                  width={30}
                  height={30}
                  className={styles.logo}
                  src={data.imgSrc1}
                  alt='logo1'
                />
                <Image
                  width={30}
                  height={30}
                  className={styles.logo}
                  src={data.imgSrc2}
                  alt='logo2'
                />
                <p>{data.name}</p>
                <StarSVG className={styles.starSVG} />
              </div>
              <div className={styles.titleBottomRow}>
                <Image
                  width={25}
                  height={25}
                  className={styles.logoSm}
                  src={data.imgSrc1}
                  alt='logo1'
                />
                <p>
                  1 {data.name1} = {data.rate1} {data.name2}
                </p>
                <Image
                  width={25}
                  height={25}
                  className={styles.logoSm}
                  src={data.imgSrc2}
                  alt='logo2'
                />
                <p>
                  1 {data.name2} = {data.rate2} {data.name1}
                </p>
              </div>
            </div>
            <div className={styles.view}>
              <div className={styles.name}>
                <p>View on BscScan</p>
                <OpenSVG />
              </div>
              <div className={styles.buttons}>
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
          <div className={styles.displayPoolsSection}>
            <div>
              <FirstBlock data={data} />
              <SecondBlock data={data} />
            </div>
            <ChartBlock />
          </div>
        </div>
      )}
    </>
  );
};

export default PoolsSection;
