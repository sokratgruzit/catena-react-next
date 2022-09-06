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
        if (chainId === 1) {
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

    return (
        <div>
            <div className="stack-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-12 col-xl-5">
                            <div className="app">
                                <h3>
                                    SWAP YOUR {activeNetwork1?.symbol} IN <br />
                                    ONE GO!
                                </h3>
                                <p>
                                    If you experience transaction failure or swap issues, Please goto "Transactions History" and check the status, If shown fail, then click "Retry", If the issue is not resolved after above mentioned solution, please feel free to contact us at support@bitgert.com
                                </p>

                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7 col-sm-12 col-xl-7">
                            <div className="checkout-form-centre">
                                <div className="checkout-login-step">
                                    <div className="head">
                                        <h2>{activeNetwork1?.symbol} Bridge</h2>
                                        {/*<Link to='/maticTx' className="button2">*/}
                                        {/*    /!* <i className="fa fa-history" aria-hidden="true"></i> *!/*/}
                                        {/*    Transaction History*/}
                                        {/*</Link>*/}
                                    </div>
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
                                                        chainId === 1 || chainId === 56 ?
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
                                </div>
                            </div>
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
        </div>
    );
}

export default BridgeMain;
