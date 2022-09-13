import styles from './SwapBox.module.css';
import CornerDecor from '../../../components/UI/cornerDecor/CornerDecor';
import {useState, useEffect} from "react";
import React from "react";
import Tooltip from "../../UI/tooltip/Tooltip";

import { refresh, prefs, bnb, busd, arrowdown, dropdown, tag } from "./assets";
import FromToken from "./FromToken";
import ToToken from "./ToToken";
// import ImportToken from "../components/ImportToken";
// import WarnToken from "../components/WarnToken";
import Setting from "./Setting";

import { tokenList } from "./token/token";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PANCAKE_ABI from "../../abi/Router.json";
import WBNB from "../../abi/WBNB.json";

import useMetaMask from "../../../hooks/use-connect";

function getRPCErrorMessage(error) {
    const start = error.message.indexOf("{");
    const end = error.message.indexOf("}");
    if (start && end) {
        error = JSON.parse(error.message.substring(start, end + 1));
    }

    return error;
}

const SwapBox = () => {
    const [ tab, setTab ] = useState(0);
    const [ slippageBox, setSlippageBox] = useState(false);
    const [ swapSelect, setSwapSelect] = useState(false);

    const { library, account, isActive, chainId } = useMetaMask();
    var web3Obj = library;
    var Router = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

    const [fromModal, setFromModal] = useState(false);
    const [toModal, setToModal] = useState(false);

    const [tokenInfo, setTokenInfo] = useState([]);

    const [fromToken, setFromToken] = useState({});
    const [fromAmount, setFromAmount] = useState("");
    const [toToken, setToToken] = useState("");
    const [toAmount, setToAmount] = useState(0);

    const [fromBalance, setFromBalance] = useState(0);
    const [toBalance, setToBalance] = useState(0);

    const [slippage, setSlippage] = useState(0.5);
    const [deadLine, setDeadLine] = useState(20);
    const [swapActive, setSwapActive] = useState(false);
    const [isAllowance, setIsAllowance] = useState(true);
    const [loading, setLoadding] = useState(true);

    const [isBscNetwork, setIsBscNetwork] = useState(false);

    const successAlert = (tx) => {
        return (
            <div>
                <p>Transaction Successful</p>
                {/* <br /> */}
                <a target="_blank" href={`https://bscscan.com/tx/${tx}`}>
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
            amountIn = amountIn.toLocaleString("fullwide", { useGrouping: false });

            await contract.methods
                .approve(Router, amountIn.toString())
                .send({ from: account });
            setLoadding(false);
            setIsAllowance(false);
        } catch (err) {
            console.log(err);
        }
    };

    const quateSwap = async (e) => {
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
            var allowance = await fromTokenContract.methods
                .allowance(account, Router)
                .call();

            var amountIn = parseFloat(fromAmount) * 10 ** fromTokenDecimals;
            amountIn = amountIn.toLocaleString("fullwide", { useGrouping: false });

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
                var amountsOut = await contract.methods
                    .getAmountsOut(`${amountIn}`, [WETH, toToken.address])
                    .call();

                var outputAmount = amountsOut[1] / 10 ** toAddressDecimals;
            } else if (toToken.address === WETH) {
                var amountsOut = await contract.methods
                    .getAmountsOut(`${amountIn}`, [fromToken.address, WETH])
                    .call();
                var outputAmount = amountsOut[1] / 10 ** toAddressDecimals;
            } else {
                var amountsOut = await contract.methods
                    .getAmountsOut(`${amountIn}`, [
                        fromToken.address,
                        WETH,
                        toToken.address,
                    ])
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

    const estimateSwap = async (e) => {
        setLoadding(true);
        var fromTokenContract = new web3Obj.eth.Contract(WBNB, fromToken.address);
        var fromTokenDecimals = await fromTokenContract.methods.decimals().call();

        var toAddressContract = new web3Obj.eth.Contract(WBNB, toToken.address);
        var toAddressDecimals = await toAddressContract.methods.decimals().call();

        var contract = new web3Obj.eth.Contract(PANCAKE_ABI, Router);
        var WETH = await contract.methods.WETH().call();

        var pow = Math.pow(10, fromTokenDecimals);
        var amountIn = parseFloat(fromAmount) * pow;
        amountIn = amountIn.toLocaleString("fullwide", { useGrouping: false });

        if (fromToken.address === WETH) {
            var amountsOut = await contract.methods
                .getAmountsOut(`${amountIn}`, [WETH, toToken.address])
                .call();
            var amountOutMin = (
                amountsOut[1] -
                amountsOut[1] * (parseFloat(slippage) / 100)
            ).toFixed(0);
        } else if (toToken.address === WETH) {
            var amountsOut = await contract.methods
                .getAmountsOut(`${amountIn}`, [fromToken.address, WETH])
                .call();
            var amountOutMin = (
                amountsOut[1] -
                amountsOut[1] * (parseFloat(slippage) / 100)
            ).toFixed(0);
        } else {
            var amountsOut = await contract.methods
                .getAmountsOut(`${amountIn}`, [
                    fromToken.address,
                    WETH,
                    toToken.address,
                ])
                .call();
            var amountOutMin = (
                amountsOut[2] -
                amountsOut[2] * (parseFloat(slippage) / 100)
            ).toFixed(0);
        }

        try {
            if (fromToken.address === WETH) {
                await contract.methods
                    .swapExactETHForTokens(
                        // amountIn,
                        amountOutMin.toString(),
                        [fromToken.address, toToken.address],
                        account,
                        Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                    )
                    .estimateGas({ from: account, value: amountIn.toString() })
                    .then(async () => {
                        await contract.methods
                            .swapExactETHForTokens(
                                // amountIn,
                                amountOutMin.toString(),
                                [fromToken.address, toToken.address],
                                account,
                                Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                            )
                            .send({ from: account, value: amountIn.toString() })
                            .then((result) => {
                                notify(false, successAlert(result.transactionHash));
                            })
                            .catch((er) => notify(true, er.message));
                    });
            } else if (toToken.address === WETH) {
                var tx = await contract.methods
                    .swapExactTokensForETH(
                        amountIn.toString(),
                        amountOutMin.toString(),
                        [fromToken.address, toToken.address],
                        account,
                        Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                    )
                    .estimateGas({ from: account })
                    .then(async () => {
                        await contract.methods
                            .swapExactTokensForETH(
                                amountIn.toString(),
                                amountOutMin.toString(),
                                [fromToken.address, toToken.address],
                                account,
                                Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                            )
                            .send({ from: account })
                            .then((result) => {
                                notify(false, successAlert(result.transactionHash));
                            })
                            .catch((er) => notify(true, er.message));
                    });
            } else {
                var tx = await contract.methods
                    .swapExactTokensForTokens(
                        amountIn.toString(),
                        amountOutMin.toString(),
                        [fromToken.address, WETH, toToken.address],
                        account,
                        Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                    )
                    .estimateGas({ from: account })
                    .then(async () => {
                        await contract.methods
                            .swapExactTokensForTokens(
                                amountIn.toString(),
                                amountOutMin.toString(),
                                [fromToken.address, WETH, toToken.address],
                                account,
                                Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                            )
                            .send({ from: account })
                            .then((result) => {
                                notify(false, successAlert(result.transactionHash));
                            })
                            .catch((er) => notify(true, er.message));
                    });
            }
            setLoadding(false);
        } catch (err) {
            var error = getRPCErrorMessage(err);

            if (error.message === "execution reverted: Pancake: K") {
                try {
                    if (toToken.address === WETH) {
                        await contract.methods
                            .swapExactTokensForETHSupportingFeeOnTransferTokens(
                                amountIn.toString(),
                                amountOutMin.toString(),
                                [fromToken.address, toToken.address],
                                account,
                                Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                            )
                            .estimateGas({ from: account })
                            .then(async () => {
                                await contract.methods
                                    .swapExactTokensForETHSupportingFeeOnTransferTokens(
                                        amountIn.toString(),
                                        amountOutMin.toString(),
                                        [fromToken.address, toToken.address],
                                        account,
                                        Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                                    )
                                    .send({ from: account })
                                    .then((result) => {
                                        notify(false, successAlert(result.transactionHash));
                                    })
                                    .catch((er) => notify(true, er.message));
                            });
                    } else {
                        await contract.methods
                            .swapExactTokensForTokensSupportingFeeOnTransferTokens(
                                amountIn.toString(),
                                amountOutMin.toString(),
                                [fromToken.address, WETH, toToken.address],
                                account,
                                Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                            )
                            .estimateGas({ from: account })
                            .then(async () => {
                                await contract.methods
                                    .swapExactTokensForTokensSupportingFeeOnTransferTokens(
                                        amountIn.toString(),
                                        amountOutMin.toString(),
                                        [fromToken.address, WETH, toToken.address],
                                        account,
                                        Date.now() + 1000 * 60 * parseInt(deadLine) //20 minutes
                                    )
                                    .send({ from: account })
                                    .then((result) => {
                                        notify(false, successAlert(result.transactionHash));
                                    })
                                    .catch((er) => notify(true, er.message));
                            });
                    }
                    setLoadding(false);
                } catch (err) {
                    var getError = getRPCErrorMessage(err);
                    if (
                        getError.message ===
                        "execution reverted: PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT"
                    ) {
                        notify(
                            true,
                            "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."
                        );
                    }

                    setLoadding(false);
                }
            } else {
                notify(
                    true,
                    "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."
                );
                setLoadding(false);
            }
        }
    };

    const getTokenBalance = async (tokenAddress, type) => {
        try {
            if (type === "From") {
                if (tokenAddress === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
                    var result = await web3Obj.eth.getBalance(account);
                    var format = web3Obj.utils.fromWei(result); // 29803630.997051883414242659
                    setFromBalance(parseFloat(format).toFixed(10));
                } else {
                    var tokenContract = new web3Obj.eth.Contract(WBNB, tokenAddress);
                    var decimals = await tokenContract.methods.decimals().call();
                    var getBalance = await tokenContract.methods
                        .balanceOf(account)
                        .call();

                    var pow = 10 ** decimals;
                    var balanceInEth = getBalance / pow;
                    setFromBalance(balanceInEth);
                }
            } else {
                if (tokenAddress === "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c") {
                    var result = await web3Obj.eth.getBalance(account);
                    var format = web3Obj.utils.fromWei(result); // 29803630.997051883414242659
                    setToBalance(parseFloat(format).toFixed(10));
                } else {
                    var tokenContract = new web3Obj.eth.Contract(WBNB, tokenAddress);
                    var decimals = await tokenContract.methods.decimals().call();
                    var getBalance = await tokenContract.methods
                        .balanceOf(account)
                        .call();

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
        setFromAmount("");
        setToAmount("");
        if (isActive) {
            getTokenBalance(totemp.address, "From");
            getTokenBalance(fromtemp.address, "To");
        }
    }

    const switchNetwork = async () => {
        setLoadding(true);
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x38" }], // chainId must be in hexadecimal numbers
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
                    getTokenBalance(fromToken.address, "From");
                    getTokenBalance(toToken.address, "To");
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
                    getTokenBalance(token[0].address, "From");
                    getTokenBalance(token[1].address, "To");
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
            <>
                <div className="w-1/2 mx-auto pt-10 pb-5 shadow-xl mt-20 bg-white mb-5 m-btm">
                    <div className="mx-24">
                        <div className="font-sans ">
                            <label className="flex flex-row items-start pb-7  ">
                                <h3 className="font-bold text-xl text-primary">Swap</h3>
                                {/* <h3 className="font-bold text-xl pl-8 text-gray-300">Limit</h3>
              <h3 className="font-bold text-xl pl-8 text-gray-300">P2P</h3> */}
                                <div className="flex gap-4 ml-auto">
                                    {/* <img src={refresh} className="items-end ml-auto right-0 " /> */}
                                    <a
                                        href=""
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter"
                                    >
                                        <img src={prefs} className="items-end ml-auto right-0" />
                                    </a>
                                    <Setting setSlippage={setSlippage} setDeadLine={setDeadLine} />
                                </div>
                            </label>
                            <div className="bg-gray-200 p-2 px-6 ">
                                <label className="flex flex-row pt-1 text-gray-400">
                                    <h3>From</h3>
                                    <h3 className="items-end ml-auto right-0">
                                        Balance : {parseFloat(fromBalance).toFixed(10)} &nbsp;
                                        <button
                                            type="button"
                                            className="max-btn"
                                            onClick={(e) => {
                                                setFromAmount(fromBalance);
                                                e.target.value = fromBalance;
                                                quateSwap(e);
                                            }}
                                        >
                                            Max
                                        </button>
                                    </h3>
                                </label>
                                <div className="flex flex-row">
                                    <label
                                        onClick={() => setFromModal(true)}
                                        className="flex pt-1 pb-3 text-3xl font-bold text-black"
                                        style={{ width: "50%" }}
                                    >
                                        <img src={fromToken.logo} className="img" alt="icon" />
                                        <h4 className="pl-2 pr-2 cursor-pointer">
                                            {fromToken.symbol}
                                        </h4>
                                        <img src={dropdown} alt="icon" />
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="0.00"
                                        value={fromAmount}
                                        onChange={(e) => {
                                            quateSwap(e);
                                        }}
                                        style={{ width: "50%" }}
                                    />
                                </div>
                                <label className="flex flex-row pt-2 text-gray-400">
                                    {/* <h3>BNB</h3> */}
                                    {/* <h3 className="items-end ml-auto right-0">~$0</h3> */}
                                </label>
                            </div>
                            <div className="btm">
                                <button style={{ marginLeft: "45%" }} onClick={() => rotateSwap()} className="mx-auto"><img src={arrowdown} className=" w-8 m-5" /></button>
                            </div>
                            <div className="border-2 p-6 ">
                                <label className="flex flex-row text-gray-400">
                                    <h3>To</h3>
                                    <h3 className="items-end ml-auto right-0">
                                        Balance : {parseFloat(toBalance).toFixed(10)}
                                    </h3>
                                </label>

                                <label
                                    onClick={() => setToModal(true)}
                                    className="flex flex-row pt-1 pb-3 text-3xl font-bold text-black"
                                >
                                    <img src={toToken.logo} className="img" alt="icon" />
                                    <h3 className="pl-2 pr-2 cursor-pointer">{toToken.symbol}</h3>
                                    <img src={dropdown} alt="icon" />
                                </label>

                                <div className="border-2 p-2">
                                    <label className="flex flex-row text-3xl font-bold text-black">
                                        {/* <h3 className="text-xl">Neura</h3> */}
                                        <h3 className="items-end ml-auto right-0 text-xl">
                                            {parseFloat(toAmount).toFixed(9)}
                                        </h3>
                                    </label>

                                    {/* <label className="flex flex-row text-gray-400">
                  <p>Tx cost 0 BNB (~$0)</p>
                </label> */}
                                </div>

                                {/* <div className="border-2 p-2 mt-3">
                <label className="flex flex-row text-3xl font-bold text-black">
                  <h3 className="text-xl">-/-</h3>
                  <h3 className="items-end ml-auto right-0 text-xl">0</h3>
                </label>

                <label className="flex flex-row text-gray-400">
                  <p>Tx cost 0 BNB (~$0)</p>
                </label>
              </div> */}
                            </div>
                        </div>
                        <div className="tolerence p-4">
                            <div className="label">Slippage Tolerance</div>
                            <div className="label-per">{slippage}%</div>
                        </div>

                        {!isBscNetwork ? <button
                            onClick={() => switchNetwork()}
                            className="w-full items-center text-center mt-6 mb-3 flex justify-center py-3 font-semibold rounded bg-primary text-white"
                        >
                            {loading ? "loading.." : "Swich to BSC network"}
                        </button> : !swapActive ? (
                            <button
                                disabled={true}
                                className="w-full items-center text-center mt-6 mb-3 flex justify-center py-3 font-semibold rounded bg-primary text-white"
                            >
                                {loading ? "Please wait, Loading.." : "Enter an amount"}
                            </button>
                        ) : isAllowance ? (
                            <button
                                disabled={loading}
                                onClick={() => approve()}
                                className="w-full items-center text-center mt-6 mb-3 flex justify-center py-3 font-semibold rounded bg-primary text-white"
                            >
                                {loading ? "Please wait, Loading.." : "Enable"}
                            </button>
                        ) : (
                            <button
                                disabled={loading}
                                onClick={() => estimateSwap()}
                                className="w-full items-center text-center mt-6 mb-3 flex justify-center py-3 font-semibold rounded bg-primary text-white"
                            >
                                {loading ? "Please wait, Loading.." : "Swap"}
                            </button>
                        )}

                    </div>
                </div>

                {/* <div className="w-1/2 mx-auto px-24 mt-6">
        <label className="flex flex-row text-primary">
          <h3>Rate</h3>
          <h3 className="items-end ml-auto right-0">1 BUSD = 0 BNB (~$0)</h3>
        </label>

        <label className="flex flex-row text-primary">
          <h3>Route</h3>
          <img src={tag} className="pl-2 ml-auto" alt="" />
        </label>
      </div> */}
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
                <ToastContainer />
                {/* {isWarn && <WarnToken setIsWarn={setIsWarn} setIsOpen={setIsOpen} />} */}
            </>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={`${styles.swapContainer} ${!slippageBox && !swapSelect ? styles.swapContainerActive : ''}`}>
                        <CornerDecor/>
                        <div className={styles.swapTtl}>Swap</div>
                        <div className={styles.swapSelectTtl}>
                            from
                        </div>
                        <div
                            className={styles.swapSelect}

                        >
                            <div
                                className={styles.swapSelectBtn}
                                onClick={() => {
                                    setSwapSelect(true);
                                }}
                            >
                                <div className={styles.swapSelectBtnTop}>
                                    <img  src={`/images/icons/bnb.png`} alt='icon'/>
                                    <span>ETH</span>
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1.19727L4.5303 3.66696C4.23864 3.95863 3.76136 3.95863 3.4697 3.66696L1 1.19727" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <span>Ethereum</span>
                            </div>
                            <div className={styles.swapSelectBtnNums}>
                                <input type="number" placeholder={0} dir="rtl"/>
                                <span>~$3,182.17</span>
                            </div>
                        </div>
                        <div className={styles.swapReverse}>
                            <div className={styles.swapReverseBtn}>
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.24023 1.63293L13.0005 5.38574" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.24023 14.3672L9.24023 1.63311" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.7603 14.3672L1 10.6144" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.75977 1.63311L4.75977 14.3672" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.swapSelectTtl}>
                            To
                        </div>
                        <div
                            className={styles.swapSelect}
                        >
                            <div
                                className={styles.swapSelectBtn}
                                onClick={() => {
                                    setSwapSelect(true);
                                }}
                            >
                                <div className={styles.swapSelectBtnTop}>
                                    <img  src={`/images/icons/bnb.png`} alt='icon'/>
                                    <span>CMCX</span>
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 1.19727L4.5303 3.66696C4.23864 3.95863 3.76136 3.95863 3.4697 3.66696L1 1.19727" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <span>Core Multichain</span>
                            </div>
                            <div className={styles.swapSelectBtnNums}>
                                <input type="number" placeholder={0} dir="rtl"/>
                                <span>~$3,182.17</span>
                            </div>
                        </div>
                        <div className={styles.swapDescription} style={{marginTop: '10px'}}>
                            Slippage Tolerance
                            <span>0.5%</span>
                        </div>
                        <div className={styles.swapConnect}>
                            Connect Wallet
                        </div>
                        <div className={styles.swapDescription}>
                            Price per
                            <div style={{color:'#fff'}}>0.0027 USDT</div>
                        </div>
                        <div className={styles.swapDescription}>
                            Slippage
                            <div
                                className={styles.swapDescriptionBtn}
                                onClick={() => {
                                    setSlippageBox(true);
                                }}
                            >
                                Auto
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99318 10.9423C6.45415 10.9423 5.20508 9.62346 5.20508 7.99848C5.20508 6.37351 6.45415 5.05469 7.99318 5.05469C9.53222 5.05469 10.7813 6.37351 10.7813 7.99848C10.7813 9.62346 9.53222 10.9423 7.99318 10.9423ZM7.99318 6.2322C7.07125 6.2322 6.32032 7.02507 6.32032 7.99848C6.32032 8.9719 7.07125 9.76476 7.99318 9.76476C8.91512 9.76476 9.66604 8.9719 9.66604 7.99848C9.66604 7.02507 8.91512 6.2322 7.99318 6.2322Z" fill="#0500FF"/>
                                    <path d="M10.3792 15.9968C10.223 15.9968 10.0669 15.9732 9.91078 15.934C9.44981 15.8005 9.0632 15.4944 8.81784 15.0626L8.72862 14.9056C8.28996 14.1049 7.68773 14.1049 7.24907 14.9056L7.16729 15.0548C6.92193 15.4944 6.53532 15.8084 6.07435 15.934C5.60595 16.0674 5.12268 15.9968 4.71375 15.7377L3.43494 14.9606C3.21024 14.8246 3.01313 14.6433 2.85487 14.4268C2.69662 14.2104 2.58033 13.9631 2.51266 13.6992C2.44499 13.4353 2.42726 13.1598 2.46049 12.8887C2.49372 12.6175 2.57725 12.3559 2.70632 12.1188C2.92193 11.7185 2.98141 11.3574 2.85502 11.1297C2.72862 10.9021 2.40892 10.7686 1.97026 10.7686C0.884758 10.7686 0 9.83446 0 8.68834V7.30672C0 6.1606 0.884758 5.22644 1.97026 5.22644C2.40892 5.22644 2.72862 5.09299 2.85502 4.86533C2.98141 4.63768 2.92937 4.27658 2.70632 3.87622C2.4461 3.39736 2.37918 2.83215 2.51301 2.29835C2.64684 1.75669 2.97398 1.30923 3.43494 1.03448L4.72119 0.257316C5.56134 -0.268642 6.66914 0.0375128 7.17472 0.940276L7.26394 1.09728C7.7026 1.89799 8.30483 1.89799 8.74349 1.09728L8.82528 0.948126C9.33085 0.0375128 10.4387 -0.268642 11.2862 0.265166L12.5651 1.04233C12.7898 1.17827 12.9869 1.35964 13.1451 1.57608C13.3034 1.79252 13.4197 2.03978 13.4873 2.30371C13.555 2.56764 13.5727 2.84307 13.5395 3.11424C13.5063 3.38542 13.4227 3.64701 13.2937 3.88407C13.0781 4.28443 13.0186 4.64553 13.145 4.87318C13.2714 5.10084 13.5911 5.23429 14.0297 5.23429C15.1152 5.23429 16 6.16845 16 7.31457V8.69619C16 9.84231 15.1152 10.7765 14.0297 10.7765C13.5911 10.7765 13.2714 10.9099 13.145 11.1376C13.0186 11.3652 13.0706 11.7263 13.2937 12.1267C13.5539 12.6055 13.6283 13.1708 13.487 13.7046C13.4224 13.9702 13.3073 14.2191 13.1488 14.4364C12.9904 14.6536 12.7918 14.8346 12.5651 14.9684L11.2788 15.7456C10.9963 15.9104 10.6914 15.9968 10.3792 15.9968ZM7.99256 13.0923C8.65427 13.0923 9.27137 13.5319 9.69517 14.309L9.77695 14.4582C9.86617 14.623 10.0149 14.7408 10.1933 14.7879C10.3717 14.835 10.5502 14.8114 10.6989 14.7172L11.9851 13.9322C12.1814 13.8127 12.3251 13.6162 12.385 13.3854C12.4448 13.1546 12.416 12.9082 12.3048 12.6997C11.881 11.9304 11.829 11.1376 12.1561 10.5331C12.4833 9.92866 13.1599 9.58325 14.0074 9.58325C14.4833 9.58325 14.8625 9.1829 14.8625 8.68049V7.29887C14.8625 6.80431 14.4833 6.39611 14.0074 6.39611C13.1599 6.39611 12.4833 6.0507 12.1561 5.44624C11.829 4.84178 11.881 4.04892 12.3048 3.27961C12.4164 3.07551 12.4461 2.83215 12.3866 2.59665C12.3271 2.36115 12.1859 2.17274 11.9926 2.04714L10.7063 1.26998C10.6287 1.22194 10.5429 1.19053 10.4538 1.17755C10.3647 1.16457 10.274 1.17028 10.187 1.19434C10.1 1.2184 10.0183 1.26035 9.9467 1.31778C9.87506 1.37521 9.81485 1.447 9.76952 1.52903L9.68773 1.67819C9.26394 2.45535 8.64684 2.89495 7.98513 2.89495C7.32342 2.89495 6.70632 2.45535 6.28253 1.67819L6.20074 1.52118C6.10835 1.36075 5.9603 1.24473 5.78811 1.19782C5.61592 1.1509 5.43319 1.17679 5.27881 1.26998L3.99256 2.05499C3.79627 2.17455 3.65258 2.37105 3.59271 2.60182C3.53285 2.83259 3.56165 3.07898 3.67286 3.28746C4.09665 4.05677 4.1487 4.84963 3.82156 5.45409C3.49442 6.05855 2.81784 6.40396 1.97026 6.40396C1.49442 6.40396 1.11524 6.80431 1.11524 7.30672V8.68834C1.11524 9.1829 1.49442 9.5911 1.97026 9.5911C2.81784 9.5911 3.49442 9.93651 3.82156 10.541C4.1487 11.1454 4.09665 11.9383 3.67286 12.7076C3.56134 12.9117 3.5316 13.1551 3.59108 13.3906C3.65056 13.6261 3.79182 13.8145 3.98513 13.9401L5.27138 14.7172C5.42751 14.8193 5.61338 14.8428 5.78439 14.7957C5.96282 14.7486 6.11152 14.623 6.20818 14.4582L6.28996 14.309C6.71375 13.5397 7.33085 13.0923 7.99256 13.0923Z" fill="#0500FF"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.swapContainerModal} ${slippageBox && tab === 0 ? styles.swapContainerActive : ''}`}>
                        <CornerDecor/>
                        <div className={styles.swapContainerModalTtl}>
                            <svg
                                width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                    setSlippageBox(false);
                                }}
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M-2.18557e-07 5C-2.28619e-07 4.76981 0.0962057 4.54905 0.267454 4.38628L4.61474 0.254214C4.97134 -0.084737 5.54951 -0.0847371 5.90612 0.254214C6.26272 0.593164 6.26272 1.14271 5.90612 1.48166L2.20452 5L5.90612 8.51834C6.26272 8.85729 6.26272 9.40684 5.90612 9.74579C5.54951 10.0847 4.97134 10.0847 4.61474 9.74579L0.267453 5.61372C0.0962058 5.45095 -2.08495e-07 5.23019 -2.18557e-07 5Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.121094 5.00023C0.121094 4.52088 0.529922 4.13229 1.03424 4.13229L13.0877 4.13229C13.5921 4.13229 14.0009 4.52088 14.0009 5.00023C14.0009 5.47957 13.5921 5.86816 13.0877 5.86816L1.03424 5.86816C0.529922 5.86816 0.121094 5.47958 0.121094 5.00023Z" fill="white"/>
                            </svg>
                            Set Slippage
                        </div>
                        <input type="number"  placeholder={'%'} className={styles.swapContainerModalInput}/>
                        <div className={`${styles.swapContainerModalBtn} ${styles.swapContainerModalBtnBlue}`}>
                            Set Custom
                        </div>
                        <div className={`${styles.swapContainerModalBtn} ${styles.swapContainerModalBtnBordered}`}>
                            Set Auto
                        </div>
                    </div>
                    <div className={`${styles.swapContainerModal} ${swapSelect && tab === 0 ? styles.swapContainerActive : ''}`}>
                        <CornerDecor/>
                        <div className={styles.swapContainerModalTtl}>
                            <svg
                                width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                    setSwapSelect(false);
                                }}
                            >
                                <path fillRule="evenodd" clipRule="evenodd" d="M-2.18557e-07 5C-2.28619e-07 4.76981 0.0962057 4.54905 0.267454 4.38628L4.61474 0.254214C4.97134 -0.084737 5.54951 -0.0847371 5.90612 0.254214C6.26272 0.593164 6.26272 1.14271 5.90612 1.48166L2.20452 5L5.90612 8.51834C6.26272 8.85729 6.26272 9.40684 5.90612 9.74579C5.54951 10.0847 4.97134 10.0847 4.61474 9.74579L0.267453 5.61372C0.0962058 5.45095 -2.08495e-07 5.23019 -2.18557e-07 5Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.121094 5.00023C0.121094 4.52088 0.529922 4.13229 1.03424 4.13229L13.0877 4.13229C13.5921 4.13229 14.0009 4.52088 14.0009 5.00023C14.0009 5.47957 13.5921 5.86816 13.0877 5.86816L1.03424 5.86816C0.529922 5.86816 0.121094 5.47958 0.121094 5.00023Z" fill="white"/>
                            </svg>
                            Select a token
                        </div>
                        <input type="number"  placeholder={'Search name or paste token address'} className={styles.swapContainerModalInput}/>
                        <div className={styles.swapContainerTokens}>
                            <div className={styles.swapContainerToken}>
                                <div className={styles.swapSelectBtnTop}>
                                    <img  src={`/images/icons/bnb.png`} alt='icon'/>
                                    ETH
                                </div>
                                <span>
                                Ether
                            </span>
                            </div>
                            <div className={styles.swapContainerToken}>
                                <div className={styles.swapSelectBtnTop}>
                                    <img  src={`/images/icons/bnb.png`} alt='icon'/>
                                    ETH
                                </div>
                                <span>
                                Ether
                            </span>
                            </div>
                            <div className={styles.swapContainerToken}>
                                <div className={styles.swapSelectBtnTop}>
                                    <img  src={`/images/icons/bnb.png`} alt='icon'/>
                                    ETH
                                </div>
                                <span>
                                Ether
                            </span>
                            </div>
                            <div className={styles.swapContainerToken}>
                                <div className={styles.swapSelectBtnTop}>
                                    <img  src={`/images/icons/bnb.png`} alt='icon'/>
                                    ETH
                                </div>
                                <span>
                                Ether
                            </span>
                            </div>
                            <div className={styles.swapContainerToken}>
                                <div className={styles.swapSelectBtnTop}>
                                    <img  src={`/images/icons/bnb.png`} alt='icon'/>
                                    ETH
                                </div>
                                <span>
                                Ether
                            </span>
                            </div>
                            <div className={styles.swapContainerToken}>
                                <div className={styles.swapSelectBtnTop}>
                                    <img  src={`/images/icons/bnb.png`} alt='icon'/>
                                    ETH
                                </div>
                                <span>
                                Ether
                            </span>
                            </div>
                            <div className={styles.swapContainerToken}>
                                <div className={styles.swapSelectBtnTop}>
                                    <img  src={`/images/icons/bnb.png`} alt='icon'/>
                                    ETH
                                </div>
                                <span>
                                Ether
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.poolContainer} ${tab === 1 ? styles.swapContainerActive : ''}`}>
                        <div className={styles.poolContainerTop}>
                            <CornerDecor/>
                            <div className={styles.swapTtl}>UNISWAP V3 POOL INFO</div>
                            <div className={styles.swapDescription}>
                                Total liquidity:
                                <div style={{color:'#fff'}}>$132.54M</div>
                            </div>
                            <div className={styles.swapDescription}>
                                24h volume:
                                <div style={{color:'#fff'}}>$65.39M</div>
                            </div>
                            <div className={styles.swapDescription}>
                                Market Cap:
                                <div style={{color:'#fff'}}>$65.95B</div>
                            </div>
                            <div className={styles.swapDescription}>
                                Holders:
                                <div style={{color:'#fff'}}>4.59M</div>
                            </div>
                            <div className={styles.swapDescription}>
                                Total tx:
                                <div style={{color:'#fff'}}>4.59M</div>
                            </div>
                            <div className={styles.swapDescription}>
                                Circ. Supply:
                                <div style={{color:'#fff'}}>105.97M CORE</div>
                            </div>
                            <div className={styles.swapDescription}>
                                Total Supply:
                                <div style={{color:'#fff'}}>105.97M CORE</div>
                            </div>
                            <div className={styles.swapDescription}>
                                Pool created:
                                <div style={{color:'#fff'}}>105.97M CORE</div>
                            </div>
                            <div className={styles.swapDescription}>
                                % Pooled CORE:
                                <div style={{color:'#fff'}}>4.27%</div>
                            </div>
                            <div className={styles.swapDescription}>
                                1 CMCX:
                                <div style={{color:'#fff'}}>8.32K CORE</div>
                            </div>
                        </div>
                        <div className={styles.poolContainerBottom}>
                            <CornerDecor/>
                            <div className={styles.poolContainerBottomTtl}>COREscore</div>
                            <div className={styles.poolContainerBottomSub}>
                                <Tooltip
                                    title={'Contract Details'}
                                    type={'pool'}
                                    text={
                                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                                    }
                                />
                            </div>
                            <div className={styles.poolDetails}>
                                <div className={styles.poolDetailsHalf}>
                                    <div className={`${styles.poolDetail} ${styles.disabled}`}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 0C4.81331 0 3.65328 0.351894 2.66658 1.01118C1.67989 1.67047 0.910851 2.60754 0.456726 3.7039C0.00259972 4.80026 -0.11622 6.00666 0.115291 7.17054C0.346802 8.33443 0.918247 9.40353 1.75736 10.2426C2.59648 11.0818 3.66558 11.6532 4.82946 11.8847C5.99335 12.1162 7.19975 11.9974 8.2961 11.5433C9.39246 11.0892 10.3295 10.3201 10.9888 9.33342C11.6481 8.34673 12 7.18669 12 6C11.9983 4.40923 11.3656 2.88411 10.2407 1.75926C9.1159 0.634414 7.59077 0.00172054 6 0V0ZM6 11C5.0111 11 4.0444 10.7068 3.22215 10.1573C2.39991 9.60794 1.75904 8.82705 1.38061 7.91342C1.00217 6.99979 0.90315 5.99445 1.09608 5.02455C1.289 4.05464 1.76521 3.16373 2.46447 2.46447C3.16373 1.7652 4.05465 1.289 5.02455 1.09607C5.99446 0.903148 6.99979 1.00216 7.91342 1.3806C8.82705 1.75904 9.60794 2.3999 10.1574 3.22215C10.7068 4.04439 11 5.01109 11 6C10.9985 7.32564 10.4713 8.59656 9.53393 9.53393C8.59656 10.4713 7.32564 10.9985 6 11ZM8.5 6C8.5 6.13261 8.44732 6.25979 8.35356 6.35355C8.25979 6.44732 8.13261 6.5 8 6.5H6.5V8C6.5 8.13261 6.44732 8.25979 6.35356 8.35355C6.25979 8.44732 6.13261 8.5 6 8.5C5.86739 8.5 5.74022 8.44732 5.64645 8.35355C5.55268 8.25979 5.5 8.13261 5.5 8V6.5H4C3.86739 6.5 3.74022 6.44732 3.64645 6.35355C3.55268 6.25979 3.5 6.13261 3.5 6C3.5 5.86739 3.55268 5.74022 3.64645 5.64645C3.74022 5.55268 3.86739 5.5 4 5.5H5.5V4C5.5 3.86739 5.55268 3.74022 5.64645 3.64645C5.74022 3.55268 5.86739 3.5 6 3.5C6.13261 3.5 6.25979 3.55268 6.35356 3.64645C6.44732 3.74022 6.5 3.86739 6.5 4V5.5H8C8.13261 5.5 8.25979 5.55268 8.35356 5.64645C8.44732 5.74022 8.5 5.86739 8.5 6Z" fill="white"/>
                                        </svg>
                                        Mint
                                    </div>
                                    <div className={`${styles.poolDetail}`}>
                                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 4.212V3.5C8.5 2.57174 8.13125 1.6815 7.47487 1.02513C6.8185 0.368749 5.92826 0 5 0C4.07174 0 3.1815 0.368749 2.52513 1.02513C1.86875 1.6815 1.5 2.57174 1.5 3.5V4.212C1.05468 4.40635 0.675646 4.72626 0.40925 5.13261C0.142853 5.53895 0.000639188 6.01412 0 6.5V9.5C0.000793929 10.1628 0.264441 10.7982 0.73311 11.2669C1.20178 11.7356 1.8372 11.9992 2.5 12H7.5C8.1628 11.9992 8.79822 11.7356 9.26689 11.2669C9.73556 10.7982 9.99921 10.1628 10 9.5V6.5C9.99936 6.01412 9.85715 5.53895 9.59075 5.13261C9.32435 4.72626 8.94532 4.40635 8.5 4.212ZM2.5 3.5C2.5 2.83696 2.76339 2.20107 3.23223 1.73223C3.70107 1.26339 4.33696 1 5 1C5.66304 1 6.29893 1.26339 6.76777 1.73223C7.23661 2.20107 7.5 2.83696 7.5 3.5V4H2.5V3.5ZM9 9.5C9 9.89782 8.84196 10.2794 8.56066 10.5607C8.27936 10.842 7.89782 11 7.5 11H2.5C2.10218 11 1.72064 10.842 1.43934 10.5607C1.15804 10.2794 1 9.89782 1 9.5V6.5C1 6.10218 1.15804 5.72064 1.43934 5.43934C1.72064 5.15804 2.10218 5 2.5 5H7.5C7.89782 5 8.27936 5.15804 8.56066 5.43934C8.84196 5.72064 9 6.10218 9 6.5V9.5Z" fill="white"/>
                                            <path d="M5 7C4.86739 7 4.74022 7.05268 4.64645 7.14645C4.55268 7.24021 4.5 7.36739 4.5 7.5V8.5C4.5 8.63261 4.55268 8.75978 4.64645 8.85355C4.74022 8.94732 4.86739 9 5 9C5.13261 9 5.25979 8.94732 5.35356 8.85355C5.44733 8.75978 5.50001 8.63261 5.50001 8.5V7.5C5.50001 7.36739 5.44733 7.24021 5.35356 7.14645C5.25979 7.05268 5.13261 7 5 7Z" fill="white"/>
                                        </svg>
                                        Tx Lock
                                    </div>
                                    <div className={`${styles.poolDetail}`}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.2633 2.10894L7.24983 0.368937C6.86953 0.150248 6.43852 0.0351562 5.99983 0.0351562C5.56114 0.0351562 5.13012 0.150248 4.74983 0.368937L1.73633 2.10894C1.35677 2.32889 1.04156 2.6446 0.822215 3.02451C0.602865 3.40443 0.487046 3.83525 0.486328 4.27394V7.75394C0.487059 8.19269 0.602879 8.62358 0.822224 9.00357C1.04157 9.38356 1.35676 9.69936 1.73633 9.91944L4.74983 11.6589C5.13007 11.8778 5.56111 11.9929 5.99983 11.9929C6.43855 11.9929 6.86958 11.8778 7.24983 11.6589L10.2633 9.91944C10.6429 9.69936 10.9581 9.38356 11.1774 9.00357C11.3968 8.62358 11.5126 8.19269 11.5133 7.75394V4.27394C11.5126 3.83525 11.3968 3.40443 11.1774 3.02451C10.9581 2.6446 10.6429 2.32889 10.2633 2.10894ZM5.24983 1.23544C5.47786 1.10378 5.73652 1.03447 5.99983 1.03447C6.26313 1.03447 6.5218 1.10378 6.74983 1.23544L9.76333 2.97494C9.83974 3.02324 9.91154 3.07847 9.97783 3.13994L6.88133 4.92744C6.61325 5.08198 6.30926 5.16332 5.99983 5.16332C5.6904 5.16332 5.3864 5.08198 5.11833 4.92744L2.02183 3.13994C2.08811 3.07847 2.15991 3.02324 2.23633 2.97494L5.24983 1.23544ZM2.23633 9.05294C2.00843 8.92089 1.8192 8.73132 1.68758 8.50317C1.55596 8.27503 1.48656 8.01632 1.48633 7.75294V4.27394C1.4898 4.18386 1.50169 4.0943 1.52183 4.00644L4.61833 5.79394C4.8918 5.9495 5.18997 6.05689 5.49983 6.11144V10.8959C5.41346 10.8695 5.32976 10.835 5.24983 10.7929L2.23633 9.05294ZM10.5133 7.75294C10.5131 8.01632 10.4437 8.27503 10.3121 8.50317C10.1805 8.73132 9.99123 8.92089 9.76333 9.05294L6.74983 10.7929C6.6699 10.835 6.5862 10.8695 6.49983 10.8959V6.11144C6.80968 6.05689 7.10786 5.9495 7.38133 5.79394L10.4778 4.00644C10.498 4.0943 10.5099 4.18386 10.5133 4.27394V7.75294Z" fill="white"/>
                                        </svg>
                                        Proxy
                                    </div>
                                    <div className={`${styles.poolDetail}`}>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 8H2.5C1.8372 7.99921 1.20178 7.73556 0.73311 7.26689C0.264441 6.79822 0.000793929 6.1628 0 5.5L0 2.5C0.000793929 1.8372 0.264441 1.20178 0.73311 0.73311C1.20178 0.264441 1.8372 0.000793929 2.5 0H9.5C10.1628 0.000793929 10.7982 0.264441 11.2669 0.73311C11.7356 1.20178 11.9992 1.8372 12 2.5V5.5C11.9992 6.1628 11.7356 6.79822 11.2669 7.26689C10.7982 7.73556 10.1628 7.99921 9.5 8ZM2.5 1C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V5.5C1 5.89782 1.15804 6.27936 1.43934 6.56066C1.72064 6.84196 2.10218 7 2.5 7H9.5C9.89782 7 10.2794 6.84196 10.5607 6.56066C10.842 6.27936 11 5.89782 11 5.5V2.5C11 2.10218 10.842 1.72064 10.5607 1.43934C10.2794 1.15804 9.89782 1 9.5 1H2.5ZM6 6C5.60444 6 5.21776 5.8827 4.88886 5.66294C4.55996 5.44318 4.30362 5.13082 4.15224 4.76537C4.00087 4.39991 3.96126 3.99778 4.03843 3.60982C4.1156 3.22186 4.30608 2.86549 4.58579 2.58579C4.86549 2.30608 5.22186 2.1156 5.60982 2.03843C5.99778 1.96126 6.39991 2.00087 6.76537 2.15224C7.13082 2.30362 7.44318 2.55996 7.66294 2.88886C7.8827 3.21776 8 3.60444 8 4C8 4.53043 7.78929 5.03914 7.41421 5.41421C7.03914 5.78929 6.53043 6 6 6ZM6 3C5.80222 3 5.60888 3.05865 5.44443 3.16853C5.27998 3.27841 5.15181 3.43459 5.07612 3.61732C5.00043 3.80004 4.98063 4.00111 5.01921 4.19509C5.0578 4.38907 5.15304 4.56725 5.29289 4.70711C5.43275 4.84696 5.61093 4.9422 5.80491 4.98079C5.99889 5.01937 6.19996 4.99957 6.38268 4.92388C6.56541 4.84819 6.72159 4.72002 6.83147 4.55557C6.94135 4.39112 7 4.19778 7 4C7 3.73478 6.89464 3.48043 6.70711 3.29289C6.51957 3.10536 6.26522 3 6 3ZM2.5 2C2.40111 2 2.30444 2.02932 2.22221 2.08427C2.13999 2.13921 2.0759 2.2173 2.03806 2.30866C2.00022 2.40002 1.99031 2.50055 2.00961 2.59755C2.0289 2.69454 2.07652 2.78363 2.14645 2.85355C2.21637 2.92348 2.30546 2.9711 2.40245 2.99039C2.49945 3.00969 2.59998 2.99978 2.69134 2.96194C2.7827 2.9241 2.86079 2.86001 2.91573 2.77779C2.97068 2.69556 3 2.59889 3 2.5C3 2.36739 2.94732 2.24021 2.85355 2.14645C2.75979 2.05268 2.63261 2 2.5 2ZM9 2.5C9 2.59889 9.02932 2.69556 9.08426 2.77779C9.13921 2.86001 9.2173 2.9241 9.30866 2.96194C9.40002 2.99978 9.50056 3.00969 9.59755 2.99039C9.69454 2.9711 9.78363 2.92348 9.85355 2.85355C9.92348 2.78363 9.9711 2.69454 9.99039 2.59755C10.0097 2.50055 9.99978 2.40002 9.96194 2.30866C9.9241 2.2173 9.86001 2.13921 9.77779 2.08427C9.69556 2.02932 9.59889 2 9.5 2C9.36739 2 9.24021 2.05268 9.14645 2.14645C9.05268 2.24021 9 2.36739 9 2.5ZM2.5 5C2.40111 5 2.30444 5.02932 2.22221 5.08427C2.13999 5.13921 2.0759 5.2173 2.03806 5.30866C2.00022 5.40002 1.99031 5.50055 2.00961 5.59755C2.0289 5.69454 2.07652 5.78363 2.14645 5.85355C2.21637 5.92348 2.30546 5.9711 2.40245 5.99039C2.49945 6.00969 2.59998 5.99978 2.69134 5.96194C2.7827 5.9241 2.86079 5.86001 2.91573 5.77779C2.97068 5.69556 3 5.59889 3 5.5C3 5.36739 2.94732 5.24021 2.85355 5.14645C2.75979 5.05268 2.63261 5 2.5 5ZM9 5.5C9 5.59889 9.02932 5.69556 9.08426 5.77779C9.13921 5.86001 9.2173 5.9241 9.30866 5.96194C9.40002 5.99978 9.50056 6.00969 9.59755 5.99039C9.69454 5.9711 9.78363 5.92348 9.85355 5.85355C9.92348 5.78363 9.9711 5.69454 9.99039 5.59755C10.0097 5.50055 9.99978 5.40002 9.96194 5.30866C9.9241 5.2173 9.86001 5.13921 9.77779 5.08427C9.69556 5.02932 9.59889 5 9.5 5C9.36739 5 9.24021 5.05268 9.14645 5.14645C9.05268 5.24021 9 5.36739 9 5.5Z" fill="white"/>
                                        </svg>
                                        Fees
                                    </div>
                                </div>
                                <div className={styles.poolDetailsHalf}>
                                    <div>
                                        Scan on:
                                    </div>
                                    <a href="##" target='_blank' className={styles.poolDetailsLink}>
                                        Honeypot.is
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.3918 0.596877C11.6208 0.81758 11.6243 1.17888 11.3997 1.40386L6.95605 5.85592C6.73149 6.08091 6.36387 6.08438 6.13496 5.86367C5.90605 5.64297 5.90252 5.28167 6.12707 5.05669L10.5708 0.604627C10.7953 0.379644 11.1629 0.376175 11.3918 0.596877Z" fill="#0500FF"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.23828 0.57065C8.23828 0.255489 8.49823 0 8.8189 0H11.4201C11.7407 0 12.0007 0.255489 12.0007 0.57065V3.17674C12.0007 3.4919 11.7407 3.74739 11.4201 3.74739C11.0994 3.74739 10.8395 3.4919 10.8395 3.17674V1.1413H8.8189C8.49823 1.1413 8.23828 0.885812 8.23828 0.57065Z" fill="#0500FF"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.04675 1.0533C1.81834 0.280258 2.95956 0 4.37402 0H5.45785C5.77852 0 6.03847 0.255489 6.03847 0.57065C6.03847 0.885812 5.77852 1.1413 5.45785 1.1413H4.37402C3.07891 1.1413 2.32343 1.40398 1.87572 1.85254C1.42529 2.30382 1.16124 3.06786 1.16124 4.37119V7.62881C1.16124 8.93214 1.42529 9.69618 1.87572 10.1475C2.32343 10.596 3.07891 10.8587 4.37402 10.8587H7.62551C8.92062 10.8587 9.67609 10.596 10.1238 10.1475C10.5742 9.69618 10.8383 8.93214 10.8383 7.62881V6.54294C10.8383 6.22777 11.0982 5.97229 11.4189 5.97229C11.7396 5.97229 11.9995 6.22777 11.9995 6.54294V7.62881C11.9995 9.04014 11.7217 10.1764 10.9528 10.9467C10.1812 11.7197 9.03996 12 7.62551 12H4.37402C2.95956 12 1.81834 11.7197 1.04675 10.9467C0.277873 10.1764 0 9.04014 0 7.62881V4.37119C0 2.95986 0.277873 1.82362 1.04675 1.0533Z" fill="#0500FF"/>
                                        </svg>
                                    </a>
                                    <a href="##" target='_blank' className={styles.poolDetailsLink}>
                                        TokenSniffer
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.3918 0.596877C11.6208 0.81758 11.6243 1.17888 11.3997 1.40386L6.95605 5.85592C6.73149 6.08091 6.36387 6.08438 6.13496 5.86367C5.90605 5.64297 5.90252 5.28167 6.12707 5.05669L10.5708 0.604627C10.7953 0.379644 11.1629 0.376175 11.3918 0.596877Z" fill="#0500FF"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.23828 0.57065C8.23828 0.255489 8.49823 0 8.8189 0H11.4201C11.7407 0 12.0007 0.255489 12.0007 0.57065V3.17674C12.0007 3.4919 11.7407 3.74739 11.4201 3.74739C11.0994 3.74739 10.8395 3.4919 10.8395 3.17674V1.1413H8.8189C8.49823 1.1413 8.23828 0.885812 8.23828 0.57065Z" fill="#0500FF"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.04675 1.0533C1.81834 0.280258 2.95956 0 4.37402 0H5.45785C5.77852 0 6.03847 0.255489 6.03847 0.57065C6.03847 0.885812 5.77852 1.1413 5.45785 1.1413H4.37402C3.07891 1.1413 2.32343 1.40398 1.87572 1.85254C1.42529 2.30382 1.16124 3.06786 1.16124 4.37119V7.62881C1.16124 8.93214 1.42529 9.69618 1.87572 10.1475C2.32343 10.596 3.07891 10.8587 4.37402 10.8587H7.62551C8.92062 10.8587 9.67609 10.596 10.1238 10.1475C10.5742 9.69618 10.8383 8.93214 10.8383 7.62881V6.54294C10.8383 6.22777 11.0982 5.97229 11.4189 5.97229C11.7396 5.97229 11.9995 6.22777 11.9995 6.54294V7.62881C11.9995 9.04014 11.7217 10.1764 10.9528 10.9467C10.1812 11.7197 9.03996 12 7.62551 12H4.37402C2.95956 12 1.81834 11.7197 1.04675 10.9467C0.277873 10.1764 0 9.04014 0 7.62881V4.37119C0 2.95986 0.277873 1.82362 1.04675 1.0533Z" fill="#0500FF"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className={styles.poolContainerBottomSub}>
                                <Tooltip
                                    title={'COMMUNITY TRUST (1151 votes)'}
                                    type={'pool'}
                                    text={
                                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                                    }
                                />
                            </div>
                            <div className={styles.poolProgressContainer}>
                                <div className={styles.poolProgressTtl}>
                                    <div style={{color: '#66BB6A'}}>
                                        <svg style={{marginRight: '5px'}} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.35403 0.362232C9.16923 0.638949 9.72685 1.53202 9.54569 2.39175L9.21519 4.50696C9.20259 4.59954 9.22978 4.65059 9.25383 4.67784C9.28171 4.70945 9.32734 4.73365 9.38724 4.73365H12.0539C12.6892 4.73365 13.249 4.99128 13.5898 5.45372C13.9317 5.91773 14.0069 6.52604 13.7937 7.1288L12.2008 11.9738C12.0636 12.5006 11.7186 12.9364 11.3075 13.2372C10.8919 13.5413 10.3738 13.7337 9.85391 13.7337H7.32057C7.07228 13.7337 6.77609 13.6933 6.49988 13.6144C6.24603 13.5419 5.94654 13.4193 5.7263 13.2124L3.68115 11.629L4.29333 10.8383L6.38505 12.4577L6.40746 12.4801C6.45189 12.5245 6.5719 12.595 6.7746 12.6529C6.96506 12.7073 7.16886 12.7337 7.32057 12.7337H9.85391C10.1341 12.7337 10.4493 12.626 10.717 12.4301C10.9844 12.2345 11.1693 11.9771 11.2355 11.7124L11.2399 11.6948L12.8476 6.8048L12.8497 6.79882C12.967 6.47032 12.9083 6.21462 12.7847 6.04692C12.6588 5.87603 12.4186 5.73365 12.0539 5.73365H9.38724C8.69168 5.73365 8.11468 5.13939 8.2256 4.36294L8.22653 4.35646L8.56236 2.2074L8.56581 2.19186C8.6396 1.85984 8.40382 1.43289 8.02913 1.308L8.02035 1.30507L8.01168 1.30182C7.87636 1.25108 7.69853 1.25224 7.51645 1.31483C7.331 1.37858 7.19719 1.48679 7.1366 1.57767L7.13555 1.57924L4.40222 5.64591L3.57227 5.08807L6.30455 1.02297C6.30475 1.02268 6.30494 1.02238 6.30514 1.02209C6.51126 0.713427 6.84382 0.488615 7.19137 0.369144C7.54004 0.249288 7.95859 0.21671 8.35403 0.362232Z" fill="#66BB6A"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.24272 4.08433C1.17691 4.14508 1.08691 4.28993 1.08691 4.70026V11.2336C1.08691 11.6439 1.17691 11.7888 1.24272 11.8495C1.31836 11.9193 1.4919 12.0003 1.92025 12.0003H2.58691C3.01526 12.0003 3.1888 11.9193 3.26444 11.8495C3.33025 11.7888 3.42025 11.6439 3.42025 11.2336V4.70026C3.42025 4.28993 3.33025 4.14508 3.26444 4.08433C3.1888 4.01451 3.01526 3.93359 2.58691 3.93359H1.92025C1.4919 3.93359 1.31836 4.01451 1.24272 4.08433ZM0.564441 3.34953C0.922138 3.01934 1.41526 2.93359 1.92025 2.93359H2.58691C3.0919 2.93359 3.58502 3.01934 3.94272 3.34953C4.31024 3.68878 4.42025 4.17725 4.42025 4.70026V11.2336C4.42025 11.7566 4.31024 12.2451 3.94272 12.5843C3.58502 12.9145 3.0919 13.0003 2.58691 13.0003H1.92025C1.41526 13.0003 0.922138 12.9145 0.564441 12.5843C0.196918 12.2451 0.0869141 11.7566 0.0869141 11.2336V4.70026C0.0869141 4.17725 0.196918 3.68878 0.564441 3.34953Z" fill="#66BB6A"/>
                                        </svg>
                                        95.9%
                                    </div>
                                    <div style={{color: '#E94A4A'}}>
                                        4.1%
                                        <svg style={{marginLeft: '5px'}} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.69343 0.764063C3.10903 0.459961 3.62717 0.267578 4.14701 0.267578H6.68035C6.92864 0.267578 7.22483 0.307899 7.50104 0.386816C7.75489 0.459344 8.05438 0.581935 8.27461 0.788871L10.3198 2.37222L9.70759 3.16294L7.61587 1.54354L7.59346 1.52113C7.54903 1.4767 7.42902 1.40625 7.22632 1.34834C7.03586 1.29392 6.83206 1.26758 6.68035 1.26758H4.14701C3.86686 1.26758 3.55166 1.3752 3.28394 1.57109C3.01657 1.76673 2.83159 2.02415 2.76542 2.28885L2.76101 2.30648L1.15335 7.19644L1.15122 7.20241C1.0339 7.53091 1.09264 7.78661 1.21621 7.95431C1.34213 8.1252 1.58229 8.26758 1.94701 8.26758H4.61368C5.30925 8.26758 5.88624 8.86185 5.77532 9.63829L5.7744 9.64477L5.43856 11.7938L5.43511 11.8094C5.36133 12.1414 5.59711 12.5683 5.97179 12.6932L5.98058 12.6962L5.98924 12.6994C6.12456 12.7502 6.30239 12.749 6.48447 12.6864C6.66992 12.6227 6.80373 12.5144 6.86432 12.4236L6.86537 12.422L9.59871 8.35533L10.4287 8.91316L7.69637 12.9783C7.69619 12.9785 7.696 12.9788 7.69582 12.9791C7.4897 13.2878 7.15712 13.5126 6.80955 13.6321C6.46087 13.7519 6.0423 13.7845 5.64685 13.639C4.83167 13.3623 4.27407 12.4692 4.45523 11.6095L4.78573 9.49428C4.79833 9.40169 4.77114 9.35064 4.7471 9.32339C4.71921 9.29178 4.67358 9.26758 4.61368 9.26758H1.94701C1.31174 9.26758 0.7519 9.00995 0.411152 8.54751C0.0692532 8.08351 -0.0060114 7.47519 0.207218 6.87243L1.8001 2.02743C1.93732 1.50059 2.28236 1.06484 2.69343 0.764063Z" fill="#E94A4A"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.7359 2.15074C10.6701 2.21148 10.5801 2.35634 10.5801 2.76667V9.3C10.5801 9.71032 10.6701 9.85518 10.7359 9.91593C10.8115 9.98575 10.9851 10.0667 11.4134 10.0667H12.0801C12.5084 10.0667 12.682 9.98575 12.7576 9.91593C12.8234 9.85518 12.9134 9.71032 12.9134 9.3V2.76667C12.9134 2.35634 12.8234 2.21148 12.7576 2.15074C12.682 2.08092 12.5084 2 12.0801 2H11.4134C10.9851 2 10.8115 2.08092 10.7359 2.15074ZM10.0576 1.41593C10.4153 1.08575 10.9084 1 11.4134 1H12.0801C12.5851 1 13.0782 1.08575 13.4359 1.41593C13.8034 1.75518 13.9134 2.24366 13.9134 2.76667V9.3C13.9134 9.82301 13.8034 10.3115 13.4359 10.6507C13.0782 10.9809 12.5851 11.0667 12.0801 11.0667H11.4134C10.9084 11.0667 10.4153 10.9809 10.0576 10.6507C9.69008 10.3115 9.58008 9.82301 9.58008 9.3V2.76667C9.58008 2.24366 9.69008 1.75518 10.0576 1.41593Z" fill="#E94A4A"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className={styles.poolProgress}>
                                    <i style={{width: '30%'}}></i>
                                </div>
                            </div>
                            <div className={styles.poolProgressAbout}>
                                Dext is the utility token of dextools, which you can use to access all features and tiers of the app.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwapBox;
