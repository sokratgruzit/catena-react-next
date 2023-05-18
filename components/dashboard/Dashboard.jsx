import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// api
import axios from "axios";

// hooks
import { useMobileWidth } from "../../hooks/useMobileWidth";

// styles
import styles from "./Dashboard.module.css";
import BlocksProducedChart from "./components/BlocksProducedChart/BlocksProducedChart";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import CPUstats from "./components/CPUstats/CPUstats";
import {
  BlocksIcon,
  DashboardIcon,
  DocsIcon,
  ProfileIcon,
  RewardsCalcIcon,
  ValidatorsListIcon,
} from "../svg";
import CurrentRanking from "./components/CurrentStats/CurrentRanking";
import CurrentVotes from "./components/CurrentStats/CurrentVotes";
import NodeDetails from "./components/NodeDetails/NodeDetails";
import SoftwareStatus from "./components/SoftwareStatus/SoftwareStatus";
import HardwareStatus from "./components/HardwareStatus/HardwareStatus";
import Table from "./components/Table/Table";
import BlockchainProvingTimeChart from "./components/BlockchainProvingTimeChart/BlockchainProvingTimeChart";
//
const Dashboard = () => {
  const [sortBy, setSortBy] = useState("Validated Blocks");
  const [animate, setAnimate] = useState(false);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [totalPages, setTotalPages] = useState(1);
  //   const [td, setTd] = useState([]);
  const { width } = useMobileWidth();
  const router = useRouter();

  useEffect(() => {
    setAnimate(true);
  }, []);

  let td = [
    {
      _id: "123132131a0dmsmdasd",
      fullname: "",
      stake: "-",
      cumulativeStake: "",
      totalStake: `-`,
    },
    {
      _id: "123132139991admsmdasd",
      fullname: "",
      stake: "-",
      cumulativeStake: "",
      totalStake: `-`,
    },
    {
      _id: "1231321123131admsmdasd",
      fullname: "",
      stake: "-",
      cumulativeStake: "",
      totalStake: `-`,
    },
  ];

  let tableMoreTd = [
    {
      _id: "1231321331a0dmsmdasd",
      publicKey: "-",
      name: "-",
      shard: "-",
      version: "-",
      ignoredSignatures: `-`,
      status: "Inactive",
      rating: "-",
      nonce: "-",
    },
    {
      _id: "1231322139991admsmdasd",
      publicKey: "-",
      name: "-",
      shard: "-",
      version: "-",
      ignoredSignatures: `-`,
      status: "Inactive",
      rating: "-",
      nonce: "-",
    },
    {
      _id: "12313121123131admsmdasd",
      publicKey: "-",
      name: "-",
      shard: "-",
      version: "-",
      ignoredSignatures: `-`,
      status: "Inactive",
      rating: "-",
      nonce: "-",
    },
  ];

  let validatedBlocksTd = [
    {
      _id: "12313210mdasd",
      block: "-",
      age: "-",
      transaction: "-",
      gas: `-`,
      rewards: `-`,
    },
    {
      _id: "12139991admsmdasd",
      block: "-",
      age: "-",
      transaction: "-",
      gas: `-`,
      rewards: `-`,
    },
    {
      _id: "123131admmdasd",
      block: "-",
      age: "-",
      transaction: "-",
      gas: `-`,
      rewards: `-`,
    },
  ];

  const sortByButtons = [
    {
      title: "Validated Blocks",
    },
    {
      title: "Delegators",
    },
  ];

  return (
    <div className={`${styles.mainContainer} ${animate ? styles.animate : ""}`}>
      <div className={styles.sidebar}>
        <ul className={styles.unorderedList}>
          <li className={styles.chosen}>
            <DashboardIcon className={styles.dashboardListIcon} />{" "}
            <p>Dashboard</p>
          </li>
          <li onClick={() => router.push("/validators")}>
            <ValidatorsListIcon className={styles.dashboardListIcon} />{" "}
            <p>Validators List</p>
          </li>
          <li onClick={() => router.push("/calculator")}>
            <RewardsCalcIcon className={styles.dashboardListIcon} />
            <p>Rewards Calculator</p>
          </li>
          <li>
            <BlocksIcon className={styles.dashboardListIcon} />
            <p>Blocks</p>
          </li>
          <li>
            <DocsIcon className={styles.dashboardListIcon} />
            <p>Docs</p>
          </li>
          <li>
            <ProfileIcon className={styles.dashboardListIcon} />
            <p>Profile</p>
          </li>
        </ul>
      </div>
      <div className={`${styles.mainContentWrap}`}>
        <header className={styles.header}>
          <div className={styles.mainCards}>
            <div className={styles.balanceCardWrapper}>
              <BalanceCard />
            </div>
            {width < 1300 && (
              <div className={styles.currentCardsWrapper}>
                <div className={styles.currentRankingWrapper}>
                  <CurrentRanking />
                </div>
                <div className={styles.currentVotesWrapper}>
                  <CurrentVotes />
                </div>
              </div>
            )}
            <div className={styles.nodeDetailsWrapper}>
              <NodeDetails />
            </div>
          </div>
          {width >= 1300 && (
            <div className={styles.currentCardsWrapper}>
              <div className={styles.currentRankingWrapper}>
                <CurrentRanking />
              </div>
              <div className={styles.currentVotesWrapper}>
                <CurrentVotes />
              </div>
            </div>
          )}
        </header>
        <div className={styles.softwareStatusWrapper}>
          <SoftwareStatus />
        </div>
        <div className={styles.chartsWrapper}>
          <BlocksProducedChart />
          <BlockchainProvingTimeChart />
        </div>
        <HardwareStatus />
        <div className={styles.tableWrapper}>
          <div
            className={styles.sortByButtons}
            data-aos='fade-up'
            data-aos-delay='20'>
            {sortByButtons.map((item, index) => (
              <button
                className={`${styles.sortByButton} ${
                  sortBy == item.title ? styles.sortByButtonActive : ""
                }`}
                key={index}
                onClick={() => setSortBy(item.title)}>
                {item.title}
              </button>
            ))}
          </div>
          <Table
            delegatorsTd={td}
            delegatorsTableMoreTd={tableMoreTd}
            validatedBlocksTd={validatedBlocksTd}
            sortBy={sortBy}
            validatedBlocksCurrentPage={1}
            validatedBlocksTotalCount={5}
            validatedBlocksOnPageChange={(page) => console.log(page)}
            delegatorsCurrentPage={1}
            delegatorsTotalCount={4}
            delegatorsOnPageChange={(page) => console.log(page)}
            validatedBlocksLoading={false}
            delegatorsLoading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
