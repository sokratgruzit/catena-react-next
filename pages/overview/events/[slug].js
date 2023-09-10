import React from 'react';
import { useRouter } from 'next/router';

import createAxiosInstance from '../../api/axios';

import EventsItem from '../../../components/home/events/components/eventsInner/EventsInner';

const index = async () => {
  const router = useRouter();
  const { slug } = router.query;
  const axios = createAxiosInstance();
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/event/get-one-event`, { slug });
  console.log(data);
  
  return <EventsItem item={data} slug={slug}/>;
};

export default index;
