import React, { useState } from 'react';
import {
  AutoTag,
  ExclamationSvg,
  ManualTag,
  MathSignSvg,
  QuestionMarkIcon,
  ReverseSvg,
  VectorSvg,
} from '../../../svg';
import Button from '../../../UI/button/Button';
import StakeCalculator from '../StakeCalculator/StakeCalculator';

import styles from './PoolsTableComponent.module.css';

const PoolsTableComponent = ({ item, toggleExpand, expandRow }) => {
  const [itemType, setItemType] = useState(item?.data[6]?.tag);
  const [openCalculator, setOpenCalculator] = useState(false);
  const [openCalculatorManual, setOpenCalculatorManual] = useState(false);

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
                  className={styles.MathSignSvg}
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
                  className={styles.MathSignSvg}
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
              <MathSignSvg
                className={styles.MathSignSvg}
                onClick={() => setOpenCalculatorManual(prevState => !prevState)}
              />
            </div>
          </div>
        )}
        {openCalculator && <StakeCalculator type='auto' />}
        {openCalculatorManual && <StakeCalculator type='manual' />}
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
