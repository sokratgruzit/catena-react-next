import React from 'react';

import styles from './PriceItem.module.css';
import listStyles from '../../ListItemRow.module.css';

const PriceItem = ({ data }) => {
  return (
    <div className={`${styles.TableRow__titles} ${listStyles.td}`}>
      <p>
        <span>{data?.title}</span>
        {data?.priceCoin}
      </p>
      <p>{data?.priceDollar}</p>
    </div>
  );
};

export default PriceItem;
