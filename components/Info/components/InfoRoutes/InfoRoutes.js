import React, { useState, useEffect } from 'react';
import { Tabs } from '@catena-network/catena-ui-module';
import { useRouter } from 'next/router';

import styles from './InfoRoutes.module.css';

const InfoRoutes = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const tabsData = [
    {
      title: "Overview",
      id: 0,
    },
    {
      title: "Pools",
      id: 1,
    },
    {
      title: "Tokens",
      id: 2,
    },
  ];

  const handleTabChange = (id) => {
    setActiveTab(id);
    switch (id) {
      case 0:
        router.push("/overview/info");
        break;
      case 1:
        router.push("/overview/info/pools");
        break;
      case 2:
        router.push("/overview/info/tokens");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Map the current pathname to the active tab
    const pathToTabId = {
      "/overview/info": 0,
      "/overview/info/pools": 1,
      "/overview/info/tokens": 2,
    };
    setActiveTab(pathToTabId[router.pathname] || 0);
  }, [router.pathname]);

  return (
    <div className={styles.routesWrapperMain}>
      <Tabs
        type="dynamic-tabs"
        tabsData={tabsData}
        activeTab={activeTab}
        onClick={handleTabChange}
      />
    </div>
  );
};

export default InfoRoutes;
