import React from 'react';

import styles from '../../ListItemRow.module.css';

const TextItem = ({ text, className }) => {
  return (
    <div className={`${styles.td} ${styles.textItem} ${className}`}>{text}</div>
  );
};

export default TextItem;
