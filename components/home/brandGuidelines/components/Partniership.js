import styles from '../styles/Partniership.module.css';

export default function Partniership() {
  return (
    <div className={styles.partniership}>
      <h3 className={styles.title}>Partnership</h3>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          When pairing the Blockstream corporate logo or any other Blockstream logo with another logo, a thin line is
          used to separate the two logos.
        </p>
        <div className={styles.imgWrapper}>
          <img src='/images/guidelines/partnership.png' alt='' />
          <div className={styles.line}></div>
          <h4>Partners</h4>
        </div>
        <div className={styles.box}>
          <h6>Visual Balance</h6>
          <p>Ensure that each logo is visually balanced in terms of size.</p>
        </div>
        <div className={styles.box}>
          <h6>Equal Distance</h6>
          <p>Ensure that the space between the logos and the line are visually equal on both sides of the line.</p>
        </div>
      </div>
    </div>
  );
}
