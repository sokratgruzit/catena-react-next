import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';

import background from '../../../public/images/earn/background.png';
import {
  VectorSvg,
  ArrowSvg,
  TableViewSvg,
  ComponentViewSvg,
  InfoIcon,
  ETHCORE,
  MathSignSvg,
  OpenSvg,
} from '../../svg';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';
import Expand from '../../UI/expand/Expand';
import ExpandButton from '../../UI/expand/ExpandButton';
import Table from '../../UI/table/Table';
import EarnRoutes from '../components/earnRoutes/EarnRoutes';
import FarmsTableComponent from '../components/farmsTable/FarmsTableComponent';
import FarmsTableRowExpand from '../components/farmsTable/FarmsTableRowExpand';
import TableFilter from '../components/tableFilter/TableFilter';

import { Input, Switches } from '@catena-network/catena-ui-module';

import styles from './Farms.module.css';

const farmsData = [
  {
    id: 0,
    data: [
      {
        title: 'CMCX-ETH',
        svg1: <ETHCORE />,
        type: 'multi_svg',
      },
      {
        text: 0,
        type: 'text',
      },
      {
        title: '45.05%',
        svg1: <MathSignSvg />,
        type: 'multi_svg',
      },
      {
        text: '$235.684.158',
        type: 'text',
      },
      {
        text: '10x',
        type: 'text',
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
        title: 'CMCX-ETH',
        svg1: <ETHCORE />,
        type: 'multi_svg',
      },
      {
        text: 0,
        type: 'text',
      },
      {
        title: '45.05%',
        svg1: <MathSignSvg />,
        type: 'multi_svg',
      },
      {
        text: '$235.684.158',
        type: 'text',
      },
      {
        text: '10x',
        type: 'text',
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
        title: 'CMCX-ETH',
        svg1: <ETHCORE />,
        type: 'multi_svg',
      },
      {
        text: 0,
        type: 'text',
      },
      {
        title: '45.05%',
        svg1: <MathSignSvg />,
        type: 'multi_svg',
      },
      {
        text: '$235.684.158',
        type: 'text',
      },
      {
        text: '10x',
        type: 'text',
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
        title: 'CMCX-ETH',
        svg1: <ETHCORE />,
        type: 'multi_svg',
      },
      {
        text: 0,
        type: 'text',
      },
      {
        title: '45.05%',
        svg1: <MathSignSvg />,
        type: 'multi_svg',
      },
      {
        text: '$235.684.158',
        type: 'text',
      },
      {
        text: '10x',
        type: 'text',
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
        title: 'CMCX-ETH',
        svg1: <ETHCORE />,
        type: 'multi_svg',
      },
      {
        text: 0,
        type: 'text',
      },
      {
        title: '45.05%',
        svg1: <MathSignSvg />,
        type: 'multi_svg',
      },
      {
        text: '$235.684.158',
        type: 'text',
      },
      {
        text: '10x',
        type: 'text',
      },
      {
        type: 'expand_custom',
      },
    ],
  },
];

const FilterData = ['hot', 'apr', 'multiplier', 'earned', 'liquidity'];

const Farms = () => {
  const [filter, setFilter] = useState({
    open: false,
    selected: FilterData[0],
  });
  const [search, setSearch] = useState('');
  const [dataViewType, setDataViewType] = useState('table');

  const router = useRouter();
  const selectRef = useRef();

  return (
    <>
      <main className={`${styles.farms__container}`}>
        <div className={styles.routesWrapper}>
          <EarnRoutes />
        </div>
        <div className={`container_bordered`}>
          <h1 className={`font-90 ttl ${styles.resTitle}`}>Stake LP tokens to earn.</h1>
          <div onClick={() => router.push('/earn/farms/auction')} className={styles.communityAuctions}>
            <p className={`${styles.blueHover}`}>Community Auctions</p>
            <ArrowSvg className={styles.svgHoverBlue} />
          </div>
          <div className={`container_bordered-child ${styles.farms__filterInner}`}>
            {/* <CornerDecor /> */}
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
                <div style={{ fontSize: '16px', color: '#162029' }} className='radio-btn'>
                  <input type='checkbox' />
                  <div className='radio-btn__inner'>
                    {/* <div style={{ backgroundColor: '#162029' }} className='radio-btn__icon'></div> */}
                    <Switches type={"sm-switches"} />
                  </div>
                  Staked only
                </div>
              </div>
              <TableFilter />
            </div>
            <div className={styles.Farms__filterRightPanel}>
              {/* <div className={styles.filterWrapper}>
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
              </div> */}
              <div className={styles.selectDiv}>
                <Input
                  type={"lable-input-select"}
                  icon={false}
                  // selectData={selectData}
                  emptyFieldErr={true}
                  // defaultData={defaultData}
                  // label={"yourText"}
                  // selectHandler={selectHandler}
                  selectLabel={"Hot"}
                  // active={active}
                  status={"warning"}
                  title={"your text"}
                  color={"#FFA726"}
                // customStyles={{ width: "150px" }}
                />
              </div>
              {/* <input
                onChange={e => setSearch(e.target.value)}
                className={styles.searchInput}
                type='search'
                placeholder='Search Farms'
              ></input> */}
              <div className={styles.searchDiv}>
                <Input
                  type={"search-input"}
                  onChange={() => { console.log("search"); }}
                  // defaultData={defaultData}
                  // selectHandler={selectHandler}
                  selectLabel={"select"}
                  placeholder={"search"}
                  // label={"your text"}
                  // customStyles={{ width: "70%" }}
                />
              </div>
            </div>
          </div>
        </div>
        {dataViewType === 'table' && (
          <div className={`${styles.farms__tableContainer}`}>
            {/* <CornerDecor /> */}
            <Table
              tableLabels={[
                '',
                'Earned',
                'APR',
                <>
                  Liquidity
                  <InfoIcon className={styles.infoIcon} />
                </>,
                <>
                  Multiplier
                  <InfoIcon className={styles.infoIcon} />
                </>,
              ]}
              expandContent={<FarmsTableRowExpand />}
              expandClassName={styles.borderBottom}
              tableData={farmsData}
              type={'earn_farms'}
            />
          </div>
        )}
        {dataViewType === 'components' && (
          <div className={styles.componentsViewSection}>
            {farmsData
              .filter(item => {
                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
              })
              .map((item, index) => {
                return (
                  <div className={styles.itemWrapper} key={index}>
                    <CornerDecor />
                    <Expand
                      expandButton={
                        <ExpandButton className={styles.expandButton} vectorClassName={styles.expandVector} />
                      }
                      expandContent={
                        <div className={styles.expandSection}>
                          <p>
                            Get CMCX-BNB LP <OpenSvg className={styles.openSvg} />
                          </p>
                          <p>
                            View Contract <OpenSvg className={styles.openSvg} />
                          </p>
                          <p>
                            See Pair Info <OpenSvg className={styles.openSvg} />
                          </p>
                        </div>
                      }
                    >
                      <FarmsTableComponent item={item} />
                    </Expand>
                  </div>
                );
              })}
          </div>
        )}
      </main>
    </>
  );
};

export default Farms;
