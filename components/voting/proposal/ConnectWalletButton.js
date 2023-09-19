import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ethers } from 'ethers';

import useLanguages from '../../../hooks/useLanguages';
import { walletConnect, injected } from '../../../hooks/connector';
import { useConnect } from '../../../hooks/useConnect';

import { Button } from '@catena-network/catena-ui-module';

import styles from './ConnectWalletButton.module.css';

const ConnectWalletButton = () => {
  const [walletModal, setWalletModal] = useState(false);
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const [balance, setBalance] = useState(0);

  const dispatch = useDispatch();
  const { connect, account, providerType } = useConnect();

  useEffect(() => {
    const checkMetamaskConnection = async () => {
      try {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });

          if (accounts.length > 0) {
            setMetamaskConnected(true);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const balance = await provider.getBalance(address);
            setBalance(balance.toString());
            console.log('Metamask balance:', balance.toString());
          }
        }
      } catch (error) {
        console.error('Error checking Metamask connection:', error);
      }
    };

    checkMetamaskConnection();
  }, []);

  const openWalletModal = () => {
    setWalletModal(true);
  };

  const closeWalletModal = () => {
    setWalletModal(false);
  };

  const handleWalletConnect = async type => {
    try {
      if (type === 'walletConnect') {
        await connect('walletConnect', walletConnect);
      } else if (type === 'metamask') {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

          if (accounts.length > 0) {
            setMetamaskConnected(true);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const balance = await provider.getBalance(address);
            setBalance(balance.toString());
            console.log('Metamask balance:', balance.toString());
          }
        } else {
          console.error('Metamask is not installed or not available.');
        }
      }

      dispatch({
        type: 'UPDATE_STATE',
        account: account,
        isConnected: true,
        providerType: providerType,
      });

      closeWalletModal();
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div>
      <Button
        label={metamaskConnected ? 'Metamask Connected' : 'Connect Wallet'}
        size={'btn-lg'}
        type={metamaskConnected ? 'btn-secondary' : 'btn-primary'}
        element={'button'}
        disabled={metamaskConnected}
        onClick={metamaskConnected ? undefined : openWalletModal}
        customStyles={{
          background: metamaskConnected ? '#A6D0DD' : '',
          border: '1px solid #162029',
          width: '100%',
        }}
      />
      <div className={`${styles.walletModal} ${walletModal ? styles.walletModalActive : ''}`}>
        <div className={styles.walletModalContent}>
          <div className={styles.walletOption} onClick={() => handleWalletConnect('walletConnect')}>
            <div className={styles.walletOptionImg}>
              <img src={`/images/walletconnect.png`} alt='Wallet Connect' width={100} height={100} />
            </div>
            <div>Wallet Connect</div>
          </div>
          <div className={styles.walletOption} onClick={() => handleWalletConnect('metamask')}>
            <div className={styles.walletOptionImg}>
              <img src={`/images/meta.png`} alt='Metamask' width={100} height={100} />
            </div>
            <div>Metamask</div>
          </div>
        </div>
      </div>
      {/* <div className={styles.balanceDisplay}>Wallet Balance: {balance} ETH</div> */}
    </div>
  );
};

export default ConnectWalletButton;
