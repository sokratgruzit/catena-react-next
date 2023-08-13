import React from 'react';
import Card from '../../../UI/card/Card';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '../css/Boxs.module.css';
import JoinCommunity from './JoinCommunity';

const Boxs = ({ events }) => {
  const [activeYear, setActiveYear] = useState('');
  const [filterData, setfilterData] = useState();
  const activeLang = useSelector(state => state.settings.activeLang);

  const fileAdress = `${process.env.NEXT_PUBLIC_URL}/uploads/events/`;
  const title = 'event.title';
  const description = 'event.description';

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
      </div>
      <div className={styles.joinCommunity}>
        <JoinCommunity />
      </div>
    </div>
  );
};

export default Boxs;
