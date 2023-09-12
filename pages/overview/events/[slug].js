import React from 'react';

import createAxiosInstance from '../../api/axios';
import EventsInner from '../../../components/home/events/components/eventsInner/EventsInner';

export const getServerSideProps = async context => {
  const { slug } = context.query;
  const axios = createAxiosInstance();
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/event/get-one-event`, { slug });

  return {
    props: {
      event: data || {},
      slug,
    },
  };
};

const index = ({ event, slug }) => {
  return <EventsInner event={event} slug={slug} />;
};

export default index;
