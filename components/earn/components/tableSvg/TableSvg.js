import React, { useState } from 'react';

import TabFilter from '../../../UI/filters/TabFilter';

import styles from '../tableFilter/TableFilter.module.css'
import { ComponentViewSvg, TableViewSvg } from '../../../svg';

const svgData = [
  {
    id: 0,
    label: (
      <ComponentViewSvg />
    )
  },
  {
    id: 1,
    label: (
      <TableViewSvg />
    )
  }
]

const TableSvg = () => {
  const [activeFilter, setActiveFilter] = useState('Live');

  const navigationHandler = activeItem => {
    setActiveFilter(activeItem);
  };

  return (
    <TabFilter
      onClick={navigationHandler}
      data={svgData}
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

export default TableSvg;
