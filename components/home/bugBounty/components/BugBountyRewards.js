import styles from './bugBounty.module.css';

function BugBountyRewards() {
  return (
    <section className={`${styles.container} containerX`}>
      <div className={styles.rewardsContainer}>
        <div className={styles.rewardsHead}>
          <h2 className='font-51'>Rewards</h2>
        </div>

        <div className={styles.rewardsSteps}>
          <div className={styles.rewardsStep}>
            <div className={styles.rewardsStepsTtl}>First</div>
            <div className={styles.rewardsStepsDesc}>Submit suggestions</div>
          </div>
          <div className={styles.rewardsStep}>
            <div className={styles.rewardsStepsTtl}>Then</div>
            <div className={styles.rewardsStepsDesc}>Get rewarded</div>
          </div>
        </div>

        <div className={styles.rewardsLine}>
          <div className={styles.lineCircle}></div>
          <div className={styles.lineCircle}></div>
        </div>

        <div className={styles.rewardsDesc}>
          <span>The minimum reward for eligible issues is the equivalent of 10 USDT.</span>
          <span>In case of many hackers finding the same bug, the first who submitted gets the rewards.</span>
        </div>

        <div className={styles.rewardsRange}>
          <div className={styles.rangeTtl}>Rewards Range</div>
          <div className={styles.rewardsTable}>
            <div className={`${styles.tr} ${styles.trHead} `}>
              <div className={styles.td}>BUGS</div>
              <div className={styles.td}>LOW RISK</div>
              <div className={styles.td}>MEDIUM RISK</div>
              <div className={styles.td}>HIGH RISK</div>
            </div>
            <div className={`${styles.tr} ${styles.trBody}`}>
              <div className={styles.td}>10-50 USDT</div>
              <div className={styles.td}>50-200 USDT</div>
              <div className={styles.td}>200-500 USDT</div>
              <div className={styles.td}>500-1000 USDT</div>
            </div>
          </div>
        </div>
      </div>
      <li></li>
    </section>
  );
}

export default BugBountyRewards;
