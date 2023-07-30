import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import astro from '../../../public/images/earn/astro.png';
import egg from '../../../public/images/earn/egg.png';
import orbit from '../../../public/images/earn/orbit.png';
import ufo from '../../../public/images/earn/ufo.png';
import yellowStar from '../../../public/images/earn/yellowStar.png';
import CommunityAuctionsFAQ from '../../faqOld/communityAuctionsFAQ/CommunityAuctionsFAQ';
import { ArrowSvg, OpenSvg, QuestionMarkIcon, SearchIcon, SmlArrowSvg } from '../../svg';
import Button from '../../UI/button/Button';
import Expand from '../../UI/expand/Expand';
import ExpandButton from '../../UI/expand/ExpandButton';
import AuctionSchedule from '../components/auctionSchedule/AuctionSchedule';
import AuctionScheduleExpand from '../components/auctionSchedule/AuctionScheduleExpand';
import AuctionTable from '../components/auctionTable/AuctionTable';

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

  const router = useRouter();

  return (
    <main className={`container ${styles.auction__container}`}>
      <div className={styles.auction__inner}>
        <div className={styles.auction__head}>
          {/* <div onClick={() => router.push('/earn/farms')} className={styles.communityAuctions}>
            <div className={styles.arrowWrapper}>
              <ArrowSvg className={styles.svgHoverBlue} />
            </div>
            <p className={`${styles.blueHover}`}>Farms</p>
          </div> */}
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
            <Button title={'Apply For a Farm/Pool'} type={'blue'} className={styles.applyButton} />
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
      <div className={styles.auction__tableContainer}>
        <div className={`${styles.auction__whitelisTableCont} ${showWhiteListedWallets && styles.showWallets}`}>
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
          <Expand
            expandContent={<AuctionScheduleExpand setShowWhiteListedWallets={setShowWhiteListedWallets} />}
            expandButton={<ExpandButton className={styles.center} />}
          >
            <AuctionSchedule />
          </Expand>
        </div>
        <AuctionTable />
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
            <svg width="204" height="136" viewBox="0 0 204 136" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M72.7635 44.3965L72.5186 45.0554C76.3688 46.1844 79.8642 48.2583 82.6762 51.0822C91.8214 56.1125 105.964 59.8572 119.583 52.0465C121.812 49.5424 124.559 47.5369 127.641 46.1647C130.722 44.7925 134.067 44.0855 137.449 44.0911C143.842 44.0911 149.973 46.5903 154.493 51.0389C159.014 55.4876 161.553 61.5212 161.553 67.8125C161.553 74.1038 159.014 80.1375 154.493 84.5861C149.973 89.0347 143.842 91.534 137.449 91.534C132.251 91.5114 127.195 89.8623 123.013 86.825C113.672 82.2768 96.8839 78.05 80.5532 86.5036C78.1659 88.3552 75.4377 89.7359 72.5186 90.5697" stroke="#FF6969" strokeWidth="4" strokeMiterlimit="10" />
              <path d="M101.521 124.754C110.281 129.788 120.101 132.77 130.22 133.467C140.339 134.163 150.485 132.557 159.871 128.772" stroke="#FF6969" strokeWidth="4" strokeMiterlimit="10" />
              <path d="M159.871 128.771C174.14 122.958 185.927 112.468 193.237 99.0808C200.547 85.6932 202.93 70.2304 199.982 55.3119C197.034 40.3933 188.936 26.9363 177.061 17.2205C165.186 7.50478 150.262 2.12764 134.82 2.00002C122.865 1.99004 111.134 5.18474 100.885 11.2411" stroke="#FF6969" strokeWidth="4" strokeMiterlimit="10" />
              <path fillRule="evenodd" clipRule="evenodd" d="M130.721 45.2321C125.399 30.7415 115.041 18.5704 101.478 10.8721C87.9161 3.17374 72.0241 0.444427 56.6139 3.16699C41.2038 5.88955 27.2688 13.8885 17.2744 25.7487C7.27997 37.6088 1.87031 52.5657 2.00251 67.9731C1.86635 83.382 7.2732 98.3416 17.2663 110.205C27.2594 122.068 41.1945 130.07 56.6058 132.794C72.017 135.519 87.9109 132.791 101.475 125.093C115.039 117.394 125.398 105.222 130.721 90.7303C127.925 89.9159 125.31 88.591 123.013 86.8249C113.671 82.2767 96.8835 78.0499 80.5529 86.5035C76.3847 89.7892 71.1957 91.5652 65.8553 91.5339C59.4625 91.5339 53.3316 89.0346 48.8112 84.586C44.2908 80.1374 41.7513 74.1037 41.7513 67.8124C41.7513 61.5211 44.2908 55.4875 48.8112 51.0388C53.3316 46.5902 59.4625 44.091 65.8553 44.091C68.993 44.081 72.1004 44.6951 74.9909 45.8965C77.8814 47.0979 80.4954 48.8617 82.6759 51.0821C91.8211 56.1124 105.963 59.8571 119.583 52.0464C122.55 48.7655 126.418 46.399 130.721 45.2321Z" stroke="#A6D0DD" strokeWidth="4" strokeMiterlimit="10" />
            </svg>

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
    </main >
  );
};

export default CommunityAuctions;
