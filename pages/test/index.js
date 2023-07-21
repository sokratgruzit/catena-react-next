import React, { useMemo } from 'react';

import createAxiosInstance from '../api/axios';

const Index = () => {
  const axios = useMemo(() => createAxiosInstance(), []);
  // useEffect(() => {
  // axios
  //   .post("/auth/register", {
  //     email: "goga1@jspro.com",
  //     password: "123456",
  //     username: "goga",
  //   })
  //   .then((res) => {
  //     console.log(res?.data);
  //   })
  //   .catch((e) => console.log(e));
  // }, []);

  const register = () => {
    axios
      .post('/auth/register', {
        email: 'goga12@jspro.com',
        password: '123456',
        username: 'goga',
      })
      .then(res => {
        console.log(res?.data);
      })
      .catch(e => console.log(e));
  };

  const getData = () => {
    axios
      .post('/user/profile')
      .then(res => {
        console.log(res?.data);
      })
      .catch(e => console.log(e));
  };

  const logOut = () => {
    axios
      .post('/auth/logout')
      .then(res => {
        console.log(res?.data);
      })
      .catch(e => console.log(e));
  };

  const login = () => {
    axios
      .post('/auth/login', {
        email: 'goga12@jspro.com',
        password: '123456',
      })
      .then(res => {
        console.log(res?.data);
      })
      .catch(e => console.log(e));
  };

  return (
    <div style={{ padding: '120px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <button onClick={register}>register</button>
      <button onClick={login}>login</button>
      <button onClick={getData}>request user data</button>
      <button onClick={logOut}>log out</button>
    </div>
  );
};

export default Index;
