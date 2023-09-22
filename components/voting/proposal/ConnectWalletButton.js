import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ethers } from 'ethers';
import useLanguages from '../../../hooks/useLanguages';
import { walletConnect, injected } from '../../../hooks/connector';
import { useConnect } from '../../../hooks/useConnect';
import { Button } from '@catena-network/catena-ui-module';
import styles from './ConnectWalletButton.module.css';
import BalancePopup from './BalancePopup';

const ConnectWalletButton = () => {
  const [walletModal, setWalletModal] = useState(false);
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const [balance, setBalance] = useState(0);
  const [popupMessage, setPopupMessage] = useState('');
  const [votingPower, setVotingPower] = useState(0);
  const [network, setNetwork] = useState('');

  const dispatch = useDispatch();
  const { connect, account, providerType } = useConnect();

  useEffect(() => {
    const checkMetamaskConnection = async () => {
      try {
        if (window.ethereum) {
          const networkId = await window.ethereum.request({ method: 'net_version' });

          if (networkId === '1') {
            setNetwork('Ethereum');
          } else if (networkId === '56') {
            setNetwork('Binance Smart Chain');
          } else {
            setNetwork('Unknown Network');
          }

          const accounts = await window.ethereum.request({ method: 'eth_accounts' });

          if (accounts.length > 0) {
            setMetamaskConnected(true);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();

            let balanceData;
            if (network === 'Ethereum') {
              balanceData = await provider.getBalance(address);
            } else if (network === 'Binance Smart Chain') {
              const bscProvider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');
              balanceData = await bscProvider.getBalance(address);
            }

            if (balanceData && balanceData.gte(0)) {
              const balance = ethers.utils.formatEther(balanceData);
              setBalance(balance.toString());

              if (Number(balance) > 100000) {
                setPopupMessage(`More than 100K ${network}!`);
                setVotingPower(100000);
              } else {
                setPopupMessage(balance.toString());
                setVotingPower(Number(balance) / 10);
              }
            } else {
              console.error('Invalid balance data received.');
            }
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

            let balanceData;
            if (network === 'Ethereum') {
              balanceData = await provider.getBalance(address);
            } else if (network === 'Binance Smart Chain') {
              const bscProvider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');
              balanceData = await bscProvider.getBalance(address);
            }

            if (balanceData && balanceData.gte(0)) {
              const balance = ethers.utils.formatEther(balanceData);
              setBalance(balance.toString());

              if (Number(balance) > 100000) {
                setPopupMessage(`More than 100K ${network}!`);
                setVotingPower(100000);
              } else {
                setPopupMessage(balance.toString());
                setVotingPower(Number(balance) / 10);
              }
            } else {
              console.error('Invalid balance data received.');
            }
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

  const handleCheckVotingPower = () => {
    setPopupMessage('Check your voting power');
    setVotingPower(0);
    openWalletModal();
  };

  return (
    <div>
      <Button
        label={metamaskConnected ? `${network} Connected` : 'Connect Wallet'}
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
      {popupMessage && (
        <BalancePopup message={popupMessage} onClose={() => setPopupMessage('')} votingPower={votingPower} />
      )}
      <Button
        label={'Check Voting Power'}
        size={'btn-lg'}
        type={'btn-primary'}
        element={'button'}
        onClick={handleCheckVotingPower}
        customStyles={{
          background: 'transparent',
          width: '100%',
        }}
      />
    </div>
  );
};

export default ConnectWalletButton;
