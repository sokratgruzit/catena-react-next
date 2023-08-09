import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useConnect } from '../../hooks/use-connect';

import PhoneNumberSelect from './components/phoneNumberSelect/PhoneNumberSelect';
import createAxiosInstance from '../../pages/api/axios';
import CustomSelect from '../UI/customSelect/CustomSelect';
import FormSelectDate from '../voting/components/formDateInput/FormSelectDate';

import styles from './MakeProfile.module.css';

const nationalities = ['American', 'British', 'French', 'German', 'Italian', 'Spanish'];

function MakeProfile() {
  const { account } = useConnect();
  const user = useSelector(state => state.appState.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const [fileURL, setFIleURL] = useState('');
  const [file, setFile] = useState(null);

  const axios = useMemo(() => createAxiosInstance(), []);
  const [inputs, setInputs] = useState({
    fullname: '',
    email: '',
    mobile: '',
    dateOfBirth: new Date(),
  });

  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    mobile: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    let error = '';
    switch (name) {
      case 'name':
        error = value ? '' : 'Name is required';
        break;
      case 'email':
        // if (!value) {
        //   error = "Email is required";
        // } else
        if (value && !/^\S+@\S+\.\S+$/.test(value)) {
          error = 'Email is not valid';
        }
        break;
      default:
        break;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  function handleCustomUpdate(name, value) {
    handleInputChange({ target: { name: name, value } });
  }

  const handleFullMobileNumberChange = value => {
    handleInputChange({ target: { name: 'mobile', value } });
  };

  const handleSubmit = event => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};
    for (const [key, value] of Object.entries(inputs)) {
      switch (key) {
        case 'fullname':
          newErrors[key] = value ? '' : 'Fullname is required';
          break;
        case 'email':
          // if (!value) {
          //   newErrors[key] = "Email is required";
          // } else
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
      const formData = new FormData();
      formData.append('image', file);
      formData.append('address', account);
      formData.append('fullname', inputs.fullname);
      formData.append('email', inputs.email);
      formData.append('mobile', inputs.mobile);
      formData.append('nationality', inputs.nationality);
      formData.append('dateOfBirth', inputs.dateOfBirth);

      axios
        .post('/user/profile', formData)
        .then(res => {
          const cacheBuster = new Date().getTime(); // Generate unique cache-busting value
          setFIleURL(`${process.env.NEXT_PUBLIC_URL}/uploads/profile/${account?.toLowerCase()}.png`);
          dispatch({ type: 'SET_USER', payload: res.data.result });
          console.log(fileURL);
        })
        .catch(e => console.log(e.response));
    }
  };

  useEffect(() => {
    setInputs({
      fullname: user?.fullname ?? '',
      email: user?.email ?? '',
      mobile: user?.mobile ?? '',
      dateOfBirth: user?.dateOfBirth ? new Date(user?.dateOfBirth) : '',
      nationality: user?.nationality,
    });

    const cacheBuster = new Date().getTime(); // Generate unique cache-busting value
    //setFIleURL(`${process.env.NEXT_PUBLIC_URL}/uploads/profile/${account?.toLowerCase()}.png`);
  }, [user]);

  useEffect(() => {
    console.log(account)
    const { pathname, asPath, locale } = router;

    if (!account) router.push(pathname, asPath, { locale });
  }, [account]);

  return (
    <div className={styles.container}>
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
          Email:
          <input type='email' name='email' value={inputs.email} onChange={handleInputChange} className={styles.input} />
          {errors.email && <span className='error'>{errors.email}</span>}
        </label>
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
        <label htmlFor='imageUploader' className={styles.uploader}>
          <span className={styles.label}>{''}</span>
          <div className={styles.uploadBtn}>Upload Image</div>
          <input
            type='file'
            name='image'
            id='imageUploader'
            accept='image/jpeg, image/png, image/jpg'
            onChange={e => {
              setFIleURL(URL.createObjectURL(e.target.files[0]));
              setFile(e.target.files[0]);
            }}
          />
        </label>
        <CustomSelect
          options={nationalities}
          handleSelectChange={value => handleCustomUpdate('nationality', value)}
          selected={inputs.nationality}
        />
        <div className={styles.imgOverview}>
          <img className={styles.preview} src={fileURL} alt='img' />
        </div>
        <button type='submit' className={styles.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default MakeProfile;
