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
      onClick: () => handleTab(0),
    },
    {
      title: "Pools",
      id: 1,
      onClick: () => handleTab(1),
    },
    {
      title: "Tokens",
      id: 2,
      onClick: () => handleTab(2),
    },
  ];
  

  const handleTab = (id) => {
    setActiveTab(id);

    if (id === 0) {
      router.push("/overview/info");
    } else if (id === 1) {
      router.push("/overview/info/pools");
    } else if (id === 2) {
      router.push("/overview/info/tokens");
    }
  };

  useEffect(() => {
    if (router.pathname === "/overview/info") {
      setActiveTab(0);
    } else if (router.pathname === "/overview/info/pools") {
      setActiveTab(1);
    } else if (router.pathname === "/overview/info/tokens") {
      setActiveTab(2);
    }
  }, [router.pathname]);

  return (
    <div className={styles.routesWrapperMain}>
      <Tabs
        type={"dynamic-tabs"}
        tabsData={tabsData}
        activeTab={activeTab}
        onClick={(id) => handleTab(id)}
      />
    </div>
  );
};

export default InfoRoutes;
