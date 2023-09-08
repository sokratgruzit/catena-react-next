import Overview from '../../../components/nfts/Overview';
import ProtectedRoute from '../../../components/layout/ProtectedRoute';

const index = () => {
  return (
    <ProtectedRoute>
      <Overview />
    </ProtectedRoute>
  );
};

export default index;
