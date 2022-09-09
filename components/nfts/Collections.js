import React, { useState, useEffect } from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Link from 'next/link';

import ListItemCard from '../UI/listItem/ListItemCard';
import Table from '../UI/table/Table';
import TabFilter from '../UI/filters/TabFilter';
import filterStyles from '../UI/filters/TabFilter.module.css';
import ArrowBtn from '../UI/button/ArrowBtn';
import ListItemRow from '../UI/listItem/ListItemRow';

import styles from './Collections.module.css';

const nftCollectionsData = [
  {
    id: 0,
    data: [
      {
        title: 'The AKC',
        img: '../images/nft/nft_collection_items/logo1.png',
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
    event: 'Hot'
  },
  {
    id: 1,
    data: [
      {
        title: 'The AKC',
        img: '../images/nft/nft_collection_items/logo1.png',
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
        type: 'img_text'
      },
      {
        symbol: 'CMCX',
        priceInCmcx: '0.0024',
        type: 'price'
      },
      {
        text: '0.198',
        type: 'text'
      },
      {
        text: '10,000',
        type: 'text'
      },
      {
        text: 824,
        type: 'text'
      },
      {
        text: 7777,
        type: 'text'
      }
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
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.1592 1.58002L10.1592 6.95202C10.1592 7.46202 10.6712 7.66602 11.9432 7.66602L15.1752 7.66602C16.4472 7.66602 16.9592 7.46202 16.9592 6.95202L16.9592 1.58002C16.9592 1.07002 16.4472 0.866018 15.1752 0.866018L11.9432 0.866018C10.6712 0.866018 10.1592 1.07002 10.1592 1.58002Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.1592 10.7812L10.1592 16.1532C10.1592 16.6632 10.6712 16.8672 11.9432 16.8672L15.1752 16.8672C16.4472 16.8672 16.9592 16.6632 16.9592 16.1532L16.9592 10.7812C16.9592 10.2712 16.4472 10.0672 15.1752 10.0672L11.9432 10.0672C10.6712 10.0672 10.1592 10.2712 10.1592 10.7812Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M0.958984 1.58197L0.958984 6.95397C0.958984 7.46397 1.47098 7.66797 2.74298 7.66797L5.97498 7.66797C7.24698 7.66797 7.75898 7.46397 7.75898 6.95397L7.75898 1.58197C7.75898 1.07197 7.24698 0.86797 5.97498 0.86797L2.74298 0.86797C1.47098 0.86797 0.958984 1.07197 0.958984 1.58197Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M0.958984 10.7812L0.958984 16.1532C0.958984 16.6632 1.47098 16.8672 2.74298 16.8672L5.97498 16.8672C7.24698 16.8672 7.75898 16.6632 7.75898 16.1532L7.75898 10.7812C7.75898 10.2712 7.24698 10.0672 5.97498 10.0672L2.74298 10.0672C1.47098 10.0672 0.958984 10.2712 0.958984 10.7812Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    id: 1,
    label: 'Row',
    svg: (
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15.279 10.0664H2.63898C1.43898 10.0664 0.958984 10.5784 0.958984 11.8504V15.0824C0.958984 16.3544 1.43898 16.8664 2.63898 16.8664H15.279C16.479 16.8664 16.959 16.3544 16.959 15.0824V11.8504C16.959 10.5784 16.479 10.0664 15.279 10.0664Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.279 0.867188H2.63898C1.43898 0.867188 0.958984 1.37919 0.958984 2.65119V5.88319C0.958984 7.15519 1.43898 7.66719 2.63898 7.66719H15.279C16.479 7.66719 16.959 7.15519 16.959 5.88319V2.65119C16.959 1.37919 16.479 0.867188 15.279 0.867188Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
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
      <img
        className={styles.gradientBck}
        src='../images/contribute/backgrounds/bck2.png'
      />
      <Table
        tableLabels={[
          'Collection',
          'Volume',
          'Lowest',
          'Highest',
          'Items',
          'Supply',
        ]}
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
    <div className={`${styles.NftCollections} ${styles.container}`}>
      <img
        className={styles.Collections__bckground}
        src='../images/nft/background/bckOfNftCollection.png'
      />
      <ArrowBtn route={'nfts'} direction={'back'} />
      <p className={`${styles.Collection__title} font-30`}>Collections</p>
      <div className={styles.Collection__filtres}>
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
          <div className={styles.Collections__menu}>
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
                  <Link href='/nfts/activity'>Activity</Link>
                </MenuItem>
                <MenuItem className={styles.Collections__menu__item}>
                  <Link href='/nfts'>Overview</Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      {tableMode === 'Card' ? (
        <div className={styles.Collection__table}>
          {tableData.map(item => {
            return (
              <ListItemCard
                key={item.id + 'card'}
                data={item}
                type={'nft_collections'}
              />
            );
          })}
        </div>
      ) : (
        [content]
      )}
    </div>
  );
};

export default Collections;
