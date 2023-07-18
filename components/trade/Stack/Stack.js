import { Button, AccountSummary, Visual, Table } from '@catena-network/catena-ui-module';
import { React, useState } from 'react';

import { useMobileWidth } from '../../../hooks/useMobileWidth';
import AddSquareIcon from '../../svg/AddSquareIcon';
import ArrowSvg from '../../svg/ArrowSvg';
import EarnIcon from '../../svg/EarnIcon';

import styles from './Stack.module.css';

function Stack() {
  // let closeHandler = () => {
  //   setActive(false);
  // };
  const [stakersInfo, setStakersInfo] = useState({
    currentStake: 0,
    earn: 0,
    claimedReward: 0,
    walletBalance: 0,
    totalStaked: 0,
    totalUnstaked: 0,
  });
  const [mobileExpand, setMobileExpand] = useState(null);
  const { width, mobile } = useMobileWidth();
  const [loading, setLoading] = useState(false);
  const [createStakingPopUpActive, setCreateStakingPopUpActive] = useState(false);

  const handlePopUpOpen = () => {
    setCreateStakingPopUpActive(true);
  };

  let mobileExpandFunc = id => {
    if (mobile) {
      if (id !== mobileExpand) {
        setMobileExpand(id);
      } else {
        setMobileExpand(null);
      }
    }
  };

  const [stackContractInfo, setStackContractInfo] = useState({
    totalStakers: 0,
    totalStakedToken: 0,
  });

  const tableHead = [
    {
      name: 'Staked Amount',
      width: 15,
      mobileWidth: 45,
      id: 0,
    },
    {
      name: 'Stake Date ',
      width: 15,
      id: 1,
    },
    {
      name: 'Unstake Date',
      width: 15,
      id: 2,
    },
    {
      name: 'Earn Reward',
      width: 15,
      id: 3,
    },
    {
      name: 'Harvest',
      width: 15,
      mobileWidth: 45,
      id: 4,
    },
    {
      name: '',
      width: 10,
      id: 5,
      mobileWidth: 35,
      position: 'right',
      className: 'buttons-th',
      onClick: index => console.log(index),
    },
    {
      name: '',
      width: 7,
      id: 6,
      mobileWidth: 20,
      position: 'right',
      className: 'buttons-th',
      onClick: index => console.log(index),
    },
  ];

  const accountSummaryData = [
    [
      {
        icon: <EarnIcon />,
        title: 'Current Stake',
        value: stakersInfo?.currentStake,
      },
      {
        icon: <EarnIcon />,
        title: 'Earn',
        value: stakersInfo?.earn,
      },
      {
        icon: <EarnIcon />,
        title: 'Claimed Reward',
        value: stakersInfo?.claimedReward,
      },
    ],
    [
      {
        icon: <EarnIcon />,
        title: 'Your Wallet Balance',
        value: stakersInfo?.walletBalance,
      },
      {
        icon: <EarnIcon />,
        title: 'Total Staked',
        value: stakersInfo?.totalStaked,
      },
      {
        icon: <EarnIcon />,
        title: 'Total Unstaked',
        value: stakersInfo?.totalUnstaked,
      },
    ],
  ];

  const stakersRecord = [
    {
      id: 12123,
      amount: '1,220,000.2',
      staketime: '01.02.2023 10:00AM',
      unstaketime: '01.02.2023 08:15PM',
      CML: 'CML',
      realtimeRewardPerBlock: '1,132,000.1',
    },
    {
      id: 2121234,
      amount: '1,220,000.2',
      staketime: '01.02.2023 10:00AM',
      unstaketime: '01.02.2023 08:15PM',
      CML: 'CML',
      realtimeRewardPerBlock: '1,132,000.1',
    },
    {
      id: 1221235,
      amount: '1,220,000.2',
      staketime: '01.02.2023 10:00AM',
      unstaketime: '01.02.2023 08:15PM',
      CML: 'CML',
      realtimeRewardPerBlock: '1,132,000.1',
    },
  ];

  const tableEmptyData = {
    label: 'Stake to earn Complend reward',
    button: (
      <Button element={'referral-button'} label={'Create Staking'} icon={<ArrowSvg />} onClick={handlePopUpOpen} />
    ),
  };

  let tableData =
    stakersRecord?.length > 0 &&
    stakersRecord.map((item, index) => (
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
          <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.299 1.33325L6.47141 5.16089C6.01937 5.61293 5.27968 5.61293 4.82764 5.16089L1 1.33325'
              stroke='white'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div className='table-mobile'>
          <div className='table-mobile-content'>
            {[1, 2, 3].map(index => (
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
    <>
      <div className={styles.main} style={{ flexDirection: `${width < 1025 ? 'column' : 'row'}` }}>
        <div className={styles.stakingMain}>
          <div className={styles.stakingContent}>
            <div className={styles.stakingContentMain}>
              <h2>Staking</h2>
              <div className={styles.stakingContentInfo}>
                <span className={styles.font}>You can earn protocol income</span>
                <p className={styles.font}>
                  and Complend rewards from locked-staking and MUXLP staking. All staking will take place on Complend
                </p>
              </div>
              <div className={styles.stakingContentInfoButtons}>
                <Button
                  element={'referral-button'}
                  label={'Create Staking'}
                  icon={<AddSquareIcon color='#00C6FF' />}
                  active={true}
                  onClick={handlePopUpOpen}
                />
              </div>
            </div>
            <AccountSummary data={accountSummaryData} stackContractInfo={stackContractInfo} label={'Your Stake'} />
          </div>
          <div className={styles.stakingTablesContainer}>
            <Visual
              element={'table-header'}
              label={'Stake'}
              description={'You can stake and then earn complend reward'}
              fontSize={'font-20'}
              customStyles={{ border: 'none' }}
              buttons={
                <Button
                  element={'referral-button'}
                  label={'Create Staking'}
                  icon={<AddSquareIcon color='#00C6FF' />}
                  onClick={handlePopUpOpen}
                />
              }
            />
            <Table
              type={'table-version'}
              tableHead={tableHead}
              mobile={mobile}
              tableData={stakersRecord.length ? tableData : false}
              tableEmpty={true}
              tableEmptyData={tableEmptyData}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Stack;
