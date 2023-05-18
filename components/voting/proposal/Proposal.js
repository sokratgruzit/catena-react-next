// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import DOMPurify from 'dompurify';

// import ChoiceItemRow from '../components/choiceItem/ChoiceItemRow';
// import ChoiceItemResult from '../components/choiceItem/ChoiceItemResult';
// import CountdownItem from '../components/countdownItem/CountdownItem';
// import VotingData from '../components/votingData/VotingData';
// import Button from '../../UI/button/Button';

// import {
//   CloseTag,
//   CommunityTag,
//   CoreTagLight,
//   OpenSvg,
//   SmlArrowSvg,
//   SoonTag,
//   VoteNowTag,
// } from '../../svg/index';

// import useConnect from '../../../hooks/use-connect';
// import { useWindowDimension } from '../../../hooks/useWindowDimension';

// import styles from './Proposal.module.css';

// const votingData = [
//   {
//     id: 0,
//     title: 'Stop Minting more CORE',
//     img: '/images/voting/proposalImg.png',
//     date: 'Ends Mar 6th, 2022 11:15',
//     location: 'Community',
//     activeStatus: 'Vote Now',
//     choices: [
//       {
//         value: 'yes we are happy',
//         id: 0,
//         totalVotes: 1368085.43,
//         percentage: 90.03,
//       },
//       {
//         value: 'no we are not happy at all',
//         id: 1,
//         totalVotes: 70901.43,
//         percentage: 41.03,
//       },
//     ],
//     countdownTo: Date.now() + 100000000,
//     mainText:
//       '<h2>CoreMultiChain Welcomes Tiny World ($TINC) to Syrup Pool!</h2><p><br></p><p>Dear CAKE holders, we’re proud to announce a new Syrup Pool with Tiny World! Tiny World is the 1st idle-style GameFi project where everything is available to trade. Play enjoyable, idle-style games with a global community of gamers and earn a passive income in your spare time.</p><p><br></p><h2>The Syrup Pool:</h2><p>Stake CAKE tokens to earn TINC tokens!</p><ul><li>Total Tokens: 404,100 TINC</li><li>Distribution duration: 30 days</li><li>Start time: Approx. 11AM UTC on April 7th 2022</li><li>Finish time: Approx. 11AM UTC on May 7th 2022</li><li>Token rewards per block: 0.4677 TINC</li></ul><h2>Token rewards per block: 0.4677 TINC</h2><p><br></p><p>100 CORE for the first 57,600 blocks (approx. 48 hours) after the Syrup Pool is launched, then unlimited CORE staking after that.</p><p>The cap is to give everyone an equal opportunity to farm rewards at a high APY at the start of the farm.</p><p><br></p><p><br></p><h2>How do you stake CORE to earn $TINC rewards?</h2><p>Follow this guide to staking in Syrup Pools:</p><p><a href="https://docs.pancakeswap.finance/products/syrup-pool/syrup-pool-guide" rel="noopener noreferrer" target="_blank">https://docs.pancakeswap.finance/products/syrup-pool/syrup-pool-guide</a></p><p><br></p><p><br></p><h2><br></h2>',
//   },
// ];

// const Proposal = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const { isActive, handleWalletModal } = useConnect();
//   const [width, height] = useWindowDimension();

//   const [votingItem, setVotingItem] = useState(votingData[0]);
//   const [activeVoteWindow, setActiveVoteWindow] = useState('cast');

//   const [votingChoice, setVotingChoice] = useState(null);

//   const handleFormSubmit = e => {
//     e.preventDefault();
//     setActiveVoteWindow('vote');
//     console.log('hi');
//   };

//   return (
//     <>
//       <div className={`container ${styles.wrapper}`}>
//         <main className={styles.ProposalInfo}>
//           <section className={styles.proposalSection}>
//             <nav
//               onClick={() => router.push('/voting')}
//               className={styles.backBtn}
//             >
//               <SmlArrowSvg className={styles.arrowSvg} />
//               <p className={styles.blueHover}>Back</p>
//             </nav>
//             <CountdownItem votingTo={votingItem.countdownTo} />
//             <h1 className={styles.title}>{votingItem.title}</h1>
//             <div
//               className={styles.mainBody}
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(votingItem.mainText),
//               }}
//             ></div>
//           </section>
//           <div className={styles.detailsWrapper}>
//             <div className={styles.details}>
//               <div className={styles.gradient}></div>
//               <div className={styles.detailsCont}>
//                 <p>Details</p>
//                 <div className={styles.tagWrapper}>
//                   {votingItem.activeStatus === 'Close' && <CloseTag />}
//                   {votingItem.activeStatus === 'Vote Now' && <VoteNowTag />}
//                   {votingItem.activeStatus === 'Soon' && <SoonTag />}
//                   {votingItem.location === 'Community' && <CommunityTag />}
//                   {votingItem.location === 'Core' && <CoreTagLight />}
//                 </div>
//               </div>
//               <div className={styles.item}>
//                 <p>Identifier</p>
//                 <div className={styles.itemInner}>
//                   <a href='##'>
//                     QmWVfYm3
//                     <OpenSvg />
//                   </a>
//                 </div>
//               </div>
//               <div className={styles.item}>
//                 <p>Creator</p>
//                 <div className={styles.itemInner}>
//                   <a href='##'>
//                     0xC7...061b <OpenSvg />
//                   </a>
//                 </div>
//               </div>
//               <div className={`${styles.item} ${styles.borderBottom}`}>
//                 <p>Snapshot</p>
//                 <div className={styles.itemInner}>
//                   <a href='##'>
//                     16704554 <OpenSvg />
//                   </a>
//                 </div>
//               </div>
//               {width > 1023 && (
//                 <>
//                   {votingItem.activeStatus === 'Close' && <CloseTag />}
//                   {votingItem.activeStatus === 'Vote Now' && <VoteNowTag />}
//                   {votingItem.activeStatus === 'Soon' && <SoonTag />}
//                 </>
//               )}
//               <div className={styles.item}>
//                 <p>Start Date</p>
//                 <p className={styles.dateData}>2022-04-06 14:00</p>
//               </div>
//               <div className={styles.item}>
//                 <p>End Date</p>
//                 <p className={styles.dateData}>2022-04-07 14:00</p>
//               </div>
//             </div>
//             {activeVoteWindow === 'cast' ? (
//               <div className={`${styles.vote}`}>
//                 <h3>Cast Your Vote</h3>
//                 <span className={styles.border}></span>
//                 <form onSubmit={handleFormSubmit} className={styles.form}>
//                   {votingItem?.choices?.map((choice, index) => (
//                     <ChoiceItemRow
//                       key={index}
//                       index={index}
//                       choice={choice}
//                       setVotingChoice={setVotingChoice}
//                     />
//                   ))}
//                   {isActive ? (
//                     <button
//                       className={`btn btnBlue ${styles.voteButton}`}
//                       disabled={votingChoice === null}
//                     >
//                       Vote
//                     </button>
//                   ) : (
//                     <Button
//                       title={'Connect Wallet'}
//                       onClick={() => {
//                         handleWalletModal(true);
//                       }}
//                       type={'blue'}
//                       className={styles.connectWallet}
//                     />
//                   )}

//                   <p
//                     className={styles.seeMore}
//                     onClick={() => setActiveVoteWindow('see result')}
//                   >
//                     See Result
//                   </p>
//                 </form>
//               </div>
//             ) : (
//               <div
//                 className={`${styles.result} ${
//                   activeVoteWindow && styles.resultActive
//                 }`}
//               >
//                 {activeVoteWindow === 'see result' ? (
//                   <div
//                     className={styles.resultHeader}
//                     onClick={() => setActiveVoteWindow('cast')}
//                   >
//                     <SmlArrowSvg />
//                     <h3>Results</h3>
//                   </div>
//                 ) : (
//                   <h3>Current Results</h3>
//                 )}

//                 <span className={styles.border}></span>
//                 <div className={styles.votes}>
//                   {votingItem?.choices?.map((choice, index) => (
//                     <ChoiceItemResult key={index} choice={choice} />
//                   ))}
//                   <p className={styles.votedChoice}>
//                     you have voted for <span>{votingChoice.value}</span>
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//         <VotingData />
//       </div>
//     </>
//   );
// };

// export default Proposal;
