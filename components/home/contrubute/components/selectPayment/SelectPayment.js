import { Input, Button } from '@catena-network/catena-ui-module';
import styles from './SelectPayment.module.css';

const SelectPayment = () => {
  const Box = [
    {
      img: '/images/contribute/tokens/tok1.png',
      ttl: 'USDT',
      Bowl: '0.01405261 USDT',
    },
    {
      img: '/images/contribute/tokens/tok2.png',
      ttl: 'Coinbase',
      Bowl: '0.01405261 ETH',
    },
  ];

  return (
    <div className={`${styles.hederContainer} container`}>
      <h1 className={`${styles.ttl} font-90 ttl`}>Contribute</h1>
      <h1 className={`${styles.title} ttl`}>1. Select the payment method and calculate token price</h1>
      <div className={`${styles.container}`}>
        {Box.map((item, index) => {
          return (
            <div key={index} className={`${styles.boxMap}`}>
              <div className={`${styles.itemMap} container_bordered-child `}>
                <img className={styles.image} src={item.img} />
                <p>{item.ttl}</p>
              </div>
              <div className={styles.bowl}></div>
              <p className={styles.BowlBox}>{item.Bowl}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default SelectPayment;
