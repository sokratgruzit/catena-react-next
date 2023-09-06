import { useState } from 'react';
import {
  CloseTag,
  CommunitySign,
  CommunityTag,
  CoreCheck,
  CoreTagLight,
  SmlArrowSvg,
  SoonTag,
  VoteNowTag,
} from '../../../svg';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import TabFilter from '../../../UI/filters/TabFilter';
import RunningText from '../runningText/RunningText';
import VotingNowTable from '../votingNowTable/VotingNowTable';
import filterStyles from '../../../UI/filters/TabFilter.module.css';

import styles from './VotingNow.module.css';

const votingData = [
  {
    id: 0,
    title: 'Stop Minting more CATENA 1',
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
    location: 'CATENA',
    activeStatus: 'Soon',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 2,
    title: 'Stop Minting more CATENA2',
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
    location: 'CATENA',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 4,
    title: 'Stop Minting more CATENA3',
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
    location: 'CATENA',
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
    title: 'Stop Minting more CATENA4',
    subTitle: 'subTitle 1',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 9,
    title: 'Stop Minting more CATENA5',
    subTitle: 'subTitle 1',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 10,
    title: 'Stop Minting more CATENA6',
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
  } else if (item.location === 'CATENA') {
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
    label: 'All',
  },
  {
    id: 2,
    label: 'Core',
  },
  {
    id: 1,
    label: 'Community',
  },
];

const dataTimeframeOptions = [
  {
    id: 0,
    label: 'Activity',
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

  const [activeTab, setActiveTab] = useState('CATENA');
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
              wrap: filterStyles.activity__filterWrap,
              filter: filterStyles.activity__filter,
              active: filterStyles.activity__filterActive,
              item: filterStyles.activity__filter__item,
            }}
            showCloseButton={false}
            allowMultipleTabs={false}
            showClearButton={false}
          />
        </div>
        <div className={styles.container}>
          <TabFilter
            onClick={e => setActiveTab(e)}
            data={dataTimeframeOptions}
            activeMenu={activeTimeframe}
            css={{
              wrap: filterStyles.Activity__filterWrap,
              filter: filterStyles.Activity__filter,
              active: filterStyles.Activity__filterActive,
              item: filterStyles.Activity__filter__item,
            }}
            showCloseButton={false}
            allowMultipleTabs={false}
            showClearButton={false}
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
