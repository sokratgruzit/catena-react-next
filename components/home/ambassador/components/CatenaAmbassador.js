import { useState } from 'react';

import styles from '../css/CatenaAmbassador.module.css';

const CatenaAmbassador = () => {
  const TTl = [
    {
      ttl: 'You’re a blockchain and privacy enthusiast, an influencer, or an expert.',
    },
    {
      ttl: 'You’re passionate about blockchain technology and believe that blockchain technology will play a impactful role in the future.',
    },
    {
      ttl: 'You are already a community leader and have the ability to promote CATENA within your group.',
    },
    {
      ttl: 'You are a content and marketing creator and love using out-of-the-box ideas to build content.',
    },
    {
      ttl: 'You are a student of blockchain and would love to gain real-world industry experience and hands-on knowledgeof the crypto markets and space.',
    },
    {
      ttl: 'You can still become a CATENA ambassador even if you aren’t a crypto guru. Apply and tell us more about whyyou believe in CATENA.',
    },
  ];
  return (
    <div className={`${styles.containerCatena} container `}>
      <h1 className={`${styles.CatTit} ttl font-40`}> Are You Eligible to Become a CATENA Ambassador?</h1>
      <div className={`${styles.ulTxt}  text`}>
        {TTl.map((item, index) => {
          return (
            <ul>
              <li>{item.ttl}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default CatenaAmbassador;
