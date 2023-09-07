import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';

import TabFilter from '../../../UI/filters/TabFilter';

import styles from './TradeRoutes.module.css';
import { StarSvg } from '../../../svg';

let tabsData = [
  {
    id: 0,
    label: 'Trade',
  },
  {
    id: 1,
    label: 'Staking',
  },
];

const TradeRoutes = () => {
  const router = useRouter();

  const getCurrentLocation = loc => {
    let returnStatement = '';
    if (loc === '/overview/trade') returnStatement = 'Trade';
    if (loc === '/overview/trade/staking') returnStatement = 'Staking';
    return returnStatement;
  };

  const [activeMenuItem, setActiveMenuItem] = useState(getCurrentLocation(router.pathname));

  const navigationHandler = route => {
    if (route === 'Trade') {
      router.push('/overview/trade');
    } else {
      router.push(`/overview/trade/${route.toLowerCase()}`);
    }
    setActiveMenuItem(route);
  };

  return (
    <div className={styles.routeContainer}>
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
  );
};

export default TradeRoutes;