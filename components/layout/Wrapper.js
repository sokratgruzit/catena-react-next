import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { injected, walletConnect } from '../../hooks/connector';
import { useConnect } from '../../hooks/use-connect';
import createAxiosInstance from '../../pages/api/axios';

const Wrapper = ({ children }) => {
  const {
    MetaMaskEagerlyConnect,
    WalletConnectEagerly,
    account,
    library
  } = useConnect();
  const triedReconnect = useSelector(state => state.appState.triedReconnect);
  const providerType = useSelector(state => state.connect.providerType);
  const axios = useMemo(() => createAxiosInstance(), []);
  const dispatch = useDispatch();

  const getBalance = async () => {
    if (library !== undefined) {
      library.eth.getBalance(account.toLocaleLowerCase()).then(res => {
        dispatch({
          type: "UPDATE_STATE",
          balance: res
        });
      });
    }
  };

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
        dispatch({ type: 'SET_USER', payload: res.data?.user });
        dispatch({
          type: "UPDATE_STATE",
          account: account.toLocaleLowerCase()
        });
      })
      .catch(err => {
        console.log(err.response);
      });

      getBalance();
    }
  }, [account, triedReconnect]);

  return children;
};

export default Wrapper;
