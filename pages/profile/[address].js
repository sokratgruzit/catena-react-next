import React from 'react';
import { useRouter } from 'next/router';

import ProtectedRoute from '../../components/layout/ProtectedRoute'
import Profile from '../../components/nfts/components/Profile';

const index = () => {
    const router = useRouter();
    const { address } = router.query;

    return (
        <ProtectedRoute>
            <Profile address={address} />
        </ProtectedRoute>
    );
};

export default index;