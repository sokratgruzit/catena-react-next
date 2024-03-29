import React from 'react';
import createAxiosInstance from '../../api/axios';
import Pressitem from "../../../components/home/press/components/pressInner/PressItem"

export const getStaticPaths = async ({ locales }) => {
  const axios = createAxiosInstance();

  let press = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/press/get-all-press-slug`)
    .then(res => {
      return res?.data;
    })
    .catch(err => {
      console.log(err?.response);
    });

  let paths;

  if (press && press.length > 0) {
    paths = press.flatMap((item) =>
      locales.map((loc) => ({
        params: { slug: item.slug }, 
        locale: loc,
      }))
    );
  } else {
    paths = locales.map((loc) => ({
      params: { slug: `press-${loc}` },
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
  const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/press/get-one-press`, { slug });
  const foundItem = res?.data;

  return {
    props: {
      onePress: foundItem
    },
  };
};
 
const index = ({ onePress }) => {
  return <Pressitem onePress={onePress} />
};

export default index;
