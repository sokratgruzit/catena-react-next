import Faq from '../../../components/home/faq/Faq';
import createAxiosInstance from '../../api/axios';

export const getStaticProps = async () => {
  const axios = createAxiosInstance();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/faq/get-all-faq`);
  
  return {
    props: {
      faq: data,
    },
  };
};

const index = ({ faq }) => {
  return <Faq faqs={faq} />;
};

export default index;
