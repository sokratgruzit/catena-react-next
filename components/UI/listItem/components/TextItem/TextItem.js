import React from 'react';

import styles from '../../ListItemRow.module.css';

const TextItem = ({ text }) => {
  return <div className={`${styles.td} ${styles.textItem}`}>{text}</div>;
};

export default TextItem;
