import React from 'react';
import styles from './LotteryPrizes.module.css';
import WinRoutes from './WinRoutes';

let tabsData = [
  {
    id: 0,
    label: 'Trading Compatition',
  },
  {
    id: 1,
    label: 'Prediction',
  },
  {
    id: 2,
    label: 'Lottery',
  },
];

const LotteryPrizes = () => {
  return (
    <>
      <div>
        <div className={styles.tab}>
          <img
            className={styles.Container__background}
            src='../images/win/background/lotteryBg.png'
            alt=''
          />
          <div className={styles.container}>
            <WinRoutes />
          </div>
        </div>
        <div>
          <h1 className={styles.title}>
            {' '}
            <span>CORE</span> MultiChain
          </h1>
          <h2 className={styles.titleDesc}>Lottery in Prizes!</h2>
        </div>
        <div className={styles.imgPosition}>
          <img
            className={styles.pinkTicket}
            src={'../images/win/pinkTicket.png'}
            alt=''
          />
          <img
            className={styles.smallStar}
            src={'../images/win/pawawuna.png'}
            alt=''
          />
          <img className={styles.star} src={'../images/win/star.png'} alt='' />
        </div>
        <div className={styles.prizesContainer}>
          <img
            src={'../images/win/blurLottery.png'}
            className={styles.blur}
            alt=''
          />
          <div className={styles.lotteryNumber}>
            <p>2</p>
            <p>4</p>
            <p>6</p>
            <p>0</p>
            <p>1</p>
            <p>1</p>
          </div>
        </div>
        <div className={styles.pictureContainer}>
          <img
            className={styles.littleStar}
            src={'../images/win/namceca.png'}
            alt=''
          />
          <img
            className={styles.ticket}
            src={'../images/win/ticket.png'}
            alt=''
          />
        </div>
        <div className={styles.buttonStyle}>
          <button className={styles.buyTicket}>Buy Tickets</button>
        </div>
        <div className={styles.pictureContainer}>
          <img
            className={styles.tickets}
            src={'../images/win/tickets.png'}
            alt=''
          />
          <img
            className={styles.starr}
            src={'../images/win/pawawuna.png'}
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default LotteryPrizes;
