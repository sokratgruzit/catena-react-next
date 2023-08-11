import React from 'react';

import styles from './CareersCatena.module.css';

const CareersCatena = () => {
  return (
    <div className='pT-180'>
      <div className='container'>
        <h1 style={{ color: '#162029 !important' }} className='font-90 ttl'>
          Careers at
          <span className={styles.ttl_red}>CATENA</span>
        </h1>
      </div>
    </div>
  );
};

export default CareersCatena;
