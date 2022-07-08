import React from 'react';
import styles from './Watchlist.module.css';

const Watchlist = () => {
  return (
    <>
      <h2 className={`font_30`}>Your Watchlist</h2>
      <div className={styles.savedPoolsWrapper}>
        <h3>Saved pools will appear here</h3>
        <div className={styles.savedPools}></div>
      </div>
    </>
  );
};

export default Watchlist;
