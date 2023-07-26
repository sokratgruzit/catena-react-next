import { Input } from '@catena-network/catena-ui-module';
import React from 'react';

import styles from './OpenSearch.module.css';

const OpenSearch = ({ title, department, location }) => {
  return (
    <div className='container'>
      <h1 style={{ marginTop: '194px', color: '#162029' }} className='font-90 ttl'>
        {title}
      </h1>
      <div>
        <div className={styles.openPositions__container}>
          <div className={styles.openPositions__filter}>
            <div className={styles.openPositions__filterTtl}>{department}</div>
            <div className={styles.infoImport}>
              <Input
                onClick={() => { console.log('rame') }}
                type={"lable-input-select"}
                icon={false}
                // selectData={selectData}
                emptyFieldErr={true}
                // defaultData={defaultData}
                // label={"yourText"}
                // selectHandler={selectHandler}
                selectLabel={"All"}
                selectType={'country'}
                // active={active}
                status={"warning"}
                title={"your text"}
                color={"#FFA726"}
              // customStyles={{ width: "320px" }}
              />
            </div>
          </div>
          <div className={styles.openPositions__filter}>
            <div className={styles.openPositions__filterTtl}>{location}</div>
            <div className={styles.infoImport}>
              <Input
                onClick={() => { console.log('rame') }}
                type={"lable-input-select"}
                icon={false}
                // selectData={selectData}
                emptyFieldErr={true}
                // defaultData={defaultData}
                // label={"yourText"}
                // selectHandler={selectHandler}
                selectLabel={"All"}
                selectType={'country'}
                // active={active}
                status={"warning"}
                title={"your text"}
                color={"#FFA726"}
              // customStyles={{ width: "320px" }}
              />
            </div>
          </div>
          <div className={styles.openPositions__filterClear}>Clear filter</div>
        </div>
      </div>
    </div>
  );
};

export default OpenSearch;
