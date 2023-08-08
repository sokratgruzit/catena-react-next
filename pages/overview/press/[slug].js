import createAxiosInstance from '../../../pages/api/axios';
import PressItem from '../../../components/home/press/components/pressInner/PressItem';

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

  const paths = press.flatMap(item =>
    locales.map(loc => ({
      params: { slug: item.slug },
      locale: loc,
    })),
  );

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
