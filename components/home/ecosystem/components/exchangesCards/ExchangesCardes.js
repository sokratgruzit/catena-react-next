import { useState } from 'react';
import styles from './ExcangesCards.module.css';

const ExchangesCards = ({ data }) => {
  const [exchang, setExchanges] = useState('exchange');
  
  return (
    <div>
      <div className={styles.cardinfo}>CMCX listed on {data?.length} Exchanges</div>
      <div className={styles.massive} style={{ width: '152px', color: '#969BA6', position: 'absolute', top: '430px', left: '85%', textAlign: 'right' }} >CMCX massive listing</div>
      <div className={styles.container}>
        {data?.map((card, index) => {
          return (
            <div className={styles.card} style={{ background: card?.color }} key={index}
              onClick={() => { window.open(`${card?.exchange_link}`, "_blank")} }
            >
              <div className={styles.img}>
                <img
                  className={styles.img}
                  src={`http://localhost:4003/uploads/ecosystem/${card?.logo_image}`}
                  alt="img"
                />
              </div>
              <div className={styles.titleAndDescr}>
                <div className={styles.title}>{card?.exchange_name}</div>
                <div className={styles.description}>{card?.inner_descr["en"]["exchange.description"]}</div>
              </div>
              <div className={styles.buttonsContainer}>
                {/* {card?.buttons.map((b, i) => {
                  return ( */}
                    <div className={styles.button}>
                    {exchang.toUpperCase()}
                    </div>
                  {/* );
                })} */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

};

export default ExchangesCards;
