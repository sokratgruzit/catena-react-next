import React, { useState } from 'react';
import TabFilter from '../../UI/filters/TabFilter';
import styles from './Prediction.module.css';
import filterStyles from '../../UI/filters/TabFilter.module.css';

let tabsData = [
  {
    id: 0,
    label: 'Trading Compatition',
  },
  {
    id: 1,
    label: 'Prediction',
  },
  {
    id: 2,
    label: 'Lottery',
  },
];

const Prediction = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Trading Compatition');

  const changeTabHendler = status => {
    setActiveMenuItem(status);
  };

  return (
    <div className={`container`}>
      <TabFilter
        onClick={changeTabHendler}
        activeMenu={activeMenuItem}
        data={tabsData}
        css={{
          wrap: filterStyles.Prediction__filterWrap,
          filter: filterStyles.Activity__filter,
          active: filterStyles.Prediction__filterActive,
          item: filterStyles.Activity__filter__item,
        }}
      />
    </div>
  );
};

export default Prediction;
