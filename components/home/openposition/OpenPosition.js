import React from 'react';
import { TableElement } from '@catena-network/catena-ui-module';

import OpenSearch from './components/OpenSearch';
import Feature from '../careers/components/feature/Feature';
import { useState } from 'react';


const OpenPosition = ({ featureLinkList }) => {

  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <OpenSearch title='Open Positions' department='DEPARTMENT' location='LOCATION' />
      <Feature featureLinkList={featureLinkList} />
      <div style={{ margin: '40px 0 80px 0' }}>
        <TableElement
          type={"pagination"}
          currentPage={currentPage}
          totalCount={20}
          onPageChange={(page) => setCurrentPage(page)}
        // color={"#F3E4D2"}
        />
      </div>
    </div>
  );
}



export default OpenPosition;
