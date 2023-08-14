import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Button, Input } from '@catena-network/catena-ui-module';
import createAxiosInstance from '../../pages/api/axios';
import { socket } from '../../pages/api/socket';

import styles from './MakeProfile.module.css';
import { set } from 'date-fns';

const MakeProfile = () => {
  const [cover, setCover] = useState(true)
  const [show, setShow] = useState(false);
  const [user_id, setUser_id] = useState(null);
  const [formData, setFormData] = useState({
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

  socket.on('emailVerified', (userId) => {
    setShow(true);
    setUser_id(userId);
    console.log(`User with ID ${userId} has verified their email`);
  });

  const account = useSelector(state => state.connect.account);

  const router = useRouter();
  const { locale } = router;
  const dispatch = useDispatch();
  const axios = useMemo(() => createAxiosInstance(), []);

  const coverhandler = () => {
    setCover(true);
  };

  const changeHandler = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const changeCountry = (data) => {
    let number = data.code + data.number
    setFormData(prevState => ({
      ...prevState,
      mobile: number,
    }));
  };

  function handleCustomUpdate(name, value) {
    changeHandler({ target: { name: name, value } });
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = event => {
    let isValid = true;
    const newErrors = {};

    for (const [key, value] of Object.entries(formData)) {
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
          fullname: formData.fullname,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password,
          dateOfBirth: formData.dateOfBirth,
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
          setFormData({
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
    } else {
      router.push('/', undefined, { locale });
    }
  }, [account]);

  return (
    <>
      {show && <div className={styles.notification}>{`User with ID ${user_id} has verified email`}</div>}
      {account ? <div className="container">
        <div className={`${styles.makeProfileWrapper}`}>
          <Input
            type={"default"}
            name="fullname"
            icon={true}
            value={formData.fullname}
            emptyFieldErr={true}
            inputType={"text"}
            placeholder={"default input"}
            label={"Fullname"}
            subLabel={":"}
            onChange={changeHandler}
          />
          <Input
            type={"default"}
            name="password"
            icon={true}
            value={formData.password}
            inputType={"password"}
            coverHandler={coverhandler}
            placeholder={"password input"}
            label={"Enter Password"}
            subLabel={""}
            onChange={changeHandler}
          />
          <Input
            type={"default"}
            icon={true}
            name="email"
            value={formData.email}
            emptyFieldErr={true}
            inputType={"text"}
            placeholder={"default input"}
            label={"Email"}
            subLabel={":"}
            onChange={changeHandler}
          />
          <Input
            type={"label-input-phone-number"}
            label={"Phone Number"}
            onChange={changeCountry}
          />
          <Input
            type={"date-picker-input"}
            label={"your text"}
            placeholderText="YYYY/MM/DD"
            onChange={(date) => handleCustomUpdate("dateOfBirth", date)}
            selected={formData.dateOfBirth}
            minDate={new Date("1900/01/01")}
            maxDate={new Date()}
          />
          <Button
            label={'Submit'}
            size={'btn-lg'}
            type={'btn-primary'}
            arrow={'arrow-right'}
            element={'button'}
            disabled={false}
            onClick={() => handleSubmit()}
            className={styles.btnBlu}
          />
        </div>
      </div> : <div className={`${styles.loadingElement}`}>Loading...</div>}
    </>
  );
};

export default MakeProfile;
