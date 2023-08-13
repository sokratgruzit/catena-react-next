import React from 'react';
import { useRouter } from 'next/router';
import { TableElement } from '@catena-network/catena-ui-module';
import OpenSearch from './components/OpenSearch';
import Feature from '../../careers/components/feature/Feature';

const OpenPosition = ({ careers, currentPage, totalCount }) => {
  const router = useRouter();
  const handlePageChange = page => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  return (
    <>
      <OpenSearch title='Open Positions' department='DEPARTMENT' location='LOCATION' />
      <Feature careers={careers} />
      <TableElement
        type={"pagination"}
        currentPage={currentPage}
        totalCount={totalCount}
        onPageChange={(page) => handlePageChange(page)}
        customStyle={{ margin: '40px 0 80px 0' }}
      />
    </>
  );
};



export default OpenPosition;
