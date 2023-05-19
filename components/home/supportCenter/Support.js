import React from 'react';

import SupportItem from './components/SupportItem';
import Title from '../components/Title';

const Support = () => {
  return (
    <div className='container' style={{ paddingTop: '100px' }}>
      <div className='container'>
        <div className='main-container__description'>
          <Title spanOne='support' spanTwo='center' />
        </div>
      </div>
      <SupportItem />
    </div>
  );
};

export default Support;
