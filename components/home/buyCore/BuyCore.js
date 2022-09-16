import Image from 'next/image';
import Link from 'next/link';
import Button from '../../UI/button/Button';
import JoinBoxItem from '../components/joinBoxItem/JoinBoxItem';

import styles from './BuyCore.module.css';

const buyCoreData = [
  {
    id: 0,
    totalSupply: '368,264,679',
    totalSupplyTitle: 'Total supply',
  },
  {
    id: 1,
    totalSupply: '532,064,294',
    totalSupplyTitle: 'Burned to date',
  },
  {
    id: 2,
    totalSupply: '$2.0 Billion',
    totalSupplyTitle: 'Market cap',
  },
  {
    id: 3,
    totalSupply: '14.05/block',
    totalSupplyTitle: 'Current emissions',
  },
];

const BuyCore = () => {
  return (
    <div className={styles.container}>
      <aside>
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
      </aside>
      <main className={styles.mainContent}>
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
              title={'Buy CORE'}
              type={'red__border'}
              onClick={() => {
                handleWalletModal(true);
              }}
              className={styles.button}
            />
            <Link href={'/'}>Learn</Link>
          </div>
        </section>
        <section className={styles.stats}>
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
        </section>
      </main>
    </div>
  );
};

export default BuyCore;
