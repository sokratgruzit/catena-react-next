import { useState } from 'react';
import TabFilter from '../../../UI/filters/TabFilter';
import RunningText from '../runningText/RunningText';
import VotingNowTable from '../votingNowTable/VotingNowTable';
import filterStyles from '../../../UI/filters/TabFilter.module.css';
import styles from './VotingNow.module.css';

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

const VotingNow = props => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeTimeframe, setActiveTimeframe] = useState('Activity');
  const [selectedLabel, setSelectedLabel] = useState('All');
  const [selectedVariation, setSelectedVariation] = useState('All');

  const votingTableData = [
    {
      id: 0,
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: ['Community', 'core'],
      label: 'All',
    },
    {
      id: 1,
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'close',
    },
    {
      id: 2,

      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'core',
    },
    {
      id: 3,

      teaser: 'Stop Minting more $c',
      date: 'Ends Mar 6th, 2022 11:15',
      variation: 'Community',
    },
    {
      id: 4,

      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'Community',
    },
    {
      id: 5,

      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      variation: 'Community',
    },
    {
      id: 6,

      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'close',
    },
    {
      id: 7,

      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'Community',
    },
    {
      id: 8,

      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'soon',
    },
    {
      id: 9,

      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'core',
    },
    {
      id: 10,

      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'Community',
    },
    {
      id: 11,

      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'soon',
    },
  ];

  const filteredData = votingTableData.filter(item => {
    if (
      (selectedLabel === 'All' || item.label === selectedLabel) &&
      (selectedVariation === 'All' ||
        (item.variation &&
          typeof item.variation === 'string' &&
          item.variation.toLowerCase() === selectedVariation.toLowerCase()))
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      <RunningText />
      <div className={` ${styles.flex} container `}>
        <div className={styles.inner}>
          <TabFilter
            onClick={e => {
              setActiveTimeframe(e);
              setSelectedVariation(e);
              if (e === 'Core') setSelectedLabel('All');
              else if (e === 'Community') setSelectedLabel('All');
              else if (e === 'All') setSelectedVariation('All');
            }}
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
            onClick={e => {
              setActiveTimeframe(e);
              setSelectedVariation(e);
              if (e === 'Activity') setSelectedLabel('All');
              else if (e === 'Soon') setSelectedLabel('All');
              else if (e === 'Close') setSelectedLabel('All');
            }}
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
            activeTab={activeTab}
            activeTimeframe={activeTimeframe}
            votingTableData={filteredData}
          />
        </div>
      </div>
    </>
  );
};

export default VotingNow;
