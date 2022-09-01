import React from 'react';

import styles from './ImgTextItem.module.css';
import listStyles from '../../ListItemRow.module.css';

const ImgTextItem = ({ data, darkened, onClick }) => {
  return (
    <div
      className={` ${listStyles.imgTextItem} ${listStyles.td} ${styles.imgTextItem}`}
      onClick={onClick}
    >
      <picture>
        <img src={data.img} alt='pic' className={styles.img} />
      </picture>
      <div className={listStyles.imgTextWrap}>
        <p className={listStyles.imgTextTitle}>{data.title}</p>
        <p
          className={`${listStyles.imgTextSubTitle} ${
            darkened ? styles.darkened : ''
          }`}
        >
          {data.subTitle}
        </p>
      </div>
    </div>
  );
};

export default ImgTextItem;
