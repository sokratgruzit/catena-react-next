import createAxiosInstance from '../../api/axios';
import Careers from '../../../components/home/careers/Careers';

export const getStaticProps = async context => {
  const axios = createAxiosInstance();
  const openPositions = await axios.get(`${process.env.NEXT_PUBLIC_URL}/open-positions/get-all-open-positions`);
  const careers = await axios.get(`${process.env.NEXT_PUBLIC_URL}/careers/get-all-careers`);

  return {
    props: {
      openPositions: openPositions.data.openPosition,
      careers: careers.data.career,
    },
  };
};

const CareersPage = ({ careers, openPositions }) => {
  return <Careers careers={careers} openPositions={openPositions} />;
};

export default CareersPage;
