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
            <svg width='100%' height='150' viewBox='0 0 281 166' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M339 115.264C324.968 76.5012 297.688 43.9482 261.982 23.3583C226.275 2.76838 184.441 -4.53273 143.873 2.74541C103.304 10.0235 66.6148 31.4123 40.2882 63.1313C13.9616 94.8503 -0.306737 134.857 0.00500209 176.081C-0.258042 217.277 14.0336 257.241 40.3584 288.924C66.6832 320.607 103.349 341.972 143.888 349.25C184.427 356.528 226.233 349.251 261.931 328.703C297.628 308.156 324.923 275.657 339 236.942C331.627 234.773 324.731 231.23 318.675 226.497C294.096 214.334 249.922 203.03 206.951 225.638C195.98 234.419 182.329 239.168 168.278 239.091C151.457 239.091 135.324 232.407 123.43 220.51C111.535 208.613 104.853 192.477 104.853 175.651C104.853 158.826 111.535 142.69 123.43 130.793C135.324 118.896 151.457 112.212 168.278 112.212C176.569 112.164 184.784 113.795 192.428 117.009C200.071 120.222 206.985 124.95 212.752 130.909C236.945 144.362 274.071 154.333 309.909 133.487C317.594 124.673 327.717 118.332 339 115.264Z'
                fill='#A6D0DD'
              />
            </svg>
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
