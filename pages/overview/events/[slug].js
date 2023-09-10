import React from 'react';
import { useRouter } from 'next/router';

import createAxiosInstance from '../../api/axios';

import EventsItem from '../../../components/home/events/components/eventsInner/EventsInner';

const index = async () => {
  const router = useRouter();
  const { slug } = router;
  const axios = createAxiosInstance();

  const fetchData = async () => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/event/get-one-event`, { slug });
    return data;
  };
  
  const event = fetchData();

  return <EventsItem event={event} slug={slug} />;
};

export default index;
