import createAxiosInstance from '../../../pages/api/axios';
import Press from '../../../components/home/press/Press';

export async function getServerSideProps({ query }) {
  const currentPage = parseInt(query.page, 10) || 1;
  const limit = 4;

  const axios = createAxiosInstance();
  const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/press/get-all-press`, {
    params: { type: "main", page: currentPage, limit: limit },
  });

  const pressData = response.data.press;

  return {
    props: {
      press: pressData,
      currentPage,
      totalCount: 10,
    },
  };
}

const Index = ({ press, currentPage = 1, totalCount = 10 }) => {
  return (
    <div style={{ paddingTop: '150px' }}>
      <Press press={press} currentPage={currentPage} totalCount={totalCount} />
    </div>
  );
};

export default Index;
