import React from 'react';
import { useRouter } from 'next/router';

import createAxiosInstance from '../../api/axios';

import EventsItem from '../../../components/home/events/EventsItem';

const index = () => {
  const router = useRouter();
  const { slug } = router;
  const axios = createAxiosInstance();
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/event/get-one-event`, { slug });
  
  return <EventsItem item={data} />;
};

export default index;
