import React from 'react';

import OpenSearch from './components/OpenSearch';
import Feature from '../careers/components/feature/Feature';

const OpenPosition = ({ featureLinkList }) => {
  return (
    <div style={{ paddingTop: '300px' }}>
      <OpenSearch title='Open Positions' department='DEPARTMENT' location='LOCATION' />
      <Feature featureLinkList={featureLinkList} />
    </div>
  );
};

export default OpenPosition;
