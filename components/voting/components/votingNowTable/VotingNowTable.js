import React, { useState } from 'react';
import styles from './VotingNowTable.module.css';
import { Button } from '@catena-network/catena-ui-module';
import { core, soon, close, community, voteNow } from '../../../UI/votingComponents/VotingComponents';

function VotingNowTable({ votingTableData }) {
  const initialDisplayCount = 7;
  const additionalItemsCount = 2;

  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isLoadMore, setIsLoadMore] = useState(true);

  const toggleLoadMore = () => {
    if (isLoadMore) {
      setDisplayCount(displayCount + additionalItemsCount);
      if (displayCount + additionalItemsCount >= votingTableData.length) {
        setIsLoadMore(false);
      }
    } else {
      setDisplayCount(initialDisplayCount);
      setIsLoadMore(true);
    }
  };

  const getVariationComponent = variation => {
    switch (typeof variation === 'string' ? variation.toLowerCase() : variation) {
      case 'core':
        return core;
      case 'soon':
        return soon;
      case 'close':
        return close;
      case 'community':
        return community;
      default:
        return null;
    }
  };

  return (
    <div className={styles.table}>
      {votingTableData.slice(0, displayCount).map((item, index) => (
        <div key={index} className={styles.row}>
          <div>
            <div className={styles.leftColumn}>
              <h3 className='font-20 ttl'>{item.teaser}</h3>
              <p>{item.date}</p>
            </div>
            <div className={styles.btns}>
              {item.vote === 'Vote Now' ? <Button label={item.vote} /> : ''}
              {Array.isArray(item.variation)
                ? item.variation.map((variation, i) => <div key={i}>{getVariationComponent(variation)}</div>)
                : getVariationComponent(item.variation)}
            </div>
          </div>
          <p className={styles.arrowBtn}>
            Read More
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.4302 18.8211C14.6202 18.8211 14.8102 18.7511 14.9602 18.6011L21.0302 12.5311C21.1697 12.39 21.2479 12.1995 21.2479 12.0011C21.2479 11.8027 21.1697 11.6122 21.0302 11.4711L14.9602 5.40109C14.6702 5.11109 14.1902 5.11109 13.9002 5.40109C13.6102 5.69109 13.6102 6.17109 13.9002 6.46109L19.4402 12.0011L13.9002 17.5411C13.6102 17.8311 13.6102 18.3111 13.9002 18.6011C14.0402 18.7511 14.2402 18.8211 14.4302 18.8211Z'
                fill='#212121'
              />
              <path
                d='M3.50081 12.75L20.3308 12.75C20.7408 12.75 21.0808 12.41 21.0808 12C21.0808 11.59 20.7408 11.25 20.3308 11.25L3.50081 11.25C3.09081 11.25 2.75081 11.59 2.75081 12C2.75081 12.41 3.09081 12.75 3.50081 12.75Z'
                fill='#212121'
              />
            </svg>
          </p>
        </div>
      ))}
      <Button
        onClick={toggleLoadMore}
        label={isLoadMore ? 'Load More' : 'Load Less'}
        className={isLoadMore ? styles.btn : styles.undoBtn}
        element={'button'}
        customStyles={{ width: '154px', border: '1px solid #162029', margin: ' 34px auto 20px auto' }}
      />
    </div>
  );
}

export default VotingNowTable;
