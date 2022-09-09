import { useEffect } from 'react';

import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import { OpenSvg, VectorSvg } from '../../../svg/index';
import Table from '../../../UI/table/Table';

import styles from './VotingData.module.css';
import ListItemRow from '../../../UI/listItem/ListItemRow';

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
];

const dataForTable = VotingTableData.map((vote, index) => ({
  id: index,
  data: [
    {
      text: vote.address,
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
      text: vote.votingPower,
      type: 'text',
    },
  ],
}));

const VotingData = () => {
  useEffect(() => {
    //fetch data for votes
  }, []);

  return (
    <div className={`container`}>
      <div className={styles.inner}>
        <CornerDecor />
        <div className={styles.header}>
          <p>
            Votes <span>43</span>
          </p>
        </div>
        <span className={styles.bottomBorder}></span>
        <div className={styles.list}>
          {dataForTable.map((item, index) => (
            <ListItemRow key={index} data={item} type={'proposal votes'} />
          ))}
        </div>
        <div className={styles.seeMore}>
          <div className={`${styles.seeMore__inner} ${styles.arrowHover}`}>
            <p className={styles.orangeHover}>See More</p>
            <VectorSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingData;
