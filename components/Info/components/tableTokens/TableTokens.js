import React, { useState } from 'react';
import { useMobileWidth } from '../../../../hooks/useMobileWidth';

import { Table, Button } from '@catena-network/catena-ui-module';

import { ArrowSvg } from '../../../svg';
import ArrowDownSvg from '../../../svg/ArrowDownSvg';

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
const TableFarms = () => {
    const [mobileExpand, setMobileExpand] = useState(null);
    const [createStakingPopUpActive, setCreateStakingPopUpActive] = useState(false);
    const [loading, setLoading] = useState(false)
    const { width, mobile } = useMobileWidth();

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
                    <ArrowDownSvg />
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
        <div>
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
    );
}

export default TableFarms
