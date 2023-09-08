import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { TableElement } from '@catena-network/catena-ui-module';

import ArrowBtn from '../UI/button/ArrowBtn';
import TabFilter from '../UI/filters/TabFilter';
import ListItemCard from '../UI/listItem/ListItemCard';
import Table from '../UI/table/Table';

import styles from './Collections.module.css';
import filterStyles from '../UI/filters/TabFilter.module.css';

const nftCollectionsData = [
  {
    id: 0,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Hot',
  },
  {
    id: 1,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Hot',
  },
  {
    id: 2,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Newest',
  },
  {
    id: 3,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Newest',
  },
  {
    id: 4,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Hot',
  },
  {
    id: 5,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Hot',
  },
  {
    id: 6,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Hot',
  },
  {
    id: 7,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Hot',
  },
  {
    id: 8,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Hot',
  },
  {
    id: 9,
    data: [
      {
        title: 'The AKC',
        img: '/images/nft/nft_collection_items/fig4.png',
        type: 'img_text',
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price',
      },
      {
        text: '0.198',
        type: 'text',
      },
      {
        text: '10,000',
        type: 'text',
      },
      {
        text: 824,
        type: 'text',
      },
      {
        text: 7777,
        type: 'text',
      },
    ],
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    img: '/images/nft/nft_collection_items/fig4.png',
    created_by: 'Created by',
    artist: 'The AKC',
    priceCmcx: '0.0024',
    lowest: '0.198',
    highest: '10,000',
    items: 824,
    supply: 7777,
    event: 'Hot',
  },
];

let tabsData = [
  {
    id: 0,
    label: 'All',
  },
  {
    id: 1,
    label: 'Newest',
  },
  {
    id: 2,
    label: 'Hot',
  },
];

let tabsRightData = [
  {
    id: 0,
    label: 'Card',
    svg: (
      <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22 9.51805V4.97805C22 3.56805 21.36 2.99805 19.77 2.99805H15.73C14.14 2.99805 13.5 3.56805 13.5 4.97805V9.50805C13.5 10.928 14.14 11.488 15.73 11.488H19.77C21.36 11.498 22 10.928 22 9.51805Z'
          fill='#162029'
        />
        <path
          d='M22 20.768V16.728C22 15.138 21.36 14.498 19.77 14.498H15.73C14.14 14.498 13.5 15.138 13.5 16.728V20.768C13.5 22.358 14.14 22.998 15.73 22.998H19.77C21.36 22.998 22 22.358 22 20.768Z'
          fill='#162029'
        />
        <path
          d='M10.5 9.51805V4.97805C10.5 3.56805 9.86 2.99805 8.27 2.99805H4.23C2.64 2.99805 2 3.56805 2 4.97805V9.50805C2 10.928 2.64 11.488 4.23 11.488H8.27C9.86 11.498 10.5 10.928 10.5 9.51805Z'
          fill='#162029'
        />
        <path
          d='M10.5 20.768V16.728C10.5 15.138 9.86 14.498 8.27 14.498H4.23C2.64 14.498 2 15.138 2 16.728V20.768C2 22.358 2.64 22.998 4.23 22.998H8.27C9.86 22.998 10.5 22.358 10.5 20.768Z'
          fill='#162029'
        />
      </svg>
    ),
  },
  {
    id: 1,
    label: 'Row',
    svg: (
      <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19.9 14.498H4.1C2.6 14.498 2 15.138 2 16.728V20.768C2 22.358 2.6 22.998 4.1 22.998H19.9C21.4 22.998 22 22.358 22 20.768V16.728C22 15.138 21.4 14.498 19.9 14.498Z'
          fill='#162029'
        />
        <path
          d='M19.9 2.99805H4.1C2.6 2.99805 2 3.63805 2 5.22805V9.26805C2 10.858 2.6 11.498 4.1 11.498H19.9C21.4 11.498 22 10.858 22 9.26805V5.22805C22 3.63805 21.4 2.99805 19.9 2.99805Z'
          fill='#162029'
        />
      </svg>
    ),
  },
];

const Collections = () => {
  const itemsPerPage = 6;
  const [tableMode, setTableMode] = useState('Card');
  const [activeMenuItem, setActiveMenuItem] = useState('All');
  const [screeWidth, setScreenWidth] = useState(window.innerWidth);
  const [tableData, setTableData] = useState(nftCollectionsData);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleTableData = tableData.slice(startIndex, endIndex);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  let content = (
    <div className={styles.Collection__tableWrap}>
      <Table
        tableLabels={['Collection', 'Volume', 'Lowest', 'Highest', 'Items', 'Supply']}
        tableData={tableData}
        type={'nft_collections'}
      />
    </div>
  );

  const filterTableHandler = status => {
    const filtered = nftCollectionsData.filter(item => {
      if (status == 'All') {
        return item;
      }
      if (status == item.event) {
        return item;
      }
    });
    setTableData(filtered);
    setActiveMenuItem(status);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const switchTableModeHandler = status => {
    setTableMode(status);
    setActiveMenuItem(status);
  };

  // if (screeWidth < 1200) {
  //   content = (
  //     <div className={styles.collections__mobile}>
  //       {nftCollectionsData.map(item => {
  //         return <ListItemRow key={item.id + 'mobile'} data={item} type={'nft_collections_mobile'} />;
  //       })}
  //     </div>
  //   );
  // }
  const collectionIcon = (
    <svg width='16' height='9' viewBox='0 0 16 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14.5999 1.45703L9.16657 6.89037C8.5249 7.53203 7.4749 7.53203 6.83324 6.89037L1.3999 1.45703'
        stroke='#212121'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );

  return (
    <div className={`${styles.NftCollections} ${styles.container} container`}>
      <ArrowBtn route={'nfts'} direction={'back'} />
      <p className={`${styles.Collection__title} ttl`}>Collections</p>
      <div className={styles.Collection__filtres}>
        <div className={styles.Collection__rightPanel}>
          <TabFilter
            onClick={switchTableModeHandler}
            activeMenu={activeMenuItem}
            data={tabsRightData}
            css={{
              wrap: filterStyles.Collections__filterWrap,
              filter: filterStyles.Collections__filter,
              active: filterStyles.Collections__filterActive,
              item: filterStyles.Collections__filter__item,
            }}
            showCloseButton={false}
            allowMultipleTabs={false}
            showClearButton={false}
          />
        </div>
        <Menu
          menuButton={
            <MenuButton onClick={toggleMenu} className={`${styles.dropdownMenu} ${menuIsOpen ? styles.openMenu : ''}`}>
              Collection
              <div className={`${styles.Collection__menu__svg} ${menuIsOpen ? styles.rotateSvg : styles.rotateBack}`}>
                {collectionIcon}
              </div>
            </MenuButton>
          }
          onClose={() => setMenuIsOpen(false)}
        >
          <MenuItem>
            <div>
              <TabFilter
                onClick={filterTableHandler}
                activeMenu={activeMenuItem}
                data={tabsData}
                css={{
                  wrap: filterStyles.Collections__filterWrap,
                  filter: filterStyles.Collections__filter,
                  active: filterStyles.Activity__filterActive,
                  item: filterStyles.Activity__filter__item,
                }}
              />
            </div>
          </MenuItem>
        </Menu>
      </div>
      {tableMode === 'Card' ? (
        <div className={styles.Collection__table}>
          {tableData.map(item => {
            return <ListItemCard key={item.id + 'card'} data={item} type={'nft_collections'} />;
          })}
        </div>
      ) : (
        [content]
      )}
      <div className={styles.pagination}>
        <TableElement
          type={'pagination'}
          currentPage={currentPage}
          totalCount={Math.ceil(tableData.length / itemsPerPage)}
          onPageChange={page => setCurrentPage(page)}
          color={'#A6D0DD'}
        />
      </div>
    </div>
  );
};

export default Collections;
