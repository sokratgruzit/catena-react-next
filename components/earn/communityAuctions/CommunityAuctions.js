import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from '../../UI/button/Button';
import AuctionTable from '../components/auctionTable/AuctionTable';
import FAQ from '../../faq/FAQ';
import egg from '../../../public/images/earn/egg.png';
import astro from '../../../public/images/earn/astro.png';
import orbit from '../../../public/images/earn/orbit.png';
import yellowStar from '../../../public/images/earn/yellowStar.png';
import ufo from '../../../public/images/earn/ufo.png';

import styles from './CommunityAuctions.module.css';
import { OpenSvg, SearchIcon, SmlArrowSvg, VectorSvg } from '../../svg';

const whitelistedData = [
  {
    id: 0,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: <OpenSvg />,
  },
  {
    id: 1,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: <OpenSvg />,
  },
  {
    id: 2,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: <OpenSvg />,
  },
  {
    id: 3,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: <OpenSvg />,
  },
  {
    id: 4,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: <OpenSvg />,
  },
  {
    id: 5,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: <OpenSvg />,
  },
  {
    id: 6,
    coin: 'BBT-BNB',
    subCoin: 'BitBook',
    link: '0xC7...061b',
    subLink: <OpenSvg />,
  },
];

const CommunityAuctions = props => {
  const [expandDetails, setExpandDetails] = useState(false);
  const [showWhiteListedWallets, setShowWhiteListedWallets] = useState(false);

  const router = useRouter();

  return (
    <div className={`container ${styles.auction__container}`}>
      <div className={styles.galaxy}>
        <Image
          layout='fill'
          objectFit='contain'
          src={'/images/earn/galaxy.png'}
          alt='astro'
        />
      </div>
      <div className={styles.auction__inner}>
        <div className={styles.auction__head}>
          <div className={styles.astro}>
            <Image src={astro} alt='astro' />
          </div>
          <div className={styles.orbit}>
            <Image src={orbit} alt='orbit' />
          </div>
          <div className={styles.yellowStar}>
            <Image src={yellowStar} alt='yellowStar' />
          </div>
          <div className={styles.ufo}>
            <Image src={ufo} alt='ufo' />
          </div>
          <div className={styles.egg}>
            <Image src={egg} alt='egg' />
          </div>
          <div
            onClick={() => router.push('/earn/farms')}
            className={styles.communityAuctions}
          >
            <svg
              className={styles.svgHoverBlue}
              width='21'
              height='13'
              viewBox='0 0 21 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 11.5L1 6.5L6 1.5'
                stroke='#FF7152'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M19.2637 6.5L1.1396 6.5'
                stroke='#FF7152'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <p className={`${styles.blueHover}`}>Farms</p>
          </div>
          <div className={styles.auction__title}>
            <h1 className='font_51'>Community Farm Auction</h1>
            <p className='font_20'>
              Each week, qualifying projects can bid CAKE for the right to host
              a 7-day Farm on Core MultiChain
            </p>
            <p className='font_20'>
              This page is for projects to bid for farms.{' '}
            </p>
            <p className='font_20'>
              If you&#x2019;re not a whitelisted project, you won&#x2019;t be
              able to participate, but you can still view what&#x2019;s going
              on!
            </p>
            <Button
              title={'Apply For a Farm/Pool'}
              type={'blue'}
              customStyles={{
                width: '300px',
                fontSize: '16px',
                height: '32px',
                marginRight: '25px',
                lineHeight: '18px',
                marginTop: '80px',
                height: '56px',
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.auction__notice}>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.11266 11.79H10.1927V11C10.8627 10.64 11.3227 9.94 11.3227 9.14C11.3227 7.97 10.3327 7.01 9.11266 7.01V8.04C9.74266 8.04 10.2127 8.53 10.2127 9.14C10.2127 9.75 9.74266 10.24 9.11266 10.24V11.79ZM9.62266 14.07C10.0627 14.07 10.4227 13.73 10.4227 13.27C10.4227 12.83 10.0627 12.47 9.62266 12.47C9.16266 12.47 8.82266 12.83 8.82266 13.27C8.82266 13.73 9.16266 14.07 9.62266 14.07Z'
            fill='white'
          />
          <rect
            x='0.5'
            y='0.5'
            width='19'
            height='19'
            rx='9.5'
            stroke='white'
          />
        </svg>
        <div className={styles.auction__noticeInner}>
          <h1>Notice</h1>
          <p>
            This page is a functional page, for projects to bid for farms. If
            you&#x2019;re not a whitelisted project, you won&#x2019;t be able to
            participate, but you can still view the auction bids in real time!
            Connect a whitelisted project wallet to participate in Auctions.
          </p>
        </div>
      </div>
      <div className={styles.auction__tableContainer}>
        <div
          className={`${styles.auction__whitelisTableCont} ${
            showWhiteListedWallets && styles.showWallets
          }`}
        >
          <div className={styles.auction__whitelistHead}>
            <SmlArrowSvg
              className={styles.goBackSvg}
              onClick={() => setShowWhiteListedWallets(prevState => !prevState)}
            />
            <p>All Whitelisted Project Wallets</p>
          </div>
          <span className={styles.auction__borderBottom}></span>
          <div className={styles.auction__whitelistSearch}>
            <input type='search' placeholder='Search address or token'></input>
            <SearchIcon />
          </div>
          {whitelistedData.map(item => {
            return (
              <div key={item.id} className={styles.auction__whitelistTable}>
                <div className={styles.auction__whitelistTableitem0}>
                  <p>{item.coin}</p>
                  <p className='font_10'>{item.subCoin}</p>
                </div>
                <div className={styles.auction__whitelistTableitem1}>
                  <p>{item.link}</p>
                  {item.subLink}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.auction__leftPanel}>
          <div>
            <p className={` font_20 ${styles.auction__nextDate}`}>
              Next Auction
            </p>
            <span className={styles.auction__borderBottom}></span>
            <p className={styles.auction__schedule}>AUCTION SCHEDULE</p>
          </div>
          <div className={styles.auction__leftPanelInner}>
            <div>
              <p>start</p>
              <p>To be announced</p>
            </div>
            <div>
              <p>end</p>
              <p>To be announced</p>
            </div>
          </div>
          <div className={styles.auction__panelQuestion}>
            <p>Why cant I bid for a farm?</p>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.11266 9.79H8.19266V9C8.86266 8.64 9.32266 7.94 9.32266 7.14C9.32266 5.97 8.33266 5.01 7.11266 5.01V6.04C7.74266 6.04 8.21266 6.53 8.21266 7.14C8.21266 7.75 7.74266 8.24 7.11266 8.24V9.79ZM7.62266 12.07C8.06266 12.07 8.42266 11.73 8.42266 11.27C8.42266 10.83 8.06266 10.47 7.62266 10.47C7.16266 10.47 6.82266 10.83 6.82266 11.27C6.82266 11.73 7.16266 12.07 7.62266 12.07Z'
                fill='#B2B4B7'
              />
              <rect
                x='0.5'
                y='0.5'
                width='15'
                height='15'
                rx='7.5'
                stroke='#B2B4B7'
              />
            </svg>
          </div>
          {expandDetails && (
            <div className={styles.auction__expendDetails}>
              <span className={styles.auction__borderBottom}></span>
              <div>
                <p>Multiplier per farm</p>
                <p>1x each</p>
              </div>
              <div>
                <p>Total whitelisted bidders</p>
                <p
                  onClick={() =>
                    setShowWhiteListedWallets(prevState => !prevState)
                  }
                >
                  19
                </p>
              </div>
            </div>
          )}
          <span className={styles.auction__borderBottom}></span>
          <div
            className={styles.auction__details}
            onClick={() => setExpandDetails(prevState => !prevState)}
          >
            {expandDetails ? <p>Hide</p> : <p>Details</p>}
            <VectorSvg
              className={`${styles.vectorSvg} ${
                expandDetails && styles.activeVector
              }`}
            />
          </div>
        </div>
        <AuctionTable />
      </div>
      <div className={styles.auction__burnedContainer}>
        <div className={styles.auction__burnedInner}>
          <div>
            <h2 className='font_51'>
              699,580 CORE <span className='font_51'>BURNED</span>
            </h2>
            <p className='font_30'>through community auctions so far!</p>
            <p className='font_20'>~$2,227,764</p>
          </div>
          <div>
            <picture>
              <img
                className={styles.logo__stars}
                src='/images/earn/logoStars.png'
                alt='logoStars'
              ></img>
            </picture>
          </div>
        </div>
      </div>
      <FAQ type={'auctionFAQ'} />
    </div>
  );
};

export default CommunityAuctions;
