import React, { useState } from 'react';
import TabFilter from '../../UI/filters/TabFilter';
import Table from '../../UI/table/Table';
import styles from './ActivityTable.module.css';
import filterStyles from '../../UI/filters/TabFilter.module.css';

const tabsData = [
  {
    id: 0,
    label: 'Collection',
  },
  {
    id: 1,
    label: 'Listed',
  },
  {
    id: 2,
    label: 'Delisted',
  },
  {
    id: 3,
    label: 'Modified',
  },
  {
    id: 4,
    label: 'Sold',
  },
];

const ActivityTable = ({ activityData }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  const ITEMS_PER_PAGE = 6;
  const ITEMS_SHOWN = pageNumber * ITEMS_PER_PAGE;

  const handleTabClick = tabName => {
    setActiveMenuItem(prevActiveMenuItem => (prevActiveMenuItem === tabName ? '' : tabName)); // Toggle the active state
  };

  const onPageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  const filteredData = activityData.filter(item => {
    if (activeMenuItem === '') {
      return true;
    }
    return item.data.some(data => data.text === activeMenuItem && data.type === 'text');
  });

  const PAGE_COUNT = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const showItems = filteredData.slice(ITEMS_SHOWN, ITEMS_SHOWN + ITEMS_PER_PAGE);

  return (
    <div className={`${styles.Activity} `}>
      <div className={styles.activityTable}>
        <TabFilter
          onClick={handleTabClick}
          activeMenu={activeMenuItem}
          data={tabsData}
          css={{
            wrap: filterStyles.Activity__filterWrap,
            filter: filterStyles.Activity__filter,
            active: filterStyles.Activity__filterActive,
            item: filterStyles.Activity__filter__item,
            wrapper: filterStyles.Activity__wrapper,
            firstTwoItemsContainer: filterStyles.Activity__firstTwoItemsContainer,
            closeButton: filterStyles.Activity__closeButton,
            clearButton: filterStyles.Activity__clearButton,
          }}
          showCloseButton={true}
          allowMultipleTabs={true}
          showClearButton={true}
        />
        <div className={styles.Activity__listItems}>
          <Table
            tableLabels={['Item', 'Event', 'Price', 'From', 'To', 'Date']}
            tableData={showItems}
            type={'nft_activity'}
          />
        </div>
      </div>

      {/* Pagination component should be added here */}
    </div>
  );
};

export default ActivityTable;
