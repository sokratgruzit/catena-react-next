import createAxiosInstance from '../../../api/axios';
import OpenPosition from '../../../../components/home/careers/openPositions/OpenPosition';

export async function getServerSideProps({ query }) {
  const currentPage = query.page || 1;
  const limit = 10;

  const axios = createAxiosInstance();
  const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/open-positions/get-all-open-positions`, {
    params: { page: currentPage, limit: limit },
  });
  const openPositionsData = response.data.openPosition;
  const current = response.data.currentPage;
  const totalPages = response.data.totalPages;

  return {
    props: {
      openPositions: openPositionsData,
      currentPage: current,
      totalCount: totalPages,
    },
  };
}
const index = ({ openPositions, currentPage = 1, totalCount }) => {
  return <OpenPosition openPositions={openPositions} currentPage={currentPage} totalCount={totalCount} />
};

export default index;