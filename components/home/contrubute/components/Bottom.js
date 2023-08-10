import { Input, Button } from '@catena-network/catena-ui-module';

import styles from '../css/Bottom.module.css';

const Bottom = () => {
  return (
    <div className={`${styles.containerOne} container`}>
      <p className='ttl'>2. Set amount of CMCX tokens you would like to purchase</p>
      <p className={styles.ttle}>
        Enter the amount you would like to contribute in order to calculate the amount of tokens you will receive. The
        calculator below helps to convert the required quantity of tokens into the amount of your selected currency.
      </p>
      <div className={`${styles.box} container_bordered-child`}>
        <p>Your remaining purchase limit: 3000000</p>
        <p>Transaction Fee: 0.0006828 ETH</p>
        <p>Payment Amount: 0 ETH</p>
      </div>
      <div>
        <Input
          className={styles.llll}
          type={'default'}
          icon={false}
          label={'Token to Purchase'}
          subLabel={''}
          placeholder={'Enter'}
          name='email'
          // value={formData.email}
          // onChange={changeHandler}
          // customStyles={{ width: '500px' }}
        />
      </div>
      <div>
        <Input
          className={styles.llll}
          type={'default'}
          icon={false}
          label={'Founder Code'}
          subLabel={''}
          placeholder={'Enter'}
          name='email'
          // value={formData.email}
          // onChange={changeHandler}
          // customStyles={{ width: '500px' }}
        />
      </div>
      <div className={styles.items}>
        <h1>Total CMCX</h1>
        <div>10000000</div>
      </div>
      <div className={`${styles.itemsOne}`}>
        <div>+ Sale Bonus 0%</div>
        <div>0</div>
      </div>
      <div className={styles.bottom}>
        <img className={styles.img} src='/images/infocircle.png' />
        <p className={styles.bottTitle}>
          Your contribution will be calculated based on exchange rate at the moment when your transaction is confirmed.
        </p>
      </div>
      <div className={styles.btn}>
        <Button
          label={'Purchase Tokens'}
          size={'btn-lg'}
          type={'btn-primary'}
          // arrow={'arrow-right'}
          element={'button'}
          disabled={false}
          // onClick={() => setChng(true)}
          className={styles.btnBlu}
        />
      </div>
    </div>
  );
};

export default Bottom;
