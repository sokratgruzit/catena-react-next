import React from 'react';
import Title from './components/title/Title';
import Introduction from './components/introduction/Introduction';
import BecomeAmbassador from './components/becomeAmbassador/BecomeAmbassador';
import CatenaAmbassador from './components/catenaAmbassador/CatenaAmbassador';
import WhatExpected from './components/whatExpected/WhatExpected';
import AmbassadorForm from './components/ambassadorForm/AmbasdorForm';
import JoinCommunity from '../events/components/joinComunity/JoinCommunity';

const Ambassador = () => {
  return (
    <div className='container'>
      <Title />
      <Introduction />
      <BecomeAmbassador />
      <CatenaAmbassador />
      <WhatExpected />
      <AmbassadorForm />
      <JoinCommunity />
    </div>
  );
};

export default Ambassador;
