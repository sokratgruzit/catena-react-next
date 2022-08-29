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
        </div>
        <div className={styles.logoWrapper}>
          {item.data[0].svg1}
          {item.data[0].svg2}
        </div>
      </section>
      <section>
        <div className={styles.itemRow}>
          <p>{item.data[1].text3}</p>
          <p>{item.data[1].text}</p>
          <p>{item.data[1].text2}</p>
        </div>
        <div className={styles.itemRow}>
          <p>{item.data[2].text3}</p>
          <p>{item.data[2].text}</p>
          <p>{item.data[2].text2}</p>
        </div>
        <div className={styles.itemRow}>
          <p>{item.data[3].subTitle}</p>
          <p>{item.data[3].title}</p>
        </div>
      </section>
    </main>
  );
};

export default PoolsTableComponent;
