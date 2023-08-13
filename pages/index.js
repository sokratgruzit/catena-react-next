import MainSlider from '../components/home/mainSlider/MainSlider';
import createAxiosInstance from './api/axios';

export const getStaticProps = async () => {
  const axios = createAxiosInstance();
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/translates/get-page-translates`, {
    page: 'main-slider',
  });

  return {
    props: {
      translates: data,
    },
  };
};

const index = ({ translates }) => {
  return <MainSlider test='test' trans={translates} />;
};

export default index;
