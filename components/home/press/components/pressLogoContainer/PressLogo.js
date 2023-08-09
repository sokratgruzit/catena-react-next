import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from '../../Press.module.css';

const PressLogo = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div className='container_bordered' data-aos='fade-up'>
      <div className={`${styles.logoContainer} container_bordered-child`}>
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
    </div>
  );
};

export default PressLogo;
