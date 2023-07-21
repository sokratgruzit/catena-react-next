import React from 'react';

import styles from './AboutYou.module.css';

const AboutYou = ({ head, aboutSalary, aboutRange, title2 }) => {
  return (
    <div>
      <h2 style={{ paddingLeft: '80px' }}>{head}</h2>
      <ul>
        <div className={styles.container}>
          {aboutSalary.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </div>
      </ul>
      <div>
        <h2 style={{ paddingLeft: '80px' }}>{title2}</h2>
        <div className={styles.container}>
          {aboutRange.map((item, index) => {
            return (
              <ul key={index}>
                <li>{item.title}</li>
                <li>{item.value}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className={styles.importButton}>Apply this job now</div>
    </div>
  );
};

export default AboutYou;
