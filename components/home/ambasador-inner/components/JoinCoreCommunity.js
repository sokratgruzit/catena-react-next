import { Input, HelpText } from '@catena-network/catena-ui-module';
import React from 'react';

const JoinCoreCommunity = () => {
  const changeCountry = data => {
    console.log(data);
  };

  return (
    <div>
      <div className='footer__join-title'>
        Join the <span>CATENA</span> community{' '}
      </div>
      <div className='footer__join-description'>Be one of innovators who subscribe to our updates.</div>
      <div className='footer__join-right'>
        <Input
          type={'label-input-phone-number'}
          label={'your text'}
          onChange={changeCountry}
          statusCard={<HelpText status={'error'} title={'your text'} fontSize={'font-12'} icon={true} />}
          customStyles={{ width: '400px' }}
        />
      </div>
    </div>
  );
};

export default JoinCoreCommunity;
