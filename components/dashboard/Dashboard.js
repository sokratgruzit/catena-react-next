import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import BalanceCard from './components/balanceCard/BalanceCard';
import BlockchainProvingTimeChart from './components/blockchainProvingTimeChart/BlockchainProvingTimeChart';
import BlocksProducedChart from './components/blocksProducedChart/BlocksProducedChart';
import CurrentRanking from './components/currentStats/CurrentRanking';
import CurrentVotes from './components/currentStats/CurrentVotes';
import HardwareStatus from './components/hardwareStatus/HardwareStatus';
import NodeDetails from './components/nodeDetails/NodeDetails';
import SoftwareStatus from './components/softwareStatus/SoftwareStatus';
import Table from './components/table/Table';
import { useMobileWidth } from '../../hooks/useMobileWidth';
import { BlocksIcon, DashboardIcon, DocsIcon, ProfileIcon, RewardsCalcIcon, ValidatorsListIcon } from '../svg';

import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [sortBy, setSortBy] = useState('Validated Blocks');
  const [animate, setAnimate] = useState(false);
  const { locale } = router;
  const account = useSelector(state => state.connect.account);
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
      _id: '123132131a0dmsmdasd',
      fullname: '',
      stake: '-',
      cumulativeStake: '',
      totalStake: `-`,
    },
    {
      _id: '123132139991admsmdasd',
      fullname: '',
      stake: '-',
      cumulativeStake: '',
      totalStake: `-`,
    },
    {
      _id: '1231321123131admsmdasd',
      fullname: '',
      stake: '-',
      cumulativeStake: '',
      totalStake: `-`,
    },
  ];

  let tableMoreTd = [
    {
      _id: '1231321331a0dmsmdasd',
      publicKey: '-',
      name: '-',
      shard: '-',
      version: '-',
      ignoredSignatures: `-`,
      status: 'Inactive',
      rating: '-',
      nonce: '-',
    },
    {
      _id: '1231322139991admsmdasd',
      publicKey: '-',
      name: '-',
      shard: '-',
      version: '-',
      ignoredSignatures: `-`,
      status: 'Inactive',
      rating: '-',
      nonce: '-',
    },
    {
      _id: '12313121123131admsmdasd',
      publicKey: '-',
      name: '-',
      shard: '-',
      version: '-',
      ignoredSignatures: `-`,
      status: 'Inactive',
      rating: '-',
      nonce: '-',
    },
  ];

  let validatedBlocksTd = [
    {
      _id: '12313210mdasd',
      block: '-',
      age: '-',
      transaction: '-',
      gas: `-`,
      rewards: `-`,
    },
    {
      _id: '12139991admsmdasd',
      block: '-',
      age: '-',
      transaction: '-',
      gas: `-`,
      rewards: `-`,
    },
    {
      _id: '123131admmdasd',
      block: '-',
      age: '-',
      transaction: '-',
      gas: `-`,
      rewards: `-`,
    },
  ];

  const sortByButtons = [
    {
      title: 'Validated Blocks',
    },
    {
      title: 'Delegators',
    },
  ];

  return (
    <div className={`${styles.mainContainer} ${animate ? styles.animate : ''}`}>
      <div className={styles.sidebar}>
        <ul className={styles.unorderedList}>
          <li className={styles.chosen}>
            <DashboardIcon className={styles.dashboardListIcon} /> <p>Dashboard</p>
          </li>
          <li onClick={() => router.push('/validators', undefined, { locale, address: account })}>
            <ValidatorsListIcon className={styles.dashboardListIcon} /> <p>Validators List</p>
          </li>
          <li onClick={() => router.push('/calculator', undefined, { locale, address: account })}>
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
          <div className={styles.sortByButtons} data-aos='fade-up' data-aos-delay='20'>
            {sortByButtons.map((item, index) => (
              <button
                className={`${styles.sortByButton} ${sortBy == item.title ? styles.sortByButtonActive : ''}`}
                key={index}
                onClick={() => setSortBy(item.title)}
              >
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
            validatedBlocksOnPageChange={page => console.log(page)}
            delegatorsCurrentPage={1}
            delegatorsTotalCount={4}
            delegatorsOnPageChange={page => console.log(page)}
            validatedBlocksLoading={false}
            delegatorsLoading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
