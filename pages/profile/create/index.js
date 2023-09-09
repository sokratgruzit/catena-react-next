import MakeProfile from '../../../components/makeProfile/MakeProfile';
import ProtectedRoute from '../../../components/layout/ProtectedRoute';

const index = () => {
  return (
    <ProtectedRoute>
      <MakeProfile />
    </ProtectedRoute>
  );
};

export default index;
