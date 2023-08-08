import React, { useState } from 'react';
// import TabFilter from '../../../UI/filters/TabFilter';
import { Tabs } from '@catena-network/catena-ui-module';

import styles from './TableFilter.module.css';
// import { ComponentViewSvg, TableViewSvg } from '../../../svg';

// const svgData = [
//   {
//     id: 0,
//     label: (
//       <ComponentViewSvg />
//     )
//   },
//   {
//     id: 1,
//     label: (
//       <TableViewSvg />
//     )
//   }
// ]

// const tabsData = [
//   {
//     id: 0,
//     label: 'Live',
//   },
//   {
//     id: 1,
//     label: 'Finished',
//   },
// ];

const TableFilter = () => {
  const [activeFilter, setActiveFilter] = useState('Live');

  const navigationHandler = activeItem => {
    setActiveFilter(activeItem);
  };

  return (
    // <TabFilter
    //   onClick={navigationHandler}
    //   data={tabsData}
    //   activeMenu={activeFilter}
    //   css={{
    //     wrap: styles.Activity__filterWrap,
    //     filter: styles.Activity__filter,
    //     active: styles.Activity__filterActive,
    //     item: styles.Activity__filter__item,
    //   }}
    // />
    <Tabs 
    onClick={navigationHandler}
    type={"two-component-tabs-with-text"} 
    leftBtnText="Live" 
    rightBtnText="Finished"
    />
  );
};

export default TableFilter;
