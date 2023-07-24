import { Input, Button } from '@catena-network/catena-ui-module';
import React from 'react';

import styles from './SubmitAplication.module.css';
// import { InputTest } from '@catena-network/catena-ui-module';
// import { TableElement } from '@catena-network/catena-ui-module'

const SubmitAplication = ({ title }) => {
  return (
    <div className={styles.submitWrapper}>
      <div className='container_bordered'>
        <h2 className={styles.font__51}>{title}</h2>
        <div className='container_bordered-child'>
          <div className={styles.infoImport}>
            <Input
              type={'default'}
              // value={value}
              icon={true}
              emptyFieldErr={true}
              inputType={'text'}
              placeholder={'Enter..'}
              label={'FULL NAME'}
              subLabel={''}
            />

            <Input
              type={'default'}
              icon={false}
              label={'E-MAIL'}
              subLabel={''}
              placeholder={'Enter..'}
              value={''} // value
            />

            <Input
              type={'label-input-phone-number'}
              label={'PHONE NUMBER'}
            />

            <Input
              type={'textarea'}
              label={'DESCRIBE ANY EXPERIENCE WITH CRYPTOCURRENCY'}
              name={'textarea input'}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'both'}
            />

            <Input
              type={'textarea'}
              label={'Languages you can speak/write at a Business level'}
              name={'textarea input'}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'both'}
            />

            <Input
              type={'textarea'}
              label={'Additional information'}
              name={'textarea input'}
              rows={10}
              cols={20}
              placeholder={'Enter..'}
              resize={'both'}
            />

            <Input
              type={'default'}
              // value={value}
              icon={true}
              emptyFieldErr={true}
              inputType={'text'}
              placeholder={'Enter..'}
              label={'Github'}
              subLabel={''}
            />

            <Input
              type={'default'}
              // value={value}
              icon={true}
              emptyFieldErr={true}
              inputType={'text'}
              placeholder={'Enter..'}
              label={'Linkedin'}
              subLabel={''}
            />

            <Button
              label={'submit Now'}
              size={'btn-lg'}
              type={'btn-primary'}
              arrow={'arrow-right'}
              element={'button'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitAplication;
