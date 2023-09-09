import React from 'react';
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter();
    const { address } = router.query;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {address}</p>
        </div>
    );
};

export default index;