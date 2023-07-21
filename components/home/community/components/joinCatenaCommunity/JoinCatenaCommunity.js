import JoinCommunity from '../../../press/components/joinCommunity/JoinCommunity';

const JoinCatenaCommunity = () => {
  const changeCountry = () => {
    console.log('hi');
  };

  return (
    <div>
      {/* <div className={styles.footer__joinTitle}>
        Join the <span>CATENA</span> community
      </div>
      <div className={styles.footer__joinDescription}>Be one of innovators who subscribe to our updates.</div>
      <div className={styles.footer__joinRight}>
        <Input
          type={'label-input-phone-number'}
          label={''}
          onChange={changeCountry}
          customStyles={{ width: '400px' }}
        />
      </div> */}
      <JoinCommunity />
    </div>
  );
};

export default JoinCatenaCommunity;
