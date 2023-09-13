import React from 'react';
import ArrowBtn from '../../UI/button/ArrowBtn';
import styles from './ProposalInner.module.css';
import Link from 'next/link';
import VoteTable from '../components/voteTable/VoteTable';
import Details from '../components/detailsTable/Details';
import CastYourCode from '../components/castYourCode/CastYourCode';
import CountdownItem from '../components/countdownItem/CountdownItem';

export default function ProposalInner() {
  let detailsData = [
    {
      item: 'Identifier',
      code: 'QmWVfYm3',
    },
    {
      item: 'Creator',
      code: '0xf5...303x',
    },
    {
      item: 'Snapshot',
      code: '16705665',
    },
    { dateTeaser: 'Start Date', date: '05.06.2023, 14:00' },
    { dateTeaser: 'End Date', date: '10.06.2023, 14:00' },
  ];
  const votingTo = new Date('2023-09-31T23:59:59');

  return (
    <div className={`${styles.proposalInner} container`}>
      <ArrowBtn route={'voting'} direction={'back'} />
      <div className={styles.InnerWrapper}>
        <div className={styles.left}>
          <CountdownItem votingTo={votingTo} />
          <h1 className='font_51 ttl'>
            Launch <span className='font_51 ttl'>"CORE NFT"</span> sale to help Ukrainian hospitals
          </h1>
          <img src='/images/voting/proposalInner/item.png' alt='image' />
          <div className={styles.desctiption}>
            <h4 className={`${styles.teaser} font-20 ttl`}>
              CoreMultiChain Welcomes Tiny World ($TINC) to Syrup Pool!
            </h4>
            <p>
              Dear <span>CAKE</span> holders, we’re proud to announce a new Syrup Pool with Tiny World! Tiny World is
              the 1st idle-style GameFi project where everything is available to trade. Play enjoyable, idle-style games
              with a global community of gamers and earn a passive income in your spare time.
            </p>
            <p className={styles.stake}>
              Stake <span>CAKE</span> tokens to earn TINC tokens!
            </p>
            <div className='text'>
              <ul className={styles.list}>
                <li className='ttl'>
                  Total Tokens:<span className='ttl'> 404,100 TINC</span>
                </li>
                <li className='ttl'>
                  Distribution duration: <span className='ttl'> 30 days</span>
                </li>
                <li className='ttl'>
                  Start time: <span className='ttl'> Approx. 11AM UTC on April 7th 2022 </span>
                </li>
                <li className='ttl'>
                  Finish time:<span className='ttl'> Approx. 11AM UTC on May 7th 2022 </span>
                </li>
                <li className='ttl'>
                  Token rewards per block: <span className='ttl'> 0.4677 TINC</span>
                </li>
              </ul>
            </div>
            <h4 className={`${styles.teaser} font-20 ttl`}>The Syrup Pool: </h4>
            <p className={`${styles.des} ${styles.p}`}>
              100 CORE for the first 57,600 blocks (approx. 48 hours) after the Syrup Pool is launched, then unlimited
              CORE staking after that.
            </p>
            <p className={styles.des}>
              The cap is to give everyone an equal opportunity to farm rewards at a high APY at the start of the farm.
            </p>
            <h4 className={`${styles.rewardsTeaser}  font-20 ttl`}>The Syrup Pool: </h4>
            <p className={styles.stake}>Follow this guide to staking in Syrup Pools:</p>
            <Link href={'https://docs.pancakeswap.finance/products/syrup-pool/syrup-pool-guide'} className='ttl'>
              https://docs.pancakeswap.finance/products/syrup-pool/syrup-pool-guide
            </Link>
            <span className={styles.warning}>Warning !!!</span>
            <h4 className={`${styles.teaser} font-20 ttl`}>BEWARE OF FOOD POISONING </h4>
            <p className={`${styles.des} ${styles.p}`}>
              The official TINC token contract address on Binance Smart Chain is:
            </p>
            <Link href={'https://bscscan.com/token/0x05ad6e30a855be07afa57e08a4f30d00810a402e'} className='ttl'>
              https://bscscan.com/token/0x05ad6e30a855be07afa57e08a4f30d00810a402e
            </Link>
            <p className={styles.des}>
              Any other TINC token will be a scam. Always verify the token address before buying tokens. If you receive
              a TINC token airdrop from another address, it’s probably a scam, and we advise you to ignore it.{' '}
            </p>
            <div className={styles.table}>
              <VoteTable />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Details detailsData={detailsData} />
          <CastYourCode />
        </div>
      </div>
    </div>
  );
}
