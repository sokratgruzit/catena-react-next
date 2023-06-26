import Image from 'next/image';
import Link from 'next/link';

import useConnect from '../../../hooks/use-connect';
import Button from '../../UI/button/Button';
import RunningLogos from '../components/runningLogos/RunningLogos';

import styles from './HomeLanding.module.css';

const HomeLanding = () => {
  const { isActive, handleWalletModal } = useConnect();

  return (
    <section className={styles.inner}>
      <div className={styles.bgContainer}>
        <Image layout='fill' objectFit='contain' src={'/images/home/homelandingBg.png'} quality={100} alt='' />
      </div>
      <h1 className={styles.title}>
        Space is Made
        <br /> of <span>CATENA</span>
      </h1>
      <p className={styles.subTitle}>
        Trade, Earn, and Win crypto on the most popular decentralized platform in the galaxy.
      </p>
      <div className={styles.buttonWrapper}>
        {!isActive && (
          <Button
            title={'Connect Wallet'}
            type={'red'}
            onClick={() => handleWalletModal(true)}
            className={styles.button}
          />
        )}
        <Button title={<Link href='/trade/swap'>Trade Now</Link>} type={'red__border'} className={styles.button} />
      </div>
      <aside className={styles.coinsSection}>
        <RunningLogos />
      </aside>
    </section>
  );
};

export default HomeLanding;
