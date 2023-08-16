import createAxiosInstance from '../../api/axios';
import Careers from '../../../components/home/careers/Careers';

export const getStaticProps = async context => {
  const axios = createAxiosInstance();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/open-positions/get-all-open-positions`);

  return {
    props: {
      careers: data.openPosition,
    },
  };
};

const CareersPage = ({ careers }) => {
  return <Careers careers={careers} />;
};

export default CareersPage;
