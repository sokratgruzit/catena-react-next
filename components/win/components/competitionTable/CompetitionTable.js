import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './CompetitionTable.module.css';

const tradersDataTotal = [
  {
    id: 0,
    price: '$11,034,9435',
    nickName: '0x72...a55b',
    img: '/images/win/icone.png',
    numbering: '#1',
  },
  {
    id: 1,
    price: '$11,034,9435,000,000,000',
    nickName: '0x72a55b0x72a55b0x7255b0x72a55b0x72a55b0x7255b',
    img: '/images/win/iconestorme.png',
    numbering: '#23333333',
  },
  {
    id: 2,
    price: '$11,034,9435',
    nickName: '0x72...a55b3333333',
    img: '/images/win/iconetab.png',
    numbering: '#3',
  },
  {
    id: 3,
    price: '$11,034,94353333333',
    nickName: '0x72...a55b',
    img: '/images/win/icone.png',
    numbering: '#4',
  },
  {
    id: 4,
    price: '$11,034,9435',
    nickName: '0x72...a55b',
    img: '/images/win/iconetab.png',
    numbering: '#5',
  },
  {
    id: 5,
    price: '$11,034,9435',
    nickName: '0x72...a55b',
    img: '/images/win/icone.png',
    numbering: '#1',
  },
  {
    id: 6,
    price: '$11,034,9435',
    nickName: '0x72...a55b',
    img: '/images/win/iconestorme.png',
    numbering: '#23333333',
  },
  {
    id: 7,
    price: '$11,034,9435',
    nickName: '0x72...a55b3333333',
    img: '/images/win/iconetab.png',
    numbering: '#3',
  },
  {
    id: 8,
    price: '$11,034,94353333333',
    nickName: '0x72...a55b',
    img: '/images/win/icone.png',
    numbering: '#4',
  },
  {
    id: 9,
    price: '$11,034,9435',
    nickName: '0x72...a55b',
    img: '/images/win/iconetab.png',
    numbering: '#5',
  },
  {
    id: 10,
    price: '$11,034,9435',
    nickName: '0x72...a55b',
    img: '/images/win/icone.png',
    numbering: '#1',
  },
  {
    id: 11,
    price: '$11,034,9435',
    nickName: '0x72...a55b',
    img: '/images/win/iconestorme.png',
    numbering: '#23333333',
  },
  {
    id: 12,
    price: '$11,034,9435',
    nickName: '0x72...a55b3333333',
    img: '/images/win/iconetab.png',
    numbering: '#3',
  },
  {
    id: 13,
    price: '$11,034,94353333333',
    nickName: '0x72...a55b',
    img: '/images/win/icone.png',
    numbering: '#4',
  },
  {
    id: 14,
    price: '$11,034,9435',
    nickName: '0x72...a55b',
    img: '/images/win/iconetab.png',
    numbering: '#16',
  },
];
const tradersDataStorm = [
  {
    id: 0,
    price: '$1,801,694',
    nickName: '0x6E...809b',
    img: '/images/win/iconestorme.png',
    numbering: '#1',
  },
  {
    id: 1,
    price: '$464,764',
    nickName: '0x6E...9959',
    img: '/images/win/iconestorme.png',
    numbering: '#2',
  },
  {
    id: 2,
    price: '$462,938',
    nickName: '0xEE...D0Dc',
    img: '/images/win/iconestorme.png',
    numbering: '#3',
  },
  {
    id: 3,
    price: '$447,828',
    nickName: '0x81...5890',
    img: '/images/win/iconestorme.png',
    numbering: '#4',
  },
  {
    id: 4,
    price: '$418,354',
    nickName: '0xE0...933a',
    img: '/images/win/iconestorme.png',
    numbering: '#5',
  },
];
const tradersDataFlippers = [
  {
    id: 0,
    price: '$2,734,120',
    nickName: '0xd2...6b9A',
    img: '/images/win/iconetab.png',
    numbering: '#1',
  },
  {
    id: 1,
    price: '$1,653,915',
    nickName: '0xAC...4f02',
    img: '/images/win/iconestorme.png',
    numbering: '#2',
  },
  {
    id: 2,
    price: '$1,441,877',
    nickName: '0xd5...037b',
    img: '/images/win/icone.png',
    numbering: '#3',
  },
  {
    id: 3,
    price: '$1,109,779',
    nickName: '0xc8...212E',
    img: '/images/win/iconetab.png',
    numbering: '#4',
  },
  {
    id: 4,
    price: '$1,108,376',
    nickName: '0x64...8AaE',
    img: '/images/win/iconestorme.png',
    numbering: '#5',
  },
];
const tradersDataCakers = [
  {
    id: 0,
    price: '$2,734,120',
    nickName: '0xd2...6b9A',
    img: '/images/win/icone.png',
    numbering: '#1',
  },
  {
    id: 1,
    price: '$1,653,915',
    nickName: '0xAC...4f02',
    img: '/images/win/iconetab.png',
    numbering: '#2',
  },
  {
    id: 2,
    price: '$1,441,877',
    nickName: '0xd5...037b',
    img: '/images/win/iconestorme.png',
    numbering: '#3',
  },
  {
    id: 3,
    price: '$1,109,779',
    nickName: '0xc8...212E',
    img: '/images/win/iconetab.png',
    numbering: '#4',
  },
  {
    id: 4,
    price: '$1,108,376',
    nickName: '0x64...8AaE',
    img: '/images/win/iconestorme.png',
    numbering: '#5',
  },
];

const CompetitionTable = ({ activeMenuItem }) => {
  const [tableData, setTableData] = useState(tradersDataTotal);
  useEffect(() => {
    //fetch data by state
    if (activeMenuItem === 'total') setTableData(tradersDataTotal);
    if (activeMenuItem === 'storm') setTableData(tradersDataStorm);
    if (activeMenuItem === 'flippers') setTableData(tradersDataFlippers);
    if (activeMenuItem === 'cakers') setTableData(tradersDataCakers);
  }, [activeMenuItem]);

  return (
    <div>
      {tableData.map((item, index) => (
        <div key={index} className={styles.tradesTab}>
          <div>
            <p className={styles.numbering}>{item.numbering}</p>
          </div>
          <div>
            <p className={styles.price}>{item.price}</p>
          </div>
          <div>
            <p className={styles.nickName}>{item.nickName}</p>
          </div>
          <div className={styles.icone}>
            <Image
              layout='fill'
              src={item.img}
              alt='HomeScreen'
              objectFit={'contain'}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompetitionTable;
