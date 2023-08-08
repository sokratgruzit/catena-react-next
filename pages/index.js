import MainSlider from '../components/home/mainSlider/MainSlider';
import createAxiosInstance from './api/axios';

export const getStaticProps = async () => {
  const axios = createAxiosInstance();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/translates/get-translates`);

  return {
    props: {
      translates: data,
    },
  };
};

const mainSlider = ({ translates }) => {
  return <MainSlider test='test' trans={translates} />;
};

export default mainSlider;
