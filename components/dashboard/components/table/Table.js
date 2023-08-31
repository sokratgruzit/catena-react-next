import { Table as TableUI, TableElement as TableElementUI } from '@catena-network/catena-ui-module';
import React, { useState } from 'react';

// hooks
import { useMobileWidth } from '../../../../hooks/useMobileWidth';
import { CatenaLogo, NoData } from '../../../svg';

// css
import styles from './Table.module.css';

const Table = ({
  delegatorsTd,
  delegatorsTableMoreTd,
  validatedBlocksTd,
  sortBy,
  delegatorsCurrentPage,
  delegatorsTotalCount,
  delegatorsOnPageChange,
  delegatorsLoading,
  validatedBlocksCurrentPage,
  validatedBlocksTotalCount,
  validatedBlocksOnPageChange,
  validatedBlocksLoading,
}) => {
  const [mobileExpand, setMobileExpand] = useState(null);
  const { width } = useMobileWidth();

  let mobile = width < 1300;

  let mobileExpandFunc = id => {
    if (id !== mobileExpand) {
      setMobileExpand(id);
    } else {
      setMobileExpand(null);
    }
  };

  let delegatorsTh = [
    {
      name: 'Name',
      width: 25,
      id: 0,
      height: '88px',
      mobileWidth: width >= 700 ? 25 : width >= 500 ? 45 : 100,
    },
    {
      name: 'Stake',
      width: 25,
      id: 1,
      height: '88px',
      mobileWidth: width >= 700 ? 25 : width >= 500 ? 45 : false,
    },
    {
      name: 'Cumulative stake',
      width: 25,
      id: 2,
      height: '88px',
      mobileWidth: width <= 700 ? false : 25,
    },
  ];

  let delegatorsTableMoreTh = [
    {
      name: 'Public key',
      width: 10,
      id: 0,
    },
    {
      name: 'name',
      width: 15,
      id: 1,
    },
    {
      name: 'shard',
      width: 10,
      id: 2,
    },
    {
      name: 'vesrsion',
      width: 10,
      id: 3,
    },
    {
      name: 'ignored signatures',
      width: 15,
      id: 4,
    },
    {
      name: 'Status',
      width: 10,
      id: 5,
    },
    {
      name: 'Rating',
      width: 10,
      id: 6,
    },
    {
      name: 'nonce',
      width: 10,
      id: 7,
    },
  ];

  let validatedBlocksTh = [
    {
      name: 'Block',
      width: 20,
      id: 0,
      height: '88px',
      mobileWidth: 50,
    },
    {
      name: 'Age',
      width: 20,
      id: 1,
      height: '88px',
    },
    {
      name: 'Transaction Count',
      width: 20,
      id: 2,
      height: '88px',
      mobileWidth: width <= 550 ? false : 50,
    },
    {
      name: 'Gas Used',
      width: 20,
      id: 2,
      height: '88px',
    },
    {
      name: 'Rewards',
      width: 20,
      id: 2,
      height: '88px',
    },
  ];

  function formatWalletAddress(walletAddress) {
    const firstThree = walletAddress.slice(0, 4);
    const lastThree = walletAddress.slice(-4);
    return `${firstThree}...${lastThree}`;
  }

  let tableData;
  tableData = delegatorsTd?.map((item, index) => {
    return (
      <div
        className={`table-parent ${mobileExpand == item._id ? 'active' : ''} ${styles.tableParentActive} ${
          styles.tableMoreActive
        }
        `}
        key={index}
      >
        <div
          className={`table ${mobileExpand == item._id ? styles.table : ''}`}
          style={{
            width: 'calc(100% - 75px)',
          }}
          onClick={() => {
            mobileExpandFunc(item._id);
          }}
        >
          <div
            className={`td col ${delegatorsTh[0].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? delegatorsTh[0].mobileWidth : delegatorsTh[0].width}%`,
              height: '88px',
            }}
          >
            <div className='table-coin-row' style={{ gap: '10px' }}>
              <span className='table-img-wrapper'>
                <img
                  src={`http://localhost:3001/images/${item._id}.png`}
                  onError={e => {
                    e.target.src = '/images/headerDefaultImg.png';
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                  }}
                  alt=''
                />
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item.fullname ? item.fullname : 'Anonymous'}</span>
            </div>
          </div>
          <div
            className={`td ${delegatorsTh[1].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? delegatorsTh[1].mobileWidth : delegatorsTh[1].width}%`,
              height: '88px',
            }}
          >
            <div className='table-coin-row' style={{ gap: '10px' }}>
              <CatenaLogo className={styles.catenaLogoSml} />
              <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item.stake}</span>
            </div>
          </div>
          <div
            className={`td ${delegatorsTh[2].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? delegatorsTh[2].mobileWidth : delegatorsTh[2].width}%`,
              height: '88px',
            }}
          >
            <div className='table-coin-row'>
              <div className={styles.tablePercentageChartWrap}>
                <span className={styles.tablePercentageChart} style={{ width: '1%' }} />
              </div>
              <p className={styles.tablePercentage}>-%</p>
            </div>
          </div>
        </div>
        <div
          className={`table-more`}
          style={{
            background: `${mobileExpand == item._id ? 'rgb(255, 255, 255, 0.06)' : 'none'}`,
            backdropFilter: `${mobileExpand == item._id ? 'blur(5px)' : 'none'}`,
            borderBottom: 'none',
            display: 'flex',
            height: '88px',
          }}
        />
        <div
          className='icon-place'
          style={{
            background: 'none',
            borderBottom: 'none',
            display: 'flex',
            height: '88px',
            background: `${mobileExpand == item._id ? 'rgb(255, 255, 255, 0.06)' : 'none'}`,
            backdropFilter: `${mobileExpand == item._id ? 'blur(5px)' : 'none'}`,
          }}
        >
          <svg
            width='12'
            height='7'
            viewBox='0 0 12 7'
            fill={'none'}
            transform={mobileExpand == item._id ? `rotate(180 0 0)` : ''}
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325'
              stroke={mobileExpand == item._id ? '#0500FF' : 'white'}
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div
          className='table-mobile'
          style={{
            display: 'block',
            overflowX: 'auto',
            cursor: 'auto',
          }}
        >
          <div className={styles.tableMobileContent}>
            <div className={styles.tableMoreHeader}>
              {delegatorsTableMoreTh?.map((item, index) => (
                <div key={index} style={{ width: `${item?.width}%` }}>
                  {item.name}
                </div>
              ))}
            </div>
            {delegatorsTableMoreTd?.map((item, index) => (
              <div className={styles.tableMoreTdWrapper} key={index}>
                <div
                  className={`${styles.td}`}
                  style={{
                    width: `${delegatorsTableMoreTh[0].width}%`,
                  }}
                >
                  <span>{formatWalletAddress(item?.publicKey)}</span>
                </div>
                <div
                  className={`${styles.td}`}
                  style={{
                    width: `${delegatorsTableMoreTh[1].width}%`,
                  }}
                >
                  <span>{item?.name}</span>
                </div>
                <div
                  className={`${styles.td}`}
                  style={{
                    width: `${delegatorsTableMoreTh[2].width}%`,
                  }}
                >
                  <span>{item?.shard}</span>
                </div>
                <div
                  className={`${styles.td}`}
                  style={{
                    width: `${delegatorsTableMoreTh[3].width}%`,
                  }}
                >
                  <span>{item?.version}</span>
                </div>
                <div
                  className={`${styles.td}`}
                  style={{
                    width: `${delegatorsTableMoreTh[4].width}%`,
                  }}
                >
                  <span>{item?.ignoredSignatures}</span>
                </div>
                <div
                  className={`${styles.td}`}
                  style={{
                    width: `${delegatorsTableMoreTh[5].width}%`,
                  }}
                >
                  <span
                    className={`status ${
                      item?.status === 'Online'
                        ? 'status-green'
                        : item?.status === 'Healthy'
                        ? 'status-red'
                        : item?.status === 'Final Notice'
                        ? 'status-purple'
                        : 'status-red'
                    } font-14`}
                  >
                    <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <circle
                        cx='5'
                        cy='5'
                        r='5'
                        fill={`${
                          item.status === 'Online' ? '#4AB762' : item?.status === 'Final Notice' ? '#6D4AB7' : '#EF5350'
                        }`}
                      />
                    </svg>
                    {item?.status}
                  </span>
                </div>
                <div
                  className={`${styles.td}`}
                  style={{
                    width: `${delegatorsTableMoreTh[6].width}%`,
                  }}
                >
                  <span>{item?.rating}</span>
                </div>
                <div
                  className={`${styles.td}`}
                  style={{
                    width: `${delegatorsTableMoreTh[7].width}%`,
                  }}
                >
                  <span>{item?.nonce}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });

  let validatedBlocksTableData;
  validatedBlocksTableData = validatedBlocksTd?.map((item, index) => {
    return (
      <div
        className={`table-parent ${mobileExpand == item._id ? 'active' : ''} ${styles.tableMoreActive}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(item._id);
        }}
      >
        <div className='table'>
          <div
            className={`td col ${validatedBlocksTh[0].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? validatedBlocksTh[0].mobileWidth : validatedBlocksTh[0].width}%`,
              height: '88px',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <span>{item?.block}</span>
          </div>
          <div
            className={`td col ${validatedBlocksTh[1].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? validatedBlocksTh[1].mobileWidth : validatedBlocksTh[1].width}%`,
              height: '88px',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <span>{item?.age}</span>
          </div>
          <div
            className={`td col ${validatedBlocksTh[2].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? validatedBlocksTh[2].mobileWidth : validatedBlocksTh[2].width}%`,
              height: '88px',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <span>{item?.transaction}</span>
          </div>
          <div
            className={`td col ${validatedBlocksTh[3].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? validatedBlocksTh[3].mobileWidth : validatedBlocksTh[3].width}%`,
              height: '88px',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <span>{item?.gas}</span>
          </div>
          <div
            className={`td col ${validatedBlocksTh[4].mobileWidth ? true : false}`}
            style={{
              width: `${mobile ? validatedBlocksTh[4].mobileWidth : validatedBlocksTh[4].width}%`,
              height: '88px',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <span>{item?.rewards}</span>
          </div>
        </div>
        <div className='table-more' style={{ background: 'none', borderBottom: 'none' }} />
        <div className='icon-place' style={{ background: 'none', borderBottom: 'none' }}>
          <svg
            width='12'
            height='7'
            viewBox='0 0 12 7'
            fill='none'
            transform={mobileExpand == item._id ? `rotate(180 0 0)` : ''}
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325'
              stroke={mobileExpand == item._id ? '#0500FF' : 'white'}
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className='table-mobile'>
          <div className='table-mobile-content'>
            <div className='td'>
              <div className='mobile-ttl'>{validatedBlocksTh[1].name}</div>
              <span>{item?.age}</span>
            </div>
            {width <= 550 && (
              <div className='td'>
                <div className='mobile-ttl'>{validatedBlocksTh[2].name}</div>
                <span>{item?.transaction}</span>
              </div>
            )}
            <div className='td'>
              <div className='mobile-ttl'>{validatedBlocksTh[3].name}</div>
              <span>{item?.gas}</span>
            </div>
            <div className='td'>
              <div className='mobile-ttl'>{validatedBlocksTh[4].name}</div>
              <span>{item?.rewards}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const tableEmptyData = {
    icon: <NoData />,
    label: 'No Data',
  };

  let element = null;

  if (sortBy === 'Delegators') {
    return (element = (
      <div data-aos='fade-up' data-aos-delay='20' className={styles.wrapper}>
        <TableUI
          type={'table-version'}
          tableHead={delegatorsTh}
          mobile={mobile}
          customHeadStyles={{
            borderBottom: '1px solid rgba(255, 255, 255, .1)',
            backgroundColor: 'unset',
            width: 'calc(100% - 75px)',
          }}
          customStyles={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: `blur(5px)`,
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            overflow: 'scroll',
          }}
          customTableMoreStyles={{
            background: 'none',
            height: '89px',
            display: 'flex',
          }}
          customThStyles={{ textTransform: 'uppercase', color: '#FFF' }}
          tableData={tableData}
          tableEmptyData={tableEmptyData}
          loading={delegatorsLoading}
        />
        <TableElementUI
          customStyle={{ paddingBottom: '40px', marginTop: '50px' }}
          type={'pagination'}
          currentPage={delegatorsCurrentPage}
          totalCount={delegatorsTotalCount}
          onPageChange={delegatorsOnPageChange}
        />
      </div>
    ));
  }

  if (sortBy === 'Validated Blocks') {
    return (element = (
      <div data-aos='fade-up' data-aos-delay='20' className={styles.wrapper}>
        <TableUI
          type={'table-version'}
          tableHead={validatedBlocksTh}
          mobile={false}
          customHeadStyles={{
            borderBottom: '1px solid rgba(255, 255, 255, .1)',
            backgroundColor: 'unset',
          }}
          customStyles={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: `blur(5px)`,
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
          customThStyles={{ textTransform: 'uppercase', color: '#FFF' }}
          customTableMoreStyles={{
            background: 'none',
            height: '89px',
            display: mobile ? 'flex' : 'none',
          }}
          tableData={validatedBlocksTableData}
          tableEmptyData={tableEmptyData}
          loading={validatedBlocksLoading}
        />
        <TableElementUI
          customStyle={{ paddingBottom: '40px', marginTop: '50px' }}
          type={'pagination'}
          currentPage={validatedBlocksCurrentPage}
          totalCount={validatedBlocksTotalCount}
          onPageChange={validatedBlocksOnPageChange}
        />
      </div>
    ));
  }

  return element;
};

export default Table;
