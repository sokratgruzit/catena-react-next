import React from 'react';
import { useRouter } from 'next/router';

import createAxiosInstance from '../../api/axios';

import Pressitem from "../../../components/home/press/components/pressInner/PressItem"

const index = () => {
  const router = useRouter();
  const { slug } = router.query;
  const axios = createAxiosInstance();

  const fetchData = async () => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/press/get-one-press`, { slug });
    return data;
  };

  const data = fetchData();
  
  return <Pressitem onePress={data} />
};

export default index;
