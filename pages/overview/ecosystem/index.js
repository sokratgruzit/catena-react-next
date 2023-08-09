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
  return (
    <div style={{ paddingTop: '150px', backgroundColor: '#fff2e4' }}>
      <Ecosystem exchanges={exchanges} />
    </div>
  );
};

export default index;
