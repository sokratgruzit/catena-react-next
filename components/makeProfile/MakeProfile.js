import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import PhoneNumberSelect from './components/phoneNumberSelect/PhoneNumberSelect';
import createAxiosInstance from '../../pages/api/axios';
import FormSelectDate from '../voting/components/formDateInput/FormSelectDate';

import styles from './MakeProfile.module.css';
import { Input } from '@catena-network/catena-ui-module';

const MakeProfile = () => {
  const account = useSelector(state => state.connect.account);
  const dispatch = useDispatch();
  const router = useRouter();

  const axios = useMemo(() => createAxiosInstance(), []);
  const [inputs, setInputs] = useState({
    fullname: '',
    email: '',
    mobile: '',
    password: '',
    status: true,
    dateOfBirth: new Date()
  });

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    mobile: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    let error = '';

    switch (name) {
      case 'name':
        error = value ? '' : 'Name is required';
        break;
      case 'email':
        if (value && !/^\S+@\S+\.\S+$/.test(value)) {
          error = 'Email is not valid';
        }
        break;
      default:
        break;
    }

    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  function handleCustomUpdate(name, value) {
    handleInputChange({ target: { name: name, value } });
  }

  const handleSubmit = event => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};
    const { locale } = router;

    for (const [key, value] of Object.entries(inputs)) {
      switch (key) {
        case 'fullname':
          newErrors[key] = value ? '' : 'Fullname is required';
          break;
        case 'email':
          if (value && !/^\S+@\S+\.\S+$/.test(value)) {
            newErrors[key] = 'Email is not valid';
          }
          break;

        default:
          break;
      }
      if (newErrors[key]) {
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      axios
        .post('/user/profile', {
          address: account,
          fullname: inputs.fullname,
          email: inputs.email,
          mobile: inputs.mobile,
          password: inputs.password,
          dateOfBirth: inputs.dateOfBirth,
          status: true,
          locale: locale
        })
        .then(res => {
          dispatch({ type: 'SET_USER', payload: res.data });
        })
        .catch(e => console.log(e.response));
    }
  };

  useEffect(() => {
    if (account) {
      axios
        .post('/user', { address: account })
        .then(res => {
          let user = res?.data?.user;
          const dateOfBirth = user.dateOfBirth ? new Date(user.dateOfBirth) : new Date();

          dispatch({ type: 'SET_USER', payload: user });
          setInputs({
            fullname: user.fullname,
            email: user.email,
            mobile: user.mobile,
            status: user.status,
            password: '',
            dateOfBirth: dateOfBirth
          });
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }, [account]);

  useEffect(() => {
    const { locale } = router;

    if (!account) router.push('/', undefined, { locale });
  }, [account]);
  const changeHandler = (i, e) => {
    console.log(i.target.value);
  };
  const[cover, setCover] = useState(true)
  const coverhandler = () => {
    console.log("coverHandler");
    setCover(true);
  };

  let content = null;

  if (account) {
    content = <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.makeProfileWrapper}>
        <label>
          Fullname:
          <input
            type='text'
            name='fullname'
            value={inputs.fullname}
            onChange={handleInputChange}
            className={styles.input}
          />
          {errors.fullname && <span className='error'>{errors.fullname}</span>}
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={inputs.password}
            onChange={handleInputChange}
            className={styles.input}
          />
          {errors.password && <span className='error'>{errors.password}</span>}
        </label>
        <Input
          type={"default"}
          icon={true}
          inputType={"password"}
          coverHandler={coverhandler}
          placeholder={"password input"}
          label={"Enter Password"}
          subLabel={""}
          onChange={changeHandler}
        />
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={inputs.email}
            onChange={handleInputChange}
            className={styles.input}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
        </label>
        <Input
          type={"default"}
          icon={false}
          label={"Eneter e-mail"}
          editable={true}
          value={inputs.email}
          placeholder={"default input"}
          onChange={changeHandler}
        />
        <label className={styles.phoneNumberLabel}>
          Mobile Number (Optional)
          <PhoneNumberSelect
            handleFullMobileNumberChange={value => handleCustomUpdate('mobile', value)}
            value={inputs.mobile}
          />
        </label>
        <label className={styles.formSelectDateWrap}>
          Date Of Birth:
          <FormSelectDate
            placeholderText='YYYY/MM/DD'
            onChange={date => handleCustomUpdate('dateOfBirth', date)}
            selected={inputs.dateOfBirth}
            minDate={new Date('1900/01/01')}
            maxDate={new Date()}
          />
        </label>
        <button type='submit' className={styles.submit}>
          Submit
        </button>
      </form>
    </div>;
  } else {
    content = <div>Loading...</div>;
  }

  return content;
};

export default MakeProfile;
