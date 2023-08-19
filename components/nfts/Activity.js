import Link from 'next/link';
import { useState } from 'react';

import TabFilter from '../UI/filters/TabFilter';
import Table from '../UI/table/Table';

import styles from './Activity.module.css';
import filterStyles from '../UI/filters/TabFilter.module.css';
import ArrowBtn from '../UI/button/ArrowBtn';

const tabsData = [
  {
    id: 0,
    label: 'All',
  },
  {
    id: 1,
    label: 'Collection',
  },
  {
    id: 2,
    label: 'Listed',
  },
  {
    id: 3,
    label: 'Delisted',
  },
  {
    id: 4,
    label: 'Modified',
  },
  {
    id: 5,
    label: 'Sold',
  },
];

const Activity = props => {
  const [activeMenuItem, setActiveMenuItem] = useState('All');
  const [pageNumber, setPageNumber] = useState(0);

  const ITEMS_PER_PAGE = 6;
  const ITEMS_SHOWN = pageNumber * ITEMS_PER_PAGE;
  const PAGE_COUNT = Math.ceil(props.activityData.length / ITEMS_PER_PAGE);

  const showItems = props.activityData.slice(ITEMS_SHOWN, ITEMS_SHOWN + ITEMS_PER_PAGE).map(item => {
    return item;
  });

  const filterTableHandler = status => {
    const filtered = props.activityData.filter(item => {
      if (status == 'All') {
        return item;
      }
      if (status == item.event) {
        return item;
      }
    });
    // setTableData(filtered);
    setActiveMenuItem(status);
  };

  const onPageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
  };

  let content = (
    <div className={styles.Activity__listItems}>
      <Table
        tableLabels={['Item', 'Event', 'Price', 'From', 'To', 'Date']}
        tableData={showItems}
        type={'nft_activity'}
      />
    </div>
  );

  /*if (props.screeWidth < 1200) {
        content = <div className={styles.Activity__wrap}>
            {nftActivityData.map((item) => {
                return <ListItemCard key={item.id + 'mobile'} data={item} type={"nft_activity_mobile"} />
            })}
        </div>;
    }*/

  return (
    <div className={`${styles.Activity} container`}>
      <ArrowBtn route={'nfts'} direction={'back'} />

      <h1 className={`font-90 ttl`}>Activity</h1>
      <TabFilter
        onClick={filterTableHandler}
        activeMenu={activeMenuItem}
        data={tabsData}
        css={{
          wrap: filterStyles.Activity__filterWrap,
          filter: filterStyles.Activity__filter,
          active: filterStyles.Activity__filterActive,
          item: filterStyles.Activity__filter__item,
        }}
      />
      {content}
      <div className={styles.nftActivityTable__pagesFilter}>
        {/*<ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    pageCount={PAGE_COUNT}
                    onPageChange={onPageChangeHandler}
                />*/}
        pagination
      </div>
    </div>
  );
};

export default Activity;
