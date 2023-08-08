import createAxiosInstance from '../../../pages/api/axios';
import Press from '../../../components/home/press/Press';

export async function getServerSideProps({ query }) {
  const currentPage = query.page || 1;
  const limit = 6;
  
  const axios = createAxiosInstance();
  const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/press/get-all-press`, {
    params: { page: currentPage, limit: limit },
  });
  const pressData = response.data.press;
  const current = response.data.currentPage
  const totalPages = response.data.totalPages;

  return {
    props: {
      press: pressData,
      currentPage: current,
      totalCount: totalPages,
    },
  };
}

const Index = ({ press, currentPage = 1, totalCount }) => {
  return (
    <div style={{ paddingTop: '150px' }}>
      <Press press={press} currentPage={currentPage} totalCount={totalCount} />
    </div>
  );
};

export default Index;
