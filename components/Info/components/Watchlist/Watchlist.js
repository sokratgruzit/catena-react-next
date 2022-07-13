import React from 'react';
import styles from './Watchlist.module.css';

const Watchlist = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={`font_30`}>Your Watchlist</h2>
      <div className={styles.savedPoolsWrapper}>
        <h3>Saved pool will appear here</h3>
        <div className={styles.savedPools}></div>
      </div>
    </div>
  );
};

export default Watchlist;
