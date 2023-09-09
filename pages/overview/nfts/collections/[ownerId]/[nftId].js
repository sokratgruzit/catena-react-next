import createAxiosInstance from '../../../../api/axios';

import ProtectedRoute from '../../../../../components/layout/ProtectedRoute';
import Buy from '../../../../../components/nfts/components/Buy';

export const getStaticPaths = async ({ locales }) => {
  const axios = createAxiosInstance();

  const { data } = await axios.post("/admin/get-paths", { type: "nfts" });
  const rawPaths = data.paths;
  
  let paths = [];

  if (rawPaths && rawPaths.length > 0) {
    paths = rawPaths.flatMap((item) =>
      locales.map((loc) => ({
        params: { ownerId: item.ownerId, nftId: item.nftId }, 
        locale: loc,
      }))
    );
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const ownerId = context.params.ownerId || "";
  const nftId = context.params.nftId || "";

  return {
    props: {
      nftId,
      ownerId
    },
  };
};

const index = ({ nftId, ownerId }) => {
  return (
    <ProtectedRoute>
      <Buy nftId={nftId} ownerId={ownerId} />
    </ProtectedRoute>
  );
};

export default index;
