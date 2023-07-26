import React from 'react';

import styles from './AboutYou.module.css';

const AboutYou = ({ head, aboutSalary, aboutRange, title2 }) => {
  return (
    <div>
      <div className='container_bordered'>
        <h2 className={styles.font__51}>{head}</h2>
        <div className='container_bordered-child'>
          <div className='text'>
            <ul>
              {aboutSalary.map((item, index) => {
                return (
                  <li style={{ color: '#162029', fontSize: '20px', width: '620px' }} key={index}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div></div>
        </div>
      </div>
      <div className='container_bordered'>
        <h2 className={styles.font__51}>{title2}</h2>
        <div className='container_bordered-child'>
          {aboutRange.map((item, index) => {
            return (
              <div key={index} className='text'>
                <ul>
                  <li>{item.title}</li>
                </ul>
                <p style={{ color: '#162029', fontSize: '20px', paddingLeft: '20px', lineHeight: '30px' }}>
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutYou;