import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import styles from './TradeRoutes.module.css';
import TabFilter from '../../../UI/filters/TabFilter';

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
  const account = useSelector(state => state.connect.account);
  const { locale } = router;

  const getCurrentLocation = loc => {
    let returnStatement = '';
    if (loc === '/overview/trade') returnStatement = 'Trade';
    if (loc === '/overview/trade/staking') returnStatement = 'Staking';
    if (loc.startsWith('/overview/trade/staking')) returnStatement = 'Staking';
    return returnStatement;
  };

  const [activeMenuItem, setActiveMenuItem] = useState(getCurrentLocation(router.pathname));
  console.log(activeMenuItem, 'activeMenuItem')

  const navigationHandler = route => {
    if (route === 'Trade') {
      router.push('/overview/trade', undefined, { locale, address: account });
    } else {
      router.push(`/overview/trade/${route.toLowerCase()}`, undefined, { locale, address: account });
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