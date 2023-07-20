import styles from '../styles/TokenomicsHead.module.css';

export default function TokenomicsHead() {
  return (
    <div className={styles.tokenomicsHead}>
      <img src='/images/tokenomics/bg.png' alt='' />
      <div className='container'>
        <h1 className={styles.title}>Tokenomics</h1>
      </div>
    </div>
  );
}
