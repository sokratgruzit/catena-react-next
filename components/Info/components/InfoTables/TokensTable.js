import React, { useState, useEffect } from 'react';

import Table from '../../../UI/table/Table';
import Button from '../../../UI/button/Button';
import PageNumber from './PageNumber';
import { PaginationButtonSVG } from '../../../svg/InfoIcons';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';

import styles from './InfoTables.module.css';

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

const TokensTable = props => {
  const itemsPerPage = props.itemsPerPage || 10;
  const totalPages = 100;
  const [pageCountTokens, setPageCountTokens] = useState(1);
  const [data, setData] = useState();
  const [filteredColumn, setFilteredColumn] = useState({
    colName: '',
    order: 'ASC',
  });

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${itemsPerPage}&page=${pageCountTokens}&sparkline=false`,
    )
      .then(response => response.json())
      .then(data => setData(data));
  }, [itemsPerPage, pageCountTokens]);

  const sorting = col => {
    let sort;
    if (col.startsWith('name')) sort = 'name';
    if (col.startsWith('price')) sort = 'current_price';
    if (col.startsWith('price_change')) sort = 'price_change_percentage_24h';
    if (col.startsWith('volume_24h')) sort = 'market_cap_change_24h';
    if (col.startsWith('liquidity')) sort = 'total_volume';

    if (filteredColumn.order === 'ASC') {
      const sorted = [...data].sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
      setData(sorted);
      setFilteredColumn({ colName: col, order: 'DSC' });
    }
    if (filteredColumn.order === 'DSC') {
      const sorted = [...data].sort((a, b) => (a[sort] < b[sort] ? 1 : -1));
      setData(sorted);
      setFilteredColumn({ colName: col, order: 'ASC' });
    }
  };
  const filterArrows = col => {
    let title = col;
    title.trim();
    if (
      filteredColumn.colName.startsWith(col.replaceAll(' ', '_').toLowerCase())
    ) {
      if (col.length >= filteredColumn.colName.length - 5) {
        title += filteredColumn.order === 'ASC' ? '↓' : '↑';
      }
    } else {
    }

    if (title.includes('↑') || title.includes('↓')) return title;

    return `${title}\u00A0\u00A0`;
  };

  return (
    <div className={styles.Table__wrapper}>
      <CornerDecor />
      {data && (
        <>
          <Table
            tableLabels={[
              '#',
              filterArrows('Name'),
              filterArrows('Price'),
              filterArrows('Price Change'),
              filterArrows('Volume 24H'),
              filterArrows('Liquidity'),
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
            <PaginationButtonSVG
              className={styles.back}
              pageCountTokens={pageCountTokens}
              disabled={1}
            />
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
        {pageCountTokens < totalPages ? (
          <>
            <PageNumber
              mainStyle={styles.pageCount}
              activeStyle={styles.activePageNum}
              title={pageCountTokens === 1 ? 2 : pageCountTokens}
              state={pageCountTokens}
              setState={setPageCountTokens}
            />
            <PageNumber
              mainStyle={styles.pageCount}
              activeStyle={styles.activePageNum}
              title={pageCountTokens === 1 ? 3 : pageCountTokens + 1}
              state={pageCountTokens}
              setState={setPageCountTokens}
            />
          </>
        ) : (
          <>
            <>
              <PageNumber
                mainStyle={styles.pageCount}
                activeStyle={styles.activePageNum}
                title={99}
                state={pageCountTokens}
                setState={setPageCountTokens}
              />
              <PageNumber
                mainStyle={styles.pageCount}
                activeStyle={styles.activePageNum}
                title={100}
                state={pageCountTokens}
                setState={setPageCountTokens}
              />
            </>{' '}
          </>
        )}
        {pageCountTokens < totalPages - 1 && (
          <>
            ...
            <PageNumber
              mainStyle={styles.pageCount}
              activeStyle={styles.activePageNum}
              title={100}
              state={pageCountTokens}
              setState={setPageCountTokens}
            />
          </>
        )}
        <Button
          customStyles={{
            marginLeft: '10px',
          }}
          title={
            <PaginationButtonSVG
              className={styles.forward}
              pageCountTokens={pageCountTokens}
              disabled={totalPages}
            />
          }
          onClick={() => {
            if (pageCountTokens < totalPages)
              setPageCountTokens(prevValue => prevValue + 1);
          }}
        />
      </div>
    </div>
  );
};

export default TokensTable;
