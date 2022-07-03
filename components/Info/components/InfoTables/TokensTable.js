import React, { useState } from 'react';
import styles from './InfoTables.module.css';
import Table from '../../../UI/table/Table';
import Button from '../../../UI/button/Button';
import PageNumber from './PageNumber';
// import CornerDecor from '../../UI/cornerDecor/CornerDecor';

const InfoTableTokens_Data = [
  {
    id: 0,
    imgSrc: '../../images/Info/TopTokens/1.png',
    name: 'Wrapped BNB (WBNB)',
    price_change: 4.06,
    price: 327.09,
    volume_24h: 259.12,
    liquidity: 2.47,
  },
  {
    id: 1,
    imgSrc: '../../images/Info/TopTokens/2.png',
    name: 'BUSD Token (BUSD)',
    price_change: -4.06,
    price: 1.0,
    volume_24h: 123.43,
    liquidity: 1.66,
  },
  {
    id: 2,
    imgSrc: '../../images/Info/TopTokens/3.png',
    name: 'Tether USD (USDT)',
    price_change: 4.06,
    price: 0.99,
    volume_24h: 259.12,
    liquidity: 1.04,
  },
  {
    id: 3,
    imgSrc: '../../images/Info/TopTokens/4.png',
    name: 'USD Coin (USDC)',
    price_change: 4.06,
    price: 1,
    volume_24h: 101.67,
    liquidity: 359.59,
  },
  {
    id: 4,
    imgSrc: '../../images/Info/TopTokens/5.png',
    name: 'Green Satoshi Token (GST)',
    price_change: 4.06,
    price: 19.88,
    volume_24h: 100.53,
    liquidity: 22.49,
  },
  {
    id: 5,
    imgSrc: '../../images/Info/TopTokens/6.png',
    name: 'LUNA (Wormhole) (LUNA)',
    price_change: 4.06,
    price: 0.00018,
    volume_24h: 36.44,
    liquidity: 2.47,
  },
  {
    id: 6,
    imgSrc: '../../images/Info/TopTokens/7.png',
    name: 'Core Multi Chain',
    price_change: 4.06,
    price: 5.03,
    volume_24h: 259.12,
    liquidity: 1.04,
  },
  {
    id: 7,
    imgSrc: '../../images/Info/TopTokens/8.png',
    name: 'Green Metaverse Token (GMT)',
    price_change: 4.06,
    price: 1.44,
    volume_24h: 123.43,
    liquidity: 359.59,
  },
  {
    id: 8,
    imgSrc: '../../images/Info/TopTokens/9.png',
    name: 'BTCB Tokne (BTCB)',
    price_change: 4.06,
    price: 30442.32,
    volume_24h: 100.53,
    liquidity: 22.49,
  },
  {
    id: 9,
    imgSrc: '../../images/Info/TopTokens/10.png',
    name: 'Etherium Token',
    price_change: 4.06,
    price: 2060.94,
    volume_24h: 36.44,
    liquidity: 22.47,
  },
];

const TokensTable = () => {
  const [data, setData] = useState(InfoTableTokens_Data);
  const [pageCountTokens, setPageCountTokens] = useState(1);
  const [order, setOrder] = useState('ASC');
  const sorting = col => {
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setData(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setData(sorted);
      setOrder('ASC');
    }
  };

  return (
    <div className={styles.Table__wrapper}>
      {data && (
        <>
          <Table
            tableLabels={[
              '#',
              'Name',
              'Price',
              'Price Change',
              'Volume 24H',
              'Liquidity',
              '',
            ]}
            onClick={e =>
              sorting(e.target.textContent.toLowerCase().split(' ').join('_'))
            }
            tableData={data}
            type={'info_table_tokens'}
          />
        </>
      )}
      <div className={styles.Table__buttons}>
        <Button
          customStyles={{ marginRight: '10px' }}
          title={
            <svg
              width='8'
              height='14'
              viewBox='0 0 8 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7 13L1 7L7 1'
                stroke={
                  pageCountTokens === 1 ? 'rgba(255,255,255,0.3)' : 'white'
                }
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          }
          onClick={() => {
            if (pageCountTokens > 1)
              setPageCountTokens(prevValue => prevValue - 1);
          }}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={1}
          state={pageCountTokens}
          setState={setPageCountTokens}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={2}
          state={pageCountTokens}
          setState={setPageCountTokens}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={3}
          state={pageCountTokens}
          setState={setPageCountTokens}
        />
        <Button
          customStyles={{
            marginLeft: '10px',
          }}
          title={
            <svg
              width='8'
              height='14'
              viewBox='0 0 8 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 13L7 7L1 1'
                stroke={
                  pageCountTokens === 3 ? 'rgba(255,255,255,0.3)' : 'white'
                }
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          }
          onClick={() => {
            if (pageCountTokens < 3)
              setPageCountTokens(prevValue => prevValue + 1);
          }}
        />
      </div>
    </div>
  );
};

export default TokensTable;
