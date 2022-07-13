import React, { useState } from 'react';
import { useRouter } from 'next/router';

import TabFilter from '../../../UI/filters/TabFilter';
import { StarSVG, GoBackSVG } from '../../../svg/InfoIcons';

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

const InfoRoutes = ({ showStar, prevRoute, text, goBack }) => {
  const router = useRouter();

  const getCurrentLocation = loc => {
    let returnStatement = '';
    if (loc === '/info') returnStatement = 'Overview';
    if (loc === '/info/pools') returnStatement = 'Pools';
    if (loc.startsWith('/info/pools/')) returnStatement = 'Pools';
    if (loc === '/info/tokens') returnStatement = 'Tokens';
    if (loc.startsWith('/info/tokens/')) returnStatement = 'Tokens';
    return returnStatement;
  };

  const [activeMenuItem, setActiveMenuItem] = useState(
    getCurrentLocation(router.pathname),
  );

  const navigationHandler = route => {
    if (route === 'Overview') {
      router.push('/info');
    } else {
      router.push(`/info/${route.toLowerCase()}`);
    }
    setActiveMenuItem(route);
  };

  return (
    <div className={styles.container}>
      <div className={styles.goBackWrapper}>
        {goBack && (
          <div
            onClick={() => router.push(`/info/${prevRoute}`)}
            className={styles.goBackText}
          >
            <GoBackSVG />
            <p>{text}</p>
          </div>
        )}
      </div>
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
      <div className={styles.starWrapper}>
        {showStar && (
          <div
            className={styles.svgWrapper}
            onClick={() => router.push(`/info/${prevRoute}/watchlist`)}
          >
            <StarSVG className={styles.starSVG} />
            <div className={styles.favCount}>3</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoRoutes;
