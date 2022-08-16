import React, { useState } from 'react';

import TabFilter from '../../../../UI/filters/TabFilter';
import CornerDecor from '../../../../UI/cornerDecor/CornerDecor';

import styles from './ChartBlock.module.css';

let tabsData = [
  {
    id: 0,
    label: 'Volume',
  },
  {
    id: 1,
    label: 'Liquidity',
  },
  {
    id: 2,
    label: 'Price',
  },
];

const ChartBlock = () => {
  const [activeMenuItem, setactiveMenuItem] = useState('Volume');

  const navigationHandler = activeItem => {
    setactiveMenuItem(activeItem);
  };

  return (
    <div className={styles.wrapper}>
      <CornerDecor />
      <TabFilter
        onClick={navigationHandler}
        data={tabsData}
        activeMenu={activeMenuItem}
        css={{
          wrap: styles.Activity__filterWrap,
          filter: styles.Activity__filter,
          active: styles.Activity__filterActive,
          item: styles.Activity__filter__item,
        }}
      />
    </div>
  );
};

export default ChartBlock;
