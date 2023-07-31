import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import createAxiosInstance from '../../../pages/api/axios';
import EventsItem from '../../../components/home/events/EventsItem';

const EventsInner = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (slug) {
      const axios = createAxiosInstance();
      axios
        .get(`http://localhost:4003/event/get-all-event`)
        .then(res => {
          const foundItem = res?.data.find(item => item.slug === slug);
          console.log('Fetched data:', res?.data);
          console.log('Found item:', foundItem);
          setItem(foundItem);
        })
        .catch(err => {
          console.log(err?.response);
        });
    }
  }, [slug]);

  if (!item) {
    return (
      <div className='container' style={{ paddingTop: '40%', paddingLeft: '50%' }}>
        Loading...
      </div>
    );
  }

  return (
    <div className='container' style={{ paddingTop: '200px', paddingBottom: '100px' }}>
      <EventsItem item={item} />
    </div>
  );
};

export default EventsInner;
