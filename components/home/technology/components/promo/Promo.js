import styles from './Promo.module.css';

export default function Promo() {
  const PROMO = [
    {
      technologyTitle: 'Technology',
      technologyLeft:
        'CORE is a multi-chain PoS Network focused on Interoperability, Scalability and Usability. At its core, it utilizes an AI-enabled Proof of Stake algorithm, multi-layered consensus model and voting-based governance.',
      technologyRight:
        'It is able to attain higher levels of scalability using advanced sharding, along with pipelining, chunking and parallel transaction processing. <br><br> These technologies have made it possible for the CORE network to be infinitely scalable and to achieve significantly higher throughput and efficiency. CORE is a true multi-chain communication solution that enables protocols such as cross-chain registries and cross-chain computation.',
    },
  ];

  return (
    <div>
      {PROMO.map((item, index) => (
        <div key={index} id={styles.main} className='outer'>
          <div className={styles.container}>
            <div className={styles.mainContainerDescription}>
              <div className={styles.left}>
                <h1>{item.technologyTitle}</h1>
              </div>
            </div>
          </div>
          <div className={styles.container} data-aos='fade-up'>
            <div className={`${styles.technoDescription} ${styles.pB160}`}>
              <div className={styles.technoDescriptionLeft}>{item.technologyLeft}</div>
              <div className={styles.technoDescriptionRight} v-html='itemData.technologyRight'>
                {item.technologyRight}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
