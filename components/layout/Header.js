import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useConnect from '../../hooks/use-connect';

import Button from '../UI/button/Button';
import Tooltip from '../UI/tooltip/Tooltip';

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
        route: '/trade/swap',
      },
      {
        id: 2,
        title: 'Bridge',
        route: '/trade/bridge',
      },
      {
        id: 3,
        title: 'Staking',
        route: '/trade/staking',
      },
      {
        id: 4,
        title: 'Prepetual',
        route: '/prepetual',
      },
    ],
  },
  {
    id: 2,
    title: 'Earn',
    route: '/earn/farms',
    subNav: [
      {
        id: 5,
        title: 'Farms',
        route: '/earn/farms',
      },
      {
        id: 6,
        title: 'Pools',
        route: '/earn/pools',
      },
    ],
  },
  {
    id: 3,
    title: 'Win',
    route: '/win/competition',
    subNav: [
      {
        id: 7,
        title: 'Competition',
        route: '/win/competition',
      },
      {
        id: 8,
        title: 'Prediction',
        route: '/win/prediction',
      },
      {
        id: 9,
        title: 'Lottery',
        route: '/win/lottery',
      },
    ],
  },
  {
    id: 4,
    title: 'NFT',
    route: '/nfts',
    subNav: [
      {
        id: 10,
        title: 'Overview',
        route: '/nfts',
      },
      {
        id: 11,
        title: 'Collections',
        route: '/nfts/collections',
      },
      {
        id: 12,
        title: 'Activity',
        route: '/nfts/activity',
      },
    ],
  },
  {
    id: 5,
    title: 'More',
    route: '/info',
    subNav: [
      {
        id: 13,
        title: 'Info',
        route: '/info',
      },
      {
        id: 14,
        title: 'Voting',
        route: '/voting',
      },
      {
        id: 15,
        title: 'Leaderbord',
        route: '/leaderbord',
      },
    ],
  },
];

const LANG_DATA = [
  {
    id: 1,
    title: 'GE',
    fullName: 'Georgian'
  },
  {
    id: 2,
    title: 'EN',
    fullName: 'EnglishMathafaka'
  },
  {
    id: 3,
    title: 'FR',
    fullName: 'Français'
  },
];

const SETTINGS_DATA = [
  {
    id: 1,
    title: 'My churi',
    route: '/xai',
  },
  {
    id: 2,
    title: 'My muchuri',
    route: '/xai',
  },
  {
    id: 3,
    title: 'My kuchuri',
    route: '/xai',
  },
  {
    id: 4,
    title: 'My racxa daaaa',
    route: '/xai',
  },
];

const WALLETS_DATA = [
  {
    id: 1,
    title: 'Metamask',
    img: 'meta.png',
    type: 'metaMask',
  },
  {
    id: 2,
    title: 'Wallet Connect',
    img: 'walletconnect.png',
    type: 'walletConnect',
  },
];

const Header = () => {
    const { t, i18n } = useTranslation();
    const { connect, disconnect, account, isActive, library, handleWalletModal } = useConnect();
    const [ activeMenu, setActiveMenu ] = useState(null);
    const [ activeLangs, setActiveLangs ] = useState(false);
    const [ activeSettings, setActiveSettings ] = useState(false);
    const [ settingRightOffset, setSettingRightOffset ] = useState(0);
    const [ activeBurger, setActiveBurger ] = useState(false);
    const [ profileModal, setProfileModal ] = useState(false);
    const walletModal = useSelector((state) => state.walletModal);
    const [balance, setBalance] = useState(0);

  const changeLanguage = locale => {
    i18n.changeLanguage(locale.toLowerCase());
  };

  let web3Obj = library;
  let navTransaction = 9;

  const getBalance = async () => {
    if (web3Obj !== undefined) {
      web3Obj.eth.getBalance(account).then(res => {
        setBalance(res);
      });
    }
  };

  const openMenu = id => {
    closeAll();
    if (activeMenu !== id) {
      setActiveMenu(id);
    } else {
      setActiveMenu(null);
    }
  };

  const openLangs = state => {
    closeAll();
    setActiveLangs(state);
  };

  const openSettings = state => {
    closeAll();
    setActiveSettings(state);
  };


  const openBurger = () => {
    if (activeBurger) {
      setActiveBurger(false);
    } else {
      setActiveBurger(true);
    }
  };

  const openProfile = () => {
    closeAll();
    if (profileModal) {
      setProfileModal(false);
    } else {
      setProfileModal(true);
    }
  };

  const closeAll = () => {
    setActiveLangs(false);
    setActiveSettings(false);
    handleWalletModal(false);
    setProfileModal(false);
    setActiveLangs(false);
  }

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
      <header className={`${styles.header} container`}>
        <div className={styles.headerInner}>
          <Link href='/'>
            <div className={styles.headerLogo}>
              <svg
                width='113'
                height='46'
                viewBox='0 0 113 46'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M6.03633 11.9227C7.86135 9.51265 10.2522 7.58728 12.9985 6.31616C15.7447 5.04504 18.7621 4.46716 21.7848 4.63342C24.8076 4.79968 27.743 5.70497 30.3326 7.26958C32.9222 8.83419 35.0865 11.0101 36.635 13.6057L37.9725 12.8643L40.2016 11.5594C38.2018 8.20233 35.3615 5.42174 31.9596 3.49056C28.5576 1.55937 24.7109 0.543945 20.7969 0.543945C16.883 0.543945 13.0363 1.55937 9.63433 3.49056C6.23239 5.42174 3.39213 8.20233 1.39229 11.5594L0.285156 13.2943L2.05361 14.3397L8.89706 18.3953C7.77771 21.2042 7.69978 24.3196 8.67732 27.1808C9.65485 30.042 11.6237 32.4611 14.2295 34.0029C16.8353 35.5448 19.907 36.108 22.892 35.5914C25.8769 35.0747 28.5791 33.5121 30.5123 31.1847L35.4981 34.1503C33.6727 36.5625 31.2802 38.4893 28.5319 39.7607C25.7836 41.0321 22.764 41.609 19.7394 41.4405C16.7148 41.272 13.7783 40.3632 11.1889 38.7944C8.59958 37.2257 6.43701 35.0451 4.89204 32.4451L1.36257 34.5285C3.36241 37.8856 6.20267 40.6661 9.60461 42.5973C13.0065 44.5285 16.8533 45.5439 20.7672 45.5439C24.6812 45.5439 28.5279 44.5285 31.9298 42.5973C35.3318 40.6661 38.172 37.8856 40.1719 34.5285L41.227 32.7639L39.4585 31.7185L33.8411 28.3895L28.9965 25.6018C28.4067 27.4751 27.1923 29.0906 25.555 30.1799C23.9177 31.2692 21.9562 31.7667 19.9963 31.5897C18.0365 31.4127 16.1963 30.5719 14.7817 29.2069C13.367 27.842 12.4631 26.0352 12.22 24.0866C11.9769 22.1381 12.4094 20.1653 13.4455 18.496C14.4816 16.8267 16.059 15.5614 17.9156 14.9104C19.7721 14.2593 21.796 14.2618 23.651 14.9174C25.5059 15.5729 27.0802 16.8421 28.1122 18.5139L31.6714 16.4676C30.6258 14.7372 29.1813 13.2809 27.458 12.2198C25.7347 11.1586 23.7825 10.5233 21.7635 10.3667C19.7446 10.21 17.7174 10.5366 15.8504 11.3192C13.9834 12.1018 12.3307 13.3178 11.0296 14.8661L6.03633 11.9227Z'
                  fill='#FF7152'
                />
                <path
                  d='M53.7971 28.9387C51.6126 28.9387 49.9482 28.3802 48.8039 27.2631C48.2162 26.6447 47.7625 25.9121 47.471 25.111C47.1795 24.31 47.0566 23.4576 47.1097 22.607C47.0574 21.7375 47.1789 20.8662 47.4672 20.0439C47.7555 19.2217 48.2048 18.4648 48.789 17.8175C49.9036 16.6658 51.5729 16.0875 53.7971 16.0826C54.4824 16.0756 55.1668 16.1352 55.8405 16.2605C56.4308 16.3699 57.0121 16.5236 57.5792 16.7202V19.456C56.4537 18.9899 55.2461 18.753 54.0275 18.7591C53.5173 18.7142 53.0033 18.7733 52.5167 18.9326C52.03 19.0919 51.5809 19.3482 51.1965 19.6858C50.5246 20.5046 50.1993 21.5527 50.29 22.607C50.2465 23.1121 50.3086 23.6206 50.4723 24.1005C50.6361 24.5803 50.8978 25.021 51.2411 25.3947C52.0357 26.0421 53.049 26.3606 54.0721 26.2844C54.6777 26.286 55.2822 26.2314 55.8777 26.1213C56.4709 26.0109 57.0511 25.8394 57.609 25.6098V28.3604C57.0429 28.5429 56.4643 28.6842 55.8777 28.783C55.1898 28.8937 54.4938 28.9458 53.7971 28.9387Z'
                  fill='white'
                />
                <path
                  d='M64.8474 28.9388C62.8115 28.9388 61.266 28.4223 60.2108 27.3892C59.1557 26.3562 58.6232 24.7498 58.6133 22.57C58.6133 20.2568 59.1483 18.6035 60.2108 17.5951C61.2734 16.5868 62.8115 16.1123 64.8474 16.1123C66.8834 16.1123 68.4215 16.6165 69.484 17.5951C70.5466 18.5738 71.0742 20.2568 71.0742 22.57C71.0742 24.7498 70.5392 26.3587 69.484 27.3892C68.4289 28.4198 66.876 28.9388 64.8474 28.9388ZM64.8474 26.2845C65.2784 26.3272 65.7135 26.2683 66.1174 26.1125C66.5214 25.9567 66.8831 25.7083 67.1732 25.3874C67.7308 24.5581 67.9925 23.5658 67.9162 22.57C68.0119 21.5261 67.7499 20.4806 67.1732 19.6044C66.8799 19.298 66.5212 19.0615 66.1236 18.9126C65.7261 18.7637 65.3 18.7062 64.8772 18.7443C64.4508 18.7049 64.0211 18.7618 63.6198 18.9107C63.2184 19.0596 62.8559 19.2966 62.5589 19.6044C61.9782 20.4789 61.716 21.5258 61.8158 22.57C61.7395 23.5658 62.0013 24.5581 62.5589 25.3874C62.8465 25.7012 63.2022 25.9452 63.5989 26.1007C63.9956 26.2562 64.4227 26.3191 64.8474 26.2845Z'
                  fill='white'
                />
                <path
                  d='M72.6641 28.746V16.2754H78.9131C79.5074 16.2263 80.1054 16.3048 80.6667 16.5056C81.2281 16.7064 81.7399 17.0248 82.1676 17.4395C82.9022 18.3061 83.277 19.4201 83.2153 20.5534C83.2385 21.343 83.0152 22.1202 82.5763 22.7777C82.1473 23.4115 81.5396 23.9043 80.8301 24.1937C81.0025 24.3256 81.1509 24.4861 81.2685 24.6683C81.4101 24.9039 81.5295 25.1521 81.6252 25.4097L83.1113 28.7757H79.8419L78.445 25.6024C78.3544 25.3673 78.2 25.1619 77.9991 25.0093C77.7732 24.8807 77.5161 24.8166 77.2561 24.824H75.7849V28.7757L72.6641 28.746ZM75.7849 22.3921H78.0957C78.6112 22.4246 79.1202 22.2633 79.5224 21.9398C79.7036 21.7598 79.8434 21.5425 79.9319 21.303C80.0204 21.0636 80.0557 20.8078 80.0351 20.5534C80.0351 19.3078 79.4332 18.6776 78.2295 18.6776H75.7849V22.3921Z'
                  fill='white'
                />
                <path
                  d='M84.8047 28.746V16.2754H94.0259V18.6776H87.9329V21.2948H93.3051V23.7488H87.9329V26.3438H94.0259V28.746H84.8047Z'
                  fill='white'
                />
              </svg>
              <div
                className={`${styles.headerLogoLine} ${
                  activeMenu !== null ? styles.headerLogoLineActive : ''
                }`}
              ></div>
              <div className={styles.headerLogoTxtOuter}>
                <span
                  className={`${styles.headerLogoTxt} ${
                    activeMenu !== null ? styles.headerLogoTxtHidden : ''
                  }`}
                >
                  Dashboard
                </span>
              </div>
            </div>
          </Link>
          <nav
            className={`${styles.headerNav} ${
              activeBurger ? styles.activeHeaderNav : ''
            } ${activeMenu !== null ? styles.headerNavOpacity : ''}`}
          >
            {NAV_DATA.map(item => {
              return (
                <div
                  className={`${styles.headerNavLink} ${
                    activeMenu === item.id ? styles.activeMenu : ''
                  }`}
                  key={item.id}
                  onMouseLeave={() => {
                    openMenu(null);
                  }}
                >
                  <i></i>
                  <Link href={item.route}>
                    <a
                      className={`${styles.headerNavLinkTtl} ${
                        activeMenu === item.id ? styles.activeTtl : ''
                      }`}
                      onMouseEnter={() => {
                        openMenu(item.id);
                      }}
                    >
                      {item.title}
                    </a>
                  </Link>
                  <div
                    className={`${styles.headerNavLinkSubTtl} ${
                      activeMenu === item.id ? styles.activeMenuSub : ''
                    }`}
                  >
                    <i
                      className={activeMenu === item.id ? styles.activeBg : ''}
                    ></i>
                    {item.subNav.map((sub, index) => {
                      return (
                        <Link href={sub.route} key={sub.id}>
                          <a>
                            <div
                              style={{
                                transitionDelay:
                                  activeMenu === item.id
                                    ? `${(index + navTransaction) / 10}s`
                                    : '',
                              }}
                            >
                              <span>{sub.title}</span>
                            </div>
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
          <div className={styles.headerRightOuter}>
            <div
              className={`${styles.headerRight} ${
                activeMenu !== null ? styles.headerRightHideToRight : ''
              } ${
                walletModal
                  ? styles.headerRightHideToLeft
                  : ''
              }`}
            >
              <div
                  className={`${styles.headerBalance}`}
              >
                <svg
                  width='31'
                  height='31'
                  viewBox='0 0 31 31'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='15.7539' cy='15.0439' r='15' fill='#131313' />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.21233 10.1012C10.0234 9.03004 11.0861 8.17431 12.3066 7.60937C13.5272 7.04443 14.8682 6.7876 16.2117 6.86149C17.5551 6.93538 18.8597 7.33774 20.0107 8.03312C21.1616 8.7285 22.1235 9.69557 22.8117 10.8492L23.4062 10.5197L24.3969 9.93972C23.5081 8.44767 22.2457 7.21186 20.7338 6.35355C19.2218 5.49524 17.5121 5.04395 15.7726 5.04395C14.0331 5.04395 12.3234 5.49524 10.8114 6.35355C9.29946 7.21186 8.03713 8.44767 7.14831 9.93972L6.65625 10.7108L7.44223 11.1754L10.4838 12.9779C9.98627 14.2263 9.95164 15.6109 10.3861 16.8825C10.8206 18.1542 11.6956 19.2294 12.8537 19.9146C14.0119 20.5999 15.3771 20.8502 16.7037 20.6206C18.0304 20.391 19.2313 19.6965 20.0905 18.662L22.3065 19.9801C21.4951 21.0522 20.4318 21.9086 19.2104 22.4736C17.9889 23.0387 16.6468 23.2951 15.3026 23.2202C13.9583 23.1453 12.6532 22.7414 11.5024 22.0442C10.3515 21.3469 9.39041 20.3778 8.70375 19.2222L7.1351 20.1482C8.02392 21.6402 9.28625 22.876 10.7982 23.7343C12.3102 24.5926 14.0199 25.0439 15.7594 25.0439C17.4989 25.0439 19.2086 24.5926 20.7206 23.7343C22.2325 22.876 23.4949 21.6402 24.3837 20.1482L24.8526 19.3639L24.0666 18.8993L21.57 17.4198L19.4168 16.1808C19.1547 17.0134 18.615 17.7314 17.8873 18.2155C17.1596 18.6996 16.2878 18.9207 15.4168 18.8421C14.5457 18.7634 13.7279 18.3897 13.0992 17.783C12.4704 17.1764 12.0687 16.3734 11.9606 15.5074C11.8526 14.6414 12.0448 13.7646 12.5053 13.0226C12.9658 12.2807 13.6669 11.7184 14.492 11.429C15.3171 11.1397 16.2166 11.1408 17.0411 11.4321C17.8655 11.7235 18.5652 12.2875 19.0238 13.0306L20.6057 12.1211C20.141 11.3521 19.499 10.7048 18.7331 10.2332C17.9672 9.76158 17.0995 9.47922 16.2022 9.40961C15.3049 9.33999 14.4039 9.48513 13.5741 9.83295C12.7444 10.1808 12.0098 10.7212 11.4316 11.4094L9.21233 10.1012Z'
                    fill='#FF7152'
                  />
                </svg>
                ${balance}
              </div>
              <div className={`${styles.headerLangs}`}>
                <div
                  className={`${styles.headerLangNow} ${
                    activeLangs ? styles.headerLangNowActive : ''
                  }`}
                  onClick={() => {
                    openLangs(true);
                  }}
                >
                  <i></i>
                  <div className={styles.headerLangNowSvg}>
                    <div className={styles.headerLangNowMainTtl}>
                      <svg
                          width='21'
                          height='21'
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                            d='M10.7539 20.0439C5.23763 20.0439 0.753906 15.5602 0.753906 10.0439C0.753906 4.52767 5.23763 0.0439453 10.7539 0.0439453C16.2702 0.0439453 20.7539 4.52767 20.7539 10.0439C20.7539 15.5602 16.2702 20.0439 10.7539 20.0439ZM10.7539 1.43929C6.00972 1.43929 2.14926 5.29976 2.14926 10.0439C2.14926 14.7881 6.00972 18.6486 10.7539 18.6486C15.4981 18.6486 19.3586 14.7881 19.3586 10.0439C19.3586 5.29976 15.4981 1.43929 10.7539 1.43929Z'
                            fill='white'
                        />
                        <path
                            d='M7.96216 19.1137H7.03192C6.65053 19.1137 6.33425 18.7974 6.33425 18.416C6.33425 18.0346 6.63192 17.7276 7.01332 17.7183C5.55285 12.7063 5.55285 7.38152 7.01332 2.36947C6.83114 2.36581 6.65773 2.29054 6.53064 2.15996C6.40354 2.02939 6.33299 1.85401 6.33425 1.6718C6.33425 1.2904 6.65053 0.974121 7.03192 0.974121H7.96216C8.18541 0.974121 8.39936 1.08575 8.5296 1.26249C8.65983 1.44854 8.69704 1.6811 8.62262 1.89505C6.87378 7.19005 6.87378 12.907 8.62262 18.202C8.69704 18.416 8.65983 18.6485 8.5296 18.8346C8.39936 19.002 8.18541 19.1137 7.96216 19.1137Z'
                            fill='white'
                        />
                        <path
                            d='M13.5428 19.1137C13.4317 19.1146 13.322 19.0889 13.2229 19.0386C13.1239 18.9882 13.0384 18.9148 12.9736 18.8246C12.9089 18.7343 12.8668 18.6298 12.8509 18.5198C12.835 18.4098 12.8458 18.2977 12.8823 18.1927C14.6311 12.8977 14.6311 7.18076 12.8823 1.88577C12.853 1.79903 12.841 1.70737 12.8471 1.61602C12.8532 1.52467 12.8773 1.43542 12.9179 1.35336C12.9585 1.2713 13.0148 1.19803 13.0838 1.13776C13.1527 1.07748 13.2328 1.03136 13.3195 1.00205C13.4062 0.972727 13.4979 0.960779 13.5893 0.966884C13.6806 0.972989 13.7699 0.997026 13.8519 1.03763C13.934 1.07822 14.0072 1.13459 14.0675 1.2035C14.1278 1.27241 14.1739 1.35252 14.2032 1.43925C16.0544 7.0168 16.0544 13.0431 14.2032 18.6206C14.1102 18.9276 13.8311 19.1137 13.5428 19.1137Z'
                            fill='white'
                        />
                        <path
                            d='M10.7534 14.8811C8.15801 14.8811 5.57197 14.5183 3.07894 13.7835C3.06964 14.1556 2.76266 14.4625 2.38127 14.4625C1.99987 14.4625 1.68359 14.1463 1.68359 13.7649V12.8346C1.68359 12.6114 1.79522 12.3974 1.97197 12.2672C2.15801 12.137 2.39057 12.0997 2.60452 12.1742C7.89952 13.923 13.6165 13.923 18.9115 12.1742C19.0167 12.1381 19.129 12.1278 19.2391 12.1439C19.3491 12.1601 19.4537 12.2024 19.5441 12.2672C19.7301 12.3974 19.8324 12.6114 19.8324 12.8346V13.7649C19.8324 14.1463 19.5162 14.4625 19.1348 14.4625C18.7534 14.4625 18.4464 14.1649 18.4371 13.7835C15.9348 14.5183 13.3487 14.8811 10.7534 14.8811Z'
                            fill='white'
                        />
                        <path
                            d='M19.125 7.95059C19.0506 7.95059 18.9761 7.94129 18.9017 7.91338C13.6067 6.16454 7.88974 6.16454 2.59475 7.91338C2.22265 8.03431 1.83196 7.83896 1.71103 7.47617C1.5994 7.10408 1.79475 6.71338 2.15754 6.59245C7.73509 4.74132 13.7614 4.74132 19.3389 6.59245C19.7017 6.71338 19.9064 7.11338 19.7761 7.47617C19.7325 7.6144 19.6457 7.73501 19.5285 7.82038C19.4114 7.90574 19.2699 7.95137 19.125 7.95059Z'
                            fill='white'
                        />
                      </svg>
                      <div className={styles.headerLangNowTtl}>
                        <span>{t('top_menu.lang.default')}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.headerLangsModal}>
                    <i></i>
                    <div className={styles.headerLangsModalTtl}>Change Language</div>
                    <div className={styles.headerLangsModalInner}>
                      {LANG_DATA.map((item, index) => {
                        return (
                              <div
                                  className={`${styles.headerLangsModalLink} ${t('top_menu.lang.default') === item.title ? styles.headerLangsModalLinkActive : ''}`}
                                  key={item.id}
                                  onClick={() => {
                                    openLangs(false);
                                    changeLanguage(item.title);
                                  }}
                              >
                                {item.fullName}
                                <div>-</div>
                                {item.title}
                              </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.headerSettingsBtn} ${activeSettings ? styles.headerSettingsBtnActive : ''}`}
              >
                <i></i>
                <div className={styles.headerSettingsBtnSvg}>
                  <svg
                      width='22'
                      height='21'
                      viewBox='0 0 22 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      onClick={() => {
                        openSettings(true);
                      }}
                  >
                    <path
                        d='M11.3047 13.7208C9.27352 13.7208 7.625 12.0723 7.625 10.0411C7.625 8.00985 9.27352 6.36133 11.3047 6.36133C13.336 6.36133 14.9845 8.00985 14.9845 10.0411C14.9845 12.0723 13.336 13.7208 11.3047 13.7208ZM11.3047 7.83322C10.088 7.83322 9.0969 8.8243 9.0969 10.0411C9.0969 11.2578 10.088 12.2489 11.3047 12.2489C12.5215 12.2489 13.5126 11.2578 13.5126 10.0411C13.5126 8.8243 12.5215 7.83322 11.3047 7.83322Z'
                        fill='white'
                    />
                    <path
                        d='M14.4524 20.0399C14.2463 20.0399 14.0402 20.0105 13.8342 19.9614C13.2258 19.7946 12.7155 19.4119 12.3917 18.8722L12.274 18.676C11.695 17.6751 10.9002 17.6751 10.3212 18.676L10.2133 18.8624C9.88948 19.4119 9.37922 19.8044 8.77084 19.9614C8.15264 20.1283 7.51482 20.0399 6.97512 19.7161L5.28735 18.7447C4.99079 18.5748 4.73064 18.348 4.52177 18.0775C4.31291 17.8069 4.15943 17.4979 4.07012 17.1679C3.9808 16.838 3.9574 16.4937 4.00126 16.1548C4.04512 15.8158 4.15537 15.4888 4.32571 15.1925C4.61028 14.6921 4.68878 14.2407 4.52196 13.9561C4.35515 13.6715 3.9332 13.5047 3.35426 13.5047C1.92161 13.5047 0.753906 12.337 0.753906 10.9044V9.17735C0.753906 7.7447 1.92161 6.57699 3.35426 6.57699C3.9332 6.57699 4.35515 6.41018 4.52196 6.12561C4.68878 5.84105 4.62009 5.38966 4.32571 4.88922C3.98227 4.29065 3.89395 3.58414 4.07058 2.91688C4.24721 2.23981 4.67896 1.68048 5.28735 1.33704L6.98494 0.365591C8.09376 -0.291857 9.55585 0.0908364 10.2231 1.21929L10.3409 1.41554C10.9198 2.41643 11.7146 2.41643 12.2936 1.41554L12.4015 1.2291C13.0688 0.0908364 14.5309 -0.291857 15.6495 0.375403L17.3373 1.34685C17.6338 1.51678 17.894 1.7435 18.1029 2.01405C18.3117 2.2846 18.4652 2.59367 18.5545 2.92358C18.6438 3.2535 18.6672 3.59779 18.6234 3.93675C18.5795 4.27572 18.4693 4.60271 18.2989 4.89903C18.0143 5.39948 17.9358 5.85086 18.1027 6.13543C18.2695 6.41999 18.6914 6.58681 19.2704 6.58681C20.703 6.58681 21.8707 7.75451 21.8707 9.18716V10.9142C21.8707 12.3468 20.703 13.5145 19.2704 13.5145C18.6914 13.5145 18.2695 13.6813 18.1027 13.9659C17.9358 14.2505 18.0045 14.7019 18.2989 15.2023C18.6424 15.8009 18.7405 16.5074 18.554 17.1747C18.4687 17.5066 18.3169 17.8178 18.1078 18.0894C17.8986 18.361 17.6365 18.5872 17.3373 18.7545L15.6397 19.7259C15.2668 19.932 14.8645 20.0399 14.4524 20.0399ZM11.3025 16.4093C12.1758 16.4093 12.9903 16.9588 13.5496 17.9302L13.6575 18.1167C13.7753 18.3227 13.9715 18.4699 14.207 18.5288C14.4425 18.5877 14.678 18.5582 14.8743 18.4405L16.5719 17.4592C16.831 17.3098 17.0206 17.0641 17.0996 16.7757C17.1786 16.4872 17.1406 16.1792 16.9938 15.9186C16.4345 14.957 16.3658 13.9659 16.7976 13.2103C17.2293 12.4548 18.1223 12.023 19.2409 12.023C19.8689 12.023 20.3694 11.5226 20.3694 10.8946V9.16753C20.3694 8.54934 19.8689 8.03908 19.2409 8.03908C18.1223 8.03908 17.2293 7.60732 16.7976 6.85175C16.3658 6.09618 16.4345 5.1051 16.9938 4.14346C17.141 3.88833 17.1803 3.58414 17.1018 3.28976C17.0233 2.99538 16.8368 2.75988 16.5817 2.60287L14.8841 1.63142C14.7817 1.57137 14.6685 1.53211 14.5508 1.51588C14.4332 1.49966 14.3136 1.50679 14.1987 1.53687C14.0839 1.56695 13.9761 1.61938 13.8816 1.69117C13.787 1.76296 13.7075 1.8527 13.6477 1.95524L13.5398 2.14168C12.9805 3.11313 12.166 3.66264 11.2927 3.66264C10.4194 3.66264 9.60491 3.11313 9.04559 2.14168L8.93765 1.94543C8.81571 1.74489 8.62032 1.59986 8.39306 1.54122C8.16581 1.48257 7.92464 1.51493 7.72088 1.63142L6.0233 2.61269C5.76422 2.76213 5.57458 3.00776 5.49557 3.29623C5.41657 3.58469 5.45458 3.89267 5.60135 4.15327C6.16067 5.11491 6.22936 6.10599 5.79761 6.86156C5.36585 7.61714 4.4729 8.04889 3.35426 8.04889C2.72625 8.04889 2.2258 8.54934 2.2258 9.17735V10.9044C2.2258 11.5226 2.72625 12.0328 3.35426 12.0328C4.4729 12.0328 5.36585 12.4646 5.79761 13.2202C6.22936 13.9757 6.16067 14.9668 5.60135 15.9284C5.45416 16.1836 5.41491 16.4878 5.49341 16.7821C5.57191 17.0765 5.75836 17.312 6.01348 17.469L7.71107 18.4405C7.91714 18.568 8.16245 18.5975 8.38814 18.5386C8.62365 18.4797 8.8199 18.3227 8.94746 18.1167L9.0554 17.9302C9.61472 16.9686 10.4292 16.4093 11.3025 16.4093Z'
                        fill='white'
                    />
                  </svg>
                </div>
                <div
                    className={`${styles.settingsModal}`}
                    // onMouseLeave={() => {
                    //     openSettings(false);
                    // }}
                >
                  <i></i>
                  <div className={styles.settingsModalInner}>
                    <div className={styles.settingsModalTtl}>Global</div>
                    <div className={styles.settingsModalFloor}>
                      <div>Dark Mode</div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input
                            type="checkbox"
                            defaultValue={false}
                            onChange={() => {

                            }}/>
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalBtnslFloor}>
                      <div className={styles.settingsModalBtnslFloorTtl}>
                        <Tooltip
                            title={"Default Transaction Speed (GWEI)"}
                            type={"settings"}
                            text={"Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi"}
                        />
                      </div>
                      <div className={styles.settingsModalBtns}>
                        <div className={styles.settingsModalBtn}>
                          Standard (5)
                        </div>
                        <div className={styles.settingsModalBtn}>
                          Fast (6)
                        </div>
                        <div className={styles.settingsModalBtn}>
                          Instant (7)
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalLine}></div>
                    <div className={styles.settingsModalTtl}>Core & Liquidity</div>
                    <div className={styles.settingsModalBtnslFloor}>
                      <div className={styles.settingsModalTitle}>
                        <Tooltip
                            title={"Slippage Tolerance"}
                            type={"settings"}
                            text={"Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi"}
                        />
                      </div>
                      <div className={styles.settingsModalBtns}>
                        <div className={styles.settingsModalBtn}>
                          0.1%
                        </div>
                        <div className={styles.settingsModalBtn}>
                          0.5%
                        </div>
                        <div className={styles.settingsModalBtn}>
                          1.0%
                        </div>
                        <div className={styles.settingsModalInputOuter}>
                          <input
                              type="number"
                              className={styles.settingsModalInput}
                              defaultValue={0.50}
                              onChange={() => {

                              }}
                          />
                          <span>%</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                            title={"Tx deadlines (mins)"}
                            type={"settings"}
                            text={"Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi"}
                        />
                      </div>
                      <input
                          type="number"
                          className={styles.settingsModalLtlInput}
                          defaultValue={20}
                          onChange={() => {

                          }}
                      />
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                            title={"Expert Mode"}
                            type={"settings"}
                            text={"Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi"}
                        />
                      </div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input
                            type="checkbox"
                            defaultValue={false}
                            onChange={() => {

                            }}
                        />
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                            title={"Disable Multihops"}
                            type={"settings"}
                            text={"Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi"}
                        />
                      </div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input
                            type="checkbox"
                            defaultValue={false}
                            onChange={() => {

                            }}
                        />
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                            title={"Subgraph Health Indicator"}
                            type={"settings"}
                            text={"Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi"}
                        />
                      </div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input
                            type="checkbox"
                            defaultValue={false}
                            onChange={() => {

                            }}
                        />
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                            title={"Flippy sounds"}
                            type={"settings"}
                            text={"Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi"}
                        />
                      </div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input
                            type="checkbox"
                            defaultValue={false}
                            onChange={() => {

                            }}
                        />
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.headerConnectBtnContainer} ${activeSettings ? styles.transformRight : ''}`}>
                <Button
                  title={'Connect Wallet'}
                  type={'red'}
                  onClick={() => {
                    handleWalletModal(true);
                  }}
                  customStyles={{
                    padding: '2% 0',
                    width: '150px',
                  }}
                />
              </div>
              <div className={`${styles.headerConnected} ${activeSettings ? styles.transformRight : ''}`}>
                <div
                  className={`${styles.headerConnectedBtn} ${
                    profileModal ? styles.headerConnectedBtnActive : ''
                  }`}
                  onClick={() => {
                    openProfile();
                  }}
                >
                  <div className={styles.headerConnectedBtnImg}>
                    <Image
                      src={`/images/meta.png`}
                      alt='avatar'
                      layout='fill'
                    />
                    <i></i>
                  </div>
                  <span>0x7de7de44e2667bdef602fd069bcef02f1c167825</span>
                  <svg
                    width='8'
                    height='5'
                    viewBox='0 0 8 5'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.59467 0.223576C0.887563 -0.0693171 1.36244 -0.0693171 1.65533 0.223576L4.125 2.69325L6.59467 0.223576C6.88756 -0.0693171 7.36244 -0.0693171 7.65533 0.223576C7.94822 0.516469 7.94822 0.991343 7.65533 1.28424L5.18563 3.75393C4.60107 4.33849 3.64893 4.33849 3.06437 3.75393L0.59467 1.28424C0.301777 0.991343 0.301777 0.516469 0.59467 0.223576Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.burger} ${
              activeBurger ? styles.activeBurger : ''
            }`}
            onClick={() => {
              openBurger();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className={`${styles.headerConnectedModal} ${
            profileModal ? styles.headerConnectedModalActive : ''
          }`}
        >
          <div className={styles.headerConnectedModalInner}>
            <div className={styles.headerConnectedModalAddress}>
              <div>
                <span>0x7de7de44e2667bdef602fd069bcef02f1c167825</span>
                <span>metamask</span>
              </div>
              <svg
                width='17'
                height='17'
                viewBox='0 0 17 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.20525 16.1023H5.07966C2.16989 16.1023 0.875 14.8074 0.875 11.8976V8.77204C0.875 5.86227 2.16989 4.56738 5.07966 4.56738H8.20525C11.115 4.56738 12.4099 5.86227 12.4099 8.77204V11.8976C12.4099 14.8074 11.115 16.1023 8.20525 16.1023ZM5.07966 5.68366C2.77268 5.68366 1.99128 6.46506 1.99128 8.77204V11.8976C1.99128 14.2046 2.77268 14.986 5.07966 14.986H8.20525C10.5122 14.986 11.2936 14.2046 11.2936 11.8976V8.77204C11.2936 6.46506 10.5122 5.68366 8.20525 5.68366H5.07966Z'
                  fill='white'
                />
                <path
                  d='M12.674 11.6374H11.8554C11.5503 11.6374 11.2972 11.3844 11.2972 11.0793V8.77232C11.2972 6.46534 10.5159 5.68394 8.20887 5.68394H5.90189C5.59677 5.68394 5.34375 5.43092 5.34375 5.1258V4.3072C5.34375 1.39743 6.63864 0.102539 9.54841 0.102539H12.674C15.5838 0.102539 16.8787 1.39743 16.8787 4.3072V7.43279C16.8787 10.3426 15.5838 11.6374 12.674 11.6374ZM12.4135 10.5212H12.674C14.981 10.5212 15.7624 9.73977 15.7624 7.43279V4.3072C15.7624 2.00022 14.981 1.21882 12.674 1.21882H9.54841C7.24143 1.21882 6.46003 2.00022 6.46003 4.3072V4.56766H8.20887C11.1186 4.56766 12.4135 5.86255 12.4135 8.77232V10.5212Z'
                  fill='white'
                />
              </svg>
            </div>
            <a href='/wallet' className={styles.headerConnectedModalLink}>
              <span>Wallet</span>
              <svg
                width='5'
                height='9'
                viewBox='0 0 5 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.640565 7.86627C0.328145 7.55385 0.328145 7.04732 0.640565 6.7349L3.27488 4.10059L0.640564 1.46627C0.328145 1.15385 0.328145 0.64732 0.640564 0.3349C0.952984 0.0224809 1.45952 0.0224809 1.77194 0.3349L4.40628 2.96924C5.02981 3.59277 5.02981 4.6084 4.40628 5.23193L1.77194 7.86627C1.45952 8.17869 0.952984 8.17869 0.640565 7.86627Z'
                  fill='#898C92'
                />
              </svg>
            </a>
            <a
              href='/recent-transactions'
              className={styles.headerConnectedModalLink}
            >
              <span>Recent Transactions</span>
              <svg
                width='5'
                height='9'
                viewBox='0 0 5 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.640565 7.86627C0.328145 7.55385 0.328145 7.04732 0.640565 6.7349L3.27488 4.10059L0.640564 1.46627C0.328145 1.15385 0.328145 0.64732 0.640564 0.3349C0.952984 0.0224809 1.45952 0.0224809 1.77194 0.3349L4.40628 2.96924C5.02981 3.59277 5.02981 4.6084 4.40628 5.23193L1.77194 7.86627C1.45952 8.17869 0.952984 8.17869 0.640565 7.86627Z'
                  fill='#898C92'
                />
              </svg>
            </a>
            <i></i>
            <a href='/your-nfts' className={styles.headerConnectedModalLink}>
              <span>Your NFTs</span>
              <svg
                width='5'
                height='9'
                viewBox='0 0 5 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.640565 7.86627C0.328145 7.55385 0.328145 7.04732 0.640565 6.7349L3.27488 4.10059L0.640564 1.46627C0.328145 1.15385 0.328145 0.64732 0.640564 0.3349C0.952984 0.0224809 1.45952 0.0224809 1.77194 0.3349L4.40628 2.96924C5.02981 3.59277 5.02981 4.6084 4.40628 5.23193L1.77194 7.86627C1.45952 8.17869 0.952984 8.17869 0.640565 7.86627Z'
                  fill='#898C92'
                />
              </svg>
            </a>
            <a href='/make-profile' className={styles.headerConnectedModalLink}>
              <span>Make a Profile</span>
              <svg
                width='5'
                height='9'
                viewBox='0 0 5 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0.640565 7.86627C0.328145 7.55385 0.328145 7.04732 0.640565 6.7349L3.27488 4.10059L0.640564 1.46627C0.328145 1.15385 0.328145 0.64732 0.640564 0.3349C0.952984 0.0224809 1.45952 0.0224809 1.77194 0.3349L4.40628 2.96924C5.02981 3.59277 5.02981 4.6084 4.40628 5.23193L1.77194 7.86627C1.45952 8.17869 0.952984 8.17869 0.640565 7.86627Z'
                  fill='#898C92'
                />
              </svg>
            </a>
            <i></i>
            <a
              href='/disconnect-wallet'
              className={styles.headerConnectedModalLink}
            >
              <span>Disconnect Wallet</span>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path
                    d='M12.231 9.79986C12.079 9.79986 11.927 9.74386 11.807 9.62386C11.6954 9.51095 11.6328 9.3586 11.6328 9.19986C11.6328 9.04111 11.6954 8.88877 11.807 8.77586L13.431 7.15186L11.807 5.52786C11.6954 5.41495 11.6328 5.2626 11.6328 5.10386C11.6328 4.94511 11.6954 4.79277 11.807 4.67986C12.039 4.44786 12.423 4.44786 12.655 4.67986L14.703 6.72786C14.935 6.95986 14.935 7.34386 14.703 7.57586L12.655 9.62386C12.535 9.74386 12.383 9.79986 12.231 9.79986Z'
                    fill='#898C92'
                  />
                  <path
                    d='M14.2204 7.75176H6.08437C5.75637 7.75176 5.48438 7.47976 5.48438 7.15176C5.48438 6.82376 5.75637 6.55176 6.08437 6.55176H14.2204C14.5484 6.55176 14.8204 6.82376 14.8204 7.15176C14.8204 7.47976 14.5484 7.75176 14.2204 7.75176Z'
                    fill='#898C92'
                  />
                  <path
                    d='M7.6875 14.1035C3.5675 14.1035 0.6875 11.2235 0.6875 7.10352C0.6875 2.98352 3.5675 0.103516 7.6875 0.103516C8.0155 0.103516 8.2875 0.375516 8.2875 0.703516C8.2875 1.03152 8.0155 1.30352 7.6875 1.30352C4.2715 1.30352 1.8875 3.68752 1.8875 7.10352C1.8875 10.5195 4.2715 12.9035 7.6875 12.9035C8.0155 12.9035 8.2875 13.1755 8.2875 13.5035C8.2875 13.8315 8.0155 14.1035 7.6875 14.1035Z'
                    fill='#898C92'
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div
          className={`${styles.headerCornerModal} ${
            walletModal ? styles.connectWalletActive : ''
          }`}
        >
          <i></i>
          <div
            className={`${styles.connectWalletItems} ${
              walletModal ? styles.connectWalletItemsActive : ''
            }`}
          >
            {WALLETS_DATA.map((item, index) => {
              return (
                <div
                  className={styles.connectWalletItemOuter}
                  key={item.id}
                  style={{
                    transitionDelay: walletModal ? `${(index + 2) / 10}s` : '',
                  }}
                  onClick={() => {
                    connect(item.type);
                  }}
                >
                  <div className={styles.connectWalletItem}>
                    <div className={styles.connectWalletItemImg}>
                      <Image
                        src={`/images/${item.img}`}
                        alt=''
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>{item.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`${styles.headerLine} ${
            activeMenu !== null || activeLangs || activeSettings || walletModal
              ? styles.headerLineActive
              : ''
          }`}
        ></div>
      </header>
      <div
        className={`${styles.headerBg} ${
          activeMenu !== null || activeLangs || activeSettings || walletModal
            ? styles.headerBgActive
            : ''
        }`}
        onClick={() => {
          closeAll();
        }}
      ></div>
    </div>
  );
};

export default Header;
