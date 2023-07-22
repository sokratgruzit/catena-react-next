import Download from './Download';

import styles from '../styles/Banner.module.css';

export default function Banner() {
  const itemData = [
    {
      links: [{ url: '/images/guidelines/firstUsage.png', text: 'Download image 1' }],
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <h2 className='font-40 '>Download All Logos</h2>
        <div className={styles.mainContainerDownload}>
          {/* <a href='/resources/core-logo-pack.zip' target='_blank' className={styles.button}>
            Download
          </a> */}
          <Download buttonClass='bluebtn' buttonTitle='Download' />
        </div>
      </div>
    </div>
  );
}
