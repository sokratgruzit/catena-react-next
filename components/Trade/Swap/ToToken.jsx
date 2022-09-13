import { useState } from "react";
import { right, search, tether, pin, usdt, neura } from "./assets";

// import "./token/token.css";
import { tokenList } from "./token/token";

import Web3 from "web3";
import WBNB from "../../abi/WBNB.json";

export default function SelectToken({
                                        setIsOpen,
                                        tokenInfo,
                                        setTokenInfo,
                                        setToToken,
                                        fromAmount,
                                        quateSwap,
                                        getTokenBalance,
                                    }) {
    const searchToken = async (search) => {
        var token = tokenList(search);

        if (token.length === 0) {
            const web3 = new Web3("https://bsc-dataseed1.binance.org/");
            var isAddress = web3.utils.isAddress(search);

            if (isAddress) {
                const contract = new web3.eth.Contract(WBNB, search);
                const name = await contract.methods.name().call();
                const symbol = await contract.methods.symbol().call();
                const decimals = await contract.methods.decimals().call();

                var tokenInfo = [
                    {
                        name: name,
                        address: search,
                        symbol: symbol,
                        decimals: decimals,
                        logo: "/images/information.png",
                    },
                ];

                setTokenInfo(tokenInfo);
            } else {
                setTokenInfo(tokenList(search));
            }
        } else {
            setTokenInfo(tokenList(search));
        }
    };

    return (
        <div className="fixed h-screen w-full left-0 top-0 flex justify-center items-start pt-32 bg-black bg-opacity-50 pb-5">
            <div className="bg-white shadow-md rounded-sm w-4/5 md:w-2/5 font-sans relative p-5">
                <div className="flex flex-row justify-between items-center mx-8">
                    <button onClick={() => setIsOpen(false)}>
                        <img src={right} className="h-6 rotate-180" alt="icon" />
                    </button>
                    <h1 className="text-2xl font-semibold ml-6">Import a Token</h1>
                    <div></div>
                </div>
                <div className="flex flex-row gap-2 px-4 py-1 mt-6 border border-gray-400 rounded-sm">
                    <img
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        src={search}
                        alt="search"
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="p-2 w-full outline-none"
                        placeholder="Search by name or paste address"
                        onChange={(e) => searchToken(e.target.value)}
                    />
                </div>
                <div
                    className="flex flex-col gap-4 mt-4"
                    style={{ height: "300px", overflowY: "scroll" }}
                >
                    {tokenInfo.map((row, index) => (
                        <div
                            key={index}
                            className="flex flex-row justify-between"
                            onClick={(e) => {
                                // if (
                                //   toAddress &&
                                //   toAddress.address === row.address
                                // ) {
                                //   settoToken("");
                                //   setToAddress("");
                                // }
                                setToToken(row);
                                getTokenBalance(row.address, "To");
                                setIsOpen(false);
                                setTimeout(function () {
                                    e.target.value = fromAmount;
                                    quateSwap(e);
                                }, 1000);
                            }}
                        >
                            <div className="flex flex-row gap-2">
                                <img src={row.logo} className="img" alt="icon" />
                                <div className="flex flex-col">
                                    <p className="font-bold text-lg">{row.name}</p>
                                    <p className="text-gray-700 text-sm">{row.symbol}</p>
                                </div>
                            </div>
                            {/* <div className="flex flex-row items-center gap-2">
                <p className="text-3xl font-bold">0</p>
                <img src={pin} alt="icon" className="h-6" />
              </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
