import { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { injected, walletConnect } from './connector';
import { useWeb3React } from '@web3-react/core';

const useConnect = () => {
  const { activate, account, library, connector, active, deactivate } =
    useWeb3React();

  const [isActive, setIsActive] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(false); // Should disable connect button while connecting to MetaMask
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const isConnected = useSelector(state => state.connect.isConnected);
  const providerType = useSelector(state => state.connect.providerType);
  // Init Loading
  useEffect(() => {
    async function fetchData() {
      if (isConnected) {
        connect(providerType).then(val => {
          setIsLoading(false);
        });
      }
    }
    fetchData();
  }, []);

  const handleWalletModal = async state => {
    console.log('state ===>' + state);
    setWalletModal(state);
    dispatch({
      type: 'TOGGLE_WALLET_CONNECT_MODAL',
      payload: {
        walletModal: state,
      },
    });
  };

  // Check when App is Connected or Disconnected to MetaMask
  const handleIsActive = useCallback(() => {
    setIsActive(active);
  }, [active]);

  useEffect(() => {
    handleIsActive();
  }, [handleIsActive]);

  // Connect to wallet
  const connect = async providerType => {
    setShouldDisable(true);
    try {
      if (providerType === 'metaMask') {
        await activate(injected).then(() => {
          setShouldDisable(false);
          console.log('connect');
          dispatch({
            type: 'CONNECT',
            payload: {
              isConnected: true,
              providerType: 'metaMask',
            },
          });
        });
      } else if (providerType === 'walletConnect') {
        await activate(walletConnect).then(() => {
          setShouldDisable(false);
          dispatch({
            type: 'CONNECT',
            payload: {
              isConnected: true,
              providerType: 'walletConnect',
            },
          });
        });
      }

      setWalletModal(false);
    } catch (error) {
      console.log('Error on connecting: ', error);
    }
  };

  // Disconnect from Metamask wallet
  const disconnect = async () => {
    try {
      await deactivate();
      dispatch({
        type: 'CONNECT',
        payload: {
          isConnected: false,
          providerType: '',
        },
      });
    } catch (error) {
      console.log('Error on disconnnect: ', error);
    }
  };

  const values = useMemo(
    () => ({
      isActive,
      account,
      isLoading,
      walletModal,
      handleWalletModal,
      connect,
      disconnect,
      library,
      shouldDisable,
    }),
    [isActive, isLoading, shouldDisable, account, walletModal],
  );

  return values;
};

export default useConnect;
