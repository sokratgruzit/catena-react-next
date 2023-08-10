import { useEffect, useMemo, useState } from 'react';
import { Button } from '@catena-network/catena-ui-module';
import { useRouter } from 'next/router';

import createAxiosInstance from '../api/axios';
import styles from './Verify.module.css';

const index = () => {
  const axios = useMemo(() => createAxiosInstance(), []);
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const { locale } = router;
  
  useEffect(() => {
    const currentUrl = window.location.href;
    const parts = currentUrl.split('=');
    const token = parts[parts.length - 1];

    axios
      .get(`/user/verify-email/${token}`)
      .then(res => {
        console.log(res?.data);
        setVerified(true);
      })
      .catch(err => {
        console.log(err?.response);
      });
  }, []);

  return (
    <div className={styles.container}>
      {verified && <Button
        label={"Go to My Profile page"}
        size={"btn-lg"}
        type={"btn-secondary"}
        element={"button"}
        customStyles={{ 
          margin: "0"
        }}
        onClick={() => router.push('/overview/make-profile', undefined, { locale })}
      />}
      {!verified && <div>Something went wrong</div>}
    </div>
  );
};

export default index;
