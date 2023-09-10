import React from 'react';
import { useRouter } from 'next/router';

import createAxiosInstance from '../../api/axios';

import EventsItem from '../../../components/home/events/components/eventsInner/EventsInner';

const index = async () => {
  const router = useRouter();
  const { slug } = router.query;
  const axios = createAxiosInstance();
<<<<<<< HEAD
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/event/get-one-event`, { slug });
  console.log(data);
  
  return <EventsItem item={data} slug={slug}/>;
=======

  const fetchData = async () => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/event/get-one-event`, { slug });
    return data;
  };
  
  const event = fetchData();

  return <EventsItem event={event} slug={slug} />;
>>>>>>> 39e701b8206cf46808a226459d50fe76d10eb44f
};

export default index;
