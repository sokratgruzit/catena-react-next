import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import createAxiosInstance from '../../../pages/api/axios';
import PressItem from '../../../components/home/press/components/pressInner/PressItem';

export const getStaticPaths = async () => {
  const axios = createAxiosInstance();

  let press = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/press/get-all-press`)
    .then(res => {
      return res?.data;
    })
    .catch(err => {
      console.log(err?.response);
    });

  const paths = press.map(item => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const slug = context.params.slug;
  const axios = createAxiosInstance();
  const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/press/get-one-press`, { slug });
  const foundItem = res?.data;

  return {
    props: {
      item: foundItem,
      slug,
    },
  };
};

const PressSlug = ({ item }) => {
  return (
    <div className='container' style={{ paddingTop: '200px', paddingBottom: '100px' }}>
      <PressItem item={item} />
    </div>
  );
};

export default PressSlug;
