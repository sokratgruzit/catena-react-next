import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import ListItemRow from '../../../UI/listItem/ListItemRow';
import MaruqeeTest from '../../../UI/marquee/MarqueeTest';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';

import styles from './VotingNow.module.css';

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

const VOTING_COUNT_STEP = 5;

const VotingNow = props => {
  const router = useRouter();
  const [subTab, setSubTab] = useState(0);
  const [tab, setTab] = useState(0);
  const [votingCount, setVoutingCount] = useState(5);
  const [filterData, setFilterData] = useState(
    votingData.slice(0, votingCount),
  );

  const showMoreProposalHandler = () => {
    setVoutingCount(votingCount + VOTING_COUNT_STEP);
  };

  const filterHandler = status => {
    let filtered = votingData.filter(item => {
      if (status === item.location || status === item.activeStatus) {
        return item;
      }
      if (status === 'All') {
        return votingData;
      }
    });
    setFilterData(filtered);
  };

  useEffect(() => {
    setFilterData(votingData.slice(0, votingCount));
  }, [votingCount]);

  return (
    <>
      <MaruqeeTest
        label={'voting'}
        direction={'rightToLeft'}
        lineElementsCount={9}
      />
      <div className={` ${styles.votingNow__flex} container `}>
        <div className={styles.votingNow__inner}>
          <div className={styles.votingNow__navigation}>
            <div
              className={`${styles.flex} ${tab === 0 ? styles.active : ''}`}
              onClick={async () => {
                setTab(0);
                filterHandler('Core');
              }}
            >
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.70917 9.22717C6.57969 9.22705 6.45556 9.17552 6.36406 9.08391L4.78824 7.5081C4.69742 7.41619 4.64648 7.29219 4.64648 7.16298C4.64648 7.03377 4.69742 6.90977 4.78824 6.81786C4.97708 6.62903 5.28964 6.62903 5.47848 6.81786L6.70917 8.04856L9.50917 5.24856C9.69801 5.05972 10.0106 5.05972 10.1994 5.24856C10.3882 5.4374 10.3882 5.74996 10.1994 5.93879L7.05429 9.08391C6.96279 9.17552 6.83865 9.22705 6.70917 9.22717V9.22717Z'
                  fill='white'
                />
                <path
                  d='M7.49674 14.1631C7.08651 14.1631 6.67628 14.0263 6.35721 13.7529L5.32837 12.8673C5.22419 12.7761 4.96372 12.6849 4.82698 12.6849H3.70698C3.24414 12.6849 2.80027 12.5011 2.47299 12.1738C2.14572 11.8465 1.96186 11.4027 1.96186 10.9398V9.82634C1.96186 9.6896 1.8707 9.43564 1.77953 9.33146L0.900465 8.29611C0.366512 7.66448 0.366512 6.6682 0.900465 6.03657L1.77953 5.00123C1.8707 4.89704 1.96186 4.64309 1.96186 4.50634V3.38634C1.96186 2.42262 2.74326 1.64123 3.70698 1.64123H4.83349C4.97023 1.64123 5.2307 1.54355 5.33488 1.4589L6.36372 0.573319C7.00186 0.0263418 7.99814 0.0263418 8.63628 0.573319L9.66512 1.4589C9.7693 1.55006 10.0298 1.64123 10.1665 1.64123H11.2735C12.2372 1.64123 13.0186 2.42262 13.0186 3.38634V4.49332C13.0186 4.63006 13.1163 4.89053 13.2074 4.99471L14.093 6.02355C14.64 6.66169 14.64 7.65797 14.093 8.29611L13.2074 9.32495C13.1163 9.42913 13.0186 9.6896 13.0186 9.82634V10.9333C13.0186 11.897 12.2372 12.6784 11.2735 12.6784H10.1665C10.0298 12.6784 9.7693 12.7761 9.66512 12.8608L8.63628 13.7463C8.31721 14.0263 7.90698 14.1631 7.49674 14.1631V14.1631ZM3.70698 2.61797C3.28372 2.61797 2.9386 2.96309 2.9386 3.38634V4.49983C2.9386 4.87099 2.76279 5.34634 2.52186 5.62634L1.64279 6.66169C1.41488 6.92867 1.41488 7.39099 1.64279 7.65797L2.52186 8.69332C2.76279 8.97983 2.9386 9.44867 2.9386 9.81983V10.9333C2.9386 11.3566 3.28372 11.7017 3.70698 11.7017H4.83349C5.21116 11.7017 5.68651 11.8775 5.97302 12.1249L7.00186 13.0105C7.26884 13.2384 7.73767 13.2384 8.00465 13.0105L9.03349 12.1249C9.32 11.884 9.79535 11.7017 10.173 11.7017H11.28C11.7033 11.7017 12.0484 11.3566 12.0484 10.9333V9.82634C12.0484 9.44867 12.2242 8.97332 12.4716 8.68681L13.3572 7.65797C13.5851 7.39099 13.5851 6.92216 13.3572 6.65518L12.4716 5.62634C12.2242 5.33983 12.0484 4.86448 12.0484 4.48681V3.38634C12.0484 2.96309 11.7033 2.61797 11.28 2.61797H10.173C9.79535 2.61797 9.32 2.44216 9.03349 2.19471L8.00465 1.30913C7.73767 1.08123 7.26884 1.08123 7.00186 1.30913L5.97302 2.20123C5.68651 2.44216 5.20465 2.61797 4.83349 2.61797H3.70698Z'
                  fill='white'
                />
              </svg>
              <span className='font_13'>Core</span>
            </div>

            <div
              className={`${styles.flex} ${tab === 1 ? styles.active : ''}`}
              onClick={async () => {
                setTab(1);
                filterHandler('Community');
              }}
            >
              <svg
                width='15'
                height='16'
                viewBox='0 0 15 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.63356 7.97287H5.57927C5.53884 7.96607 5.49756 7.96607 5.45712 7.97287C3.48911 7.91179 2.00293 6.36453 2.00293 4.4576C2.00293 2.51674 3.58412 0.935547 5.52499 0.935547C7.46585 0.935547 9.04704 2.51674 9.04704 4.4576C9.04025 6.36453 7.54728 7.91179 5.65392 7.97287H5.63356ZM5.52499 1.95348C4.8614 1.95527 4.22551 2.21967 3.75628 2.6889C3.28706 3.15813 3.02266 3.79402 3.02086 4.4576C3.02086 5.81485 4.07952 6.90743 5.42998 6.95494C5.4707 6.94815 5.55892 6.94815 5.64714 6.95494C6.97724 6.89386 8.02232 5.80128 8.0291 4.4576C8.02731 3.79402 7.76291 3.15813 7.29369 2.6889C6.82446 2.21967 6.18857 1.95527 5.52499 1.95348Z'
                  fill='white'
                />
                <path
                  d='M10.6416 8.06127C10.6213 8.06127 10.6009 8.06127 10.5805 8.05448C10.3023 8.08163 10.0173 7.88482 9.99014 7.60659C9.963 7.32835 10.1327 7.07726 10.4109 7.04333C10.4923 7.03655 10.5805 7.03655 10.6552 7.03655C11.646 6.98226 12.4196 6.16791 12.4196 5.17033C12.4196 4.13882 11.5849 3.30412 10.5534 3.30412C10.4869 3.30502 10.4209 3.29269 10.3591 3.26786C10.2974 3.24302 10.2413 3.20617 10.1939 3.15945C10.1466 3.11273 10.109 3.05707 10.0833 2.99569C10.0576 2.93432 10.0444 2.86846 10.0444 2.80194C10.0444 2.5237 10.2752 2.29297 10.5534 2.29297C11.3178 2.29476 12.0503 2.5992 12.5908 3.1397C13.1313 3.68019 13.4358 4.41274 13.4375 5.17712C13.4375 6.73795 12.216 8.00019 10.662 8.06127H10.6416Z'
                  fill='white'
                />
                <path
                  d='M5.64011 15.3904C4.31001 15.3904 2.97312 15.0511 1.96197 14.3725C1.01868 13.7481 0.50293 12.8931 0.50293 11.9634C0.50293 11.0336 1.01868 10.1718 1.96197 9.54068C3.99784 8.19022 7.29595 8.19022 9.31825 9.54068C10.2547 10.165 10.7773 11.0201 10.7773 11.9498C10.7773 12.8795 10.2615 13.7414 9.31825 14.3725C8.30031 15.0511 6.97021 15.3904 5.64011 15.3904ZM2.52523 10.3957C1.87375 10.8301 1.52086 11.3865 1.52086 11.9701C1.52086 12.547 1.88054 13.1034 2.52523 13.531C4.215 14.6643 7.06522 14.6643 8.75499 13.531C9.40647 13.0967 9.75935 12.5402 9.75935 11.9566C9.75935 11.3797 9.39968 10.8233 8.75499 10.3957C7.06522 9.26923 4.215 9.26923 2.52523 10.3957Z'
                  fill='white'
                />
                <path
                  d='M11.8627 14.1687C11.6252 14.1687 11.4148 14.0058 11.3673 13.7615C11.3411 13.6294 11.3675 13.4922 11.4411 13.3794C11.5146 13.2665 11.6294 13.1869 11.7609 13.1576C12.1885 13.0694 12.5821 12.8997 12.8874 12.6622C13.2743 12.3704 13.4846 12.0039 13.4846 11.6171C13.4846 11.2303 13.2743 10.8638 12.8942 10.5788C12.5956 10.3481 12.2224 10.1852 11.7813 10.0834C11.6493 10.0533 11.5345 9.97215 11.462 9.85773C11.3896 9.74332 11.3653 9.60489 11.3945 9.47265C11.4555 9.2012 11.727 9.02476 12.0052 9.08583C12.5888 9.21477 13.0978 9.4455 13.5118 9.76445C14.1429 10.2395 14.5026 10.9113 14.5026 11.6171C14.5026 12.3229 14.1361 12.9947 13.505 13.4765C13.0842 13.8023 12.5549 14.0398 11.9713 14.1551C11.9306 14.1687 11.8967 14.1687 11.8627 14.1687Z'
                  fill='white'
                />
              </svg>
              <span className='font_13'>Community</span>
            </div>
            <div
              className={`${styles.flex} ${tab === 2 ? styles.active : ''}`}
              onClick={async () => {
                setTab(2);
                filterHandler('All');
              }}
            >
              <span className='font_13'>All</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles.votingNow__mainContainer} ${styles.container}`}
        >
          <CornerDecor />
          <div className={styles.votingNow__head}>
            <p
              className={subTab === 0 ? styles.focus : ''}
              onClick={async () => {
                setSubTab(0);
                filterHandler('Vote Now');
              }}
            >
              Vote Now
            </p>
            <p
              className={subTab === 1 ? styles.focus : ''}
              onClick={async () => {
                setSubTab(1);
                filterHandler('Soon');
              }}
            >
              Soon
            </p>
            <p
              className={subTab === 2 ? styles.focus : ''}
              onClick={async () => {
                setSubTab(2);
                filterHandler('Close');
              }}
            >
              Close
            </p>
          </div>
          <div
            style={{
              height: 'auto',
              cursor: 'pointer',
            }}
          >
            {filterData.map(item => {
              return (
                <div
                  onClick={() => router.push(`/voting/${item.id}`)}
                  key={item.id + 'voting'}
                >
                  <ListItemRow data={item} type={'voting'} />
                </div>
              );
            })}
          </div>
          <div className={styles.seeMore}>
            <div onClick={showMoreProposalHandler}>
              <p>See More </p>
              <svg
                className={styles.seeMoreSvg}
                width='8'
                height='5'
                viewBox='0 0 8 5'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.88574 0.921387L4.41605 3.39108C4.12438 3.68275 3.64711 3.68275 3.35544 3.39108L0.885742 0.921387'
                  stroke='#0500FF'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VotingNow;
