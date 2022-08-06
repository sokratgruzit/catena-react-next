import React from 'react';

import styles from '../../ListItemRow.module.css';

const TextItem = (props) => {
  return <div className={`${styles.td} ${styles.textItem}`}>{props.data.text}</div>;
};

export default TextItem;
