import { Input, Button } from '@catena-network/catena-ui-module';

import styles from '../css/Component.module.css';

const Component = () => {
  const imgBox = [
    {
      img: '/images/contribute/tokens/tok1.png',
    },
    {
      img: '/images/contribute/tokens/tok1.png',
    },
    {
      img: '/images/contribute/tokens/tok1.png',
    },
    {
      img: '/images/contribute/tokens/tok1.png',
    },
    {
      img: '/images/contribute/tokens/tok1.png',
    },
  ];
  return (
    <div className={`${styles.container} container`}>
      <div className={`${styles.ttl}`}>
        <div className={styles.btn}>
          <img src='/images/Frame.png' />
          <h1>Back</h1>
        </div>
        <h1 className='ttl font-90'>Payment Process</h1>
      </div>
      <div className={`${styles.heder}`}>
        <p>Please make payment of 14017.74 USDT to receive 1000000 CMCX token.</p>
        <p>Transaction Fee: 2 USDT</p>
        <p>
          You can choose any of following payment method to make your payment. The token balance will appear in your
          account after successful payment.
        </p>
      </div>
      <div className={styles.bottom}>
        <h1 className={`${styles.ttle} ttl`}>Select payment method:</h1>
        <div className={`${styles.box} container_bordered-child`}>
          <img src='/images/contribute/tokens/tok1.png' />
          <img className={`${styles.imgTwo}`} src='/images/contribute/tokens/tok2.png' />
          <p className={styles.imgTtl}>Pay via Crypto</p>
        </div>
        <div className={`${styles.item}`}>
          <img className={`${styles.img}`} src='/images/contribute/infocircle2.png' />
          <h2>Payment gateway may charge you a processing fees.</h2>
        </div>
        <div className={`${styles.itemTwo}`}>
          <p>You can use these currencies to pay:</p>
          {imgBox.map((item, index) => {
            return (
              <div key={index}>
                <img className={styles.tokenImg} src={item.img} />
              </div>
            );
          })}
        </div>
        <div className={styles.itemOne}>
          <p>mark[]</p>
          <p>I hereby agree to the token purchase agreement and token sale term.</p>
        </div>
        <div className={`${styles.btn}`}>
          <Button
            label={'Contribute Now'}
            size={'btn-lg'}
            type={'btn-primary'}
            // arrow={'arrow-right'}
            element={'button'}
            disabled={false}
            // onClick={() => setChng(true)}
            className={styles.btnBlu}
          />
        </div>
        <div className={styles.bottomTitle}>
          <img className={`${styles.imgOne}`} src='/images/contribute/infocircle2.png' />
          <h2>Payment gateway may charge you a processing fees.</h2>
        </div>
      </div>
    </div>
  );
};

export default Component;
