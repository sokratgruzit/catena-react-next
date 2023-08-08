import MainSlider from '../components/home/mainSlider/MainSlider';
import createAxiosInstance from './api/axios';

export const getStaticProps = async () => {
<<<<<<< HEAD
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
=======
    const axios = createAxiosInstance();
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_URL}/translates/get-page-translates`, {
      page: "main-slider"
    });
  
    return {
      props: {
        translates: data,
      },
    };
};

const mainSlider = ({ translates }) => {
  return <MainSlider test="test" trans={translates} />;
>>>>>>> dab014e81d75a42e1f25c234eb67802b3d6941bc
};

export default mainSlider;
