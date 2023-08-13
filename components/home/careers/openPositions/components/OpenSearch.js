import { Input } from '@catena-network/catena-ui-module';
import React from 'react';
import { useState } from 'react';

import styles from './OpenSearch.module.css';
import set from 'date-fns/set';

const OpenSearch = ({ title, department, location }) => {


  const [selected, setSelected] = useState('All');
  const [active, setActive] = useState('');



  const handleClearFilters = () => {
    setSelected('All');
  };

  console.log(handleClearFilters);


  return (
    <div className='container'>
      <h1 style={{ color: '#162029' }} className='font-90 ttl pT-180'>
        {title}
      </h1>
      <div>
        <div className={styles.openPositions__container}>
          <div className={styles.openPositions__filter}>
            <div className={styles.openPositions__filterTtl}>{department}</div>
            <div className={styles.infoImport}>
              <Input
                onClick={(e) => { console.log(e) }}
                type={"lable-input-select"}
                icon={false}
                // selectData={selectData}
                emptyFieldErr={true}
                // defaultData={defaultData}
                // label={"yourText"}
                // selectHandler={selectHandler}
                selectLabel={selected}
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
                onClick={(e) => { console.log(e) }}
                type={"lable-input-select"}
                icon={false}
                // selectData={selectData}
                emptyFieldErr={true}
                // defaultData={defaultData}
                // label={"yourText"}
                // selectHandler={selectHandler}
                selectLabel={selected}
                selectType={'country'}
                active={active}
                status={"warning"}
                title={"your text"}
                color={"#FFA726"}
              // customStyles={{ width: "320px" }}
              />
            </div>
          </div>
          <div onClick={() => setActive(false)} className={styles.openPositions__filterClear}>Clear filter</div>
        </div>
      </div>
    </div>
  );
};

export default OpenSearch;
