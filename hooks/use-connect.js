import { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch } from 'react-redux';
import { injected, walletConnect } from "./connector";
import { useWeb3React } from "@web3-react/core";

const useConnect = () => {
    const { activate, account, library, connector, active, deactivate } = useWeb3React();

    const [isActive, setIsActive] = useState(false);
    const [walletModal, setWalletModal] = useState(false);
    const [shouldDisable, setShouldDisable] = useState(false); // Should disable connect button while connecting to MetaMask
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    // Init Loading
    useEffect(() => {
        async function fetchData() {
            var providerType = await sessionStorage.getItem("providerType");
            var isConnected = await sessionStorage.getItem("isConnected");

            if (isConnected) {
                connect(providerType).then((val) => {
                    setIsLoading(false);
                });
            }
        }
        fetchData();
    }, []);

    const handleWalletModal = async (state) => {
        console.log("state ===>" + state);
        setWalletModal(state);
        dispatch({
            type: 'TOGGLE_WALLET_CONNECT_MODAL',
            payload: {
                walletModal: state
            }
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
    const connect = async (providerType) => {
        setShouldDisable(true);
        try {
            if (providerType === "metaMask") {
                await activate(injected).then(() => {
                    setShouldDisable(false);
                    dispatch({
                        type: 'CONNECT',
                        payload: {
                            type: 'metaMask',
                            connected: true
                        }
                    });
                    sessionStorage.setItem("providerType", "metaMask");
                    sessionStorage.setItem("isConnected", true);
                });
            } else if (providerType === "walletConnect") {
                await activate(walletConnect).then(() => {
                    setShouldDisable(false);
                    dispatch({
                        type: 'CONNECT',
                        payload: {
                            type: 'walletConnect',
                            connected: true
                        }
                    });
                    sessionStorage.setItem("providerType", "walletConnect");
                    sessionStorage.setItem("isConnected", true);
                });
            } 

            setWalletModal(false);
        } catch (error) {
            console.log("Error on connecting: ", error);
        }
    };

    // Disconnect from Metamask wallet
    const disconnect = async () => {
        try {
            await deactivate();
            dispatch({ type: 'DISCONNECT' });
            sessionStorage.removeItem("isConnected");
            sessionStorage.removeItem("providerType");
        } catch (error) {
            console.log("Error on disconnnect: ", error);
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
        [isActive, isLoading, shouldDisable, account, walletModal]
    );

    return values;
};

export default useConnect;