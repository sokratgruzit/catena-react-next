import React from 'react';
import Events from '../../../components/home/events/Event';
import createAxiosInstance from '../../../pages/api/axios';

export const getStaticProps = async () => {
  const axios = createAxiosInstance();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/event/get-all-event`);

  return {
    props: {
      events: data,
    },
  };
};

const index = ({ events }) => {
  return <Events events={events} />;
};

export default index;
