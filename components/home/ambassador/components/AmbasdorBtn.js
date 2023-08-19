import React, { useState } from 'react';
import { Input, Button } from '@catena-network/catena-ui-module';

import styles from '../css/AmbasdorBtn.module.css';

const AmbasdorBtn = () => {
  const [imaleValid, setImaleValid] = useState('');
  const [chng, setChng] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    suggestion: '',
  });

  const [suggestionLength, setSuggestionLength] = useState(1000);

  const changeHandler = e => {
    const { name, value } = e.target;

    if (name === 'suggestion') {
      const truncatedValue = value.slice(0, 1000);
      setFormData(prevState => ({
        ...prevState,
        [name]: truncatedValue,
      }));
      const remainingChars = 1000 - truncatedValue.length;
      setSuggestionLength(remainingChars);
    } else if (name === 'email') {
      const isValidEmail = validateEmail(value);
      console.log(isValidEmail, 'sadwdsadqwd');
      setImaleValid(isValidEmail);

      setFormData(prevState => ({
        ...prevState,
        [name]: value,
        emailValid: isValidEmail, // You can add a property to your state to track email validity.
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const handleSubmit = () => {
    console.log(formData);
    if (imaleValid) {
      console.log(formData, 'success');
      setChng(false);
    } else {
      console.log('isn`t valid email');
    }
  };

  return (
    <div className={`${styles.btn} container `} data-aos="fade-up">
      <div className={`${styles.chnBox} ${chng ? styles.active : ''}`}>
        <form id='emailForm'>
          <div>
            <Input
              className={styles.llll}
              type={'default'}
              icon={false}
              label={'EMAIL'}
              subLabel={''}
              placeholder={'Enter'}
              name='email'
              value={formData.email}
              onChange={changeHandler}
              // emptyFieldErr={imaleValid}
              // customStyles={{ width: '500px' }}
            />
          </div>
          <div>
            <Input
              type={'default'}
              icon={false}
              label={'Name'}
              subLabel={''}
              placeholder={'Enter'}
              name='name'
              value={formData.name}
              onChange={changeHandler}
              // customStyles={{ width: '500px' }}
            />
          </div>
          <div>
            <Input
              type={'textarea'}
              label={'Make a suggestion'}
              name='suggestion'
              value={formData.suggestion}
              onChange={changeHandler}
              rows={10}
              cols={20}
              placeholder={'Please describe your feedback in detail with corresponding screenshots'}
              resize={'both'}
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
        />
      )}
    </div>
  );
};

export default AmbasdorBtn;
