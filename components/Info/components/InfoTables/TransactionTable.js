import React, { useState } from 'react';

import { formatCurrency } from '../../../utils/formatCurrency';
import Table from '../../../UI/table/Table';
import Button from '../../../UI/button/Button';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import PageNumber from './PageNumber';
import { PaginationButtonSVG } from '../../../svg/InfoIcons';

import styles from './InfoTables.module.css';

<<<<<<< HEAD
const TransactionTable_DATA = [
  {
    id: 0,
    action: 'SwapBox Elongate 2 for WBNB',
    total_value: 36.09,
    token_1: {
      amount: 9500,
      token: 'Elongate 2',
    },
    token_2: {
      amount: 0.11,
      token: 'WBNB',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
  {
    id: 1,
    action: 'SwapBox BUSD for WBNB',
    total_value: 133.1,
    token_1: {
      amount: 0.4,
      token: 'WBNB',
    },
    token_2: {
      amount: 133.23,
      token: 'BUSD',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
  {
    id: 2,
    action: 'SwapBox COST for BUSD',
    total_value: 133.26,
    token_1: {
      amount: 1230,
      token: 'COST',
    },
    token_2: {
      amount: 133.23,
      token: 'BUSD',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
  {
    id: 3,
    action: 'SwapBox UST for BUSD',
    total_value: 10.0,
    token_1: {
      amount: 151.38,
      token: 'UST',
    },
    token_2: {
      amount: 30,
      token: 'BUSD',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
  {
    id: 4,
    action: 'SwapBox CRUX for WBNB',
    total_value: 67.73,
    token_1: {
      amount: 0.2,
      token: 'WBNW',
    },
    token_2: {
      amount: 833.0,
      token: 'CRUX',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
  {
    id: 5,
    action: 'SwapBox TNN for WBNB',
    total_value: 62.6,
    token_1: {
      amount: 0.2,
      token: 'WBNW',
    },
    token_2: {
      amount: 833.0,
      token: 'CRUX',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
  {
    id: 6,
    action: 'SwapBox WBNB for TNN',
    total_value: 166.07,
    token_1: {
      amount: 309.44,
      token: 'TNN',
    },
    token_2: {
      amount: 0.19,
      token: 'WBNB',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
  {
    id: 7,
    action: 'SwapBox BUSD for LUNA',
    total_value: 13.01,
    token_1: {
      amount: 564580,
      token: 'TNN',
    },
    token_2: {
      amount: 0.35,
      token: 'WBNB',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
  {
    id: 8,
    action: 'SwapBox WBNB for BUSD',
    total_value: 13.03,
    token_1: {
      amount: 69040,
      token: 'LUNA',
    },
    token_2: {
      amount: 13.01,
      token: 'BUSD',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
  {
    id: 9,
    action: 'SwapBox BUSD for ETH',
    total_value: 20.62,
    token_1: {
      amount: 0.01,
      token: 'ETH',
    },
    token_2: {
      amount: 20.63,
      token: 'BUSD',
    },
    account: '0x20...139b',
    time: '3 hours',
  },
];

=======
>>>>>>> 07548b7b92cfcb3c742dd602bef339bf043a8643
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
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
    },
    {
      id: 1,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
    },
    {
      id: 2,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
    },
    {
      id: 3,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
    },
    {
      id: 4,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
    },
    {
      id: 5,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
    },
    {
      id: 6,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
    },
    {
      id: 7,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
    },
    {
      id: 8,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
    },
    {
      id: 9,
      data: [
        {
          title: 'Swap Elongate 2 for WBNB',
          type: 'svg'
        },
        {
          text: formatCurrency(36.09),
          type: 'text'
        },
        {
          text: formatCurrency(9500),
          text2: 'Elongate 2',
          type: 'multi_text'
        },
        {
          text: formatCurrency(0.11),
          text2: 'WBNB',
          type: 'multi_text'
        },
        {
          title: '0x20...139b',
          type: 'svg'
        },
        {
          text: '3 hours',
          type: 'text'
        }
      ]
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
            <PaginationButtonSVG
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
            <PaginationButtonSVG
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
