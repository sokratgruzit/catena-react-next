import styles from '../styles/TechnologiesBanner.module.css';

export default function TechnologiesBanner() {
  const bannerData = [
    {
      aboutCore: 'About CORE',
      aboutCoreText: 'Our mission, vision & information',
      technologies: 'Technologies',
      technologiesText: 'Which makes CORE different',
    },
  ];
  return (
    <div>
      {bannerData.map((item, index) => (
        <div key={index}>
          <div data-aos='fade-up' className={styles.guidlineEndContainer}>
            <router-link to='/about' className={styles.guidlineEndHalf}>
              <div className={styles.guidlineEndHalfDescr}>
                <div className={styles.guidlineEndHalfDescrTitle}>{item.aboutCore}</div>
                <div className={styles.guidlineEndHalfDescrTxt}>{item.aboutCoreText}</div>
              </div>
            </router-link>
            <router-link to='/technology' className={styles.guidlineEndHalf}>
              <div className={styles.guidlineEndHalfDescr}>
                <div className={styles.guidlineEndHalfDescrTitle}>{item.technologies}</div>
                <div className={styles.guidlineEndHalfDescrTxt}>{item.technologiesText}</div>
              </div>
            </router-link>
          </div>
        </div>
      ))}
    </div>
  );
}
