import { useRouter } from 'next/router';
import React, { useState } from 'react';

import TabFilter from '../../../UI/filters/TabFilter';

import styles from './InfoRoutes.module.css';

let tabsData = [
  {
    id: 0,
    label: 'Overview',
  },
  {
    id: 1,
    label: 'Pools',
  },
  {
    id: 2,
    label: 'Tokens',
  },
];

const InfoRoutes = () => {
  const router = useRouter();

  const getCurrentLocation = loc => {
    let returnStatement = '';
    if (loc === '/overview/info') returnStatement = 'Overview';
    if (loc === '/overview/info/pools') returnStatement = 'Pools';
    if (loc.startsWith('/overview/info/pools')) returnStatement = 'Pools';
    if (loc === '/overview/info/tokens') returnStatement = 'Tokens';
    if (loc.startsWith('/overview/info/tokens/')) returnStatement = 'Tokens';
    return returnStatement;
  };

  const [activeMenuItem, setActiveMenuItem] = useState(getCurrentLocation(router.pathname));

  const navigationHandler = route => {
    if (route === 'Overview') {
      router.push('/overview/info');
    } else {
      router.push(`/overview/info/${route.toLowerCase()}`);
    }
    setActiveMenuItem(route);
  };

  return (
    <>
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
    </>
  );
};

export default InfoRoutes;
