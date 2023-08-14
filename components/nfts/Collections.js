import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        img: '../images/nft/nft_collection_items/logo1.png',
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
    img1: '../images/nft/nft_collection_items/fig1.png',
    img2: '../images/nft/nft_collection_items/fig2.png',
    img3: '../images/nft/nft_collection_items/fig3.png',
    logo: '../images/nft/nft_collection_items/logo1.png',
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
        <g opacity='0.6'>
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
        </g>
      </svg>
    ),
  },
  {
    id: 1,
    label: 'Row',
    svg: (
      <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g opacity='0.6'>
          <path
            d='M19.9 14.498H4.1C2.6 14.498 2 15.138 2 16.728V20.768C2 22.358 2.6 22.998 4.1 22.998H19.9C21.4 22.998 22 22.358 22 20.768V16.728C22 15.138 21.4 14.498 19.9 14.498Z'
            fill='#162029'
          />
          <path
            d='M19.9 2.99805H4.1C2.6 2.99805 2 3.63805 2 5.22805V9.26805C2 10.858 2.6 11.498 4.1 11.498H19.9C21.4 11.498 22 10.858 22 9.26805V5.22805C22 3.63805 21.4 2.99805 19.9 2.99805Z'
            fill='#162029'
          />
        </g>
      </svg>
    ),
  },
];

const Collections = () => {
  const [tableMode, setTableMode] = useState('Card');
  const [activeMenuItem, setActiveMenuItem] = useState('All');
  const [screeWidth, setScreenWidth] = useState(window.innerWidth);
  const [tableData, setTableData] = useState(nftCollectionsData);

  let content = (
    <div className={styles.Collection__tableWrap}>
      <img className={styles.gradientBck} src='../images/contribute/backgrounds/bck2.png' />
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
  };

  /*if (screeWidth < 1200) {
    content = (
      <div className={styles.collections__mobile}>
        {nftCollectionsData.map(item => {
          return (
            <ListItemRow
              key={item.id + 'mobile'}
              data={item}
              type={'nft_collections_mobile'}
            />
          );
        })}
      </div>
    );
  }*/

  return (
    <div className={`${styles.NftCollections} ${styles.container} container`}>
      <ArrowBtn route={'nfts'} direction={'back'} />
      <p className={`${styles.Collection__title} ttl font-90`}>Collections</p>
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
          />
          {/* <div className={styles.Collections__menu}>
            <div>
              <Menu
                menuButton={
                  <MenuButton>
                    Collections
                    <svg
                      className={styles.Collections__menu__svg}
                      width='9'
                      height='5'
                      viewBox='0 0 9 5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0.446176 0.479868C0.669333 0.256711 1.03114 0.256711 1.2543 0.479868L4.07681 3.30238C4.18699 3.41255 4.37063 3.41255 4.48081 3.30238L7.30332 0.479868C7.52648 0.256711 7.88828 0.256711 8.11144 0.479868C8.3346 0.703024 8.3346 1.06483 8.11144 1.28799L5.28893 4.1105C4.73244 4.66699 3.82518 4.66699 3.26869 4.1105L0.446176 1.28799C0.223019 1.06483 0.223019 0.703024 0.446176 0.479868Z'
                        fill='white'
                      />
                    </svg>
                  </MenuButton>
                }
                transition
              >
                <MenuItem className={styles.Collections__menu__item}>
                  <Link href='/overview/nfts/activity'>Activity</Link>
                </MenuItem>
                <MenuItem className={styles.Collections__menu__item}>
                  <Link href='/overview/nfts'>Overview</Link>
                </MenuItem>
              </Menu>
            </div>
          </div> */}
        </div>
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
      {tableMode === 'Card' ? (
        <div className={styles.Collection__table}>
          {tableData.map(item => {
            return <ListItemCard key={item.id + 'card'} data={item} type={'nft_collections'} />;
          })}
        </div>
      ) : (
        [content]
      )}
    </div>
  );
};

export default Collections;
