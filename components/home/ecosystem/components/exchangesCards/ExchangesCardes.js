import { useState } from 'react';
import styles from './ExcangesCards.module.css';

const ExchangesCards = ({ data }) => {
  const [exchang, setExchanges] = useState('exchange');
  
  return (
    <div>
      <div className={styles.cardinfo}>CMCX listed on {data?.length} Exchanges</div>
      <div className={styles.massive} >CMCX massive listing</div>
      <div className={styles.container}>
        {data?.map((card, index) => {
          return (
            <div className={styles.card} style={{ background: card?.color }} key={index}
              onClick={() => { window.open(`${card?.exchange_link}`, "_blank")} }
            >
              <div className={styles.img}>
                <img
                  className={styles.img}
                  src={`${process.env.NEXT_PUBLIC_URL}uploads/ecosystem/${card?.logo_image}`}
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
