import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { injected } from '../../connector';
import useConnect from '../../hooks/use-connect';
import createAxiosInstance from '../../pages/api/axios';

const Wrapper = ({ children }) => {
  const { MetaMaskEagerlyConnect } = useConnect();
  const account = useSelector(state => state.connect.account);
  const triedReconnect = useSelector(state => state.appState.triedReconnect);
  const providerType = useSelector(state => state.connect.providerType);
  const axios = useMemo(() => createAxiosInstance(), []);
  const dispatch = useDispatch();

  useEffect(() => {
    MetaMaskEagerlyConnect(injected, () => {
      dispatch({ type: 'SET_TRIED_RECONNECT', payload: true });
    });

    if (!providerType) {
      dispatch({ type: 'SET_TRIED_RECONNECT', payload: true });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (account && triedReconnect) {
      axios
        .post('/user', { address: account })
        .then(res => {
          console.log(res.data.user);
          dispatch({ type: 'SET_USER', payload: res.data?.user });
        })
        .catch(err => {
          console.log(err.response);
        });
    }
    // eslint-disable-next-line
  }, [account]);

  return children;
};

export default Wrapper;
