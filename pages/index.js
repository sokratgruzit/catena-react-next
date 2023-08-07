import MainSlider from '../components/home/mainSlider/MainSlider';
import createAxiosInstance from './api/axios';

export const getStaticProps = async () => {
    const axios = createAxiosInstance();
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/translates/get-translates`);;
  
    return {
      props: {
        translates: data,
      },
    };
};

const mainSlider = ({ translates }) => {
    let homePage = translates.find(t => t.page === "home_page");

    return <MainSlider test="test" trans={homePage?.translates} />;
};

export default mainSlider;
