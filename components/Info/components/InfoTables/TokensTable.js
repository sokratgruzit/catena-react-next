import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { formatCurrency } from '../../../utils/formatCurrency';
import Table from '../../../UI/table/Table';
import Button from '../../../UI/button/Button';
import PageNumber from './PageNumber';
import { PaginationButtonSvg } from '../../../svg';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';

import styles from './InfoTables.module.css';

const TokensTable = props => {
  const itemsPerPage = props.itemsPerPage || 10;
  const totalPages = 100;
  const [pageCountTokens, setPageCountTokens] = useState(1);
  const [data, setData] = useState();
  const router = useRouter();
  const [filteredColumn, setFilteredColumn] = useState({
    colName: '',
    order: 'ASC',
  });

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${itemsPerPage}&page=${pageCountTokens}&sparkline=false`,
    )
      .then(response => response.json())
      .then(data => {
        data.map(item => {
          let tData = [
            {
              text: item.market_cap_rank,
              type: 'text',
            },
            {
              img: item.image,
              title: item.name,
              onClick: () => router.push(`/info/tokens/${item.id}`),
              type: 'img_text',
            },
            {
              text: formatCurrency(item.current_price),
              type: 'text',
            },
            {
              priceChange: item.price_change_percentage_24h,
              type: 'price_change',
            },
            {
              text: formatCurrency(item.market_cap_change_24h),
              type: 'text',
            },
            {
              text: formatCurrency(item.total_volume),
              type: 'text',
            },
          ];

          item.data = tData;
        });
      setData(data);
    });
  }, [itemsPerPage, pageCountTokens, router]);

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
            <PaginationButtonSvg
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
            <PaginationButtonSvg
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
