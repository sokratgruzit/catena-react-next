import styles from '../css/Success.module.css';

const Success = () => {
  return (
    <div className={`${styles.box} container `}>
      <div className={`${styles.container} container_bordered-child`}>
        <img src='/images/contribute/Check.png' />
        <h1>We're reviewing your payment.</h1>
        <h1 className={styles.ttl}>
          We'll review your transaction and get back to your within 6 hours. You'll receive an email with the details of
          your contribution.
        </h1>
      </div>
    </div>
  );
};

export default Success;
