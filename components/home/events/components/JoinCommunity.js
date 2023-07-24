import styles from '../css/JoinCommunity.module.css';

const JoinCommunity = () => {
  return (
    <div className={styles.boxTitle}>
      <div className={styles.aa}>
        <h1 className={styles.h1}>Join our community</h1>
        <p className={styles.p}>
          Stay up-to-date with the latest CATENA developments such as events, programs and news by joining our social
          media channels.
        </p>
        <a className={styles.a}>Sign up to our newsletter to stay in the loop</a>
      </div>
    </div>
  );
};

export default JoinCommunity;
