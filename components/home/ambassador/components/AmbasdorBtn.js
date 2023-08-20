import React, { useState } from 'react';
import { Input, Button, HelpText } from '@catena-network/catena-ui-module';
import createAxiosInstance from '../../../../pages/api/axios';
import { useValidation } from "../../../../hooks/useValidation";

import styles from '../css/AmbasdorBtn.module.css';

const AmbasdorBtn = () => {
  const [chng, setChng] = useState(false);
  const [email, setEmail] = useState("");
  const [emptyField, setEmptyField] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    suggestion: '',
  });
  const [suggestionLength, setSuggestionLength] = useState(1000);

  const axios = createAxiosInstance();

  const chngeHandler = e => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value)
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!validationErrors?.email?.failure && formData.email && formData.name && formData.suggestion) {
    axios.post(`${process.env.NEXT_PUBLIC_URL}/feedback/create-feedback`, formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    } else {
      setEmptyField(true)
      console.log('Invalid format. Data not sent.');
    }
  };

  let helpTexts = {
    email: {
      validationType: "email",
      success: "Email is valid",
      failure: "Invalid email format",
    },
  };

  const validationErrors = useValidation(
    {
      email: email || "",
    },
    helpTexts
  );

  return (
    <div className={`${styles.btn} container `} data-aos="fade-up">
      <div className={`${styles.chnBox} ${chng ? styles.active : ''}`}>
        <form id='emailForm'>
          <div>
            <Input
              type={"default"}
              name={"email"}
              icon={false}
              label={'EMAIL'}
              editable={true}
              subLabel={""}
              placeholder={'Enter..'}
              validation={"email"}
              value={email}
              onChange={chngeHandler}
              emptyFieldErr={emptyField}
              statusCard={
                validationErrors?.email && (
                  <HelpText
                    status={validationErrors.email.failure ? "error" : "success"}
                    title={validationErrors.email.failure || validationErrors.email.success}
                    fontSize={"font-12"}
                    icon={true}
                  />
                )
              }
            />
          </div>
          <div>
            <Input
              type={'default'}
              icon={false}
              label={'Name'}
              subLabel={''}
              placeholder={'Enter'}
              value={formData.name}
              name='name'
              onChange={chngeHandler}
            // customStyles={{ width: '500px' }}
            />
          </div>
          <div>
            <Input
              type={'textarea'}
              label={'Make a suggestion'}
              value={formData.suggestion}
              onChange={chngeHandler}
              name='suggestion'
              rows={10}
              cols={20}
              placeholder={'Please describe your feedback in detail with corresponding screenshots'}
              resize={'none'}
              customStyles={{ width: '100%', resize: 'none' }}
            />
            <label>Limit: {suggestionLength} characters</label>
          </div>
          <div>
            <Button
              label={'Submit'}
              size={'btn-lg'}
              type={'btn-primary'}
              arrow={'arrow-right'}
              element={'button'}
              disabled={false}
              onClick={handleSubmit}
              className={styles.btnBlu}
            />
          </div>
        </form>
      </div>
      {!chng && (
        <Button
          label={'Apply Now'}
          size={'btn-lg'}
          type={'btn-primary'}
          // arrow={'arrow-right'}
          element={'button'}
          disabled={false}
          onClick={() => setChng(true)}
          className={styles.btnBlu}
          customStyles={{ marginTop: "30px" }}
        />
      )}
    </div>
  );
};

export default AmbasdorBtn;
