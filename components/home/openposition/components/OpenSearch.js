// import { Input } from '@catena-network/catena-ui-module'
import React from 'react';

import styles from './OpenSearch.module.css';

const OpenSearch = ({ title, department, location }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.mainContainer__description}>
          <h1>{title}</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.openPositions__container}>
          <div className={styles.openPositions__filter}>
            <div className={styles.openPositions__filterTtl}>{department}</div>
            {/* <Input
              type={'lable-input-select'}
              icon={false}
              selectType={'country'}
              selectLabel={'All'}
              status={'warning'}
              title={'your text'}
              color={'#FFA726'}
              customStylesstyless={{ width: '320px', border: '1px solid red' }}
            /> */}
          </div>
          <div className={styles.openPositions__filter}>
            <div className={styles.openPositions__filterTtl}>{location}</div>
            {/* <Input
              type={'lable-input-select'}
              icon={false}
              selectType={'country'}
              selectLabel={'All'}
              status={'warning'}
              title={'your text'}
              color={'#FFA726'}
              customStylesstyless={{ width: '320px' }}
              className={styles.inputStyles}
            /> */}
          </div>
          <div className={styles.openPositions__filterClear}>Clear filter</div>
        </div>
      </div>
    </div>
  );
};

export default OpenSearch;
