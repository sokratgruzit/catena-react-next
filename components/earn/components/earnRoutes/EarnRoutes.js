import { useRouter } from 'next/router';
import React, { useState } from 'react';

// import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
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
      router.push('/earn/farms');
    } else if (activeItem.toLowerCase() === 'pools') {
      router.push('/overview/info/pools');
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
