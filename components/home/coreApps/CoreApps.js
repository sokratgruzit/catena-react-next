import Image from 'next/image';
import Link from 'next/link';
import { AppStore, GooglePlay } from '../../svg';

import styles from './CoreApps.module.css';

const CoreApps = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainBg}>
        <Image
          layout='fill'
          objectFit='contain'
          src={'/images/home/coreAppsBg.png'}
          quality={100}
          alt=''
        />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Download
          <div className={styles.coreLogo}>
            <Image
              layout='fill'
              objectFit='contain'
              src={'/images/home/logos/CoreLogo.png'}
              quality={100}
              alt=''
            />
          </div>
          <span>CORE</span> Wallet App
        </h1>
        <section className={styles.buttonSection}>
          <div className={styles.buttonWrapper}>
            <GooglePlay />
          </div>
          <div className={styles.buttonWrapper}>
            <AppStore />
          </div>
        </section>
        <Link href='/'>Learn More About Wallet</Link>
      </main>
    </div>
  );
};

export default CoreApps;
