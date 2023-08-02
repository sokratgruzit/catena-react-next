import React from 'react';
import Events from '../../../components/home/events/Event';
import createAxiosInstance from '../../../pages/api/axios';

const Index = ({ event }) => {
  return <Events event={event} />;
};

export const getStaticProps = async () => {
  const axios = createAxiosInstance();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/event/get-all-event`);

  return {
    props: {
      event: data,
    },
  };
};

export default Index;
