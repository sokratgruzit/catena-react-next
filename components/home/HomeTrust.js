import Image from 'next/image';

import JoinBoxItem from './components/joinBoxItem/JoinBoxItem';

import styles from './HomeTrust.module.css';

const HomeTrust = () => {
  return (
    <main className={styles.container}>
      <div className={styles.bgContainer}>
        <Image
          layout='fill'
          objectFit='contain'
          src={'/images/home/homeGlobe.png'}
          quality={100}
          alt=''
        />
      </div>
      <h1 className={styles.title}>
        Used by <span>millions</span>. <br />
        Trusted with <span>billions</span>.
      </h1>
      <p className={styles.coreInfo}>
        Core has the most users of any decentralized platform, ever. And those
        users are now entrusting the platform with over $4.4 billion in funds.
      </p>
      <h2 className={styles.subTitle}>Will You join them?</h2>
      <section className={styles.joinSection}>
        <JoinBoxItem
          num='3 Million'
          type='Users'
          subTitle='In the last 30 days'
        />
        <JoinBoxItem
          num='42 Million'
          type='Traders'
          subTitle='Made in the last 30 days'
        />
        <JoinBoxItem
          num='$4.4 Billion'
          type='Staked'
          subTitle='Total Value Locked'
        />
      </section>
    </main>
  );
};

export default HomeTrust;
