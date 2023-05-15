import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import createAxiosInstance from "../../api/axios";

const VerifyEmail = () => {
  const axios = useMemo(() => createAxiosInstance(), []);

  const router = useRouter();
  useEffect(() => {
    axios
      .get(`/user/verify-email/${router.query?.token}`)
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err?.response);
      });
  }, []);

  return <div>verify email</div>;
};

export default VerifyEmail;
