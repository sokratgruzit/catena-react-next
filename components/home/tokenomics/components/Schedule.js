import styles from './Tokenomics.module.css';

function Schedule() {
  return (
    <div className={`${styles.tokenomicsList} pT-160 pB-160 `}>
      <h3 className='font-51'>Token Release Schedule</h3>
      <div className={styles.tokenomicsList__inner}>
        <div className={styles.tokenomicsCist__part}>
          <div className={styles.tokenomicsList__item}>
            <div className={styles.tokenomicsList__itemTitle}>(TGE Event) Pre-Seed Round</div>
            <div className={styles.tokenomicsList__itemText}>1,000,000,000</div>
          </div>
          <div className={styles.tokenomicsList__item}>
            <div className={styles.tokenomicsList__itemTitle}>Founders Round</div>
            <div className={styles.tokenomicsList__itemText}>1,000,000,000</div>
          </div>
          <div className={styles.tokenomicsList__item}>
            <div className={styles.tokenomicsList__itemTitle}>
              Seed Round
              <div className={styles.tokenomicsList__itemText}>1,000,000,000</div>
            </div>
          </div>
        </div>
        <div className={styles.tokenomicsCist__part}>
          <div className={styles.tokenomicsList__item}>
            <div className={styles.tokenomicsList__itemTitle}>Pre-IEO</div>
            <div className={styles.tokenomicsList__itemText}>1,000,000,000</div>
          </div>
          <div className={styles.tokenomicsList__item}>
            <div className={styles.tokenomicsList__itemTitle}>IEO (Launch Pad Sale)</div>
            <div className={styles.tokenomicsList__itemText}>4,000,000,000</div>
          </div>
        </div>
        <div className={styles.tokenomicsList__text}>
          <div className={styles.tokenomicsList__textTtl}>Notice</div>
          <div className={styles.tokenomicsList__textTxt}>
            Due to the regulatory complexities or restrictions, Restrictions apply for the sale of CATENA tokens to any
            citizen or resident of the USA.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
