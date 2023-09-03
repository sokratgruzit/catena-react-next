import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Button, Input } from '@catena-network/catena-ui-module';
import createAxiosInstance from '../../pages/api/axios';
import { useConnect } from '../../hooks/use-connect';
import { socket } from '../../pages/api/socket';
// import NFT_ABI from '../abi/NFT_ABI.json';

import styles from './MakeProfile.module.css';

const MakeProfile = () => {
  const nftContractAddress = '0xDC87d42B174D70fFdC81c62414EEc8db30C9E1DB';

  const [mobileNumber, setMobileNumber] = useState('');
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

  const account = useSelector(state => state.connect.account);

  const router = useRouter();
  const { locale } = router;
  const axios = useMemo(() => createAxiosInstance(), []);
  const dispatch = useDispatch();
  const { library } = useConnect();

  useEffect(() => {
    if (account) {
      axios
        .post('/user', { address: account })
        .then(res => {
          let user = res?.data?.user;
          const dateOfBirth = user.dateOfBirth ? new Date(user.dateOfBirth) : new Date();
          const mobString = user.mobile ? user.mobile.split(' ') : "US +1".split(" ");

          dispatch({ type: 'SET_USER', payload: user });
          setFormData({
            fullname: user.fullname,
            email: user.email,
            mobile: {
              flag: mobString[0],
              code: mobString[1],
              number: mobString[2]
            },
            status: user.status,
            password: '',
            dateOfBirth: dateOfBirth
          });
          setMobileNumber(user.mobile);
        })
        .catch(err => {
          console.log(err.response);
        });
    } else {
      router.push('/', undefined, { locale });
    }
  }, [account]);

  const changeHandler = e => {
    const { name, value } = e.target;

    if (name === "mobile") {
      let mobile = `${value.flag} ${value.code} ${value.number}`;
      setMobileNumber(mobile);
    }

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
          mobile: mobileNumber,
          password: formData.password,
          dateOfBirth: formData.dateOfBirth,
          status: false,
          locale: locale
        })
        .then(res => {
          dispatch({ type: 'SET_USER', payload: res.data });
        })
        .catch(e => console.log(e.response));
    }
  };

  socket.on('emailVerified', (userId) => {
    console.log(`User with ID ${userId} has verified their email`);
  });

  // useEffect(() => {
  //   if (library && account) {
  //     const fetchContract = async () => {
  //       const pinataApiKey = '10862fdbcbad2741f62c';
  //       const pinataSecretApiKey = '287293bcdfffcd3d7d4e440723d46904074bbb9f357784a3013efb5b116a2513';
  //       const cid = 'QmRJbbGs4wi57EmJxQYCn9LmKaZpwL66TFjrfy27rWvqPp';
  //       const node = ipfsClient.cat(cid);
  //       //const stream = node.cat(cid);
  //       let contract = new library.eth.Contract(NFT_ABI, nftContractAddress);
  //       let count = await contract.methods.tokenCount().call();
  //       let baseUri = await contract.methods.baseURI().call();
  //       // const nftMeta = await ipfs.get(cid);
  //       console.log(node, 'lal');
  //     };

  //     fetchContract();
  //   }
  // }, [library, account]);

  return (
    <>
      {account ? <div className="container">
        <div className={`${styles.makeProfileWrapper}`}>
          <Input
            type={"default"}
            editable={true}
            name="fullname"
            value={formData.fullname}
            emptyFieldErr={true}
            inputType={"text"}
            placeholder={"Your full name"}
            label={"Fullname"}
            onChange={changeHandler}
          />
          <Input
            type={"default"}
            name="email"
            value={formData.email}
            emptyFieldErr={true}
            editable={true}
            inputType={"email"}
            placeholder={"Your email address"}
            label={"Email"}
            onChange={changeHandler}
          />
          <Input
            type={"default"}
            name="password"
            value={formData.password}
            inputType={"password"}
            editable={true}
            emptyFieldErr={true}
            placeholder={"New password"}
            label={"Enter Password"}
            onChange={changeHandler}
          />
          <Input
            type={"label-input-phone-number"}
            name="mobile"
            value={formData.mobile}
            placeholder={"Mobile Number"}
            label={"Enter your mobile number"}
            onChange={value => handleCustomUpdate('mobile', value)}
          />
          <Input
            type={"date-picker-input"}
            name="dateOfBirth"
            value={formData.dateOfBirth}
            editable={true}
            placeholder={"YYYY/MM/DD"}
            label={"Date Of Birth"}
            onChange={value => handleCustomUpdate('dateOfBirth', value)}
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