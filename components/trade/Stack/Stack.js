import React, { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useConnect from '../../../hooks/use-connect';

import Button from '../../UI/button/Button';
import CornerDecor from '../../UI/cornerDecor/CornerDecor';
import STACK_ABI from '../../abi/stack.json';
import WBNB from '../../abi/WBNB.json';
import moment from 'moment';

import styles from './Stack.module.css';

const tableData = [
  {
    id: 0,
    amount: '24.555',
    staketime: 'bla bla bla',
    unstaketime: 'bla bla bla',
    realtimeRewardPerBlock: '59403949',
  },
  {
    id: 1,
    amount: '24.555',
    staketime: 'bla bla bla',
    unstaketime: 'bla bla bla',
    realtimeRewardPerBlock: '59403949',
  },
  {
    id: 2,
    amount: '24.555',
    staketime: 'bla bla bla',
    unstaketime: 'bla bla bla',
    realtimeRewardPerBlock: '59403949',
  },
  {
    id: 4,
    amount: '24.555',
    staketime: 'bla bla bla',
    unstaketime: 'bla bla bla',
    realtimeRewardPerBlock: '59403949',
  },
];

const BUTTONS_DATA = [
  {
    title: '30 days',
    time: 0,
    period: 30,
  },
  {
    title: '60 days',
    time: 1,
    period: 60,
  },
  {
    title: '90 days',
    time: 2,
    period: 90,
  },
  {
    title: '180 days',
    time: 3,
    period: 180,
  },
  {
    title: '360 days',
    time: 4,
    period: 360,
  },
];

function Stack() {
  const { disconnect, account, isActive, library, handleWalletModal } =
    useConnect();

  var web3Obj = library;

  var Router = '0x61d27DFd33718E47FBcFBf31B8e96439D3eccbdD'; // Staking contract Address
  var tokenAddress = '0xb2343143f814639c9b1f42961C698247171dF34a'; // Staking Token Address

  const [dipositAmount, setDipositAmount] = useState('');
  const [timeperiod, setTimeperiod] = useState(0);
  const [timeperiodDate, setTimeperiodDate] = useState(
    moment().add(30, 'days').format('DD/MM/YYYY h:mm A'),
  );

  const [balance, setBalance] = useState(0);

  const [stackContractInfo, setStackContractInfo] = useState({
    totalStakers: 0,
    totalStakedToken: 0,
  });
  const [stakersInfo, setStakersInfo] = useState({
    totalStakedTokenUser: 0,
    totalUnstakedTokenUser: 0,
    totalClaimedRewardTokenUser: 0,
    currentStaked: 0,
    realtimeReward: 0,
    stakeCount: 0,
    alreadyExists: false,
  });
  const [stakersRecord, setStakersRecord] = useState([]);

  const [isAllowance, setIsAllowance] = useState(false);
  const [loading, setLoadding] = useState(false);

  const notify = (isError, msg) => {
    if (isError) {
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const checkAllowance = async () => {
    try {
      setLoadding(true);

      var tokenContract = new web3Obj.eth.Contract(WBNB, tokenAddress);
      var decimals = await tokenContract.methods.decimals().call();
      var getBalance = await tokenContract.methods.balanceOf(account).call();

      var pow = 10 ** decimals;
      var balanceInEth = getBalance / pow;
      setBalance(balanceInEth);
      var allowance = await tokenContract.methods
        .allowance(account, Router)
        .call();

      if (allowance <= 2) {
        setIsAllowance(true);
      }
      if (dipositAmount > 0) {
        var amount = dipositAmount * pow;
        if (allowance < amount) {
          setIsAllowance(true);
        }
      }
      setLoadding(false);
    } catch (err) {
      setLoadding(false);
    }
  };

  const approve = async () => {
    setLoadding(true);
    try {
      var contract = new web3Obj.eth.Contract(WBNB, tokenAddress);

      var amountIn = 10 ** 69;
      amountIn = amountIn.toLocaleString('fullwide', { useGrouping: false });
      //   var amountIn = new web3Obj.utils.BigNumber("10").pow(69);

      await contract.methods
        .approve(Router, amountIn.toString())
        .send({ from: account })
        .then(() => {
          setIsAllowance(false);
          // checkAllowance("0xaae3d23a76920c9064aefdd571360289fcc80053");
          setLoadding(false);
        });
    } catch (err) {
      console.log(err);
      setLoadding(false);
      notify(true, err.message);
    }
  };

  const stake = async () => {
    if (isNaN(parseFloat(dipositAmount)) || parseFloat(dipositAmount) <= 0) {
      notify(true, 'Error! please enter amount');
      return;
    }
    await checkAllowance();
    setLoadding(true);
    try {
      var tokenContract = new web3Obj.eth.Contract(WBNB, tokenAddress);
      const decimals = await tokenContract.methods.decimals().call();

      var contract = new web3Obj.eth.Contract(STACK_ABI, Router);

      var pow = 10 ** decimals;
      var amountIn = dipositAmount * pow;
      // var amountInNew = `${new ethers.utils.BigNumber(amountIn.toString())}`;
      amountIn = amountIn.toLocaleString('fullwide', { useGrouping: false });

      await contract.methods
        .stake(amountIn.toString(), timeperiod.toString())
        .send({ from: account })
        .then(err => {
          getStackerInfo();
          setLoadding(false);
          notify(false, 'Staking process complete.');
        });
    } catch (err) {
      setLoadding(false);
      notify(true, err.message);
    }
  };

  const unstake = async index => {
    setLoadding(true);
    try {
      var contract = new web3Obj.eth.Contract(STACK_ABI, Router);
      await contract.methods
        .unstake(index.toString())
        .send({ from: account })
        .then(result => {
          getStackerInfo();
          setLoadding(false);
          notify(false, 'successfully unstake');
          //   withdrawModal();
        });
    } catch (err) {
      setLoadding(false);
      notify(true, 'unstake fail');
    }
  };

  const harvest = async index => {
    setLoadding(true);
    try {
      var contract = new web3Obj.eth.Contract(STACK_ABI, Router);
      await contract.methods
        .harvest(index.toString())
        .send({ from: account })
        .then(err => {
          getStackerInfo();
          setLoadding(false);
          checkAllowance();
          notify(false, 'Reward successfully harvested');
        });
    } catch (err) {
      console.log(err);
      setLoadding(false);
      notify(true, err.message);
    }
  };

  const getStackerInfo = async () => {
    setLoadding(true);
    try {
      var tokenContract = new web3Obj.eth.Contract(WBNB, tokenAddress);
      var decimals = await tokenContract.methods.decimals().call();
      var getBalance = await tokenContract.methods
        .balanceOf(account.toString())
        .call();
      var pow = 10 ** decimals;
      var balanceInEth = getBalance / pow;
      console.log(getBalance);
      console.log(balanceInEth);
      setBalance(balanceInEth);

      var contract = new web3Obj.eth.Contract(STACK_ABI, Router);
      var totalStakedToken = await contract.methods.totalStakedToken
        .call()
        .call();
      var totalStakers = await contract.methods.totalStakers.call().call();
      var realtimeReward = await contract.methods
        .realtimeReward(account)
        .call();
      var Stakers = await contract.methods.Stakers(account).call();

      var totalStakedTokenUser = Stakers.totalStakedTokenUser / pow;
      var totalUnstakedTokenUser = Stakers.totalUnstakedTokenUser / pow;
      var currentStaked = totalStakedTokenUser - totalUnstakedTokenUser;
      totalStakedToken = totalStakedToken / pow;

      Stakers.totalStakedTokenUser = totalStakedTokenUser;
      Stakers.totalUnstakedTokenUser = totalUnstakedTokenUser;
      Stakers.currentStaked = currentStaked;
      Stakers.realtimeReward = realtimeReward / pow;
      Stakers.totalClaimedRewardTokenUser =
        Stakers.totalClaimedRewardTokenUser / pow;
      var stakersRecord = [];
      for (var i = 0; i < parseInt(Stakers.stakeCount); i++) {
        var stakersRecordData = await contract.methods
          .stakersRecord(account, i)
          .call();

        var realtimeRewardPerBlock = await contract.methods
          .realtimeRewardPerBlock(account, i.toString())
          .call();

        stakersRecordData.realtimeRewardPerBlock =
          realtimeRewardPerBlock[0] / pow;

        stakersRecordData.unstaketime = moment
          .unix(stakersRecordData.unstaketime)
          .format('DD/MM/YYYY h:mm A');
        stakersRecordData.staketime = moment
          .unix(stakersRecordData.staketime)
          .format('DD/MM/YYYY h:mm A');
        stakersRecord.push(stakersRecordData);
      }
      setStakersInfo(Stakers);
      setStakersRecord(stakersRecord);
      setStackContractInfo({
        totalStakers: totalStakers,
        totalStakedToken: totalStakedToken,
      });
      setLoadding(false);
    } catch (err) {
      // console.log(err);
      setLoadding(false);
      setStakersInfo({
        totalStakedTokenUser: 0,
        totalUnstakedTokenUser: 0,
        totalClaimedRewardTokenUser: 0,
        currentStaked: 0,
        realtimeReward: 0,
        stakeCount: 0,
        alreadyExists: false,
      });
      setStackContractInfo({
        totalStakers: 0,
        totalStakedToken: 0,
      });
      setStakersRecord([]);
      setBalance(0);
    }
  };

  const setMaxWithdrawal = async () => {
    var tokenContract = new web3Obj.eth.Contract(WBNB, tokenAddress);
    var decimals = await tokenContract.methods.decimals().call();
    var getBalance = await tokenContract.methods
      .balanceOf(account.toString())
      .call();
    var pow = 10 ** decimals;
    var balanceInEth = getBalance / pow;
    setDipositAmount(balanceInEth.toFixed(5));
    // setWithdrawAmount(userInfo.staked);
  };

  useEffect(() => {
    if (isActive) {
      checkAllowance();
      getStackerInfo();
    }
  }, [isActive, account]);

  return (
    <>
      <div className={styles.bodyMarginTop}>
        <div className='container title-container'>
          <div className='title'>
            <h1>
              Welcome To
              <br />
              <span>CORE Staking</span>
            </h1>
            <p>In CORE, we Trust!</p>
            <div className='sr-btn-wrap'>
              <ul>
                {isActive ? (
                  <li>
                    {account == null ? (
                      <Button
                        title={'Connect Wallet'}
                        type={'blue'}
                        onClick={() => {
                          handleWalletModal(true);
                        }}
                        customStyles={{
                          padding: '1% 0',
                          width: '100%',
                        }}
                      />
                    ) : (
                      <div className='btn'>
                        <div className='icon'>
                          <svg
                            viewBox='0 0 24 24'
                            color='primary'
                            width='24px'
                            xmlns='http://www.w3.org/2000/svg'
                            className='sc-bdnxRM ACFFk'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M17 4C18.5 4 19 4.5 19 6L19 8C20.1046 8 21 8.89543 21 10L21 17C21 19 20 20 17.999 20H6C4 20 3 19 3 17L3 7C3 5.5 4.5 4 6 4L17 4ZM5 7C5 6.44772 5.44772 6 6 6L19 6L19 8L6 8C5.44772 8 5 7.55229 5 7ZM17 16C18 16 19.001 15 19 14C18.999 13 18 12 17 12C16 12 15 13 15 14C15 15 16 16 17 16Z'
                            ></path>
                          </svg>
                        </div>
                        <div className='title'>
                          {account
                            .slice(0, 2)
                            .concat(`...${account.slice(-4)}`)}
                        </div>
                        <svg
                          viewBox='0 0 24 24'
                          color='text'
                          width='24px'
                          xmlns='http://www.w3.org/2000/svg'
                          className='sc-bdnxRM kDWlca'
                        >
                          <path d='M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z'></path>
                        </svg>
                        <div className='popover__content'>
                          <div className='product-body'>
                            <button
                              className='color'
                              onClick={() => disconnect()}
                            >
                              <div className='left'>Disconnect</div>
                              <div className='right'>
                                <svg
                                  viewBox='0 0 24 24'
                                  width='24px'
                                  xmlns='http://www.w3.org/2000/svg'
                                  style={{ fill: '#4ebd38' }}
                                >
                                  <path d='M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z'></path>
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ) : (
                  <li>
                    <Button
                      title={'Connect Wallet'}
                      type={'blue'}
                      onClick={() => {
                        handleWalletModal(true);
                      }}
                      customStyles={{
                        padding: '1% 0',
                        width: '100%',
                      }}
                    />
                  </li>
                )}
              </ul>
            </div>
          </div>
          <img src='images/main-bg.png' alt='main-bg' className='main-bg' />
        </div>
      </div>

      <div>
        <div className='container'>
          <div className='stack-section'>
            <div className='half'>
              <div className='stack-box'>
                <CornerDecor />
                <div className='stack-header'>
                  <div className='float'>
                    <div className='title1'>
                      <h3>CMCX Staked</h3>
                      <p>Powered by BSC</p>
                    </div>
                  </div>
                  <div className='right-side'>
                    {/*<a href="/#" className="main_btn blue">*/}
                    {/*  CMCX*/}
                    {/*</a>*/}
                  </div>
                </div>
                <div className='balance'>
                  <div className="half">
                    <p>Bidding Balance</p>
                    <h3>{stackContractInfo.totalStakedToken} CMCX</h3>
                  </div>
                  <div className="half">
                    <p>Bidding Stakers</p>
                    <h3> {stackContractInfo.totalStakers}</h3>
                  </div>
                </div>
              </div>
              <div className='stack-box__double'>
                <div className='half'>
                  <CornerDecor />
                  <div className='stack-box'>
                    <div className='stack'>
                      <p>Current Stake</p>
                      <h3 style={{ color: '#0500FF' }}>
                        {parseFloat(stakersInfo.currentStaked).toFixed(5)} CMCX
                      </h3>
                    </div>
                    <div className='stack'>
                      <p>CMCX Earned</p>
                      <h3>
                        {parseFloat(stakersInfo.realtimeReward).toFixed(10)}{' '}
                        CMCX
                      </h3>
                    </div>
                    <div className='stack'>
                      <p>Claimed Reward</p>
                      <h3>
                        {parseFloat(
                          stakersInfo.totalClaimedRewardTokenUser,
                        ).toFixed(5)}{' '}
                        CMCX
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='half'>
                  <CornerDecor />
                  <div className='stack-box'>
                    <div className='stack'>
                      <p>Your CMCX Wallet Balance</p>
                      <h3 style={{ color: '#0500FF' }}>
                        {balance.toFixed(5)} CMCX
                      </h3>
                    </div>
                    <div className='stack'>
                      <p>Total Stacked</p>
                      <h3>
                        {' '}
                        {parseFloat(stakersInfo.totalStakedTokenUser).toFixed(
                          5,
                        )}{' '}
                        CMCX
                      </h3>
                    </div>
                    <div className='stack'>
                      <p>Total Unstaked</p>
                      <h3>
                        {' '}
                        {parseFloat(stakersInfo.totalUnstakedTokenUser).toFixed(
                          5,
                        )}{' '}
                        CMCX
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='half'>
              <div className={`${styles.half} stack-box`}>
                <CornerDecor />
                <div className='stack-header'>
                  <div className='float'>
                    <div className='title1'>
                      <h3>CMCX Calculator</h3>
                      <p>Stake CMCX to earn CMCX reward.</p>
                    </div>
                  </div>
                  <div className='right-side'>
                    {/*<a href="" className="blue circle_btn">*/}
                    {/*  01*/}
                    {/*</a>*/}
                  </div>
                </div>
                <div className='text-box'>
                  <form className='newsletter'>
                    <input
                      placeholder='Enter staking amount'
                      type='text'
                      value={dipositAmount}
                      onChange={e => setDipositAmount(e.target.value)}
                    />
                    <button type='button' onClick={() => setMaxWithdrawal()}>
                      max
                    </button>
                  </form>
                </div>
                <div className='btn-section'>
                  <div className={`${styles.buttonSection}`}>
                    {BUTTONS_DATA.map(btn => {
                      return (
                        <Button
                          key={btn.period}
                          title={btn.title}
                          type={'gray'}
                          onClick={async () => {
                            setTimeperiod(btn.time);
                            setTimeperiodDate(
                              moment()
                                .add(btn.period, 'days')
                                .format('DD/MM/YYYY h:mm A'),
                            );
                          }}
                          customStyles={{
                            height: '35px',
                            width: 'calc(20% - 20px)',
                            marginTop: '3px',
                            fontSize: '12px',
                            border:
                              timeperiod === btn.time
                                ? '1px solid #0500ff'
                                : '1px solid rgba(255, 255, 255, 0)',
                            color:
                              timeperiod === btn.time
                                ? 'rgba(255, 255, 255, 1)'
                                : 'rgba(255, 255, 255, .1)',
                            backgroundColor:
                              timeperiod === btn.time
                                ? '#0500ff'
                                : 'rgba(255, 255, 255, .1)',
                          }}
                        />
                      );
                    })}
                  </div>
                  <p>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9 15H11V9H9V15ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 7H11V5H9V7Z'
                        fill='#FF7152'
                      />
                    </svg>
                    {timeperiod === 0
                      ? '15 % APY On 30 Days. Locked until ' + timeperiodDate
                      : timeperiod === 1
                      ? '22.5% APY On 60 Days. Locked until ' + timeperiodDate
                      : timeperiod === 2
                      ? '29% APY On 90 Days. Locked until ' + timeperiodDate
                      : timeperiod === 3
                      ? '36.3% APY On 180 Days. Locked until ' + timeperiodDate
                      : '50.0% APY On 360 Days. Locked until ' + timeperiodDate}
                  </p>
                  {isActive ? (
                    isAllowance ? (
                      <button
                        onClick={() =>
                          approve('0xaae3d23a76920c9064aefdd571360289fcc80053')
                        }
                        disabled={loading}
                        className='main_btn blue filled'
                      >
                        {loading ? 'Please wait, Loading..' : 'Enable'}
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          stake('0xaae3d23a76920c9064aefdd571360289fcc80053')
                        }
                        disabled={loading}
                        className='main_btn blue filled'
                      >
                        {loading ? 'Please wait, Loading..' : 'Stake my CMCX'}
                      </button>
                    )
                  ) : (
                    <Button
                      title={'Connect Wallet'}
                      type={'blue'}
                      onClick={() => {
                        handleWalletModal(true);
                      }}
                      customStyles={{
                        padding: '1% 0',
                        width: '100%',
                        marginTop: '34px'
                      }}
                    />
                  )}
                </div>
                <div className='tab-section'>
                  <div className='tab-1'>
                    <a
                      href='https://bscscan.com/token/0xb2343143f814639c9b1f42961c698247171df34a'
                      target='_blank'
                      rel='noreferrer'
                    >
                      {' '}
                      token info
                    </a>
                  </div>
                  <div className='tab-1'>
                    <a
                      href='https://coremultichain.com/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Project Site
                    </a>
                  </div>
                  <div className='tab-1'>
                    <a
                      href='https://bscscan.com/address/0xb2343143f814639c9b1f42961c698247171df34a'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Contract
                    </a>
                  </div>
                  <div className='tab-2'>
                    {/*<button type="button">Add to Metamask</button>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='table-section'>
        <div className='container'>
          {/*{stakersRecord.length == 0 ? (
            <Table
              tableLabels={["Staked Amount", "Stake Date", "Unstake Date", "Earn Reward", "Harvest", ""]}
              tableData={tableData}
              type={"staking"}
            />
          ) : (
            <div className="text-center">
              You have no stake record yet.
            </div>
          )}*/}
          <div
            className='rounded-tbl'
            style={{ overflowX: 'hidden', whiteSpace: 'nowrap' }}
          >
            <CornerDecor />
            <table className='table' style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th scope='col'>Staked Amount</th>
                  <th scope='col'>Stake Date</th>
                  <th scope='col'>Unstake Date</th>
                  <th scope='col'>Earn Reward</th>
                  <th scope='col'>Harvest</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {stakersRecord.length > 0 ? (
                  stakersRecord.map((row, index) => {
                    return (
                      <tr key={index}>
                        <td style={{ color: '#25e72f' }}>
                          {parseFloat(row.amount) / 10 ** 18}
                        </td>
                        <td>{row.staketime}</td>
                        <td>{row.unstaketime}</td>
                        <td>CMCX</td>
                        <td>
                          {parseFloat(row.realtimeRewardPerBlock).toFixed(10)}
                        </td>
                        <td>
                          {row.unstaked ? (
                            <button
                              disabled={true}
                              className='main_btn disabled'
                              style={{ backgroundColor: 'transparent' }}
                            >
                              Unstaked
                            </button>
                          ) : (
                            <button
                              disabled={loading}
                              onClick={() => unstake(index)}
                              className='main_btn'
                              style={{ backgroundColor: 'transparent' }}
                            >
                              Unstake
                            </button>
                          )}
                          {row.withdrawan ? (
                            <button
                              disabled={true}
                              className='main_btn disabled'
                              style={{ backgroundColor: 'transparent' }}
                            >
                              Harversted
                            </button>
                          ) : (
                            <button
                              disabled={loading}
                              onClick={() => harvest(index)}
                              className='main_btn blue'
                              style={{ backgroundColor: 'transparent' }}
                            >
                              Harverst
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={7} className='text-center'>
                      You have no stake record yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Stack;
