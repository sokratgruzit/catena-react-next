import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import FromToken from './FromToken';
import { tokenList } from './token/token';
import ToToken from './ToToken';
import CornerDecor from '../../../components/UI/cornerDecor/CornerDecor';
import useMetaMask from '../../../hooks/use-connect';
import PANCAKE_ABI from '../../abi/Router.json';
import WBNB from '../../abi/WBNB.json';

import styles from './SwapBox.module.css';

// import ImportToken from "../components/ImportToken";
// import WarnToken from "../components/WarnToken";

import 'react-toastify/dist/ReactToastify.css';

function getRPCErrorMessage(error) {
  const start = error.message.indexOf('{');
  const end = error.message.indexOf('}');
  if (start && end) {
    error = JSON.parse(error.message.substring(start, end + 1));
  }

  return error;
}

const SwapBox = () => {
  const [tab, setTab] = useState(0);
  const [slippageBox, setSlippageBox] = useState(false);
  const [swapSelect, setSwapSelect] = useState(false);

  const { library, account, isActive, chainId } = useMetaMask();
  var web3Obj = library;
  var Router = '0x10ED43C718714eb63d5aA57B78B54704E256024E';

  const [fromModal, setFromModal] = useState(false);
  const [toModal, setToModal] = useState(false);

  const [tokenInfo, setTokenInfo] = useState([]);

  const [fromToken, setFromToken] = useState({});
  const [fromAmount, setFromAmount] = useState('');
  const [toToken, setToToken] = useState('');
  const [toAmount, setToAmount] = useState(0);

  const [fromBalance, setFromBalance] = useState(0);
  const [toBalance, setToBalance] = useState(0);

  const slippage = useSelector(state => state.settings.slippage);
  const [deadLine, setDeadLine] = useState(20);
  const [swapActive, setSwapActive] = useState(false);
  const [isAllowance, setIsAllowance] = useState(true);
  const [loading, setLoadding] = useState(true);

  const [isBscNetwork, setIsBscNetwork] = useState(false);

  const dispatch = useDispatch();

  const successAlert = tx => {
    return (
      <div>
        <p>Transaction Successful</p>
        {/* <br /> */}
        <a target='_blank' rel='noopener noreferrer' href={`https://bscscan.com/tx/${tx}`}>
          View on Explorer
        </a>
      </div>
    );
  };

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

  const approve = async () => {
    setLoadding(true);
    try {
      if (!fromToken.address) {
        return;
      }

      var contract = new web3Obj.eth.Contract(WBNB, fromToken.address);
      // const decimals = await contract.methods.decimals().call();
      // var amountIn = new ethers.utils.BigNumber("10").pow(69);
      var amountIn = 10 ** 69;
      amountIn = amountIn.toLocaleString('fullwide', { useGrouping: false });

      await contract.methods.approve(Router, amountIn.toString()).send({ from: account });
      setLoadding(false);
      setIsAllowance(false);
    } catch (err) {
      console.log(err);
    }
  };

  const quateSwap = async e => {
    setLoadding(true);
    try {
      setFromAmount(e.target.value);
      setIsAllowance(true);
      var fromAmount = e.target.value;

      if (!fromToken || !toToken || fromAmount <= 0) {
        setLoadding(false);
        return;
      }

      var fromTokenContract = new web3Obj.eth.Contract(WBNB, fromToken.address);
      var fromTokenDecimals = await fromTokenContract.methods.decimals().call();
      var allowance = await fromTokenContract.methods.allowance(account, Router).call();

      var amountIn = parseFloat(fromAmount) * 10 ** fromTokenDecimals;
      amountIn = amountIn.toLocaleString('fullwide', { useGrouping: false });

      var toAddressContract = new web3Obj.eth.Contract(WBNB, toToken.address);
      var toAddressDecimals = await toAddressContract.methods.decimals().call();

      var contract = new web3Obj.eth.Contract(PANCAKE_ABI, Router);
      var WETH = await contract.methods.WETH().call();

      if (parseFloat(amountIn) < allowance) {
        console.log(allowance);
        setIsAllowance(false);
      }
      if (fromToken.address === WETH) {
        setIsAllowance(false);
      }

      if (fromToken.address === WETH) {
        var amountsOut = await contract.methods.getAmountsOut(`${amountIn}`, [WETH, toToken.address]).call();

        var outputAmount = amountsOut[1] / 10 ** toAddressDecimals;
      } else if (toToken.address === WETH) {
        var amountsOut = await contract.methods.getAmountsOut(`${amountIn}`, [fromToken.address, WETH]).call();
        var outputAmount = amountsOut[1] / 10 ** toAddressDecimals;
      } else {
        var amountsOut = await contract.methods
          .getAmountsOut(`${amountIn}`, [fromToken.address, WETH, toToken.address])
          .call();
        var outputAmount = amountsOut[2] / 10 ** toAddressDecimals;
      }
      setToAmount(outputAmount);
      setSwapActive(true);

      setLoadding(false);
    } catch (err) {
      setLoadding(false);
    }
  };

  const estimateSwap = async e => {
    setLoadding(true);
    var fromTokenContract = new web3Obj.eth.Contract(WBNB, fromToken.address);
    var fromTokenDecimals = await fromTokenContract.methods.decimals().call();

    var toAddressContract = new web3Obj.eth.Contract(WBNB, toToken.address);
    var toAddressDecimals = await toAddressContract.methods.decimals().call();

    var contract = new web3Obj.eth.Contract(PANCAKE_ABI, Router);
    var WETH = await contract.methods.WETH().call();

    var pow = Math.pow(10, fromTokenDecimals);
    var amountIn = parseFloat(fromAmount) * pow;
    amountIn = amountIn.toLocaleString('fullwide', { useGrouping: false });

    if (fromToken.address === WETH) {
      var amountsOut = await contract.methods.getAmountsOut(`${amountIn}`, [WETH, toToken.address]).call();
      var amountOutMin = (amountsOut[1] - amountsOut[1] * (parseFloat(slippage) / 100)).toFixed(0);
    } else if (toToken.address === WETH) {
      var amountsOut = await contract.methods.getAmountsOut(`${amountIn}`, [fromToken.address, WETH]).call();
      var amountOutMin = (amountsOut[1] - amountsOut[1] * (parseFloat(slippage) / 100)).toFixed(0);
    } else {
      var amountsOut = await contract.methods
        .getAmountsOut(`${amountIn}`, [fromToken.address, WETH, toToken.address])
        .call();
      var amountOutMin = (amountsOut[2] - amountsOut[2] * (parseFloat(slippage) / 100)).toFixed(0);
    }

    try {
      if (fromToken.address === WETH) {
        await contract.methods
          .swapExactETHForTokens(
            // amountIn,
            amountOutMin.toString(),
            [fromToken.address, toToken.address],
            account,
            Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
          )
          .estimateGas({ from: account, value: amountIn.toString() })
          .then(async () => {
            await contract.methods
              .swapExactETHForTokens(
                // amountIn,
                amountOutMin.toString(),
                [fromToken.address, toToken.address],
                account,
                Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
              )
              .send({ from: account, value: amountIn.toString() })
              .then(result => {
                notify(false, successAlert(result.transactionHash));
              })
              .catch(er => notify(true, er.message));
          });
      } else if (toToken.address === WETH) {
        var tx = await contract.methods
          .swapExactTokensForETH(
            amountIn.toString(),
            amountOutMin.toString(),
            [fromToken.address, toToken.address],
            account,
            Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
          )
          .estimateGas({ from: account })
          .then(async () => {
            await contract.methods
              .swapExactTokensForETH(
                amountIn.toString(),
                amountOutMin.toString(),
                [fromToken.address, toToken.address],
                account,
                Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
              )
              .send({ from: account })
              .then(result => {
                notify(false, successAlert(result.transactionHash));
              })
              .catch(er => notify(true, er.message));
          });
      } else {
        var tx = await contract.methods
          .swapExactTokensForTokens(
            amountIn.toString(),
            amountOutMin.toString(),
            [fromToken.address, WETH, toToken.address],
            account,
            Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
          )
          .estimateGas({ from: account })
          .then(async () => {
            await contract.methods
              .swapExactTokensForTokens(
                amountIn.toString(),
                amountOutMin.toString(),
                [fromToken.address, WETH, toToken.address],
                account,
                Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
              )
              .send({ from: account })
              .then(result => {
                notify(false, successAlert(result.transactionHash));
              })
              .catch(er => notify(true, er.message));
          });
      }
      setLoadding(false);
    } catch (err) {
      var error = getRPCErrorMessage(err);

      if (error.message === 'execution reverted: Pancake: K') {
        try {
          if (toToken.address === WETH) {
            await contract.methods
              .swapExactTokensForETHSupportingFeeOnTransferTokens(
                amountIn.toString(),
                amountOutMin.toString(),
                [fromToken.address, toToken.address],
                account,
                Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
              )
              .estimateGas({ from: account })
              .then(async () => {
                await contract.methods
                  .swapExactTokensForETHSupportingFeeOnTransferTokens(
                    amountIn.toString(),
                    amountOutMin.toString(),
                    [fromToken.address, toToken.address],
                    account,
                    Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
                  )
                  .send({ from: account })
                  .then(result => {
                    notify(false, successAlert(result.transactionHash));
                  })
                  .catch(er => notify(true, er.message));
              });
          } else {
            await contract.methods
              .swapExactTokensForTokensSupportingFeeOnTransferTokens(
                amountIn.toString(),
                amountOutMin.toString(),
                [fromToken.address, WETH, toToken.address],
                account,
                Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
              )
              .estimateGas({ from: account })
              .then(async () => {
                await contract.methods
                  .swapExactTokensForTokensSupportingFeeOnTransferTokens(
                    amountIn.toString(),
                    amountOutMin.toString(),
                    [fromToken.address, WETH, toToken.address],
                    account,
                    Date.now() + 1000 * 60 * parseInt(deadLine), //20 minutes
                  )
                  .send({ from: account })
                  .then(result => {
                    notify(false, successAlert(result.transactionHash));
                  })
                  .catch(er => notify(true, er.message));
              });
          }
          setLoadding(false);
        } catch (err) {
          var getError = getRPCErrorMessage(err);
          if (getError.message === 'execution reverted: PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT') {
            notify(
              true,
              'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.',
            );
          }

          setLoadding(false);
        }
      } else {
        notify(
          true,
          'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.',
        );
        setLoadding(false);
      }
    }
  };

  const getTokenBalance = async (tokenAddress, type) => {
    try {
      if (type === 'From') {
        if (tokenAddress === '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c') {
          var result = await web3Obj.eth.getBalance(account);
          var format = web3Obj.utils.fromWei(result); // 29803630.997051883414242659
          setFromBalance(parseFloat(format).toFixed(10));
        } else {
          var tokenContract = new web3Obj.eth.Contract(WBNB, tokenAddress);
          var decimals = await tokenContract.methods.decimals().call();
          var getBalance = await tokenContract.methods.balanceOf(account).call();

          var pow = 10 ** decimals;
          var balanceInEth = getBalance / pow;
          setFromBalance(balanceInEth);
        }
      } else {
        if (tokenAddress === '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c') {
          var result = await web3Obj.eth.getBalance(account);
          var format = web3Obj.utils.fromWei(result); // 29803630.997051883414242659
          setToBalance(parseFloat(format).toFixed(10));
        } else {
          var tokenContract = new web3Obj.eth.Contract(WBNB, tokenAddress);
          var decimals = await tokenContract.methods.decimals().call();
          var getBalance = await tokenContract.methods.balanceOf(account).call();

          var pow = 10 ** decimals;
          var balanceInEth = getBalance / pow;
          setToBalance(balanceInEth);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const rotateSwap = async () => {
    var fromtemp = fromToken;
    var totemp = toToken;
    setFromToken(totemp);
    setToToken(fromtemp);
    setFromAmount('');
    setToAmount('');
    if (isActive) {
      getTokenBalance(totemp.address, 'From');
      getTokenBalance(fromtemp.address, 'To');
    }
  };

  const switchNetwork = async () => {
    setLoadding(true);
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
    });
    setLoadding(false);
  };

  useEffect(() => {
    if (isActive) {
      if (chainId !== 56) {
        setIsBscNetwork(false);
      } else {
        if (fromToken?.address) {
          setIsBscNetwork(true);
          getTokenBalance(fromToken.address, 'From');
          getTokenBalance(toToken.address, 'To');
        }
      }
    }
  }, [chainId]);
  useEffect(() => {
    setLoadding(true);
    var token = tokenList();
    if (token) {
      setTokenInfo(token);
      if (isActive) {
        if (chainId !== 56) {
          setIsBscNetwork(false);
        } else {
          getTokenBalance(token[0].address, 'From');
          getTokenBalance(token[1].address, 'To');
          setIsBscNetwork(true);
        }
      }
      setFromToken(token[0]);
      setToToken(token[1]);
    }
    setLoadding(false);
  }, [isActive]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={`${styles.swapContainer} ${!slippageBox && setFromModal ? styles.swapContainerActive : ''}`}>
            <CornerDecor />
            <div className={styles.swapTtl}>Swap</div>
            <div className={styles.swapSelectTtl}>from</div>
            <div className={styles.swapSelect}>
              <div
                className={styles.swapSelectBtn}
                onClick={() => {
                  setFromModal(true);
                  // setSwapSelect(true);
                }}
              >
                <div className={styles.swapSelectBtnTop}>
                  <img src={fromToken.logo} alt='icon' />
                  <span> {fromToken.symbol}</span>
                  <svg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M7 1.19727L4.5303 3.66696C4.23864 3.95863 3.76136 3.95863 3.4697 3.66696L1 1.19727'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                {/*<span>Ethereum</span>*/}
              </div>
              <div className={styles.swapSelectBtnNums}>
                <input
                  type='number'
                  placeholder={0.0}
                  dir='rtl'
                  value={fromAmount}
                  onChange={e => {
                    quateSwap(e);
                  }}
                />
                <span>~$3,182.17</span>
              </div>
            </div>
            <div className={styles.swapReverse}>
              <div className={styles.swapReverseBtn} onClick={() => rotateSwap()}>
                <svg width='14' height='16' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9.24023 1.63293L13.0005 5.38574'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9.24023 14.3672L9.24023 1.63311'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4.7603 14.3672L1 10.6144'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4.75977 1.63311L4.75977 14.3672'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
            <div className={styles.swapSelectTtl}>To</div>
            <div className={styles.swapSelect}>
              <div
                className={styles.swapSelectBtn}
                onClick={() => {
                  // setSwapSelect(true);
                  setToModal(true);
                }}
              >
                <div className={styles.swapSelectBtnTop}>
                  <img src={toToken.logo} alt='icon' />
                  <span>{toToken.symbol}</span>
                  <svg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M7 1.19727L4.5303 3.66696C4.23864 3.95863 3.76136 3.95863 3.4697 3.66696L1 1.19727'
                      stroke='white'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                {/*<span>CATENA Network</span>*/}
              </div>
              <div className={styles.swapSelectBtnNums}>
                <input type='number' placeholder={0.0} dir='rtl' value={parseFloat(toAmount).toFixed(9)} />
                <span>~$3,182.17</span>
              </div>
            </div>
            <div className={styles.swapDescription} style={{ marginTop: '10px' }}>
              Slippage Tolerance
              <span>{slippage}%</span>
            </div>
            {!isBscNetwork ? (
              <div onClick={() => switchNetwork()} className={styles.swapConnect}>
                {loading ? 'loading..' : 'Swich to BSC network'}
              </div>
            ) : !swapActive ? (
              <div disabled={true} className={styles.swapConnect}>
                {loading ? 'Please wait, Loading..' : 'Enter an amount'}
              </div>
            ) : isAllowance ? (
              <div disabled={loading} onClick={() => approve()} className={styles.swapConnect}>
                {loading ? 'Please wait, Loading..' : 'Enable'}
              </div>
            ) : (
              <div disabled={loading} onClick={() => estimateSwap()} className={styles.swapConnect}>
                {loading ? 'Please wait, Loading..' : 'Swap'}
              </div>
            )}
            <div className={styles.swapDescription}>
              Price per
              <div style={{ color: '#fff' }}>0.0027 USDT</div>
            </div>
            <div className={styles.swapDescription}>
              Slippage
              <div
                className={styles.swapDescriptionBtn}
                onClick={() => {
                  setSlippageBox(true);
                }}
              >
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M7.99318 10.9423C6.45415 10.9423 5.20508 9.62346 5.20508 7.99848C5.20508 6.37351 6.45415 5.05469 7.99318 5.05469C9.53222 5.05469 10.7813 6.37351 10.7813 7.99848C10.7813 9.62346 9.53222 10.9423 7.99318 10.9423ZM7.99318 6.2322C7.07125 6.2322 6.32032 7.02507 6.32032 7.99848C6.32032 8.9719 7.07125 9.76476 7.99318 9.76476C8.91512 9.76476 9.66604 8.9719 9.66604 7.99848C9.66604 7.02507 8.91512 6.2322 7.99318 6.2322Z'
                    fill='#0500FF'
                  />
                  <path
                    d='M10.3792 15.9968C10.223 15.9968 10.0669 15.9732 9.91078 15.934C9.44981 15.8005 9.0632 15.4944 8.81784 15.0626L8.72862 14.9056C8.28996 14.1049 7.68773 14.1049 7.24907 14.9056L7.16729 15.0548C6.92193 15.4944 6.53532 15.8084 6.07435 15.934C5.60595 16.0674 5.12268 15.9968 4.71375 15.7377L3.43494 14.9606C3.21024 14.8246 3.01313 14.6433 2.85487 14.4268C2.69662 14.2104 2.58033 13.9631 2.51266 13.6992C2.44499 13.4353 2.42726 13.1598 2.46049 12.8887C2.49372 12.6175 2.57725 12.3559 2.70632 12.1188C2.92193 11.7185 2.98141 11.3574 2.85502 11.1297C2.72862 10.9021 2.40892 10.7686 1.97026 10.7686C0.884758 10.7686 0 9.83446 0 8.68834V7.30672C0 6.1606 0.884758 5.22644 1.97026 5.22644C2.40892 5.22644 2.72862 5.09299 2.85502 4.86533C2.98141 4.63768 2.92937 4.27658 2.70632 3.87622C2.4461 3.39736 2.37918 2.83215 2.51301 2.29835C2.64684 1.75669 2.97398 1.30923 3.43494 1.03448L4.72119 0.257316C5.56134 -0.268642 6.66914 0.0375128 7.17472 0.940276L7.26394 1.09728C7.7026 1.89799 8.30483 1.89799 8.74349 1.09728L8.82528 0.948126C9.33085 0.0375128 10.4387 -0.268642 11.2862 0.265166L12.5651 1.04233C12.7898 1.17827 12.9869 1.35964 13.1451 1.57608C13.3034 1.79252 13.4197 2.03978 13.4873 2.30371C13.555 2.56764 13.5727 2.84307 13.5395 3.11424C13.5063 3.38542 13.4227 3.64701 13.2937 3.88407C13.0781 4.28443 13.0186 4.64553 13.145 4.87318C13.2714 5.10084 13.5911 5.23429 14.0297 5.23429C15.1152 5.23429 16 6.16845 16 7.31457V8.69619C16 9.84231 15.1152 10.7765 14.0297 10.7765C13.5911 10.7765 13.2714 10.9099 13.145 11.1376C13.0186 11.3652 13.0706 11.7263 13.2937 12.1267C13.5539 12.6055 13.6283 13.1708 13.487 13.7046C13.4224 13.9702 13.3073 14.2191 13.1488 14.4364C12.9904 14.6536 12.7918 14.8346 12.5651 14.9684L11.2788 15.7456C10.9963 15.9104 10.6914 15.9968 10.3792 15.9968ZM7.99256 13.0923C8.65427 13.0923 9.27137 13.5319 9.69517 14.309L9.77695 14.4582C9.86617 14.623 10.0149 14.7408 10.1933 14.7879C10.3717 14.835 10.5502 14.8114 10.6989 14.7172L11.9851 13.9322C12.1814 13.8127 12.3251 13.6162 12.385 13.3854C12.4448 13.1546 12.416 12.9082 12.3048 12.6997C11.881 11.9304 11.829 11.1376 12.1561 10.5331C12.4833 9.92866 13.1599 9.58325 14.0074 9.58325C14.4833 9.58325 14.8625 9.1829 14.8625 8.68049V7.29887C14.8625 6.80431 14.4833 6.39611 14.0074 6.39611C13.1599 6.39611 12.4833 6.0507 12.1561 5.44624C11.829 4.84178 11.881 4.04892 12.3048 3.27961C12.4164 3.07551 12.4461 2.83215 12.3866 2.59665C12.3271 2.36115 12.1859 2.17274 11.9926 2.04714L10.7063 1.26998C10.6287 1.22194 10.5429 1.19053 10.4538 1.17755C10.3647 1.16457 10.274 1.17028 10.187 1.19434C10.1 1.2184 10.0183 1.26035 9.9467 1.31778C9.87506 1.37521 9.81485 1.447 9.76952 1.52903L9.68773 1.67819C9.26394 2.45535 8.64684 2.89495 7.98513 2.89495C7.32342 2.89495 6.70632 2.45535 6.28253 1.67819L6.20074 1.52118C6.10835 1.36075 5.9603 1.24473 5.78811 1.19782C5.61592 1.1509 5.43319 1.17679 5.27881 1.26998L3.99256 2.05499C3.79627 2.17455 3.65258 2.37105 3.59271 2.60182C3.53285 2.83259 3.56165 3.07898 3.67286 3.28746C4.09665 4.05677 4.1487 4.84963 3.82156 5.45409C3.49442 6.05855 2.81784 6.40396 1.97026 6.40396C1.49442 6.40396 1.11524 6.80431 1.11524 7.30672V8.68834C1.11524 9.1829 1.49442 9.5911 1.97026 9.5911C2.81784 9.5911 3.49442 9.93651 3.82156 10.541C4.1487 11.1454 4.09665 11.9383 3.67286 12.7076C3.56134 12.9117 3.5316 13.1551 3.59108 13.3906C3.65056 13.6261 3.79182 13.8145 3.98513 13.9401L5.27138 14.7172C5.42751 14.8193 5.61338 14.8428 5.78439 14.7957C5.96282 14.7486 6.11152 14.623 6.20818 14.4582L6.28996 14.309C6.71375 13.5397 7.33085 13.0923 7.99256 13.0923Z'
                    fill='#0500FF'
                  />
                </svg>
              </div>
            </div>
          </div>
          {fromModal && (
            <FromToken
              setIsOpen={setFromModal}
              tokenInfo={tokenInfo}
              setTokenInfo={setTokenInfo}
              setFromToken={setFromToken}
              getTokenBalance={getTokenBalance}
              quateSwap={quateSwap}
              fromAmount={fromAmount}
            />
          )}
          {toModal && (
            <ToToken
              setIsOpen={setToModal}
              tokenInfo={tokenInfo}
              setTokenInfo={setTokenInfo}
              setToToken={setToToken}
              getTokenBalance={getTokenBalance}
              quateSwap={quateSwap}
              fromAmount={fromAmount}
            />
          )}
          <div className={`${styles.swapContainerModal} ${slippageBox ? styles.swapContainerActive : ''}`}>
            <CornerDecor />
            <div className={styles.swapContainerModalTtl}>
              <svg
                width='14'
                height='10'
                viewBox='0 0 14 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                onClick={() => setSlippageBox(false)}
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M-2.18557e-07 5C-2.28619e-07 4.76981 0.0962057 4.54905 0.267454 4.38628L4.61474 0.254214C4.97134 -0.084737 5.54951 -0.0847371 5.90612 0.254214C6.26272 0.593164 6.26272 1.14271 5.90612 1.48166L2.20452 5L5.90612 8.51834C6.26272 8.85729 6.26272 9.40684 5.90612 9.74579C5.54951 10.0847 4.97134 10.0847 4.61474 9.74579L0.267453 5.61372C0.0962058 5.45095 -2.08495e-07 5.23019 -2.18557e-07 5Z'
                  fill='white'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.121094 5.00023C0.121094 4.52088 0.529922 4.13229 1.03424 4.13229L13.0877 4.13229C13.5921 4.13229 14.0009 4.52088 14.0009 5.00023C14.0009 5.47957 13.5921 5.86816 13.0877 5.86816L1.03424 5.86816C0.529922 5.86816 0.121094 5.47958 0.121094 5.00023Z'
                  fill='white'
                />
              </svg>
              Set Slippage
            </div>
            <input
              type='text'
              className={styles.swapContainerModalInput}
              placeholder='2%'
              min={1}
              max={49}
              value={slippage}
              onChange={e =>
                dispatch({
                  type: 'SET_SLIPPAGE',
                  slippage: parseFloat(e.target.value),
                })
              }
            />
            <div
              className={`${styles.swapContainerModalBtn} ${styles.swapContainerModalBtnBlue}`}
              onClick={() => setSlippageBox(false)}
            >
              Set Custom
            </div>
            {/*<div className={`${styles.swapContainerModalBtn} ${styles.swapContainerModalBtnBordered}`}>*/}
            {/*    Set Auto*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapBox;
