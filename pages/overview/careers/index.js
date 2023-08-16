import createAxiosInstance from '../../api/axios';
import Careers from '../../../components/home/careers/Careers';

export const getStaticProps = async context => {
  const axios = createAxiosInstance();
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/careers/get-all-careers`);
  const openPositionData = await axios.post(`${process.env.NEXT_PUBLIC_URL}/open-positions/get-all-open-positions`);

  return {
    props: {
      careers: data.career,
      openPosition: openPositionData.data.openPosition
    },
  };
};

const CareersPage = ({ careers, openPosition }) => {
  return <Careers careers={careers} openPosition={openPosition} />;
};

export default CareersPage;
