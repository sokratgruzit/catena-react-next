import React from 'react';
import { CoreTag } from '../../../svg';

import styles from './PoolsTableComponent.module.css';

const PoolsTableComponent = ({ item }) => {
  // const item = item.data;
  console.log(item.data);
  return (
    <main className={styles.itemWrapper}>
      <section className={styles.headerSection}>
        <div>
          <h1>{item.data[0].title}</h1>
          <p className={styles.subTitle}>{item.data[0].subTitle}</p>
          {/* <CoreTag /> */}
        </div>
        {item.data[0].svg1}
        {item.data[0].svg2}
      </section>
    </main>
  );
};

export default PoolsTableComponent;
