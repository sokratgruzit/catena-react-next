import styles from "../../Press.module.css";

const PressLogo = () => {
    return (
        <div className={`${styles.logoContainer} `}>
        <div className={styles.logoLine}>
          <div className={styles.logCon}>
            <img src='/images/press/nasdaq.png' alt='sources' className={styles.logo} />
          </div>
          <div className={styles.logCon}>
            <img src='/images/press/CBNC.png' alt='sources' className={styles.logo} />
          </div>
          <div className={styles.logCon}>
            <img src='/images/press/bloombergLogo.png' alt='sources' className={styles.logo} />
          </div>
          <div className={styles.logCon}>
            <img src='/images/press/nasdaq.png' alt='sources' className={styles.logo} />
          </div>
          <div className={styles.logCon}>
            <img src='/images/press/CBNC.png' alt='sources' className={styles.logo} />
          </div>
        </div>
        <div className={`${styles.logoLine}`}>
          <div className={`${styles.logCon}`}>
            <img src='/images/press/Company.png' alt='sources' className={styles.logo} />
          </div>
          <div className={styles.logCon}>
            <img src='/images/press/Frame1.png' alt='sources' className={styles.logo} />
          </div>
          <div className={styles.logCon}>
            <img src='/images/press/nasdaq.png' alt='sources' className={styles.logo} />
          </div>
          <div className={styles.logCon}>
            <img src='/images/press/CBNC.png' alt='sources' className={styles.logo} />
          </div>
          <div className={styles.logCon}>
            <img src='/images/press/Frame 2.png' alt='sources' className={styles.logo} />
          </div>
        </div>
      </div>
    )
}

export default PressLogo;