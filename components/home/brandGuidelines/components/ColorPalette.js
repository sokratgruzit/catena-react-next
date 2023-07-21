import styles from '../styles/ColorPalette.module.css';

export default function ColorPalette() {
  return (
    <div>
      <div data-aos='fade-up' className={styles.guidlineColorCircleContainer}>
        <div className={styles.guidlineColorCircleItem}>
          <div className={styles.guidlineColorCircle} style={{ background: '#817EFF' }}></div>
          <div className={styles.guidlineColorCircleTitle}>817EFF</div>
        </div>
        <div className={styles.guidlineColorCircleItem}>
          <div className={styles.guidlineColorCircle} style={{ background: '#D5D5FF' }}></div>
          <div className={styles.guidlineColorCircleTitle}>D5D5FF</div>
        </div>
        <div className={styles.guidlineColorCircleItem}>
          <div className={styles.guidlineColorCircle} style={{ background: '#FFBB95' }}></div>
          <div className={styles.guidlineColorCircleTitle}>FFBB95</div>
        </div>
        <div className={styles.guidlineColorCircleItem}>
          <div className={styles.guidlineColorCircle} style={{ background: '#FF8D4D' }}></div>
          <div className={styles.guidlineColorCircleTitle}>FF8D4D</div>
        </div>
        <div className={styles.guidlineColorCircleItem}>
          <div className={styles.guidlineColorCircle} style={{ background: '#E2DD5D' }}></div>
          <div className={styles.guidlineColorCircleTitle}>E2DD5D</div>
        </div>
        <div className={styles.guidlineColorCircleItem}>
          <div className={styles.guidlineColorCircle} style={{ background: '#4ECB6A' }}></div>
          <div className={styles.guidlineColorCircleTitle}>4ECB6A</div>
        </div>
        <div className={styles.guidlineColorCircleItem}>
          <div className={styles.guidlineColorCircle} style={{ background: '#99FFB0' }}></div>
          <div className={styles.guidlineColorCircleTitle}>99FFB0</div>
        </div>
      </div>
      <div data-aos='fade-up' className={`${styles.pB160} ${styles.right} ${styles.guidlineColorCircleContainer}`}>
        <div className={styles.guidlineColorCircleItem}>
          <div
            className={styles.guidlineColorCircle}
            style={{
              background: 'rgb(255,142,117)',
              background: 'linearGradient(0deg, rgba(255,142,117,1) 0%, rgba(255,142,117,1) 100%)',
            }}
          ></div>
          <div className={styles.guidlineColorCircleTitle}>FF8E75 → 9F402B</div>
        </div>
        <div className={styles.guidlineColorCircleItem}>
          <div
            className={styles.guidlineColorCircle}
            style={{
              background: 'rgb(138,136,255)',
              background: 'linearGradient(180deg, rgba(138,136,255,1) 0%, rgba(5,0,255,1) 100%)',
            }}
          ></div>
          <div className={styles.guidlineColorCircleTitle}>8A88FF → 0500FF</div>
        </div>
        <div className={styles.guidlineColorCircleItem}>
          <div
            className={styles.guidlineColorCircle}
            style={{
              background: 'rgb(213,213,255)',
              background: 'linearGradient(180deg, rgba(213,213,255,1) 0%, rgba(139,139,198,1) 100%)',
            }}
          ></div>
          <div className={styles.guidlineColorCircleTitle}>D5D5FF → 8B8BC6</div>
        </div>
      </div>
    </div>
  );
}
