import React from 'react';
import createAxiosInstance from '../../api/axios';
import CareersIneer from '../../../components/home/careers/careers-inner/CareersIneer';

export const getStaticPaths = async ({ locales }) => {
  const axios = createAxiosInstance();

  let careers = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/careers/get-all-careers-slug`)
    .then(res => {
      return res?.data;
    })
    .catch(err => {
      console.log(err?.response);
    });

  let paths;

  if (careers && careers.length > 0) {
    paths = careers.flatMap((item) =>
      locales.map((loc) => ({
        params: { slug: item.slug }, 
        locale: loc,
      }))
    );
  } else {
    paths = locales.map((loc) => ({
      params: { slug: `career-${loc}` },
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
  const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/careers/get-one-career`, { slug });
  const foundItem = res?.data;
  console.log(slug, 'resdata')

  return {
    props: {
      item: foundItem
    },
  };
};
 
const index = ({ item }) => {
  return <CareersIneer item={item} />;
};

export default index;
