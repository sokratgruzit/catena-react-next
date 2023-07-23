import React from 'react';
import styles from './SubmitAplication.module.css'
// import { InputTest } from '@catena-network/catena-ui-module';
// import { InputTest } from '@catena-network/catena-ui-module'
// import { Input } from '@catena-network/catena-ui-module'

const SubmitAplication = ({ title }) => {
  return (
    <div className='container_bordered'>
      <h2 className={styles.font__51}>{title}</h2>
      <div className='container_bordered-child'>

      </div>
    </div>
  );
};

export default SubmitAplication;
