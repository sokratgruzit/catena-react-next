import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@catena-network/catena-ui-module';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { ethers } from 'ethers';
import styles from './Proposal.module.css';
import ConnectWalletButton from './ConnectWalletButton';

const walletConnect = {};
const injected = {};

export default function Proposal() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [editorContent, setEditorContent] = useState('');
  const [choices, setChoices] = useState(['']);
  const account = useSelector(state => state.account);
  const providerType = 'example';
  const mainData = {};
  const walletAccounts = [];

  const dispatch = useDispatch();

  const openWalletModal = () => {
    setWalletModal(true);
  };

  const closeWalletModal = () => {
    setWalletModal(false);
  };

  const [walletModal, setWalletModal] = useState(false);
  const [metamaskConnected, setMetamaskConnected] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Quill = require('quill');

      const quill = new Quill('#editor', {
        theme: 'snow',
        modules: {
          toolbar: [['bold', 'italic'], [{ header: '1' }], [{ list: 'bullet' }, { list: 'ordered' }], ['link']],
        },
      });

      quill.on('text-change', () => {
        const content = quill.root.innerHTML;
        setEditorContent(content);
      });
    }
  }, []);

  useEffect(() => {
    const checkMetamaskConnection = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();

        if (accounts.length > 0) {
          setMetamaskConnected(true);
        }
      } catch (error) {
        console.error('Error checking Metamask connection:', error);
      }
    };

    checkMetamaskConnection();
  }, []);

  const connectWallet = async (type, connector) => {
    try {
      if (type === 'walletConnect') {
      } else if (type === 'metamask') {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

          if (accounts.length > 0) {
            setMetamaskConnected(true);
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

  const handleInputChange = event => {
    const inputTime = event.target.value;
    setTime(inputTime);
  };

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const handleStartTimeChange = event => {
    const inputTime = event.target.value;
    setStartTime(inputTime);
  };

  const handleEndTimeChange = event => {
    const inputTime = event.target.value;
    setEndTime(inputTime);
  };

  const handleInputChanges = event => {
    console.log('hi');
  };

  const addChoice = event => {
    event.preventDefault();
    setChoices([...choices, '']);
  };

  const updateChoice = (index, value) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  return (
    <div className={`${styles.main} `}>
      <div className={styles.proposalWrapper}>
        <div className={`${styles.proposalIntro} container`}>
          <h1>Make a Proposal</h1>
          <p className='font_30'>
            Scroll presently pads accost twilight byron spasms bate bacchus cottage stainless boils freely lacinia. Fire
            aid easiest accumsan scroll pealed, broke, boils depart.
          </p>
        </div>
        <div className={`${styles.bottomBox}`}>
          <form className={styles.form}>
            <Input
              type={'default'}
              icon={false}
              label={'title'}
              subLabel={''}
              placeholder={'Enter'}
              name='text'
              onChange={handleInputChanges}
            />

            <div className={styles.content}>
              <label className={styles.label}>Content</label>
              <label className={styles.subLabel}>Tip: Write in Markdown!</label>
              <div className={styles.contentTextarea}>
                <div id='editor' />
              </div>
            </div>
            <div className={styles.choices}>
              {choices.map((choice, index) => (
                <div key={index}>
                  <Input
                    type='default'
                    icon={false}
                    label={index === 0 ? 'Choices' : ''}
                    subLabel={index === 0 ? '' : ''}
                    value={choice}
                    onChange={e => updateChoice(index, e.target.value)}
                    placeholder={`Enter Choice ${index + 1}`}
                  />
                </div>
              ))}
              <button className={styles.btn} onClick={addChoice}>
                Add Choice
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M6 12H18' stroke='#212121' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                  <path d='M12 18V6' stroke='#212121' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.subLabel}>Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                className={styles.datePicker}
                dateFormat='MM/dd/yyyy'
                name='startTime'
                showTimeSelect
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.subLabel}>End Date</label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat='MM/dd/yyyy'
                className={styles.datePicker}
                name='endTime'
                showTimeSelect
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Time</label>
              <label className={styles.subLabel}>Start Time</label>
              <input
                placeholder='00:00'
                type='time'
                className={styles.input}
                value={startTime}
                onChange={handleStartTimeChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.subLabel}>End Time</label>
              <input
                placeholder='00:00'
                type='time'
                className={styles.input}
                value={endTime}
                onChange={handleEndTimeChange}
              />
            </div>
          </form>
          <div className={styles.snapshot}>
            <p>Snapshot:</p>
            <p>
              16672898
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18.5399 15.1046C18.6742 14.9703 18.7591 14.7864 18.7591 14.5743L18.7591 5.99003C18.7579 5.7916 18.6785 5.60164 18.5382 5.46133C18.3979 5.32101 18.208 5.24167 18.0095 5.2405L9.42525 5.2405C9.01513 5.2405 8.67571 5.57991 8.67571 5.99003C8.67571 6.40015 9.01513 6.73956 9.42525 6.73956L17.26 6.73956L17.26 14.5743C17.26 14.9844 17.5994 15.3238 18.0095 15.3238C18.2146 15.3309 18.4055 15.239 18.5399 15.1046Z'
                  fill='#212121'
                />
                <path
                  d='M6.51864 18.5404L18.4192 6.63982C18.7092 6.3499 18.7092 5.86907 18.4192 5.57916C18.1293 5.28924 17.6485 5.28924 17.3586 5.57916L5.45798 17.4798C5.16806 17.7697 5.16806 18.2505 5.45798 18.5404C5.74789 18.8303 6.22872 18.8303 6.51864 18.5404Z'
                  fill='#212121'
                />
              </svg>
            </p>
          </div>
          <ConnectWalletButton
            onWalletConnected={() => {}}
            account={account}
            connect={connectWallet}
            closeWalletModal={closeWalletModal}
            providerType={providerType}
            mainData={mainData}
            walletAccounts={walletAccounts}
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
}
