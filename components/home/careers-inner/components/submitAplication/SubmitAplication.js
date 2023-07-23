import React from 'react';

import styles from './SubmitAplication.module.css';
// import { InputTest } from '@catena-network/catena-ui-module';
// import { TableElement } from '@catena-network/catena-ui-module'
// import { Input } from '@catena-network/catena-ui-module'

const SubmitAplication = ({ title }) => {
  return (
    <div className='container_bordered'>
      <h2 className={styles.font__51}>{title}</h2>
      <div className='container_bordered-child'>
        {/* <Input
          type={"default"}
          // value={value}
          icon={true}
          emptyFieldErr={true}
          inputType={"text"}
          placeholder={"Enter.."}
          label={"FULL NAME"}
          subLabel={""}
          customStyles={{ width: "500px" }}
        />
        <Input
          type={"default"}
          icon={false}
          label={"E-MAIL"}
          subLabel={""}
          placeholder={"Enter.."}
          value={""} // value
          customStyles={{ width: "500px" }}
        />
        <Input
          type={"label-input-phone-number"}
          label={"PHONE NUMBER"}
          customStyles={{ width: "500px" }}
        />
        <Input
          type={"textarea"}
          label={"DESCRIBE ANY EXPERIENCE WITH CRYPTOCURRENCY"}
          name={"textarea input"}
          rows={10}
          cols={20}
          placeholder={"Enter.."}
          resize={"both"}
        /> */}
      </div>
    </div>
  );
};

export default SubmitAplication;
