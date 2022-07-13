import React from 'react';
import Image from 'next/image';

import Button from '../../../UI/button/Button';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import PoolsTable from '../InfoTables/PoolsTable';
import TransactionTable from '../InfoTables/TransactionTable';
import ChartBlock from './ChartBlock/ChartBlock';
import { PriceUp, PriceDown, StarSVG, OpenSVG } from '../../../svg/InfoIcons';

import styles from './TokenSection.module.css';

const TokenSection = ({ data }) => {
  var unitlist = ['', 'K', 'M', 'B'];
  function formatnumber(number) {
    let sign = Math.sign(number);
    let unit = 0;

    while (Math.abs(number) > 1000) {
      unit = unit + 1;
      number = Math.floor(Math.abs(number) / 100) / 10;
    }
    return '$' + sign * Math.abs(number) + unitlist[unit];
  }
  return (
    <>
      {data && (
        <div className={styles.section}>
          <div className={styles.titleRow}>
            <div className={styles.title}>
              <div className={styles.logo}>
                <Image layout='fill' src={data?.image} alt='logo' />
              </div>
              <div className={styles.titleTextRow}>
                <div className={styles.titleText}>
                  <p>{data?.name}</p>
                  <StarSVG
                    className={styles.starSVG}
                    onClick={() =>
                      console.log({
                        name: data.name,
                        src: data.image,
                        current_price: data.current_price,
                        price_change_percentage_24h:
                          data.price_change_percentage_24h,
                      })
                    }
                  />
                </div>
                <div className={styles.prices}>
                  <p className={styles.price}>$ {data?.current_price}</p>
                  <div className={`${styles.price_change} `}>
                    {data?.price_change_percentage_24h > 0 ? (
                      <PriceUp />
                    ) : (
                      <PriceDown />
                    )}
                    <p
                      className={`${
                        data?.price_change_percentage_24h > 0
                          ? styles.PositiveNum
                          : styles.NegativeNum
                      }`}
                    >
                      {Math.abs(data?.price_change_percentage_24h?.toFixed(3))}%
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
          <div className={styles.dataBlockWrapper}>
            <div className={styles.displayStats}>
              <CornerDecor />
              <div className={styles.liquidityBlock}>
                <h3>Liquidity</h3>
                <p className={styles.blockP}>
                  {formatnumber(data?.total_volume / 9)}
                </p>
                <div className={`${styles.changePercent} `}>
                  {data?.market_cap_change_percentage_24h > 0 ? (
                    <PriceUp />
                  ) : (
                    <PriceDown />
                  )}
                  <p
                    className={`${
                      data?.market_cap_change_percentage_24h > 0
                        ? styles.PositiveNum
                        : styles.NegativeNum
                    }`}
                  >
                    {Math.abs(
                      data?.market_cap_change_percentage_24h?.toFixed(3),
                    )}
                    %
                  </p>
                </div>
              </div>
              <div className={styles.volumeBlock}>
                <h3>VOLUME 24H</h3>
                <p className={styles.blockP}>
                  {formatnumber(data?.total_volume)}
                </p>
                <div className={`${styles.changePercent} `}>
                  {data?.total_volume > 0 ? <PriceUp /> : <PriceDown />}
                  <p
                    className={`${
                      data?.total_volume > 0
                        ? styles.PositiveNum
                        : styles.NegativeNum
                    }`}
                  >
                    {Math.abs(data?.total_volume)}%
                  </p>
                </div>
              </div>
              <div className={styles.volumeBlock2}>
                <h3>VOLUME 7D</h3>
                <p className={styles.blockP}>
                  {formatnumber(data?.total_volume * 7.2)}
                </p>
              </div>
              <div className={styles.transactionBlock}>
                <h3>TRANSACTIONS 24h</h3>
                <p className={styles.blockP}>
                  {formatnumber(data?.total_volume / 1000)}
                </p>
              </div>
            </div>
            <ChartBlock />
          </div>
          <div>
            <h2 className={styles.tableName}>Pools</h2>
            <PoolsTable itemsPerPage={5} />
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
