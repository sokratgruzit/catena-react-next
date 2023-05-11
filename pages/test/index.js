import React, { useEffect, useMemo } from "react";

import createAxiosInstance from "../api/axios";

const Index = () => {
  const axios = useMemo(() => createAxiosInstance(), []);
  useEffect(() => {
    axios
      .post("/auth/register", {
        email: "goga@jspro.com",
        password: "123456",
        username: "goga",
      })
      .then((res) => {
        console.log(res?.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return <div>Index</div>;
};

export default Index;
