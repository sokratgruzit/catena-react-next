import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Faq.module.css';

const Faq = ({ faqs }) => {
  const activeLang = useSelector(state => state.settings.activeLang);
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.bodyContainer}>
        <div className={` font-90 ttl`}>A&Q</div>
        <p className={styles.Title}>Answers to frequently asked questions about the CATENA Network.</p>
      </div>
      <div className={`${styles.containerTwo}`}>
        {faqs?.map((item, index) => {
          return (
            <div key={item.id} className={styles.maneBox}>
              <div className={styles.numberBox}>
                <p className={`${styles.number} font-40 `}>{index + 1}.</p>
                <div className={`${styles.itemTitle} ttl  font-40 `}>{item.question[activeLang]['faq.question']}</div>
              </div>
              <div className={`${styles.itemTease} `}>{item.answer[activeLang]['faq.answer']}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
