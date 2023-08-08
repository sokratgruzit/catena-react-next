// import AQ from '../../../components/home/faq/AQ';
import createAxiosInstance from '../../../pages/api/axios';

// export const getStaticProps = async context => {
//   const axios = createAxiosInstance();
//   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/faq/get-all-faq`);

//   return {
//     props: {
//       faq: data,
//     },
//   };
// };

function index() {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '10px', backgroundColor: '#fff2e4' }}>
      {/* <AQ allData={faq} /> */}
    </div>
  );
}

export default index;
