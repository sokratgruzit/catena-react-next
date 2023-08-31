import React from 'react';
import styles from './NftCreatorPageCategoriesSelectModal.module.css';

function NftCreatorPageCategoriesSelectModal(props) {
  const { searchPlaceholder, selectedTitle, selectedCategory, filterItems } = props;

  return (
    <div className={styles.nftCreatorPage__categoriesSelectModal}>
      <div className={styles.nftCreatorPage__categoriesSelectModalSearchBar}>
        <input type='text' placeholder={searchPlaceholder} />
        <svg
          className={styles.nftCreatorPage__categoriesSelectModalSearchIcon}
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.62784 15.2557C3.42323 15.2557 0 11.8325 0 7.62784C0 3.42323 3.42323 0 7.62784 0C11.8325 0 15.2557 3.42323 15.2557 7.62784C15.2557 11.8325 11.8325 15.2557 7.62784 15.2557ZM7.62784 1.11627C4.03345 1.11627 1.11627 4.04089 1.11627 7.62784C1.11627 11.2148 4.03345 14.1394 7.62784 14.1394C11.2222 14.1394 14.1394 11.2148 14.1394 7.62784C14.1394 4.04089 11.2222 1.11627 7.62784 1.11627Z'
            fill='#162029'
          />
          <path
            d='M15.4413 15.9993C15.2999 15.9993 15.1585 15.9472 15.0469 15.8355L13.5585 14.3472C13.4547 14.2421 13.3965 14.1004 13.3965 13.9528C13.3965 13.8051 13.4547 13.6634 13.5585 13.5583C13.7743 13.3425 14.1315 13.3425 14.3473 13.5583L15.8357 15.0467C16.0515 15.2625 16.0515 15.6197 15.8357 15.8355C15.7241 15.9472 15.5827 15.9993 15.4413 15.9993Z'
            fill='#162029'
          />
        </svg>
      </div>
      <div className={styles.nftCreatorPage__categoriesSelectModalSelected}>
        <p className={styles.nftCreatorPage__categoriesSelectModalSelectedTitle}>{selectedTitle}</p>
        <div className={styles.nftCreatorPage__categoriesSelectModalSelectedTitleFiltred}>
          <p className={styles.nftCreatorPage__categoriesSelectModalSelectedTitleActived}>{selectedCategory}</p>
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_2308_1110)'>
              <path
                d='M8.00065 14.6673C11.6673 14.6673 14.6673 11.6673 14.6673 8.00065C14.6673 4.33398 11.6673 1.33398 8.00065 1.33398C4.33398 1.33398 1.33398 4.33398 1.33398 8.00065C1.33398 11.6673 4.33398 14.6673 8.00065 14.6673Z'
                stroke='#162029'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.11328 9.88661L9.88661 6.11328'
                stroke='#162029'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M9.88661 9.88661L6.11328 6.11328'
                stroke='#162029'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_2308_1110'>
                <rect width='16' height='16' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className={styles.nftCreatorPage__categoriesSelectModalFilter}>
        {filterItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.nftCreatorPage__categoriesSelectModalFilter__item} ${styles.nftCreatorPage__categoriesSelectModalFilter__itemHover}`}
          >
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle opacity='0.6' cx='10' cy='10' r='9.25' stroke='#162029' strokeWidth='1.5' />
            </svg>
            <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitle}>{item.title}</p>
            <p className={styles.nftCreatorPage__categoriesSelectModalFilter__itemTitleNumb}>{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NftCreatorPageCategoriesSelectModal;
