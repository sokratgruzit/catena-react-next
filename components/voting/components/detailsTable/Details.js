import styles from './Details.module.css';
import { close, community } from '../../../UI/votingComponents/VotingComponents';

export default function Details({ detailsData }) {
  return (
    <div className={styles.details}>
      <div className={styles.detailsHeader}>
        <p className='font-20 ttl'>Details</p>
        <div className={styles.type}>
          {community}
          {close}
        </div>
      </div>
      <div className={styles.detailsBody}>
        {detailsData.map((item, index) => {
          return (
            <div key={index}>
              {item.item && (
                <div className={styles.detailsContent}>
                  <p>{item.item}</p>
                  {item.code && (
                    <p>
                      {item.code}
                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M18.5401 15.1046C18.6744 14.9703 18.7593 14.7864 18.7593 14.5743L18.7593 5.99003C18.7581 5.7916 18.6788 5.60164 18.5385 5.46133C18.3982 5.32101 18.2082 5.24167 18.0098 5.2405L9.42549 5.2405C9.01537 5.2405 8.67596 5.57991 8.67596 5.99003C8.67596 6.40015 9.01537 6.73956 9.42549 6.73956L17.2602 6.73956L17.2602 14.5743C17.2602 14.9844 17.5996 15.3238 18.0098 15.3238C18.2148 15.3309 18.4057 15.239 18.5401 15.1046Z'
                          fill='#212121'
                        />
                        <path
                          d='M6.51937 18.5404L18.42 6.63982C18.7099 6.3499 18.7099 5.86907 18.42 5.57916C18.1301 5.28924 17.6492 5.28924 17.3593 5.57916L5.45871 17.4798C5.1688 17.7697 5.1688 18.2505 5.45871 18.5404C5.74863 18.8303 6.22946 18.8303 6.51937 18.5404Z'
                          fill='#212121'
                        />
                      </svg>
                    </p>
                  )}
                </div>
              )}
              {index === 3 && <div className={styles.typeDetails}> {close}</div>}
              {item.dateTeaser && (
                <div className={styles.date}>
                  <p>{item.dateTeaser}</p>
                  <p>{item.date}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
