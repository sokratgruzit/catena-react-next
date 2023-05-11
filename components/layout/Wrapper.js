import React, { useEffect } from "react";

import useConnect from "../../hooks/use-connect";
import { useSelector, useDispatch } from "react-redux";

import { injected } from "../../connector";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();

  const providerType = useSelector((state) => state.connect.providerType);

  const { MetaMaskEagerlyConnect } = useConnect();

  useEffect(() => {
    MetaMaskEagerlyConnect(injected, () => {
      dispatch({ type: "SET_TRIED_RECONNECT", payload: true });
    });

    if (!providerType) {
      dispatch({ type: "SET_TRIED_RECONNECT", payload: true });
    }
    // eslint-disable-next-line
  }, []);
  return children;
};

export default Wrapper;
