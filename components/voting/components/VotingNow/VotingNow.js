import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import MaruqeeTest from '../../../UI/marquee/MarqueeTest';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import TabFilter from '../../../UI/filters/TabFilter';

import styles from './VotingNow.module.css';
import VotingNowItem from './VotingNowItem';
import {
  CommunitySign,
  CoreCheck,
  ProposalsText,
  VectorSvg,
} from '../../../svg';
import Marquee from '../../../UI/marquee/Marquee';

const votingData = [
  {
    id: 0,
    title: 'Stop Minting more CORE',
    subTitle: 'subTitle 1',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 1,
    title: 'test#16',
    subTitle: 'subTitle #2',
    date: 'Ends Mar 4th, 2022 01:15',
    location: 'Core',
    activeStatus: 'Soon',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 2,
    title: 'Stop Minting more CORE',
    subTitle: 'subTitle #2',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Close',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 3,
    title: 'blah#17',
    subTitle: 'testSubTitle',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Core',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 4,
    title: 'Stop Minting more CORE',
    subTitle: 'testSubTitle',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 5,
    title: 'test#1',
    subTitle: 'testSubTitle',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 6,
    title: 'test#2',
    subTitle: 'test593059',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Core',
    activeStatus: 'Soon',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 7,
    title: 'test#3',
    subTitle: 'qwerty',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Close',
    announcement: 'Dear cock holders, we’re proud of u',
  },
];

const dataDisplayOptions = [
  {
    id: 0,
    label: 'Core',
    svg: <CoreCheck />,
  },
  {
    id: 1,
    label: 'Community',
    svg: <CommunitySign />,
  },
  {
    id: 2,
    label: 'All',
  },
];

const dataTimeframeOptions = [
  {
    id: 0,
    label: 'Vote Now',
  },
  {
    id: 1,
    label: 'Soon',
  },
  {
    id: 2,
    label: 'Close',
  },
];

const VOTING_COUNT_STEP = 5;

const VotingNow = props => {
  const router = useRouter();
  const [subTab, setSubTab] = useState(0);
  const [tab, setTab] = useState(0);
  const [votingCount, setVoutingCount] = useState(5);
  const [filterData, setFilterData] = useState(
    votingData.slice(0, votingCount),
  );
  const [activeTab, setActiveTab] = useState('Core');
  const [activeTimeframe, setActiveTimeframe] = useState('Vote Now');

  const showMoreProposalHandler = () => {
    setVoutingCount(votingCount + VOTING_COUNT_STEP);
  };

  const filterHandler = status => {
    let filtered = votingData.filter(item => {
      if (status === item.location || status === item.activeStatus) {
        return item;
      }
      if (status === 'All') {
        return votingData;
      }
    });
    setFilterData(filtered);
  };

  useEffect(() => {
    filterHandler(activeTimeframe);
  }, [activeTimeframe]);

  useEffect(() => {
    setFilterData(votingData.slice(0, votingCount));
  }, [votingCount]);

  return (
    <>
      {/* <MaruqeeTest
        label={'voting'}
        direction={'rightToLeft'}
        lineElementsCount={9}
      /> */}
      <Marquee label={'voting'} direction={'rightToLeft'} />
      <div className={` ${styles.votingNow__flex} container `}>
        <div className={styles.votingNow__inner}>
          <TabFilter
            onClick={e => setActiveTab(e)}
            data={dataDisplayOptions}
            activeMenu={activeTab}
            css={{
              wrap: styles.filterWrap,
              filter: styles.filter,
              active: styles.filterActive,
              item: styles.filter__item,
            }}
          />
        </div>
        <div
          className={`${styles.votingNow__mainContainer} ${styles.container}`}
        >
          <CornerDecor />
          <TabFilter
            onClick={e => setActiveTimeframe(e)}
            data={dataTimeframeOptions}
            activeMenu={activeTimeframe}
            css={{
              wrap: styles.frame__filterWrap,
              filter: styles.filter,
              active: styles.frame__filterActive,
              item: styles.frame__filter__item,
            }}
          />
          <div
            style={{
              height: 'auto',
              cursor: 'pointer',
            }}
          >
            {filterData.map(item => {
              return (
                <div
                  onClick={() => router.push(`/voting/${item.id}`)}
                  key={item.id + 'voting'}
                >
                  <VotingNowItem data={item} />
                </div>
              );
            })}
          </div>
          <div className={styles.seeMore}>
            <div onClick={showMoreProposalHandler}>
              <p>See More </p>
              <VectorSvg />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VotingNow;
