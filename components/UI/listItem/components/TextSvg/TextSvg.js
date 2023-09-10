import React from 'react';

import styles from './TextSvg.module.css';
import { useSelector } from 'react-redux';
import listStyles from '../../ListItemRow.module.css';

const TextSvg = ({ data }) => {
  return (
    <div className={`${styles.TableRow__date} ${listStyles.td}`}>
      <p>{data?.title},</p>
      <p>{data?.subTitle}</p>
      {/* <Link href={`/sometransaction`}> */}
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18.5399 15.1046C18.6742 14.9703 18.7591 14.7864 18.7591 14.5743L18.7591 5.99003C18.7579 5.7916 18.6785 5.60164 18.5382 5.46133C18.3979 5.32101 18.208 5.24167 18.0095 5.2405L9.42525 5.2405C9.01513 5.2405 8.67572 5.57991 8.67572 5.99003C8.67572 6.40015 9.01513 6.73956 9.42525 6.73956L17.26 6.73956L17.26 14.5743C17.26 14.9844 17.5994 15.3238 18.0095 15.3238C18.2146 15.3309 18.4055 15.239 18.5399 15.1046Z'
          fill='#212121'
        />
        <path
          d='M6.51913 18.5404L18.4197 6.63982C18.7096 6.3499 18.7096 5.86907 18.4197 5.57916C18.1298 5.28924 17.649 5.28924 17.3591 5.57916L5.45847 17.4798C5.16855 17.7697 5.16855 18.2505 5.45847 18.5404C5.74838 18.8303 6.22921 18.8303 6.51913 18.5404Z'
          fill='#212121'
        />
      </svg>

      {/* </Link> */}
    </div>
  );
};

export default TextSvg;
