import { useState, useEffect } from 'react';
import Image from 'next/image';

import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import { OpenSvg, VectorSvg } from '../../../svg/index';
import Table from '../../../UI/table/Table';

import styles from './VotingData.module.css';
import ListItemRow from '../../../UI/listItem/ListItemRow';
import { useWindowDimension } from '../../../../hooks/useWindowDimension';

const VotingTableData = [
  {
    address: '0xC7...061b',
    result: 'yes we are happy',
    date: '05.06.2022',
    votingPower: '1,233,068.036',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '05.06.2022',
    votingPower: '23,596.936',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
  {
    address: '0xC7...061b',
    result: 'no we are not happy at all',
    date: '13.07.2022',
    votingPower: '14,269.176',
  },
];

const dataForTable = VotingTableData.map((vote, index) => ({
  id: index,
  data: [
    {
      text: (
        <a>
          {vote.address} <OpenSvg />
        </a>
      ),
      type: 'text',
    },
    {
      text: vote.result,
      type: 'text',
    },
    {
      text: vote.date,
      type: 'text',
    },
    {
      text: (
        <>
          {vote.address}
          <a className={styles.openLink}>
            <OpenSvg />
          </a>
        </>
      ),
      type: 'text',
    },
  ],
}));

const VotingData = () => {
  const [width, height] = useWindowDimension();
  const [showItemsCount, setShowItemsCount] = useState(10);

  useEffect(() => {
    //fetch data for votes
  }, []);

  return (
    <main className={styles.inner}>
      <CornerDecor />
      <div className={styles.header}>
        <p>
          Votes <span>{dataForTable.length}</span>
        </p>
      </div>
      <div className={styles.list}>
        {width >= 1023 ? (
          <Table
            tableLabels={['Address', 'Result', 'Date']}
            tableData={dataForTable.slice(0, showItemsCount)}
            type={'proposal_votes'}
          />
        ) : (
          dataForTable
            .slice(0, showItemsCount)
            .map((item, index) => (
              <ListItemRow key={index} data={item} type={'proposal_votes'} />
            ))
        )}
      </div>
      {dataForTable.length > showItemsCount && (
        <div
          className={styles.seeMore}
          onClick={() => setShowItemsCount(prevState => prevState + 20)}
        >
          <p>See More</p>
          <VectorSvg className={styles.VectorSvg} />
        </div>
      )}
    </main>
  );
};

export default VotingData;
