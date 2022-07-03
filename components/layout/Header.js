import { useState, useEffect } from "react";
//import Link from "next/link";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import useConnect from "../../hooks/use-connect";

import Button from "../UI/button/Button";
import Tooltip from "../UI/tooltip/Tooltip";

import styles from './Header.module.css';

const NAV_DATA = [
    {
        id: 1,
        title: 'Trade',
        route: '/trade/swap',
        subNav: [
            {
                id: 1,
                title: 'Swap',
                route: '/trade/swap'
            },
            {
                id: 2,
                title: 'Bridge',
                route: '/trade/bridge'
            },
            {
                id: 3,
                title: 'Staking',
                route: '/trade/staking'
            },
            {
                id: 4,
                title: 'Prepetual',
                route: '/prepetual'
            }
        ]
    },
    {
        id: 2,
        title: 'Earn',
        route: '/earn/farms',
        subNav: [
            {
                id: 5,
                title: 'Farms',
                route: '/earn/farms'
            },
            {
                id: 6,
                title: 'Pools',
                route: '/earn/pools'
            }
        ]
    },
    {
        id: 3,
        title: 'Win',
        route: '/win/competition',
        subNav: [
            {
                id: 7,
                title: 'Competition',
                route: '/win/competition'
            },
            {
                id: 8,
                title: 'Prediction',
                route: '/win/prediction'
            },
            {
                id: 9,
                title: 'Lottery',
                route: '/win/lottery'
            }
        ]
    },
    {
        id: 4,
        title: 'NFT',
        route: '/nfts',
        subNav: [
            {
                id: 10,
                title: 'Overview',
                route: '/nfts'
            },
            {
                id: 11,
                title: 'Collections',
                route: '/nfts/collections'
            },
            {
                id: 12,
                title: 'Activity',
                route: '/nfts/activity'
            }
        ]
    },
    {
        id: 5,
        title: 'More',
        route: '/info',
        subNav: [
            {
                id: 13,
                title: 'Info',
                route: '/info'
            },
            {
                id: 14,
                title: 'Voting',
                route: '/voting'
            },
            {
                id: 15,
                title: 'Leaderbord',
                route: '/leaderbord'
            }
        ]
    }
];

const LANG_DATA = [
    {
        id: 1,
        title: 'GE'
    },
    {
        id: 2,
        title: 'EN'
    },
    {
        id: 3,
        title: 'FR'
    }
];

const SETTINGS_DATA = [
    {
        id: 1,
        title: 'My churi',
        route: '/xai'
    },
    {
        id: 2,
        title: 'My muchuri',
        route: '/xai'
    },
    {
        id: 3,
        title: 'My kuchuri',
        route: '/xai'
    },
    {
        id: 4,
        title: 'My racxa daaaa',
        route: '/xai'
    }
];

const WALLETS_DATA = [
    {
        id: 1,
        title: 'Metamask',
        img: 'meta.png',
        type: 'metaMask'
    },
    {
        id: 2,
        title: 'Wallet Connect',
        img: 'walletconnect.png',
        type: 'walletConnect'
    }
];

const Header = () => {
    const { t, i18n } = useTranslation();
    const { connect, disconnect, account, isActive, library, handleWalletModal } = useConnect();
    const [ activeMenu, setActiveMenu ] = useState(null);
    const [ activeLangs, setActiveLangs ] = useState(false);
    const [ activeSettings, setActiveSettings ] = useState(false);
    const [ activeBurger, setActiveBurger ] = useState(false);
    const [ profileModal, setProfileModal ] = useState(false);
    const walletModal = useSelector((state) => state.walletModal);
    const [balance, setBalance] = useState(0);

    const changeLanguage = (locale) => {
        i18n.changeLanguage(locale.toLowerCase());
    };

    let web3Obj = library;
    let navTransaction;

    const getBalance = async () => {
        if (web3Obj !== undefined) {
            web3Obj.eth.getBalance(account).then((res) => {
                setBalance(res);
            });
        }
    };

    const openMenu = (id) => {
        if (activeMenu !== id) {
            setActiveMenu(id);
        } else {
            setActiveMenu(null);
        }
    };

    const openLangs = (state) => {
        setActiveLangs(state);
    };

    const openSettings = (state) => {
        setActiveSettings(state);
    };

    const openBurger = () => {
        if(activeBurger) {
            setActiveBurger(false);
        } else {
            setActiveBurger(true);
        }
    };

    const openProfile = () => {
        if(profileModal) {
            setProfileModal(false);
        } else {
            setProfileModal(true);
        }
    };

    useEffect(() => {
        if (isActive) {
            getBalance();
        }
    }, [isActive, account]);

    useEffect(() => {
        if (window.innerWidth > 1023) {
            navTransaction = 9;
        } else {
            navTransaction = 0;
        }
    }, []);

    return (
        <div>
            <div
                className={`${styles.headerBg} ${activeMenu !== null || activeLangs || activeSettings || walletModal? styles.headerBgActive : ''}`}
                onClick={() => {
                    openLangs(false);
                    openSettings(false);
                    handleWalletModal(false);
                }}
            ></div>
        </div>
    )
};

export default Header;
