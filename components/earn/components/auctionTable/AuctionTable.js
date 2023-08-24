import React, { useState } from 'react';
import { useMobileWidth } from '../../../../hooks/useMobileWidth';

import { Table, Button, Tabs, TableElement } from '@catena-network/catena-ui-module';

import { ArrowSvg } from '../../../svg';
import ArrowDownSvg from '../../../svg/ArrowDownSvg';

import styles from './AuctionTable.module.css';

const tableHead = [
  {
    name: 'Position',
    width: 15,
    mobileWidth: 45,
    id: 0,
  },
  {
    name: 'Farm',
    width: 15,
    id: 1,
  },
  {
    name: 'CMCX Bid',
    width: 15,
    id: 2,
  },
];

const AuctionTable = ({ tableDataArr }) => {
  const [mobileExpand, setMobileExpand] = useState(null);
  const [createStakingPopUpActive, setCreateStakingPopUpActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const { width, mobile } = useMobileWidth();
  const [currentPage, setCurrentPage] = useState(1);

  let mobileExpandFunc = id => {
    if (!mobile) {
      if (id !== mobileExpand) {
        setMobileExpand(id);
      } else {
        setMobileExpand(null);
      }
    }
  };

  const handlePopUpOpen = () => {
    setCreateStakingPopUpActive(true);
  };

  const tableEmptyData = {
    label: 'Stake to earn Complend reward',
    button: (
      <Button element={'referral-button'} label={'Create Staking'} icon={<ArrowSvg />} onClick={handlePopUpOpen} />
    ),
  };

  let tableData =
    tableDataArr?.length > 0 &&
    tableDataArr.map((item, index) => (
      <div
        className={`table-parent ${mobileExpand === index ? 'active' : ''}`}
        key={index}
        onClick={() => {
          mobileExpandFunc(index);
        }}
      >
        <div className={'table'}>
          {tableHead?.slice(0, 5).map((i, index) => (
            <div
              key={index}
              className={`td col ${i.mobileWidth ? true : false}`}
              style={{ width: `${mobile ? i.mobileWidth : i.width}%` }}
            >
              <span>
                {
                  [
                    item.amount,
                    item.staketime,
                    item.unstaketime,
                    'CML',
                    parseFloat(item.realtimeRewardPerBlock).toFixed(10),
                  ][index]
                }
              </span>
            </div>
          ))}
          {width > 940 &&
            tableHead.slice(5, 7).map((i, index) => (
              <div
                key={index}
                className={`td col ${i.position} ${i.mobileWidth ? true : false}`}
                style={{
                  width: `${mobile ? i.mobileWidth : i.width}%`,
                  marginRight: `${width < 1450 ? '10px' : '0'}`,
                }}
              >
                <Button
                  element={'staking-button'}
                  label={index === 0 ? 'Unstake' : 'Harvest'}
                  active={index === 0}
                  customStyles={{ borderRadius: '32px' }}
                  onClick={() => i.onClick(index)}
                  disabled={index === 0 ? item.unstaked : item.withdrawan}
                />
              </div>
            ))}
        </div>
        <div className='table-more' />
        <div className='icon-place'>
          <ArrowDownSvg />
        </div>
        <div className='table-mobile'>
          <div className='table-mobile-content'>
            {[0, 1, 2].map(index => (
              <div className='td' key={index}>
                <div className='mobile-ttl'>{tableHead[index].name}</div>
                <span>
                  {index === 1 && item.staketime}
                  {index === 2 && item.unstaketime}
                  {index === 3 && 'CML'}
                </span>
              </div>
            ))}
            {width <= 940 && (
              <div className='table-buttons'>
                {[5, 6].map(index => (
                  <div className='td' key={index}>
                    <Button
                      element='staking-button'
                      label={index === 5 ? 'Unstake' : 'Harvest'}
                      active={index === 5}
                      customStyles={{ borderRadius: '32px' }}
                      onClick={() => tableHead[index].onClick(index)}
                      disabled={index === 5 ? item.unstaked : item.withdrawan}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    ));

  return (
    <div className={`${styles.tableContainer} container_bordered`}>
      <div className={styles.tableTabs}>
        <Tabs
          type={'two-component-tabs-with-text'}
          leftBtnText='Latest'
          rightBtnText='Archive'
          customStyle={{ color: 'black' }}
        />
      </div>
      <div className={`${styles.tyablePagination} custum-text`}>
        <div className={styles.tyablePaginationInner}>
          <h4 style={{ marginBottom: '0' }}>Auctions</h4>
          <div className={styles.pageNumber}>
            <span style={{ opacity: '.6', fontSize: '30px' }}>#</span>
            <span style={{ fontSize: '30px' }}>20</span>
          </div>
          <TableElement
            type={'arrowPagination'}
            currentPage={currentPage}
            totalCount={20}
            onPageChange={page => setCurrentPage(page)}
            customStyle={{ marginLeft: '20px' }}
          />
        </div>
        <p style={{ marginBottom: '0' }}>Ended Jun 07, 2023 at 06:01 PM</p>
      </div>
      <Table
        type={'table-version'}
        tableHead={tableHead}
        mobile={mobile}
        tableData={tableDataArr.length ? tableData : false}
        tableEmpty={true}
        tableEmptyData={tableEmptyData}
        loading={loading}
        customStyles={{ border: '1px solid rgba(22, 32, 41, .2)', borderRadius: '20px', backgroundColor: '#FFF3E5' }}
      />
    </div>
  );
};

export default AuctionTable;
