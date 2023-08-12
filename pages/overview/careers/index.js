import React, { useEffect, useState } from 'react';
import createAxiosInstance from '../../api/axios';
import Careers from '../../../components/home/careers/Careers';

const CareersPage = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const axios = createAxiosInstance();
    axios.get(`${process.env.NEXT_PUBLIC_URL}/careers/get-all-careers`)
      .then(response => {
        setCareers(response.data);
        console.log(response.data);

      })
      .catch(error => {
        // console.log(err?.response);
      });
  }, []);

  return <Careers careers={careers} />;
};

export default CareersPage;
