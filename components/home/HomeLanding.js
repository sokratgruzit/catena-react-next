import Button from '../UI/button/Button';

import useConnect from '../../hooks/use-connect';

import styles from './HomeLanding.module.css';

const HomeLanding = () => {
  const { handleWalletModal } = useConnect();

  const cwClickHandler = () => {
    handleWalletModal(true);
  };

  const tradeClickHandler = () => {
    console.log('hello2');
  };

  return (
    <div className={`container ${styles.homeLanding__container}`}>
      <div className={styles.homeLanding__inner}>
        <h1 className='font_100'>
          Space is Made
          <br /> of <span className={styles.coreColor}>CORE</span>
        </h1>
        <p className={styles.textColor}>
          Trade, Earn, and Win crypto on the most popular decentralized
          <br /> platform in the galaxy.
        </p>
        <div className={styles.homeLanding__btnContainer}>
          <Button
            title={'Connect Wallet'}
            type={'red__border'}
            onClick={cwClickHandler}
            customStyles={{
              padding: '2% 0',
              width: '232px',
            }}
          />
          <Button
            title={'Trade Now'}
            type={'red'}
            onClick={tradeClickHandler}
            customStyles={{
              padding: '2% 0',
              width: '232px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
