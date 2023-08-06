import { Input, Button } from '@catena-network/catena-ui-module';

import styles from '../css/Header.module.css';

const Header = () => {
  const Box = [
    {
      img: 'images/stack-logo.png',
      ttl: 'USDT',
      Bowl: '0.01405261 USDT',
    },
    {
      img: 'images/stack-logo.png',
      ttl: 'Coinbase',
      Bowl: '0.01405261 ETH',
    },
  ];

  return (
    <div className={`${styles.hederContainer} container`}>
      <h1 className={`${styles.ttl} font-90 ttl`}>Contribute</h1>
      <h1 className={`${styles.title} ttl`}>1. Select the payment method and calculate token price</h1>
      <div className={`${styles.container}`}>
        {Box.map((item, indx) => {
          return (
            <div className={`${styles.boxMap}`}>
              <div className={`${styles.itemMap} container_bordered-child `}>
                <img item={item.img} />
                <p>{item.ttl}</p>
              </div>
              <div className={styles.bowl}>
                <p className={styles.BowlBox}>{item.Bowl}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${styles.containerOne}`}>
        <p className='ttl'>2. Set amount of CMCX tokens you would like to purchase</p>
        <p>
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
            label={'EMAIL'}
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
            label={'EMAIL'}
            subLabel={''}
            placeholder={'Enter'}
            name='email'
            // value={formData.email}
            // onChange={changeHandler}
            // customStyles={{ width: '500px' }}
          />
        </div>
      </div>
      <h1>Total CMCX</h1>
      <div>10000000</div>
      <div>+ Sale Bonus 0%</div>
      <div>0</div>
      <div>
        <img src='images/stack-logo.png' />
        <p>
          Your contribution will be calculated based on exchange rate at the moment when your transaction is confirmed.
        </p>
      </div>
      <div>
        <Button
          label={'Purchase Tokens'}
          // size={'btn-lg'}
          type={'btn-primary'}
          // arrow={'arrow-right'}
          element={'button'}
          disabled={false}
          onClick={() => setChng(true)}
          className={styles.btnBlu}
        />
      </div>
    </div>
  );
};

export default Header;
