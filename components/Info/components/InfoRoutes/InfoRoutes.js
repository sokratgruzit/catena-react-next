import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import TabFilter from '../../../UI/filters/TabFilter';
import { Tabs } from '@catena-network/catena-ui-module';

import styles from './InfoRoutes.module.css';

let tabsDataii = [
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
  const [activeTab, setActiveTab] = useState(0);
  const [activeRoute, setActiveRoute] = useState(null);

  let tabsData = [
    {
      title: "Overview",
      id: 0,
      onClick: (id) => handleTab(id),
    },
    {
      title: "Pools",
      id: 1,
      onClick: (id) => handleTab(id),
    },
    {
      title: "Tokens",
      id: 2,
      onClick: (id) => handleTab(id),
    },
  ];

  const handleTab = (id) => {
    tabsData.filter((tab) => {
      if (tab.id === id) {
        setActiveTab(id);
      }
      if(tab.id === 0) {
        router.push('/overview/info')
        setActiveRoute('/overview/info')
      }
      if(tab.id === 1) {
        router.push('/overview/info/pools')
        setActiveRoute('/overview/pools')

      }
      if(tab.id === 2) {
        router.push('/overview/info/tokens')
        setActiveRoute('/overview/tokens')

      }

      return tab;
    });
  };


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

  useEffect(() => {

  }, [activeRoute])
  return (
    <>
      <div className={styles.routesWrapperMain}>
        <TabFilter
          onClick={navigationHandler}
          data={tabsDataii}
          activeMenu={activeMenuItem}
          css={{
            wrap: styles.Activity__filterWrap,
            filter: styles.Activity__filter,
            active: styles.Activity__filterActive,
            item: styles.Activity__filter__item,
          }}
        />
        {/* <Tabs
        type={"dynamic-tabs"}
        tabsData={tabsData}
        activeTab={activeTab}
        onClick={() => console.log("hi")}
      /> */}
      </div>
    </>
  );
};

export default InfoRoutes;
