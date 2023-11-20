import { useEffect, useMemo, ReactNode } from 'react';
import { useAppSelector, useAppDispatch } from '../../store';
import { useRouter } from 'next/router';

import { injected, walletConnect } from '../../hooks/connector';
import { useConnect } from '../../hooks/useConnect';
import { setUpdateState } from '../../store/connectReducer';
import createAxiosInstance from '../../pages/api/axios';

const Wrapper = ({ children }: { children: ReactNode }) => {
  const {
    MetaMaskEagerlyConnect,
    WalletConnectEagerly,
    account,
    library
  } = useConnect();
  const triedReconnect = useAppSelector(state => state.appState.triedReconnect);
  const providerType = useAppSelector(state => state.connect.providerType);

  const axios = useMemo(() => createAxiosInstance(), []);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const getBalance = async () => {
    if (library !== undefined) {
      library.eth.getBalance(account.toLocaleLowerCase()).then((res: number): void => {
        dispatch(setUpdateState({
          updatedState: {
            balance: res
          }
        }));
      });
    }
  };

  useEffect(() => {
    if (account && triedReconnect) {
      axios
      .post('/user', { address: account })
      .then((res): void => {
        dispatch({ type: 'SET_USER', payload: res?.data });
        dispatch(setUpdateState({
          updatedState: {
            account: account.toLocaleLowerCase()
          }
        }));
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
