import React from 'react';
import { TableElement } from '@catena-network/catena-ui-module';

import OpenSearch from './components/OpenSearch';
import Feature from '../careers/components/feature/Feature';

const OpenPosition = ({ featureLinkList }) => {
  return (
    <div>
      <OpenSearch title='Open Positions' department='DEPARTMENT' location='LOCATION' />
      <Feature featureLinkList={featureLinkList} />
      <div style={{ margin: '40px 0 80px 0' }}>
        <TableElement
          currentPage={""}
          siblingCount={""}
          type={"pagination"}
          totalCount={20}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default OpenPosition;
