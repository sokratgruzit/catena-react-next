import React from 'react';
import { useRouter } from 'next/router';

import createAxiosInstance from '../../api/axios';

import Pressitem from "../../../components/home/press/components/pressInner/PressItem"

export const getServerSideProps = async context => {
  const { slug } = context.query;
  const axios = createAxiosInstance();
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/press/get-one-press`, { slug });

  return {
    props: {
      press: data || {}
    },
  };
};

const index = ({ press }) => {
  return <Pressitem onePress={press} />
};

export default index;
