import React from 'react';
import createAxiosInstance from '../../../pages/api/axios';
import EventsItem from '../../../components/home/events/EventsItem';

export const getStaticPaths = async ({ locales }) => {
  const axios = createAxiosInstance();

  let events = await axios
  .get(`${process.env.NEXT_PUBLIC_URL}/event/get-all-event-slug`)
  .then(res => {
    return res?.data;
  })
  .catch(err => {
    console.log(err?.response);
  });

  let paths;

  if (events && events.length > 0) {
    paths = events.flatMap((item) =>
      locales.map((loc) => ({
        params: { slug: item.slug },
        locale: loc,
      }))
    );
  } else {
    paths = locales.map((loc) => ({
      params: { slug: `event-${loc}` },
      locale: loc,
    }));
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const slug = context.params.slug;
  const axios = createAxiosInstance();
  const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/event/get-one-event`, { slug });
  const foundItem = res?.data;

  return {
    props: {
      item: foundItem
    },
  };
};

const index = ({ item }) => {
  return <EventsItem item={item} />;
};

export default index;
