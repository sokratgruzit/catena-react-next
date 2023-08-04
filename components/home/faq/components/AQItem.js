import { useSelector } from 'react-redux';

import styles from './AQ.module.css';

function FaqItem({ allData }) {
  const activeLang = useSelector(state => state.settings.activeLang);
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.bodyContainer}>
        <div className={` font-90 ttl`}>A&Q</div>
        <p className={styles.Title}>Answers to frequently asked questions about the CATENA Network.</p>
      </div>
      <div className={`${styles.containerTwo}`}>
        {allData?.map((item, index) => {
          return (
            <div key={item.id} className={styles.maneBox}>
              <div className={styles.numberBox}>
                <p className={styles.number}>
                  {index + 1}
                  <span>.</span>
                </p>
                <div className={`${styles.itemTitle} ttl  font-40 `}>{item.translations[activeLang].question}</div>
              </div>
              <div className={`${styles.itemTease} `}>{item.translations[activeLang].answer}`</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaqItem;
