import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Input, HelpText } from '@catena-network/catena-ui-module';
import Link from 'next/link';
import CommunityAuctionsFAQ from '../../faqOld/communityAuctionsFAQ/CommunityAuctionsFAQ';
import { CatenaLogo } from '../../svg';
import Expand from '../../UI/expand/Expand';
import ExpandButton from '../../UI/expand/ExpandButton';
import AuctionSchedule from '../components/auctionSchedule/AuctionSchedule';
import AuctionScheduleExpand from '../components/auctionSchedule/AuctionScheduleExpand';
import AuctionTable from '../components/auctionTable/AuctionTable';


import styles from './CommunityAuctions.module.css';
import ArrowWithBorderSvg from '../../svg/ArrowWithBorderSvg';
import ArrowDiagonalSvg from '../../svg/ArrowDiagonalSvg';
const stakersRecord = [
  {
    id: 12123,
    amount: '1,220,000.2',
    staketime: '01.02.2023 10:00AM',
    unstaketime: '01.02.2023 08:15PM',
    CML: 'CML',
    realtimeRewardPerBlock: '1,132,000.1',
    address: "0xfCcA771Dc22359E4D6e9e9daC743EAb38f51EECe"
  },
  {
    id: 2121234,
    amount: '1,220,000.2',
    staketime: '01.02.2023 10:00AM',
    unstaketime: '01.02.2023 08:15PM',
    CML: 'CML',
    realtimeRewardPerBlock: '1,132,000.1',
    address: "0xfCcA771Dc22359E4D6e9e9daC743EAb38f51EECe"
  },
  {
    id: 1221235,
    amount: '1,220,000.2',
    staketime: '01.02.2023 10:00AM',
    unstaketime: '01.02.2023 08:15PM',
    CML: 'CML',
    realtimeRewardPerBlock: '1,132,000.1',
    address: "0xfCcA771Dc22359E4D6e9e9daC743EAb38f51EECe"
  },
];

const CommunityAuctions = props => {
  const [showWhiteListedWallets, setShowWhiteListedWallets] = useState(false);
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  return (
    <main className={`container ${styles.auction__container}`}>
      <div className={`${styles.auction__head} custum-text`}>
        <div className={styles.backToFarmButton}><ArrowWithBorderSvg />Back Farm</div>
        <h1 className='font-90 ttl'>Community Farm Auction</h1>
        <h4 className='font-20'>
          Each week, qualifying projects can bid CAKE for the right to host a 7-day Farm on CATENA Network
        </h4>
        <p>This page is for projects to bid for farms. </p>
        <p>
          If you're not a whitelisted project, you won't be able to participate, but you can still
          view what's going on!
        </p>
        <Button
          label={"Apply For a Farm/Pool"}
          size={"btn-lg"}
          type={"btn-primary"}
          element={"button"}
          customStyles={{ backgroundColor: "#A6D0DD", color: "#162029", margin: "0" }}
          onClick={() => setToggle((prevState) => !prevState)}
        />
      </div>
      <div className={`${styles.auction__notice} custum-text`}>
        <h4>Notice</h4>
        <p>
          This page is a functional page, for projects to bid for farms. If you're not a whitelisted project,
          you won't be able to participate, but you can still view the auction bids in real time!
          Connect a whitelisted project wallet to participate in Auctions.
        </p>
      </div>
      <div className={styles.auction__tableContainer}>
        {!showWhiteListedWallets && <div className={styles.auction__leftPanel} >
          <Expand
            expandContent={<AuctionScheduleExpand setShowWhiteListedWallets={setShowWhiteListedWallets} />}
            expandButton={<ExpandButton className={styles.centerElement} />}
          >
            <AuctionSchedule />
          </Expand>
        </div>}
        {showWhiteListedWallets && <div className={styles.allWallets}>
          <div className={styles.allWalletsHeader}>
            <ArrowWithBorderSvg onClick={() => setShowWhiteListedWallets(false)} />
            <h2>All Whitelisted Project Wallets</h2>
          </div>
          <Input
            type={"search-input"}
            // onChange={changeHandler}
            // defaultData={defaultData}
            // selectHandler={selectHandler}
            selectLabel={"select"}
            placeholder={"Search address or token"}
            customStyles={{ width: "100%" }}
          />
          {stakersRecord.map((item, index) => {
            return (
              <div className={styles.wallets} key={index}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    {item.id}
                  </span>
                  <span>{item.CML}</span>
                </div>
                <div className={styles.addressAndArrow}>{item.address}
                  <ArrowDiagonalSvg />
                </div>
              </div>
            );
          })
          }
        </div>}
        <div className={styles.tableContainer}>
          <AuctionTable tableDataArr={stakersRecord} />
        </div>
      </div>
      <div className={styles.auction__burnedContainer}>
        <div className='custum-text'>
          <span style={{ color: "#FF6969", fontSize: "130px" }}>BURNED</span>
          <h1>
            699,580 CATENA
          </h1>
          <p>through community auctions so far!</p>
          <p>~$2,227,764</p>
        </div>
        <div className={styles.logoContainer}>
          <CatenaLogo width="204" height="136" />
        </div>
      </div>
      <div className={`${styles.FAQSection} custum-text`}>
        <h2>Frequently Asked Questions</h2>
        <div className={`${styles.FAQWrapper} custum-text`}>
          <h4>How does it work?</h4>
          <CommunityAuctionsFAQ />
        </div>
      </div>
    </main>
  );
};

export default CommunityAuctions;
