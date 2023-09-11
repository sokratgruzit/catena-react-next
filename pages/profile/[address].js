import React from 'react';
import { useSelector } from 'react-redux';

import ProtectedRoute from '../../components/layout/ProtectedRoute'
import Profile from '../../components/nfts/components/Profile';

export const getServerSideProps = async context => {
    return {
      props: {
        profile: {},
      },
    };
};

const index = ({ profile }) => {
    const address = useSelector(state => state.connect.account);

    return (
        <ProtectedRoute>
            <Profile address={address} />
        </ProtectedRoute>
    );
};

export default index;