import Image from 'next/image'
import Link from 'next/link'

import { AppStore, GooglePlay } from '../../svg'

import styles from './CoreApps.module.css'

const CoreApps = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainBg}>
        <Image layout='fill' objectFit='contain' src={'/images/home/coreAppsBg.png'} quality={100} alt='' />
      </div>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Download
          <div className={styles.coreLogo}>
            <Image layout='fill' objectFit='contain' src={'/images/home/logos/CoreLogo.png'} quality={100} alt='' />
          </div>
          <span>CORE</span> Wallet App
        </h1>
        <div className={styles.buttonSection}>
          <Link href='/' scroll={false}>
            <div>
              <GooglePlay />
            </div>
          </Link>
          <Link href='/' scroll={false}>
            <div>
              <AppStore />
            </div>
          </Link>
        </div>
        <Link href='/'>Learn More About Wallet</Link>
      </div>
    </section>
  )
}

export default CoreApps
