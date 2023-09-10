import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { injected, walletConnect } from '../../hooks/connector';
import { useConnect } from '../../hooks/useConnect';
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
  const router = useRouter();

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
    if (account && triedReconnect) {
      axios
      .post('/user', { address: account })
      .then(res => {
        dispatch({ type: 'SET_USER', payload: res?.data });
        dispatch({
          type: "UPDATE_STATE",
          account: account.toLocaleLowerCase()
        });
      })
      .catch(err => {
        console.log(err.response);
      });

      getBalance();
    } else {
      MetaMaskEagerlyConnect(injected, () => {
        dispatch({ type: 'SET_TRIED_RECONNECT', payload: true });
      });
  
      WalletConnectEagerly(walletConnect, () => {
        dispatch({ type: 'SET_TRIED_RECONNECT', payload: true });
      });
  
      if (!providerType) {
        dispatch({ type: 'SET_TRIED_RECONNECT', payload: true });
      } 
    }
  }, [account, triedReconnect, router]);

  return children;
};

export default Wrapper;
