import React from 'react';

import TextItem from '../../components/TextItem/TextItem';
import PlusItem from '../../components/PlusItem/PlusItem';
import ExpandItem from '../../components/ExpandItem/ExpandItem';

import styles from '../../ListItemRow.module.css';

const Dashboard = ({ data, mobileListOpener, activeList }) => {
  return (
    <div
      onClick={() => {
        mobileListOpener(data.hash);
      }}
      className={`${styles.rowItem} ${styles.dashboardRowItem}`}
    >
      <TextItem text={data.hash} />
      <TextItem text={data.from} />
      <TextItem text={data.to} />
      <TextItem text={data.transactionType} />
      <TextItem text={data.result} />
      <TextItem text={data.amount} />
      <PlusItem hash={data.hash} activeList={activeList} />
      <ExpandItem
        data={data}
        activeList={activeList}
        itemArr={[
          {
            name: 'From',
            data: data.from,
          },
          {
            name: 'To',
            data: data.to,
          },
          {
            name: 'Result',
            data: data.result,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
