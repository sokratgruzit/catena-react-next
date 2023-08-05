import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import astro from '../../../public/images/earn/astro.png';
import egg from '../../../public/images/earn/egg.png';
import orbit from '../../../public/images/earn/orbit.png';
import ufo from '../../../public/images/earn/ufo.png';
import yellowStar from '../../../public/images/earn/yellowStar.png';
import CommunityAuctionsFAQ from '../../faqOld/communityAuctionsFAQ/CommunityAuctionsFAQ';
import { ArrowSvg, CatenaLogo, OpenSvg, QuestionMarkIcon, SearchIcon, SmlArrowSvg } from '../../svg';
// import Button from '../../UI/button/Button';
import Expand from '../../UI/expand/Expand';
import ExpandButton from '../../UI/expand/ExpandButton';
import AuctionSchedule from '../components/auctionSchedule/AuctionSchedule';
import AuctionScheduleExpand from '../components/auctionSchedule/AuctionScheduleExpand';
import AuctionTable from '../components/auctionTable/AuctionTable';

import { Button } from '@catena-network/catena-ui-module';
import AddSquareIcon from '../../svg/AddSquareIcon';

import styles from './CommunityAuctions.module.css';

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
  const [showWhiteListedWallets, setShowWhiteListedWallets] = useState(false);
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  return (
    <main className={`container ${styles.auction__container}`}>
      <div className={styles.auction__inner}>
        <div className={styles.auction__head}>
          <div className={styles.auction__title}>
            <h1 className='font-90 ttl'>Community Farm Auction</h1>
            <p className='font-20'>
              Each week, qualifying projects can bid CAKE for the right to host a 7-day Farm on CATENA Network
            </p>
            <p className='font-20'>This page is for projects to bid for farms. </p>
            <p className='font-20'>
              If you're not a whitelisted project, you won't be able to participate, but you can still
              view what's going on!
            </p>
            <Button
              label={"Button"}
              size={"btn-lg"}
              type={"btn-primary"}
              element={"button"}
              onClick={() => setToggle((prevState) => !prevState)}
            />
          </div>
        </div>
      </div>
      <div className={styles.auction__notice}>
        <div className={styles.questionMarkWrapper}>
          <QuestionMarkIcon />
        </div>
        <div className={styles.auction__noticeInner}>
          <p>Notice</p>
          <div>
            <p>
              This page is a functional page, for projects to bid for farms. If you're not a whitelisted project,
              you won't be able to participate, but you can still view the auction bids in real time!
            </p>
          </div>
          <p>
            Connect a whitelisted project wallet to participate in Auctions.
          </p>
        </div>
      </div>
      <div className={styles.auction__tableContainer} style={{ border: "2px solid green" }}>
        <div className={`${styles.auction__whitelisTableCont} ${showWhiteListedWallets && styles.showWallets}`} style={{ border: "2px solid blue", width: "300px", height: "300px" }}>
          <div className={styles.auction__whitelistHead}>
            <SmlArrowSvg
              className={styles.goBackSvg}
              onClick={() => setShowWhiteListedWallets(prevState => !prevState)}
            />
            <p>All Whitelisted Project Wallets</p>
          </div>
          <span className={styles.auction__borderBottom}></span>
          <div className={styles.auction__whitelistSearch} style={{ border: "2px solid red" }}>
            <input type='search' placeholder='Search address or token'></input>
            <SearchIcon />
          </div>
          {whitelistedData.map(item => {
            return (
              <div key={item.id} className={styles.auction__whitelistTable} style={{ border: "2px solid red" }}>
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
        <div style={{display: "flex"}}>
          <div className={styles.auction__leftPanel} >
            <Expand
              expandContent={<AuctionScheduleExpand setShowWhiteListedWallets={setShowWhiteListedWallets} />}
              expandButton={<ExpandButton className={styles.center} />}
            >
              <AuctionSchedule />
            </Expand>
          </div>
          <AuctionTable />
        </div>
      </div>
      <div className={styles.auction__burnedContainer}>
        <div className={styles.auction__burnedInner}>
          <div>
            <h2 className='font-40'>
              699,580 CATENA <span className='font-40'>BURNED</span>
            </h2>
            <p className='font-20'>through community auctions so far!</p>
            <p>~$2,227,764</p>
          </div>
          <div className={styles.catenaLogo}>
            <CatenaLogo width="204" height="136" />
          </div>
        </div>
      </div>
      <aside className={styles.FAQSection}>
        <div className={styles.FAQTitleWrapper}>
          <h2 className={`font-40 ttl ${styles.FAQTitle}`}>Frequently Asked Questions</h2>
        </div>
        <div className={styles.FAQWrapper}>
          <h2 className={`font-20 ${styles.FAQTitleRight}`}>How does it work?</h2>
          <CommunityAuctionsFAQ />
        </div>
      </aside>
    </main>
  );
};

export default CommunityAuctions;
