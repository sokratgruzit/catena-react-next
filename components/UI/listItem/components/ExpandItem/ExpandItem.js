import React from 'react';

import styles from '../../ListItemRow.module.css';

const ExpandItem = ({ data, itemArr, activeList }) => {
  return (
    <div className={`${styles.mobileRow} ${activeList === data.hash ? styles.activeMobileRow : ''}`}>
      {itemArr.map(item => {
        return (
          <div key={item.name} className={styles.mobileRowItem}>
            <div className={`${styles.mobileRowTtl}`}>{item.name}</div>
            <div className={`${item.name === 'Result' ? styles.resultColor : null} ${styles.mobileRowContent}`}>
              {item.data}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpandItem;
