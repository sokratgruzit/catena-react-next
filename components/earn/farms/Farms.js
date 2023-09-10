import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

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

import { Input, Switches, Button, Tabs } from '@catena-network/catena-ui-module';

import styles from './Farms.module.css';
import TableFarms from '../components/tableFarms/TableFarms';
import TableSvg from '../components/tableSvg/TableSvg';
import Link from 'next/link';
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
  const [toggle, setToggle] = useState('')
  const activeLang = useSelector(state => state.settings.activeLang);

  const router = useRouter();
  const selectRef = useRef();

  return (
    <>
      <main className={`${styles.farms__container}`}>
        <div className={styles.routesWrapper}>
          {/* <EarnRoutes /> */}
        </div>
        <div className={`container_bordered`}>
          <h1 style={{ paddingBottom: '20px' }} className={`font-90 ttl ${styles.resTitle}`}>Farms</h1>
          <h2 className={`font-40 ttl ${styles.resTitle}`}>Stake LP tokens to earn.</h2>
          <div className={styles.communityAuctions}>
            <Link href={'/overview/earn/farms/auction'} locale={activeLang}>
              <Button
                label={"Community Auctions"}
                size={"btn-lg"}
                type={"btn-primary"}
                arrow={"arrow-right"}
                element={"button"}
                // disabled={true}
                onClick={() => setToggle((prevState) => !prevState)}
              />
            </Link>
          </div>
          <div className='container_bordered-child'>
            {/* <CornerDecor /> */}
            <div className={styles.farms__filterInner}>
              <div className={styles.Farms__filterLeftPanel}>
                <TableFilter />
                {/* <TableSvg /> */}
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
              </div>
              <div className={styles.searchDiv}>
                <Input
                  type={"search-input"}
                  onChange={() => { console.log("search"); }}
                  // defaultData={defaultData}
                  // selectHandler={selectHandler}
                  selectLabel={"select"}
                  placeholder={"search Farms"}
                // label={"your text"}
                // customStyles={{ width: "70%" }}
                />
              </div>
              <div className={styles.Farms__filterRightPanel}>
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
                    customStyles={{ width: "100%" }}
                  />
                  {/* <div className={styles.svgRotate}> */}
                  {/* <TableViewSvg
                    onClick={() => setDataViewType('table')}
                    className={`${dataViewType === 'components' && styles.tableView}`}
                  />
                  <ComponentViewSvg
                    onClick={() => setDataViewType('components')}
                    className={`${dataViewType === 'components' && styles.componentsView}`}
                  /> */}
                  <Tabs
                    type={"two-component-tabs"} />
                  {/* </div> */}
                </div>
              </div>
            </div>
            {dataViewType === 'table' && (
              <div style={{marginTop: '50px'}}>
                <TableFarms />
              </div>
            )}
          </div>
        </div>
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
