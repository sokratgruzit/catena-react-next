import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import createAxiosInstance from '../../../pages/api/axios';
import EventsItem from '../../../components/home/events/EventsItem';

export const getStaticPaths = async ({ locales }) => {
  const axios = createAxiosInstance();

  let events = await axios
  .get(`${process.env.NEXT_PUBLIC_URL}/event/get-all-event`)
  .then(res => {
    return res?.data;
  })
  .catch(err => {
    console.log(err?.response);
  });

  let paths;

  if (events && events.length > 0) {
    paths = press.flatMap((item) =>
      locales.map((loc) => ({
        params: { slug: item.slug },
        locale: loc,
      }))
    );
  } else {
    paths = locales.map((loc) => ({
      params: { slug: 'default' },
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
      item: foundItem,
      slug,
    },
  };
};

const EventsInner = ({ item }) => {
  return (
    <div className='container' style={{ paddingTop: '200px', paddingBottom: '100px' }}>
      <EventsItem item={item} />
    </div>
  );
};

export default EventsInner;
