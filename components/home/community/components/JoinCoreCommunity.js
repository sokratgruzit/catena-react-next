import { Input } from '@catena-network/catena-ui-module';

const JoinCatenaCommunity = () => {
  const changeCountry = () => {
    console.log('hi');
  };

  return (
    <div>
      <div className='footer__join-title'>
        Join the <span>CATENA</span> community{' '}
      </div>
      <div className='footer__join-description'>Be one of innovators who subscribe to our updates.</div>
      <div className='footer__join-right'>
        <Input type={'label-input-phone-number'} label={''} customStyles={{ width: '400px' }} />
      </div>
    </div>
  );
};

export default JoinCatenaCommunity;
