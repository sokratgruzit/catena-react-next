import createAxiosInstance from '../../api/axios';
import Press from '../../../components/home/press/Press';

export async function getServerSideProps({ query }) {
  const currentPage = query.page || 1;
  const limit = 2;
  
  const axios = createAxiosInstance();
  const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/press/get-all-press`, {
    params: { page: currentPage, limit: limit },
  });
  const pressData = response.data.press;
  const current = response.data.currentPage;
  const totalPages = response.data.totalPages;

  return {
    props: {
      press: pressData,
      currentPage: current,
      totalCount: totalPages,
    },
  };
}

const index = ({ press, currentPage = 1, totalCount }) => {
  return <Press press={press} currentPage={currentPage} totalCount={totalCount} />;
};

export default index;
