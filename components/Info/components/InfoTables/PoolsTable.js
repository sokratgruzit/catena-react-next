import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { formatCurrency } from '../../../utils/formatCurrency';
import Table from '../../../UI/table/Table';
import Button from '../../../UI/button/Button';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import PageNumber from './PageNumber';
import { PaginationButtonSVG } from '../../../svg/InfoIcons';

import styles from './InfoTables.module.css';

const PoolsTable = props => {
  const router = useRouter();

  const InfoTablePool_Data = [
    {
      id: 0,
      data: [
        {
          text: 1,
          type: 'text'
        },
        {
          img: '../../../images/Info/TopTokens/1.png',
          title: 'USDC/WBNB',
          onClick: () => router.push(`/info/pools/${'USDC/WBNB'.replace('/', '-')}`),
          type: 'img_text'
        },
        {
          text: formatCurrency(327.09),
          type: 'text'
        },
        {
          text: formatCurrency(197.24),
          type: 'text'
        },
        {
          text: formatCurrency(73.35),
          type: 'text'
        },
        {
          text: formatCurrency(67.37),
          type: 'text'
        },
        {
          text: formatCurrency(27.59),
          type: 'text'
        }
      ]
    },
    {
      id: 1,
      data: [
        {
          text: 2,
          type: 'text'
        },
        {
          img: '../../../images/Info/TopTokens/2.png',
          title: 'WBNB/BUSD',
          onClick: () => router.push(`/info/pools/${'WBNB/BUSD'.replace('/', '-')}`),
          type: 'img_text'
        },
        {
          text: formatCurrency(327.09),
          type: 'text'
        },
        {
          text: formatCurrency(197.24),
          type: 'text'
        },
        {
          text: formatCurrency(73.35),
          type: 'text'
        },
        {
          text: formatCurrency(67.37),
          type: 'text'
        },
        {
          text: formatCurrency(27.59),
          type: 'text'
        }
      ]
    },
    {
      id: 2,
      data: [
        {
          text: 3,
          type: 'text'
        },
        {
          img: '../../../images/Info/TopTokens/3.png',
          title: 'USDT/WBNB',
          onClick: () => router.push(`/info/pools/${'USDT/WBNB'.replace('/', '-')}`),
          type: 'img_text'
        },
        {
          text: formatCurrency(327.09),
          type: 'text'
        },
        {
          text: formatCurrency(197.24),
          type: 'text'
        },
        {
          text: formatCurrency(73.35),
          type: 'text'
        },
        {
          text: formatCurrency(67.37),
          type: 'text'
        },
        {
          text: formatCurrency(27.59),
          type: 'text'
        }
      ]
    },
    {
      id: 3,
      data: [
        {
          text: 4,
          type: 'text'
        },
        {
          img: '../../../images/Info/TopTokens/4.png',
          title: 'GSD/USDC',
          onClick: () => router.push(`/info/pools/${'GSD/USDC'.replace('/', '-')}`),
          type: 'img_text'
        },
        {
          text: formatCurrency(327.09),
          type: 'text'
        },
        {
          text: formatCurrency(197.24),
          type: 'text'
        },
        {
          text: formatCurrency(73.35),
          type: 'text'
        },
        {
          text: formatCurrency(67.37),
          type: 'text'
        },
        {
          text: formatCurrency(27.59),
          type: 'text'
        }
      ]
    },
    {
      id: 4,
      data: [
        {
          text: 5,
          type: 'text'
        },
        {
          img: '../../../images/Info/TopTokens/5.png',
          title: 'LUNA/BUSD',
          onClick: () => router.push(`/info/pools/${'LUNA/BUSD'.replace('/', '-')}`),
          type: 'img_text'
        },
        {
          text: formatCurrency(327.09),
          type: 'text'
        },
        {
          text: formatCurrency(197.24),
          type: 'text'
        },
        {
          text: formatCurrency(73.35),
          type: 'text'
        },
        {
          text: formatCurrency(67.37),
          type: 'text'
        },
        {
          text: formatCurrency(27.59),
          type: 'text'
        }
      ]
    },
    {
      id: 5,
      data: [
        {
          text: 6,
          type: 'text'
        },
        {
          img: '../../../images/Info/TopTokens/6.png',
          title: 'Core/WBNB',
          onClick: () => router.push(`/info/pools/${'Core/WBNB'.replace('/', '-')}`),
          type: 'img_text'
        },
        {
          text: formatCurrency(327.09),
          type: 'text'
        },
        {
          text: formatCurrency(197.24),
          type: 'text'
        },
        {
          text: formatCurrency(73.35),
          type: 'text'
        },
        {
          text: formatCurrency(67.37),
          type: 'text'
        },
        {
          text: formatCurrency(27.59),
          type: 'text'
        }
      ]
    },
    {
      id: 6,
      data: [
        {
          text: 7,
          type: 'text'
        },
        {
          img: '../../../images/Info/TopTokens/7.png',
          title: 'LUNA/USDT',
          onClick: () => router.push(`/info/pools/${'LUNA/USDT'.replace('/', '-')}`),
          type: 'img_text'
        },
        {
          text: formatCurrency(327.09),
          type: 'text'
        },
        {
          text: formatCurrency(197.24),
          type: 'text'
        },
        {
          text: formatCurrency(73.35),
          type: 'text'
        },
        {
          text: formatCurrency(67.37),
          type: 'text'
        },
        {
          text: formatCurrency(27.59),
          type: 'text'
        }
      ]
    },
    {
      id: 7,
      data: [
        {
          text: 8,
          type: 'text'
        },
        {
          img: '../../../images/Info/TopTokens/8.png',
          title: 'USDT/BUSD',
          onClick: () => router.push(`/info/pools/${'USDT/BUSD'.replace('/', '-')}`),
          type: 'img_text'
        },
        {
          text: formatCurrency(327.09),
          type: 'text'
        },
        {
          text: formatCurrency(197.24),
          type: 'text'
        },
        {
          text: formatCurrency(73.35),
          type: 'text'
        },
        {
          text: formatCurrency(67.37),
          type: 'text'
        },
        {
          text: formatCurrency(27.59),
          type: 'text'
        }
      ]
    }
  ];

  const [pageCountPools, setPageCountPools] = useState(1);
  const itemsPerPage = props.itemsPerPage || 10;
  const [filteredData, setFilteredData] = useState(
    InfoTablePool_Data.slice(
      itemsPerPage * (pageCountPools - 1),
      itemsPerPage - 1 + pageCountPools,
    ),
  );

  return (
    <div className={styles.Table__wrapper}>
      <CornerDecor />
      <Table
        tableLabels={[
          '#',
          'Pool',
          'Volume 24H',
          'Volume 7D',
          'LP Reward Fees - 24H',
          'LP Reward APR',
          'Liquidity',
          '',
        ]}
        tableData={filteredData}
        type={'info_table_pools'}
      />
      <div className={styles.Table__buttons}>
        <Button
          customStyles={{ marginRight: '10px' }}
          title={
            <PaginationButtonSVG
              className={styles.back}
              pageCountTokens={pageCountPools}
              disabled={1}
            />
          }
          onClick={() => {
            if (pageCountPools > 1)
              setPageCountPools(prevValue => prevValue - 1);
          }}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={1}
          state={pageCountPools}
          setState={setPageCountPools}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={2}
          state={pageCountPools}
          setState={setPageCountPools}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={3}
          state={pageCountPools}
          setState={setPageCountPools}
        />
        <Button
          customStyles={{
            marginLeft: '10px',
          }}
          title={
            <PaginationButtonSVG
              className={styles.forward}
              pageCountTokens={pageCountPools}
              disabled={3}
            />
          }
          onClick={() => {
            if (pageCountPools < 3)
              setPageCountPools(prevValue => prevValue + 1);
          }}
        />
      </div>
    </div>
  );
};
export default PoolsTable;
