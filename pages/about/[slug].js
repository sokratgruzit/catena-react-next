import React from 'react';
import { useRouter } from 'next/router';

import Event from '../../components/home/events/Event';
import Press from '../../components/home/press/Press';

const Index = () => {
    const router = useRouter();
    const { slug } = router.query;
    let component = <Event />;

    if (slug === 'press') {
        component = <Press />;
    } else {
        component = <Event />;
    }

    return component;
};

export default Index;
