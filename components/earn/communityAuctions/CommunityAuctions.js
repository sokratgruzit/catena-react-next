import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Button from '../../UI/button/Button';
import Expand from '../../UI/expand/Expand';
import ExpandButton from '../../UI/expand/ExpandButton';

import AuctionSchedule from '../components/auctionSchedule/AuctionSchedule';
import AuctionScheduleExpand from '../components/auctionSchedule/AuctionScheduleExpand';
import AuctionTable from '../components/auctionTable/AuctionTable';
import CommunityAuctionsFAQ from '../../faq/communityAuctionsFAQ/CommunityAuctionsFAQ';

import {
    ArrowSvg,
    OpenSvg,
    QuestionMarkIcon,
    SearchIcon,
    SmlArrowSvg,
} from '../../svg';

import egg from '../../../public/images/earn/egg.png';
import astro from '../../../public/images/earn/astro.png';
import orbit from '../../../public/images/earn/orbit.png';
import yellowStar from '../../../public/images/earn/yellowStar.png';
import ufo from '../../../public/images/earn/ufo.png';

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
                        <div className={styles.arrowWrapper}>
                            <ArrowSvg className={styles.svgHoverBlue} />
                        </div>
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
                            className={styles.applyButton}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.auction__notice}>
                <div className={styles.questionMarkWrapper}>
                    <QuestionMarkIcon />
                </div>
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
                    <Expand
                        expandContent={
                            <AuctionScheduleExpand
                                setShowWhiteListedWallets={setShowWhiteListedWallets}
                            />
                        }
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
                        <h2 className='font_51'>
                            699,580 CORE <span className='font_51'>BURNED</span>
                        </h2>
                        <p className='font_30'>through community auctions so far!</p>
                        <p className='font_20'>~$2,227,764</p>
                    </div>
                    <div>
                        <div className={styles.logo__stars}>
                            <Image
                                layout='fill'
                                objectFit='contain'
                                src={'/images/earn/logoStars.png'}
                                quality={100}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
            <aside className={styles.FAQSection}>
                <div className={styles.clouds}>
                    <Image
                        layout='fill'
                        objectFit='contain'
                        src={'/images/earn/clouds.png'}
                        quality={100}
                        alt=''
                    />
                </div>
                <div className={styles.FAQTitleWrapper}>
                    <h2 className={styles.FAQTitle}>Frequently Asked Questions</h2>
                </div>
                <div className={styles.FAQWrapper}>
                    <h2 className={styles.FAQTitleRight}>How does it work?</h2>
                    <CommunityAuctionsFAQ />
                </div>
            </aside>
        </main>
    );
};

export default CommunityAuctions;