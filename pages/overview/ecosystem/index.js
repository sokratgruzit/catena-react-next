import createAxiosInstance from '../../../pages/api/axios';
import Ecosystem from '../../../components/home/ecosystem/Ecosystem';

export const getStaticProps = async () => {
  const axios = createAxiosInstance();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/ecosystem/get-active-ecosystem`);

  return {
    props: {
      exchanges: data,
    },
  };
};

const index = ({ exchanges }) => {
  return  <Ecosystem exchanges={exchanges} />;
};

export default index;
