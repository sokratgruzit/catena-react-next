import React, { useEffect, useState, useMemo } from 'react';
import Slider from '../../../../UI/slider/Slider';
import CopyLink from '../../../../UI/copyLink/CopyLink';
import { useSelector } from 'react-redux';
import createAxiosInstance from '../../../../../pages/api/axios';
import Card from '../../../../UI/card/Card';
import styles from './EventsInner.module.css';
import JoinCommunity from '../joinComunity/JoinCommunity';

const EventsInner = ({ event, slug }) => {
  const [activeYear, setActiveYear] = useState('');
  const [allEvent, setAllEvent] = useState([]);
  const fileAdress = `${process.env.NEXT_PUBLIC_URL}/uploads/events/`;
  const [filterData, setFilterData] = useState();
  const activeLang = useSelector(state => state.settings.activeLang);
  const axios = createAxiosInstance();
  const title = 'event.title';
  const description = 'event.description';

  const handleYearClick = year => {
    setActiveYear(year);
    const data = allEvent.filter(event => {
      const itemYear = event.createdAt.substring(0, 4);
      return itemYear === year;
    });
    setFilterData(data);
  };
  useEffect(() => {
    const axios = createAxiosInstance();
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/event/get-all-event`)
      .then(res => {
        const filteredData = res?.data.filter(eventItem => eventItem.slug !== slug);
        setAllEvent(filteredData);
      })
      .catch(err => {
        console.log(err?.response);
      });
  }, [slug]);
  useEffect(() => {
    handleYearClick('2023');
  }, [allEvent]);

  useEffect(() => {
    handleYearClick('2023');
  }, [allEvent]);

  const sliderImages = [
    `${process.env.NEXT_PUBLIC_URL}/uploads/events/${event?.image}`,
    `${process.env.NEXT_PUBLIC_URL}/uploads/events/${event?.logo_image}`,
  ];

  const data = [
    {
      time: '0:13 PM GMT+3',
      month: 'October 26',
      year: 2021,
    },
  ];
  const getCurrentPageURL = () => {
    return window.location.href;
  };

  const [relatedEvents, setRelatedEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4003/event/get-all-event`)
      .then(res => {
        const allEvents = res?.data || [];
        const filteredEvents = allEvents.filter(ev => ev._id !== event?._id);
        for (let i = filteredEvents.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [filteredEvents[i], filteredEvents[j]] = [filteredEvents[j], filteredEvents[i]];
        }
        const related = filteredEvents.slice(0, 2);
        setRelatedEvents([related]);
      })
      .catch(err => {
        console.log(err?.response);
      });
  }, [event]);

  return (
    <div className='pT-180 container'>
      <div className='custum-text'>
        <h1>{event?.title['en']['event.title']}</h1>
        <span>
          <button>Digital</button>
          <CopyLink data={data} currentPageURL={getCurrentPageURL} showDetails={false} showCopyButton={true} />
        </span>
        <Slider images={sliderImages} />
        <div>{event?.description && <p>{event?.inner_descr['en']['event.description']}</p>}</div>
        <p>{event?.text['en']['event.text']}</p>
        <p>{event?.inner_descr['en']['event.description']}</p>
        <span>
          <button>Digital</button>
          <CopyLink data={data} currentPageURL={getCurrentPageURL} showDetails={false} showCopyButton={true} />
        </span>
      </div>

      <div className={styles.items}>
        <h2 className='ttl font_51'>Other Events</h2>
        <div className={styles.item}>
          {relatedEvents.map(ev => (
            <Card
              key={ev._id}
              dataArr={ev}
              fileAdress={fileAdress}
              title={title}
              description={description}
              slugType='events'
            />
          ))}
        </div>
      </div>
      <div className={styles.joinCommunity}>
        <JoinCommunity />
      </div>
    </div>
  );
};

export default EventsInner;
