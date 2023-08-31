import createAxiosInstance from '../../api/axios';
import CareersIneer from '../../../components/home/careers/careersInner/CareersIneer';

export const getStaticPaths = async ({ locales }) => {
  const axios = createAxiosInstance();

  let careers = await axios
    .get(`${process.env.NEXT_PUBLIC_URL}/open-positions/get-all-open-positions-slug`)
    .then(res => {
      return res?.data;
    })
    .catch(err => {
      console.log(err?.response);
    });

  let paths = [];

  if (careers && careers.length > 0) {
    paths = careers.flatMap((item) =>
      locales.map((loc) => ({
        params: { slug: item.slug }, 
        locale: loc,
      }))
    );
  } 

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const slug = context.params.slug;
  const axios = createAxiosInstance();
  const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/open-positions/get-one-open-position`, { slug });
  const foundItem = res?.data;

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
