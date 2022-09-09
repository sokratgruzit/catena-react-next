import React, { useEffect, useState } from "react";
import useMetaMask from "../../hooks/use-connect";

import { HalfMalf } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

import { toast } from "react-toastify";
import * as helper from "../../helper";

import axios from "axios";
import BigNumber from 'bignumber.js';

import TOKEN from "../abi/TOKEN_ABI.json";
import BRIDGE from "../abi/BRIDGE.json";
import config from "../abi/config.json";

function BridgeMain() {
    const {
        isActive,
        account,
        library,
        handleWalletModal,
        chainId,
        providerType,
    } = useMetaMask();

    const network = [config.ETH.CMCX, config.BNB.CMCX];
    var API_URL = process.env.REACT_APP_API_URL;

    const [step, setStep] = useState(0);

    const [prov, setProv] = useState(providerType);

    useEffect(() => {
        setProv(providerType);
    },[])

    const [swapAmount, setSwapAmount] = useState("");
    const [outputAmount, setOutputAmount] = useState("");

    const [loading, setLoading] = useState(false);
    const [swapLoading, setSwapLoading] = useState(false);
    const [allowance, setAllowance] = useState(false);

    const [activeNetwork1, setActiveNetwork1] = useState({});
    const [activeNetwork2, setActiveNetwork2] = useState({});

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
        setLoading(true);
        try {
            var contract = new library.eth.Contract(TOKEN, activeNetwork1?.tokenAddress);
            var Router = activeNetwork1?.bridgeAddress;

            var amountIn = 10 ** 64;
            amountIn = amountIn.toLocaleString("fullwide", { useGrouping: false });

            await contract.methods
                .approve(Router, amountIn.toString())
                .send({ from: account })
                .then(async () => {
                    await loadUserData();
                    notify(false, "enable token successfully");
                    setAllowance(false);
                    setLoading(false);
                });
        } catch (err) {
            setLoading(false);
            notify(true, err.message);
        }
    };

    const swapBalance = async () => {
        setLoading(true);
        setSwapLoading(true);

        // if (swapAmount < 100) {
        //   notify(true, `Amount should be 100 or more then 100`);
        //   setSwapLoading(false);
        //   setLoading(false);
        //   return;
        // }

        var amount = swapAmount * Math.pow(10, 18);
        amount = amount.toLocaleString("fullwide", { useGrouping: false });
        var BN = library.utils.BN;
        var amountIn = new BN(amount.toString());

        try {
            var bridgeContract = new library.eth.Contract(BRIDGE, activeNetwork1?.bridgeAddress);

            await bridgeContract.methods
                .swap(amountIn.toString())
                .send({ from: account })
                .then(async (result) => {
                    await axios
                        .post(`${API_URL}swapCMCX`, {
                            fromChain: activeNetwork1?.network,
                            toChain: activeNetwork2?.network,
                            hash: result.transactionHash,
                            account: account
                        })
                        .then(function (response) {
                            if (response.status === false) {
                                notify(true, response.error);
                            } else {
                                notify(
                                    false,
                                    `Transaction successful, Please check your wallet.`
                                );
                            }
                            setSwapAmount("");
                            setOutputAmount("");
                            loadUserData();
                        })
                        .catch(function (err) {
                            notify(true, err.message);
                        });
                });

            setLoading(false);
            setSwapLoading(false);
        } catch (err) {
            notify(true, err.message);
            setSwapLoading(false);
            setLoading(false);
        }
    };

    const loadUserData = async (checkAmt = false, amt = 0) => {
        try {
            setLoading(true);
            var token = new library.eth.Contract(TOKEN, activeNetwork1?.tokenAddress);
            var getAllowance = await token.methods
                .allowance(account, activeNetwork1?.bridgeAddress)
                .call();
            if (checkAmt) {
                var amtval = new BigNumber(amt * Math.pow(10, network[0].decimals));
                if (amtval.comparedTo(new BigNumber(getAllowance)) === 1) {
                    setAllowance(true);
                } else {
                    setAllowance(false);
                }
            } else {
                if (getAllowance <= 2) {
                    setAllowance(true);
                } else {
                    setAllowance(false);
                }
            }
            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    };

    const setActiveNetwork = async () => {
        setLoading(true);
        if (chainId === 4) {
            setActiveNetwork1(network[0]);
            setActiveNetwork2(network[1]);
        } else {
            setActiveNetwork1(network[1]);
            setActiveNetwork2(network[0]);
        }
        setLoading(false);
    };

    const switchNetwork = async () => {
        setLoading(true);

        var network1 = activeNetwork1;
        var network2 = activeNetwork2;
        if (providerType === "metaMask") {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: activeNetwork2.chainId }], // chainId must be in hexadecimal numbers
            });
            setActiveNetwork2(network1);
            setActiveNetwork1(network2);
            window.location.reload();
        } else {
            // if (network[0].name === "BSC" && chainId === 32520) {
            //   net = network.reverse();
            // }
            // setNetwork(net);
        }
        if (isActive) {
            loadUserData();
        }
    };

    useEffect(() => {
        if (isActive && activeNetwork1?.name) {
            loadUserData();
        }
    }, [isActive, account, activeNetwork1, activeNetwork2, chainId]);

    useEffect(() => {
        setActiveNetwork();
    }, [isActive, account, chainId]);

    let stepHtml;
    if(step === 0) {
        stepHtml = <div className="bridge__box">
            <div className="bridge__box-ttl">
                <h1>Core Bridge</h1>
                <h2 className="font-13">The fastest an most secure way to transfer assets to and from <br/>CORE</h2>
            </div>
            <div className="bridge__box-main">
                <div className="bridge__box-selects">
                    <div className="bridge__box-select-out">
                        <div className="bridge__box-select-ttl font-13">
                            from
                        </div>
                        <div className="bridge__box-select">
                            <div className="bridge__box-select-inner">
                                <div className="bridge__box-select-main">
                                    <p>
                                        <img src={activeNetwork1?.logo} alt="" />
                                        <span>{activeNetwork1?.name}</span>
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 1.16742C0.512563 0.874531 0.987437 0.874531 1.28033 1.16742L3.75 3.63709L6.21967 1.16742C6.51256 0.874531 6.98744 0.874531 7.28033 1.16742C7.57322 1.46032 7.57322 1.93519 7.28033 2.22808L4.81063 4.69778C4.22607 5.28234 3.27393 5.28234 2.68937 4.69778L0.21967 2.22808C-0.0732233 1.93519 -0.0732233 1.46032 0.21967 1.16742Z" fill="white"/>
                                        </svg>
                                    </p>
                                    {/*<span>Ethereum</span>*/}
                                </div>
                                <div className="bridge__box-select-options">
                                    <div className="bridge__box-select-options-inner">
                                        <div className="bridge__box-select-option active">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bridge__swap-btn"
                         onClick={() => switchNetwork()}
                    >
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.63293 9.23926L5.38574 12.9996" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.3672 9.23926L1.63311 9.23926" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.3672 4.7603L10.6144 1" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.63311 4.76074L14.3672 4.76074" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="bridge__box-select-out">
                        <div className="bridge__box-select-ttl font-13">
                            to
                        </div>
                        <div className="bridge__box-select">
                            <div className="bridge__box-select-inner">
                                <div className="bridge__box-select-main">
                                    <p>
                                        <img src={activeNetwork2?.logo} alt="" />
                                        <span>{activeNetwork2?.name}</span>
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 1.16742C0.512563 0.874531 0.987437 0.874531 1.28033 1.16742L3.75 3.63709L6.21967 1.16742C6.51256 0.874531 6.98744 0.874531 7.28033 1.16742C7.57322 1.46032 7.57322 1.93519 7.28033 2.22808L4.81063 4.69778C4.22607 5.28234 3.27393 5.28234 2.68937 4.69778L0.21967 2.22808C-0.0732233 1.93519 -0.0732233 1.46032 0.21967 1.16742Z" fill="white"/>
                                        </svg>
                                    </p>
                                    {/*<span>Ethereum</span>*/}
                                </div>
                                <div className="bridge__box-select-options">
                                    <div className="bridge__box-select-options-inner">
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option active">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                        <div className="bridge__box-select-option">
                                            <img src="images/eth-icon.png" alt="" />
                                            Ethereum
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bridge__box-sec-floor">
                    <div className="bridge__box-assets">
                        <div className="bridge__box-select-ttl font-13">
                            Assets
                        </div>
                        <div className="bridge__box-assets-btn">
                            <span>Select</span>
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 0.625432C0.512563 0.332538 0.987437 0.332538 1.28033 0.625432L3.75 3.0951L6.21967 0.625432C6.51256 0.332538 6.98744 0.332538 7.28033 0.625432C7.57322 0.918325 7.57322 1.3932 7.28033 1.68609L4.81063 4.15579C4.22607 4.74035 3.27393 4.74035 2.68937 4.15579L0.21967 1.68609C-0.0732233 1.3932 -0.0732233 0.918325 0.21967 0.625432Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="bridge__box-amount">
                        <div className="bridge__box-select-ttl font-13">
                            Amount
                        </div>
                        <input
                            type="number"
                            placeholder="0.0000"
                            value={swapAmount}
                            disabled={swapLoading}
                            onChange={async (e) => {
                                setSwapAmount(parseFloat(e.target.value));

                                var percentage = activeNetwork1?.percentage;
                                if (percentage === 0) {
                                    var amt = parseFloat(e.target.value);
                                } else {
                                    var amtPer = parseFloat(e.target.value) * (percentage / 100);
                                    var amt = parseFloat(e.target.value) - amtPer;
                                    console.log(amt);
                                }
                                let total_usd, totalAmt;
                                if (activeNetwork1.network === "BSC") {
                                    total_usd = amt * (await helper.CMCX_BSC_PRICE());
                                    totalAmt = total_usd / (await helper.CMCX_ETH_PRICE());
                                } else {
                                    total_usd = amt * (await helper.CMCX_ETH_PRICE());
                                    totalAmt = total_usd / (await helper.CMCX_BSC_PRICE());
                                }
                                var final_amt = parseFloat(totalAmt.toFixed(2));
                                console.log(final_amt);
                                setOutputAmount(final_amt);
                                await loadUserData(true, e.target.value);
                            }}
                        ></input>
                        <div className="bridge__box-amount-max font-13">Max</div>
                    </div>
                </div>
                <div className="bridge__box-destination">
                    <div className="bridge__box-select-ttl font-13">
                        Destination
                    </div>
                    <div className="bridge__box-destination-inner">
                        <input type="text" placeholder="Enter destination"/>
                        <span>or</span>
                        <div className="bridge__box-destination-btn">
                            Connect Second Wallet
                        </div>
                    </div>
                </div>
                {isActive ? (
                    chainId === 4 || chainId === 97 ?
                        allowance ? (
                            <button
                                type="button"
                                className="sr-btn-2"
                                onClick={() => approve()}
                                disabled={loading}
                            >
                                {loading ? "Please wait, Loading.." : "Enable"}
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="sr-btn-2"
                                onClick={() => swapBalance()}
                                disabled={loading}
                            >
                                {loading ? "Please wait, Loading.." : "Swap"}
                            </button>
                        ) :
                        <div>
                            <button
                                type="button"
                                className="sr-btn-2"
                            >
                                swich network to eth or bsc
                            </button>
                            <div
                                className="bridge__box-connect-btn"
                                onClick={() => {
                                    setStep(1);
                                }}
                            >
                                Next
                            </div>
                        </div>
                ) : (
                    <div
                        className="bridge__box-connect-btn"
                        onClick={() => handleWalletModal(true)}
                    >
                        Connect Wallet
                    </div>
                )}

            </div>
        </div>
    }
    if(step === 1) {
        stepHtml = <div className="bridge__box">
            <div className="bridge__box-ttl">
                <h1>Core Bridge</h1>
                <h2 className="font-13">The fastest an most secure way to transfer assets to and from <br/>CORE</h2>
            </div>
            <div className="bridge__box-sub-ttl">
                <p className="font-13">Seading</p>
                <div className="font-20">56 <span>CMCX</span></div>
            </div>
            <div className="bridge__box-checked-selects">
                <div className="bridge__box-checked-select">
                    <div className="bridge__box-select-ttl font-13">
                        from
                    </div>
                    <div className="bridge__box-checked-select-inner">
                        <img src={activeNetwork1?.logo} alt="" />
                        <div className="bridge__box-checked-select-descr">
                            <span>{activeNetwork1?.name}</span>
                            {/*<p className="font-13">Ethereum</p>*/}
                        </div>
                    </div>
                </div>
                <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9277 1.35916L25.4982 7.92958L18.9277 14.5" stroke="#0500FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.5 7.92969L25.3166 7.92969" stroke="#0500FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="bridge__box-checked-select">
                    <div className="bridge__box-select-ttl font-13">
                        from
                    </div>
                    <div className="bridge__box-checked-select-inner">
                        <img src={activeNetwork2?.logo} alt="" />
                        <div className="bridge__box-checked-select-descr">
                            <span>{activeNetwork2?.name}</span>
                            {/*<p className="font-13">Ethereum</p>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bridge__box-about">
                <div>
                    <p className="font-13">Bridge network fees</p>
                    <p className="font-13">Waived</p>
                </div>
                <div>
                    <p className="font-13">Destination</p>
                    <p className="font-13">0xC7...061b</p>
                </div>
            </div>
            <div className="bridge__box-sub-ttl bridge__box-sub-ttl-down">
                <p className="font-13">Receiving</p>
                <div className="font-20">56.234 <span>CMCX</span></div>
            </div>
            <div
                className="bridge__box-connect-btn"
                onClick={() => {
                    setStep(2)
                }}
            >Confirm</div>
        </div>
    }
    if(step === 2) {
        stepHtml =  <div className="bridge__box">
            <div className="bridge__box-ttl">
                <h1>Core Bridge</h1>
                <h2 className="font-13">The fastest an most secure way to transfer assets to and from <br/>CORE</h2>
            </div>
            <div className="bridge__box-info-container">
                <div className="bridge__box-info">
                    <i>
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.32464 0.811853C8.55875 1.04637 8.55841 1.42627 8.32389 1.66038L3.78789 6.18838C3.55351 6.42234 3.1739 6.42217 2.93974 6.18801L0.675736 3.92401C0.441421 3.68969 0.441421 3.30979 0.675736 3.07548C0.910051 2.84116 1.28995 2.84116 1.52426 3.07548L3.36437 4.91559L7.47611 0.811104C7.71063 0.576996 8.09053 0.577331 8.32464 0.811853Z" fill="white"/>
                        </svg>
                    </i>
                    <div className="bridge__box-info-descr">
                        <div>Deposit of 56 CMCX</div>
                        <span className="font-13">Transaction ID: <a href="##">0xC7...061b</a></span>
                    </div>
                </div>
                <div className="bridge__box-info">
                    <i>
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.32464 0.811853C8.55875 1.04637 8.55841 1.42627 8.32389 1.66038L3.78789 6.18838C3.55351 6.42234 3.1739 6.42217 2.93974 6.18801L0.675736 3.92401C0.441421 3.68969 0.441421 3.30979 0.675736 3.07548C0.910051 2.84116 1.28995 2.84116 1.52426 3.07548L3.36437 4.91559L7.47611 0.811104C7.71063 0.576996 8.09053 0.577331 8.32464 0.811853Z" fill="white"/>
                        </svg>
                    </i>
                    <div className="bridge__box-info-descr">
                        <div>Transfer Completed</div>
                        <span className="font-13">Transaction ID: <a href="##">0xC7...061b</a></span>
                    </div>
                </div>
            </div>
            <div
                className="bridge__box-connect-btn"
                onClick={() => {
                    setStep(0)
                }}
            >Close</div>
        </div>
    }
    return (
        <div className="bridge__body">

            {/*New Start*/}
            <div className="bridge__section bridge__section-step1">
                <div className="bridge__inner">
                    <div className="bridge__steps">
                        <div className={`bridge__step progress-step ${step > 0 ? 'active-step' : ''}`}>
                            <div className="ttl font-13">Details</div>
                            <i>
                                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.32464 0.811853C8.55875 1.04637 8.55841 1.42627 8.32389 1.66038L3.78789 6.18838C3.55351 6.42234 3.1739 6.42217 2.93974 6.18801L0.675736 3.92401C0.441421 3.68969 0.441421 3.30979 0.675736 3.07548C0.910051 2.84116 1.28995 2.84116 1.52426 3.07548L3.36437 4.91559L7.47611 0.811104C7.71063 0.576996 8.09053 0.577331 8.32464 0.811853Z" fill="white"/>
                                </svg>
                            </i>
                        </div>
                        <div className={`bridge__step progress-step step2 ${step > 1 ? 'active-step' : ''}`}>
                            <div className="ttl font-13">Confirm</div>
                            <i>
                                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.32464 0.811853C8.55875 1.04637 8.55841 1.42627 8.32389 1.66038L3.78789 6.18838C3.55351 6.42234 3.1739 6.42217 2.93974 6.18801L0.675736 3.92401C0.441421 3.68969 0.441421 3.30979 0.675736 3.07548C0.910051 2.84116 1.28995 2.84116 1.52426 3.07548L3.36437 4.91559L7.47611 0.811104C7.71063 0.576996 8.09053 0.577331 8.32464 0.811853Z" fill="white"/>
                                </svg>
                            </i>
                        </div>
                        <div className={`bridge__step progress-step step3 ${step > 2 ? 'progress-step' : ''}`}>
                            <div className="ttl font-13">Bridge</div>
                            <i>
                                <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.32464 0.811853C8.55875 1.04637 8.55841 1.42627 8.32389 1.66038L3.78789 6.18838C3.55351 6.42234 3.1739 6.42217 2.93974 6.18801L0.675736 3.92401C0.441421 3.68969 0.441421 3.30979 0.675736 3.07548C0.910051 2.84116 1.28995 2.84116 1.52426 3.07548L3.36437 4.91559L7.47611 0.811104C7.71063 0.576996 8.09053 0.577331 8.32464 0.811853Z" fill="white"/>
                                </svg>
                            </i>
                        </div>
                        <div className="bridge__steps-line"></div>
                        <div className="bridge__steps-line bridge__steps-line-active"></div>
                    </div>
                    {stepHtml}
                </div>
            </div>
            {/*New End*/}



            {/*Old Start*/}
            <div className="box-section">
                <div className="balence">
                    <div>
                        <div>
                            <div className="round">
                                <div className="box">
                                    <p>You Send</p>
                                    <input
                                        type="number"
                                        placeholder="0.0000"
                                        value={swapAmount}
                                        disabled={swapLoading}
                                        onChange={async (e) => {
                                            setSwapAmount(parseFloat(e.target.value));

                                            var percentage = activeNetwork1?.percentage;
                                            if (percentage === 0) {
                                                var amt = parseFloat(e.target.value);
                                            } else {
                                                var amtPer = parseFloat(e.target.value) * (percentage / 100);
                                                var amt = parseFloat(e.target.value) - amtPer;
                                                console.log(amt);
                                            }
                                            let total_usd, totalAmt;
                                            if (activeNetwork1.network === "BSC") {
                                                total_usd = amt * (await helper.CMCX_BSC_PRICE());
                                                totalAmt = total_usd / (await helper.CMCX_ETH_PRICE());
                                            } else {
                                                total_usd = amt * (await helper.CMCX_ETH_PRICE());
                                                totalAmt = total_usd / (await helper.CMCX_BSC_PRICE());
                                            }
                                            var final_amt = parseFloat(totalAmt.toFixed(2));
                                            console.log(final_amt);
                                            setOutputAmount(final_amt);
                                            await loadUserData(true, e.target.value);
                                        }}
                                    ></input>
                                    <div className="icon">
                                        <img src={activeNetwork1?.logo} alt="" />
                                        <span>{activeNetwork1?.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="font-icon">
                        <h4>
                            1 {activeNetwork1?.symbol} ={" "}
                            {activeNetwork1?.percentage === 0 ? 1 : 1 - 1 * (activeNetwork1?.percentage / 100)}{" "}
                        </h4>
                        <div
                            className="round12"
                            onClick={() => switchNetwork()}
                        >
                            <img src="/images/bridge/swap.png" alt="swap" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="round">
                                <div className="box">
                                    <p>You Receive</p>
                                    <input
                                        type="number"
                                        placeholder="0.0000"
                                        value={outputAmount}
                                        readOnly
                                    ></input>
                                    <div className="icon">
                                        <img src={activeNetwork2?.logo} alt="" />
                                        <span>{activeNetwork2?.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="box-section"
                style={{
                    background: "none",
                    padding: "0px",
                    border: "0px",
                }}
            >
                <div className="balence">
                    <div>
                        <div className="sr-btn-wrap">
                            {isActive ? (
                                chainId === 4 || chainId === 97 ?
                                    allowance ? (
                                        <button
                                            type="button"
                                            className="sr-btn-2"
                                            onClick={() => approve()}
                                            disabled={loading}
                                        >
                                            {loading ? "Please wait, Loading.." : "Enable"}
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="sr-btn-2"
                                            onClick={() => swapBalance()}
                                            disabled={loading}
                                        >
                                            {loading ? "Please wait, Loading.." : "Swap"}
                                        </button>
                                    ) :
                                    <button
                                        type="button"
                                        className="sr-btn-2"
                                    >
                                        swich network to eth or bsc
                                    </button>
                            ) : (
                                <button
                                    type="button"
                                    className="sr-btn-2"
                                    onClick={() => handleWalletModal(true)}
                                >
                                    Connect Wallet
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`modal ${swapLoading ? "show" : ""}`}
                id="myModal"
                style={{
                    display: `${swapLoading ? "block" : "none"}`,
                }}
            >
                <HalfMalf
                    text={
                        "Do not close or refresh this window while processing the transaction."
                    }
                    bgColor={"#ffff"}
                    width={"250px"}
                    height={"250px"}
                    center={true}
                />
            </div>
            {/*Old End*/}

        </div>
    );
}

export default BridgeMain;
