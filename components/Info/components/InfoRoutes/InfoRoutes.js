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
    if (loc === '/home/info') returnStatement = 'Overview';
    if (loc === '/home/info/pools') returnStatement = 'Pools';
    if (loc.startsWith('/home/info/pools')) returnStatement = 'Pools';
    if (loc === '/home/info/tokens') returnStatement = 'Tokens';
    if (loc.startsWith('/home/info/tokens/')) returnStatement = 'Tokens';
    return returnStatement;
  };

  const [activeMenuItem, setActiveMenuItem] = useState(getCurrentLocation(router.pathname));

  const navigationHandler = route => {
    if (route === 'Overview') {
      router.push('/home/info');
    } else {
      router.push(`/home/info/${route.toLowerCase()}`);
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
