import React from 'react';

import styles from './SeniorDesigner.module.css';

const SeniorDesigner = ({ teamResponsible, title2, head, title, description }) => {
  return (
    <div className={styles.container}>
      <h1>{head}</h1>
      <div className={styles.frontInfo}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h2>{title2}</h2>
        {teamResponsible.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
    </div>
  );
};

export default SeniorDesigner;
