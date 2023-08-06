import createAxiosInstance from '../../../pages/api/axios';
import Press from '../../../components/home/press/Press';

export const getStaticProps = async () => {
  const axios = createAxiosInstance();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/press/get-all-press`);

  return {
    props: {
      press: data,
    },
  };
};

const index = ({ press }) => {
  return (
    <div style={{ paddingTop: '150px' }}>
      <Press press={press} />;
    </div>
  );
};

export default index;
