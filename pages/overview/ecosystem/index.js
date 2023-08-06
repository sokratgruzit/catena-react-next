import { useEffect, useState } from 'react';
import createAxiosInstance from '../../../pages/api/axios';
import Ecosystem from '../../../components/home/ecosystem/Ecosystem';

const index = () => {
  const axios = createAxiosInstance();
  const [exchanges, setExchanges] = useState(null)

  const getAllEcosystems = async () => {
    await axios.get("http://localhost:4003/ecosystem/get-active-ecosystem").then((res) => {
      const data = res?.data;
      setExchanges(data);
    });
  };

  useEffect(() => {
    getAllEcosystems();
  }, []);

  return (
    <div style={{ paddingTop: '150px', backgroundColor: '#fff2e4' }}>
      <Ecosystem exchanges={exchanges} />
    </div>
  );
};

export default index;
