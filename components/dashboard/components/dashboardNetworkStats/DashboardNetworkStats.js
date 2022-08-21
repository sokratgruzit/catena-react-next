import React from 'react';

import Button from '../../../UI/button/Button';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import Tooltip from '../../../UI/tooltip/Tooltip';

import styles from './DashboardNetworkStats.module.css';

const DashboardNetworkStats = () => {
  return (
    <div className={`container`}>
      <div className={styles.mainContainer}>
        <div className={styles.side}>
          <CornerDecor />
          <h2 className={styles.sideTtl}>Resources</h2>
          <div className={styles.progressParent}>
            <div className={styles.progressContainer}>
              <div className={styles.progressTitle}>
                <span>102/321</span>
                <Tooltip
                  title={'Energy'}
                  type={'dashboard'}
                  text={'Yle chame jonjoli mojvi'}
                />
              </div>
              <div className={styles.progress}>
                <i style={{ width: '40%' }}></i>
              </div>
            </div>
            <Button
              title={'Obtain'}
              type={'blue__border'}
              customStyles={{
                padding: '7px 0',
                width: '100px',
                fontSize: '13px',
                lineHeight: '18px',
                marginTop: 'auto',
              }}
            />
          </div>
          <div className={styles.progressParent}>
            <div className={styles.progressContainer}>
              <div className={styles.progressTitle}>
                <span>102/321</span>
                <Tooltip
                  title={'Bandwidth'}
                  type={'dashboard'}
                  text={
                    'Yle mamashenia bicho, xo gitxari ro es dedamotynuli shutka ar momdis bichoo'
                  }
                />
              </div>
              <div className={styles.progress}>
                <i style={{ width: '40%' }}></i>
              </div>
            </div>
            <Button
              title={'Rent'}
              type={'blue__border'}
              customStyles={{
                padding: '7px 0',
                width: '100px',
                fontSize: '13px',
                lineHeight: '18px',
                marginTop: 'auto',
              }}
            />
          </div>
        </div>
        <div className={styles.side}>
          <CornerDecor />
          <h2 className={styles.sideTtl}>CORE Power</h2>
          <div className={styles.sideSubTtl}>
            <span style={{ color: 'rgba(178, 181, 186, 1)' }}>
              Unwithdrawn Rewards:
            </span>{' '}
            0 <span style={{ color: 'rgba(255, 113, 82, 1)' }}>CMCX</span>
          </div>
          <div className={styles.progressParentSecond}>
            <div className={styles.progressContainer}>
              <div className={styles.progressTitle}>
                <span>102/321</span>
                <Tooltip
                  title={'CORE Power'}
                  type={'dashboard'}
                  text={
                    'Yle mamashenia bicho, xo gitxari ro es dedamotynuli shutka ar momdis bichoo, Yle mamashenia bicho, xo gitxari ro es dedamotynuli shutka ar momdis bichoo'
                  }
                />
              </div>
              <div className={styles.progress}>
                <i style={{ width: '40%' }}></i>
              </div>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              title={'Get Votes'}
              type={'blue__border'}
              customStyles={{
                padding: '7px 0',
                width: '156px',
                fontSize: '13px',
                lineHeight: '18px',
              }}
            />
            <Button
              title={'Votes'}
              type={'blue__border'}
              customStyles={{
                padding: '7px 0',
                width: '156px',
                fontSize: '13px',
                lineHeight: '18px',
              }}
            />
            <Button
              title={'Claim'}
              type={'blue__border'}
              customStyles={{
                padding: '7px 0',
                width: '156px',
                fontSize: '13px',
                lineHeight: '18px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNetworkStats;
