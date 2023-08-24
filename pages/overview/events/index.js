import React from 'react';
import Events from '../../../components/home/events/Events';
import createAxiosInstance from '../../../pages/api/axios';

export const getServerSideProps = async ({ query }) => {
  const currentPage = query.page || 1;
  const limit = 3;

  const axios = createAxiosInstance();
  const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/event/get-all-event`, {
    params: { page: currentPage, limit: limit },
  });

  const eventsData = response.data.event;
  const current = response.data.currentPage;
  const totalPages = response.data.totalPages;

  return {
    props: {
      events: eventsData,
      currentPage: current,
      totalCount: totalPages,
    },
  };
};

const index = ({ events, currentPage = 1, totalCount }) => {
  return <Events events={events} urrentPage={currentPage} totalCount={totalCount} />;
};

export default index;
