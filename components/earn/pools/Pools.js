import Image from 'next/image';
import React, { useState, useRef } from 'react';

import { useWindowDimension } from '../../../hooks/useWindowDimension';
import background from '../../../public/images/earn/background.png';
import {
  ClockSvg,
  ComponentViewSvg,
  CoreLogoBorder,
  ExclamationSvg,
  IfoCoreBorder,
  InfoIcon,
  OpenSvg,
  TableViewSvg,
  VectorSvg,
} from '../../svg';
import Button from '../../UI/button/Button';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';
import Expand from '../../UI/expand/Expand';
import ListItemRow from '../../UI/listItem/ListItemRow';
import EarnRoutes from '../components/earnRoutes/EarnRoutes';
import PoolsTableComponent from '../components/poolsTable/PoolsTableComponent';
import PoolsTableComponentExpand from '../components/poolsTable/PoolsTableComponentExpand';
import PoolsTableRowExpand from '../components/poolsTable/PoolsTableRowExpand';
import TableFilter from '../components/tableFilter/TableFilter';

import styles from './Pools.module.css';

const poolsData2 = [
  {
    id: 0,
    data: [
      {
        title: 'IFO CATENA',
        subTitle: 'Stake CATENA to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CATENA profit',
        type: 'multi_text',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'IFO Credit',
        type: 'multi_text',
      },
      {
        title: '45.05%',
        subTitle: 'APY',
        lockedAPY: '67.39%',
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        text: '$235.684.158',
        core: true,
        text2: 'Total staked',
        type: 'multi_text',
      },
      {
        type: 'expand_custom',
      },
      {
        totalLocked: '179,974,407 CATENA',
        averageLockDuration: '39 weeks',
        performanceFee: '0~2%',
        tag: 'auto',
      },
    ],
  },
  {
    id: 1,
    data: [
      {
        title: 'IFO CATENA',
        subTitle: 'Stake CATENA to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CATENA profit',
        type: 'multi_text',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'IFO Credit',
        type: 'multi_text',
      },
      {
        title: '45.05%',
        subTitle: 'APR',
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        title: '$1.263.697 Blocks',
        subTitle: 'Ends in',
        svg1: <ClockSvg />,
        type: 'multi_svg',
      },
      {
        type: 'expand_custom',
      },
      {
        totalStaked: '2,035,253',
        maxPerUser: '100',
        maxEndsIn: '0',
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        title: 'IFO CATENA',
        subTitle: 'Stake CATENA to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CATENA profit',
        type: 'multi_text',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'IFO Credit',
        type: 'multi_text',
      },
      {
        title: '45.05%',
        subTitle: 'APR',
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        title: '$1.263.697 Blocks',
        subTitle: 'Ends in',
        svg1: <ClockSvg />,
        type: 'multi_svg',
      },
      {
        type: 'expand_custom',
      },
      {
        totalStaked: '2,035,253',
        maxPerUser: '100',
        maxEndsIn: '0',
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        title: 'IFO CATENA',
        subTitle: 'Stake CATENA to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CATENA profit',
        type: 'multi_text',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'IFO Credit',
        type: 'multi_text',
      },
      {
        title: '45.05%',
        subTitle: 'APR',
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        title: '$1.263.697 Blocks',
        subTitle: 'Ends in',
        svg1: <ClockSvg />,
        type: 'multi_svg',
      },
      {
        type: 'expand_custom',
      },
      {
        totalStaked: '2,035,253',
        maxPerUser: '100',
        maxEndsIn: '0',
      },
    ],
  },
  {
    id: 4,
    data: [
      {
        title: 'IFO CATENA',
        subTitle: 'Stake CATENA to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CATENA profit',
        type: 'multi_text',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'IFO Credit',
        type: 'multi_text',
      },
      {
        title: '45.05%',
        subTitle: 'APR',
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        title: '$1.263.697 Blocks',
        subTitle: 'Ends in',
        svg1: <ClockSvg />,
        type: 'multi_svg',
      },
      {
        type: 'expand_custom',
      },
      {
        totalStaked: '2,035,253',
        maxPerUser: '100',
        maxEndsIn: '0',
      },
    ],
  },
  {
    id: 5,
    data: [
      {
        title: 'IFO CATENA',
        subTitle: 'Stake CATENA to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CATENA profit',
        type: 'multi_text',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'IFO Credit',
        type: 'multi_text',
      },
      {
        title: '45.05%',
        subTitle: 'APR',
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        title: '$1.263.697 Blocks',
        subTitle: 'Ends in',
        svg1: <ClockSvg />,
        type: 'multi_svg',
      },
      {
        type: 'expand_custom',
      },
      {
        totalStaked: '2,035,253',
        maxPerUser: '100',
        maxEndsIn: '0',
      },
    ],
  },
];

const FilterData = ['hot', 'apr', 'multiplier', 'earned', 'liquidity'];

const Pools = () => {
  const [width] = useWindowDimension();
  const [dataViewType, setDataViewType] = useState('table');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({
    open: false,
    selected: FilterData[0],
  });
  const selectRef = useRef();

  return (
    <>
      <div className={styles.background}>
        <Image src={background} alt='' />
      </div>
      <div className={`container ${styles.pools__container} `}>
        <div className={styles.routesWrapper}>
          <EarnRoutes />
        </div>
        <h1 className='font_30'>
          Just stake some tokens to earn.
          <br /> High APR, low risk.
        </h1>
        <div className={styles.pools__panel}>
          <div className={styles.pools__panelInner}>
            <div>
              <p className='font_16'>Auto Cake Bounty</p>
              <ExclamationSvg className={styles.cakeBountySvg} />
            </div>
            <div className={styles.pools__flex}>
              <p className='font_20'>0.026</p>
              <p className='font_13'>~$0,07</p>
            </div>
            <div className={styles.pools__claim}>
              <Button title={'Claim'} type={'blue__border'} className={styles.claimButton} />
              <p className='font_13'>Help</p>
              <InfoIcon />
            </div>
          </div>
        </div>
        <div className={`${styles.farms__filter}`}>
          <CornerDecor />
          <div className={styles.farms__filterInner}>
            <div className={styles.Farms__filterLeftPanel}>
              <TableViewSvg
                onClick={() => setDataViewType('table')}
                className={`${dataViewType === 'components' && styles.tableView}`}
              />
              <ComponentViewSvg
                onClick={() => setDataViewType('components')}
                className={`${dataViewType === 'components' && styles.componentsView}`}
              />
              <div className={styles.farms__radioBtn}>
                <div className='radio-btn'>
                  <input type='checkbox' />
                  <div className='radio-btn__inner'>
                    <div className='radio-btn__icon'></div>
                  </div>
                  Staked only
                </div>
              </div>
              <TableFilter />
            </div>
            <div className={styles.Farms__filterRightPanel}>
              <div className={styles.filterWrapper}>
                <div
                  ref={selectRef}
                  className={`${styles.filters} ${filter.open && styles.filterOpen}`}
                  onClick={() =>
                    setFilter(prevState => ({
                      ...prevState,
                      open: !prevState.open,
                    }))
                  }
                >
                  <p className={styles.filterName}>
                    {filter.selected} <VectorSvg className={`${styles.vectorSvg} ${filter.open && styles.rotate}`} />
                  </p>
                  {filter.open && (
                    <>
                      {FilterData.map((FilterName, index) => {
                        if (FilterName === filter.selected) return false;
                        return (
                          <p
                            key={FilterName}
                            className={styles.FilterName}
                            onClick={() => {
                              setFilter({
                                open: 'false',
                                selected: FilterName,
                              });
                            }}
                          >
                            {FilterName}
                          </p>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
              <input
                onChange={e => setSearch(e.target.value)}
                type='search'
                className={styles.searchInput}
                placeholder='Search Farms'
              ></input>
            </div>
          </div>
        </div>
        {dataViewType === 'table' && (
          <div className={`${styles.pools__tableContainer}`}>
            <CornerDecor />
            {poolsData2.map((item, index) => {
              return (
                <Expand expandContent={<PoolsTableRowExpand item={item} />} className={styles.borderBottom} key={index}>
                  <ListItemRow data={item} type={'earn_pools'} />
                </Expand>
              );
            })}
          </div>
        )}
        {dataViewType === 'components' && (
          <div className={styles.componentsViewSection}>
            {poolsData2.map((item, index) => (
              <div className={`${styles.itemWrapper}`} key={index}>
                <CornerDecor />
                <Expand expandContent={<PoolsTableComponentExpand item={item} />}>
                  <PoolsTableComponent item={item} />
                </Expand>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Pools;
