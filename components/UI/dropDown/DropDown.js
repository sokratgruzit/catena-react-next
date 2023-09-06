import React, { useState } from 'react';
import styles from './DropDown.module.css';

const DropDown = ({ category, activeCategory, content, handleCategoryClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.Creator__categories}>
      <div
        className={styles.dropDownLabel}
        onClick={() => {
          toggleDropdown();
          handleCategoryClick(category);
        }}
      >
        <p>{category}</p>
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

      {activeCategory === category && isDropdownOpen && <div className={styles.dropdownContent}>{content}</div>}
    </div>
  );
};

export default DropDown;
