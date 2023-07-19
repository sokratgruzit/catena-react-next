import React from 'react';
import { useRouter } from 'next/router';

import Press from '../../components/home/press/Press';

const Index = () => {
  const router = useRouter();
  const { press } = router.query;

  return <Press />;
};

export default Index;
