import React, { useState } from 'react';
import {
  AutoTag,
  ExclamationSvg,
  ManualTag,
  MathSignSvg,
  QuestionMarkIcon,
  VectorSvg,
} from '../../../svg';
import Button from '../../../UI/button/Button';
import TabFilter from '../../../UI/filters/TabFilter';

import styles from './PoolsTableComponent.module.css';

const tabsData = [
  {
    id: 0,
    label: 'Flexible',
  },
  {
    id: 1,
    label: 'Locked',
  },
];

const PoolsTableComponent = ({ item, toggleExpand, expandRow }) => {
  const [itemType, setItemType] = useState(item?.data[6]?.tag);
  const [openCalculator, setOpenCalculator] = useState(false);

  const [active, setActive] = useState('Latest');

  const navigationHandler = activeItem => {
    setActive(activeItem);
  };

  // const item = item.data;
  console.log(openCalculator);
  return (
    <main className={styles.itemWrapper}>
      <section className={styles.headerSection}>
        <div className={styles.logoWrapper}>
          {item.data[0].svg1}
          {item.data[0].svg2}
        </div>
        <h1>{item.data[0].title}</h1>
        {itemType === 'auto' ? (
          <>
            <AutoTag />
            <QuestionMarkIcon className={styles.questionMarkIcon} />
          </>
        ) : (
          <>
            <ManualTag />
            <QuestionMarkIcon className={styles.questionMarkIcon} />
          </>
        )}
      </section>
      <section>
        {itemType === 'auto' ? (
          <div className={styles.autoBodyWrapper}>
            <div className={styles.autoRow}>
              <p>Flexible APY:</p>
              <div>
                {item.data[3].title}
                &#160;
                <MathSignSvg
                  onClick={() => setOpenCalculator(prevState => !prevState)}
                />
              </div>
            </div>
            <div className={styles.autoRow}>
              <p>Locked APY:</p>
              <div>
                <span>up to</span>
                &#160;
                {item.data[3].lockedAPY}
                &#160;
                <MathSignSvg
                  onClick={() => setOpenCalculator(prevState => !prevState)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.manualRow}>
            <p>
              APR: &#160;
              <ExclamationSvg />
            </p>
            <div>
              {item.data[3].title}
              &#160;
              <MathSignSvg />
            </div>
          </div>
        )}
        {openCalculator && (
          <section>
            <TabFilter
              onClick={navigationHandler}
              data={tabsData}
              activeMenu={active}
              css={{
                wrap: styles.Activity__filterWrap,
                filter: styles.Activity__filter,
                active: styles.Activity__filterActive,
                item: styles.Activity__filter__item,
              }}
            />
            <h3>CMCX Staked</h3>
            <div className={styles.calculator}>
              <div>
                <p>0.00 USD</p>
                <p>0.00 CMCX</p>
              </div>
            </div>
          </section>
        )}
        <section className={styles.connectSection}>
          <h2>Start Earning</h2>
          <Button
            title={'Connect Wallet'}
            type={'blue'}
            className={styles.connectButton}
          />
        </section>

        <div className={styles.expandButton} onClick={toggleExpand}>
          {expandRow ? 'Hide' : 'Details'}
          <VectorSvg
            className={`${styles.VectorSvg} ${
              expandRow && styles.vectorActive
            }`}
          />
        </div>
      </section>
    </main>
  );
};

export default PoolsTableComponent;
