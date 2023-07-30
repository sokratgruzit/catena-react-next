import React, { useState } from 'react';

import styles from './CustomSelect.module.css'; // Create a new CSS module for this component

const CustomSelect = ({ options, handleSelectChange, selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = option => {
    handleSelectChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.selected}>{selected || 'Select nationality'}</div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map(option => (
            <li key={option} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
