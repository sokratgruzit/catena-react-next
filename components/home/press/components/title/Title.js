import React from 'react';

import styles from './Title.module.css';

const Title = props => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer__description}>
        <div className={styles.left}>
          <h1>
            {/* <div className={styles.ttl_row}> */}
            <span className={styles.ttl_red}>{props.spanOne}</span>
            {/* </div> */}
            <span className={styles.pressLeft}>{props.spanTwo}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Title;
