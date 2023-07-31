import React from 'react';
import Card from '../../../UI/card/Card';
import createAxiosInstance from '../../../../pages/api/axios';
import { useEffect, useMemo, useState } from 'react';

import styles from '../css/Boxs.module.css';

const Boxs = () => {
  const axios = useMemo(() => createAxiosInstance(), []);
  const [allEvent, setAllEvent] = useState([]);

  const fileAdress = `${process.env.NEXT_PUBLIC_URL}/uploads/event/`;
  const title = "event.title";
  const description = "event.description";



  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_URL}/event/get-all-event`)
      .then(res => {
        setAllEvent(res?.data);
      })
      .catch(err => {
        console.log(err?.response);
      });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.mainContainer} container`}>
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
          <Card dataArr={allEvent} fileAdress={fileAdress} title={title} description={description} slugType='events' />
        </div>
      </div>
    </div>
  );
};

export default Boxs;
