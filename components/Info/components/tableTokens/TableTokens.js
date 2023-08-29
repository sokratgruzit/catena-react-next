import React, { useState } from 'react';
import { useMobileWidth } from '../../../../hooks/useMobileWidth';

import { Table, Button, TableElement } from '@catena-network/catena-ui-module';
import { ArrowSvg } from '../../../svg';
import ArrowDownSvg from '../../../svg/ArrowDownSvg';

import styles from '../InfoTables/InfoTables.module.css'

const TableFarms = ({ title, tableInfo, tableHead, Table__Types }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [mobileExpand, setMobileExpand] = useState(null);
    const [dataType, setDataType] = useState('All');
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
    let tableHeadMore;
    tableHeadMore = (
        <div className={styles.Table__wrapper}>
            <div className={styles.radioWrapper}>
                {Table__Types?.map(({ type }, index) => (
                    <label onClick={e => setDataType(type)} className={styles.radioContainer} key={type}>
                        {type}
                        <input type='radio' name={'transaction'} defaultChecked={index === 0} onChange={() => setDataType(type)} />
                        <span className={styles.radioCheckmark}></span>
                    </label>
                ))}
            </div>
        </div>
    )

    let tableData =
        tableInfo?.length > 0 &&
        tableInfo.map((item, index) => (
            <>
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
            </>
        ));

    return (
            <div className='container_bordered'>
                <h2 style={{marginBottom: "20px"}} className='ttl font-40'>{title}</h2>
           <div className='container_bordered-child'>
            <Table
                type={'table-version'}
                tableHeadMore={tableHeadMore}
                tableHead={tableHead}
                mobile={mobile}
                tableData={tableInfo?.length ? tableData : false}
                tableEmpty={true}
                tableEmptyData={tableEmptyData}
                loading={loading}
            />
            </div>
            <TableElement
                type={"pagination"}
                currentPage={currentPage}
                totalCount={20}
                onPageChange={(page) => setCurrentPage(page)}
                customStyle={{ margin: '20px 0 40px 0' }}
            />
             </div>
    );
}

export default TableFarms
