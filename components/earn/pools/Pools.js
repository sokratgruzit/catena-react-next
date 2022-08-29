import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import Button from '../../UI/button/Button';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';
import ListItemRow from '../../UI/listItem/ListItemRow';
import Expand from '../../UI/expand/Expand';
import EarnRoutes from '../components/earnRoutes/EarnRoutes';
import TableFilter from '../components/tableFilter/TableFilter';
import PoolsTableRowExpand from '../components/poolsTable/PoolsTableRowExpand';
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

import background from '../../../public/images/earn/background.png';
import { useWindowDimension } from '../../../hooks/useWindowDimension';

import styles from './Pools.module.css';
import PoolsTableComponent from '../components/poolsTable/PoolsTableComponent';

const poolsData2 = [
  {
    id: 0,
    data: [
      {
        title: 'IFO CORE',
        subTitle: 'Stake CORE to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CORE profit',
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
    ],
  },
  {
    id: 1,
    data: [
      {
        title: 'IFO CORE',
        subTitle: 'Stake CORE to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.1',
        text2: '1 USD',
        text3: 'Recent CORE profit',
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
    ],
  },
  {
    id: 2,
    data: [
      {
        title: 'IFO CORE',
        subTitle: 'Stake CORE to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CORE profit',
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
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        text: (
          <>
            $1.263.697 Blocks
            <ClockSvg />
          </>
        ),
        text2: 'Ends in',
        type: 'multi_text',
      },
      {
        type: 'expand_custom',
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        title: 'IFO CORE',
        subTitle: 'Stake CORE to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CORE profit',
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
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        text: (
          <>
            $1.263.697 Blocks{' '}
            <svg
              width='13'
              height='15'
              viewBox='0 0 13 15'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6.52003 14.7124C3.10794 14.7124 0.333984 11.9385 0.333984 8.52638C0.333984 5.11429 3.10794 2.34033 6.52003 2.34033C9.93212 2.34033 12.7061 5.11429 12.7061 8.52638C12.7061 11.9385 9.93212 14.7124 6.52003 14.7124ZM6.52003 3.31708C3.6484 3.31708 1.31073 5.65475 1.31073 8.52638C1.31073 11.398 3.6484 13.7357 6.52003 13.7357C9.39166 13.7357 11.7293 11.398 11.7293 8.52638C11.7293 5.65475 9.39166 3.31708 6.52003 3.31708Z' />
              <path d='M6.51962 8.85194C6.25265 8.85194 6.03125 8.63055 6.03125 8.36357V5.10776C6.03125 4.84078 6.25265 4.61938 6.51962 4.61938C6.7866 4.61938 7.00799 4.84078 7.00799 5.10776V8.36357C7.00799 8.63055 6.7866 8.85194 6.51962 8.85194Z' />
              <path d='M8.47347 1.68915H4.5665C4.29952 1.68915 4.07812 1.46775 4.07812 1.20077C4.07812 0.933798 4.29952 0.712402 4.5665 0.712402H8.47347C8.74045 0.712402 8.96185 0.933798 8.96185 1.20077C8.96185 1.46775 8.74045 1.68915 8.47347 1.68915Z' />
            </svg>
          </>
        ),
        text2: 'Ends in',
        type: 'multi_text',
      },
      {
        type: 'expand_custom',
      },
    ],
  },
  {
    id: 4,
    data: [
      {
        title: 'IFO CORE',
        subTitle: 'Stake CORE to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CORE profit',
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
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        text: (
          <>
            $1.263.697 Blocks{' '}
            <svg
              width='13'
              height='15'
              viewBox='0 0 13 15'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6.52003 14.7124C3.10794 14.7124 0.333984 11.9385 0.333984 8.52638C0.333984 5.11429 3.10794 2.34033 6.52003 2.34033C9.93212 2.34033 12.7061 5.11429 12.7061 8.52638C12.7061 11.9385 9.93212 14.7124 6.52003 14.7124ZM6.52003 3.31708C3.6484 3.31708 1.31073 5.65475 1.31073 8.52638C1.31073 11.398 3.6484 13.7357 6.52003 13.7357C9.39166 13.7357 11.7293 11.398 11.7293 8.52638C11.7293 5.65475 9.39166 3.31708 6.52003 3.31708Z' />
              <path d='M6.51962 8.85194C6.25265 8.85194 6.03125 8.63055 6.03125 8.36357V5.10776C6.03125 4.84078 6.25265 4.61938 6.51962 4.61938C6.7866 4.61938 7.00799 4.84078 7.00799 5.10776V8.36357C7.00799 8.63055 6.7866 8.85194 6.51962 8.85194Z' />
              <path d='M8.47347 1.68915H4.5665C4.29952 1.68915 4.07812 1.46775 4.07812 1.20077C4.07812 0.933798 4.29952 0.712402 4.5665 0.712402H8.47347C8.74045 0.712402 8.96185 0.933798 8.96185 1.20077C8.96185 1.46775 8.74045 1.68915 8.47347 1.68915Z' />
            </svg>
          </>
        ),
        text2: 'Ends in',
        type: 'multi_text',
      },
      {
        type: 'expand_custom',
      },
    ],
  },
  {
    id: 5,
    data: [
      {
        title: 'IFO CORE',
        subTitle: 'Stake CORE to participate in IFOs',
        svg1: <CoreLogoBorder />,
        svg2: <IfoCoreBorder />,
        type: 'multi_svg',
      },
      {
        text: '0.0',
        text2: '0 USD',
        text3: 'Recent CORE profit',
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
        svg1: <OpenSvg />,
        type: 'multi_svg',
      },
      {
        text: (
          <>
            $1.263.697 Blocks{' '}
            <svg
              width='13'
              height='15'
              viewBox='0 0 13 15'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6.52003 14.7124C3.10794 14.7124 0.333984 11.9385 0.333984 8.52638C0.333984 5.11429 3.10794 2.34033 6.52003 2.34033C9.93212 2.34033 12.7061 5.11429 12.7061 8.52638C12.7061 11.9385 9.93212 14.7124 6.52003 14.7124ZM6.52003 3.31708C3.6484 3.31708 1.31073 5.65475 1.31073 8.52638C1.31073 11.398 3.6484 13.7357 6.52003 13.7357C9.39166 13.7357 11.7293 11.398 11.7293 8.52638C11.7293 5.65475 9.39166 3.31708 6.52003 3.31708Z' />
              <path d='M6.51962 8.85194C6.25265 8.85194 6.03125 8.63055 6.03125 8.36357V5.10776C6.03125 4.84078 6.25265 4.61938 6.51962 4.61938C6.7866 4.61938 7.00799 4.84078 7.00799 5.10776V8.36357C7.00799 8.63055 6.7866 8.85194 6.51962 8.85194Z' />
              <path d='M8.47347 1.68915H4.5665C4.29952 1.68915 4.07812 1.46775 4.07812 1.20077C4.07812 0.933798 4.29952 0.712402 4.5665 0.712402H8.47347C8.74045 0.712402 8.96185 0.933798 8.96185 1.20077C8.96185 1.46775 8.74045 1.68915 8.47347 1.68915Z' />
            </svg>
          </>
        ),
        text2: 'Ends in',
        type: 'multi_text',
      },
      {
        type: 'expand_custom',
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
              <Button
                title={'Claim'}
                type={'blue__border'}
                customStyles={{
                  padding: '7px 0',
                  width: '235px',
                  fontSize: '16px',
                  height: '32px',
                  marginRight: '25px',
                  lineHeight: '18px',
                  marginTop: 'auto',
                }}
              />
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
                className={`${
                  dataViewType === 'components' && styles.tableView
                }`}
              />
              <ComponentViewSvg
                onClick={() => setDataViewType('components')}
                className={`${
                  dataViewType === 'components' && styles.componentsView
                }`}
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
                  className={`${styles.filters} ${
                    filter.open && styles.filterOpen
                  }`}
                  onClick={() =>
                    setFilter(prevState => ({
                      ...prevState,
                      open: !prevState.open,
                    }))
                  }
                >
                  <p className={styles.filterName}>
                    {filter.selected}{' '}
                    <VectorSvg
                      className={`${styles.vectorSvg} ${
                        filter.open && styles.rotate
                      }`}
                    />
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
                <Expand
                  expandContent={<PoolsTableRowExpand item={item} />}
                  className={styles.borderBottom}
                  key={index}
                >
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
                <Expand>
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
