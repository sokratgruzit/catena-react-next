import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import ProtectedRoute from '../../components/layout/ProtectedRoute'
import Profile from '../../components/nfts/components/Profile';

const index = () => {
    const router = useRouter();
    // const { address } = router.query;
    const address = useSelector(state => state.connect.account);

    return (
        <ProtectedRoute>
            <Profile address={address} />
        </ProtectedRoute>
    );
};

export default index;