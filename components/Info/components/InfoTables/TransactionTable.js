import React, { useState } from 'react';

import { formatCurrency } from '../../../utils/formatCurrency';
import Table from '../../../UI/table/Table';
import Button from '../../../UI/button/Button';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import PageNumber from './PageNumber';
import { PaginationButtonSvg } from '../../../svg';

import styles from './InfoTables.module.css';

const Table__Types = [
  {
    type: 'All',
  },
  {
    type: 'Swaps',
  },
  {
    type: 'Adds',
  },
  {
    type: 'Removes',
  },
];

const TransactionTable = () => {
  const [pageCountTransactions, setPageCountTransactions] = useState(1);
  const [dataType, setDataType] = useState('All');

  const TransactionTable_DATA = [
    {
      id: 0,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
    {
      id: 1,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
    {
      id: 3,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
    {
      id: 4,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
    {
      id: 5,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
    {
      id: 6,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
    {
      id: 7,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
    {
      id: 8,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
    {
      id: 9,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg',
        },
        {
          text: formatCurrency(36.09),
          type: 'text',
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text',
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text',
        },
        {
          title: '0x20...139b',
          type: 'svg',
        },
        {
          text: '3 hours',
          type: 'text',
        },
      ],
    },
  ];

  return (
    <div className={styles.Table__wrapper}>
      <CornerDecor />
      <div className={styles.radioWrapper}>
        {Table__Types.map(({ type }, index) => (
          <label
            onClick={e => setDataType(type)}
            className={styles.radioContainer}
            key={type}
          >
            {type}
            <input
              type='radio'
              name={'transaction'}
              defaultChecked={index === 0}
              onChange={() => setDataType(type)}
            />
            <span className={styles.radioCheckmark}></span>
          </label>
        ))}
      </div>
      <Table
        tableLabels={[
          'Action',
          'Total Value',
          'Token Amount',
          'Token Amoun',
          'Account',
          'Time',
        ]}
        tableData={TransactionTable_DATA}
        type={'info_table_transactions'}
      />
      <div className={styles.Table__buttons}>
        <Button
          customStyles={{ marginRight: '10px' }}
          title={
            <PaginationButtonSvg
              className={styles.back}
              pageCountTokens={pageCountTransactions}
              disabled={1}
            />
          }
          onClick={() => {
            if (pageCountTransactions > 1)
              setPageCountTransactions(prevValue => prevValue - 1);
          }}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={1}
          state={pageCountTransactions}
          setState={setPageCountTransactions}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={2}
          state={pageCountTransactions}
          setState={setPageCountTransactions}
        />
        <PageNumber
          mainStyle={styles.pageCount}
          activeStyle={styles.activePageNum}
          title={3}
          state={pageCountTransactions}
          setState={setPageCountTransactions}
        />
        <Button
          customStyles={{
            marginLeft: '10px',
          }}
          title={
            <PaginationButtonSvg
              className={styles.forward}
              pageCountTokens={pageCountTransactions}
              disabled={3}
            />
          }
          onClick={() => {
            if (pageCountTransactions < 3)
              setPageCountTransactions(prevValue => prevValue + 1);
          }}
        />
      </div>
    </div>
  );
};

export default TransactionTable;
