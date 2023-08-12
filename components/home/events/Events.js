import React from 'react';
import { useRouter } from 'next/router';
import Card from '../../UI/card/Card';
import JoinCommunity from './components/JoinCommunity';
import { TableElement } from '@catena-network/catena-ui-module';

import styles from './css/Events.module.css';

const Events = ({ events, currentPage, totalCount }) => {
  const fileAdress = `${process.env.NEXT_PUBLIC_URL}/uploads/events/`;
  const title = 'event.title';
  const description = 'event.description';

  const router = useRouter();

  const handlePageChange = page => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.mainContainer} pT-180 container`}>
        <div className={styles.titleContainer}>
          <p className={styles.titlePartyOne}>Catena</p>
          <p className={styles.titlePartyTwo}>Events</p>
        </div>
        <div className={`${styles.titleDesc}`}>
          <p className='title font-40'>
            Braced dissected sheep, kermani halts, boy note. Quis raucous fall gown, euismod creatures spent, uproar
            tidings.
          </p>
        </div>
        <div className={`${styles.mapContainer} `}>
          <Card dataArr={events} fileAdress={fileAdress} title={title} description={description} slugType='events' />
        </div>
        <TableElement
          type='pagination'
          currentPage={currentPage}
          totalCount={totalCount}
          onPageChange={page => handlePageChange(page)}
        />
      </div>
      <div className={styles.joinCommunity}>
        <JoinCommunity />
      </div>
    </div>
  );
};

export default Events;
