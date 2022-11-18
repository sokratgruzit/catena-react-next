import Image from 'next/image';
import Link from 'next/link';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';

import styles from './PrizeFunds.module.css';

let statisticsData = [
  {
    id: '0',
    title: 'Matches First 1',
    percent: '2%',
    color: '#FFB74D',
  },
  {
    id: '1',
    title: 'Matches First 2',
    percent: '3%',
    color: '#9CCC65',
  },
  {
    id: '2',
    title: 'Matches First 3',
    percent: '5%',
    color: '#80CBC4',
  },
  {
    id: '3',
    title: 'Matches First 4',
    percent: '10%',
    color: '#29B6F6',
  },
  {
    id: '4',
    title: 'Matches First 5',
    percent: '20%',
    color: '#673AB7',
  },
  {
    id: '5',
    title: 'Matches First 6',
    percent: '40%',
    color: '#BA68C8',
  },
  {
    id: '6',
    title: 'Burn Pool',
    percent: '20%',
    color: '#FF8A65',
  },
];

const PrizeFunds = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.blackHole}>
          <Image
            layout='fill'
            objectFit='contain'
            src={'/images/win/blackHoule.png'}
            alt=''
          />
        </div>
        <div className={styles.star}>
          <Image
            layout='fill'
            objectFit='contain'
            src={'/images/win/star.png'}
            alt=''
          />
        </div>
        <div className={styles.littleStar}>
          <Image
            layout='fill'
            objectFit='contain'
            src={'/images/win/namceca.png'}
            alt=''
          />
        </div>

        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Prize Funds</h1>
            <p>The prizes for each lottery round come from three sources:</p>
          </div>
          <div>
            <p className={styles.desTitle}>Ticket Purchases</p>
            <p className={styles.description}>
              <span className={styles.circle}></span>
              100% of the CAKE paid by people buying tickets that round goes
              back into the prize pools.
            </p>
          </div>
          <div>
            <p className={styles.desTitle}>Rollover Prizes</p>
            <p className={styles.description}>
              <span className={styles.circle}></span>
              After every round, if nobody wins in one of the prize brackets,
              the unclaimed CAKE for that bracket rolls over into the next round
              and are redistributed among the prize pools.
            </p>
          </div>
          <div>
            <p className={styles.desTitle}>CAKE Injections</p>
            <p className={styles.description}>
              <span className={styles.circle}></span>
              An average total of 35,000 CAKE from the treasury is added to
              lottery rounds over the course of a week. This CAKE is of course
              also included in rollovers! Read more in our guide to{' '}
              <Link className={styles.links} href={'/win/lottery/CoreTokenomics'}>
                CORE Tokenomics
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.statistics}>
          <div className={styles.border}>
            <CornerDecor />
            <div className={styles.boll}></div>
            <div className={styles.static}>
              <p>Digits Matched</p>
              <p>Prize Pool Allocation</p>
            </div>
            <div>
              {statisticsData.map(item => {
                return (
                  <div key={item.id} className={styles.bollStatistics}>
                    <div className={styles.percentStatistics}>
                      <div
                        className={styles.smallSvg}
                        style={{ background: item.color }}
                      ></div>
                      <p>{item.title}</p>
                    </div>
                    <p>{item.percent}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.question}>
        <h2>Still got questions?</h2>
        <p>
          Check our in-depth guide on{' '}
          <span className={styles.links}>
            how to play the PancakeSwap lottery!
          </span>
        </p>
      </div>
    </>
  );
};

export default PrizeFunds;
