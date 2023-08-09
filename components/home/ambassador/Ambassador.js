import React from 'react';
import Title from './components/Title';
import Introduction from './components/Introduction';
import BecomeAmbassador from './components/BecomeAmbassador';
import CatenaAmbassador from './components/CatenaAmbassador';
import WhatExpected from './components/WhatExpected';
import AmbasdorBtn from './components/AmbasdorBtn';
import JoinCommunity from '../events/components/JoinCommunity';

const Ambassador = () => {
  return (
    <div style={{ width: '100%' }}>
      <Title />
      <Introduction />
      <BecomeAmbassador />
      <CatenaAmbassador />
      <WhatExpected />
      <AmbasdorBtn />
      <JoinCommunity />
    </div>
  );
};

export default Ambassador;
