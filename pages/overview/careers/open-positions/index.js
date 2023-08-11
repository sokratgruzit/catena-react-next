import React from 'react';
import { useState, useEffect } from 'react';
import createAxiosInstance from '../../../api/axios';
import OpenPosition from '../../../../components/home/careers/openPositions/OpenPosition'


const index = () => {
  const [careers, setCareers] = useState([]);
  useEffect(() => {
    const axios = createAxiosInstance();
    axios.get(`${process.env.NEXT_PUBLIC_URL}/careers/get-all-careers`)
      .then(response => {
        setCareers(response.data);
        console.log(response.data);
  
      })
      .catch(error => {
        console.log(err?.response);
      });
  }, []);
  return <OpenPosition careers={careers}/>
};

export default index;
