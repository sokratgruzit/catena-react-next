import React, { useState } from 'react';
import styles from './DropDownFilter.module.css';
import DropDown from '../dropDown/DropDown';
import NftCreatorPageCategoriesSelectModal from '../../nfts/components/NftCreatorPageCategoriesSelectModal';

const dropdownData = [
  {
    category: 'Background',
    filterItems: [
      { title: 'Tan', count: 830 },
      { title: 'Punk Blue', count: 540 },
    ],
  },
  {
    category: 'Base',
    filterItems: [
      { title: 'Tan', count: 830 },
      { title: 'Punk Blue', count: 540 },
    ],
  },
  {
    category: 'Clothing',
    filterItems: [
      { title: 'Tan', count: 830 },
      { title: 'Punk Blue', count: 540 },
    ],
  },
  {
    category: 'Eyes',
    filterItems: [
      { title: 'Tan', count: 830 },
      { title: 'Punk Blue', count: 540 },
    ],
  },
  {
    category: 'Hat',
    filterItems: [
      { title: 'Tan', count: 830 },
      { title: 'Punk Blue', count: 540 },
    ],
  },
  {
    category: 'Mouth',
    filterItems: [
      { title: 'Tan', count: 830 },
      { title: 'Punk Blue', count: 540 },
    ],
  },
  {
    category: 'Prop',
    filterItems: [
      { title: 'Tan', count: 830 },
      { title: 'Punk Blue', count: 540 },
    ],
  },
];
const DropDownFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [clickedCategory, setClickedCategory] = useState('All');

  const handleCategoryClick = category => {
    setActiveCategory(category);
    setClickedCategory(category);
  };

  return (
    <div className={styles.Creator__categoriesOuter}>
      <div className={styles.Creator__categories}>
        <div className={styles.Creator__switcher}>
          <p
            className={
              activeCategory === 'All'
                ? `${styles.Creator__actived__switcher} `
                : `${styles.Creator__deactived__switcher} `
            }
            onClick={() => handleCategoryClick('All')}
          >
            All
          </p>
          <p
            className={
              activeCategory === 'On Sale'
                ? `${styles.Creator__actived__switcher} activated`
                : `${styles.Creator__deactived__switcher} deactivated`
            }
            onClick={() => handleCategoryClick('On Sale')}
          >
            On Sale
          </p>
        </div>
        <div className={styles.categoriesContent}>
          <div className={styles.Creator__categories__inner}>
            {dropdownData.map(data => (
              <div
                key={data.category}
                className={`${styles.Creator__categories__item} ${
                  clickedCategory === data.category ? styles.activeCategory : ''
                }`}
                onClick={() => handleCategoryClick(data.category)}
              >
                <DropDown
                  category={data.category}
                  activeCategory={activeCategory}
                  content={
                    <NftCreatorPageCategoriesSelectModal
                      styles={styles}
                      searchPlaceholder='Search'
                      selectedTitle='Selected'
                      selectedCategory={data.category}
                      filterItems={data.filterItems}
                    />
                  }
                  handleCategoryClick={handleCategoryClick}
                />
              </div>
            ))}
          </div>
          <div className={`${styles.Creator__categories__item} ${styles.lowestPrice}`}>
            <p>Lowest Price</p>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M16.6004 7.45703L11.1671 12.8904C10.5254 13.532 9.47539 13.532 8.83372 12.8904L3.40039 7.45703'
                stroke='#212121'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownFilter;
