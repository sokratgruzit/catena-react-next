import styles from '../styles/Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <h2>Download All Logos</h2>
        <div className={styles.mainContainerDownload}>
          <a href='/resources/core-logo-pack.zip' target='_blank' className={styles.button}>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
