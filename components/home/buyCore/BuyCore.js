import Image from 'next/image';
import Link from 'next/link';

import Button from '../../UI/button/Button';

import styles from './BuyCore.module.css';

const BuyCore = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainBg}>
        <Image
          layout='fill'
          objectFit='contain'
          src={'/images/home/buyCoreBg.png'}
          quality={100}
          alt=''
        />
      </div>
      <div className={styles.coreLogo}>
        <Image
          layout='fill'
          objectFit='contain'
          src={'/images/home/coreLogo.png'}
          quality={100}
          alt=''
        />
      </div>
      <div className={styles.gradient}></div>
      <div className={styles.mainContent}>
        <section className={styles.infoSection}>
          <h2 className={styles.title}>
            <span>CORE</span> makes our world go round.
          </h2>
          <p className={styles.info}>
            CORE token is at the heart of the CoreMultiChain ecosystem. Buy it,
            win it, farm it, spend it, stake it... heck, you can even vote with
            it!
          </p>
          <div className={styles.buttonWrapper}>
            <Button
              title={<Link href='/trade/swap'>Buy CORE</Link>}
              type={'red__border'}
              className={styles.button}
            />
            <Link href={'/'}>Learn</Link>
          </div>
        </section>
        <article className={styles.stats}>
          <div>
            <h3>368,264,679</h3>
            <p>Total supply</p>
          </div>
          <div>
            <h3>532,064,294</h3>
            <p>Burned to date</p>
          </div>
          <div>
            <h3>$2.0 Billion</h3>
            <p>Market cap</p>
          </div>
          <div>
            <h3>14.05/block</h3>
            <p>Current emissions</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BuyCore;
