import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import useConnect from "../../hooks/use-connect";

import { injected, walletConnect } from '../../connector';
import useConnect from '../../hooks/use-connect';
import createAxiosInstance from '../../pages/api/axios';
import Button from '../UI/button/Button';
import Tooltip from '../UI/tooltip/Tooltip';

import styles from './Header.module.css';

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
  const { connect, disconnect, library, error, setError } = useConnect();
  const axios = useMemo(() => createAxiosInstance(), []);

  const account = useSelector(state => state.connect.account);
  const triedReconnect = useSelector(state => state.appState.triedReconnect);
  const locales = useSelector(state => state.settings.locales);

  const [activeMenu, setActiveMenu] = useState(null);
  const [activeLangs, setActiveLangs] = useState(false);
  const [activeSettings, setActiveSettings] = useState(false);
  const [settingRightOffset, setSettingRightOffset] = useState(0);
  const [activeBurger, setActiveBurger] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [connectBtnColor, setConnectBtnColor] = useState('red');
  const [device, setDevice] = useState(null);
  const [walletModal, setWalletModal] = useState(false);
  const isConnected = useSelector(state => state.connect.isConnected);
  const slippage = useSelector(state => state.settings.slippage);
  const [balance, setBalance] = useState(0);
  const [stickHead, setStickHead] = useState(false);
  const { t } = useTranslation('header');
  const [routerLocale, setRouterLocale] = useState(null);

  const dispatch = useDispatch();

  const NAV_DATA = [
    {
      id: 0,
      title: 'Overview',
      route: '/home/',
      subNav: [],
      subNavWithTitle: [
        {
          title:'About Us',
          subNav: [
            {
              id: 20,
              title: 'Brand Guidlines',
              route: '/home/brand-guidlines',
            },
            {
              id: 21,
              title: 'Careers',
              route: '/home/careers',
            },
            {
              id: 22,
              title: 'Press',
              route: '/home/press',
            },
            {
              id: 23,
              title: 'Events',
              route: '/home/events',
            },
            {
              id: 24,
              title: 'Privacy',
              route: '/home/privacy',
            },
            {
              id: 25,
              title: 'Terms',
              route: '/home/terms',
            }
          ]
        },
        {
          title:'Support',
          subNav: [
            {
              id: 26,
              title: 'Bug Bounty',
              route: '/overview/bug-bounty',
            },
            {
              id: 27,
              title: 'Your Voice Matter',
              route: '/overview/your-voice',
            },
            {
              id: 28,
              title: 'Support',
              route: '/overview/support',
            },
            {
              id: 29,
              title: 'FAQ',
              route: '/overview/faq',
            },
            {
              id: 30,
              title: 'Ambassador',
              route: '/overview/ambassador',
            }
          ]
        },
        {
          title:'Learn',
          subNav: [
            {
              id: 31,
              title: 'Technology',
              route: '/overview/technology',
            },
            {
              id: 32,
              title: 'Tokenomics',
              route: '/overview/tokenomics',
            }
          ]
        }
      ]
    },
    {
      id: 1,
      title: t('top_menu.trade'),
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
        /*{
          id: 4,
          title: 'Prepetual',
          route: '/prepetual',
        },*/
      ],
    },
    {
      id: 2,
      title: 'Overview',
      route: '/home',
      subNav: [
        {
          id: 5,
          title: 'Press',
          route: '/home/press',
        },
        {
          id: 6,
          title: 'Event',
          route: '/home/events',
        },
      ],
    },
    /*{
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
    },*/
    {
      id: 5,
      title: 'More',
      route: '/voting',
      subNav: [
        /*{
          id: 13,
          title: 'Info',
          route: '/info',
        },*/
        {
          id: 14,
          title: 'Voting',
          route: '/voting',
        },
        {
          id: 456,
          title: 'Wallet',
          route: 'https://wallet-landing-next-six.vercel.app',
        },
        /*{
          id: 15,
          title: 'Leaderbord',
          route: '/leaderbord',
        },*/
      ],
    },
  ];

  const router = useRouter();

  const changeLanguage = loc => {
    // i18n.changeLanguage(locale.toLowerCase());
    //router.push('', '', { locale: loc.toLowerCase() });
    //setRouterLocale(loc);
    dispatch({
      type: "SET_ACTIVE_LANG",
      activeLang: loc
    });
  };

  let web3Obj = library;

  const getBalance = async () => {
    if (web3Obj !== undefined) {
      web3Obj.eth.getBalance(account).then(res => {
        setBalance(res);
      });
    }
  };

  const openMenu = id => {
    if (window.innerWidth >= 1024) {
      closeAll();
    }
    if (activeMenu !== id) {
      setActiveMenu(id);
    } else {
      setActiveMenu(null);
    }
  };

  const openLangs = state => {
    closeAll();
    setActiveLangs(state);
    if (device === 'mobile') {
      if (state === true) {
        setConnectBtnColor('white');
      } else {
        setConnectBtnColor('red');
      }
    }
  };

  const openSettings = state => {
    closeAll();
    setActiveSettings(state);
    if (device === 'mobile') {
      if (state === true) {
        setConnectBtnColor('white');
      } else {
        setConnectBtnColor('red');
      }
    }
  };

  const openBurger = () => {
    closeAll();
    if (activeBurger) {
      setActiveBurger(false);
    } else {
      setActiveBurger(true);
      setConnectBtnColor('white');
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
    // handleWalletModal(false);
    setWalletModal(false);
    setProfileModal(false);
    setActiveLangs(false);
    setActiveBurger(false);
    setConnectBtnColor('red');
  };

  const getLocales = async () => {
    axios
    .get('/langs/get-locales')
    .then(res => {
      let locales = res.data[0].list;

      dispatch({
        type: "SET_LOCALES",
        locales
      });
    })
    .catch(() => {});
  };

  const isSticky = e => {
    const scrollTop = window.scrollY;
    if (scrollTop >= 10) {
      setStickHead(true);
    } else {
      setStickHead(false);
    }
  };

  useEffect(() => {
    if (isConnected) {
      getBalance();
    } else {
      setBalance(0);
    }
    // console.log(isConnected);
  }, [account, isConnected]);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setDevice('desktop');
    }
    if (window.innerWidth <= 767) {
    }
    //setRouterLocale(router.locale);
    getLocales();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  useEffect(() => {
    if (account && triedReconnect) {
      axios
        .post('/auth/register-wallet-address', { address: account })
        .then(res => console.log(res))
        .catch(() => {});
    }
    // eslint-disable-next-line
  }, [account]);

  return (
    <div>
      <header className={`${styles.header} ${stickHead ? styles.stickHeader : ''}`}>
        <div className={`${styles.headerInner} container`}>
          <Link href='/home'>
            <div>
              <div
                className={`${styles.headerLogo} ${styles.headerLogoMobile} ${
                  activeBurger !== false || activeLangs || activeSettings || profileModal ? styles.whiteLogo : ''
                }`}
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='37' height='33' viewBox='0 0 70 70' fill='none'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M46.118 57.0642C50.1498 57.0645 54.1045 55.9611 57.5524 53.874C61.0004 51.7868 63.8097 48.7957 65.675 45.2256C67.5404 41.6556 68.3905 37.6431 68.1329 33.6244C67.8752 29.6056 66.5198 25.7342 64.2139 22.4309C61.9079 19.1276 58.7397 16.5188 55.0534 14.8878C51.3671 13.2569 47.3038 12.6663 43.305 13.1801C39.3062 13.694 35.5249 15.2927 32.372 17.8026C29.2191 20.3124 26.8152 23.6373 25.4215 27.4161C26.699 27.7919 27.8606 28.4843 28.7983 29.4289C31.8483 31.1153 36.5323 32.3665 41.0528 29.7553C41.9349 28.7641 43.0515 28.0094 44.3006 27.5599C45.5497 27.1103 46.8916 26.9804 48.2039 27.1819C49.5162 27.3833 50.7572 27.9098 51.8135 28.7132C52.8698 29.5167 53.7079 30.5715 54.2513 31.7815C54.7947 32.9915 55.0261 34.3181 54.9244 35.6404C54.8227 36.9626 54.3912 38.2384 53.6691 39.3513C52.9471 40.4642 51.9575 41.3789 50.7908 42.0117C49.624 42.6446 48.3172 42.9756 46.9894 42.9745C45.2652 42.967 43.5875 42.4148 42.1966 41.3969C39.0921 39.8737 33.5367 38.4593 28.0903 41.2881C27.2978 41.9106 26.3912 42.3726 25.4215 42.6481C26.9811 46.8768 29.8015 50.526 33.5023 53.1038C37.203 55.6816 41.6062 57.0638 46.118 57.0642Z'
                    fill='#FF6969'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M44.7564 27.4705C42.9663 22.6169 39.5236 18.5472 35.0313 15.9741C30.539 13.4009 25.2836 12.4885 20.1855 13.3966C15.0874 14.3047 10.4717 16.9755 7.14682 20.941C3.82198 24.9066 2 29.9141 2 35.0865C2 40.2589 3.82198 45.2665 7.14682 49.232C10.4717 53.1976 15.0874 55.8683 20.1855 56.7764C25.2836 57.6845 30.539 56.7721 35.0313 54.199C39.5236 51.6259 42.9663 47.5561 44.7564 42.7025C43.828 42.4334 42.9593 41.9903 42.1966 41.3969C39.0921 39.8737 33.5367 38.4593 28.0903 41.2881C26.6984 42.3952 24.9677 42.9907 23.1885 42.9745C22.1442 42.9745 21.1102 42.7691 20.1455 42.37C19.1807 41.9708 18.3041 41.3858 17.5657 40.6483C16.8273 39.9107 16.2416 39.0352 15.842 38.0715C15.4423 37.1079 15.2367 36.0751 15.2367 35.0321C15.2367 33.9891 15.4423 32.9563 15.842 31.9927C16.2416 31.0291 16.8273 30.1535 17.5657 29.416C18.3041 28.6784 19.1807 28.0934 20.1455 27.6943C21.1102 27.2951 22.1442 27.0897 23.1885 27.0897C24.2329 27.0831 25.268 27.2868 26.2319 27.6887C27.1957 28.0906 28.0686 28.6825 28.7983 29.4289C31.8483 31.1153 36.5323 32.3665 41.0528 29.7553C42.0528 28.6671 43.3346 27.8763 44.7564 27.4705Z'
                    fill='#18FFFF'
                  />
                </svg>
              </div>
              <div className={`${styles.headerLogo} ${styles.headerLogoDesktop}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="126" height="24" viewBox="0 0 126 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.0012 24C30.6286 24 36.0012 18.6274 36.0012 12C36.0012 5.37258 30.6286 0 24.0012 0C18.8313 0 14.425 3.26933 12.737 7.85332C13.4424 8.05999 14.0729 8.44179 14.5784 8.94843C16.2274 9.87684 18.7747 10.5502 21.2604 9.11831C22.0514 8.23525 23.2004 7.67957 24.4793 7.67957C26.8651 7.67957 28.7993 9.6137 28.7993 11.9996C28.7993 14.3854 26.8651 16.3196 24.4793 16.3196C23.504 16.3196 22.6042 15.9964 21.8812 15.4513C20.2003 14.6082 17.1594 13.8465 14.194 15.3929C13.7662 15.7304 13.2731 15.9888 12.7367 16.1459C14.4245 20.7303 18.831 24 24.0012 24Z" fill="#E96B6B"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M23.264 7.85252C21.5757 3.26895 17.1696 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C17.1699 24 21.5762 20.7307 23.2642 16.1467C22.7582 15.9988 22.2906 15.7609 21.88 15.4513C20.1991 14.6082 17.1582 13.8465 14.1927 15.3929C13.4572 15.9732 12.5285 16.3196 11.5189 16.3196C9.13305 16.3196 7.19892 14.3854 7.19892 11.9996C7.19892 9.6137 9.13305 7.67957 11.5189 7.67957C12.7137 7.67957 13.7951 8.16458 14.5772 8.94843C16.2262 9.87684 18.7735 10.5502 21.2592 9.1183C21.7895 8.52631 22.4806 8.08147 23.264 7.85252Z" fill="#A6D0DD"/>
                  <path d="M55.9371 16.4855C55.575 16.637 55.2105 16.7734 54.8435 16.8946C54.4764 17.0159 54.0968 17.1194 53.7046 17.2053C53.3124 17.2962 52.8976 17.3644 52.4602 17.4099C52.0278 17.4553 51.5627 17.4781 51.0649 17.4781C50.009 17.4781 49.0361 17.3644 48.1461 17.1371C47.2612 16.9098 46.4969 16.5688 45.8533 16.1142C45.2148 15.6546 44.717 15.0838 44.36 14.4019C44.003 13.7149 43.8245 12.9143 43.8245 12C43.8245 11.0857 44.003 10.2877 44.36 9.60574C44.717 8.91877 45.2148 8.34799 45.8533 7.89338C46.4969 7.43372 47.2612 7.09023 48.1461 6.86293C49.0361 6.63562 50.009 6.52197 51.0649 6.52197C51.5627 6.52197 52.0278 6.5447 52.4602 6.59016C52.8976 6.63562 53.3124 6.70382 53.7046 6.79474C54.0968 6.88061 54.4764 6.98416 54.8435 7.10539C55.2105 7.22662 55.575 7.363 55.9371 7.51454V10.0452C55.6505 9.88861 55.3488 9.73454 55.032 9.58301C54.7152 9.42642 54.3658 9.28751 53.9837 9.16628C53.6015 9.04 53.1817 8.93898 52.7241 8.86321C52.2666 8.78239 51.7512 8.74198 51.178 8.74198C50.2981 8.74198 49.5665 8.8329 48.9833 9.01475C48.4051 9.19659 47.9425 9.43905 47.5955 9.74212C47.2486 10.0452 47.0048 10.3937 46.864 10.7877C46.7232 11.1767 46.6528 11.5808 46.6528 12C46.6528 12.2778 46.683 12.5531 46.7433 12.8259C46.8036 13.0936 46.9042 13.3487 47.045 13.5911C47.1858 13.8286 47.3693 14.0483 47.5955 14.2503C47.8218 14.4524 48.1034 14.6266 48.4403 14.7731C48.7771 14.9196 49.1693 15.0358 49.6168 15.1217C50.0693 15.2025 50.5897 15.2429 51.178 15.2429C51.7512 15.2429 52.2666 15.2075 52.7241 15.1368C53.1817 15.061 53.6015 14.9625 53.9837 14.8413C54.3658 14.7201 54.7152 14.5837 55.032 14.4322C55.3488 14.2756 55.6505 14.1165 55.9371 13.9548V16.4855Z" fill="#162029"/>
                  <path d="M66.9484 15.2277H61.1712L60.1983 17.1977H57.0759L62.4986 6.78716H65.621L71.0438 17.1977H67.9214L66.9484 15.2277ZM62.1743 13.1972H65.9604L64.0749 9.36328L62.1743 13.1972Z" fill="#162029"/>
                  <path d="M77.9447 9.05263V17.1977H75.1466V9.05263H70.7496V6.78716H82.3493V9.05263H77.9447Z" fill="#162029"/>
                  <path d="M84.2046 17.1977V6.78716H94.6956V9.00717H87.0782V10.7271H94.3034V12.9471H87.0782V14.9777H94.8012V17.1977H84.2046Z" fill="#162029"/>
                  <path d="M107.298 17.1977L100.307 10.0452V17.1977H97.5088V6.78716H100.548L107.547 13.97V6.78716H110.33V17.1977H107.298Z" fill="#162029"/>
                  <path d="M121.9 15.2277H116.123L115.15 17.1977H112.027L117.45 6.78716H120.572L125.995 17.1977H122.873L121.9 15.2277ZM117.126 13.1972H120.912L119.026 9.36328L117.126 13.1972Z" fill="#162029"/>
                </svg>
                <div
                  className={`${styles.headerLogoLine} ${activeMenu !== null ? styles.headerLogoLineActive : ''}`}
                ></div>
                <div className={styles.headerLogoTxtOuter}>
                  <span className={`${styles.headerLogoTxt} ${activeMenu !== null ? styles.headerLogoTxtHidden : ''}`}>
                    Dashboard
                  </span>
                </div>
              </div>
            </div>
          </Link>
          <nav
            className={`${styles.headerNav} ${activeBurger ? styles.activeHeaderNav : ''} ${
              activeMenu !== null ? styles.headerNavOpacity : ''
            }`}
          >
            <i></i>
            {NAV_DATA.map(item => {
              return (
                <div
                  className={`${styles.headerNavLink} ${activeMenu === item.id ? styles.activeMenu : ''}`}
                  key={item.id}
                  onMouseLeave={() => {
                    openMenu(null);
                  }}
                >
                  <Link href={item.route}>
                    <a
                      className={`${styles.headerNavLinkTtl} ${activeMenu === item.id ? styles.activeTtl : ''}`}
                      onMouseEnter={() => {
                        openMenu(item.id);
                      }}
                      onClick={() => {
                        openMenu(item.id);
                      }}
                    >
                      <span>{item.title}</span>
                    </a>
                  </Link>
                  <div
                    className={`${styles.headerNavLinkSubTtl} ${activeMenu === item.id ? styles.activeMenuSub : ''}`}
                  >
                    <i className={activeMenu === item.id ? styles.activeBg : ''}></i>
                    {item.subNav.length > 0 && item.subNav.map((sub, index) => {
                      return (
                        <Link href={sub.route} key={sub.id}>
                          <a>
                            <div
                              style={{
                                transitionDelay:
                                  activeMenu === item.id ? `${(index + (device === 'desktop' ? 9 : 0)) / 20 }s` : '0s',
                              }}
                            >
                              <span>{sub.title}</span>
                            </div>
                          </a>
                        </Link>
                      );
                    })}
                    <div  className={`${styles.headerNavLinkWithTitleMain}`}>
                      {
                          item.subNavWithTitle && item.subNavWithTitle.length > 0 && item.subNavWithTitle.map((sub, index) => {
                          return (
                              <div className={`${styles.headerNavLinkWithTitleContainer}`}>
                                <a>
                                  <div
                                      style={{
                                        transitionDelay:
                                            activeMenu === item.id ? `${(index + (device === 'desktop' ? 9 : 0)) / 20}s` : '0s',
                                      }}
                                  >
                                    <span className={`${styles.headerNavLinkWithTitleTtl} ttl`}>{sub.title}</span>
                                  </div>
                                </a>
                                {sub.subNav.map((subLower) => {
                                  return (
                                      <Link href={subLower.route} key={subLower.id}>
                                        <a>
                                          <div
                                              style={{
                                                transitionDelay:
                                                    activeMenu === item.id ? `${(index + (device === 'desktop' ? 9 : 0)) / 20}s` : '0s',
                                              }}
                                          >
                                            <span>{subLower.title}</span>
                                          </div>
                                        </a>
                                      </Link>
                                  );
                                })}
                              </div>
                          );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={styles.headerMobileFooterOuter}>
              <div className={styles.headerMobileFooter}>
                <div className={styles.headerMobileFooterFirst}>
                  <div>
                    <svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70' fill='none'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M46.118 57.0642C50.1498 57.0645 54.1045 55.9611 57.5524 53.874C61.0004 51.7868 63.8097 48.7957 65.675 45.2256C67.5404 41.6556 68.3905 37.6431 68.1329 33.6244C67.8752 29.6056 66.5198 25.7342 64.2139 22.4309C61.9079 19.1276 58.7397 16.5188 55.0534 14.8878C51.3671 13.2569 47.3038 12.6663 43.305 13.1801C39.3062 13.694 35.5249 15.2927 32.372 17.8026C29.2191 20.3124 26.8152 23.6373 25.4215 27.4161C26.699 27.7919 27.8606 28.4843 28.7983 29.4289C31.8483 31.1153 36.5323 32.3665 41.0528 29.7553C41.9349 28.7641 43.0515 28.0094 44.3006 27.5599C45.5497 27.1103 46.8916 26.9804 48.2039 27.1819C49.5162 27.3833 50.7572 27.9098 51.8135 28.7132C52.8698 29.5167 53.7079 30.5715 54.2513 31.7815C54.7947 32.9915 55.0261 34.3181 54.9244 35.6404C54.8227 36.9626 54.3912 38.2384 53.6691 39.3513C52.9471 40.4642 51.9575 41.3789 50.7908 42.0117C49.624 42.6446 48.3172 42.9756 46.9894 42.9745C45.2652 42.967 43.5875 42.4148 42.1966 41.3969C39.0921 39.8737 33.5367 38.4593 28.0903 41.2881C27.2978 41.9106 26.3912 42.3726 25.4215 42.6481C26.9811 46.8768 29.8015 50.526 33.5023 53.1038C37.203 55.6816 41.6062 57.0638 46.118 57.0642Z'
                        fill='#FF6969'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M44.7564 27.4705C42.9663 22.6169 39.5236 18.5472 35.0313 15.9741C30.539 13.4009 25.2836 12.4885 20.1855 13.3966C15.0874 14.3047 10.4717 16.9755 7.14682 20.941C3.82198 24.9066 2 29.9141 2 35.0865C2 40.2589 3.82198 45.2665 7.14682 49.232C10.4717 53.1976 15.0874 55.8683 20.1855 56.7764C25.2836 57.6845 30.539 56.7721 35.0313 54.199C39.5236 51.6259 42.9663 47.5561 44.7564 42.7025C43.828 42.4334 42.9593 41.9903 42.1966 41.3969C39.0921 39.8737 33.5367 38.4593 28.0903 41.2881C26.6984 42.3952 24.9677 42.9907 23.1885 42.9745C22.1442 42.9745 21.1102 42.7691 20.1455 42.37C19.1807 41.9708 18.3041 41.3858 17.5657 40.6483C16.8273 39.9107 16.2416 39.0352 15.842 38.0715C15.4423 37.1079 15.2367 36.0751 15.2367 35.0321C15.2367 33.9891 15.4423 32.9563 15.842 31.9927C16.2416 31.0291 16.8273 30.1535 17.5657 29.416C18.3041 28.6784 19.1807 28.0934 20.1455 27.6943C21.1102 27.2951 22.1442 27.0897 23.1885 27.0897C24.2329 27.0831 25.268 27.2868 26.2319 27.6887C27.1957 28.0906 28.0686 28.6825 28.7983 29.4289C31.8483 31.1153 36.5323 32.3665 41.0528 29.7553C42.0528 28.6671 43.3346 27.8763 44.7564 27.4705Z'
                        fill='#18FFFF'
                      />
                    </svg>
                    ${balance}
                  </div>
                  <div
                    onClick={() => {
                      openLangs(true);
                    }}
                  >
                    <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M10.7871 20C5.27083 20 0.787109 15.5163 0.787109 10C0.787109 4.48372 5.27083 0 10.7871 0C16.3034 0 20.7871 4.48372 20.7871 10C20.7871 15.5163 16.3034 20 10.7871 20ZM10.7871 1.39535C6.04292 1.39535 2.18246 5.25581 2.18246 10C2.18246 14.7442 6.04292 18.6047 10.7871 18.6047C15.5313 18.6047 19.3918 14.7442 19.3918 10C19.3918 5.25581 15.5313 1.39535 10.7871 1.39535Z'
                        fill='white'
                      />
                      <path
                        d='M7.99731 19.0697H7.06708C6.68568 19.0697 6.36941 18.7534 6.36941 18.372C6.36941 17.9906 6.66708 17.6837 7.04847 17.6744C5.58801 12.6623 5.58801 7.33758 7.04847 2.32552C6.86629 2.32186 6.69289 2.24659 6.56579 2.11602C6.4387 1.98544 6.36815 1.81006 6.36941 1.62785C6.36941 1.24645 6.68568 0.930176 7.06708 0.930176H7.99731C8.22057 0.930176 8.43452 1.0418 8.56475 1.21855C8.69499 1.40459 8.7322 1.63715 8.65778 1.85111C6.90894 7.1461 6.90894 12.8631 8.65778 18.1581C8.7322 18.372 8.69499 18.6046 8.56475 18.7906C8.43452 18.9581 8.22057 19.0697 7.99731 19.0697Z'
                        fill='white'
                      />
                      <path
                        d='M13.5779 19.0697C13.4668 19.0707 13.3571 19.0449 13.2581 18.9946C13.159 18.9443 13.0735 18.8709 13.0088 18.7806C12.944 18.6903 12.9019 18.5858 12.886 18.4758C12.8701 18.3659 12.8809 18.2537 12.9175 18.1488C14.6663 12.8538 14.6663 7.13681 12.9175 1.84182C12.8881 1.75509 12.8762 1.66343 12.8823 1.57208C12.8884 1.48073 12.9124 1.39147 12.953 1.30941C12.9936 1.22735 13.05 1.15409 13.1189 1.09381C13.1878 1.03353 13.2679 0.987418 13.3547 0.9581C13.4414 0.928781 13.5331 0.916834 13.6244 0.922938C13.7158 0.929043 13.805 0.953081 13.8871 0.99368C13.9691 1.03428 14.0424 1.09064 14.1027 1.15955C14.163 1.22847 14.2091 1.30858 14.2384 1.39531C16.0895 6.97286 16.0895 12.9992 14.2384 18.5767C14.1454 18.8837 13.8663 19.0697 13.5779 19.0697Z'
                        fill='white'
                      />
                      <path
                        d='M10.7866 14.8372C8.19122 14.8372 5.60517 14.4744 3.11215 13.7395C3.10284 14.1116 2.79587 14.4186 2.41447 14.4186C2.03308 14.4186 1.7168 14.1023 1.7168 13.7209V12.7907C1.7168 12.5674 1.82842 12.3535 2.00517 12.2232C2.19122 12.093 2.42377 12.0558 2.63773 12.1302C7.93272 13.8791 13.6497 13.8791 18.9447 12.1302C19.0499 12.0942 19.1622 12.0838 19.2723 12.1C19.3823 12.1162 19.4869 12.1584 19.5773 12.2232C19.7633 12.3535 19.8656 12.5674 19.8656 12.7907V13.7209C19.8656 14.1023 19.5494 14.4186 19.168 14.4186C18.7866 14.4186 18.4796 14.1209 18.4703 13.7395C15.968 14.4744 13.3819 14.8372 10.7866 14.8372Z'
                        fill='white'
                      />
                      <path
                        d='M19.1601 7.90713C19.0857 7.90713 19.0113 7.89783 18.9369 7.86992C13.6419 6.12109 7.9249 6.12109 2.6299 7.86992C2.25781 7.99085 1.86711 7.7955 1.74618 7.43271C1.63456 7.06062 1.8299 6.66992 2.19269 6.54899C7.77025 4.69786 13.7965 4.69786 19.3741 6.54899C19.7369 6.66992 19.9415 7.06992 19.8113 7.43271C19.7676 7.57094 19.6808 7.69156 19.5637 7.77692C19.4465 7.86229 19.3051 7.90791 19.1601 7.90713Z'
                        fill='white'
                      />
                    </svg>
                    {routerLocale}
                  </div>
                </div>
                <div className={styles.headerMobileFooterSecond}>
                  <div>Following</div>
                  <div className={styles.headerMobileFooterSocs}>
                    <Link href='##'>
                      <a href='##'>
                        <svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M7.33532 20V10.8777H10.3961L10.8553 7.32156H7.33532V5.05147C7.33532 4.0222 7.61996 3.32076 9.09761 3.32076L10.9791 3.31999V0.13923C10.6538 0.0969453 9.53683 0 8.23683 0C5.52223 0 3.66377 1.65697 3.66377 4.69927V7.32156H0.59375V10.8777H3.66377V20H7.33532Z'
                            fill='white'
                          />
                        </svg>
                      </a>
                    </Link>
                    <Link href='##'>
                      <a href='##'>
                        <svg width='21' height='18' viewBox='0 0 21 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M20.7871 2.79875C20.0434 3.125 19.2509 3.34125 18.4246 3.44625C19.2746 2.93875 19.9234 2.14125 20.2284 1.18C19.4359 1.6525 18.5609 1.98625 17.6284 2.1725C16.8759 1.37125 15.8034 0.875 14.6334 0.875C12.3634 0.875 10.5359 2.7175 10.5359 4.97625C10.5359 5.30125 10.5634 5.61375 10.6309 5.91125C7.22211 5.745 4.20586 4.11125 2.17961 1.6225C1.82586 2.23625 1.61836 2.93875 1.61836 3.695C1.61836 5.115 2.34961 6.37375 3.43961 7.1025C2.78086 7.09 2.13461 6.89875 1.58711 6.5975C1.58711 6.61 1.58711 6.62625 1.58711 6.6425C1.58711 8.635 3.00836 10.29 4.87211 10.6712C4.53836 10.7625 4.17461 10.8062 3.79711 10.8062C3.53461 10.8062 3.26961 10.7913 3.02086 10.7362C3.55211 12.36 5.05961 13.5538 6.85211 13.5925C5.45711 14.6838 3.68586 15.3412 1.76836 15.3412C1.43211 15.3412 1.10961 15.3263 0.787109 15.285C2.60336 16.4563 4.75586 17.125 7.07711 17.125C14.6221 17.125 18.7471 10.875 18.7471 5.4575C18.7471 5.27625 18.7409 5.10125 18.7321 4.9275C19.5459 4.35 20.2296 3.62875 20.7871 2.79875Z'
                            fill='white'
                          />
                        </svg>
                      </a>
                    </Link>
                    <Link href='##'>
                      <a href='##'>
                        <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g>
                            <path
                              d='M20.7822 19.9999V19.999H20.7872V12.664C20.7872 9.07569 20.0147 6.31152 15.8197 6.31152C13.803 6.31152 12.4497 7.41819 11.8972 8.46736H11.8388V6.64652H7.86133V19.999H12.003V13.3874C12.003 11.6465 12.333 9.9632 14.4888 9.9632C16.613 9.9632 16.6447 11.9499 16.6447 13.499V19.9999H20.7822Z'
                              fill='white'
                            />
                            <path d='M1.11719 6.64746H5.26385V20H1.11719V6.64746Z' fill='white' />
                            <path
                              d='M3.18878 0C1.86294 0 0.787109 1.07583 0.787109 2.40167C0.787109 3.7275 1.86294 4.82583 3.18878 4.82583C4.51461 4.82583 5.59044 3.7275 5.59044 2.40167C5.58961 1.07583 4.51378 0 3.18878 0V0Z'
                              fill='white'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_1092_116'>
                              <rect width='20' height='20' fill='white' transform='translate(0.787109)' />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </Link>
                    <Link href='##'>
                      <a href='##'>
                        <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M10.7859 0C5.26461 0 0.787109 4.59056 0.787109 10.2534C0.787109 14.7827 3.65211 18.6252 7.62711 19.9822C8.12711 20.0767 8.30961 19.7601 8.30961 19.4882C8.30961 19.2444 8.30086 18.5997 8.29586 17.7444C5.51461 18.3635 4.92711 16.3695 4.92711 16.3695C4.47336 15.1849 3.81711 14.8695 3.81711 14.8695C2.90836 14.2338 3.88461 14.2466 3.88461 14.2466C4.88836 14.3193 5.41586 15.3036 5.41586 15.3036C6.30836 16.8699 7.75711 16.418 8.32711 16.155C8.41711 15.4925 8.67586 15.0406 8.96211 14.784C6.74211 14.5249 4.40711 13.6453 4.40711 9.71728C4.40711 8.59773 4.79711 7.68242 5.43711 6.96499C5.33336 6.70584 4.99086 5.66288 5.53461 4.25227C5.53461 4.25227 6.37461 3.97653 8.28461 5.30289C9.08211 5.07566 9.93711 4.96204 10.7884 4.95821C11.6371 4.96332 12.4934 5.07566 13.2921 5.30417C15.2009 3.97781 16.0396 4.25355 16.0396 4.25355C16.5846 5.66544 16.2421 6.70712 16.1396 6.96627C16.7809 7.6837 17.1671 8.599 17.1671 9.71856C17.1671 13.6568 14.8296 14.5236 12.6021 14.7776C12.9609 15.0942 13.2809 15.7197 13.2809 16.6759C13.2809 18.0469 13.2684 19.1524 13.2684 19.4882C13.2684 19.7626 13.4484 20.0818 13.9559 19.9809C17.9246 18.6227 20.7871 14.7815 20.7871 10.2534C20.7871 4.59056 16.3096 0 10.7859 0Z'
                            fill='white'
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                  <div>© CATENA Multi-Chain, 2021 All rights reserved</div>
                </div>
              </div>
            </div>
          </nav>
          <div className={styles.headerRightOuter}>
            <div
              className={`${styles.headerRight} ${
                activeMenu !== null && device === 'desktop' ? styles.headerRightHideToRight : ''
              } ${walletModal ? styles.headerRightHideToLeft : ''}`}
            >
              <div className={`${styles.headerBalance}`}>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30' fill='none'>
                  <circle cx='15' cy='15' r='15' fill='#151519' />
                  <circle cx='15' cy='15' r='14.5' stroke='white' strokeOpacity='0.1' />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M18.333 21.3338C22.015 21.3338 24.9999 18.3489 24.9999 14.6669C24.9999 10.9849 22.015 8 18.333 8C15.4609 8 13.0129 9.81617 12.075 12.3627C12.4667 12.477 12.817 12.6885 13.098 12.9693C14.0129 13.4857 15.4281 13.862 16.8097 13.0689C17.2493 12.5768 17.8886 12.267 18.6004 12.267C19.9259 12.267 21.0005 13.3415 21.0005 14.6671C21.0005 15.9926 19.9259 17.0671 18.6004 17.0671C18.0559 17.0671 17.5538 16.8859 17.1511 16.5804C16.2147 16.1132 14.5281 15.6948 12.884 16.5545C12.6464 16.7414 12.3727 16.8844 12.075 16.9713C13.013 19.5177 15.4609 21.3338 18.333 21.3338Z'
                    fill='#E96B6B'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17.9248 12.3624C16.9867 9.81602 14.5389 8 11.6669 8C7.98487 8 5 10.9849 5 14.6669C5 18.3489 7.98487 21.3338 11.6669 21.3338C14.5388 21.3338 16.9866 19.5179 17.9247 16.9717C17.6404 16.8889 17.3779 16.7549 17.1478 16.5803C16.2114 16.1132 14.5248 15.6948 12.8807 16.5545C12.4726 16.8756 11.9577 17.0671 11.3981 17.0671C10.0726 17.0671 8.99804 15.9925 8.99804 14.667C8.99804 13.3415 10.0726 12.2669 11.3981 12.2669C12.0606 12.2669 12.6604 12.5353 13.0947 12.9693C14.0096 13.4857 15.4248 13.862 16.8064 13.0689C17.1018 12.7382 17.4875 12.4897 17.9248 12.3624Z'
                    fill='#00FFF0'
                  />
                </svg>
                ${account && triedReconnect ? balance : 0}
              </div>
              <div className={`${styles.headerLangs}`}>
                <div className={`${styles.headerLangNow} ${activeLangs ? styles.headerLangNowActive : ''}`}>
                  <i></i>
                  <div className={styles.headerLangNowSvg}>
                    <div
                      className={styles.headerLangNowMainTtl}
                      onClick={() => {
                        openLangs(true);
                      }}
                    >
                      <svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
                        <span> {routerLocale}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.headerLangsModal}>
                    <i></i>
                    <div className={styles.headerLangsModalTtl}>Change Language</div>
                    <div className={styles.modalsMobileTitle}>
                      <svg
                        onClick={() => {
                          closeAll();
                        }}
                        width='14'
                        height='10'
                        viewBox='0 0 14 10'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
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
                      <span>Change Language</span>
                    </div>
                    <div className={styles.headerLangsModalInner}>
                      {locales.map(item => {
                        return (
                          <div
                            className={`${styles.headerLangsModalLink} ${
                              'en' === item.code ? styles.headerLangsModalLinkActive : ''
                            }`}
                            key={item.code}
                            onClick={() => {
                              openLangs(false);
                              changeLanguage(item.code);
                            }}
                          >
                            {item.title}
                            <div>-</div>
                            {item.code}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.headerSettingsBtn} ${activeSettings ? styles.headerSettingsBtnActive : ''}`}>
                <i></i>
                <div className={styles.headerSettingsBtnSvg}>
                  <svg
                    width='22'
                    height='21'
                    viewBox='0 0 22 21'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={() => {
                      if (!activeSettings) {
                        openSettings(true);
                      } else {
                        openSettings(false);
                      }
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
                <div className={`${styles.settingsModal}`}>
                  <i></i>
                  <div className={styles.modalsMobileTitle}>
                    <svg
                      onClick={() => {
                        closeAll();
                      }}
                      width='14'
                      height='10'
                      viewBox='0 0 14 10'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
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
                    <span>Settings</span>
                  </div>
                  <div className={styles.settingsModalInner}>
                    <div className={styles.settingsModalTtl}>Global</div>
                    <div className={styles.settingsModalFloor}>
                      <div>Dark Mode</div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input type='checkbox' defaultValue={false} onChange={() => {}} />
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalBtnslFloor}>
                      <div className={styles.settingsModalBtnslFloorTtl}>
                        <Tooltip
                          title={'Default Transaction Speed (GWEI)'}
                          type={'settings'}
                          text={'Vigacas cudi ragacebi ewera aq. ar qnat es. ar sheidzleba. gtxovt nu.'}
                        />
                      </div>
                      <div className={styles.settingsModalBtns}>
                        <div className={styles.settingsModalBtn}>Standard (5)</div>
                        <div className={styles.settingsModalBtn}>Fast (6)</div>
                        <div className={styles.settingsModalBtn}>Instant (7)</div>
                      </div>
                    </div>
                    <div className={styles.settingsModalLine}></div>
                    <div className={styles.settingsModalTtl}>CATENA & Liquidity</div>
                    <div className={styles.settingsModalBtnslFloor}>
                      <div className={styles.settingsModalTitle}>
                        <Tooltip
                          title={'Slippage Tolerance'}
                          type={'settings'}
                          text={'Vigacas cudi ragacebi ewera aq. ar qnat es. ar sheidzleba. gtxovt nu.'}
                        />
                      </div>
                      <div className={styles.settingsModalBtns}>
                        <div
                          className={`${styles.settingsModalBtn} ${
                            slippage === 0.1 ? styles.settingsModalBtnActive : ''
                          }`}
                          onClick={e =>
                            dispatch({
                              type: 'SET_SLIPPAGE',
                              slippage: parseFloat(0.1),
                            })
                          }
                        >
                          0.1%
                        </div>
                        <div
                          className={`${styles.settingsModalBtn} ${
                            slippage === 0.5 ? styles.settingsModalBtnActive : ''
                          }`}
                          onClick={e =>
                            dispatch({
                              type: 'SET_SLIPPAGE',
                              slippage: parseFloat(0.5),
                            })
                          }
                        >
                          0.5%
                        </div>
                        <div
                          className={`${styles.settingsModalBtn} ${
                            slippage === 1 ? styles.settingsModalBtnActive : ''
                          }`}
                          onClick={e =>
                            dispatch({
                              type: 'SET_SLIPPAGE',
                              slippage: parseFloat(1),
                            })
                          }
                        >
                          1.0%
                        </div>
                        <div className={styles.settingsModalInputOuter}>
                          <input
                            type='number'
                            className={styles.settingsModalInput}
                            value={slippage}
                            min={1}
                            max={49}
                            onChange={e =>
                              dispatch({
                                type: 'SET_SLIPPAGE',
                                slippage: parseFloat(e.target.value),
                              })
                            }
                          />
                          <span>%</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                          title={'Tx deadlines (mins)'}
                          type={'settings'}
                          text={'Vigacas cudi ragacebi ewera aq. ar qnat es. ar sheidzleba. gtxovt nu.'}
                        />
                      </div>
                      <input
                        type='number'
                        className={styles.settingsModalLtlInput}
                        defaultValue={20}
                        onChange={() => {}}
                      />
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                          title={'Expert Mode'}
                          type={'settings'}
                          text={'Vigacas cudi ragacebi ewera aq. ar qnat es. ar sheidzleba. gtxovt nu.'}
                        />
                      </div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input type='checkbox' defaultValue={false} onChange={() => {}} />
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                          title={'Disable Multihops'}
                          type={'settings'}
                          text={'Vigacas cudi ragacebi ewera aq. ar qnat es. ar sheidzleba. gtxovt nu.'}
                        />
                      </div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input type='checkbox' defaultValue={false} onChange={() => {}} />
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                          title={'Subgraph Health Indicator'}
                          type={'settings'}
                          text={'Vigacas cudi ragacebi ewera aq. ar qnat es. ar sheidzleba. gtxovt nu.'}
                        />
                      </div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input type='checkbox' defaultValue={false} onChange={() => {}} />
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                    <div className={styles.settingsModalFloor}>
                      <div>
                        <Tooltip
                          title={'Flippy sounds'}
                          type={'settings'}
                          text={
                            'Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi Yle chame jonjoli mojvi'
                          }
                        />
                      </div>
                      <div className={styles.settingsCheckboxContainer}>
                        <input type='checkbox' defaultValue={false} onChange={() => {}} />
                        <div className={styles.settingsCheckbox}>
                          <i></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${account && triedReconnect ? styles.headerNotConnected : ''} ${
                  styles.headerConnectBtnContainer
                } ${activeSettings ? styles.transformRight : ''}`}
              >
                <Button
                  title={'Connect Wallet'}
                  type={`${connectBtnColor}`}
                  onClick={() => {
                    closeAll();
                    setWalletModal(true);
                  }}
                  customStyles={{
                    padding: '10px 20px',
                  }}
                />
              </div>
              <div
                className={`${styles.headerConnected} ${account && triedReconnect ? '' : styles.headerNotConnected} ${
                  activeSettings ? styles.transformRight : ''
                }`}
              >
                <div
                  className={`${styles.headerConnectedBtn} ${profileModal ? styles.headerConnectedBtnActive : ''}`}
                  onClick={() => {
                    openProfile();
                  }}
                >
                  <div className={styles.headerConnectedBtnImg}>
                    <Image src={`/images/meta.png`} alt='avatar' layout='fill' />
                    <i></i>
                  </div>
                  <span>{account && triedReconnect ? account : ''}</span>
                  <div className={styles.headerConnectedBtnArrow}>
                    <i></i>
                    <div className={styles.headerConnectedBtnArrowSvg}>
                      <svg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
            </div>
          </div>
          <div
            className={`${styles.burger} ${activeBurger ? styles.activeBurger : ''}`}
            onClick={() => {
              openBurger();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`${styles.headerConnectedModal} ${profileModal ? styles.headerConnectedModalActive : ''}`}>
          <i></i>
          <div className={styles.headerConnectedModalInner}>
            <div className={styles.headerConnectedModalAddress}>
              <div>
                <span>{account && triedReconnect ? account : ''}</span>
                <span>metamask</span>
              </div>
              <svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
            <Link href='/wallet'>
              <a className={styles.headerConnectedModalLink}>
                <span>Wallet</span>
                <svg width='5' height='9' viewBox='0 0 5 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.640565 7.86627C0.328145 7.55385 0.328145 7.04732 0.640565 6.7349L3.27488 4.10059L0.640564 1.46627C0.328145 1.15385 0.328145 0.64732 0.640564 0.3349C0.952984 0.0224809 1.45952 0.0224809 1.77194 0.3349L4.40628 2.96924C5.02981 3.59277 5.02981 4.6084 4.40628 5.23193L1.77194 7.86627C1.45952 8.17869 0.952984 8.17869 0.640565 7.86627Z'
                    fill='rgba(255, 255, 255, .7)'
                  />
                </svg>
              </a>
            </Link>
            <Link href='/recent-transactions'>
              <a className={styles.headerConnectedModalLink}>
                <span>Recent Transactions</span>
                <svg width='5' height='9' viewBox='0 0 5 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.640565 7.86627C0.328145 7.55385 0.328145 7.04732 0.640565 6.7349L3.27488 4.10059L0.640564 1.46627C0.328145 1.15385 0.328145 0.64732 0.640564 0.3349C0.952984 0.0224809 1.45952 0.0224809 1.77194 0.3349L4.40628 2.96924C5.02981 3.59277 5.02981 4.6084 4.40628 5.23193L1.77194 7.86627C1.45952 8.17869 0.952984 8.17869 0.640565 7.86627Z'
                    fill='rgba(255, 255, 255, .7)'
                  />
                </svg>
              </a>
            </Link>
            <i></i>
            <Link href='/your-nfts'>
              <a className={styles.headerConnectedModalLink}>
                <span>Your NFTs</span>
                <svg width='5' height='9' viewBox='0 0 5 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.640565 7.86627C0.328145 7.55385 0.328145 7.04732 0.640565 6.7349L3.27488 4.10059L0.640564 1.46627C0.328145 1.15385 0.328145 0.64732 0.640564 0.3349C0.952984 0.0224809 1.45952 0.0224809 1.77194 0.3349L4.40628 2.96924C5.02981 3.59277 5.02981 4.6084 4.40628 5.23193L1.77194 7.86627C1.45952 8.17869 0.952984 8.17869 0.640565 7.86627Z'
                    fill='rgba(255, 255, 255, .7)'
                  />
                </svg>
              </a>
            </Link>
            <Link href='/make-profile'>
              <a className={styles.headerConnectedModalLink}>
                <span>Make a Profile</span>
                <svg width='5' height='9' viewBox='0 0 5 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M0.640565 7.86627C0.328145 7.55385 0.328145 7.04732 0.640565 6.7349L3.27488 4.10059L0.640564 1.46627C0.328145 1.15385 0.328145 0.64732 0.640564 0.3349C0.952984 0.0224809 1.45952 0.0224809 1.77194 0.3349L4.40628 2.96924C5.02981 3.59277 5.02981 4.6084 4.40628 5.23193L1.77194 7.86627C1.45952 8.17869 0.952984 8.17869 0.640565 7.86627Z'
                    fill='rgba(255, 255, 255, .7)'
                  />
                </svg>
              </a>
            </Link>
            <i></i>
            <div
              className={styles.headerConnectedModalLink}
              onClick={() => {
                closeAll();
                disconnect();
              }}
            >
              <span>Disconnect Wallet</span>
              <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g>
                  <path
                    d='M12.231 9.79986C12.079 9.79986 11.927 9.74386 11.807 9.62386C11.6954 9.51095 11.6328 9.3586 11.6328 9.19986C11.6328 9.04111 11.6954 8.88877 11.807 8.77586L13.431 7.15186L11.807 5.52786C11.6954 5.41495 11.6328 5.2626 11.6328 5.10386C11.6328 4.94511 11.6954 4.79277 11.807 4.67986C12.039 4.44786 12.423 4.44786 12.655 4.67986L14.703 6.72786C14.935 6.95986 14.935 7.34386 14.703 7.57586L12.655 9.62386C12.535 9.74386 12.383 9.79986 12.231 9.79986Z'
                    fill='rgba(255, 255, 255, .7)'
                  />
                  <path
                    d='M14.2204 7.75176H6.08437C5.75637 7.75176 5.48438 7.47976 5.48438 7.15176C5.48438 6.82376 5.75637 6.55176 6.08437 6.55176H14.2204C14.5484 6.55176 14.8204 6.82376 14.8204 7.15176C14.8204 7.47976 14.5484 7.75176 14.2204 7.75176Z'
                    fill='rgba(255, 255, 255, .7)'
                  />
                  <path
                    d='M7.6875 14.1035C3.5675 14.1035 0.6875 11.2235 0.6875 7.10352C0.6875 2.98352 3.5675 0.103516 7.6875 0.103516C8.0155 0.103516 8.2875 0.375516 8.2875 0.703516C8.2875 1.03152 8.0155 1.30352 7.6875 1.30352C4.2715 1.30352 1.8875 3.68752 1.8875 7.10352C1.8875 10.5195 4.2715 12.9035 7.6875 12.9035C8.0155 12.9035 8.2875 13.1755 8.2875 13.5035C8.2875 13.8315 8.0155 14.1035 7.6875 14.1035Z'
                    fill='rgba(255, 255, 255, .7)'
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className={`${styles.headerCornerModal} ${walletModal ? styles.connectWalletActive : ''}`}>
          <i></i>
          <div className={`${styles.connectWalletItems} ${walletModal ? styles.connectWalletItemsActive : ''}`}>
            {WALLETS_DATA.map((item, index) => {
              return (
                <div
                  className={styles.connectWalletItemOuter}
                  key={item.id}
                  style={{
                    transitionDelay: walletModal ? `${(index + 2) / 10}s` : null,
                  }}
                  onClick={() => {
                    closeAll();
                    if (item.type === 'walletConnect') {
                      connect(item.type, walletConnect);
                    } else {
                      connect(item.type, injected);
                    }
                  }}
                >
                  <div className={styles.connectWalletItem}>
                    <div className={styles.connectWalletItemImg}>
                      <Image src={`/images/${item.img}`} alt='' width={100} height={100} />
                    </div>
                    <div>{item.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>
      <div
        className={`${styles.headerBg} ${
          activeMenu !== null || activeLangs || activeSettings || walletModal || profileModal
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
