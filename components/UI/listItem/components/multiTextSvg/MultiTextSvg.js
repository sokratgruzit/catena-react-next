import React from 'react';

import listStyles from '../../ListItemRow.module.css';
import styles from './MultiTextSvg.module.css';

const MultiTextSvg = ({ data }) => {
  return (
    <div className={`${listStyles.td} ${styles.section}`}>
      <div>
        <div className={styles.svg}>{data.svg1}</div>
        <div className={`${styles.svg} ${styles.secondSvg}`}>{data?.svg2}</div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{data.title}</p>
        <p className={styles.subTitle}>{data?.subTitle}</p>
      </div>
    </div>
  );
};

export default MultiTextSvg;
