import React from 'react';
import Image from 'next/image';

import Button from '../../../UI/button/Button';
import PoolsTable from '../InfoTables/PoolsTable';
import TransactionTable from '../InfoTables/TransactionTable';
import { PriceUp, PriceDown, StarSVG, OpenSVG } from '../../../svg/InfoIcons';

import styles from './TokenSection.module.css';
const TokenSection = ({ data }) => {
  return (
    <>
      {data && (
        <div className={styles.section}>
          <div className={styles.titleRow}>
            <div className={styles.title}>
              <div className={styles.logo}>
                <Image layout='fill' src={data.imgSrc} alt='logo' />
              </div>
              <div className={styles.titleTextRow}>
                <div className={styles.titleText}>
                  <p>{data.name}</p>
                  <StarSVG className={styles.starSVG} />
                </div>
                <div className={styles.prices}>
                  <p className={styles.price}>$ {data.price}</p>
                  <div className={`${styles.price_change} `}>
                    {data.price_change > 0 ? <PriceUp /> : <PriceDown />}
                    <p
                      className={`${
                        data.price_change > 0
                          ? styles.PositiveNum
                          : styles.NegativeNum
                      }`}
                    >
                      {Math.abs(data.price_change)}%
                    </p>
                  </div>
                </div>
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
          <div>
            <div className={styles.displayStats}>
              <div className={styles.liquidityBlock}>
                <h3>Liquidity</h3>
                <p className={styles.blockP}>${data.liquidity}M</p>
                <div className={`${styles.changePercent} `}>
                  {data.liquidity_change > 0 ? <PriceUp /> : <PriceDown />}
                  <p
                    className={`${
                      data.liquidity_change > 0
                        ? styles.PositiveNum
                        : styles.NegativeNum
                    }`}
                  >
                    ↑{Math.abs(data.liquidity_change)}%
                  </p>
                </div>
              </div>
              <div className={styles.volumeBlock}>
                <h3>VOLUME 24H</h3>
                <p className={styles.blockP}>${data.volume_24h}M</p>
                <div className={`${styles.changePercent} `}>
                  {data.volume_24h_change > 0 ? <PriceUp /> : <PriceDown />}
                  <p
                    className={`${
                      data.volume_24h_change > 0
                        ? styles.PositiveNum
                        : styles.NegativeNum
                    }`}
                  >
                    ↑{Math.abs(data.volume_24h_change)}%
                  </p>
                </div>
              </div>
              <div className={styles.volumeBlock2}>
                <h3>VOLUME 7D</h3>
                <p className={styles.blockP}>${data.volume_7d}M</p>
              </div>
              <div className={styles.transactionBlock}>
                <h3>TRANSACTIONS 24h</h3>
                <p className={styles.blockP}>${data.transactions_24h}K</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className={styles.tableName}>Pools</h2>
            <PoolsTable />
          </div>
          <div>
            <h2 className={styles.tableName}>Transaction</h2>
            <TransactionTable />
          </div>
        </div>
      )}
    </>
  );
};

export default TokenSection;
