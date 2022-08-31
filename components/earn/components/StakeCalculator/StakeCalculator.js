import React, { useState } from 'react';

import { ExclamationSvg, QuestionMarkIcon, ReverseSvg } from '../../../svg';
import TabFilter from '../../../UI/filters/TabFilter';

import styles from './StakeCalculator.module.css';

const stakeTypeData = [
  {
    id: 0,
    label: 'Flexible',
  },
  {
    id: 1,
    label: 'Locked',
  },
];

const stakeData = [
  {
    id: 0,
    label: '$ 100',
  },
  {
    id: 1,
    label: '$ 1000',
  },
  {
    id: 2,
    label: 'My Balance',
  },
];

const stakeDurationData = [
  {
    id: 0,
    label: '1D',
  },
  {
    id: 1,
    label: '7D',
  },
  {
    id: 2,
    label: '30D',
  },
  {
    id: 3,
    label: '1Y',
  },
  {
    id: 4,
    label: '5Y',
  },
];

const stakeDurationDataLocked = [
  {
    id: 0,
    label: '1W',
  },
  {
    id: 1,
    label: '5W',
  },
  {
    id: 2,
    label: '10W',
  },
  {
    id: 3,
    label: '25W',
  },
  {
    id: 4,
    label: 'MAX',
  },
];

const StakeCalculator = ({ type }) => {
  const [reverseStake, setReverseStake] = useState(false);
  const [activeStakeType, setActiveStakeType] = useState('Flexible');
  const [stakeAmount, setStakeAmount] = useState('$ 100');
  const [stakeDuration, setStakeDuration] = useState('1D');
  const [enableCompound, setEnableCompound] = useState(false);
  const [compoundEvery, setCompoundEvery] = useState('1D');
  const [stakeDurationLocked, setStakeDurationLocked] = useState(1);

  const handleStakeDurationLocked = e => {
    if (!isNaN(e?.target?.value) && e?.target?.value.length < 4) {
      setStakeDurationLocked(e.target.value);
    }
    if (e === '1W') setStakeDurationLocked(1);
    if (e === '5W') setStakeDurationLocked(5);
    if (e === '10W') setStakeDurationLocked(10);
    if (e === '25W') setStakeDurationLocked(25);
    if (e === 'MAX') setStakeDurationLocked(52);
  };

  return (
    <>
      {type === 'auto' && (
        <section className={styles.calculatorSection}>
          <TabFilter
            onClick={e => setActiveStakeType(e)}
            data={stakeTypeData}
            activeMenu={activeStakeType}
            css={{
              wrap: styles.Activity__filterWrap,
              filter: styles.Activity__filter,
              active: styles.Activity__filterActive,
              item: styles.Activity__filter__item,
            }}
          />
          <h3 className={styles.stakedCMCX}>CMCX Staked</h3>
          <div className={styles.calculator}>
            <div
              className={`${styles.displayAmount}  ${
                reverseStake && styles.reverseOrder
              }`}
            >
              <p className={styles.inUSD}>0.00 USD</p>
              <p className={styles.inCMCX}>0.00 CMCX</p>
            </div>
            <ReverseSvg
              className={styles.reverseSvg}
              onClick={() => setReverseStake(prevState => !prevState)}
            />
          </div>
          <div className={styles.stakeAmountRow}>
            <TabFilter
              onClick={e => setStakeAmount(e)}
              data={stakeData}
              activeMenu={stakeAmount}
              css={{
                wrap: styles.stakeAmount__filterWrap,
                filter: styles.stakeAmount__filter,
                active: styles.stakeAmount__filterActive,
                item: styles.stakeAmount__filter__item,
              }}
            />
            <QuestionMarkIcon className={styles.QuestionMarkIcon} />
          </div>
          <h3 className={styles.stakedTitle}>
            {' '}
            {activeStakeType === 'Flexible' ? 'Staked For' : 'Add Duration'}
          </h3>
          {activeStakeType === 'Flexible' ? (
            <TabFilter
              onClick={e => setStakeDuration(e)}
              data={stakeDurationData}
              activeMenu={stakeDuration}
              css={{
                wrap: styles.stakeAmount__filterWrap,
                filter: styles.stakeAmount__filter,
                active: styles.stakeAmount__filterActive,
                item: styles.stakeDuration__filter__item,
              }}
            />
          ) : (
            <>
              <TabFilter
                onClick={handleStakeDurationLocked}
                data={stakeDurationDataLocked}
                activeMenu={
                  stakeDurationLocked == 52 ? 'MAX' : stakeDurationLocked + 'W'
                }
                css={{
                  wrap: styles.stakeAmount__filterWrap,
                  filter: styles.stakeAmount__filter,
                  active: styles.stakeAmount__filterActive,
                  item: styles.stakeDuration__filter__item,
                }}
              />
              <input
                type='text'
                value={stakeDurationLocked}
                onChange={handleStakeDurationLocked}
                className={styles.searchInput}
              />
            </>
          )}
          <div className={styles.borderBottom}>
            <div className={styles.ROIWrapper}>
              <div className={styles.headerColumn}>
                <p>ROI at Current Rates</p>
                <p className={styles.displayMain}>$0.00</p>
                <p>~ 8.137 SFUND(0.30%)</p>
              </div>
              <ExclamationSvg className={styles.ExclamationSvg} />
            </div>
          </div>
        </section>
      )}
      {type === 'manual' && (
        <section className={styles.calculatorSection}>
          <h3 className={styles.stakedCMCX}>CMCX Staked</h3>
          <div className={styles.calculator}>
            <div
              className={`${styles.displayAmount}  ${
                reverseStake && styles.reverseOrder
              }`}
            >
              <p className={styles.inUSD}>0.00 USD</p>
              <p className={styles.inCMCX}>0.00 CMCX</p>
            </div>
            <ReverseSvg
              className={styles.reverseSvg}
              onClick={() => setReverseStake(prevState => !prevState)}
            />
          </div>
          <div className={styles.stakeAmountRow}>
            <TabFilter
              onClick={e => setStakeAmount(e)}
              data={stakeData}
              activeMenu={stakeAmount}
              css={{
                wrap: styles.stakeAmount__filterWrap,
                filter: styles.stakeAmount__filter,
                active: styles.stakeAmount__filterActive,
                item: styles.stakeAmount__filter__item,
              }}
            />
            <QuestionMarkIcon className={styles.QuestionMarkIcon} />
          </div>
          <h3 className={styles.stakedTitle}>Staked For</h3>
          <TabFilter
            onClick={e => setStakeDuration(e)}
            data={stakeDurationData}
            activeMenu={stakeDuration}
            css={{
              wrap: styles.stakeAmount__filterWrap,
              filter: styles.stakeAmount__filter,
              active: styles.stakeAmount__filterActive,
              item: styles.stakeDuration__filter__item,
            }}
          />
          <div className={styles.compoundWrapper}>
            <label className={styles.checkboxContainer}>
              <h3>Compounding Every</h3>
              <input
                onClick={() => setEnableCompound(prevState => !prevState)}
                type='checkbox'
              />
              <span className={styles.checkmark}></span>
            </label>
          </div>
          <div className={`${!enableCompound && styles.disabled}`}>
            <TabFilter
              onClick={e => setCompoundEvery(e)}
              data={stakeDurationData}
              activeMenu={compoundEvery}
              css={{
                wrap: styles.stakeAmount__filterWrap,
                filter: styles.stakeAmount__filter,
                active: styles.stakeAmount__filterActive,
                item: styles.stakeDuration__filter__item,
              }}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default StakeCalculator;
