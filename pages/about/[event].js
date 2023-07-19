import React from 'react';
import { useRouter } from 'next/router';

import Event from '../../components/home/events/Event';

const Index = () => {
    const router = useRouter();
    const { event } = router.query;

    return <Event />;
};

export default Index;
