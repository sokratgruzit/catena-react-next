import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { injected, walletConnect } from '../../hooks/connector';
import { useConnect } from '../../hooks/use-connect';
import createAxiosInstance from '../../pages/api/axios';

const Wrapper = ({ children }) => {
  const {
    MetaMaskEagerlyConnect,
    WalletConnectEagerly,
    account
  } = useConnect();
  const triedReconnect = useSelector(state => state.appState.triedReconnect);
  const providerType = useSelector(state => state.connect.providerType);
  const axios = useMemo(() => createAxiosInstance(), []);
  const dispatch = useDispatch();

  useEffect(() => {
    MetaMaskEagerlyConnect(injected, () => {
      dispatch({ type: 'SET_TRIED_RECONNECT', payload: true });
    });

    WalletConnectEagerly(walletConnect, () => {
      dispatch({ type: 'SET_TRIED_RECONNECT', payload: true });
    });

    if (!providerType) {
      dispatch({ type: 'SET_TRIED_RECONNECT', payload: true });
    }
  }, []);

  useEffect(() => {
    if (account && triedReconnect) {
      axios
        .post('/user', { address: account })
        .then(res => {
          console.log(res.data.user, 'hehe');
          dispatch({ type: 'SET_USER', payload: res.data?.user });
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }, [account, triedReconnect]);

  return children;
};

export default Wrapper;
