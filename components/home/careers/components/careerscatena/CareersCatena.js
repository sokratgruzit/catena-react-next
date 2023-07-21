import React from 'react';

import styles from './CareersCatena.module.css';

const CareersCatena = () => {
  return (
    <div style={{ paddingTop: '150px' }} className='container'>
      <h1 style={{ color: '#162029' }} className='font-90'>
        Careers at
        <span className={styles.ttl_red}>CATENA</span>
      </h1>
    </div>
  );
};

export default CareersCatena;
