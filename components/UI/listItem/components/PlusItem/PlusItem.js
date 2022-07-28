import React from 'react';

import styles from '../../ListItemRow.module.css';

const PlusItem = ({ hash, activeList }) => {
  return (
    <div
      className={`${styles.plusIcon} ${
        activeList === hash ? styles.activePlusIcon : ''
      }`}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default PlusItem;
