import React from 'react';

import styles from './ExpandItemRow.module.css';

const ExpandItemRow = props => {
  const item = props.item;
  console.log(item);
  if (props.type === 'earn_pools') {
    // cs = styles.earn_pools;
  }
  return <div></div>;
};

export default ExpandItemRow;
