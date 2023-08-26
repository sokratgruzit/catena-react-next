import styles from '../css/Box.module.css';

const Box = () => {
  return (
    <div className={`${styles.mane} container`}>
      <div className={`${styles.box} container_bordered-child `}>
        <div className={`${styles.containerOne}   `}>
          <div className={styles.boxmane}>
            <div className={styles.itemOne}>
              <h1>Total Token Balance</h1>
              <img src='/images/contribute/fisseye.png' />
            </div>
            <div className={styles.itemTwo}>
              <div className='ttl font-40'>200,140,012</div>
              <div className='ttl'>CMCX</div>
            </div>
          </div>
          <div className={styles.svgg}>
            <img className={styles.svgImg} src='/images/contribute/Vectorr.png' />
          </div>
        </div>
        <div className={`${styles.containerTwo}  `}>
          <p>CMCX Token Price</p>
          <div className={styles.boxOne}>
            <h1 className='ttl'>1 CMCX = 0.00632 USDT</h1>
          </div>
          <p>CMCX Token Price</p>
          <div className={styles.boxTwo}>
            <h1 className='ttl'>1 USDT = 0.00632 ETH = 0.00000234 BTC</h1>
          </div>
        </div>
        <div className={`${styles.containerThree} `}>
          <p className='ttl'>Explore App</p>
          <div className={styles.bottomOne}>
            <p className='ttl'> Download</p>
            <img className={styles.imageBox} src='/images/contribute/apps/app1.png' />
            <p className='ttl'>Tronlink App</p>
          </div>
          <div className={styles.img}>
            <img className={styles.GooglePley} src='/images/contribute/apps/app5.png' />
            <img className={styles.AppStory} src='/images/contribute/apps/app6.png' />
          </div>
          <div className={styles.botoomBox}>
            <img src='/images/contribute/Polygon 2.png' className={styles.bottomImg} />
            <h1 className={`${styles.botoomttl} ttl`}>watch instructions video</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
