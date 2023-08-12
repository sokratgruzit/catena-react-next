import createAxiosInstance from '../../../api/axios';
import OpenPosition from '../../../../components/home/careers/openPositions/OpenPosition';

export async function getServerSideProps({ query }) {
  const currentPage = query.page || 1;
  const limit = 1;
  console.log(careersData, "aaa");

  const axios = createAxiosInstance();
  const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/careers/get-all-careers`, {
    params: { page: currentPage, limit: limit },
  });
  const careersData = response.data.career;
  const current = response.data.currentPage;
  const totalPages = response.data.totalPages;

  return {
    props: {
      careers: careersData,
      currentPage: current,
      totalCount: totalPages,
    },
  };
}
const index = ({ careers, currentPage = 1, totalCount }) => {
  return <OpenPosition careers={careers} currentPage={currentPage} totalCount={totalCount} />
};

export default index;
