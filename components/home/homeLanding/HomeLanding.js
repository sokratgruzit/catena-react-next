import Image from 'next/image';

import Button from '../../UI/button/Button';
import useConnect from '../../../hooks/use-connect';
import { useWindowDimension } from '../../../hooks/useWindowDimension';

import styles from './HomeLanding.module.css';
import RunningLogos from '../components/runningLogos/RunningLogos';

const HomeLanding = () => {
  const { handleWalletModal } = useConnect();
  const [height] = useWindowDimension();

  const handleConnectWallet = () => {
    handleWalletModal(true);
  };

  const handleTradeNow = () => {
    console.log('hello2');
  };

  return (
    <div className={styles.inner}>
      <div className={styles.bgContainer}>
        <Image
          layout='fill'
          objectFit='contain'
          src={'/images/home/homelandingBg.png'}
          quality={100}
          alt=''
        />
      </div>
      <h1 className={styles.title}>
        Space is Made
        <br /> of <span>CORE</span>
      </h1>
      <p className={styles.subTitle}>
        Trade, Earn, and Win crypto on the most popular decentralized platform
        in the galaxy.
      </p>
      <section className={styles.buttonWrapper}>
        <Button
          title={'Connect Wallet'}
          type={'red'}
          onClick={handleConnectWallet}
          className={styles.button}
        />
        <Button
          title={'Trade Now'}
          type={'red__border'}
          onClick={handleTradeNow}
          className={styles.button}
        />
      </section>
      <aside className={styles.coinsSection}>
        <RunningLogos />
      </aside>
    </div>
  );
};

export default HomeLanding;
