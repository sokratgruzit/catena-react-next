import styles from './ExcangesCards.module.css';

const ExchangesCards = ({ data }) => {
  console.log(data.length);
  return (
    <div>
      <div className={styles.cardinfo}>CMCX listed on {data.length} Exchanges</div>
      <div style={{ width: '112px', color: '#969BA6', position: 'absolute', top: '430px', left: '50%' }} >CMCX massive listing</div>
      <div className={styles.container}>
        {data.map((card, index) => {
          return (
            <div className={styles.card} style={{ background: card?.color }} key={index}>
              {console.log(card.color)}
              <div className={styles.svg}>{card.svg}</div>
              <div className={styles.titleAndDescr}>
                <div className={styles.title}>{card.exchangeName}</div>
                <div className={styles.description}>{card.description}</div>
              </div>
              <div className={styles.buttonsContainer}>
                {card.buttons.map((b, i) => {
                  return (
                    <div className={styles.button} key={i}>
                      {b.name.toUpperCase()}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExchangesCards;
