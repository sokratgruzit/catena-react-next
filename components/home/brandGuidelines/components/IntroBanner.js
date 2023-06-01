import { Button } from '@catena-network/catena-ui-module';
import styles from '../styles/IntroBanner.module.css';

export default function IntroBanner() {
  const data = [{
    brand: 'brand',
    guidelines: "Guidelines",
    downloadAllLogos: "Download all logos",
  }]
  return (
    <div className={styles.container}>
        <div className={styles.mainContainerDescription}>
         {data.map((item, index) => {
          return(
            <div key={index} className={styles.left}>
            <h1>
              <span>{ item.brand }</span>
              <span>{ item.guidelines }</span>
            </h1>
            <div className={styles.mainContainerDownload}>
              <a
                href="/resources/core-logo-pack.zip"
                target="_blank"
                className={styles.mainContainerDownloadBtn}
              >
                { item.downloadAllLogos }
              </a>
              <div className={styles.mainContainerDownloadText}>
                { item.downloadAs }
              </div>
            </div>
          </div>
          )
         })}
        </div>
      </div>
  );
}
