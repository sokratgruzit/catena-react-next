import React, { useState } from 'react';

import TabFilter from '../../../UI/filters/TabFilter';

import styles from './TableFilter.module.css';

const tabsData = [
  {
    id: 0,
    label: 'Live',
  },
  {
    id: 1,
    label: 'Finished',
  },
];

const TableFilter = () => {
  const [activeFilter, setActiveFilter] = useState('Live');

  const navigationHandler = activeItem => {
    setActiveFilter(activeItem);
  };

  return (
    <TabFilter
      onClick={navigationHandler}
      data={tabsData}
      activeMenu={activeFilter}
      css={{
        wrap: styles.Activity__filterWrap,
        filter: styles.Activity__filter,
        active: styles.Activity__filterActive,
        item: styles.Activity__filter__item,
      }}
    />
  );
};

export default TableFilter;
