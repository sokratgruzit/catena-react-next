import styles from '../css/Component.module.css';

const Component = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={`${styles.ttl}`}>
        <div>
          <img />
          <p>Back</p>
        </div>
        <h1>Payment Process</h1>
      </div>
      <div>
        <p>Please make payment of 14017.74 USDT to receive 1000000 CMCX token.</p>
        <p>Transaction Fee: 2 USDT</p>
        <p>
          You can choose any of following payment method to make your payment. The token balance will appear in your
          account after successful payment.
        </p>
      </div>
      <div className={styles.bottom}>
        <h1>Select payment method:</h1>
        <div>
          <img />
          <p>Pay via Crypto</p>
        </div>
        <p>You can use these currencies to pay:</p>
        <div> sadwd I hereby agree to the token purchase agreement and token sale term.</div>
      </div>
    </div>
  );
};

export default Component;
