import React from 'react';

import styles from './SeniorDesigner.module.css';

const SeniorDesigner = ({ teamResponsible, title2, head, title, description, title3 }) => {
  return (
    <div className='container'>
      <h1 style={{ color: '#162029' }} className='font-90 ttl'>{head}</h1>
      <div className={styles.frontInfo}>
        <h2 className={`${styles.infoTitleSenior} font-40 ttl`}>{title}</h2>
        <p className={styles.textDescription1}>{description}</p>
        <div>
          <h2 className={`${styles.infoTitleSenior} font-40 ttl`}>{title2}</h2>
        </div>
        {teamResponsible.map((item, index) => {
          return <div className={styles.textDescription} key={index}>{item.title}</div>;
        })}
      </div>
    </div>
  );
};

export default SeniorDesigner;
