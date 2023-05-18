import { useState, useEffect } from 'react';

import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import TabFilter from '../../../UI/filters/TabFilter';

import styles from './VotingNow.module.css';
import {
  CloseTag,
  CommunitySign,
  CommunityTag,
  CoreCheck,
  CoreTagLight,
  SmlArrowSvg,
  SoonTag,
  VectorSvg,
  VoteNowTag,
} from '../../../svg';

import ListItemRow from '../../../UI/listItem/ListItemRow';
import RunningText from '../runningText/RunningText';
import VotingNowTable from '../votingNowTable/VotingNowTable';

const votingData = [
  {
    id: 0,
    title: 'Stop Minting more CORE1',
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
    title: 'Stop Minting more CORE2',
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
    title: 'Stop Minting more CORE3',
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
  {
    id: 8,
    title: 'Stop Minting more CORE4',
    subTitle: 'subTitle 1',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 9,
    title: 'Stop Minting more CORE5',
    subTitle: 'subTitle 1',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 10,
    title: 'Stop Minting more CORE6',
    subTitle: 'subTitle 1',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
];

const votingData2 = votingData.map((item, index) => {
  let firstIcon;
  let secondIcon;

  if (item.activeStatus === 'Close') {
    firstIcon = <CloseTag />;
  } else if (item.activeStatus === 'Soon') {
    firstIcon = <SoonTag />;
  } else if (item.activeStatus === 'Vote Now') {
    firstIcon = <VoteNowTag />;
  }

  if (item.location === 'Community') {
    secondIcon = <CommunityTag />;
  } else if (item.location === 'Core') {
    secondIcon = <CoreTagLight />;
  }
  return {
    id: index,
    data: [
      {
        title: item.title,
        subTitle: item.date,
        svg1: firstIcon,
        svg2: secondIcon,
        type: 'multi_svg',
      },
      {
        title: 'Read More',
        svg1: <SmlArrowSvg />,
        type: 'multi_svg',
      },
      {
        location: item.location,
        activeStatus: item.activeStatus,
      },
    ],
  };
});

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

const VOTING_COUNT_STEP = 3;

const VotingNow = props => {
  const [votingCount, setVoutingCount] = useState(2);
  const [filteredData, setFilteredData] = useState(votingData2);

  const [activeTab, setActiveTab] = useState('Core');
  const [activeTimeframe, setActiveTimeframe] = useState('Vote Now');

  return (
    <>
      <RunningText />
      <div className={` ${styles.flex} container `}>
        <div className={styles.inner}>
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
        <div className={styles.container}>
          <CornerDecor />
          <div className={styles.gradient}></div>
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
          <VotingNowTable
            key={activeTab + activeTimeframe}
            votingData={votingData2}
            activeTab={activeTab}
            activeTimeframe={activeTimeframe}
          />
        </div>
      </div>
    </>
  );
};

export default VotingNow;
