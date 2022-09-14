import React, { useState } from 'react';

import { SearchIcon, VectorSvg } from '../../../svg/index';

import styles from './DashboardFilter.module.css';

const Filters = ['Token', 'Accounts', 'Blocks', 'Txn ID', 'Contract'];

const DashboardFilter = () => {
  const [filterMenu, setFilterMenu] = useState({
    open: false,
    selected: 'All Filters',
  });
  const toggleFilterMenuHandler = () => {
    setFilterMenu(prevState => ({ ...prevState, open: !prevState.open }));
  };

  return (
    <div className={`${styles.container} ${styles.containerMargin} container`}>
      <div className={styles.dashboardTop__inner}>
        <div className={styles.dashboardFilter}>
          <input
            type='search'
            placeholder='Search by Address / Txn ID / Token / Block'
          ></input>
          <div className={styles.dashboardFilter__searchBtn}>
            <SearchIcon />
          </div>
          <div
            className={`${styles.dashboardFilter__btn} ${
              filterMenu.open ? styles.active : ''
            }`}
            onClick={toggleFilterMenuHandler}
          >
            <p className='font-13'>{filterMenu.selected}</p>
            <VectorSvg className={styles.filterArrow} />
          </div>
          <div
            onMouseLeave={toggleFilterMenuHandler}
            className={`${filterMenu.open ? styles.active : ''} ${
              styles.modalFilter
            }`}
          >
            {Filters.map((filterName, index) => (
              <p
                key={index}
                onClick={e =>
                  setFilterMenu(prevState => ({
                    ...prevState,
                    selected: filterName,
                  }))
                }
              >
                {filterName}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFilter;
