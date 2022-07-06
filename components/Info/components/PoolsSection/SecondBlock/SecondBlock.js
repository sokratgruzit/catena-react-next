import React, { useState } from 'react';

import TabFilter from '../../../../UI/filters/TabFilter';

import styles from './SecondBlock.module.css';

let tabsData = [
  {
    id: 0,
    label: '24H',
  },
  {
    id: 1,
    label: '7D',
  },
];

const SecondBlock = ({ data }) => {
  const [activeMenuItem, setactiveMenuItem] = useState('24H');

  const navigationHandler = item => {
    setactiveMenuItem(item);
  };

  return (
    <div className={styles.secondBlock}>
      <div className={styles.topRow}>
        <TabFilter
          onClick={navigationHandler}
          data={tabsData}
          activeMenu={activeMenuItem}
          css={{
            wrap: styles.Activity__filterWrap,
            filter: styles.Activity__filter,
            active: styles.Activity__filterActive,
            item: styles.Activity__filter__item,
          }}
        />
      </div>
      <div className={styles.bottomRow}>
        <div>
          <h4>Volume {activeMenuItem}</h4>
          <p className='font_20'>
            $ {activeMenuItem === '24H' ? data.volume_24h : data.volume_7d} M
          </p>
          <p>up down</p>
        </div>
        <div>
          <h4>LP REWARD FEES {activeMenuItem}</h4>
          <p className='font_20'>
            {activeMenuItem === '24H'
              ? '$' + data.lp_reward_fee_24h + 'M'
              : '$' + data.lp_reward_fee_7d + 'M'}
          </p>
          <p className={styles.lpRewardTotal}>
            Out of{' '}
            {activeMenuItem === '24H'
              ? '$' + data.lp_reward_fee_total_24h + 'M'
              : '$' + data.lp_reward_fee_total_7d + 'M'}{' '}
            total fees
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondBlock;
