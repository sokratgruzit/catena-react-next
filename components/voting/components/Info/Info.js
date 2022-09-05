import React, { useState, useEffect } from 'react';
import Link, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { SmlArrowSvg } from '../../../svg/index';

import styles from './Info.module.css';

const votingData = [
  {
    id: 0,
    title: 'Stop Minting more CORE',
    subTitle: 'subTitle 1',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 1,
    title: 'test#16',
    subTitle: 'subTitle #2',
    date: 'Ends Mar 4th, 2022 01:15',
    location: 'Core',
    activeStatus: 'Soon',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 2,
    title: 'Stop Minting more CORE',
    subTitle: 'subTitle #2',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Close',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 3,
    title: 'blah#17',
    subTitle: 'testSubTitle',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Core',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 4,
    title: 'Stop Minting more CORE',
    subTitle: 'testSubTitle',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 5,
    title: 'test#1',
    subTitle: 'testSubTitle',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 6,
    title: 'test#2',
    subTitle: 'test593059',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Core',
    activeStatus: 'Soon',
    announcement: 'Dear cock holders, we’re proud of u',
  },
  {
    id: 7,
    title: 'test#3',
    subTitle: 'qwerty',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Close',
    announcement: 'Dear cock holders, we’re proud of u',
  },
];

const Info = () => {
  const router = useRouter();
  const { id } = router.query;

  let [votingItem, setVotingItem] = useState(votingData[id]);
  // console.log(votingItem);

  let [activeVoteResult, setActiveVoteResult] = useState(false);

  const voteResultHandler = () => {
    setActiveVoteResult(!activeVoteResult);
  };

  const votingInfoData = useSelector(state => state.connect.votingData);
  const [addresses, setAdresses] = useState(votingInfoData);

  useEffect(() => {
    if (votingInfoData) setAdresses(Object.keys(votingInfoData));
  }, []);

  return (
    <div className='container'>
      <div className={styles.ProposalInfo}>
        <div className={`${styles.ProposalInfo__header} ${styles.width}`}>
          <div
            onClick={() => router.push('/voting')}
            className={styles.ProposalInfo__backBtn}
          >
            <SmlArrowSvg className={styles.arrowSvg} />
            <p className={styles.blueHover}>Back</p>
          </div>
          <div className={styles.ProposalInfo__title}>
            <h1 className='font_30'>{votingItem.title}</h1>
          </div>
          <div className={`${styles.ProposalInfo__blockquote}`}>
            <p className='font_20'>{votingItem.subTitle}</p>
            <p>{votingItem.announcement}</p>
          </div>
          <div className={styles.ProposalInfo__syrupPool}>
            <p className='font_20'>The Syrup Pool:</p>
            <div className={styles.ProposalInfo__syrupPool__item}>
              <p>Stake CAKE tokens to earn TINC tokens!</p>
            </div>
          </div>
          <div className={styles.ProposalInfo__list}>
            <ul>
              <li className={styles.listBullet}>
                Total Tokens: <span>404,100 TINC</span>
              </li>
              <li>
                Distribution duration: <span>30 days</span>
              </li>
              <li>
                Start time: <span> Approx. 11AM UTC on April 7th 2022</span>
              </li>
              <li>
                Finish time: <span>Approx. 11AM UTC on May 7th 2022</span>
              </li>
              <li>
                Token rewards per block:<span> 0.4677 TINC</span>
              </li>
            </ul>
          </div>
          <div className={styles.ProposalInfo__syrupPool}>
            <p className='font_20'>The Syrup Pool:</p>
            <div className={styles.ProposalInfo__syrupPool__item}>
              <p>
                100 CORE for the first 57,600 blocks (approx. 48 hours) after
                the Syrup Pool is launched, then unlimited CORE staking after
                that.
              </p>
              <p>
                The cap is to give everyone an equal opportunity to farm rewards
                at a high APY at the start of the farm.
              </p>
            </div>
          </div>
          <div className={styles.ProposalInfo__syrupPool}>
            <p className='font_20'>
              How do you stake CORE to earn $TINC rewards?
            </p>
            <div className={styles.ProposalInfo__syrupPool__item}>
              <p>Follow this guide to staking in Syrup Pools:</p>
            </div>
            <div className={styles.ProposalInfo__hotLink}>
              <a href='##'>
                https://docs.pancakeswap.finance/products/syrup-pool/syrup-pool-guide
              </a>
            </div>
          </div>
          <div className={styles.ProposalInfo__syrupPool}>
            <p className={` font_20 ${styles.ProposalInfo__warning}`}>
              <span
                className={` font_10 ${styles.ProposalInfo__warning__inner}`}
              >
                WARNING !!!
              </span>{' '}
              BEWARE OF FOOD POISONING
            </p>
            <div className={styles.ProposalInfo__syrupPool__item}>
              <p>
                The official TINC token contract address on Binance Smart Chain
                is:
              </p>
            </div>
            <div className={styles.ProposalInfo__hotLink}>
              <a href='##'>
                https://bscscan.com/token/0x05ad6e30a855be07afa57e08a4f30d00810a402e
              </a>
            </div>
            <div className={styles.ProposalInfo__syrupPool__item}>
              <p>
                Any other TINC token will be a scam. Always verify the token
                address before buying tokens. If you receive a TINC token
                airdrop from another address, it’s probably a scam, and we
                advise you to ignore it.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.ProposalInfo__detailsWrap}>
          <div className={styles.ProposalInfo__details}>
            <div className={styles.ProposalInfo__details__inner}>
              <div className={styles.ProposalInfo__detailsCont}>
                <p className={`font_16 ${styles.fontColor}`}>Details</p>
                <div>
                  <span
                    className={` ${styles.voteNow} font_10 ${styles.carrot} ${styles.pointer}`}
                  >
                    {votingItem.activeStatus}
                  </span>
                </div>
              </div>
              <span className={styles.ProposalInfo__details__border}></span>
              <div className={styles.ProposalInfo__details__item}>
                <p>Identifier</p>
                <div
                  className={`${styles.ProposalInfo__details__item__inner} ${styles.hover}`}
                >
                  <a href='##'>
                    <svg
                      className={styles.svgHoverOrange}
                      width='13'
                      height='13'
                      viewBox='0 0 13 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11.6711 1.3595C11.9001 1.58406 11.9036 1.95167 11.679 2.18058L7.23534 6.71044C7.01078 6.93936 6.64317 6.94289 6.41426 6.71833C6.18534 6.49377 6.18181 6.12616 6.40637 5.89724L10.8501 1.36738C11.0746 1.13847 11.4422 1.13494 11.6711 1.3595Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8.5166 1.33209C8.5166 1.01142 8.77656 0.751465 9.09722 0.751465H11.6984C12.0191 0.751465 12.279 1.01142 12.279 1.33209V3.98372C12.279 4.30438 12.0191 4.56434 11.6984 4.56434C11.3777 4.56434 11.1178 4.30438 11.1178 3.98372V1.91271H9.09722C8.77656 1.91271 8.5166 1.65276 8.5166 1.33209Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1.32604 1.82317C2.09763 1.03662 3.23886 0.751465 4.65332 0.751465H5.73715C6.05782 0.751465 6.31777 1.01142 6.31777 1.33209C6.31777 1.65276 6.05782 1.91271 5.73715 1.91271H4.65332C3.3582 1.91271 2.60273 2.17998 2.15502 2.63637C1.70458 3.09554 1.44054 3.87294 1.44054 5.19905V8.51358C1.44054 9.83969 1.70458 10.6171 2.15502 11.0763C2.60273 11.5327 3.3582 11.7999 4.65332 11.7999H7.9048C9.19992 11.7999 9.95539 11.5327 10.4031 11.0763C10.8535 10.6171 11.1176 9.83969 11.1176 8.51358V7.40874C11.1176 7.08807 11.3775 6.82812 11.6982 6.82812C12.0189 6.82812 12.2788 7.08807 12.2788 7.40874V8.51358C12.2788 9.94959 12.001 11.1057 11.2321 11.8895C10.4605 12.676 9.31926 12.9612 7.9048 12.9612H4.65332C3.23886 12.9612 2.09763 12.676 1.32604 11.8895C0.55717 11.1057 0.279297 9.94959 0.279297 8.51358V5.19905C0.279297 3.76304 0.55717 2.60696 1.32604 1.82317Z'
                        fill='#0500FF'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className={styles.ProposalInfo__details__item}>
                <p>Creator</p>
                <div
                  className={`${styles.ProposalInfo__details__item__inner} ${styles.hover}`}
                >
                  <a href='##'>
                    0xC7...061b{' '}
                    <svg
                      className={styles.svgHoverOrange}
                      width='13'
                      height='13'
                      viewBox='0 0 13 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11.6711 1.3595C11.9001 1.58406 11.9036 1.95167 11.679 2.18058L7.23534 6.71044C7.01078 6.93936 6.64317 6.94289 6.41426 6.71833C6.18534 6.49377 6.18181 6.12616 6.40637 5.89724L10.8501 1.36738C11.0746 1.13847 11.4422 1.13494 11.6711 1.3595Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8.5166 1.33209C8.5166 1.01142 8.77656 0.751465 9.09722 0.751465H11.6984C12.0191 0.751465 12.279 1.01142 12.279 1.33209V3.98372C12.279 4.30438 12.0191 4.56434 11.6984 4.56434C11.3777 4.56434 11.1178 4.30438 11.1178 3.98372V1.91271H9.09722C8.77656 1.91271 8.5166 1.65276 8.5166 1.33209Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1.32604 1.82317C2.09763 1.03662 3.23886 0.751465 4.65332 0.751465H5.73715C6.05782 0.751465 6.31777 1.01142 6.31777 1.33209C6.31777 1.65276 6.05782 1.91271 5.73715 1.91271H4.65332C3.3582 1.91271 2.60273 2.17998 2.15502 2.63637C1.70458 3.09554 1.44054 3.87294 1.44054 5.19905V8.51358C1.44054 9.83969 1.70458 10.6171 2.15502 11.0763C2.60273 11.5327 3.3582 11.7999 4.65332 11.7999H7.9048C9.19992 11.7999 9.95539 11.5327 10.4031 11.0763C10.8535 10.6171 11.1176 9.83969 11.1176 8.51358V7.40874C11.1176 7.08807 11.3775 6.82812 11.6982 6.82812C12.0189 6.82812 12.2788 7.08807 12.2788 7.40874V8.51358C12.2788 9.94959 12.001 11.1057 11.2321 11.8895C10.4605 12.676 9.31926 12.9612 7.9048 12.9612H4.65332C3.23886 12.9612 2.09763 12.676 1.32604 11.8895C0.55717 11.1057 0.279297 9.94959 0.279297 8.51358V5.19905C0.279297 3.76304 0.55717 2.60696 1.32604 1.82317Z'
                        fill='#0500FF'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className={styles.ProposalInfo__details__item}>
                <p>Snapshot</p>
                <div
                  className={`${styles.ProposalInfo__details__item__inner} ${styles.hover}`}
                >
                  <a href='##'>
                    16704554{' '}
                    <svg
                      className={styles.svgHoverOrange}
                      width='13'
                      height='13'
                      viewBox='0 0 13 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11.6711 1.3595C11.9001 1.58406 11.9036 1.95167 11.679 2.18058L7.23534 6.71044C7.01078 6.93936 6.64317 6.94289 6.41426 6.71833C6.18534 6.49377 6.18181 6.12616 6.40637 5.89724L10.8501 1.36738C11.0746 1.13847 11.4422 1.13494 11.6711 1.3595Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8.5166 1.33209C8.5166 1.01142 8.77656 0.751465 9.09722 0.751465H11.6984C12.0191 0.751465 12.279 1.01142 12.279 1.33209V3.98372C12.279 4.30438 12.0191 4.56434 11.6984 4.56434C11.3777 4.56434 11.1178 4.30438 11.1178 3.98372V1.91271H9.09722C8.77656 1.91271 8.5166 1.65276 8.5166 1.33209Z'
                        fill='#0500FF'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1.32604 1.82317C2.09763 1.03662 3.23886 0.751465 4.65332 0.751465H5.73715C6.05782 0.751465 6.31777 1.01142 6.31777 1.33209C6.31777 1.65276 6.05782 1.91271 5.73715 1.91271H4.65332C3.3582 1.91271 2.60273 2.17998 2.15502 2.63637C1.70458 3.09554 1.44054 3.87294 1.44054 5.19905V8.51358C1.44054 9.83969 1.70458 10.6171 2.15502 11.0763C2.60273 11.5327 3.3582 11.7999 4.65332 11.7999H7.9048C9.19992 11.7999 9.95539 11.5327 10.4031 11.0763C10.8535 10.6171 11.1176 9.83969 11.1176 8.51358V7.40874C11.1176 7.08807 11.3775 6.82812 11.6982 6.82812C12.0189 6.82812 12.2788 7.08807 12.2788 7.40874V8.51358C12.2788 9.94959 12.001 11.1057 11.2321 11.8895C10.4605 12.676 9.31926 12.9612 7.9048 12.9612H4.65332C3.23886 12.9612 2.09763 12.676 1.32604 11.8895C0.55717 11.1057 0.279297 9.94959 0.279297 8.51358V5.19905C0.279297 3.76304 0.55717 2.60696 1.32604 1.82317Z'
                        fill='#0500FF'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className={styles.details__voteNow}>
                <div
                  className={`${styles.ProposalInfo__details__item} ${styles.marginTop}`}
                >
                  <div className={styles.ProposalInfo__detailsDate}>
                    <p>Start Date</p>
                    <p className={styles.fontColor}>2022-04-06 14:00</p>
                  </div>
                </div>
                <div className={styles.ProposalInfo__details__item}>
                  <div className={styles.ProposalInfo__detailsDate}>
                    <p>End Date</p>
                    <p className={styles.fontColor}>2022-04-07 1 4:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.proposal__inner}`}>
            <div className={` ${styles.proposalTop__vote}`}>
              <p className='font_16'>Cast Your Vote</p>
              <span className={styles.ProposalInfo__details__border}></span>
              <form className={styles.form}>
                <div className={styles.proposalTop__input}>
                  <input type='radio' value='Male' name='gender' />{' '}
                  <span className={styles.proposal__grey}>We &nbsp; </span>
                  <span className={styles.green}>want &nbsp;</span>
                  <span className={styles.proposal__grey}>
                    {' '}
                    to earn TINC tokens!
                  </span>
                </div>
                <div className={styles.proposalTop__input}>
                  <input type='radio' value='Male' name='gender' />{' '}
                  <span className={styles.proposal__grey}>We &nbsp; </span>
                  <span className={styles.redWord}>
                    don’t want &nbsp;{' '}
                  </span>{' '}
                  <span className={styles.proposal__grey}>
                    to earn TINC tokens!
                  </span>
                </div>
                <button className='btn btnBlue'>Vote</button>
                <div className={styles.seeMore}>
                  <p onClick={voteResultHandler}>See Result</p>
                </div>
              </form>
            </div>
          </div>
          <div
            className={`${styles.ProposalInfo__details} ${styles.marginTop} ${
              activeVoteResult ? styles.resultActive : styles.result
            }`}
          >
            <div className={styles.ProposalInfo__details__inner}>
              <div className={styles.ProposalInfo__detailsCont}>
                <p className={`font_16 ${styles.fontColor}`}>Current Results</p>
              </div>
              <span className={styles.ProposalInfo__details__border}></span>
              <div className={styles.ProposalInfo__votes}>
                <div className={styles.ProposalInfo__votesInner}>
                  <p>
                    We <span className={styles.green}>want </span>to earn TINC
                    tokens!
                  </p>
                </div>
                <div className={styles.ProposalInfo__voteLengthContainer}>
                  <span className={styles.placeHolder}></span>
                  <span className={`${styles.voteLength}`}></span>
                </div>
                <div className={styles.voteNumbers}>
                  <p>1,368,085.43 Votes</p>
                  <p>93.08%</p>
                </div>
                <div
                  className={`${styles.ProposalInfo__votesInner} ${styles.marginTop}`}
                >
                  <p>
                    We <span className={styles.red}>don’t want </span>to earn
                    TINC tokens!
                  </p>
                </div>
                <div className={styles.ProposalInfo__voteLengthContainer}>
                  <span className={styles.placeHolder}></span>
                  <span className={`${styles.voteLength1}`}></span>
                </div>
                <div className={styles.voteNumbers}>
                  <p>28,860.13 Votess</p>
                  <p>3.15%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
