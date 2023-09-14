import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TabFilter from '../../../UI/filters/TabFilter';

import styles from './EarnRoutes.module.css';

const tabsData = [
  {
    id: 0,
    label: 'Farms',
  },
  {
    id: 1,
    label: 'Pools',
  },
];
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const EarnRoutes = () => {
  const router = useRouter();
  const { locale } = router;
  const account = useSelector(state => state.connect.account);
  const getCurrentLocation = loc => {
    let returnStatement = '';
    if (loc === '/earn/farms') returnStatement = 'Farms';
    if (loc === '/overview/info/pools') returnStatement = 'Pools';
    return returnStatement;
  };
  const [activeRoute, setActiveRoute] = useState(getCurrentLocation(router.pathname));

  const navigationHandler = activeItem => {
    setActiveRoute(capitalizeFirstLetter(activeItem.toLowerCase()));
    if (activeItem.toLowerCase() === 'farms') {
      router.push('/earn/farms', undefined, { locale, address: account });
    } else if (activeItem.toLowerCase() === 'pools') {
      router.push('/overview/info/pools', undefined, { locale, address: account });
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* <CornerDecor /> */}
      <TabFilter
        onClick={navigationHandler}
        data={tabsData}
        activeMenu={activeRoute}
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

export default EarnRoutes;
