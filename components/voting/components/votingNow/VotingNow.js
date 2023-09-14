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
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: ['Community', 'core'],
      label: 'All',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'close',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'core',
    },
    {
      teaser: 'Stop Minting more $c',
      date: 'Ends Mar 6th, 2022 11:15',
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'close',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'Community',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'soon',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'core',
    },
    {
      teaser: 'Stop Minting more $CORE',
      date: 'Ends Mar 6th, 2022 11:15',
      vote: 'Vote Now',
      variation: 'Community',
    },
    {
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
