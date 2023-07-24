import React from 'react';

import Boxs from './components/Boxs';
import JoinCommunity from './components/JoinCommunity';
import Paragraph from './components/Paragraph';
import Title from './components/Title';

const Event = () => {
  return (
    <div style={{ paddingTop: '200px', background: '#FFF3E5' }}>
      <Title />
      <Paragraph />
      <Boxs />
      <JoinCommunity />
    </div>
  );
};

export default Event;
