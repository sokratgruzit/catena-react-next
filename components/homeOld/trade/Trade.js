import Image from 'next/image';
import Link from 'next/link';

import useConnect from '../../../hooks/use-connect';
import { useWindowDimension } from '../../../hooks/useWindowDimension';
import Button from '../../UI/button/Button';

import styles from './Trade.module.css';

const Trade = () => {
  const { handleWalletModal } = useConnect();
  const [height] = useWindowDimension();

  return (
    <section className={styles.container}>
      <div className={styles.BlackHoleBg}>
        <Image
          layout='fill'
          objectFit='contain'
          src={height > 800 ? '/images/home/BlackHoleBg.png' : '/images/home/BlackHoleMobile.png'}
          quality={100}
          alt=''
        />
      </div>
      <div className={styles.clouds}>
        <Image layout='fill' objectFit='contain' src={'/images/home/clouds.png'} quality={100} alt='' />
      </div>
      <section className={styles.rocketmanSection}>
        <div className={styles.rocketman}>
          <Image layout='fill' objectFit='contain' src={'/images/home/rocketman.png'} quality={100} alt='' />
        </div>
      </section>
      <section className={styles.tradeSection}>
        <h2>
          <span>Trade</span> anything.
        </h2>
        <h2>No registration, No hassle.</h2>
        <p>Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</p>
        <div className={styles.buttonWrapper}>
          <Button title={<Link href='/trade/swap'>Trade Now</Link>} type={'red__border'} className={styles.tradeNow} />
          <Link href={'/'}>Learn</Link>
        </div>
      </section>
    </section>
  );
};

export default Trade;
