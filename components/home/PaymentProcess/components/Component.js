import styles from '../css/Component.module.css';

const Component = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={`${styles.ttl}`}>
        <div>
          <img />
          <p>Back</p>
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
          <p>Pay via Crypto</p>
        </div>
        <div>
          <img className={`${styles.img}`} src='/images/contribute/infocircle2.png' />
          <h2>Payment gateway may charge you a processing fees.</h2>
        </div>
        <p>You can use these currencies to pay:</p>
        <div> sadwd I hereby agree to the token purchase agreement and token sale term.</div>
      </div>
    </div>
  );
};

export default Component;
