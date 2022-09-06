import React, { useState, useEffect } from 'react';
import Link, { useRouter } from 'next/router';
import DOMPurify from 'dompurify';
import { useSelector } from 'react-redux';

import {
  CloseTag,
  CommunityTag,
  CoreTagLight,
  OpenSvg,
  SmlArrowSvg,
  SoonTag,
  VoteNowTag,
} from '../../../svg/index';

import styles from './Info.module.css';
import Image from 'next/image';
import ChoiceItemRow from '../ChoiceItem/ChoiceItemRow';
import ChoiceItemResult from '../ChoiceItem/ChoiceItemResult';

const votingData = [
  {
    id: 0,
    title: 'Stop Minting more CORE',
    img: '/images/voting/proposalImg.png',
    date: 'Ends Mar 6th, 2022 11:15',
    location: 'Community',
    activeStatus: 'Vote Now',
    choices: ['yes we are happy', 'no we are not happy at all'],
    mainText:
      '<p>lets test this out</p><ol><li>item1</li><li>item 2</li><li>item 3</li></ol><p>all of this will make core great</p>',
  },
  {
    id: 1,
    title: 'test#16',
    img: '/images/voting/proposalImg.png',
    date: 'Ends Mar 4th, 2022 01:15',
    location: 'Core',
    activeStatus: 'Soon',
    choices: ['yes we are happy', 'no we are not happy at all'],
    mainText:
      '<p>lets test this out</p><ol><li>item1</li><li>item 2</li><li>item 3</li></ol><p>all of this will make core great</p>',
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

  const [votingItem, setVotingItem] = useState(votingData[id]);
  const [activeVoteResult, setActiveVoteResult] = useState(false);
  const [votingChoice, setVotingChoice] = useState(null);

  const voteResultHandler = () => {
    setActiveVoteResult(!activeVoteResult);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('hi');
  };

  return (
    <div className='container'>
      <main className={styles.ProposalInfo}>
        <section className={styles.proposalSection}>
          <nav
            onClick={() => router.push('/voting')}
            className={styles.backBtn}
          >
            <SmlArrowSvg className={styles.arrowSvg} />
            <p className={styles.blueHover}>Back</p>
          </nav>
          <h1 className={styles.title}>{votingItem.title}</h1>
          {votingItem.img && (
            <picture>
              <img src={votingItem.img} alt=''></img>
            </picture>
          )}
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(votingItem.mainText),
            }}
          ></div>
        </section>
        <div className={styles.detailsWrapper}>
          <div className={styles.details}>
            <div className={styles.detailsCont}>
              <p className={styles.fontColor}>Details</p>
              <div className={styles.tagWrapper}>
                {votingItem.activeStatus === 'Close' && <CloseTag />}
                {votingItem.activeStatus === 'Vote Now' && <VoteNowTag />}
                {votingItem.activeStatus === 'Soon' && <SoonTag />}
                {votingItem.location === 'Community' && <CommunityTag />}
                {votingItem.location === 'Core' && <CoreTagLight />}
              </div>
            </div>
            <span className={styles.border}></span>
            <div className={styles.item}>
              <p>Identifier</p>
              <div className={`${styles.itemInner} ${styles.hover}`}>
                <a href='##'>
                  QmWVfYm3
                  <OpenSvg />
                </a>
              </div>
            </div>
            <div className={styles.item}>
              <p>Creator</p>
              <div className={`${styles.itemInner} ${styles.hover}`}>
                <a href='##'>
                  0xC7...061b <OpenSvg />
                </a>
              </div>
            </div>
            <div className={styles.item}>
              <p>Snapshot</p>
              <div className={`${styles.itemInner} ${styles.hover}`}>
                <a href='##'>
                  16704554 <OpenSvg />
                </a>
              </div>
            </div>
            <span className={styles.border}></span>
            {votingItem.activeStatus === 'close' && <CloseTag />}
            {votingItem.activeStatus === 'Vote Now' && <VoteNowTag />}
            {votingItem.activeStatus === 'Soon' && <SoonTag />}
            <div className={styles.item}>
              <p>Start Date</p>
              <p className={styles.dateData}>2022-04-06 14:00</p>
            </div>
            <div className={styles.item}>
              <p>End Date</p>
              <p className={styles.dateData}>2022-04-07 14:00</p>
            </div>
          </div>
          <div className={`${styles.vote}`}>
            <h3>Cast Your Vote</h3>
            <span className={styles.border}></span>
            <form onSubmit={handleFormSubmit} className={styles.form}>
              {votingItem?.choices?.map((choice, index) => (
                <ChoiceItemRow
                  key={index}
                  index={index}
                  choice={choice}
                  setVotingChoice={setVotingChoice}
                />
              ))}
              <button className={`btn btnBlue ${styles.voteButton}`}>
                Vote
              </button>
              <div className={styles.seeMore}>
                <p onClick={voteResultHandler}>See Result</p>
              </div>
            </form>
          </div>
          <div
            className={`${styles.result} ${styles.marginTop} ${
              activeVoteResult && styles.resultActive
            }`}
          >
            <h3>Current Results</h3>
            <span className={styles.border}></span>
            <div className={styles.votes}>
              {votingItem?.choices?.map((choice, index) => (
                <ChoiceItemResult key={index} choice={choice} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Info;
