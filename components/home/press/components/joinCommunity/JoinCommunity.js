import styles from './JoinCommunity.module.css';

const JoinCommunity = () => {
  return (
    <div className={`{container ${styles.join_container}`}>
      <div className={styles.footer__join}>
        {/*<img src='/join.jpg' alt='Join Image' className={styles.footer__joinImg} />*/}
        <div className={styles.footer__joinInner}>
          <div className={styles.footer__joinLeft}>
            <div className={styles.footer__joinTitle}>
              Join the <span>CATENA</span> community
            </div>
            <div className={styles.footer__joinDescription}>Be one of innovators who subscribe to our updates.</div>
          </div>
          <div className={styles.footer__joinRight}>
            <div className={styles.subscribeContainer}>
              <form>
                <div className={styles.inputContainer}>
                  <input type='text' placeholder='myname@example.com' v-model='email' name='message' />
                  <div className={styles.errorMessage}>The entered email is incorrect</div>
                  <div className={styles.button}>
                    <input type='submit' />
                    <svg width='20' height='17' viewBox='0 0 20 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M11.8702 0.513321L9.88674 2.51748L14.3496 6.98034L0.113892 6.98034L0.113892 9.7903L14.3496 9.7903L9.88674 14.2532L11.8702 16.2573L19.7422 8.38532L11.8702 0.513321Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
